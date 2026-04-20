import { TopicCategory, TOPIC_CONFIG } from '../types';

interface TopicTabsProps {
  selectedTopic: TopicCategory;
  onTopicChange: (topic: TopicCategory) => void;
}

export function TopicTabs({ selectedTopic, onTopicChange }: TopicTabsProps) {
  const topics = Object.values(TOPIC_CONFIG);
  
  return (
    <div className="bg-gradient-to-b from-secondary/30 to-background border-b-2 border-primary/15 overflow-x-auto"
      style={{ boxShadow: '0 2px 6px rgba(217, 119, 87, 0.04)' }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex gap-2 py-4">
          {topics.map((topic) => {
            const isActive = selectedTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => onTopicChange(topic.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-[#b85f40] text-white border-transparent shadow-md scale-105'
                    : 'bg-white/70 border-primary/20 hover:border-primary/40 hover:bg-white hover:shadow-sm'
                }`}
                style={isActive ? {} : { transform: 'rotate(-0.5deg)' }}
              >
                <span className="text-lg">{topic.icon}</span>
                <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {topic.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}