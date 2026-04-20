import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

// 卡通風格的圓圈朋友 SVG 組件 - 精緻版
function CircleOfFriends({ size = 'normal' }: { size?: 'normal' | 'large' }) {
  const scale = size === 'large' ? 1.2 : 1;
  
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
      <g transform={`translate(100, 35) scale(${scale})`}>
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
      <g transform={`translate(156, 56) scale(${scale})`}>
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
      <g transform={`translate(156, 144) scale(${scale})`}>
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
      <g transform={`translate(100, 165) scale(${scale})`}>
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
      <g transform={`translate(44, 144) scale(${scale})`}>
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
      <g transform={`translate(44, 56) scale(${scale})`}>
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

export function AboutIcon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background pb-20">
      {/* 頂部導航 */}
      <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b-2 border-primary/20 z-40" style={{ boxShadow: '0 2px 12px rgba(217, 119, 87, 0.08)' }}>
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">返回</span>
          </Link>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* 標題區 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">永你一起豐</h1>
          <p className="text-muted-foreground">投資社群日記 · 讓投資成為一種溫暖的陪伴</p>
        </div>

        {/* App Icon 大圖展示 */}
        <div className="mb-8">
          <div className="relative w-full max-w-sm mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#b85f40] rounded-3xl transform rotate-2 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff5e6] via-[#fef3e2] to-[#ffefd5] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white/70">
              <div className="w-full h-full p-8">
                <CircleOfFriends size="large" />
              </div>
            </div>
          </div>
        </div>

        {/* Icon 說明 */}
        <div className="bg-card rounded-3xl border-2 border-primary/10 p-6 mb-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎨</span>
            設計理念
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">手拉手的朋友</h3>
                <p className="text-sm text-muted-foreground">象徵投資路上不孤單，社群夥伴相互支持。六位朋友代表著多元的投資者，無論你是新手還是老手，都能在這裡找到歸屬感。</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔄</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">圍成圓圈</h3>
                <p className="text-sm text-muted-foreground">代表平等、包容，每個人都是社群重要的一份子。沒有誰比誰更重要，我們圍坐在一起，分享經驗、共同成長。</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌈</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">多元色彩</h3>
                <p className="text-sm text-muted-foreground">不同背景的投資者，共同打造豐富的投資社群。紅色的熱情、橘色的活力、綠色的成長、藍色的穩健、紫色的創新、粉色的溫暖——每一種顏色都代表著獨特的你。</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f4c430]/30 to-[#f4c430]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💛</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">中心愛心</h3>
                <p className="text-sm text-muted-foreground">金黃色愛心象徵豐 Bee 與溫暖，投資不再冰冷。如同蜜蜂辛勤採蜜，我們用心經營每一筆投資，用愛心連結每一位夥伴。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 品牌故事 */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 rounded-3xl border-2 border-primary/10 p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>✨</span>
            品牌故事
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              「永你一起豐」不只是一個投資平台，更是一個溫暖的社群家園。我們相信，投資不應該是孤獨的旅程，而是一群志同道合的朋友，手拉手一起前進的冒險。
            </p>
            <p>
              在這裡，你可以分享你的投資心得，向前輩學習寶貴經驗，也能幫助剛起步的新手。透過豐 Bee 貨幣系統，你的每一次參與、每一篇分享，都能獲得實質回饋。
            </p>
            <p>
              從「訪客」到「領航家」，六個等級不僅代表你的成長軌跡，更象徵著你在社群中的貢獻與影響力。讓我們一起，把投資變得更有溫度、更有意義。
            </p>
          </div>
        </div>

        {/* 豐 Bee 介紹 */}
        <div className="bg-card rounded-3xl border-2 border-[#f4c430]/20 p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4c430] to-[#d4af37] flex items-center justify-center text-2xl shadow-md">
              🐝
            </div>
            <div>
              <h2 className="text-xl font-bold">豐 Bee 虛擬貨幣</h2>
              <p className="text-sm text-muted-foreground">辛勤採蜜，收穫豐盛</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">📝</span>
              <span>發表文章、分享經驗，即可獲得豐 Bee 獎勵</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">💬</span>
              <span>參與討論、留言互動，讓社群更加活躍</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">🎁</span>
              <span>使用豐 Bee 解鎖精選文章、購買主題、享受跨行轉帳優惠</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold">⏰</span>
              <span>每日登入即可獲得豐 Bee，養成投資學習的好習慣</span>
            </p>
          </div>
        </div>

        {/* 等級系統 */}
        <div className="bg-card rounded-3xl border-2 border-primary/10 p-6 mb-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎖️</span>
            等級系統
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">👀</div>
              <div className="flex-1">
                <div className="font-bold">訪客 (Level 0)</div>
                <div className="text-xs text-muted-foreground">探索平台，發掘投資世界</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">🔍</div>
              <div className="flex-1">
                <div className="font-bold">觀察家 (Level 1)</div>
                <div className="text-xs text-muted-foreground">學習觀察，累積知識</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">🌱</div>
              <div className="flex-1">
                <div className="font-bold">探索家 (Level 2)</div>
                <div className="text-xs text-muted-foreground">主動探索，嘗試投資</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">⛵</div>
              <div className="flex-1">
                <div className="font-bold">啟航家 (Level 3)</div>
                <div className="text-xs text-muted-foreground">啟航出發，建立策略</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">🌳</div>
              <div className="flex-1">
                <div className="font-bold">成長家 (Level 4)</div>
                <div className="text-xs text-muted-foreground">持續成長，分享經驗</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">🚢</div>
              <div className="flex-1">
                <div className="font-bold">領航家 (Level 5)</div>
                <div className="text-xs text-muted-foreground">引領他人，共創價值</div>
              </div>
            </div>
          </div>
        </div>

        {/* 品牌標語 */}
        <div className="text-center py-8">
          <p className="text-2xl font-bold text-primary mb-2">永你一起豐</p>
          <p className="text-muted-foreground mb-4">Your Journey, Our Community 🌟</p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#b85f40] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity"
          >
            開始你的投資旅程
          </Link>
        </div>
      </div>
    </div>
  );
}