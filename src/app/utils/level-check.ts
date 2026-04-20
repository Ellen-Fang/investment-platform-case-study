import { UserLevel } from '../types';

// 等級順序定義（從低到高）
const LEVEL_ORDER: UserLevel[] = [
  'guest',
  'observer',
  'explorer',
  'navigator',
  'grower',
  'leader'
];

/**
 * 檢查用戶是否有權限查看文章
 * @param userLevel 用戶當前等級
 * @param requiredLevel 文章要求的最低等級
 * @returns 是否有權限查看
 */
export function canAccessArticle(userLevel: UserLevel, requiredLevel: UserLevel): boolean {
  const userLevelIndex = LEVEL_ORDER.indexOf(userLevel);
  const requiredLevelIndex = LEVEL_ORDER.indexOf(requiredLevel);
  
  return userLevelIndex >= requiredLevelIndex;
}

/**
 * 獲取等級名稱
 * @param level 等級
 * @returns 等級中文名稱
 */
export function getLevelName(level: UserLevel): string {
  const levelNames: Record<UserLevel, string> = {
    guest: '訪客',
    observer: '觀察家',
    explorer: '探索家',
    navigator: '啟航家',
    grower: '成長家',
    leader: '領航家'
  };
  
  return levelNames[level] || level;
}
