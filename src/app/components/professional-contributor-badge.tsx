import { Award, CheckCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { BadgeRulesModal } from './badge-rules-modal';

interface ProfessionalContributorBadgeProps {
  helpfulCount: number;
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
}

// 專業貢獻章門檻設定
const BADGE_THRESHOLDS = {
  bronze: { min: 10, name: '銅牌貢獻者', color: '#cd7f32', icon: '🥉' },
  silver: { min: 30, name: '銀牌貢獻者', color: '#c0c0c0', icon: '🥈' },
  gold: { min: 50, name: '金牌貢獻者', color: '#ffd700', icon: '🥇' },
  platinum: { min: 100, name: '白金貢獻者', color: '#e5e4e2', icon: '💎' },
};

// 根據有幫助次數判斷徽章等級
function getBadgeLevel(helpfulCount: number) {
  if (helpfulCount >= BADGE_THRESHOLDS.platinum.min) return 'platinum';
  if (helpfulCount >= BADGE_THRESHOLDS.gold.min) return 'gold';
  if (helpfulCount >= BADGE_THRESHOLDS.silver.min) return 'silver';
  if (helpfulCount >= BADGE_THRESHOLDS.bronze.min) return 'bronze';
  return null;
}

export function ProfessionalContributorBadge({ 
  helpfulCount, 
  size = 'md',
  showTooltip = true 
}: ProfessionalContributorBadgeProps) {
  const badgeLevel = getBadgeLevel(helpfulCount);
  
  // 如果沒有達到門檻，不顯示徽章
  if (!badgeLevel) return null;
  
  const badge = BADGE_THRESHOLDS[badgeLevel];
  
  // 尺寸設定
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  };
  
  const iconSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };
  
  return (
    <div className="relative inline-block group">
      <div 
        className={`inline-flex items-center ${sizeClasses[size]} rounded-full font-bold text-white shadow-md`}
        style={{ 
          background: `linear-gradient(135deg, ${badge.color} 0%, ${adjustColor(badge.color, -20)} 100%)`,
          boxShadow: `0 2px 8px ${badge.color}40, 0 1px 3px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <span className="text-base">{badge.icon}</span>
        <Award className={iconSize[size]} />
        <span>專業貢獻章</span>
      </div>
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block z-10 w-max">
          <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span className="font-bold">{badge.name}</span>
            </div>
            <p className="text-gray-300">
              此文章已被標記「有幫助」<strong className="text-white"> {helpfulCount} </strong>次
            </p>
            {badgeLevel !== 'platinum' && (
              <p className="text-gray-400 text-xs mt-1">
                再 {getNextThreshold(badgeLevel) - helpfulCount} 次升級至 {getNextBadgeName(badgeLevel)}
              </p>
            )}
            {/* 箭頭 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// 簡化版 - 只顯示圖示
export function ProfessionalContributorBadgeIcon({ 
  helpfulCount 
}: { 
  helpfulCount: number 
}) {
  const badgeLevel = getBadgeLevel(helpfulCount);
  
  if (!badgeLevel) return null;
  
  const badge = BADGE_THRESHOLDS[badgeLevel];
  
  return (
    <div 
      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-sm shadow-sm"
      style={{ 
        background: `linear-gradient(135deg, ${badge.color} 0%, ${adjustColor(badge.color, -20)} 100%)`,
      }}
      title={`${badge.name} - ${helpfulCount} 次有幫助`}
    >
      <span>{badge.icon}</span>
    </div>
  );
}

// 輔助函數：調整顏色亮度
function adjustColor(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// 獲取下一個門檻
function getNextThreshold(currentLevel: string): number {
  const levels = ['bronze', 'silver', 'gold', 'platinum'];
  const currentIndex = levels.indexOf(currentLevel);
  if (currentIndex < levels.length - 1) {
    const nextLevel = levels[currentIndex + 1];
    return BADGE_THRESHOLDS[nextLevel as keyof typeof BADGE_THRESHOLDS].min;
  }
  return 0;
}

// 獲取下一個徽章名稱
function getNextBadgeName(currentLevel: string): string {
  const levels = ['bronze', 'silver', 'gold', 'platinum'];
  const currentIndex = levels.indexOf(currentLevel);
  if (currentIndex < levels.length - 1) {
    const nextLevel = levels[currentIndex + 1];
    return BADGE_THRESHOLDS[nextLevel as keyof typeof BADGE_THRESHOLDS].name;
  }
  return '';
}