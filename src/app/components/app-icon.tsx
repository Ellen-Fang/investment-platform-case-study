import { Link } from 'react-router';

interface AppIconProps {
  size?: 'small' | 'medium' | 'large';
  clickable?: boolean;
  className?: string;
}

// 卡通風格的圓圈朋友 SVG 組件 - 精緻版
function CircleOfFriends() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      {/* 中心的愛心光暈 */}
      <circle cx="100" cy="100" r="25" fill="#f4c430" opacity="0.2"/>
      <circle cx="100" cy="100" r="15" fill="#f4c430" opacity="0.3"/>
      {/* 金黃愛心 */}
      <path d="M 100 95 L 92 103 L 100 113 L 108 103 Z" fill="#f4c430" opacity="0.95"/>
      <circle cx="96" cy="99" r="3" fill="#fff" opacity="0.6"/>
      
      {/* 虛線圓圈連接 */}
      <circle cx="100" cy="100" r="65" stroke="#d97757" strokeWidth="2.5" opacity="0.35" fill="none" strokeDasharray="8,4"/>
      
      {/* 小人 1 - 上方 (女生，長髮，紅色) */}
      <g transform="translate(100, 35)">
        {/* 身體 */}
        <ellipse cx="0" cy="16" rx="8" ry="10" fill="#ff6b6b" opacity="0.9"/>
        {/* 腿 */}
        <rect x="-3" y="24" width="2.5" height="8" rx="1.2" fill="#ff5252"/>
        <rect x="0.5" y="24" width="2.5" height="8" rx="1.2" fill="#ff5252"/>
        {/* 頭 */}
        <circle cx="0" cy="0" r="7" fill="#ffd4a3"/>
        {/* 長髮 */}
        <ellipse cx="0" cy="0" rx="8" ry="9" fill="#8b4513" opacity="0.9"/>
        <ellipse cx="0" cy="1" rx="7.5" ry="8" fill="#8b4513"/>
        <path d="M -7 2 Q -8 10 -6 14" stroke="#8b4513" strokeWidth="2" fill="none"/>
        <path d="M 7 2 Q 8 10 6 14" stroke="#8b4513" strokeWidth="2" fill="none"/>
        {/* 臉部特徵 */}
        <circle cx="0" cy="0" r="7" fill="#ffd4a3"/>
        <circle cx="-2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="-2.2" cy="-1.3" r="0.5" fill="white"/>
        <circle cx="2.8" cy="-1.3" r="0.5" fill="white"/>
        <path d="M -3 2.5 Q 0 4 3 2.5" stroke="#ff6b6b" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* 腮紅 */}
        <circle cx="-4" cy="1" r="1.5" fill="#ff9999" opacity="0.4"/>
        <circle cx="4" cy="1" r="1.5" fill="#ff9999" opacity="0.4"/>
        {/* 手臂 */}
        <rect x="-9" y="13" width="3" height="7" rx="1.5" fill="#ffd4a3" transform="rotate(-30, -7.5, 16.5)"/>
        <rect x="6" y="13" width="3" height="7" rx="1.5" fill="#ffd4a3" transform="rotate(30, 7.5, 16.5)"/>
      </g>
      
      {/* 小人 2 - 右上 (男生，短髮，橘色) */}
      <g transform="translate(156, 56)">
        {/* 身體 */}
        <ellipse cx="0" cy="16" rx="8" ry="10" fill="#ffa94d" opacity="0.9"/>
        {/* 腿 */}
        <rect x="-3" y="24" width="2.5" height="8" rx="1.2" fill="#ff9500"/>
        <rect x="0.5" y="24" width="2.5" height="8" rx="1.2" fill="#ff9500"/>
        {/* 短髮（在頭部後面） */}
        <ellipse cx="0" cy="-2" rx="8" ry="7" fill="#2d2d2d"/>
        {/* 頭 */}
        <circle cx="0" cy="0" r="7" fill="#f4c4a0"/>
        {/* 臉部特徵 */}
        <circle cx="-2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="-2.2" cy="-1.3" r="0.5" fill="white"/>
        <circle cx="2.8" cy="-1.3" r="0.5" fill="white"/>
        <path d="M -3 2.5 Q 0 4 3 2.5" stroke="#ff8800" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* 手臂 */}
        <rect x="-9" y="13" width="3" height="7" rx="1.5" fill="#f4c4a0" transform="rotate(-35, -7.5, 16.5)"/>
        <rect x="6" y="13" width="3" height="7" rx="1.5" fill="#f4c4a0" transform="rotate(35, 7.5, 16.5)"/>
      </g>
      
      {/* 小人 3 - 右下 (女生，波浪捲髮，綠色) */}
      <g transform="translate(156, 144)">
        {/* 身體 */}
        <ellipse cx="0" cy="16" rx="8" ry="10" fill="#51cf66" opacity="0.9"/>
        {/* 腿 */}
        <rect x="-3" y="24" width="2.5" height="8" rx="1.2" fill="#3bb54a"/>
        <rect x="0.5" y="24" width="2.5" height="8" rx="1.2" fill="#3bb54a"/>
        {/* 頭 */}
        <circle cx="0" cy="0" r="7" fill="#ffd9b3"/>
        {/* 波浪捲髮 */}
        <ellipse cx="0" cy="-1" rx="8.5" ry="9" fill="#c17817"/>
        <path d="M -8 0 Q -9 3 -8 6 Q -7 9 -5 10" stroke="#c17817" strokeWidth="2.5" fill="none"/>
        <path d="M 8 0 Q 9 3 8 6 Q 7 9 5 10" stroke="#c17817" strokeWidth="2.5" fill="none"/>
        <circle cx="-5" cy="-2" r="2" fill="#c17817"/>
        <circle cx="5" cy="-2" r="2" fill="#c17817"/>
        {/* 臉部特徵 */}
        <circle cx="0" cy="0" r="7" fill="#ffd9b3"/>
        <circle cx="-2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="-2.2" cy="-1.3" r="0.5" fill="white"/>
        <circle cx="2.8" cy="-1.3" r="0.5" fill="white"/>
        <path d="M -3 2.5 Q 0 4 3 2.5" stroke="#51cf66" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* 腮紅 */}
        <circle cx="-4" cy="1" r="1.5" fill="#ffb3b3" opacity="0.4"/>
        <circle cx="4" cy="1" r="1.5" fill="#ffb3b3" opacity="0.4"/>
        {/* 手臂 */}
        <rect x="-9" y="13" width="3" height="7" rx="1.5" fill="#ffd9b3" transform="rotate(-25, -7.5, 16.5)"/>
        <rect x="6" y="13" width="3" height="7" rx="1.5" fill="#ffd9b3" transform="rotate(25, 7.5, 16.5)"/>
      </g>
      
      {/* 小人 4 - 下方 (男生，俐落短髮，藍色) */}
      <g transform="translate(100, 165)">
        {/* 身體 */}
        <ellipse cx="0" cy="16" rx="8" ry="10" fill="#4dabf7" opacity="0.9"/>
        {/* 腿 */}
        <rect x="-3" y="24" width="2.5" height="8" rx="1.2" fill="#339af0"/>
        <rect x="0.5" y="24" width="2.5" height="8" rx="1.2" fill="#339af0"/>
        {/* 短髮（在頭部後面） */}
        <ellipse cx="0" cy="-2" rx="8" ry="6.5" fill="#1a1a1a"/>
        {/* 頭 */}
        <circle cx="0" cy="0" r="7" fill="#f0c89a"/>
        {/* 臉部特徵 */}
        <circle cx="-2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="-2.2" cy="-1.3" r="0.5" fill="white"/>
        <circle cx="2.8" cy="-1.3" r="0.5" fill="white"/>
        <path d="M -3 2.5 Q 0 4 3 2.5" stroke="#4dabf7" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* 手臂 */}
        <rect x="-9" y="13" width="3" height="7" rx="1.5" fill="#f0c89a" transform="rotate(-30, -7.5, 16.5)"/>
        <rect x="6" y="13" width="3" height="7" rx="1.5" fill="#f0c89a" transform="rotate(30, 7.5, 16.5)"/>
      </g>
      
      {/* 小人 5 - 左下 (女生，丸子頭，紫色) */}
      <g transform="translate(44, 144)">
        {/* 身體 */}
        <ellipse cx="0" cy="16" rx="8" ry="10" fill="#cc5de8" opacity="0.9"/>
        {/* 腿 */}
        <rect x="-3" y="24" width="2.5" height="8" rx="1.2" fill="#b23dd9"/>
        <rect x="0.5" y="24" width="2.5" height="8" rx="1.2" fill="#b23dd9"/>
        {/* 頭 */}
        <circle cx="0" cy="0" r="7" fill="#ffe0cc"/>
        {/* 丸子頭 */}
        <ellipse cx="0" cy="-2" rx="7" ry="7" fill="#5d3a1a"/>
        <circle cx="0" cy="-8" r="4" fill="#5d3a1a"/>
        <circle cx="0" cy="-8" r="3.5" fill="#6b4423"/>
        {/* 臉部特徵 */}
        <circle cx="0" cy="0" r="7" fill="#ffe0cc"/>
        <circle cx="-2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="-2.2" cy="-1.3" r="0.5" fill="white"/>
        <circle cx="2.8" cy="-1.3" r="0.5" fill="white"/>
        <path d="M -3 2.5 Q 0 4 3 2.5" stroke="#cc5de8" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* 腮紅 */}
        <circle cx="-4" cy="1" r="1.5" fill="#ff99cc" opacity="0.4"/>
        <circle cx="4" cy="1" r="1.5" fill="#ff99cc" opacity="0.4"/>
        {/* 手臂 */}
        <rect x="-9" y="13" width="3" height="7" rx="1.5" fill="#ffe0cc" transform="rotate(-25, -7.5, 16.5)"/>
        <rect x="6" y="13" width="3" height="7" rx="1.5" fill="#ffe0cc" transform="rotate(25, 7.5, 16.5)"/>
      </g>
      
      {/* 小人 6 - 左上 (男生，蓬鬆髮，粉色) */}
      <g transform="translate(44, 56)">
        {/* 身體 */}
        <ellipse cx="0" cy="16" rx="8" ry="10" fill="#ff8787" opacity="0.9"/>
        {/* 腿 */}
        <rect x="-3" y="24" width="2.5" height="8" rx="1.2" fill="#ff6b6b"/>
        <rect x="0.5" y="24" width="2.5" height="8" rx="1.2" fill="#ff6b6b"/>
        {/* 頭 */}
        <circle cx="0" cy="0" r="7" fill="#f5d0b8"/>
        {/* 蓬鬆髮型 */}
        <ellipse cx="0" cy="-2" rx="8" ry="8" fill="#4a3728"/>
        <circle cx="-3" cy="-5" r="2.5" fill="#4a3728"/>
        <circle cx="3" cy="-5" r="2.5" fill="#4a3728"/>
        <circle cx="0" cy="-6" r="2" fill="#4a3728"/>
        {/* 臉部特徵 */}
        <circle cx="0" cy="0" r="7" fill="#f5d0b8"/>
        <circle cx="-2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="2.5" cy="-1" r="1.3" fill="#3d3d3d"/>
        <circle cx="-2.2" cy="-1.3" r="0.5" fill="white"/>
        <circle cx="2.8" cy="-1.3" r="0.5" fill="white"/>
        <path d="M -3 2.5 Q 0 4 3 2.5" stroke="#ff8787" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* 手臂 */}
        <rect x="-9" y="13" width="3" height="7" rx="1.5" fill="#f5d0b8" transform="rotate(-35, -7.5, 16.5)"/>
        <rect x="6" y="13" width="3" height="7" rx="1.5" fill="#f5d0b8" transform="rotate(35, 7.5, 16.5)"/>
      </g>
      
    </svg>
  );
}

export function AppIcon({ size = 'medium', clickable = false, className = '' }: AppIconProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  const iconContent = (
    <div className={`relative ${sizeClasses[size]} ${className} ${clickable ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}>
      {/* 背景裝飾層 - 旋轉效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#b85f40] rounded-2xl transform rotate-3 transition-transform hover:rotate-6"></div>
      
      {/* 主要 Icon 層 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5e6] via-[#fef3e2] to-[#ffefd5] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/50">
        <div className="w-full h-full p-1">
          <CircleOfFriends />
        </div>
      </div>
    </div>
  );

  // 如果可點擊，用 Link 包裹
  if (clickable) {
    return (
      <Link to="/about-icon" aria-label="查看 App Icon 說明">
        {iconContent}
      </Link>
    );
  }

  return iconContent;
}