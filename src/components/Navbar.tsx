import React from 'react';
import { 
  Sparkles, 
  Search,
  Globe2
} from 'lucide-react';
import { ModelScope } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  selectedScope: ModelScope | 'all';
  setSelectedScope: (scope: ModelScope | 'all') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalDownloads: string;
  onScrollToModels: () => void;
  myLlmCount?: number;
  onOpenSocialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  selectedScope,
  setSelectedScope,
  searchQuery,
  setSearchQuery,
  totalDownloads,
  onScrollToModels,
  myLlmCount,
  onOpenSocialModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setSelectedScope('all');
              onScrollToModels();
            }} 
            className="flex items-center gap-2.5 text-left group cursor-pointer"
            id="nav-brand-btn"
          >
            <BrandLogo size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-base sm:text-lg tracking-tight">
                  OpenLLM Hub
                </span>
                <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                  Free
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block">
                Public & Hugging Face AI Models
              </p>
            </div>
          </button>
        </div>

        {/* Search Bar - Center */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              id="nav-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search models (Llama 3.3, DeepSeek-R1, Qwen, GGUF)..."
              className="w-full rounded-full border border-white/10 bg-zinc-900/60 py-1.5 pl-9 pr-3 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500/50 focus:bg-zinc-900/90 focus:outline-none transition-all shadow-inner backdrop-blur-md"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Items & Scope Switcher */}
        <nav className="flex items-center gap-2.5">
          
          {/* Quick Scope Switcher */}
          <div className="hidden lg:flex items-center rounded-xl bg-zinc-900/80 p-1 border border-white/10 text-xs">
            <button
              onClick={() => {
                setSelectedScope('all');
                onScrollToModels();
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedScope === 'all' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setSelectedScope('public');
                onScrollToModels();
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedScope === 'public' ? 'bg-sky-600 text-white' : 'text-zinc-400 hover:text-sky-300'
              }`}
            >
              <Globe2 className="h-3 w-3 text-sky-400" />
              <span>Public LLM</span>
            </button>
            <button
              onClick={() => {
                setSelectedScope('huggingface');
                onScrollToModels();
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedScope === 'huggingface' ? 'bg-amber-600 text-white' : 'text-zinc-400 hover:text-amber-300'
              }`}
            >
              <span className="text-xs leading-none">🤗</span>
              <span>Hugging Face LLM</span>
            </button>
            <button
              onClick={() => {
                setSelectedScope('my_llm');
                onScrollToModels();
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedScope === 'my_llm' ? 'bg-purple-600 text-white shadow-sm' : 'text-zinc-400 hover:text-purple-300'
              }`}
            >
              <span>🚀</span>
              <span>My LLM</span>
              {typeof myLlmCount === 'number' && (
                <span className="ml-0.5 rounded-full bg-purple-950/80 px-1.5 py-0.2 text-[10px] text-purple-200">
                  {myLlmCount}
                </span>
              )}
            </button>
          </div>

          {/* Creator Profile Button */}
          <button
            id="nav-creator-social-btn"
            onClick={onOpenSocialModal}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600/20 to-rose-600/20 border border-red-500/30 hover:border-red-400/50 text-red-300 hover:text-white px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="Creator: Rongon Kairy (Social & Profile Links)"
          >
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span>Rongon Kairy</span>
          </button>
        </nav>

      </div>
    </header>
  );
};
