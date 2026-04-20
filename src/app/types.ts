// User types and level system
export type UserLevel = 'guest' | 'observer' | 'explorer' | 'navigator' | 'grower' | 'leader';

// Investment topics
export type TopicCategory = 'taiwan_stock' | 'us_stock' | 'etf' | 'futures' | 'options' | 'crypto' | 'all';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  bio?: string; // 個人簡介
  level: UserLevel;
  beeCoin: number; // 一般豐 Bee（任務獲得）
  paidBeeCoin?: number; // 儲值豐 Bee（付費購買，不可退現、不可換出）
  joinedDate: string;
  // Task completion tracking
  tasksCompleted?: {
    highQualityArticlesRead?: number;
    feedbackGiven?: number;
    helpfulComments?: number;
    publishedArticles?: number;
    highRatedArticles?: number;
    realTrades?: number; // 實際交易次數
    articlesWithHighViews?: number; // 高閱讀量文章數
  };
  // User attributes
  riskProfile?: 'conservative' | 'moderate' | 'aggressive';
  investmentExperience?: 'beginner' | 'intermediate' | 'advanced';
  isVerified?: boolean;
  // DAWHO 驗證
  dawhoVerified?: boolean;
  investmentYears?: string; // e.g., "1-3年", "3-5年", "5年以上"
  hasHolding?: string[]; // 持有的標的代碼
  // Multiplier
  beeCoinMultiplier?: number; // 豐Bee累積加乘
}

export interface LevelInfo {
  level: UserLevel;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  multiplier: number; // 豐Bee累積加乘
  permissions: string[];
  tasks?: string[];
  restrictions?: string[];
  requiredBeeCoin?: number; // 需要累積的豐Bee
}

export const LEVEL_CONFIG: Record<UserLevel, LevelInfo> = {
  guest: {
    level: 'guest',
    name: '訪客',
    shortName: '訪客',
    icon: '👁️',
    color: '#9ca3af',
    multiplier: 0,
    permissions: ['有限度瀏覽文章與精選內容'],
    restrictions: ['僅限瀏覽模式'],
  },
  observer: {
    level: 'observer',
    name: '觀察家',
    shortName: '觀察家',
    icon: '🔍',
    color: '#d4c4b5',
    multiplier: 1.0,
    permissions: ['瀏覽符合風險等級之內容', '按讚', '收藏'],
    restrictions: ['無法留言、發文、使用一鍵下單'],
    tasks: [
      '完成 App 登入',
    ],
  },
  explorer: {
    level: 'explorer',
    name: '探索家',
    shortName: '探索家',
    icon: '🧭',
    color: '#c9a990',
    multiplier: 1.2,
    permissions: [
      '開放提問與留言功能',
      '使用一鍵下單',
      '獲得首筆交易手續費優惠',
    ],
    restrictions: [],
    tasks: [
      '完成投資性格測驗（風險屬性調查）',
      '成功連結或新開立永豐 DAWHO 帳戶',
      '閱讀 5 篇官方認證文章',
      '完成 3 次內容回饋',
    ],
  },
  navigator: {
    level: 'navigator',
    name: '啟航家',
    shortName: '啟航家',
    icon: '⛵',
    color: '#e6a77c',
    multiplier: 1.5,
    requiredBeeCoin: 100,
    permissions: [
      '解鎖「持倉驗證」發文標章',
      '可發表分析型文章',
      '可進入專屬討論區',
    ],
    restrictions: [
      '不可發布高風險商品策略建議',
      '發文須經自動風險標示',
    ],
    tasks: [
      '累積 100 豐Bee',
      '至少完成 1 次實際交易',
      '發布至少 10 篇非違規內容問答',
    ],
  },
  grower: {
    level: 'grower',
    name: '成長家',
    shortName: '成長家',
    icon: '🌱',
    color: '#d97757',
    multiplier: 1.7,
    requiredBeeCoin: 1000,
    permissions: [
      '文章排序優先曝光',
      '獲得「成長家專業徽章」',
      '可發佈主題專欄',
      '可建立投資觀察清單分享',
      '可申請社群主持人資格',
    ],
    restrictions: [
      '發文須加風險揭露標籤',
      '禁止保證報酬言論',
      '若內容品質下降，等級可被審查',
    ],
    tasks: [
      '累積 1,000 豐Bee',
      '發布至少 5 篇分析文章',
      '完成 10 次內容回饋',
      '累積發布至少 12 篇分析文章並且閱讀量達100以上',
      '完成進階風險商品測驗',
      '過去 3 個月無違規紀錄',
      '持續 3 個月有交易紀錄',
    ],
  },
  leader: {
    level: 'leader',
    name: '領航家',
    shortName: '領航家',
    icon: '🏆',
    color: '#b85f40',
    multiplier: 2.0,
    permissions: [
      '領航家專屬金色徽章',
      '可發佈「官方推薦文章」',
      '可主持專題討論',
      '品牌合作',
      '內容審閱協助',
    ],
    restrictions: [
      '定期專業資格再審',
    ],
    tasks: [
      '官方邀請或審核',
      '具備相關金融證照',
      '過去一年無違反社群規範紀錄',
      '持倉驗證達一定期間',
    ],
  },
};

// Bee Coin earning activities
export const BEE_REWARDS = {
  dailyLogin: 0.05, // 每日登入 +0.05 Bee/天（無上限）
  publishArticle: 1, // 發表專業文章 +1.00 Bee/篇（需符合格式/通過審核）
  publishArticleDailyLimit: 1, // 每日上限：1 篇
  publishArticleWeeklyLimit: 3, // 每週上限：3 篇
  articleHelpful: 0.5, // 文章被標記「有幫助」：+0.50 Bee/次（單篇上限：20 Bee）
  articleHelpfulLimit: 20, // 單篇文章「有幫助」上限
  replyHelpful: 0.2, // 回覆被標記「有幫助」：+0.20 Bee/次（每日上限：2 Bee）
  replyHelpfulDailyLimit: 2, // 回覆「有幫助」每日上限
  // 金融強化獎勵
  openDawhoAccountMin: 10, // 新開立永豐 DAWHO 帳戶最低獎勵
  openDawhoAccountMax: 20, // 新開立永豐 DAWHO 帳戶最高獎勵（30天內達標）
  inviteFriendMin: 5, // 成功邀請好友開戶最低獎勵
  inviteFriendMax: 15, // 成功邀請好友開戶最高獎勵（好友14天內達標）
  dailyTotalLimit: 10, // 每人每日總獲幣上限：10 Bee/日
};

// Topic categories configuration
export interface TopicInfo {
  id: TopicCategory;
  name: string;
  icon: string;
  color: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
}

export const TOPIC_CONFIG: Record<TopicCategory, TopicInfo> = {
  all: {
    id: 'all',
    name: '全部',
    icon: '📊',
    color: '#d97757',
    description: '所有投資主題',
    riskLevel: 'medium',
  },
  taiwan_stock: {
    id: 'taiwan_stock',
    name: '台股',
    icon: '🇹🇼',
    color: '#e6a77c',
    description: '台灣股市討論與分析',
    riskLevel: 'medium',
  },
  us_stock: {
    id: 'us_stock',
    name: '美股',
    icon: '🇺🇸',
    color: '#c9a990',
    description: '美國股市討論與分析',
    riskLevel: 'medium',
  },
  etf: {
    id: 'etf',
    name: 'ETF',
    icon: '📈',
    color: '#d4c4b5',
    description: 'ETF投資策略與配置',
    riskLevel: 'low',
  },
  futures: {
    id: 'futures',
    name: '期貨',
    icon: '⚡',
    color: '#f4c794',
    description: '期貨交易策略與風險管理',
    riskLevel: 'high',
  },
  options: {
    id: 'options',
    name: '選擇權',
    icon: '🎯',
    color: '#d97757',
    description: '選擇權策略與應用',
    riskLevel: 'high',
  },
  crypto: {
    id: 'crypto',
    name: '加密貨幣',
    icon: '₿',
    color: '#b85f40',
    description: '加密貨幣市場分析',
    riskLevel: 'high',
  },
};

// Article types
export interface Article {
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
  category?: TopicCategory; // 所屬主題版區
  stockSymbol?: string; // 相關標的代碼，用於一鍵下單
  views?: number; // 閱讀量
  helpfulCount?: number; // 被標記「有幫助」的次數
}

// Question/Thread types
export interface Question {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  answers: Answer[];
}

export interface Answer {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
}