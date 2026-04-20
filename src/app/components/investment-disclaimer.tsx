import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';

interface InvestmentDisclaimerProps {
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export function InvestmentDisclaimer({ 
  variant = 'default',
  className = '' 
}: InvestmentDisclaimerProps) {
  
  // 精簡版
  if (variant === 'compact') {
    return (
      <div className={`p-3 bg-amber-50 border border-amber-200 rounded-lg ${className}`}>
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>免責聲明：</strong>
            本平台內容僅供資訊分享與交流參考，不構成任何投資建議。投資人應自行評估風險並獨立做出投資決策，相關盈虧與風險由投資人自行承擔。
          </p>
        </div>
      </div>
    );
  }
  
  // 詳細版
  if (variant === 'detailed') {
    return (
      <div className={`p-5 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl ${className}`}>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="font-bold text-amber-900 mb-1">投資風險聲明</h4>
            <p className="text-sm text-amber-800">請詳閱以下重要資訊</p>
          </div>
        </div>
        
        <div className="space-y-3 text-sm text-amber-900">
          <div className="p-3 bg-white/60 rounded-lg border border-amber-200">
            <p className="font-semibold mb-1">⚠️ 免責聲明</p>
            <p className="text-xs leading-relaxed">
              本平台內容僅供資訊分享與交流參考，不構成任何投資建議。投資人應自行評估風險並獨立做出投資決策，相關盈虧與風險由投資人自行承擔。
            </p>
          </div>
          
          <div className="p-3 bg-white/60 rounded-lg border border-amber-200">
            <p className="font-semibold mb-1">📊 投資風險提醒</p>
            <ul className="text-xs space-y-1 ml-4">
              <li>• 投資有風險，過去績效不代表未來表現</li>
              <li>• 任何投資皆可能造成本金損失</li>
              <li>• 槓桿商品（期貨、選擇權）風險更高</li>
              <li>• 請依個人風險承受度審慎評估</li>
            </ul>
          </div>
          
          <div className="p-3 bg-white/60 rounded-lg border border-amber-200">
            <p className="font-semibold mb-1">🏦 永豐金控聲明</p>
            <p className="text-xs leading-relaxed">
              本平台由永豐金控提供，但平台內容為用戶自主分享，不代表永豐金控立場或投資建議。永豐金控不對用戶內容的正確性、完整性或適用性負責。
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // 預設版本
  return (
    <div className={`p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg ${className}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-amber-900 mb-1">投資風險聲明</p>
          <p className="text-xs text-amber-800 leading-relaxed">
            本平台內容僅供資訊分享與交流參考，不構成任何投資建議。投資人應自行評估風險並獨立做出投資決策，相關盈虧與風險由投資人自行承擔。
          </p>
          <p className="text-xs text-amber-700 mt-2 leading-relaxed">
            投資有風險，過去績效不代表未來表現。任何投資皆可能造成本金損失，請依個人風險承受度審慎評估。
          </p>
        </div>
      </div>
    </div>
  );
}

// 頁腳版免責聲明（用於文章底部）
export function ArticleFooterDisclaimer() {
  return (
    <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
        <div className="flex items-start gap-2 mb-2">
          <Info className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
          <p className="text-xs font-semibold text-gray-700">免責聲明</p>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed ml-6">
          本平台內容僅供資訊分享與交流參考，不構成任何投資建議。投資人應自行評估風險並獨立做出投資決策，相關盈虧與風險由投資人自行承擔。
        </p>
      </div>
    </div>
  );
}
