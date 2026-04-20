import { useState } from 'react';
import { TopBar, BottomNav } from '../components/navigation';
import { CURRENT_USER } from '../mock-data';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import { 
  Palette, 
  Ban, 
  FileText, 
  ArrowRightLeft, 
  Coins,
  Sparkles,
  Check,
  Info
} from 'lucide-react';

// Shop item types
interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'theme' | 'feature' | 'unlock' | 'transfer' | 'exchange';
  icon: typeof Palette;
  previewImage?: string;
  owned?: boolean;
  benefits?: string[];
}

const SHOP_ITEMS: ShopItem[] = [
  // Themes - 更多主題選擇
  {
    id: 'theme-ocean',
    name: '海洋藍主題',
    description: '清新的海洋藍色調，讓閱讀更舒適',
    price: 79, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-forest',
    name: '森林綠主題',
    description: '自然的綠色調，護眼又舒服',
    price: 69, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-sunset',
    name: '夕陽橙主題',
    description: '溫暖的橙色系，充滿活力',
    price: 79, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-midnight',
    name: '午夜黑主題',
    description: '專業的深色主題，保護您的眼睛',
    price: 89, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-sakura',
    name: '櫻花粉主題',
    description: '浪漫的粉色系，柔和溫馨',
    price: 79, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-lavender',
    name: '薰衣草紫主題',
    description: '優雅的紫色調，舒緩放鬆',
    price: 79, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1498604636225-d4b30a84c2c2?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-autumn',
    name: '秋季楓葉主題',
    description: '溫暖的秋色調，感受季節氣息',
    price: 85, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-mint',
    name: '薄荷綠主題',
    description: '清爽的薄荷色，提神醒腦',
    price: 69, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-gold',
    name: '尊榮金主題',
    description: '奢華的金色系，彰顯品味',
    price: 99, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-arctic',
    name: '極地白主題',
    description: '純淨的白色系，簡約大方',
    price: 69, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-earth',
    name: '大地棕主題',
    description: '沉穩的棕色調，自然質感',
    price: 75, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-neon',
    name: '霓虹紫主題',
    description: '科技感十足的霓虹色調',
    price: 95, // 單一主題 49-99 Bee
    category: 'theme',
    icon: Palette,
    previewImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
  },
  {
    id: 'theme-pack-5',
    name: '主題包（5款精選）',
    description: '一次獲得5款精美主題',
    price: 249, // 主題包（5款）199-299 Bee
    category: 'theme',
    icon: Sparkles,
    benefits: ['包含5款精選主題', '比單買省下超過40%', '隨時切換心情'],
  },
  {
    id: 'profile-beauty',
    name: '進階個人頁美化',
    description: '專屬名片、頭像框與徽章特效',
    price: 169, // 進階個人頁美化 129-199 Bee
    category: 'theme',
    icon: Sparkles,
    benefits: ['獨特名片樣式', '精美頭像框', '炫目徽章特效', '彰顯個人品味'],
  },
  
  // Features - 更新價格方案
  {
    id: 'no-ads-week',
    name: '免廣告體驗（7天）',
    description: '一週無廣告干擾的閱讀體驗',
    price: 20, // 免廣告 7 天：20 Bee
    category: 'feature',
    icon: Ban,
    benefits: ['移除所有廣告', '更快的載入速度', '更純淨的閱讀體驗'],
  },
  {
    id: 'no-ads-month',
    name: '免廣告體驗（30天）',
    description: '一個月無廣告干擾的閱讀體驗',
    price: 60, // 免廣告 30 天：60 Bee
    category: 'feature',
    icon: Ban,
    benefits: ['移除所有廣告', '更快的載入速度', '更純淨的閱讀體驗', '省下57%費用'],
  },
  {
    id: 'no-ads-lifetime',
    name: '免廣告體驗（終身）',
    description: '一次購買，永久享受無廣告體驗！',
    price: 249, // 免廣告 終身：199-299 Bee
    category: 'feature',
    icon: Sparkles,
    benefits: ['移除所有廣告', '更快的載入速度', '更純淨的閱讀體驗', '永久有效', '最超值方案'],
  },
  
  // Article Unlock Packages - 更新價格
  {
    id: 'unlock-pack-single',
    name: '單篇文章解鎖',
    description: '解鎖單篇付費文章',
    price: 59, // 單篇文章解鎖：59 Bee
    category: 'unlock',
    icon: FileText,
    benefits: ['解鎖1篇付費文章', '永久保存閱讀權限'],
  },
  {
    id: 'unlock-pack-3',
    name: '文章解鎖包 x3',
    description: '可解鎖任意3篇付費文章',
    price: 159, // 文章解鎖包 x3：159 Bee
    category: 'unlock',
    icon: FileText,
    benefits: ['解鎖3篇付費文章', '永久保存閱讀權限', '靈活選擇想讀的文章', '省下18豐Bee'],
  },
  {
    id: 'unlock-pack-5',
    name: '文章解鎖包 x5',
    description: '可解鎖任意5篇付費文章',
    price: 249, // 文章解鎖包 x5：249 Bee
    category: 'unlock',
    icon: FileText,
    benefits: ['解鎖5篇付費文章', '永久保存閱讀權限', '靈活選擇想讀的文章', '省下46豐Bee'],
  },
  {
    id: 'unlock-pack-10',
    name: '文章解鎖包 x10',
    description: '可解鎖任意10篇付費文章',
    price: 449, // 文章解鎖包 x10：449 Bee
    category: 'unlock',
    icon: FileText,
    benefits: ['解鎖10篇付費文章', '永久保存閱讀權限', '靈活選擇想讀的文章', '省下141豐Bee'],
  },
  
  // Transfer Benefits - 更新價格
  {
    id: 'transfer-basic',
    name: '跨行轉帳優惠包（10次）',
    description: '增加10次免手續費跨行轉帳',
    price: 129, // 10 次免手續費：129 Bee
    category: 'transfer',
    icon: ArrowRightLeft,
    benefits: ['10次免手續費', '可累積使用', '適用所有永豐帳戶'],
  },
  {
    id: 'transfer-premium',
    name: '跨行轉帳尊榮包（25次）',
    description: '增加25次免手續費跨行轉帳',
    price: 279, // 25 次免手續費：279 Bee
    category: 'transfer',
    icon: ArrowRightLeft,
    benefits: ['25次免手續費', '可累積使用', '適用所有永豐帳戶', '省下43豐Bee'],
  },
  {
    id: 'transfer-unlimited',
    name: '跨行轉帳無限包（月）',
    description: '一個月內無限次免手續費',
    price: 449, // 月無限：399-499 Bee
    category: 'transfer',
    icon: Sparkles,
    benefits: ['無限次免手續費', '30天有效', '適用所有永豐帳戶', '超值優惠'],
  },
];

const EXCHANGE_ITEMS = [
  {
    id: 'exchange-points',
    name: '豐點',
    description: '永豐金控會員點數',
    exchangeRate: '1 豐 Bee = 1 豐點',
    icon: Coins,
  },
  {
    id: 'exchange-honey',
    name: '小蜜豐點數',
    description: '永豐小蜜 APP 點數',
    exchangeRate: '1 豐 Bee = 1 小蜜豐點',
    icon: Coins,
  },
];

const CATEGORY_LABELS = {
  theme: '主題商店',
  feature: '功能升級',
  unlock: '文章解鎖',
  transfer: '轉帳優惠',
  exchange: '點數兌換',
};

export function BeeShop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('theme');
  const [beeCoin, setBeeCoin] = useState(CURRENT_USER.beeCoin);
  
  const handlePurchase = (item: ShopItem) => {
    if (beeCoin >= item.price) {
      setBeeCoin(beeCoin - item.price);
      alert(`成功購買 ${item.name}！剩餘 ${beeCoin - item.price} 豐 Bee`);
    } else {
      alert('豐 Bee 不足，請先賺取更多豐 Bee！');
    }
  };
  
  const filteredItems = SHOP_ITEMS.filter(item => item.category === selectedCategory);
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopBar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Header with gradient background */}
        <div className="mb-6 bg-gradient-to-br from-primary/10 via-primary/5 to-[#f4c430]/10 rounded-3xl p-6 border border-primary/20 shadow-md">
          <h1 className="mb-3">豐 Bee 商城</h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f4c430] to-primary flex items-center justify-center shadow-md">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">您的豐 Bee</p>
              <p className="text-2xl font-bold text-foreground">{beeCoin.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        {/* How to Earn Bee Coin Info */}
        <Alert className="bg-blue-50 border-blue-200 mb-6">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            <strong>如何賺取豐 Bee：</strong>每日登入（+0.05 Bee/天）、發表專業文章（+1 Bee/篇）、獲得「有幫助」認可（文章 +0.5 Bee/次，回覆 +0.2 Bee/次）等方式賺取！
          </AlertDescription>
        </Alert>
        
        {/* Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-card border border-border">
            <TabsTrigger value="theme" className="flex flex-col gap-1 py-3">
              <Palette className="w-4 h-4" />
              <span className="text-xs">主題</span>
            </TabsTrigger>
            <TabsTrigger value="feature" className="flex flex-col gap-1 py-3">
              <Ban className="w-4 h-4" />
              <span className="text-xs">功能</span>
            </TabsTrigger>
            <TabsTrigger value="unlock" className="flex flex-col gap-1 py-3">
              <FileText className="w-4 h-4" />
              <span className="text-xs">解鎖</span>
            </TabsTrigger>
            <TabsTrigger value="transfer" className="flex flex-col gap-1 py-3">
              <ArrowRightLeft className="w-4 h-4" />
              <span className="text-xs">轉帳</span>
            </TabsTrigger>
            <TabsTrigger value="exchange" className="flex flex-col gap-1 py-3">
              <Coins className="w-4 h-4" />
              <span className="text-xs">兌換</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Theme Tab */}
          <TabsContent value="theme" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  {item.previewImage && (
                    <img 
                      src={item.previewImage} 
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Coins className="w-3 h-3" />
                        {item.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button 
                      onClick={() => handlePurchase(item)}
                      className="w-full"
                      disabled={beeCoin < item.price}
                    >
                      {beeCoin < item.price ? '豐 Bee 不足' : '購買主題'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Feature Tab */}
          <TabsContent value="feature" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1 shrink-0">
                      <Coins className="w-3 h-3" />
                      {item.price}
                    </Badge>
                  </div>
                  {item.benefits && (
                    <ul className="space-y-2 mb-4">
                      {item.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button 
                    onClick={() => handlePurchase(item)}
                    className="w-full"
                    disabled={beeCoin < item.price}
                  >
                    {beeCoin < item.price ? '豐 Bee 不足' : '立即購買'}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Unlock Tab */}
          <TabsContent value="unlock" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1 shrink-0">
                      <Coins className="w-3 h-3" />
                      {item.price}
                    </Badge>
                  </div>
                  {item.benefits && (
                    <ul className="space-y-2 mb-4">
                      {item.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button 
                    onClick={() => handlePurchase(item)}
                    className="w-full"
                    disabled={beeCoin < item.price}
                  >
                    {beeCoin < item.price ? '豐 Bee 不足' : '立即購買'}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Transfer Tab */}
          <TabsContent value="transfer" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1 shrink-0">
                      <Coins className="w-3 h-3" />
                      {item.price}
                    </Badge>
                  </div>
                  {item.benefits && (
                    <ul className="space-y-2 mb-4">
                      {item.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button 
                    onClick={() => handlePurchase(item)}
                    className="w-full"
                    disabled={beeCoin < item.price}
                  >
                    {beeCoin < item.price ? '豐 Bee 不足' : '立即購買'}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Exchange Tab */}
          <TabsContent value="exchange" className="mt-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  豐 Bee 可以與永豐金控的其他點數系統等價互換，讓您的點數運用更靈活！
                </p>
              </div>
              
              {EXCHANGE_ITEMS.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <Badge variant="outline">{item.exchangeRate}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      兌換為 {item.name}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      兌換為 豐 Bee
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
    </div>
  );
}