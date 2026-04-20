import { TopBar, BottomNav } from '../components/navigation';
import { ArrowLeft, TrendingUp, AlertTriangle, Zap, Award, CheckCircle2, XCircle, Info } from 'lucide-react';
import { Link } from 'react-router';
import { LEVEL_CONFIG } from '../types';

export function LevelGuide() {
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
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">等級升級指南</h1>
              <p className="text-white/80 text-sm">完整的會員等級與豐 Bee 制度說明</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        
        {/* 動態降級制度 */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-red-900">⚠️ 動態降級制度</h2>
            </div>
            
            <div className="space-y-3 text-sm text-red-800">
              <p className="font-medium">
                為維護平台內容品質，若高階用戶出現以下情況，將進行<strong>等級調降</strong>：
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-white/60 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-1">發表違規內容</p>
                    <p className="text-xs text-red-700">包括不實資訊、誤導性建議、違反社群規範等</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 p-3 bg-white/60 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-1">誤導性資訊</p>
                    <p className="text-xs text-red-700">提供未經證實的投資建議，導致他人損失</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 p-3 bg-white/60 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-1">長期無資產變動</p>
                    <p className="text-xs text-red-700">DAWHO 帳戶長期未有交易紀錄，無法證明實戰經驗</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-red-100 rounded-xl border-2 border-red-200">
                <p className="text-xs font-bold text-red-900">
                  📌 提醒：降級後將失去相應的權限與加乘倍率，請務必遵守社群規範！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 豐 Bee 倍率適用規則 */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-amber-900">⚡ 豐 Bee 倍率適用規則</h2>
            </div>
            
            <div className="space-y-4">
              {/* 適用項目 */}
              <div>
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  倍率<strong className="text-green-600">適用</strong>於品質事件
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-green-900">有幫助（被標記為有用）</p>
                      <p className="text-xs text-green-700">你的留言或回答被其他用戶標記為「有幫助」</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-green-900">被收藏</p>
                      <p className="text-xs text-green-700">你的文章被其他用戶收藏，表示內容有價值</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-green-900">被官方推薦</p>
                      <p className="text-xs text-green-700">文章被平台編輯選為精選內容</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 不適用項目 */}
              <div>
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  倍率<strong className="text-red-600">不適用</strong>於固定獎勵
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-xl border border-red-200">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      ✗
                    </div>
                    <div>
                      <p className="font-bold text-red-900">每日登入獎勵</p>
                      <p className="text-xs text-red-700">固定獲得 0.05 豐 Bee，不適用倍率</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-xl border border-red-200">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      ✗
                    </div>
                    <div>
                      <p className="font-bold text-red-900">發文上架獎勵</p>
                      <p className="text-xs text-red-700">文章發布後固定獲得 1 豐 Bee，不適用倍率</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 基礎政策表 */}
        <div className="bg-card rounded-3xl border-2 border-primary/20 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">基礎政策</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-bold">項目</th>
                  <th className="text-left py-3 px-4 font-bold">行為</th>
                  <th className="text-left py-3 px-4 font-bold">獎勵</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-bold">每日登入</td>
                  <td className="py-4 px-4">每天登入 App</td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-amber-600">+0.05 豐 Bee / 天</span>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-bold">發表專業文章</td>
                  <td className="py-4 px-4">需符合格式/通過審核</td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="font-bold text-primary">+1.00 豐 Bee / 篇</span>
                      <p className="text-xs text-muted-foreground">每日上限：1 篇；每週上限：3 篇</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-bold" rowSpan={2}>品質獎勵</td>
                  <td className="py-4 px-4">文章被標記「有幫助」</td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="font-bold text-green-600">+0.50 豐 Bee / 次</span>
                      <p className="text-xs text-muted-foreground">單篇上限：20 豐 Bee</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">回覆被標記「有幫助」</td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="font-bold text-green-600">+0.20 豐 Bee / 次</span>
                      <p className="text-xs text-muted-foreground">每日上限：2 豐 Bee</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-bold" rowSpan={2}>金融強化</td>
                  <td className="py-4 px-4">新開立永豐 DAWHO 帳戶</td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="font-bold text-blue-600">+10 豐 Bee - 20 豐 Bee</span>
                      <p className="text-xs text-muted-foreground">30 天內達標</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">成功邀請好友開戶</td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <span className="font-bold text-blue-600">+5 豐 Bee - 15 豐 Bee</span>
                      <p className="text-xs text-muted-foreground">好友 14 天內達標</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-bold" colSpan={2}>每日總獲幣上限</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-red-600">10 豐 Bee / 日</span>
                      <span className="text-xs text-muted-foreground">(超過不再結算)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-xs text-blue-800">
              <strong>注意：</strong>「有幫助」標記需由<strong>探索家以上</strong>或「完成認證/活躍門檻」的用戶標記才計入獎勵。
            </p>
          </div>
        </div>

        {/* 會員制度總覽 - 根據表格更新 */}
        <div className="bg-card rounded-3xl border-2 border-primary/20 p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">會員制度總覽</h2>
          </div>
          
          <div className="space-y-4">
            {/* 訪客 */}
            <div className="p-5 rounded-2xl border-2 border-gray-300 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{LEVEL_CONFIG.guest.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{LEVEL_CONFIG.guest.name}</h3>
                    <p className="text-xs text-muted-foreground">倍率係數：{LEVEL_CONFIG.guest.multiplier}x</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-gray-700 mb-2">任務</p>
                  <p className="text-muted-foreground">無需註冊</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-2">權益</p>
                  <p className="text-muted-foreground">瀏覽公開文章</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 mb-2">特殊身分</p>
                  <p className="text-muted-foreground">-</p>
                </div>
              </div>
            </div>

            {/* 觀察家 */}
            <div className="p-5 rounded-2xl border-2 border-[#d4c4b5] bg-gradient-to-br from-[#d4c4b5]/10 to-[#d4c4b5]/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{LEVEL_CONFIG.observer.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{LEVEL_CONFIG.observer.name}</h3>
                    <p className="text-xs text-muted-foreground">倍率係數：{LEVEL_CONFIG.observer.multiplier}x</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-[#8b7355] mb-2">任務</p>
                  <p className="text-muted-foreground">完成 App 註冊</p>
                </div>
                <div>
                  <p className="font-bold text-[#8b7355] mb-2">權益</p>
                  <ul className="text-muted-foreground space-y-1 text-xs list-disc list-inside">
                    <li>瀏覽公開文章與精選內容</li>
                    <li>加入投資問卷調查</li>
                    <li>開始累積豐 Bee（倍率 1.0x）</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#8b7355] mb-2">特殊身分</p>
                  <p className="text-muted-foreground">-</p>
                </div>
              </div>
            </div>

            {/* 探索家 */}
            <div className="p-5 rounded-2xl border-2 border-[#c9a990] bg-gradient-to-br from-[#c9a990]/10 to-[#c9a990]/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{LEVEL_CONFIG.explorer.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{LEVEL_CONFIG.explorer.name}</h3>
                    <p className="text-xs text-muted-foreground">倍率係數：{LEVEL_CONFIG.explorer.multiplier}x</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-[#8b7355] mb-2">任務</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• 成功綁定或新開立永豐 DAWHO 帳戶</li>
                    <li>• 閱讀 5 篇官方認證文章</li>
                    <li>• 完成 3 次內容回饋</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#8b7355] mb-2">權益</p>
                  <ul className="text-muted-foreground space-y-1 text-xs list-disc list-inside">
                    <li>開放提問與留言功能</li>
                    <li>使用一鍵下單</li>
                    <li>獲得首筆交易手續費優惠</li>
                    <li>豐 Bee 倍率 1.2x</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#8b7355] mb-2">特殊身分</p>
                  <p className="text-muted-foreground">-</p>
                </div>
              </div>
            </div>

            {/* 啟航家 */}
            <div className="p-5 rounded-2xl border-2 border-[#e6a77c] bg-gradient-to-br from-[#e6a77c]/10 to-[#e6a77c]/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{LEVEL_CONFIG.navigator.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{LEVEL_CONFIG.navigator.name}</h3>
                    <p className="text-xs text-muted-foreground">倍率係數：{LEVEL_CONFIG.navigator.multiplier}x</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-[#d4691f] mb-2">任務</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• 累積達到 5 筆實際交易紀錄</li>
                    <li>• 發表 2 篇「有幫助」反饋達 10 次以上的文章</li>
                    <li>• 至少有 3 筆回覆被標記「有幫助」</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#d4691f] mb-2">權益</p>
                  <ul className="text-muted-foreground space-y-1 text-xs list-disc list-inside">
                    <li>開放發文權限（文章、圖文）</li>
                    <li>參與社群主題討論</li>
                    <li>豐 Bee 倍率 1.5x</li>
                    <li>免費跨行轉帳優惠</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#d4691f] mb-2">特殊身分</p>
                  <p className="text-muted-foreground">-</p>
                </div>
              </div>
            </div>

            {/* 成長家 */}
            <div className="p-5 rounded-2xl border-2 border-[#f4a867] bg-gradient-to-br from-[#f4a867]/10 to-[#f4a867]/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{LEVEL_CONFIG.grower.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{LEVEL_CONFIG.grower.name}</h3>
                    <p className="text-xs text-muted-foreground">倍率係數：{LEVEL_CONFIG.grower.multiplier}x</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-[#d4691f] mb-2">任務</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• 累積 100 筆以上交易紀錄</li>
                    <li>• 發表至少 5 篇被官方認證標章文章</li>
                    <li>• 擁有至少 1 篇閱讀量超過 1,000 次的深度分析文章</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#d4691f] mb-2">權益</p>
                  <ul className="text-muted-foreground space-y-1 text-xs list-disc list-inside">
                    <li>發起投資主題版區討論</li>
                    <li>使用進階圖表與數據工具</li>
                    <li>豐 Bee 倍率 1.7x</li>
                    <li>訂閱好友動態通知</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#d4691f] mb-2">特殊身分</p>
                  <p className="text-muted-foreground">-</p>
                </div>
              </div>
            </div>

            {/* 領航家 */}
            <div className="p-5 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{LEVEL_CONFIG.leader.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{LEVEL_CONFIG.leader.name}</h3>
                    <p className="text-xs text-muted-foreground">倍率係數：{LEVEL_CONFIG.leader.multiplier}x</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-primary mb-2">任務</p>
                  <ul className="text-muted-foreground space-y-1 text-xs">
                    <li>• 長期保持資金與投資組合的活躍狀態</li>
                    <li>• 持續產出高品質內容，「有幫助」次數達 500 次以上</li>
                    <li>• 個人累積粉絲數達 1,000 人</li>
                    <li>• 至少被平台推薦 10 篇精選長文或原創工具/模型</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-primary mb-2">權益</p>
                  <ul className="text-muted-foreground space-y-1 text-xs list-disc list-inside">
                    <li>獲得 DAWHO 官方認證標章</li>
                    <li>開放私人諮詢功能（可選擇是否收費）</li>
                    <li>豐 Bee 倍率 2.0x</li>
                    <li>參與永豐金專屬活動邀請</li>
                    <li>平台合作夥伴推廣機會</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-primary mb-2">特殊身分</p>
                  <p className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded inline-block">
                    ✓ DAWHO 官方認證
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 豐 Bee 倍率實例 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-blue-900">💡 豐 Bee 倍率實例</h2>
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="p-4 bg-white/70 rounded-xl">
              <p className="font-bold text-blue-900 mb-2">範例 1：每日登入（不適用倍率）</p>
              <div className="space-y-1 text-blue-800">
                <p>• 觀察家（1.0x）每日登入：<span className="font-bold">0.05 豐 Bee</span></p>
                <p>• 領航家（2.0x）每日登入：<span className="font-bold">0.05 豐 Bee</span>（倍率不適用）</p>
              </div>
            </div>

            <div className="p-4 bg-white/70 rounded-xl">
              <p className="font-bold text-blue-900 mb-2">範例 2：文章被收藏（適用倍率）</p>
              <div className="space-y-1 text-blue-800">
                <p>• 探索家（1.2x）文章被收藏 1 次（基礎 0.5 豐 Bee）：<span className="font-bold">0.6 豐 Bee</span></p>
                <p>• 成長家（1.7x）文章被收藏 1 次（基礎 0.5 豐 Bee）：<span className="font-bold">0.85 豐 Bee</span></p>
                <p>• 領航家（2.0x）文章被收藏 1 次（基礎 0.5 豐 Bee）：<span className="font-bold">1.0 豐 Bee</span></p>
              </div>
            </div>

            <div className="p-4 bg-white/70 rounded-xl">
              <p className="font-bold text-blue-900 mb-2">範例 3：發文上架（不適用倍率）</p>
              <div className="space-y-1 text-blue-800">
                <p>• 所有等級發文上架：<span className="font-bold">1 豐 Bee</span>（固定獎勵）</p>
              </div>
            </div>
          </div>
        </div>

        {/* 提醒 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div className="space-y-2 text-sm text-green-800">
              <p className="font-bold text-green-900">升級小提示</p>
              <ul className="space-y-1.5 ml-4 list-disc">
                <li>專注<strong>提升內容品質</strong>，獲得更多「有幫助」標記，可享受倍率加成</li>
                <li>保持 DAWHO 帳戶的<strong>交易活躍度</strong>，避免被降級</li>
                <li>遵守社群規範，提供<strong>真實且有價值</strong>的投資經驗分享</li>
                <li>善用儲值豐 Bee 解鎖高階內容，加速學習成長</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}