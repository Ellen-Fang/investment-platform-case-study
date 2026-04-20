import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { BadgeRulesModal } from './badge-rules-modal';

export function BadgeInfoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs font-medium transition-colors"
        title="查看專業貢獻章規則"
      >
        <HelpCircle className="w-3.5 h-3.5" />
        <span>貢獻章規則</span>
      </button>

      <BadgeRulesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
