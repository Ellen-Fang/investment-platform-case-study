import { Users, TrendingUp, Coins, Award } from 'lucide-react';

export function WelcomeBanner() {
  const features = [
    {
      icon: Users,
      title: '社群互動',
      description: '與投資者交流經驗',
    },
    {
      icon: TrendingUp,
      title: '任務升級',
      description: '完成任務解鎖更多功能',
    },
    {
      icon: Coins,
      title: '豐 Bee 獎勵',
      description: '每日登入+互動賺取',
    },
    {
      icon: Award,
      title: '優質內容',
      description: '專業投資見解分享',
    },
  ];
  
  return (
    <div className="bg-gradient-to-br from-primary to-[#b85f40] rounded-3xl p-8 text-white mb-6 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">歡迎來到永你一起豐 🎉</h2>
        <p className="text-white/90">
          一個專注於投資經驗分享的社群平台
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
            >
              <Icon className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-white/80">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}