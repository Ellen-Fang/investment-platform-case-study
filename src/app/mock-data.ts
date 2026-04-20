import { User, Article, Question, UserLevel } from './types';

// Re-export LEVEL_CONFIG from types for convenience
export { LEVEL_CONFIG, BEE_REWARDS } from './types';

// Mock current user - change this to test different levels
export const CURRENT_USER: User = {
  id: 'user-1',
  name: '林雅婷',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  bio: '投資新手，目前專注學習ETF定期定額投資。希望在這個社群與大家互相交流學習！',
  level: 'explorer',
  beeCoin: 145, // 一般豐 Bee（任務獲得）
  paidBeeCoin: 20, // 儲值豐 Bee（付費購買）
  joinedDate: '2025-01-15',
  tasksCompleted: {
    highQualityArticlesRead: 5,
    feedbackGiven: 3,
    helpfulComments: 4,
    publishedArticles: 3,
    highRatedArticles: 2,
    realTrades: 2,
  },
  riskProfile: 'moderate',
  investmentExperience: 'intermediate',
  dawhoVerified: true,
  investmentYears: '3-5年',
  hasHolding: ['2330', 'AAPL', '0050'],
  beeCoinMultiplier: 1.2,
};

// Mock articles
export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: '2026年台股投資趨勢分析：AI與半導體的黃金時代',
    excerpt: '深入探討台積電、聯發科等龍頭股的投資機會，以及如何佈局未來科技浪潮...',
    content: '完整文章內容...',
    author: {
      id: 'author-1',
      name: '投資達人王大華',
      level: 'grower',
      beeCoin: 5000,
      joinedDate: '2024-06-01',
      avatar: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?w=100&h=100&fit=crop',
      dawhoVerified: true,
      investmentYears: '5年以上',
      hasHolding: ['2330', '2454', '0050'],
      beeCoinMultiplier: 1.7,
    },
    isPremium: false,
    coverImage: 'https://images.unsplash.com/photo-1713461983836-de0a45009424?w=800&h=400&fit=crop',
    createdAt: '2026-02-10T10:30:00Z',
    likes: 128,
    comments: 45,
    tags: ['台股', 'AI', '半導體', '長期投資'],
    minLevel: 'observer',
    category: 'taiwan_stock',
    stockSymbol: '2330',
    views: 1250,
    helpfulCount: 65, // 專業貢獻章：金牌
  },
  {
    id: '2',
    title: '美股選擇權策略實戰：每月創造5%被動收入',
    excerpt: '分享我如何透過賣出選擇權，在風險可控的情況下創造穩定現金流...',
    content: '完整文章內容...',
    author: {
      id: 'author-2',
      name: 'Sarah Lin',
      level: 'leader',
      beeCoin: 12000,
      joinedDate: '2024-03-15',
      avatar: 'https://images.unsplash.com/photo-1543879739-ab87be3df369?w=100&h=100&fit=crop',
      dawhoVerified: true,
      investmentYears: '5年以上',
      hasHolding: ['AAPL', 'NVDA', 'TSLA'],
      beeCoinMultiplier: 2.0,
    },
    isPremium: true,
    beeCoinPrice: 149, // 深度策略（49-99 Bee）
    coverImage: 'https://images.unsplash.com/photo-1761735486587-bcac08b15c79?w=800&h=400&fit=crop',
    createdAt: '2026-02-09T15:20:00Z',
    likes: 256,
    comments: 89,
    tags: ['美股', '選擇權', '被動收入', '進階策略'],
    minLevel: 'explorer',
    category: 'options',
    stockSymbol: 'AAPL',
    views: 2340,
    helpfulCount: 142, // 專業貢獻章：白金
  },
  {
    id: '3',
    title: '新手必看：ETF定期定額投資完整攻略',
    excerpt: '從0開始建立投資組合，適合剛入門的投資者。包含ETF選擇、資產配置建議...',
    content: '完整文章內容...',
    author: {
      id: 'author-3',
      name: '理財新手村',
      level: 'navigator',
      beeCoin: 1500,
      joinedDate: '2025-08-20',
      dawhoVerified: true,
      investmentYears: '1-3年',
      hasHolding: ['0050', '0056'],
      beeCoinMultiplier: 1.5,
    },
    isPremium: false,
    coverImage: 'https://images.unsplash.com/photo-1762608206423-be8c07645de7?w=800&h=400&fit=crop',
    createdAt: '2026-02-08T09:15:00Z',
    likes: 342,
    comments: 112,
    tags: ['ETF', '新手入門', '定期定額', '資產配置'],
    minLevel: 'observer',
    category: 'etf',
    stockSymbol: '0050',
    views: 3420,
    helpfulCount: 38, // 專業貢獻章：銀牌
  },
  {
    id: '4',
    title: '加密貨幣牛市來臨？比特幣突破10萬美元後的投資策略',
    excerpt: '分析比特幣、以太坊等主流幣種的技術面與基本面，提供風險管理建議...',
    content: '完整文章內容...',
    author: {
      id: 'author-4',
      name: 'Crypto King',
      level: 'grower',
      beeCoin: 8000,
      joinedDate: '2024-11-05',
      dawhoVerified: true,
      investmentYears: '5年以上',
      hasHolding: ['BTC', 'ETH'],
      beeCoinMultiplier: 1.7,
    },
    isPremium: true,
    beeCoinPrice: 179, // 高手長文（129-199 Bee）
    coverImage: 'https://images.unsplash.com/photo-1761735486587-bcac08b15c79?w=800&h=400&fit=crop',
    createdAt: '2026-02-07T14:45:00Z',
    likes: 189,
    comments: 67,
    tags: ['加密貨幣', '比特幣', '風險管理', '技術分析'],
    minLevel: 'navigator',
    category: 'crypto',
    views: 1890,
    helpfulCount: 15, // 專業貢獻章：銅牌
  },
  {
    id: '5',
    title: '房地產投資信託(REITs)：穩定配息的投資選擇',
    excerpt: '介紹台灣與美國的REITs產品，適合追求穩定現金流的投資者...',
    content: '完整文章內容...',
    author: {
      id: 'author-1',
      name: '投資達人王大華',
      level: 'grower',
      beeCoin: 5000,
      joinedDate: '2024-06-01',
      dawhoVerified: true,
      investmentYears: '5年以上',
      hasHolding: ['2330', '2454', '0050'],
      beeCoinMultiplier: 1.7,
    },
    isPremium: false,
    coverImage: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?w=800&h=400&fit=crop',
    createdAt: '2026-02-06T11:30:00Z',
    likes: 76,
    comments: 28,
    tags: ['REITs', '配息', '被動收入', '房地產'],
    minLevel: 'observer',
    category: 'etf',
    views: 760,
    helpfulCount: 5, // 未達門檻
  },
  {
    id: '6',
    title: '量化交易入門：用Python打造自己的交易機器人',
    excerpt: '手把手教你建立量化交易策略，從回測到實盤的完整流程...',
    content: '完整文章內容...',
    author: {
      id: 'author-2',
      name: 'Sarah Lin',
      level: 'leader',
      beeCoin: 12000,
      joinedDate: '2024-03-15',
      dawhoVerified: true,
      investmentYears: '5年以上',
      hasHolding: ['AAPL', 'NVDA', 'TSLA'],
      beeCoinMultiplier: 2.0,
    },
    isPremium: true,
    beeCoinPrice: 189, // 高手長文/系列/工具表（129-199 Bee）
    coverImage: 'https://images.unsplash.com/photo-1762608206423-be8c07645de7?w=800&h=400&fit=crop',
    createdAt: '2026-02-05T16:00:00Z',
    likes: 198,
    comments: 78,
    tags: ['量化交易', 'Python', '程式交易', '高階策略'],
    minLevel: 'grower',
    category: 'futures',
    views: 1980,
    helpfulCount: 100, // 專業貢獻章：白金
  },
  {
    id: '7',
    title: '存股族必看：金融股配息全攻略',
    excerpt: '分析各大金融股的配息政策、殖利率，教你如何打造穩定現金流...',
    content: '完整文章內容...',
    author: {
      id: 'author-5',
      name: '存股達人老張',
      level: 'navigator',
      beeCoin: 1100,
      joinedDate: '2025-05-10',
      dawhoVerified: true,
      investmentYears: '3-5年',
      hasHolding: ['2886', '2891', '2892'],
      beeCoinMultiplier: 1.5,
    },
    isPremium: false,
    coverImage: 'https://images.unsplash.com/photo-1713461983836-de0a45009424?w=800&h=400&fit=crop',
    createdAt: '2026-02-04T08:20:00Z',
    likes: 145,
    comments: 52,
    tags: ['存股', '殖利率', '金融股', '配息'],
    minLevel: 'explorer',
    category: 'taiwan_stock',
    stockSymbol: '2886',
    views: 1450,
    helpfulCount: 25, // 專業貢獻章：銀牌
  },
  {
    id: '8',
    title: '技術分析基礎：K線與均線的實戰應用',
    excerpt: '新手也能看懂的技術分析教學，從基礎到進階一次掌握...',
    content: '完整文章內容...',
    author: {
      id: 'author-6',
      name: '技術派小明',
      level: 'explorer',
      beeCoin: 400,
      joinedDate: '2025-12-15',
    },
    isPremium: false,
    createdAt: '2026-02-03T13:45:00Z',
    likes: 234,
    comments: 95,
    tags: ['技術分析', 'K線', '均線', '新手教學'],
    minLevel: 'observer',
    category: 'taiwan_stock',
    views: 2340,
    helpfulCount: 10, // 未達門檻
  },
];

// Mock questions
export const MOCK_QUESTIONS: Question[] = [
  {
    id: 'q1',
    content: '台積電現在的價位適合進場嗎？還是等回檔再買？',
    author: {
      id: 'user-5',
      name: '投資新手小李',
      level: 'explorer',
      beeCoin: 300,
      joinedDate: '2026-01-20',
    },
    createdAt: '2026-02-11T08:30:00Z',
    likes: 23,
    answers: [
      {
        id: 'a1',
        content: '建議分批進場，不要一次全部投入。可以先買1/3，等回檔再加碼。',
        author: {
          id: 'author-1',
          name: '投資達人王大華',
          level: 'grower',
          beeCoin: 5000,
          joinedDate: '2024-06-01',
        },
        createdAt: '2026-02-11T09:15:00Z',
        likes: 12,
      },
    ],
  },
  {
    id: 'q2',
    content: '想請問大家都用什麼工具做技術分析？',
    author: {
      id: 'user-6',
      name: 'Amy Chen',
      level: 'observer',
      beeCoin: 100,
      joinedDate: '2026-02-01',
    },
    createdAt: '2026-02-11T07:45:00Z',
    likes: 8,
    answers: [],
  },
  {
    id: 'q3',
    content: '美股配息要繳30%稅，有什麼方法可以節稅嗎？',
    author: {
      id: 'user-7',
      name: '理財小白',
      level: 'explorer',
      beeCoin: 450,
      joinedDate: '2025-12-10',
    },
    createdAt: '2026-02-10T22:30:00Z',
    likes: 15,
    answers: [
      {
        id: 'a2',
        content: '可以考慮投資成長股而非高配息股，或者使IRA等退休帳戶。',
        author: {
          id: 'author-2',
          name: 'Sarah Lin',
          level: 'leader',
          beeCoin: 12000,
          joinedDate: '2024-03-15',
        },
        createdAt: '2026-02-11T06:20:00Z',
        likes: 8,
      },
    ],
  },
];

// Helper function to check if user can access content
export function canAccessContent(userLevel: UserLevel, requiredLevel: UserLevel): boolean {
  const levels: UserLevel[] = ['guest', 'observer', 'explorer', 'navigator', 'grower', 'leader'];
  return levels.indexOf(userLevel) >= levels.indexOf(requiredLevel);
}

// Helper function to get next level info
export function getNextLevelInfo(currentLevel: UserLevel) {
  const levels: UserLevel[] = ['guest', 'observer', 'explorer', 'navigator', 'grower', 'leader'];
  const currentIndex = levels.indexOf(currentLevel);
  
  if (currentIndex === levels.length - 1) {
    return null; // Already at max level
  }
  
  return levels[currentIndex + 1];
}