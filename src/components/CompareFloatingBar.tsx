import React from 'react';
import { LLMModel } from '../types';
import { OrganizationLogo } from './OrganizationLogo';
import { GitCompare, X, ArrowRight, Trash2 } from 'lucide-react';

interface CompareFloatingBarProps {
  selectedModels: LLMModel[];
  onRemoveModel: (modelId: string) => void;
  onClearAll: () => void;
  onOpenCompareModal: () => void;
}

export const CompareFloatingBar: React.FC<CompareFloatingBarProps> = ({
  selectedModels,
  onRemoveModel,
  onClearAll,
  onOpenCompareModal
}) => {
  if (selectedModels.length === 0) return null;

  const isReady = selectedModels.length === 2;

  return (
    <aside 
      aria-label="Model Comparison Dock"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl animate-in slide-in-from-bottom-5 duration-200"
    >
      <div className="rounded-2xl border border-cyan-500/40 bg-zinc-950/90 p-3 sm:p-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Side: Status & Selected Model Chips */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <GitCompare className="h-4 w-4 animate-pulse" />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto py-0.5">
            {selectedModels.map((model, idx) => (
              <div
                key={model.id}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/90 py-1 pl-2 pr-1.5 text-xs text-white"
              >
                <OrganizationLogo creator={model.creator} size="sm" />
                <span className="font-bold text-xs truncate max-w-[100px] sm:max-w-[130px]">
                  {model.name}
                </span>
                <span className="rounded bg-zinc-800 px-1.5 py-0.2 text-[10px] font-mono text-cyan-300">
                  {model.parameterSize}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveModel(model.id);
                  }}
                  className="rounded-lg p-0.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={`Remove ${model.name} from compare`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

            {selectedModels.length === 1 && (
              <div className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-dashed border-white/20 bg-zinc-900/30 px-3 py-1 text-[11px] text-zinc-400">
                <span>+ Select 2nd model</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={onClearAll}
            className="rounded-xl px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1"
            title="Clear comparison selection"
          >
            <Trash2 className="h-3 w-3" />
            <span className="hidden sm:inline">Clear</span>
          </button>

          <button
            onClick={onOpenCompareModal}
            id="view-comparison-btn"
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer shadow-md ${
              isReady
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
            }`}
          >
            <span>{isReady ? 'View Comparison (2/2)' : 'Compare Specs (1/2)'}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
