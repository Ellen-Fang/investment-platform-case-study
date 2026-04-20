import { AlertTriangle, X, HelpCircle, CheckCircle, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

// 違規類別定義
export interface ComplianceViolation {
  category: 'A' | 'B' | 'C' | 'D' | 'E';
  categoryName: string;
  keyword: string;
  sentence: string;
  position: number;
}

// 合規規則定義
const COMPLIANCE_RULES = {
  A: {
    name: '買賣指令',
    keywords: [
      '立即買進', '立刻買進', '馬上買進', '快買', '趕快買',
      '立即賣出', '立刻賣出', '馬上賣出', '快賣', '趕快賣',
      '建議買進', '建議賣出', '建議進場', '建議出場',
      '現在買', '現在賣', '今天買', '明天賣',
      '全部買進', '全部賣出', '加碼買進', '停損賣出',
    ],
    examples: {
      wrong: '建議大家立即買進台積電！',
      right: '我個人觀察台積電的產業趨勢，認為值得研究。',
    },
  },
  B: {
    name: '價位/目標價/點位',
    keywords: [
      '目標價', '進場點', '出場點', '停利點', '停損點',
      '買在', '賣在', '進場價', '出場價',
      '最佳買點', '最佳賣點', '黃金買點', '黃金賣點',
      '支撐價', '壓力價', '關鍵點位',
      '設定在', '看到.*就', '跌破.*就', '突破.*就',
    ],
    examples: {
      wrong: '台積電目標價 800 元，跌破 550 就停損。',
      right: '台積電目前股價區間在 550-600 元附近震盪。',
    },
  },
  C: {
    name: '保證獲利/保本',
    keywords: [
      '保證獲利', '保證賺', '保證不賠', '保證回本',
      '穩賺', '穩賺不賠', '穩定獲利', '零風險',
      '保本', '不會賠', '絕對賺', '一定賺',
      '100%獲利', '百分之百', '保證收益',
      '無風險', '沒風險', '低風險高報酬',
    ],
    examples: {
      wrong: '這個策略保證獲利，穩賺不賠！',
      right: '這是我使用的策略，但投資有風險，請自行評估。',
    },
  },
  D: {
    name: '內線暗示',
    keywords: [
      '內線消息', '小道消息', '聽說', '據說',
      '內部消息', '可靠消息', '獨家消息',
      '朋友說', '朋友透露', '有人說',
      '主力', '大戶', '法人', '外資',
      '即將公布', '即將宣布', '快要公布',
    ],
    examples: {
      wrong: '聽說內線消息，這檔股票主力要拉了！',
      right: '根據公開財報數據，這家公司營收成長穩定。',
    },
  },
  E: {
    name: '加群帶單',
    keywords: [
      '加入群組', '加群', '加 LINE', '加賴',
      '私訊我', '私我', '聯絡我', '找我',
      '跟單', '帶單', '報明牌', '報牌',
      '代操', '代為操作', '委託操作',
      '點我', '掃碼', '點連結',
    ],
    examples: {
      wrong: '想賺錢的加我 LINE，帶你跟單！',
      right: '歡迎在留言區一起討論投資心得。',
    },
  },
};

// 檢測合規性
export function checkCompliance(text: string): ComplianceViolation[] {
  const violations: ComplianceViolation[] = [];
  
  if (!text.trim()) return violations;
  
  // 將文字分句
  const sentences = text.split(/[。！？\n]/g).filter(s => s.trim());
  
  Object.entries(COMPLIANCE_RULES).forEach(([category, rule]) => {
    rule.keywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi');
      
      sentences.forEach((sentence, index) => {
        if (regex.test(sentence)) {
          violations.push({
            category: category as 'A' | 'B' | 'C' | 'D' | 'E',
            categoryName: rule.name,
            keyword,
            sentence: sentence.trim(),
            position: index,
          });
        }
      });
    });
  });
  
  return violations;
}

// Compliance Banner 組件
interface ComplianceBannerProps {
  violations: ComplianceViolation[];
  onShowHelp: () => void;
}

export function ComplianceBanner({ violations, onShowHelp }: ComplianceBannerProps) {
  if (violations.length === 0) return null;
  
  // 統計各類別違規數量
  const categoryCounts = violations.reduce((acc, v) => {
    acc[v.category] = (acc[v.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return (
    <div className="p-4 bg-red-50 border-2 border-red-300 rounded-xl">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-red-900 mb-2 text-sm sm:text-base">⚠️ 內容不符合發文規範</h4>
          <p className="text-xs sm:text-sm text-red-800 mb-3">
            偵測到 <strong className="text-red-600">{violations.length}</strong> 處違規內容，請修改後再發布
          </p>
          
          {/* 違規類別統計 */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {Object.entries(categoryCounts).map(([cat, count]) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2 py-1 bg-red-200 text-red-900 rounded-lg text-xs font-medium"
              >
                <XCircle className="w-3 h-3 shrink-0" />
                <span className="whitespace-nowrap">
                  ({cat}) {COMPLIANCE_RULES[cat as keyof typeof COMPLIANCE_RULES].name} × {count}
                </span>
              </span>
            ))}
          </div>
          
          {/* 違規句子列表 - 手機版只顯示前2條 */}
          <div className="space-y-2 mb-3">
            {violations.slice(0, window.innerWidth < 640 ? 2 : 3).map((violation, idx) => (
              <div
                key={idx}
                className="p-2 bg-white border border-red-200 rounded-lg"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-bold text-red-600 shrink-0">
                    ({violation.category})
                  </span>
                  <p className="text-xs text-red-900 flex-1 break-words">
                    <span className="bg-red-200 px-1 rounded">{violation.sentence}</span>
                  </p>
                </div>
              </div>
            ))}
            {violations.length > (window.innerWidth < 640 ? 2 : 3) && (
              <p className="text-xs text-red-700">
                還有 {violations.length - (window.innerWidth < 640 ? 2 : 3)} 處違規內容...
              </p>
            )}
          </div>
          
          <button
            onClick={onShowHelp}
            className="text-xs sm:text-sm text-red-700 hover:text-red-900 active:text-red-950 font-medium underline flex items-center gap-1 py-1"
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>如何修改？查看合規寫法範例</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// 阻擋 Modal 組件
interface BlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  violations: ComplianceViolation[];
  onShowHelp: () => void;
}

export function BlockModal({ isOpen, onClose, violations, onShowHelp }: BlockModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">無法發布文章</h3>
                <p className="text-sm text-red-100 mt-1">內容包含違規用語，請修改後再試</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* 違規說明 */}
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-900 leading-relaxed">
              為確保社群合規與用戶權益，永豐金控「永你一起豐」平台<strong>禁止發布投資建議、明牌、或任何可能誤導用戶的內容</strong>。
              以下內容包含 <strong className="text-red-600">{violations.length}</strong> 處違規，請修改：
            </p>
          </div>
          
          {/* 違規內容列表 */}
          <div className="space-y-4 mb-6">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              違規內容明細
            </h4>
            
            {violations.map((violation, idx) => (
              <div
                key={idx}
                className="p-4 border-2 border-red-300 rounded-xl bg-white"
              >
                {/* 違規類別 */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    ({violation.category})
                  </span>
                  <span className="text-sm font-semibold text-red-900">
                    {violation.categoryName}
                  </span>
                </div>
                
                {/* 違規句子 */}
                <div className="mb-3 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="text-xs text-gray-500">違規內容：</span>
                  </p>
                  <p className="text-sm text-red-900 font-medium">
                    「{violation.sentence}」
                  </p>
                </div>
                
                {/* 修改建議 */}
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">✅ 合規寫法範例：</p>
                  <p className="text-sm text-green-900">
                    {COMPLIANCE_RULES[violation.category].examples.right}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 修改提示 */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900 leading-relaxed">
                <p className="font-semibold mb-2">💡 修改建議：</p>
                <ul className="space-y-1 ml-4">
                  <li>• 將「建議買進」改為「值得研究」或「可以觀察」</li>
                  <li>• 將「目標價 XX 元」改為「股價區間在 XX 附近」</li>
                  <li>• 將「穩賺不賠」改為「投資有風險，請自行評估」</li>
                  <li>• 分享個人經驗和學習心得，而非投資建議</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 按鈕組 */}
          <div className="flex gap-3">
            <button
              onClick={onShowHelp}
              className="flex-1 py-3 px-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-5 h-5" />
              查看完整合規指南
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              返回修改
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Help Drawer 組件
interface HelpDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpDrawer({ isOpen, onClose }: HelpDrawerProps) {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center sm:justify-end"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full sm:w-[500px] h-[85vh] sm:h-full flex flex-col rounded-t-3xl sm:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - 固定在頂部 */}
        <div className="bg-gradient-to-r from-primary to-[#b85f40] text-white p-5 sm:p-6 rounded-t-3xl sm:rounded-none flex-shrink-0">
          {/* 手機版拖拽指示器 */}
          <div className="sm:hidden flex justify-center mb-3">
            <div className="w-12 h-1.5 bg-white/40 rounded-full"></div>
          </div>
          
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">合規發文指南</h3>
                <p className="text-sm text-white/80 mt-0.5">如何撰寫符合規範的內容</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white -mt-1 -mr-1 p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Content - 可滾動區域 */}
        <div 
          className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 sm:space-y-6"
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
          }}
        >
          {/* 簡介 */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-900 leading-relaxed">
              為保護所有用戶權益，平台<strong>禁止發布投資建議、明牌、保證獲利等內容</strong>。
              請分享「個人經驗」與「學習心得」，而非「投資指令」。
            </p>
          </div>
          
          {/* 五大違規類別 */}
          {Object.entries(COMPLIANCE_RULES).map(([category, rule]) => (
            <div
              key={category}
              className="border-2 border-gray-200 rounded-xl overflow-hidden"
            >
              {/* 類別標題 */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                    ({category})
                  </span>
                  <h4 className="font-bold text-gray-900">{rule.name}</h4>
                </div>
              </div>
              
              {/* 內容 */}
              <div className="p-4 space-y-3">
                {/* 常見違規用語 */}
                <div>
                  <p className="text-xs text-gray-600 mb-2">❌ 常見違規用語：</p>
                  <div className="flex flex-wrap gap-1.5">
                    {rule.keywords.slice(0, 8).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                    {rule.keywords.length > 8 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        等 {rule.keywords.length} 個...
                      </span>
                    )}
                  </div>
                </div>
                
                {/* 錯誤範例 */}
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">❌ 錯誤範例：</p>
                  <p className="text-sm text-red-900 font-medium leading-relaxed">
                    {rule.examples.wrong}
                  </p>
                </div>
                
                {/* 正確範例 */}
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">✅ 正確範例：</p>
                  <p className="text-sm text-green-900 font-medium leading-relaxed">
                    {rule.examples.right}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* 合規寫作技巧 */}
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
            <div className="flex items-start gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <h4 className="font-bold text-green-900">✅ 合規寫作技巧</h4>
            </div>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>使用「我個人觀察」、「我的學習心得」等主觀描述</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>分享投資過程與思考邏輯，而非具體操作指令</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>提供數據來源與參考資料，而非內線消息</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>強調「投資有風險」，避免保證獲利的說法</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>鼓勵讀者獨立研究，而非盲目跟單</span>
              </li>
            </ul>
          </div>
          
          {/* 關閉按鈕 - 加大手機點擊區域 */}
          <button
            onClick={onClose}
            className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 active:bg-primary/80 transition-colors text-base"
          >
            我了解了
          </button>
          
          {/* 底部安全距離 */}
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
}