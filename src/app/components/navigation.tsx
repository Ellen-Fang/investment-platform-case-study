import { Link, useLocation } from 'react-router';
import { Home, User, PenSquare, Coins, ShoppingBag, MessageSquareText } from 'lucide-react';
import { CURRENT_USER } from '../mock-data';
import { LevelBadge } from './level-badge';
import { AppIcon } from './app-icon';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: '首頁' },
    { path: '/community', icon: MessageSquareText, label: '討論區' },
    { path: '/create', icon: PenSquare, label: '發文' },
    { path: '/shop', icon: ShoppingBag, label: '商城' },
    { path: '/profile', icon: User, label: '我的' },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary/20 z-50" style={{ boxShadow: '0 -2px 12px rgba(217, 119, 87, 0.08)' }}>
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all ${
                  isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-primary/70'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function TopBar() {
  return (
    <header className="sticky top-0 bg-card/95 backdrop-blur-md border-b-2 border-primary/20 z-40" style={{ boxShadow: '0 2px 12px rgba(217, 119, 87, 0.08)' }}>
      <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* 可點擊放大的 App Icon */}
          <AppIcon clickable />
          <Link to="/">
            <div>
              <span className="font-bold text-lg tracking-wide hover:text-primary transition-colors cursor-pointer">永你一起豐</span>
              <div className="text-xs text-muted-foreground -mt-0.5">投資社群日記</div>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/shop">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#f4c430]/20 to-primary/15 px-3.5 py-2 rounded-full border-2 border-[#f4c430]/40 hover:border-[#f4c430]/60 hover:shadow-md transition-all cursor-pointer">
              <Coins className="w-4 h-4" style={{ color: '#d4af37' }} />
              <span className="text-sm font-bold">{((CURRENT_USER.beeCoin || 0) + (CURRENT_USER.paidBeeCoin || 0)).toLocaleString()}</span>
              <span className="text-base">🐝</span>
            </div>
          </Link>
          <LevelBadge level={CURRENT_USER.level} size="sm" />
        </div>
      </div>
    </header>
  );
}