import { useState } from 'react';
import { CURRENT_USER } from '../mock-data';
import { LevelBadge } from './level-badge';
import { Send, Heart } from 'lucide-react';

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
    level: any;
  };
  content: string;
  createdAt: string;
  likes: number;
}

const MOCK_COMMENTS: Comment[] = [
  {
    id: '1',
    author: {
      name: '投資小白',
      level: 'observer',
    },
    content: '感謝分享！這篇文章對我很有幫助，特別是關於風險管理的部分。',
    createdAt: '2026-02-11T09:30:00Z',
    likes: 12,
  },
  {
    id: '2',
    author: {
      name: 'Lisa Wang',
      level: 'explorer',
    },
    content: '想請問作者對於目前的市場環境有什麼看法？',
    createdAt: '2026-02-11T08:15:00Z',
    likes: 8,
  },
];

export function CommentSection() {
  const [comments] = useState<Comment[]>(MOCK_COMMENTS);
  const [newComment, setNewComment] = useState('');
  
  const handleSubmit = () => {
    if (newComment.trim()) {
      alert(`評論已發表：${newComment}`);
      setNewComment('');
    }
  };
  
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold mb-4">評論 ({comments.length})</h3>
      
      {/* Comment Input */}
      <div className="mb-6 p-4 bg-secondary/30 rounded-xl">
        <div className="flex gap-3 mb-3">
          {CURRENT_USER.avatar && (
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
          )}
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="寫下你的評論..."
            rows={3}
            className="flex-1 bg-background rounded-xl px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!newComment.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>發表評論</span>
          </button>
        </div>
      </div>
      
      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            {comment.author.avatar && (
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{comment.author.name}</span>
                <LevelBadge level={comment.author.level} size="sm" />
                <span className="text-xs text-muted-foreground">
                  {new Date(comment.createdAt).toLocaleDateString('zh-TW', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <p className="text-sm mb-2">{comment.content}</p>
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Heart className="w-3.5 h-3.5" />
                <span>{comment.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}