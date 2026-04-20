import { X, Award, TrendingUp, HelpCircle } from 'lucide-react';

interface BadgeRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BadgeRulesModal({ isOpen, onClose }: BadgeRulesModalProps) {
  if (!isOpen) return null;

  const badges = [
    {
      level: 'bronze',
      name: '銅牌貢獻者',
      icon: '🥉',
      threshold: 10,
      color: 'from-orange-600 to-amber-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-900',
    },
    {
      level: 'silver',
      name: '銀牌貢獻者',
      icon: '🥈',
      threshold: 30,
      color: 'from-gray-400 to-gray-500',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      textColor: 'text-gray-900',
    },
    {
      level: 'gold',
      name: '金牌貢獻者',
      icon: '🥇',
      threshold: 50,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      textColor: 'text-yellow-900',
    },
    {
      level: 'platinum',
      name: '白金貢獻者',
      icon: '💎',
      threshold: 100,
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-300',
      textColor: 'text-cyan-900',
    },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-[#b85f40] text-white p-6 rounded-t-3xl z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">專業貢獻章規則</h2>
                <p className="text-sm text-white/80 mt-1">如何獲得專業貢獻章徽章</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* 簡介 */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-1">什麼是專業貢獻章？</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  當你的文章被其他用戶標記為「有幫助」達到一定次數後，平台將自動授予<strong>專業貢獻章</strong>，
                  這是對你優質內容創作的認可！徽章會顯示在你的文章上，讓更多人看見你的專業貢獻。
                </p>
              </div>
            </div>
          </div>

          {/* 徽章等級 */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              徽章等級與門檻
            </h3>
            
            <div className="space-y-4">
              {badges.map((badge, index) => (
                <div 
                  key={badge.level}
                  className={`${badge.bgColor} border-2 ${badge.borderColor} rounded-xl p-4 relative overflow-hidden`}
                >
                  {/* 背景裝飾 */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${badge.color}`} 
                         style={{ transform: 'rotate(45deg) translateX(50%)' }}></div>
                  </div>
                  
                  <div className="relative flex items-start gap-4">
                    {/* 徽章圖示 */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center text-3xl shadow-lg shrink-0`}>
                      {badge.icon}
                    </div>
                    
                    {/* 內容 */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-bold text-lg ${badge.textColor}`}>
                          {badge.name}
                        </h4>
                        <span className={`px-3 py-1 ${badge.bgColor} ${badge.borderColor} border rounded-full text-sm font-bold ${badge.textColor}`}>
                          {badge.threshold}+ 次
                        </span>
                      </div>
                      
                      <p className={`text-sm ${badge.textColor} opacity-80 mb-2`}>
                        單篇文章被標記「有幫助」<strong> {badge.threshold} 次</strong>以上
                      </p>
                      
                      {/* 進度示意 */}
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${badge.color}`}
                            style={{ width: '100%' }}
                          ></div>
                        </div>
                        <span className={`text-xs font-medium ${badge.textColor}`}>
                          {badge.threshold}+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 如何獲得「有幫助」標記 */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <h3 className="font-bold text-green-900">如何讓讀者標記「有幫助」？</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-800 ml-8">
              <li className="flex items-start gap-2">
                <span className="shrink-0">✅</span>
                <span><strong>分享真實經驗</strong>：用自己的投資經歷幫助其他人學習</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">✅</span>
                <span><strong>提供具體資訊</strong>：包含數據、來源、分析邏輯</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">✅</span>
                <span><strong>解決實際問題</strong>：回答新手常見疑問，提供實用建議</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">✅</span>
                <span><strong>保持客觀中立</strong>：避免誇大、保證獲利等不實陳述</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">✅</span>
                <span><strong>持續創作</strong>：定期發布高品質內容，建立專業形象</span>
              </li>
            </ul>
          </div>

          {/* 徽章權益 */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
            <h3 className="font-bold text-purple-900 mb-3">🎁 專業貢獻章權益</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2">
                <span className="shrink-0">🏆</span>
                <span>文章顯示專屬徽章，提升內容可信度</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">⭐</span>
                <span>個人資料頁顯示貢獻者標章</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">🎯</span>
                <span>優先推薦給更多讀者（演算法加權）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">🐝</span>
                <span>獲得豐 Bee 獎勵（白金等級額外獎勵）</span>
              </li>
            </ul>
          </div>

          {/* 關閉按鈕 */}
          <button
            onClick={onClose}
            className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            我了解了
          </button>
        </div>
      </div>
    </div>
  );
}
