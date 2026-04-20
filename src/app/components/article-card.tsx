import { Article } from '../types';
import { Heart, MessageCircle, Lock, Bookmark } from 'lucide-react';
import { LevelBadge } from './level-badge';
import { DawhoBadge } from './dawho-badge';
import { ProfessionalContributorBadgeIcon } from './professional-contributor-badge';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { CURRENT_USER } from '../mock-data';
import { canAccessArticle, getLevelName } from '../utils/level-check';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(article.likes);
  const [isLiked, setIsLiked] = useState(false);

  // 檢查用戶是否有權限查看此文章
  const hasAccess = canAccessArticle(CURRENT_USER.level, article.minLevel);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasAccess) return; // 沒權限不能收藏
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasAccess) return; // 沒權限不能按讚
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleCardClick = () => {
    if (!hasAccess) {
      // 沒權限時不導航，可以顯示提示
      return;
    }
    navigate(`/article/${article.id}`);
  };

  const handleAuthorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/user/${article.author.id}`);
  };
  
  return (
    <Card 
      onClick={handleCardClick}
      className={`overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-primary/20 group bg-card relative ${
        hasAccess ? 'cursor-pointer hover:-translate-y-1' : 'cursor-not-allowed'
      }`}
      style={{ 
        boxShadow: '0 2px 8px rgba(217, 119, 87, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* 等級不足的鎖定遮罩 */}
      {!hasAccess && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
          <div 
            className="bg-white rounded-3xl p-6 border-4 border-primary/30 max-w-xs mx-4 text-center"
            style={{ 
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              transform: 'rotate(-1deg)'
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#b85f40] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">等級不足</h3>
            <p className="text-sm text-muted-foreground mb-4">
              此文章需要 <span className="font-bold text-primary">{getLevelName(article.minLevel)}</span> 等級以上才能閱讀
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>你的等級：</span>
              <LevelBadge level={CURRENT_USER.level} size="sm" />
            </div>
          </div>
        </div>
      )}

      {/* 手帳風格的裝飾角 */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-r-[24px] border-t-primary/10 border-r-transparent"></div>
      </div>
      
      {article.coverImage && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/30 to-accent/20">
          <img
            src={article.coverImage}
            alt={article.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hasAccess ? 'group-hover:scale-105' : 'blur-sm'
            }`}
          />
          {/* 手繪風格邊框 */}
          <div className="absolute inset-0 border-b-2 border-primary/10"></div>
          
          {/* 收藏按鈕 */}
          <button
            onClick={handleBookmark}
            className={`absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isBookmarked 
                ? 'bg-primary text-white shadow-lg scale-110' 
                : 'bg-white/90 text-primary hover:bg-white hover:scale-105'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          
          {article.isPremium && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-gradient-to-r from-primary to-[#b85f40] text-white border-2 border-white/50 shadow-lg backdrop-blur-sm rounded-full px-3 py-1">
                <Lock className="w-3 h-3 mr-1" />
                付費內容
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <div className="p-5">
        {/* 手帳標題樣式 */}
        <div className="flex items-start gap-2 mb-3">
          <div className="w-1 h-5 bg-primary rounded-full mt-0.5"></div>
          <h3 className="font-bold line-clamp-2 group-hover:text-primary transition-colors leading-snug flex-1">
            {article.title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed pl-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-3 mb-4 pl-3">
          {article.author.avatar && (
            <img
              src={article.author.avatar}
              alt={article.author.name}
              onClick={handleAuthorClick}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20 hover:ring-primary/40 transition-all cursor-pointer"
            />
          )}
          <div className="flex-1 min-w-0">
            <p 
              onClick={handleAuthorClick}
              className="text-sm font-medium truncate text-foreground/90 hover:text-primary transition-colors cursor-pointer"
            >
              {article.author.name}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <LevelBadge level={article.author.level} size="sm" />
              {article.helpfulCount && article.helpfulCount >= 10 && (
                <ProfessionalContributorBadgeIcon helpfulCount={article.helpfulCount} />
              )}
            </div>
          </div>
          {/* 付費解鎖金鑰圖示 - 不顯示價格 */}
          {article.isPremium && (
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#f4c430]/30 to-primary/20 border-2 border-[#f4c430]/40">
              <Lock className="w-4 h-4 text-[#d4af37]" />
            </div>
          )}
        </div>
        
        {/* DAWHO 驗證標章 */}
        <div className="mb-4 pl-3">
          <DawhoBadge user={article.author} stockSymbol={article.stockSymbol} size="sm" />
        </div>
        
        {/* 標籤 - 手帳貼紙風格 */}
        <div className="flex flex-wrap gap-2 mb-4 pl-3">
          {article.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-gradient-to-r from-secondary to-accent/50 border border-primary/20 rounded-full px-3 py-1"
              style={{
                transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`
              }}
            >
              #{tag}
            </Badge>
          ))}
        </div>
        
        {/* 虛線分隔 - 手帳風格 */}
        <div className="border-t border-dashed border-primary/20 pt-3 pl-3">
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 hover:text-primary transition-colors ${
                isLiked ? 'text-primary' : ''
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{likes}</span>
            </button>
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">{article.comments}</span>
            </div>
            <span className="ml-auto text-xs text-muted-foreground/80">
              {new Date(article.createdAt).toLocaleDateString('zh-TW', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}