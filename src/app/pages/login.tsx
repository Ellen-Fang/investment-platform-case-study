import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AppIcon } from '../components/app-icon';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would authenticate the user
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo & Brand */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4">
            <AppIcon size="large" clickable />
          </div>
          <h1 className="text-3xl font-bold mb-2">永你一起豐</h1>
          <p className="text-muted-foreground">分享投資經驗，共同成長</p>
        </div>
        
        {/* Login Form */}
        <div className="bg-card rounded-3xl border border-border p-8 shadow-xl">
          <h2 className="text-xl font-semibold mb-6">登入帳號</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">電子郵件</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-2">密碼</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-[#b85f40] text-white rounded-xl font-medium shadow-lg hover:opacity-90 transition-opacity"
            >
              登入
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              忘記密碼？
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-3">還沒有帳號？</p>
            <button className="text-primary font-medium hover:underline">
              立即註冊
            </button>
          </div>
        </div>
        
        {/* Guest Access Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            訪客模式無法查看內容，請先登入或註冊
          </p>
        </div>
      </div>
    </div>
  );
}