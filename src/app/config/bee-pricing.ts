/**
 * 豐Bee 定價系統配置
 * 所有價格單位為 Bee
 */

// 付費內容定價
export const ARTICLE_PRICING = {
  // 短文/觀點
  short: {
    min: 15,
    max: 29,
    label: '短文/觀點'
  },
  // 深度策略/研究
  deep: {
    min: 49,
    max: 99,
    label: '深度策略/研究'
  },
  // 高手長文/系列/工具表
  premium: {
    min: 129,
    max: 199,
    label: '高手長文/系列/工具表'
  }
};

// 文章解鎖方案
export const UNLOCK_PRICING = {
  single: {
    price: 59,
    label: '單篇文章解鎖',
    description: '解鎖一篇付費文章'
  },
  pack3: {
    price: 159,
    count: 3,
    label: '文章解鎖包 x3',
    description: '可解鎖任意3篇文章',
    savings: 18 // 59*3 - 159 = 18 Bee 優惠
  },
  pack5: {
    price: 249,
    count: 5,
    label: '文章解鎖包 x5',
    description: '可解鎖任意5篇文章',
    savings: 46 // 59*5 - 249 = 46 Bee 優惠
  },
  pack10: {
    price: 449,
    count: 10,
    label: '文章解鎖包 x10',
    description: '可解鎖任意10篇文章',
    savings: 141 // 59*10 - 449 = 141 Bee 優惠
  }
};

// 主題/美化定價
export const THEME_PRICING = {
  single: {
    min: 49,
    max: 99,
    label: '單一主題',
    description: '例如海洋藍、森林綠等'
  },
  pack: {
    min: 199,
    max: 299,
    label: '主題包（5款）',
    description: '包含5款精選主題'
  },
  advanced: {
    min: 129,
    max: 199,
    label: '進階個人頁美化',
    description: '名片/頭像框/徽章特效'
  }
};

// 免廣告體驗定價
export const AD_FREE_PRICING = {
  week: {
    price: 20,
    days: 7,
    label: '免廣告 7 天',
    description: '一週無廣告體驗'
  },
  month: {
    price: 60,
    days: 30,
    label: '免廣告 30 天',
    description: '一個月無廣告體驗',
    savings: 20 // (20/7)*30 - 60 ≈ 20 Bee 優惠
  },
  lifetime: {
    min: 199,
    max: 299,
    label: '免廣告 終身',
    description: '永久無廣告體驗'
  }
};

// 跨行轉帳免手續費包
export const TRANSFER_FEE_PRICING = {
  pack10: {
    price: 129,
    count: 10,
    label: '10 次免手續費',
    description: '跨行轉帳免手續費10次'
  },
  pack25: {
    price: 279,
    count: 25,
    label: '25 次免手續費',
    description: '跨行轉帳免手續費25次',
    savings: 43 // (129/10)*25 - 279 ≈ 43 Bee 優惠
  },
  monthly: {
    min: 399,
    max: 499,
    label: '月無限',
    description: '當月無限次跨行轉帳免手續費'
  }
};

// 點數互換配置
export const POINTS_EXCHANGE = {
  // 匯率 (1:1)
  exchangeRate: {
    bee_to_sinopac: 1, // 1 Bee = 1 豐點
    bee_to_honey: 1,   // 1 Bee = 1 小蜜點
  },
  
  // 手續費
  fee: {
    standard: 0.01, // 1%
    explorer: 0.005, // 探索家以上 0.5%
    freeMonthly: 1, // 每月免費次數（探索家以上）
    minimum: 1 // 最低手續費 1 Bee
  },
  
  // 每日上限
  dailyLimit: 2000, // 2000 Bee/日
  
  // 最低兌換金額
  minimumExchange: 10 // 最低10 Bee起換
};

// 豐Bee購買方案（用真實貨幣購買豐Bee）
export const BEE_PURCHASE_PRICING = {
  starter: {
    bee: 100,
    price: 30, // TWD
    label: '入門包',
    bonus: 0
  },
  basic: {
    bee: 300,
    price: 80, // TWD
    label: '基礎包',
    bonus: 20 // 贈送20 Bee
  },
  value: {
    bee: 600,
    price: 150, // TWD
    label: '超值包',
    bonus: 60 // 贈送60 Bee
  },
  premium: {
    bee: 1200,
    price: 280, // TWD
    label: '尊榮包',
    bonus: 150 // 贈送150 Bee
  },
  ultimate: {
    bee: 3000,
    price: 650, // TWD
    label: '旗艦包',
    bonus: 500 // 贈送500 Bee
  }
};

// 計算優惠百分比
export function calculateSavings(originalPrice: number, discountedPrice: number): number {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

// 計算兌換手續費
export function calculateExchangeFee(amount: number, userLevel: 'guest' | 'observer' | 'explorer' | 'navigator' | 'grower' | 'leader'): number {
  const feeRate = (userLevel === 'explorer' || userLevel === 'navigator' || userLevel === 'grower' || userLevel === 'leader') 
    ? POINTS_EXCHANGE.fee.explorer 
    : POINTS_EXCHANGE.fee.standard;
  
  const calculatedFee = Math.ceil(amount * feeRate);
  return Math.max(calculatedFee, POINTS_EXCHANGE.fee.minimum);
}

// 格式化豐Bee顯示
export function formatBeeCoin(amount: number): string {
  return `${amount.toLocaleString()} 🐝`;
}
