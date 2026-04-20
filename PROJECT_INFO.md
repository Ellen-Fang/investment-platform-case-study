# 永你一起豐 - 投資社交平台

## 專案概述

「永你一起豐」是一個為永豐金控打造的投資經驗分享平台，讓對投資有興趣的人可以閱讀別人的投資經驗、發問交流，並透過等級系統獲得更優質的內容。

## 核心功能

### 1. 等級系統 (6個等級)
- **訪客** - 無任何功能，需要登入才能查看內容
- **觀察者 (L1)** - 0積分 - 閱讀免費文章、點讚評論、收藏文章
- **參與者 (L2)** - 100積分 - 解鎖部分付費文章、發表提問、每日豐 Bee 獎勵
- **貢獻者 (L3)** - 500積分 - 發表文章、解鎖更多付費內容、一鍵下單功能
- **可信作者 (L4)** - 2000積分 - 文章可設置付費、專屬作者標記、優先推薦
- **平台夥伴 (L5)** - 5000積分 - 所有權限、專屬活動邀請、收益分成

### 2. 豐 Bee 貨幣系統
- 平台專屬虛擬貨幣
- 用於解鎖付費文章
- 可透過活躍參與獲得

### 3. 社群功能
- **一句話快速發問** - 類似 Thread 的即時提問功能
- **文章系統** - 支援免費/付費文章
- **評論互動** - 點讚、評論、分享
- **作者追蹤** - 關注喜愛的作者

### 4. 一鍵下單
- L3 以上等級可使用
- 根據文章建議快速下單投資

## 技術架構

### 前端框架
- React 18.3.1
- React Router 7 (Data Mode)
- TypeScript

### UI 設計
- Tailwind CSS v4
- 暖色調配色方案 (#d97757 主色)
- 北歐風格設計
- 響應式佈局

### 圖標系統
- Lucide React

### 路由結構
```
/ - 首頁 (文章列表 + 問答)
/article/:id - 文章詳情
/profile - 個人中心
/create - 發表文章
/login - 登入頁面
```

## 頁面結構

### 首頁 (/src/app/pages/home.tsx)
- 歡迎橫幅（新用戶）
- 等級進度條
- 快速發問輸入框
- 文章/問答切換標籤
- 內容列表

### 個人中心 (/src/app/pages/profile.tsx)
- 用戶資訊卡片
- 豐 Bee 餘額
- 統計數據（發文數、回答數、獲讚數）
- 等級進度詳情
- 升級路徑展示
- 如何賺取經驗值指南

### 文章詳情 (/src/app/pages/article-detail.tsx)
- 文章內容
- 付費解鎖功能
- 一鍵下單按鈕（L3+）
- 評論區

### 發文頁面 (/src/app/pages/create-post.tsx)
- 標題和內容編輯
- 標籤系統
- 封面圖片上傳
- 付費設置（L4+）

## 組件目錄

### 導航組件
- `TopBar` - 頂部導航欄
- `BottomNav` - 底部導航欄

### 內容組件
- `ArticleCard` - 文章卡片
- `QuestionCard` - 問答卡片
- `CommentSection` - 評論區

### 用戶組件
- `LevelBadge` - 等級徽章
- `LevelProgressBar` - 等級進度條
- `StatCard` - 統計卡片

### 功能組件
- `WelcomeBanner` - 歡迎橫幅
- `HowToEarnPoints` - 賺取積分指南
- `FeatureTooltip` - 功能提示
- `EmptyState` - 空狀態提示

## 數據模型

### User (用戶)
```typescript
{
  id: string;
  name: string;
  avatar?: string;
  level: UserLevel;
  levelPoints: number;
  beeCoin: number;
  joinedDate: string;
}
```

### Article (文章)
```typescript
{
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: User;
  isPremium: boolean;
  beeCoinPrice?: number;
  coverImage?: string;
  createdAt: string;
  likes: number;
  comments: number;
  tags: string[];
  minLevel: UserLevel;
}
```

### Question (提問)
```typescript
{
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  answers: Answer[];
}
```

## 設計特色

### 色彩系統
- **主色調**: #d97757 (暖橘色)
- **次要色**: #f5e6d3 (米色)
- **背景色**: #fdfbf8 (暖白)
- **豐 Bee**: #f4c430 (金黃色)

### 等級顏色
- L1: #d4c4b5
- L2: #c9a990
- L3: #e6a77c
- L4: #d97757
- L5: #b85f40

### 圓角設計
- 標準圓角: 1rem
- 卡片圓角: 1-2rem
- 按鈕圓角: 0.75-1rem

## 如何測試不同等級

修改 `/src/app/mock-data.ts` 中的 `CURRENT_USER.level` 來測試不同等級的功能：

```typescript
export const CURRENT_USER: User = {
  // ...
  level: 'observer', // 改為 'participant', 'contributor', 'trusted_author', 'partner'
  levelPoints: 750,  // 調整積分
  beeCoin: 1250,     // 調整豐 Bee 餘額
  // ...
};
```

## 未來擴展建議

1. **後端整合** - 使用 Supabase 實現數據持久化
2. **即時通知** - WebSocket 實現即時更新
3. **搜尋功能** - 全文搜尋文章和問答
4. **推薦系統** - AI 推薦相關文章
5. **社交分享** - 分享到社交媒體
6. **行動應用** - React Native 版本

## 開發團隊

專為永豐金控打造的投資社群平台 💼✨
