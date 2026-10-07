import React from 'react';
import { 
  Sparkles, 
  Download, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Layers,
  Search,
  Globe2,
  Rocket
} from 'lucide-react';
import { ModelCategory, ModelScope } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeroSectionProps {
  selectedScope: ModelScope | 'all';
  setSelectedScope: (scope: ModelScope | 'all') => void;
  selectedCategory: ModelCategory;
  setSelectedCategory: (cat: ModelCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalModels: number;
  publicCount: number;
  huggingFaceCount: number;
  myLlmCount: number;
  categoryCounts: Record<ModelCategory, number>;
  totalDownloads: string;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedScope,
  setSelectedScope,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  totalModels,
  publicCount,
  huggingFaceCount,
  myLlmCount,
  categoryCounts,
  totalDownloads,
  onExploreClick
}) => {
  const categories: { id: ModelCategory; label: string }[] = [
    { id: 'all', label: 'All Tools & Models' },
    { id: 'huggingface-llm', label: '🤗 Hugging Face LLM' },
    { id: 'coding', label: 'Coding & Agents' },
    { id: 'reasoning', label: 'Reasoning & Math' },
    { id: 'general-chat', label: 'General & Chat' },
    { id: 'vision', label: 'Vision & Multimodal' },
    { id: 'edge-lightweight', label: 'Edge & Mobile (≤3B)' },
    { id: 'bengali-indic', label: 'Bengali & Indic' },
    { id: 'medical-specialized', label: 'Medical AI' }
  ];

  return (
    <section id="hero" className="relative overflow-hidden py-10 sm:py-14 lg:py-16 border-b border-white/5">
      
      {/* Subtle Background Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 py-1 pl-1.5 pr-4 text-xs font-semibold text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md">
            <BrandLogo size="sm" />
            <span className="font-semibold text-white">
              Open & Free LLM Hub
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">
              Public Foundation, Hugging Face & Custom Models
            </span>
          </div>
        </div>

        {/* Main Headline & Description */}
        <div className="mt-6 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
            All-in-One AI Models Hub.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Public, Hugging Face & Custom LLMs
            </span>
          </h1>

          <p className="mt-3.5 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Discover, compare, and run top Public LLMs, Hugging Face GGUF models, and Agentic developer tools — featuring Claude Code, OpenCode, Hermes Agent, OpenClaw, Qwen3.6, and GLM-5.2:cloud with 1-click Ollama launch and direct Hugging Face links.
          </p>

          {/* Quick Scope Selectors (All vs Public LLM vs Hugging Face LLM vs My LLM) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <button
              id="scope-all-btn"
              onClick={() => {
                setSelectedScope('all');
                onExploreClick();
              }}
              className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedScope === 'all'
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span>All Models</span>
              <span className="rounded-full bg-blue-950/60 px-2 py-0.5 text-xs text-blue-200 border border-blue-400/20">
                {totalModels}
              </span>
            </button>

            <button
              id="scope-public-btn"
              onClick={() => {
                setSelectedScope('public');
                onExploreClick();
              }}
              className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedScope === 'public'
                  ? 'bg-sky-600 text-white shadow-[0_0_20px_rgba(2,132,199,0.4)] scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Globe2 className="h-4 w-4 text-sky-400" />
              <span>Public LLM</span>
              <span className="rounded-full bg-sky-950/60 px-2 py-0.5 text-xs text-sky-200 border border-sky-400/20">
                {publicCount}
              </span>
            </button>

            {/* Hugging Face LLM Scope Selector */}
            <button
              id="scope-huggingface-btn"
              onClick={() => {
                setSelectedScope('huggingface');
                onExploreClick();
              }}
              className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedScope === 'huggingface'
                  ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.4)] scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-amber-300 border border-white/10 hover:border-amber-500/30'
              }`}
            >
              <span className="text-base leading-none">🤗</span>
              <span>Hugging Face LLM</span>
              <span className="rounded-full bg-amber-950/60 px-2 py-0.5 text-xs text-amber-200 border border-amber-400/20">
                {huggingFaceCount}
              </span>
            </button>

            {/* My LLM Scope Selector */}
            <button
              id="scope-my-llm-btn"
              onClick={() => {
                setSelectedScope('my_llm');
                onExploreClick();
              }}
              className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedScope === 'my_llm'
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)] scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-purple-300 border border-white/10 hover:border-purple-500/30'
              }`}
            >
              <span>🚀</span>
              <span>My LLM</span>
              <span className="rounded-full bg-purple-950/60 px-2 py-0.5 text-xs text-purple-200 border border-purple-400/20">
                {myLlmCount}
              </span>
            </button>
          </div>
        </div>

        {/* Feature & Value Props Ribbon */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-zinc-900/40 p-3 backdrop-blur-md hover:border-blue-500/30 transition-all">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                100% Free Forever
              </p>
              <p className="text-[10px] text-zinc-500">
                Commercial Apache / MIT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-zinc-900/40 p-3 backdrop-blur-md hover:border-blue-500/30 transition-all">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                1-Click Ollama
              </p>
              <p className="text-[10px] text-zinc-500">
                Instant CLI run
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-zinc-900/40 p-3 backdrop-blur-md hover:border-blue-500/30 transition-all">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                GGUF Quantized
              </p>
              <p className="text-[10px] text-zinc-500">
                Q4_K_M, Q8, Safetensors
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-zinc-900/40 p-3 backdrop-blur-md hover:border-blue-500/30 transition-all">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                CPU & GPU Ready
              </p>
              <p className="text-[10px] text-zinc-500">
                Runs on 4GB+ RAM devices
              </p>
            </div>
          </div>
        </div>

        {/* Quick Search & Category Filters */}
        <div className="mt-8 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-zinc-900/60 p-4 shadow-2xl backdrop-blur-xl">
          
          {/* Search Input */}
          <div className="relative mb-3.5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              id="hero-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Filter models by name, architecture (e.g. "Llama 3.3", "DeepSeek", "BanglaLlama", "Python", "Vision")...'
              className="w-full rounded-xl border border-white/10 bg-zinc-950/80 py-2 pl-10 pr-10 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500/60 focus:bg-zinc-950 focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-zinc-800 p-1 text-zinc-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] ?? 0;
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-zinc-800/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    selectedCategory === cat.id ? 'bg-blue-700 text-white' : 'bg-zinc-700/60 text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
