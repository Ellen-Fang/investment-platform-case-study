import { ShoppingCart, Eye, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { CURRENT_USER } from '../mock-data';
import { Card } from './ui/card';

interface QuickTradeProps {
  stockSymbol: string;
  stockName: string;
  currentPrice?: number;
  change?: number;
}

export function QuickTrade({ stockSymbol, stockName, currentPrice = 0, change = 0 }: QuickTradeProps) {
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [showTradeDialog, setShowTradeDialog] = useState(false);

  // 檢查用戶等級是否可以使用一鍵下單
  const canTrade = ['explorer', 'navigator', 'grower', 'leader'].includes(CURRENT_USER.level);

  const handleAddToWatchlist = () => {
    setIsWatchlisted(!isWatchlisted);
  };

  const handleQuickTrade = () => {
    if (!canTrade) {
      alert('請先升級到「探索家」等級以解鎖一鍵下單功能');
      return;
    }
    setShowTradeDialog(true);
    // 這裡會打開永豐證券的下單介面
    setTimeout(() => {
      alert(`正在開啟永豐 DAWHO 下單介面...\n標的：${stockName} (${stockSymbol})`);
      setShowTradeDialog(false);
    }, 1000);
  };

  return (
    <Card className="p-5 border-2 border-primary/25 bg-gradient-to-br from-secondary/40 to-accent/30 relative overflow-hidden"
      style={{ boxShadow: '0 2px 8px rgba(217, 119, 87, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)' }}
    >
      {/* 手帳風格裝飾 */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* 標題 */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#b85f40] flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold">嵌入式交易</h3>
        </div>

        {/* 股票資訊 */}
        <div className="bg-white/80 rounded-xl p-4 mb-4 border-2 border-primary/15">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-lg font-bold">{stockName}</div>
              <div className="text-sm text-muted-foreground">{stockSymbol}</div>
            </div>
            {currentPrice > 0 && (
              <div className="text-right">
                <div className="text-xl font-bold">{currentPrice.toFixed(2)}</div>
                <div className={`text-sm flex items-center gap-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {change >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                  <span>{change >= 0 ? '+' : ''}{change.toFixed(2)}%</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 功能按鈕 */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleAddToWatchlist}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all border-2 ${
              isWatchlisted
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white/70 border-primary/30 hover:border-primary/50 hover:bg-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">{isWatchlisted ? '已加入自選' : '加入自選'}</span>
          </button>

          <button
            onClick={handleQuickTrade}
            disabled={!canTrade}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all border-2 ${
              canTrade
                ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent hover:shadow-lg'
                : 'bg-muted text-muted-foreground border-border cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">立即下單</span>
          </button>
        </div>

        {/* 等級提示 */}
        {!canTrade && (
          <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground bg-amber-50 border-2 border-amber-200 rounded-lg p-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              升級到<span className="font-bold text-amber-700">「探索家」</span>等級即可解鎖一鍵下單功能，並享有首筆交易手續費優惠！
            </p>
          </div>
        )}

        {/* 風險警示 */}
        <div className="mt-4 text-xs text-muted-foreground/80 border-t border-dashed border-primary/20 pt-3">
          <p className="flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            投資有風險，下單前請確認您的風險屬性與適合度
          </p>
        </div>
      </div>
    </Card>
  );
}
