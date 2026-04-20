import { FileText, Heart, Zap, Coins, Info, Building2 } from 'lucide-react';
import { BEE_REWARDS } from '../mock-data';

const EARNING_METHODS = [
  {
    icon: Zap,
    title: '每日登入',
    beeCoin: `+${BEE_REWARDS.dailyLogin}`,
    description: '每天登入即可獲得豐 Bee',
    limit: '',
    detail: `+${BEE_REWARDS.dailyLogin} Bee / 天（無上限）`,
  },
  {
    icon: FileText,
    title: '發表文章（專業文章）',
    beeCoin: `+${BEE_REWARDS.publishArticle}`,
    description: '需符合格式/通過審核',
    limit: `每日上限：${BEE_REWARDS.publishArticleDailyLimit} 篇；每週上限：${BEE_REWARDS.publishArticleWeeklyLimit} 篇`,
    detail: `+${BEE_REWARDS.publishArticle} Bee / 篇`,
  },
  {
    icon: Heart,
    title: '獲得認可（品質獎勵）',
    beeCoin: '',
    description: '文章或回覆被標記「有幫助」',
    limit: '',
    detail: '',
    subItems: [
      {
        label: '文章被標記「有幫助」',
        value: `+${BEE_REWARDS.articleHelpful} Bee / 次`,
        limit: `單篇上限：${BEE_REWARDS.articleHelpfulLimit} Bee`,
      },
      {
        label: '回覆被標記「有幫助」',
        value: `+${BEE_REWARDS.replyHelpful} Bee / 次`,
        limit: `每日上限：${BEE_REWARDS.replyHelpfulDailyLimit} Bee`,
      },
    ],
  },
  {
    icon: Building2,
    title: '金融強化',
    beeCoin: '',
    description: '開立 DAWHO 帳戶或邀請好友',
    limit: '',
    detail: '',
    subItems: [
      {
        label: '新開立永豐 DAWHO 帳戶',
        value: `+${BEE_REWARDS.openDawhoAccountMin} - ${BEE_REWARDS.openDawhoAccountMax} Bee`,
        limit: '30 天內達標',
      },
      {
        label: '成功邀請好友開戶',
        value: `+${BEE_REWARDS.inviteFriendMin} - ${BEE_REWARDS.inviteFriendMax} Bee`,
        limit: '好友 14 天內達標',
      },
    ],
  },
];

export function HowToEarnPoints() {
  return (
    <div className="bg-card rounded-2xl border-2 border-primary/20 p-6 relative overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(217, 119, 87, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)' }}>
      {/* 手帳風格裝飾 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4c430]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f4c430] to-primary flex items-center justify-center shadow-sm border-2 border-white">
            <Coins className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold">如何賺取豐 Bee？</h3>
            <p className="text-xs text-muted-foreground">完成任務獲得獎勵</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {EARNING_METHODS.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className="p-4 bg-gradient-to-br from-secondary/40 to-accent/30 rounded-xl border-2 border-primary/15 hover:border-primary/25 hover:shadow-md transition-all duration-300 relative"
                style={{ 
                  transform: `rotate(${index % 2 === 0 ? -0.3 : 0.3}deg)`,
                  boxShadow: '0 1px 3px rgba(217, 119, 87, 0.05)'
                }}
              >
                <div className="flex items-start gap-3">
                  {/* 手帳風格圖標 */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f4c430]/30 to-primary/20 flex items-center justify-center text-primary flex-shrink-0 border-2 border-primary/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-0.5">{method.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{method.description}</p>
                      </div>
                      {method.beeCoin && (
                        <div className="flex items-center gap-1 bg-[#f4c430]/25 px-2.5 py-1 rounded-full border border-[#f4c430]/30 ml-2 shrink-0">
                          <span className="text-[#d4af37] font-bold text-sm whitespace-nowrap">{method.beeCoin}</span>
                          <span className="text-xs">🐝</span>
                        </div>
                      )}
                    </div>
                    
                    {method.detail && (
                      <p className="text-xs font-medium text-primary/80 mb-1">{method.detail}</p>
                    )}
                    
                    {method.limit && (
                      <p className="text-xs text-muted-foreground/70 bg-white/50 rounded px-2 py-1 inline-block">
                        {method.limit}
                      </p>
                    )}
                    
                    {/* 子項目（獲得認可） */}
                    {method.subItems && (
                      <div className="mt-3 space-y-2">
                        {method.subItems.map((subItem, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start justify-between p-2.5 bg-white/60 rounded-lg border border-primary/10"
                          >
                            <div className="flex-1">
                              <p className="text-xs font-medium mb-0.5">{subItem.label}</p>
                              <p className="text-xs text-muted-foreground/70">{subItem.limit}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-[#f4c430]/25 px-2 py-0.5 rounded-full border border-[#f4c430]/30 ml-2 shrink-0">
                              <span className="text-[#d4af37] font-bold text-xs whitespace-nowrap">{subItem.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 公平性上限 */}
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-800 leading-relaxed space-y-1">
              <p><strong>公平性上限：</strong></p>
              <ul className="ml-3 space-y-0.5">
                <li>• 每人每日總獲幣上限：<strong>{BEE_REWARDS.dailyTotalLimit} Bee／日</strong>（超過不再結算）</li>
                <li>• 「有幫助」計入條件：<strong>探索家以上</strong>或「完成認證/活躍門檻」才算有效票</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}