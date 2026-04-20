import { useParams, useNavigate } from 'react-router';
import { TopBar, BottomNav } from '../components/navigation';
import { CommentSection } from '../components/comment-section';
import { MOCK_ARTICLES, CURRENT_USER, canAccessContent } from '../mock-data';
import { LevelBadge } from '../components/level-badge';
import { ProfessionalContributorBadge } from '../components/professional-contributor-badge';
import { ArticleFooterDisclaimer } from '../components/investment-disclaimer';
import { ArrowLeft, Heart, MessageCircle, Share2, Bookmark, Lock, ShoppingCart, Coins } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

export function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find(a => a.id === id);
  const [hasUnlocked, setHasUnlocked] = useState(false);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>文章不存在</p>
      </div>
    );
  }
  
  const canAccess = canAccessContent(CURRENT_USER.level, article.minLevel);
  const needsPayment = article.isPremium && !hasUnlocked;
  const canAfford = CURRENT_USER.beeCoin >= (article.beeCoinPrice || 0);
  
  const handleUnlock = () => {
    if (canAfford && article.beeCoinPrice) {
      // In real app, this would deduct beeCoin and unlock the article
      setHasUnlocked(true);
      alert(`已使用 ${article.beeCoinPrice} 豐 Bee 解鎖文章`);
    }
  };
  
  const handleQuickOrder = () => {
    alert('一鍵下單功能：根據文章建議快速下單！');
  };
  
  // Mock full article content - split into free and premium parts
  const freeContent = [
    { type: 'text', content: article.excerpt },
    { type: 'text', content: '近年來，台灣科技產業在全球供應鏈中扮演著越來越重要的角色。特別是在AI和半導體領域，我們看到了前所未有的發展機遇。' },
    { type: 'text', content: '以台積電為例，作為全球最先進的晶圓代工廠，其技術優勢持續擴大。從5nm到3nm製程的演進，不僅鞏固了技術領先地位，更為未來的2nm和更先進製程奠定了基礎。' },
  ];
  
  const premiumContent = [
    { type: 'heading', content: '深度分析：投資策略建議' },
    { type: 'text', content: '在當前的市場環境下，投資者應該採取更加謹慎而精準的策略。以下是我經過深入研究後的具體建議：' },
    { type: 'list', items: [
      '建議一：分散投資風險 - 不要將所有資金投入單一標的，建議配置30%台股、40%美股、20%債券、10%現金',
      '建議二：長期持有優質資產 - 選擇有護城河的龍頭企業，如台積電、聯發科等，持有期建議3-5年',
      '建議三：定期檢視投資組合 - 每季度評估一次，根據產業趨勢和公司營運狀況調整持股比例',
      '建議四：關注產業趨勢 - AI、電動車、5G通訊等新興科技領域值得長期佈局',
    ]},
    { type: 'heading', content: '技術面分析' },
    { type: 'text', content: '從技術指標來看，目前大盤處於相對健康的上升趨勢中。RSI指標維持在50-70之間，MACD呈現多頭排列，均線系統也保持多頭排列狀態。' },
    { type: 'text', content: '短期支撐位在17,500點，壓力位在18,500點。建議投資者在回檔至支撐位附近時分批建倉，待突破壓力位後可適度加碼。' },
    { type: 'heading', content: '基本面觀察重點' },
    { type: 'text', content: '未來三個月需要密切關注的關鍵指標包括：美國聯準會的利率政策、中國經濟復甦狀況、台灣出口數據，以及主要科技公司的財報表現。' },
  ];
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopBar />
      
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Cover Image */}
        {article.coverImage && (
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-6">
            <ImageWithFallback
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Article Header */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
          
          {/* Author Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-medium">{article.author.name}</span>
                  <LevelBadge level={article.author.level} size="sm" />
                  {article.helpfulCount && article.helpfulCount >= 10 && (
                    <ProfessionalContributorBadge helpfulCount={article.helpfulCount} size="sm" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(article.createdAt).toLocaleDateString('zh-TW', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
            
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              追蹤
            </button>
          </div>
          
          {/* Engagement */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
              <span>{article.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{article.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Article Content */}
        {canAccess ? (
          <>
            <div className="bg-card rounded-2xl border border-border p-6 mb-6">
              {/* Free Content - Always Visible */}
              <div className="prose prose-slate max-w-none space-y-4">
                {freeContent.map((section, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                ))}
              </div>
              
              {/* Premium Content - Locked or Unlocked */}
              {needsPayment ? (
                <div className="relative mt-8">
                  {/* Blurred Premium Content Preview */}
                  <div className="blur-sm select-none pointer-events-none opacity-50">
                    <h2 className="text-xl font-semibold mb-3">深度分析：投資策略建議</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      在當前的市場環境下，投資者應該採取更加謹慎而精準的策略...
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>建議一：分散投資風險</li>
                      <li>建議二：長期持有優質資產</li>
                      <li>建議三：定期檢視投資組合</li>
                    </ul>
                  </div>
                  
                  {/* Unlock Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-background/80 to-background">
                    <div className="bg-card border border-border rounded-2xl p-8 text-center max-w-md shadow-lg">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">需要解鎖金鑰</h3>
                      <p className="text-muted-foreground mb-2">
                        此為付費內容，請使用<span className="font-semibold text-primary">解鎖金鑰</span>查看完整內容
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">
                        包含深度分析、具體投資建議和技術面解析
                      </p>
                      
                      <div className="space-y-3">
                        <Link to="/shop">
                          <Button
                            className="w-full py-6 text-base"
                            size="lg"
                          >
                            <Lock className="w-5 h-5 mr-2" />
                            前往商城取得解鎖金鑰
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="prose prose-slate max-w-none space-y-6 mt-8 pt-6 border-t border-border">
                  {premiumContent.map((section, index) => {
                    if (section.type === 'heading') {
                      return (
                        <h2 key={index} className="text-xl font-semibold">
                          {section.content}
                        </h2>
                      );
                    } else if (section.type === 'list') {
                      return (
                        <ul key={index} className="space-y-3">
                          {section.items?.map((item, i) => (
                            <li key={i} className="text-muted-foreground leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    } else {
                      return (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      );
                    }
                  })}
                </div>
              )}
              
              {/* 免責聲明 - 每篇文章底部 */}
              <ArticleFooterDisclaimer />
            </div>
            
            {/* Quick Order Button for L3+ */}
            {!needsPayment && (CURRENT_USER.level === 'navigator' || 
              CURRENT_USER.level === 'grower' || 
              CURRENT_USER.level === 'leader') && (
              <button
                onClick={handleQuickOrder}
                className="w-full py-4 bg-gradient-to-r from-primary to-[#b85f40] text-white rounded-2xl font-semibold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-6"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>一鍵下單</span>
              </button>
            )}
            
            {/* Comments Section - Only show if unlocked or free */}
            {!needsPayment && <CommentSection />}
          </>
        ) : (
          <div className="bg-card rounded-2xl border border-border p-12 text-center">
            <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">需要更高等級</h3>
            <p className="text-muted-foreground">
              此文章需要 {article.minLevel} 等級才能閱讀
            </p>
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  );
}