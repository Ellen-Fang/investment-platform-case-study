import { Shield, TrendingUp } from 'lucide-react';
import { User } from '../types';

interface DawhoBadgeProps {
  user: User;
  stockSymbol?: string; // 如果有標的代碼，顯示是否持有
  size?: 'sm' | 'md';
}

export function DawhoBadge({ user, stockSymbol, size = 'md' }: DawhoBadgeProps) {
  if (!user.dawhoVerified) {
    return null;
  }

  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5';
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5';

  // 檢查是否持有該標的
  const hasStock = stockSymbol && user.hasHolding?.includes(stockSymbol);

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* DAWHO 驗證標章 */}
      <div
        className={`inline-flex items-center gap-1.5 rounded-full font-medium border-2 bg-gradient-to-r from-blue-50 to-indigo-50 ${sizeClasses}`}
        style={{
          borderColor: '#3b82f6',
          color: '#1e40af',
          boxShadow: '0 1px 3px rgba(59, 130, 246, 0.15)',
          transform: 'rotate(-0.5deg)',
        }}
      >
        <Shield className={`${iconSize} fill-current`} />
        <span>DAWHO 認證</span>
      </div>

      {/* 投資年資標章 */}
      {user.investmentYears && (
        <div
          className={`inline-flex items-center gap-1.5 rounded-full font-medium border-2 bg-gradient-to-r from-emerald-50 to-green-50 ${sizeClasses}`}
          style={{
            borderColor: '#10b981',
            color: '#065f46',
            boxShadow: '0 1px 3px rgba(16, 185, 129, 0.15)',
            transform: 'rotate(0.5deg)',
          }}
        >
          <TrendingUp className={iconSize} />
          <span>投資 {user.investmentYears}</span>
        </div>
      )}

      {/* 持有標的標章 */}
      {hasStock && (
        <div
          className={`inline-flex items-center gap-1.5 rounded-full font-medium border-2 bg-gradient-to-r from-amber-50 to-yellow-50 ${sizeClasses}`}
          style={{
            borderColor: '#f59e0b',
            color: '#92400e',
            boxShadow: '0 1px 3px rgba(245, 158, 11, 0.15)',
            transform: 'rotate(-0.5deg)',
          }}
        >
          <span className="text-base">💎</span>
          <span>已持有 {stockSymbol}</span>
        </div>
      )}
    </div>
  );
}
