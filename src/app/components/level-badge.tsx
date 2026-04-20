import { UserLevel, LEVEL_CONFIG } from '../types';

interface LevelBadgeProps {
  level: UserLevel;
  size?: 'sm' | 'md';
}

export function LevelBadge({ level, size = 'md' }: LevelBadgeProps) {
  const config = LEVEL_CONFIG[level];
  
  // 防禦性編程：如果找不到配置，返回默認樣式
  if (!config) {
    console.warn(`Unknown level: ${level}`);
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full font-medium border-2 text-xs px-2.5 py-1 bg-gray-100 border-gray-300 text-gray-600">
        <span>❓</span>
        <span>{level}</span>
      </div>
    );
  }
  
  const sizeClasses = size === 'sm' 
    ? 'text-xs px-2.5 py-1' 
    : 'text-sm px-3 py-1.5';
  
  return (
    <div 
      className={`inline-flex items-center gap-1.5 rounded-full font-medium border-2 ${sizeClasses}`}
      style={{ 
        backgroundColor: `${config.color}15`,
        borderColor: `${config.color}40`,
        color: config.color,
        transform: 'rotate(-1deg)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
    >
      <span style={{ fontSize: size === 'sm' ? '0.7rem' : '0.8rem' }}>{config.icon}</span>
      <span>{config.name}</span>
    </div>
  );
}