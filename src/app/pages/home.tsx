import { useState } from 'react';
import { TopBar, BottomNav } from '../components/navigation';
import { ArticleCard } from '../components/article-card';
import { QuestionCard } from '../components/question-card';
import { LevelProgressBar } from '../components/level-progress-bar';
import { WelcomeBanner } from '../components/welcome-banner';
import { MOCK_ARTICLES, MOCK_QUESTIONS, CURRENT_USER, canAccessContent } from '../mock-data';
import { Send, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Home() {
  const [activeTab, setActiveTab] = useState<'articles' | 'questions'>('articles');
  const [questionInput, setQuestionInput] = useState('');
  const [showWelcome, setShowWelcome] = useState(
    CURRENT_USER.level === 'observer' && CURRENT_USER.levelPoints < 10
  );
  const [showOnlyAccessible, setShowOnlyAccessible] = useState(false);
  
  const handleQuickQuestion = () => {
    if (questionInput.trim()) {
      // In real app, this would post the question
      alert(`發問成功：${questionInput}`);
      setQuestionInput('');
    }
  };
  
  // Filter articles based on user's access level
  const filteredArticles = MOCK_ARTICLES.filter(article => {
    if (showOnlyAccessible) {
      return canAccessContent(CURRENT_USER.level, article.minLevel);
    }
    return true;
  });
  
  // Count accessible vs total articles
  const accessibleCount = MOCK_ARTICLES.filter(article => 
    canAccessContent(CURRENT_USER.level, article.minLevel)
  ).length;
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopBar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Welcome Banner for new users */}
        {showWelcome && (
          <div className="mb-6">
            <WelcomeBanner />
            <button
              onClick={() => setShowWelcome(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto block"
            >
              不再顯示
            </button>
          </div>
        )}
        
        {/* Level Progress */}
        <div className="mb-6">
          <LevelProgressBar />
        </div>
        
        {/* Quick Question Input */}
        <div className="mb-6">
          <div className="bg-card rounded-2xl border border-border p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="一句話快速發問..."
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleQuickQuestion()}
                className="flex-1 bg-transparent border-none outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={handleQuickQuestion}
                disabled={!questionInput.trim()}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-card rounded-2xl p-1 border border-border">
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex-1 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'articles'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            精選文章
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex-1 py-2.5 rounded-xl font-medium transition-all ${
              activeTab === 'questions'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            社群提問
          </button>
        </div>
        
        {/* Filter Bar - Only show on articles tab */}
        {activeTab === 'articles' && (
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                顯示 {filteredArticles.length} / {MOCK_ARTICLES.length} 篇文章
              </span>
              {!showOnlyAccessible && (
                <span className="text-xs text-muted-foreground">
                  （{accessibleCount} 篇可閱讀）
                </span>
              )}
            </div>
            <Button
              variant={showOnlyAccessible ? "default" : "outline"}
              size="sm"
              onClick={() => setShowOnlyAccessible(!showOnlyAccessible)}
              className="text-xs"
            >
              {showOnlyAccessible ? '顯示全部' : '只顯示可閱讀'}
            </Button>
          </div>
        )}
        
        {/* Content */}
        {activeTab === 'articles' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {MOCK_QUESTIONS.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  );
}