import { TopBar, BottomNav } from '../components/navigation';
import { ArrowLeft, Coins, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { CURRENT_USER } from '../mock-data';

// 儲值方案
const RECHARGE_PLANS = [
  {
    id: '300',
    amount: 300,
    bonus: 10,
    total: 310,
    discount: '3%',
    popular: false,
  },
  {
    id: '500',
    amount: 500,
    bonus: 25,
    total: 525,
    discount: '5%',
    popular: true,
  },
  {
    id: '1000',
    amount: 1000,
    bonus: 80,
    total: 1080,
    discount: '8%',
    popular: false,
  },
  {
    id: '2000',
    amount: 2000,
    bonus: 200,
    total: 2200,
    discount: '10%',
    popular: false,
  },
];

export function RechargeBee() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRecharge = () => {
    if (!selectedPlan) return;
    
    // 模擬儲值流程
    setShowConfirmation(true);
    
    // 3秒後關閉確認視窗
    setTimeout(() => {
      setShowConfirmation(false);
      // 可以導航回個人頁面
      // navigate('/profile');
    }, 3000);
  };

  const selectedPlanData = RECHARGE_PLANS.find(p => p.id === selectedPlan);

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopBar />
      
      {/* Header */}
      <div className="sticky top-16 bg-gradient-to-br from-primary via-[#d97757] to-[#b85f40] text-white z-30">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <Link to="/profile" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">儲值豐 Bee</h1>
              <p className="text-white/80 text-sm">購買豐 Bee，解鎖更多精彩內容</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* 當前餘額 */}
        <div className="bg-card rounded-3xl border-2 border-primary/10 p-6 mb-6 relative overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(217, 119, 87, 0.1)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#f4c430]/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <p className="text-sm text-muted-foreground mb-4">目前餘額</p>
            
            <div className="space-y-3">
              {/* 儲值豐 Bee */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#f4c430]/10 to-[#d4af37]/10 rounded-2xl border border-[#f4c430]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f4c430] to-[#d4af37] flex items-center justify-center">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">儲值豐 Bee</p>
                    <p className="text-xs text-muted-foreground/70">付費購買</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#d4af37]">{CURRENT_USER.paidBeeCoin || 0}</p>
                  <p className="text-xs text-muted-foreground">🐝</p>
                </div>
              </div>

              {/* 一般豐 Bee */}
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">一般豐 Bee</p>
                    <p className="text-xs text-muted-foreground/70">任務獲得</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{CURRENT_USER.beeCoin}</p>
                  <p className="text-xs text-muted-foreground">🐝</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 儲值方案 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>💰</span>
            選擇儲值方案
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RECHARGE_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-3xl border-2 transition-all text-left ${
                  selectedPlan === plan.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/50'
                } ${plan.popular ? 'ring-2 ring-primary/30' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      🔥 最熱門
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm text-muted-foreground">NT$</span>
                    <span className="text-3xl font-bold">{plan.amount}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    獲得 {plan.amount} 豐 Bee
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">+ {plan.bonus} 豐 Bee 贈送</span>
                  </div>
                  <div className="h-px bg-border"></div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">實際獲得</span>
                    <span className="font-bold text-primary">{plan.total} 豐 Bee</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                  <span className="text-xs font-bold text-primary">≈ {plan.discount} 回饋</span>
                </div>

                {selectedPlan === plan.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 重要提示 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-blue-800">
              <p className="font-bold">儲值須知</p>
              <ul className="space-y-1.5 ml-4 list-disc">
                <li>儲值豐 Bee <strong>不可退現</strong>，僅能於平台內消費使用</li>
                <li>儲值豐 Bee <strong>不開放換出</strong>或轉讓給其他用戶</li>
                <li>儲值豐 Bee 可用於解鎖文章、購買主題等平台功能</li>
                <li>消費時優先使用儲值豐 Bee，用完後才會扣除一般豐 Bee</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 使用說明 */}
        <div className="bg-card rounded-3xl border border-border p-5 mb-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <span>📖</span>
            豐 Bee 使用說明
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">📝</span>
              <p><strong>解鎖精選文章：</strong>使用豐 Bee 解鎖高手長文、深度策略等優質內容</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">🎨</span>
              <p><strong>購買個性主題：</strong>自訂個人頁面風格，展現獨特品味</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">💸</span>
              <p><strong>跨行轉帳優惠：</strong>使用豐 Bee 兌換永豐銀行跨行轉帳優惠次數</p>
            </div>
          </div>
        </div>

        {/* 儲值按鈕 */}
        <button
          onClick={handleRecharge}
          disabled={!selectedPlan}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${
            selectedPlan
              ? 'bg-gradient-to-r from-primary to-[#b85f40] hover:shadow-lg'
              : 'bg-muted-foreground/30 cursor-not-allowed'
          }`}
        >
          {selectedPlan ? `立即儲值 NT$ ${selectedPlanData?.amount}` : '請選擇儲值方案'}
        </button>
      </div>

      {/* 儲值成功確認視窗 */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">儲值成功！</h3>
            <p className="text-muted-foreground mb-6">
              已成功儲值 <span className="font-bold text-primary">{selectedPlanData?.total} 豐 Bee</span>
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4">
              <p className="text-sm text-muted-foreground mb-2">目前餘額</p>
              <p className="text-3xl font-bold text-primary">
                {(CURRENT_USER.paidBeeCoin || 0) + (selectedPlanData?.total || 0)} 🐝
              </p>
              <p className="text-xs text-muted-foreground mt-1">儲值豐 Bee</p>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
