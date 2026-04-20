import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { TopBar, BottomNav } from '../components/navigation';
import { X, Image as ImageIcon, DollarSign, AlertTriangle } from 'lucide-react';
import { CURRENT_USER } from '../mock-data';
import {
  checkCompliance,
  ComplianceBanner,
  BlockModal,
  HelpDrawer,
  type ComplianceViolation,
} from '../components/compliance-checker';

export function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [beeCoinPrice, setBeeCoinPrice] = useState(100);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  
  // 合規檢查狀態
  const [violations, setViolations] = useState<ComplianceViolation[]>([]);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showHelpDrawer, setShowHelpDrawer] = useState(false);
  
  // L4+ 用戶可以設定付費文章 (navigator, grower, leader)
  const canSetPremium = CURRENT_USER.level === 'navigator' || 
                        CURRENT_USER.level === 'grower' || 
                        CURRENT_USER.level === 'leader';
  
  // 即時檢測合規性
  useEffect(() => {
    const titleViolations = checkCompliance(title);
    const contentViolations = checkCompliance(content);
    setViolations([...titleViolations, ...contentViolations]);
  }, [title, content]);
  
  const handleAddTag = () => {
    if (currentTag.trim() && tags.length < 5) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };
  
  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  
  const handleSubmit = () => {
    // 二次檢查合規性
    const finalViolations = checkCompliance(title + '\n' + content);
    
    if (finalViolations.length > 0) {
      setShowBlockModal(true);
      return;
    }
    
    if (title.trim() && content.trim()) {
      alert('文章發表成功！');
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopBar />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-xl font-semibold mb-6">發表文章</h2>
          
          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-2">文章標題</label>
            <input
              type="text"
              placeholder="輸入標題..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          {/* Content */}
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-2">文章內容</label>
            <textarea
              placeholder="分享你的投資經驗和見解..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
          
          {/* Tags */}
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-2">標籤（最多5個）</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="輸入標籤..."
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                className="flex-1 px-4 py-2 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={handleAddTag}
                disabled={!currentTag.trim() || tags.length >= 5}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed"
              >
                新增
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                  <button
                    onClick={() => handleRemoveTag(index)}
                    className="hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
          
          {/* Cover Image */}
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-2">封面圖片</label>
            <button className="w-full py-8 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors flex flex-col items-center justify-center gap-2">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">點擊上傳封面圖片</span>
            </button>
          </div>
          
          {/* Premium Settings */}
          {canSetPremium && (
            <div className="mb-6 p-4 bg-[#f4c430]/10 rounded-xl border border-[#f4c430]/30">
              <div className="flex items-center justify-between mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPremium}
                    onChange={(e) => setIsPremium(e.target.checked)}
                    className="w-5 h-5 rounded border-[#f4c430] text-[#f4c430] focus:ring-[#f4c430]"
                  />
                  <span className="font-medium">設為付費文章</span>
                </label>
              </div>
              
              {isPremium && (
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-[#f4c430]" />
                  <input
                    type="number"
                    value={beeCoinPrice}
                    onChange={(e) => setBeeCoinPrice(Number(e.target.value))}
                    min={50}
                    max={1000}
                    step={50}
                    className="flex-1 px-4 py-2 bg-white rounded-xl border border-[#f4c430]/30 focus:outline-none focus:ring-2 focus:ring-[#f4c430]/50"
                  />
                  <span className="text-sm font-medium">豐 Bee</span>
                </div>
              )}
            </div>
          )}
          
          {/* 合規檢查警告 Banner */}
          {violations.length > 0 && (
            <div className="mb-6">
              <ComplianceBanner
                violations={violations}
                onShowHelp={() => setShowHelpDrawer(true)}
              />
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex-1 py-3 border border-border rounded-xl font-medium hover:bg-secondary/30 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleSubmit}
              disabled={!title.trim() || !content.trim() || violations.length > 0}
              className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity relative"
            >
              {violations.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {violations.length}
                </span>
              )}
              發表文章
            </button>
          </div>
        </div>
        
        {/* 阻止發佈彈窗 */}
        <BlockModal
          isOpen={showBlockModal}
          onClose={() => setShowBlockModal(false)}
          violations={violations}
          onShowHelp={() => setShowHelpDrawer(true)}
        />
        
        {/* 合規檢查幫助抽屜 */}
        <HelpDrawer
          isOpen={showHelpDrawer}
          onClose={() => setShowHelpDrawer(false)}
        />
      </div>
      
      <BottomNav />
    </div>
  );
}