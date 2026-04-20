import { useState } from 'react';
import { User } from '../types';
import { X, Upload, Camera } from 'lucide-react';

interface EditProfileModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: Partial<User>) => void;
}

export function EditProfileModal({ user, isOpen, onClose, onSave }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio || '',
    avatar: user.avatar,
  });

  const [previewAvatar, setPreviewAvatar] = useState(user.avatar);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewAvatar(result);
        setFormData({ ...formData, avatar: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-card rounded-3xl border-2 border-primary/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        style={{ 
          boxShadow: '0 8px 32px rgba(217, 119, 87, 0.2)',
          transform: 'rotate(-0.3deg)',
        }}
      >
        {/* 手帳風格裝飾 */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-primary/10 border-r-transparent"></div>
        </div>

        {/* 紙膠帶效果 */}
        <div 
          className="absolute -left-2 top-16 w-16 h-8 bg-primary/30 blur-sm"
          style={{ transform: 'rotate(-45deg)' }}
        ></div>

        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="p-6 relative">
          {/* 標題 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold">編輯個人資料</h2>
            </div>
            <p className="text-sm text-muted-foreground pl-3">完善你的個人資訊，讓其他投資者更認識你</p>
          </div>

          {/* 頭像上傳 */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3 flex items-center gap-2">
              <span className="text-lg">📸</span>
              個人頭像
            </label>
            <div className="flex items-center gap-6">
              {/* 預覽頭像 - 拍立得風格 */}
              <div 
                className="bg-white p-2 rounded-2xl border-2 border-primary/30"
                style={{ 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(2deg)',
                }}
              >
                <div className="relative">
                  <img
                    src={previewAvatar}
                    alt="頭像預覽"
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-500 border-2 border-white shadow-md"></div>
                </div>
              </div>

              {/* 上傳按鈕 */}
              <div>
                <label 
                  htmlFor="avatar-upload"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-secondary/30 to-accent/20 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">更換頭像</span>
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <p className="text-xs text-muted-foreground mt-2">建議使用正方形圖片，最佳尺寸 200x200</p>
              </div>
            </div>
          </div>

          {/* 暱稱 */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <span className="text-lg">✏️</span>
              暱稱
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary/50 focus:outline-none transition-all"
              style={{ 
                boxShadow: '0 2px 8px rgba(217, 119, 87, 0.05)',
              }}
              placeholder="輸入你的暱稱"
              maxLength={20}
            />
            <p className="text-xs text-muted-foreground mt-1 text-right">{formData.name.length}/20</p>
          </div>

          {/* 個人簡介 */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <span className="text-lg">📝</span>
              個人簡介
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 focus:border-primary/50 focus:outline-none transition-all resize-none"
              style={{ 
                boxShadow: '0 2px 8px rgba(217, 119, 87, 0.05)',
              }}
              placeholder="介紹一下你的投資風格、擅長領域..."
              rows={4}
              maxLength={200}
            />
            <p className="text-xs text-muted-foreground mt-1 text-right">{formData.bio.length}/200</p>
          </div>

          {/* DAWHO 認證提示 */}
          <div 
            className="mb-6 p-4 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100"
            style={{ transform: 'rotate(-0.3deg)' }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-blue-900 mb-1">DAWHO 官方認證</h3>
                <p className="text-xs text-blue-700 leading-relaxed mb-3">
                  完成認證可以獲得官方標章，提升內容可信度，並享有豐Bee加乘獎勵！
                </p>
                <a
                  href="https://www.sinotrade.com.tw/newweb/RWD/home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg transition-all"
                  style={{ transform: 'rotate(-0.5deg)' }}
                >
                  <span>🚀</span>
                  前往大戶DAWHO認證
                </a>
              </div>
            </div>
          </div>

          {/* 按鈕組 */}
          <div className="flex gap-3 pt-4 border-t-2 border-dashed border-primary/15">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl border-2 border-primary/30 bg-white hover:bg-secondary/30 transition-all font-medium"
              style={{ transform: 'rotate(0.5deg)' }}
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-[#b85f40] text-white font-bold hover:shadow-lg transition-all"
              style={{ transform: 'rotate(-0.5deg)' }}
            >
              儲存變更
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}