export function BeeFriendAvatar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 頭部 */}
      <ellipse cx="60" cy="45" rx="22" ry="24" fill="#F4C896" />
      
      {/* 頭髮 */}
      <path
        d="M 38 38 Q 38 25 48 25 Q 55 25 60 28 Q 65 25 72 25 Q 82 25 82 38"
        fill="#4A4A4A"
      />
      
      {/* 耳機頭帶 */}
      <path
        d="M 35 38 Q 35 20 60 20 Q 85 20 85 38"
        stroke="#2C3E50"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* 左耳耳機 */}
      <rect x="30" y="42" width="10" height="14" rx="5" fill="#34495E" />
      <rect x="32" y="44" width="6" height="10" rx="3" fill="#2C3E50" />
      
      {/* 右耳耳機 */}
      <rect x="80" y="42" width="10" height="14" rx="5" fill="#34495E" />
      <rect x="82" y="44" width="6" height="10" rx="3" fill="#2C3E50" />
      
      {/* 麥克風桿 */}
      <path
        d="M 30 49 Q 25 52 25 58"
        stroke="#34495E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* 麥克風頭 */}
      <circle cx="25" cy="61" r="4" fill="#2C3E50" />
      <circle cx="25" cy="61" r="2.5" fill="#95A5A6" />
      
      {/* 眼睛 - 左 */}
      <circle cx="52" cy="45" r="3" fill="#2C3E50" />
      <circle cx="53" cy="44" r="1.2" fill="#FFFFFF" />
      
      {/* 眼睛 - 右 */}
      <circle cx="68" cy="45" r="3" fill="#2C3E50" />
      <circle cx="69" cy="44" r="1.2" fill="#FFFFFF" />
      
      {/* 微笑 */}
      <path
        d="M 52 52 Q 60 56 68 52"
        stroke="#2C3E50"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* 腮紅 - 左 */}
      <ellipse cx="45" cy="50" rx="4" ry="3" fill="#FFB6C1" opacity="0.5" />
      
      {/* 腮紅 - 右 */}
      <ellipse cx="75" cy="50" rx="4" ry="3" fill="#FFB6C1" opacity="0.5" />
      
      {/* 脖子 */}
      <rect x="54" y="64" width="12" height="8" fill="#F4C896" />
      
      {/* 西裝領子 */}
      <path
        d="M 54 72 L 48 85 L 54 82 L 60 85 L 66 82 L 72 85 L 66 72 Z"
        fill="#2C3E50"
      />
      
      {/* 白襯衫 */}
      <path
        d="M 54 72 L 54 82 L 60 85 L 66 82 L 66 72 Z"
        fill="#FFFFFF"
      />
      
      {/* 領帶 */}
      <path
        d="M 58 72 L 57 82 L 60 85 L 63 82 L 62 72 Z"
        fill="#D97757"
      />
      <circle cx="60" cy="73" r="1.5" fill="#D97757" />
      
      {/* 西裝外套 - 左 */}
      <path
        d="M 48 75 L 40 88 L 38 110 L 50 110 L 54 88 Z"
        fill="#34495E"
      />
      
      {/* 西裝外套 - 右 */}
      <path
        d="M 72 75 L 80 88 L 82 110 L 70 110 L 66 88 Z"
        fill="#34495E"
      />
      
      {/* 身體中央 */}
      <rect x="50" y="82" width="20" height="28" fill="#2C3E50" />
      
      {/* 襯衫領口 V 型 */}
      <path
        d="M 54 82 L 60 90 L 66 82"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="none"
      />
      
      {/* 西裝鈕扣 */}
      <circle cx="60" cy="95" r="2" fill="#95A5A6" />
      <circle cx="60" cy="103" r="2" fill="#95A5A6" />
      
      {/* 手臂 - 左 */}
      <ellipse cx="42" cy="95" rx="8" ry="18" fill="#34495E" />
      <ellipse cx="42" cy="108" rx="6" ry="8" fill="#F4C896" />
      
      {/* 手臂 - 右 */}
      <ellipse cx="78" cy="95" rx="8" ry="18" fill="#34495E" />
      <ellipse cx="78" cy="108" rx="6" ry="8" fill="#F4C896" />
      
      {/* 手勢 - 右手豎起大拇指 */}
      <path
        d="M 78 105 L 78 102 L 82 100 L 84 102 L 82 104 Z"
        fill="#F4C896"
      />
      
      {/* 小裝飾 - 蜜蜂元素 */}
      <circle cx="95" cy="30" r="8" fill="#FFD700" opacity="0.8" />
      <ellipse cx="95" cy="30" rx="8" ry="8" fill="#FFD700" opacity="0.6" />
      <path d="M 92 28 L 92 32" stroke="#2C3E50" strokeWidth="1.5" />
      <path d="M 98 28 L 98 32" stroke="#2C3E50" strokeWidth="1.5" />
      <ellipse cx="93" cy="29" rx="1" ry="1.5" fill="#2C3E50" />
      <ellipse cx="97" cy="29" rx="1" ry="1.5" fill="#2C3E50" />
      <path
        d="M 103 28 Q 105 30 103 32"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 87 28 Q 85 30 87 32"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
