import { CURRENT_USER, LEVEL_CONFIG, getNextLevelInfo } from '../mock-data';
import { TrendingUp, CheckCircle } from 'lucide-react';

export function LevelProgressBar() {
  const currentLevelConfig = LEVEL_CONFIG[CURRENT_USER.level];
  const nextLevel = getNextLevelInfo(CURRENT_USER.level);
  const nextLevelConfig = nextLevel ? LEVEL_CONFIG[nextLevel] : null;
  
  if (!nextLevelConfig) {
    return (
      <div className="bg-gradient-to-br from-primary/15 to-[#b85f40]/10 rounded-2xl p-4 border-2 border-primary/30 relative overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(217, 119, 87, 0.08)' }}>
        {/* 手帳風格裝飾星星 */}
        <div className="absolute top-2 right-2 text-2xl opacity-20">⭐</div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">🎉 已達到最高等級！</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-secondary/50 via-accent/30 to-primary/10 rounded-2xl p-5 border-2 border-primary/25 relative overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(217, 119, 87, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)' }}>
      {/* 手帳風格裝飾元素 */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#f4c430]/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#b85f40] flex items-center justify-center border-2 border-white shadow-sm">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold">升級任務</span>
          </div>
          <div className="flex items-center gap-2 text-xs bg-white/70 px-3 py-1.5 rounded-full border-2 border-primary/20" style={{ transform: 'rotate(1deg)' }}>
            <span className="font-medium">{currentLevelConfig.name}</span>
            <span className="text-muted-foreground">→</span>
            <span className="font-medium text-primary">{nextLevelConfig.name}</span>
          </div>
        </div>
        
        {nextLevelConfig.tasks && (
          <div className="space-y-2.5">
            {nextLevelConfig.tasks.map((task, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 text-sm bg-white/80 p-3 rounded-xl border-2 border-primary/15 hover:border-primary/30 transition-colors relative"
                style={{ 
                  boxShadow: '0 1px 3px rgba(217, 119, 87, 0.05)',
                  transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`
                }}
              >
                {/* 手帳風格勾選框 */}
                <div className="w-5 h-5 rounded border-2 border-primary/60 flex items-center justify-center shrink-0 mt-0.5 bg-white">
                  <div className="w-2 h-2 rounded-sm bg-primary/30"></div>
                </div>
                <span className="text-muted-foreground leading-relaxed">{task}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}