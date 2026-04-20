import { useState } from 'react';
import { TopicCategory } from '../types';
import { TopicTabs } from '../components/topic-tabs';
import { ArticleCard } from '../components/article-card';
import { QuestionCard } from '../components/question-card';
import { QuickTrade } from '../components/quick-trade';
import { TopBar, BottomNav } from '../components/navigation';
import { MOCK_ARTICLES, MOCK_QUESTIONS } from '../mock-data';
import { MessageSquare, FileText, TrendingUp, ExternalLink, Shield, Smartphone, Newspaper, FileBarChart, TrendingUpIcon } from 'lucide-react';

export default function Community() {
  const [selectedTopic, setSelectedTopic] = useState<TopicCategory>('all');
  const [contentType, setContentType] = useState<'articles' | 'questions'>('articles');

  // 根據主題過濾內容
  const filteredArticles = selectedTopic === 'all' 
    ? MOCK_ARTICLES 
    : MOCK_ARTICLES.filter(article => article.category === selectedTopic);

  return (
    <div className="min-h-screen bg-background">
      {/* 頂部導航欄 */}
      <TopBar />
      
      {/* 主題版區標籤 */}
      <TopicTabs selectedTopic={selectedTopic} onTopicChange={setSelectedTopic} />

      <div className="max-w-screen-xl mx-auto px-4 py-6 pb-20">{/* 底部留空給BottomNav */}

        {/* 內容類型切換 */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setContentType('articles')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all border-2 ${
              contentType === 'articles'
                ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent shadow-md'
                : 'bg-secondary/40 border-primary/20 hover:border-primary/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>深度文章</span>
          </button>
          <button
            onClick={() => setContentType('questions')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all border-2 ${
              contentType === 'questions'
                ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent shadow-md'
                : 'bg-secondary/40 border-primary/20 hover:border-primary/40'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>社群問答</span>
          </button>
        </div>

        {/* 主題說明卡片 */}
        {selectedTopic !== 'all' && (
          <div className="bg-gradient-to-br from-secondary/50 to-accent/30 rounded-2xl p-5 mb-6 border-2 border-primary/20 relative overflow-hidden"
            style={{ boxShadow: '0 2px 8px rgba(217, 119, 87, 0.08)' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-[#b85f40]/10 flex items-center justify-center text-3xl border-2 border-primary/20">
                {/* Topic icon will be shown here */}
                📊
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg mb-1">
                  {selectedTopic === 'taiwan_stock' && '台股討論區'}
                  {selectedTopic === 'us_stock' && '美股討論區'}
                  {selectedTopic === 'etf' && 'ETF投資討論'}
                  {selectedTopic === 'futures' && '期貨策略交流'}
                  {selectedTopic === 'options' && '選擇權專區'}
                  {selectedTopic === 'crypto' && '加密貨幣社群'}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  在這裡分享你的投資經驗、提出問題、學習他人的策略。記得遵守社群規範，理性討論，互相尊重。
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* 主要內容區 */}
          <div className="lg:col-span-2 space-y-4">
            {contentType === 'articles' ? (
              <>
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
                {filteredArticles.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>此主題尚無文章，成為第一個發文者吧！</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {MOCK_QUESTIONS.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </>
            )}
          </div>

          {/* 側邊欄 */}
          <div className="space-y-6">
            {/* 熱門標的 - 一鍵下單 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-bold">熱門標的</h3>
              </div>
              <div className="space-y-4">
                <QuickTrade 
                  stockSymbol="2330" 
                  stockName="台積電" 
                  currentPrice={685.0}
                  change={2.34}
                />
                <QuickTrade 
                  stockSymbol="AAPL" 
                  stockName="Apple Inc." 
                  currentPrice={178.52}
                  change={-0.87}
                />
              </div>
            </div>

            {/* 永豐金融服務 - 快速連結 */}
            <div 
              className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/15 rounded-3xl p-5 border-2 border-primary/25 relative overflow-hidden"
              style={{ 
                boxShadow: '0 4px 16px rgba(217, 119, 87, 0.12)',
                transform: 'rotate(-0.5deg)'
              }}
            >
              {/* 裝飾元素 */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
              
              {/* 紙膠帶效果 */}
              <div 
                className="absolute -left-3 top-10 w-20 h-10 bg-primary/15 blur-sm"
                style={{ transform: 'rotate(-45deg)' }}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  <h3 className="font-bold text-lg">永豐金融服務</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 pl-3">
                  快速連結到永豐金控的專業投資平台
                </p>

                {/* 大戶DAWHO連結 */}
                <a
                  href="https://www.sinotrade.com.tw/newweb/promotion/event/dawho/DAWHO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3"
                >
                  <div 
                    className="bg-white rounded-xl p-4 border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg transition-all group"
                    style={{ transform: 'rotate(0.3deg)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-[#b85f40]/10 flex items-center justify-center border-2 border-primary/20 group-hover:scale-110 transition-transform">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-0.5 flex items-center gap-1.5">
                          大戶DAWHO
                          <ExternalLink className="w-3.5 h-3.5 text-primary" />
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          專業投資交易平台
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* 永豐行動銀行連結 */}
                <a
                  href="https://mbank.sinopac.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div 
                    className="bg-white rounded-xl p-4 border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg transition-all group"
                    style={{ transform: 'rotate(-0.3deg)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border-2 border-blue-500/20 group-hover:scale-110 transition-transform">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-0.5 flex items-center gap-1.5">
                          永豐行動銀行
                          <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          便捷的行動金融服務
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                {/* 提示卡片 */}
                <div 
                  className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"
                  style={{ transform: 'rotate(0.2deg)' }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-base">💡</span>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      整合永豐金控服務，讓投資討論更便捷！
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 永豐資源中心 */}
            <div 
              className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-5 border-2 border-green-200 relative overflow-hidden"
              style={{ 
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.1)',
                transform: 'rotate(0.5deg)'
              }}
            >
              {/* 裝飾元素 */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-300/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-teal-300/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-green-600 rounded-full"></div>
                  <h3 className="font-bold text-lg text-green-900">永豐資源中心</h3>
                </div>
                
                <p className="text-sm text-green-700/80 mb-4 pl-3">
                  永豐內部專業分析與市場觀點
                </p>

                <div className="space-y-3">
                  {/* 永豐新聞 */}
                  <a
                    href="https://www.sinopac.com/news/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div 
                      className="bg-white rounded-xl p-3.5 border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
                      style={{ transform: 'rotate(-0.2deg)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/10 flex items-center justify-center border border-green-300/50 group-hover:scale-110 transition-transform">
                          <Newspaper className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm mb-0.5 flex items-center gap-1.5 text-green-900">
                            永豐內部新聞
                            <ExternalLink className="w-3 h-3 text-green-600" />
                          </h4>
                          <p className="text-xs text-green-700/70">
                            最新市場動態與公告
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* 券商研究報告 */}
                  <a
                    href="https://www.sinotrade.com.tw/newweb/Report/DailyReport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div 
                      className="bg-white rounded-xl p-3.5 border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
                      style={{ transform: 'rotate(0.2deg)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-600/10 flex items-center justify-center border border-blue-300/50 group-hover:scale-110 transition-transform">
                          <FileBarChart className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm mb-0.5 flex items-center gap-1.5 text-green-900">
                            券商研究報告
                            <ExternalLink className="w-3 h-3 text-blue-600" />
                          </h4>
                          <p className="text-xs text-green-700/70">
                            專業分析師深度研究
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* 總經分析 */}
                  <a
                    href="https://www.sinotrade.com.tw/newweb/Report/MacroReport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div 
                      className="bg-white rounded-xl p-3.5 border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
                      style={{ transform: 'rotate(-0.1deg)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-600/10 flex items-center justify-center border border-purple-300/50 group-hover:scale-110 transition-transform">
                          <TrendingUpIcon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm mb-0.5 flex items-center gap-1.5 text-green-900">
                            總體經濟分析
                            <ExternalLink className="w-3 h-3 text-purple-600" />
                          </h4>
                          <p className="text-xs text-green-700/70">
                            宏觀經濟趨勢解讀
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* 提示卡片 */}
                <div 
                  className="mt-4 p-3 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300"
                  style={{ transform: 'rotate(0.15deg)' }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-base">📚</span>
                    <p className="text-xs text-green-800 leading-relaxed">
                      定期更新的專業內容，助你掌握市場脈動！
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 社群規範提示 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-200 relative overflow-hidden"
              style={{ boxShadow: '0 2px 8px rgba(59, 130, 246, 0.08)' }}
            >
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-lg">📋</span>
                社群規範
              </h4>
              <ul className="space-y-2 text-sm text-blue-900/80 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>禁止保證報酬的言論</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>必須揭露投資風險</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>尊重不同投資觀點</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>禁止情緒性喊單</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 底部導航欄 */}
      <BottomNav />
    </div>
  );
}