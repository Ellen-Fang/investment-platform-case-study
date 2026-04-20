import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { TopBar, BottomNav } from '../components/navigation';
import { LevelBadge } from '../components/level-badge';
import { DawhoBadge } from '../components/dawho-badge';
import { ArticleCard } from '../components/article-card';
import { QuestionCard } from '../components/question-card';
import { EditProfileModal } from '../components/edit-profile-modal';
import { MOCK_ARTICLES, MOCK_QUESTIONS, CURRENT_USER } from '../mock-data';
import { User } from '../types';
import { 
  UserPlus, 
  UserCheck, 
  FileText, 
  MessageSquare, 
  Heart, 
  Users, 
  Calendar,
  TrendingUp,
  Award,
  Bookmark,
  Settings
} from 'lucide-react';

export default function UserProfile() {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState<'articles' | 'questions' | 'bookmarks'>('articles');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileUser, setProfileUser] = useState<User>(() => {
    // 模擬從後端獲取用戶資料
    if (userId === CURRENT_USER.id) {
      return CURRENT_USER;
    }
    return {
      id: 'author-1',
      name: '投資達人王大華',
      level: 'grower',
      beeCoin: 5000,
      joinedDate: '2024-06-01',
      avatar: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?w=200&h=200&fit=crop',
      dawhoVerified: true,
      investmentYears: '5年以上',
      hasHolding: ['2330', '2454', '0050'],
      beeCoinMultiplier: 1.7,
      bio: '專注於台股與美股投資分析，擅長技術分析與基本面研究。分享實戰經驗，希望能幫助更多投資新手找到適合自己的投資方式。',
    };
  });

  const isOwnProfile = userId === CURRENT_USER.id;

  // 獲取該用戶的文章
  const userArticles = MOCK_ARTICLES.filter(article => article.author.id === profileUser.id);
  const userQuestions = MOCK_QUESTIONS.filter(q => q.author.id === profileUser.id);

  // 統計數據
  const stats = {
    articles: userArticles.length,
    followers: 1234,
    totalLikes: userArticles.reduce((sum, article) => sum + article.likes, 0),
    totalViews: userArticles.reduce((sum, article) => sum + (article.views || 0), 0),
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const handleSaveProfile = (updatedUser: Partial<User>) => {
    setProfileUser(prev => ({ ...prev, ...updatedUser }));
    // 在真實應用中，這裡會調用 API 更新後端數據
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />

      <div className="max-w-screen-xl mx-auto px-4 py-6 pb-20">
        {/* 個人資料卡片 - 手帳風格 */}
        <div 
          className="bg-card rounded-3xl border-2 border-primary/20 p-6 mb-6 relative overflow-hidden"
          style={{
            boxShadow: '0 4px 20px rgba(217, 119, 87, 0.1)',
            transform: 'rotate(-0.5deg)',
          }}
        >
          {/* 手帳風格裝飾 */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-primary/10 border-r-transparent"></div>
          </div>
          
          {/* 紙膠帶效果 */}
          <div 
            className="absolute -left-2 top-12 w-16 h-8 bg-primary/30 blur-sm"
            style={{ transform: 'rotate(-45deg)' }}
          ></div>

          <div className="relative">
            {/* 頂部：頭像和基本資訊 */}
            <div className="flex items-start gap-5 mb-6">
              {/* 頭像 - 拍立得風格 */}
              <div className="relative">
                <div 
                  className="bg-white p-2 rounded-2xl border-2 border-primary/30"
                  style={{ 
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transform: 'rotate(2deg)',
                  }}
                >
                  <img
                    src={profileUser.avatar}
                    alt={profileUser.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                </div>
                {/* 圖釘效果 */}
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-500 border-2 border-white shadow-md"></div>
              </div>

              {/* 基本資訊 */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      {profileUser.name}
                      {profileUser.dawhoVerified && (
                        <span className="text-blue-500 text-xl">🛡️</span>
                      )}
                    </h1>
                    <LevelBadge level={profileUser.level} size="md" />
                  </div>

                  {/* 編輯按鈕（自己的專頁）或追蹤按鈕（他人專頁） */}
                  {isOwnProfile ? (
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary/40 bg-gradient-to-r from-secondary/40 to-accent/30 hover:border-primary/60 hover:shadow-lg font-medium transition-all"
                      style={{ transform: 'rotate(-1deg)' }}
                    >
                      <Settings className="w-4 h-4 text-primary" />
                      <span className="text-primary">編輯個人檔案</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleFollowToggle}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 font-medium transition-all ${
                        isFollowing
                          ? 'bg-white border-primary/40 text-primary hover:bg-primary/5'
                          : 'bg-gradient-to-r from-primary to-[#b85f40] border-transparent text-white hover:shadow-lg'
                      }`}
                      style={{ transform: 'rotate(-1deg)' }}
                    >
                      {isFollowing ? (
                        <>
                          <UserCheck className="w-4 h-4" />
                          <span>已追蹤</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          <span>追蹤</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* DAWHO 驗證標章 */}
                {profileUser.dawhoVerified && (
                  <div className="mt-3">
                    <DawhoBadge user={profileUser} size="md" />
                  </div>
                )}

                {/* 加入日期 */}
                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>加入於 {new Date(profileUser.joinedDate).toLocaleDateString('zh-TW')}</span>
                </div>
              </div>
            </div>

            {/* 統計數據 - 手寫標籤風格 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div 
                className="bg-gradient-to-br from-secondary/40 to-accent/30 rounded-2xl p-4 border-2 border-primary/15"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">發文數</span>
                </div>
                <p className="text-2xl font-bold text-primary">{stats.articles}</p>
              </div>

              <div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-200"
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-muted-foreground">粉絲數</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">{stats.followers.toLocaleString()}</p>
              </div>

              <div 
                className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 border-2 border-pink-200"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-pink-600" />
                  <span className="text-xs text-muted-foreground">獲得讚數</span>
                </div>
                <p className="text-2xl font-bold text-pink-600">{stats.totalLikes.toLocaleString()}</p>
              </div>

              <div 
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border-2 border-green-200"
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-muted-foreground">總瀏覽</span>
                </div>
                <p className="text-2xl font-bold text-green-600">{stats.totalViews.toLocaleString()}</p>
              </div>
            </div>

            {/* 個人簡介 */}
            <div 
              className="bg-gradient-to-r from-secondary/20 to-transparent p-4 rounded-xl border-l-4 border-primary"
              style={{ transform: 'rotate(-0.3deg)' }}
            >
              <h3 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                <span>📝</span>
                個人簡介
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {profileUser.bio}
              </p>
            </div>
          </div>
        </div>

        {/* 標籤頁切換 - 手帳標籤風格 */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 whitespace-nowrap transition-all ${
              activeTab === 'articles'
                ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent shadow-md scale-105'
                : 'bg-white/70 border-primary/20 hover:border-primary/40 hover:shadow-sm'
            }`}
            style={activeTab === 'articles' ? {} : { transform: 'rotate(-0.5deg)' }}
          >
            <FileText className="w-4 h-4" />
            <span className="font-medium">文章作品</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'articles' ? 'bg-white/20' : 'bg-primary/10'
            }`}>
              {stats.articles}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 whitespace-nowrap transition-all ${
              activeTab === 'questions'
                ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent shadow-md scale-105'
                : 'bg-white/70 border-primary/20 hover:border-primary/40 hover:shadow-sm'
            }`}
            style={activeTab === 'questions' ? {} : { transform: 'rotate(0.5deg)' }}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="font-medium">提問紀錄</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === 'questions' ? 'bg-white/20' : 'bg-primary/10'
            }`}>
              {userQuestions.length}
            </span>
          </button>

          {isOwnProfile && (
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 whitespace-nowrap transition-all ${
                activeTab === 'bookmarks'
                  ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent shadow-md scale-105'
                  : 'bg-white/70 border-primary/20 hover:border-primary/40 hover:shadow-sm'
              }`}
              style={activeTab === 'bookmarks' ? {} : { transform: 'rotate(-0.5deg)' }}
            >
              <Bookmark className="w-4 h-4" />
              <span className="font-medium">我的收藏</span>
            </button>
          )}
        </div>

        {/* 內容區 */}
        <div>
          {activeTab === 'articles' && (
            <div>
              {userArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div 
                  className="text-center py-16 bg-card rounded-3xl border-2 border-dashed border-primary/20"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
                  <p className="text-muted-foreground">尚未發布任何文章</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'questions' && (
            <div>
              {userQuestions.length > 0 ? (
                <div className="space-y-4">
                  {userQuestions.map(question => (
                    <QuestionCard key={question.id} question={question} />
                  ))}
                </div>
              ) : (
                <div 
                  className="text-center py-16 bg-card rounded-3xl border-2 border-dashed border-primary/20"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
                  <p className="text-muted-foreground">尚未提出任何問題</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'bookmarks' && isOwnProfile && (
            <div 
              className="text-center py-16 bg-card rounded-3xl border-2 border-dashed border-primary/20"
              style={{ transform: 'rotate(-0.5deg)' }}
            >
              <Bookmark className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
              <p className="text-muted-foreground">尚未收藏任何內容</p>
              <p className="text-sm text-muted-foreground/70 mt-2">點擊文章上的收藏按鈕即可加入收藏</p>
            </div>
          )}
        </div>
      </div>

      <BottomNav />

      {/* 編輯個人檔案彈出視窗 */}
      {isEditModalOpen && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={profileUser}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}