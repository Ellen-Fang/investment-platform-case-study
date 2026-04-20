import { Question } from '../types';
import { Heart, MessageCircle, Clock, Bookmark } from 'lucide-react';
import { LevelBadge } from './level-badge';
import { Card } from './ui/card';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const navigate = useNavigate();
  const timeAgo = getTimeAgo(question.createdAt);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(question.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleCardClick = () => {
    navigate(`/question/${question.id}`);
  };

  const handleAuthorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/user/${question.author.id}`);
  };
  
  return (
    <Card 
      onClick={handleCardClick}
      className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-2 border-primary/20 group bg-card relative cursor-pointer"
      style={{ 
        boxShadow: '0 2px 8px rgba(217, 119, 87, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* 手帳風格標記點 */}
      <div className="absolute -left-1 top-6 w-3 h-3 bg-primary rounded-full border-2 border-card"></div>
      
      {/* 收藏按鈕 */}
      <button
        onClick={handleBookmark}
        className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isBookmarked 
            ? 'bg-primary text-white shadow-md scale-110' 
            : 'bg-secondary/50 text-primary hover:bg-secondary hover:scale-105'
        }`}
      >
        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
      </button>
      
      <div className="flex items-start gap-4 mb-4 pl-2 pr-10">
        {question.author.avatar ? (
          <img
            src={question.author.avatar}
            alt={question.author.name}
            onClick={handleAuthorClick}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20 hover:ring-primary/40 transition-all cursor-pointer"
          />
        ) : (
          <div 
            onClick={handleAuthorClick}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center cursor-pointer"
          >
            <span className="text-lg">{question.author.name[0]}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p 
              onClick={handleAuthorClick}
              className="font-medium text-sm hover:text-primary transition-colors cursor-pointer"
            >
              {question.author.name}
            </p>
            <LevelBadge level={question.author.level} size="sm" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
      
      {/* 問題內容 - 手帳對話框樣式 */}
      <div className="relative mb-4 pl-2">
        <div className="bg-gradient-to-br from-secondary/40 to-accent/30 rounded-2xl rounded-tl-none p-4 border-2 border-primary/15">
          <p className="leading-relaxed text-foreground/80">
            {question.content}
          </p>
        </div>
      </div>
      
      {/* 虛線分隔 */}
      <div className="border-t border-dashed border-primary/20 pt-4 pl-2">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 hover:text-primary transition-colors cursor-pointer ${
              isLiked ? 'text-primary' : ''
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="font-medium">{likes}</span>
          </button>
          <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            <span className="font-medium">{question.answers?.length || 0} 則回答</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function getTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 60) return `${minutes} 分鐘前`;
  if (hours < 24) return `${hours} 小時前`;
  if (days < 7) return `${days} 天前`;
  
  return date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' });
}