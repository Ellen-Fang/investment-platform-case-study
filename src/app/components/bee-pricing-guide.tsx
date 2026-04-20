import { useState } from 'react';
import { 
  Coins, 
  FileText, 
  Palette, 
  ShieldOff, 
  Landmark, 
  ArrowRightLeft,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';
import { 
  ARTICLE_PRICING, 
  UNLOCK_PRICING, 
  THEME_PRICING, 
  AD_FREE_PRICING, 
  TRANSFER_FEE_PRICING,
  POINTS_EXCHANGE 
} from '../config/bee-pricing';

export function BeePricingGuide() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-200 relative overflow-hidden"
      style={{ 
        boxShadow: '0 4px 16px rgba(251, 191, 36, 0.15)',
        transform: 'rotate(-0.3deg)'
      }}
    >
      {/* 裝飾元素 */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl"></div>

      {/* 標題 */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900">豐Bee 價格指南</h3>
              <p className="text-xs text-amber-700">了解如何使用豐Bee</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all shadow-md"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-amber-700" />
            ) : (
              <ChevronDown className="w-5 h-5 text-amber-700" />
            )}
          </button>
        </div>
      </div>

      {/* 快速摘要 - 總是顯示 */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
          <div className="text-xs text-amber-700 mb-1">付費文章</div>
          <div className="font-bold text-amber-900">15-199 🐝</div>
        </div>
        <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
          <div className="text-xs text-amber-700 mb-1">文章解鎖</div>
          <div className="font-bold text-amber-900">59-449 🐝</div>
        </div>
        <div className="bg-white/60 rounded-xl p-3 border border-amber-200">
          <div className="text-xs text-amber-700 mb-1">主題美化</div>
          <div className="font-bold text-amber-900">49-299 🐝</div>
        </div>
      </div>

      {/* 詳細內容 - 可展開 */}
      {isExpanded && (
        <div className="relative z-10 space-y-4 pt-4 border-t-2 border-dashed border-amber-200">
          
          {/* 付費文章 */}
          <div className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-amber-900">付費文章</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">短文/觀點</span>
                <span className="font-bold text-amber-900">{ARTICLE_PRICING.short.min}-{ARTICLE_PRICING.short.max} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">深度策略/研究</span>
                <span className="font-bold text-amber-900">{ARTICLE_PRICING.deep.min}-{ARTICLE_PRICING.deep.max} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-amber-800">高手長文/系列/工具表</span>
                <span className="font-bold text-amber-900">{ARTICLE_PRICING.premium.min}-{ARTICLE_PRICING.premium.max} 🐝</span>
              </div>
            </div>
          </div>

          {/* 文章解鎖包 */}
          <div className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <ShieldOff className="w-5 h-5 text-blue-600" />
              <h4 className="font-bold text-amber-900">文章解鎖包</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">單篇解鎖</span>
                <span className="font-bold text-amber-900">{UNLOCK_PRICING.single.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <div>
                  <span className="text-sm text-amber-800">解鎖包 x3</span>
                  <span className="text-xs text-green-600 ml-2">省 {UNLOCK_PRICING.pack3.savings} 🐝</span>
                </div>
                <span className="font-bold text-amber-900">{UNLOCK_PRICING.pack3.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <div>
                  <span className="text-sm text-amber-800">解鎖包 x5</span>
                  <span className="text-xs text-green-600 ml-2">省 {UNLOCK_PRICING.pack5.savings} 🐝</span>
                </div>
                <span className="font-bold text-amber-900">{UNLOCK_PRICING.pack5.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="text-sm text-amber-800">解鎖包 x10</span>
                  <span className="text-xs text-green-600 ml-2">省 {UNLOCK_PRICING.pack10.savings} 🐝</span>
                </div>
                <span className="font-bold text-amber-900">{UNLOCK_PRICING.pack10.price} 🐝</span>
              </div>
            </div>
          </div>

          {/* 主題美化 */}
          <div className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-purple-600" />
              <h4 className="font-bold text-amber-900">主題美化</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">單一主題</span>
                <span className="font-bold text-amber-900">{THEME_PRICING.single.min}-{THEME_PRICING.single.max} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">主題包（5款）</span>
                <span className="font-bold text-amber-900">{THEME_PRICING.pack.min}-{THEME_PRICING.pack.max} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-amber-800">進階個人頁美化</span>
                <span className="font-bold text-amber-900">{THEME_PRICING.advanced.min}-{THEME_PRICING.advanced.max} 🐝</span>
              </div>
            </div>
          </div>

          {/* 免廣告體驗 */}
          <div className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <ShieldOff className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-amber-900">免廣告體驗</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">7 天</span>
                <span className="font-bold text-amber-900">{AD_FREE_PRICING.week.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <div>
                  <span className="text-sm text-amber-800">30 天</span>
                  <span className="text-xs text-green-600 ml-2">省 {AD_FREE_PRICING.month.savings} 🐝</span>
                </div>
                <span className="font-bold text-amber-900">{AD_FREE_PRICING.month.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-amber-800">終身</span>
                <span className="font-bold text-amber-900">{AD_FREE_PRICING.lifetime.min}-{AD_FREE_PRICING.lifetime.max} 🐝</span>
              </div>
            </div>
          </div>

          {/* 跨行轉帳免手續費 */}
          <div className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <Landmark className="w-5 h-5 text-indigo-600" />
              <h4 className="font-bold text-amber-900">跨行轉帳免手續費</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-sm text-amber-800">10 次</span>
                <span className="font-bold text-amber-900">{TRANSFER_FEE_PRICING.pack10.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <div>
                  <span className="text-sm text-amber-800">25 次</span>
                  <span className="text-xs text-green-600 ml-2">省 {TRANSFER_FEE_PRICING.pack25.savings} 🐝</span>
                </div>
                <span className="font-bold text-amber-900">{TRANSFER_FEE_PRICING.pack25.price} 🐝</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-amber-800">月無限</span>
                <span className="font-bold text-amber-900">{TRANSFER_FEE_PRICING.monthly.min}-{TRANSFER_FEE_PRICING.monthly.max} 🐝</span>
              </div>
            </div>
          </div>

          {/* 點數互換 */}
          <div className="bg-white/80 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <ArrowRightLeft className="w-5 h-5 text-orange-600" />
              <h4 className="font-bold text-amber-900">點數互換</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-3 border border-amber-200">
                <div className="text-sm text-amber-800 mb-2 font-medium">匯率（1:1）</div>
                <div className="space-y-1 text-xs text-amber-700">
                  <div>• 1 Bee = 1 豐點</div>
                  <div>• 1 Bee = 1 小蜜點</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 border border-red-200">
                <div className="text-sm text-red-800 mb-2 font-medium">手續費</div>
                <div className="space-y-1 text-xs text-red-700">
                  <div>• 標準：{POINTS_EXCHANGE.fee.standard * 100}%（最低 {POINTS_EXCHANGE.fee.minimum} Bee）</div>
                  <div>• 探索家以上：{POINTS_EXCHANGE.fee.explorer * 100}%</div>
                  <div>• 探索家以上每月 {POINTS_EXCHANGE.fee.freeMonthly} 次免手續費</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                <div className="text-sm text-blue-800 mb-2 font-medium">限制</div>
                <div className="space-y-1 text-xs text-blue-700">
                  <div>• 每日上限：{POINTS_EXCHANGE.dailyLimit.toLocaleString()} Bee</div>
                  <div>• 最低兌換：{POINTS_EXCHANGE.minimumExchange} Bee</div>
                </div>
              </div>
            </div>
          </div>

          {/* 提示 */}
          <div 
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200"
            style={{ transform: 'rotate(0.2deg)' }}
          >
            <div className="flex items-start gap-2">
              <span className="text-xl">💡</span>
              <div className="text-sm text-green-800 leading-relaxed">
                <p className="font-bold mb-1">溫馨提示</p>
                <p>升級等級可享受更多豐Bee優惠！探索家以上用戶點數互換手續費減半，並享有每月免費次數。</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 展開提示 */}
      {!isExpanded && (
        <div className="relative z-10 text-center">
          <p className="text-xs text-amber-600">點擊展開查看完整價格說明</p>
        </div>
      )}
    </div>
  );
}
