import { TopBar, BottomNav } from '../components/navigation';
import { CURRENT_USER, LEVEL_CONFIG, getNextLevelInfo } from '../mock-data';
import { LevelBadge } from '../components/level-badge';
import { StatCard } from '../components/stat-card';
import { FeatureTooltip } from '../components/feature-tooltip';
import { HowToEarnPoints } from '../components/how-to-earn-points';
import { EditProfileModal } from '../components/edit-profile-modal';
import { BadgeRulesModal } from '../components/badge-rules-modal';
import { TrendingUp, Award, Clock, Settings, LogOut, Coins, FileText, MessageCircle, Heart, ShoppingBag, User, Edit } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isBadgeRulesOpen, setIsBadgeRulesOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(CURRENT_USER);
  
  const currentLevelConfig = LEVEL_CONFIG[currentUser.level];
  const nextLevel = getNextLevelInfo(currentUser.level);
  const nextLevelConfig = nextLevel ? LEVEL_CONFIG[nextLevel] : null;

  const handleSaveProfile = (updatedUser: Partial<typeof CURRENT_USER>) => {
    setCurrentUser(prev => ({ ...prev, ...updatedUser }));
    // 在真實應用中，這裡會調用 API 更新後端數據
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopBar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Profile Header - 手帳風格 */}
        <div className="relative bg-gradient-to-br from-primary via-[#d97757] to-[#b85f40] rounded-3xl p-8 text-white mb-6 border-4 border-white overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(217, 119, 87, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1)' }}>
          {/* 手帳風格裝飾 */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b-2 border-white/10"></div>
          <div className="absolute top-2 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
          
          {/* 紙張紋理效果 */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 35px, white 35px, white 36px)' }}></div>
          
          <div className="relative z-10 mt-6">
            <div className="flex items-start gap-5 mb-6">
              {currentUser.avatar ? (
                <div className="relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-full blur"></div>
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="relative w-24 h-24 rounded-full object-cover border-4 border-white/40 shadow-xl"
                  />
                  {/* 在線狀態指示 */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center text-4xl shadow-xl">
                  👤
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 tracking-wide">{currentUser.name}</h2>
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/30 backdrop-blur-md rounded-full px-4 py-1.5 border-2 border-white/20">
                    <span className="text-sm font-semibold">{currentLevelConfig.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Clock className="w-4 h-4" />
                  <span>加入於 {new Date(currentUser.joinedDate).toLocaleDateString('zh-TW')}</span>
                </div>
              </div>
            </div>
            
            {/* Bee Coin Balance - 手帳卡片風格 */}
            <div className="bg-white/25 backdrop-blur-md rounded-2xl p-5 border-2 border-white/20 relative overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)' }}>
              {/* 裝飾性貼紙效果 */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#f4c430]/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f4c430] to-[#d4af37] flex items-center justify-center shadow-lg ring-4 ring-white/30">
                      <Coins className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1 flex items-center gap-1.5">
                        豐 Bee 總餘額 <span className="text-base">🐝</span>
                      </p>
                      <p className="text-3xl font-bold tracking-wide">
                        {((currentUser.beeCoin || 0) + (currentUser.paidBeeCoin || 0)).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 兩種豐 Bee 明細 */}
                <div className="space-y-2 mb-4">
                  {/* 儲值豐 Bee */}
                  <div className="flex items-center justify-between p-3 bg-white/15 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#f4c430]"></div>
                      <span className="text-sm text-white/90">儲值豐 Bee</span>
                      <span className="text-xs text-white/60">(付費購買)</span>
                    </div>
                    <span className="font-bold text-white">{(currentUser.paidBeeCoin || 0).toLocaleString()}</span>
                  </div>

                  {/* 一般豐 Bee */}
                  <div className="flex items-center justify-between p-3 bg-white/15 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/80"></div>
                      <span className="text-sm text-white/90">一般豐 Bee</span>
                      <span className="text-xs text-white/60">(任務獲得)</span>
                    </div>
                    <span className="font-bold text-white">{(currentUser.beeCoin || 0).toLocaleString()}</span>
                  </div>
                </div>

                {/* 按鈕組 */}
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/recharge-bee">
                    <button className="w-full bg-gradient-to-r from-[#f4c430] to-[#d4af37] hover:from-[#e5b52f] hover:to-[#c5a037] px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2 border-2 border-white/25 text-white">
                      <Coins className="w-4 h-4" />
                      儲值
                    </button>
                  </Link>
                  <Link to="/shop">
                    <button className="w-full bg-white/35 hover:bg-white/45 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 border-2 border-white/25">
                      <ShoppingBag className="w-4 h-4" />
                      商城
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <StatCard
            icon={<FileText className="w-5 h-5" />}
            label="發表文章"
            value={currentUser.tasksCompleted?.publishedArticles?.toString() || "0"}
          />
          <StatCard
            icon={<MessageCircle className="w-5 h-5" />}
            label="有用留言"
            value={currentUser.tasksCompleted?.helpfulComments?.toString() || "0"}
          />
          <StatCard
            icon={<Heart className="w-5 h-5" />}
            label="優質閱讀"
            value={currentUser.tasksCompleted?.highQualityArticlesRead?.toString() || "0"}
          />
        </div>
        
        {/* Level Progress & Tasks */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">等級進度與任務</h3>
              <FeatureTooltip content="完成任務來升級，解鎖更多功能！" />
            </div>
            <Link to="/level-guide">
              <button className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                升級指南
              </button>
            </Link>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">目前等級</span>
              <span className="text-sm text-muted-foreground">
                {currentLevelConfig.name}
              </span>
            </div>
            {nextLevelConfig && (
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">下一等級</span>
                <span className="text-sm text-muted-foreground">
                  {nextLevelConfig.name}
                </span>
              </div>
            )}
          </div>
          
          {/* Current Level Tasks */}
          {nextLevelConfig && nextLevelConfig.tasks && (
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">升級任務：</p>
              <div className="space-y-2">
                {nextLevelConfig.tasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm p-3 bg-secondary/30 rounded-lg">
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary/30" />
                    </div>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Level Permissions */}
          <div className="space-y-2">
            <p className="text-sm font-medium mb-3">當前等級權限：</p>
            {currentLevelConfig.permissions.map((permission, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{permission}</span>
              </div>
            ))}
          </div>
          
          {/* Level Restrictions */}
          {currentLevelConfig.restrictions && currentLevelConfig.restrictions.length > 0 && (
            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium mb-3 text-muted-foreground">注意事項：</p>
              {currentLevelConfig.restrictions.map((restriction, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  <span>{restriction}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* 個人專頁管理區 - 手帳卡片風格 */}
        <div 
          className="bg-card rounded-3xl border-2 border-primary/20 p-6 mb-6 relative overflow-hidden"
          style={{ 
            boxShadow: '0 4px 16px rgba(217, 119, 87, 0.1)',
            transform: 'rotate(-0.3deg)'
          }}
        >
          {/* 手帳風格裝飾 */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-r-[32px] border-t-primary/10 border-r-transparent"></div>
          </div>

          {/* 紙膠帶效果 */}
          <div 
            className="absolute -left-2 top-8 w-16 h-8 bg-primary/20 blur-sm"
            style={{ transform: 'rotate(-45deg)' }}
          ></div>

          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <h3 className="font-bold text-lg">我的粉絲專頁</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 pl-3">
              管理你的個人專頁，讓其他投資者更認識你
            </p>

            {/* 按鈕組 */}
            <div className="grid grid-cols-2 gap-4">
              {/* 預覽我的專頁 */}
              <Link to={`/user/${currentUser.id}`}>
                <button 
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-secondary/30 to-accent/20 hover:border-primary/50 hover:shadow-lg transition-all font-medium"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  <User className="w-5 h-5 text-primary" />
                  <span>預覽我的專頁</span>
                </button>
              </Link>

              {/* 編輯個人資料 */}
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-primary to-[#b85f40] text-white font-bold hover:shadow-lg transition-all"
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <Edit className="w-5 h-5" />
                <span>編輯個人資料</span>
              </button>
            </div>

            {/* 提示文字 */}
            <div 
              className="mt-5 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200"
              style={{ transform: 'rotate(0.2deg)' }}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">💡</span>
                <p className="text-xs text-blue-700 leading-relaxed">
                  完善的個人資料可以提升你的專業形象，吸引更多人追蹤你的投資觀點！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Earn Bee */}
        <div className="mb-6">
          <HowToEarnPoints />
        </div>
        
        {/* Settings */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <button 
            onClick={() => setIsBadgeRulesOpen(true)}
            className="w-full flex items-center gap-3 p-4 hover:bg-secondary/30 transition-colors border-b border-border"
          >
            <Award className="w-5 h-5 text-muted-foreground" />
            <div className="flex-1 text-left">
              <span>專業貢獻章規則</span>
              <p className="text-xs text-muted-foreground mt-0.5">了解如何獲得專業貢獻章</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-secondary/30 transition-colors border-b border-border">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <span>設定</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-secondary/30 transition-colors text-destructive">
            <LogOut className="w-5 h-5" />
            <span>登出</span>
          </button>
        </div>
        
        {/* 編輯個人檔案彈出視窗 */}
        {isEditModalOpen && (
          <EditProfileModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            user={currentUser}
            onSave={handleSaveProfile}
          />
        )}

        {/* 等級徽章規則彈出視窗 */}
        {isBadgeRulesOpen && (
          <BadgeRulesModal
            isOpen={isBadgeRulesOpen}
            onClose={() => setIsBadgeRulesOpen(false)}
          />
        )}
      </div>
      
      <BottomNav />
    </div>
  );
}