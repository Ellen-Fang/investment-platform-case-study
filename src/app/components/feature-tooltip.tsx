import { Info } from 'lucide-react';

interface FeatureTooltipProps {
  content: string;
}

export function FeatureTooltip({ content }: FeatureTooltipProps) {
  return (
    <div className="group relative inline-block">
      <button className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
        <Info className="w-3.5 h-3.5" />
      </button>
      <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 -translate-x-1/2 mb-2 w-64">
        <div className="bg-foreground text-background text-xs rounded-lg p-3 shadow-lg">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-foreground" />
        </div>
      </div>
    </div>
  );
}
