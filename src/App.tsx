/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ModelCard } from './components/ModelCard';
import { DownloadToast } from './components/DownloadToast';
import { Footer } from './components/Footer';
import { SocialModal } from './components/SocialModal';

import { MODELS_DATA, TOTAL_STATS } from './data/models';
import { LLMModel, ModelCategory, ModelScope, QuantizationOption } from './types';
import { 
  ArrowUpDown, 
  Search,
  Globe2,
  Sparkles,
  Layers,
  Filter
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedScope, setSelectedScope] = useState<ModelScope | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ModelCategory>('all');
  const [paramFilter, setParamFilter] = useState<string>('all'); // all | small | medium | large
  const [sortBy, setSortBy] = useState<'popular' | 'downloads' | 'rating' | 'size'>('popular');
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);

  const allAvailableModels = MODELS_DATA;

  const [activeDownload, setActiveDownload] = useState<{ model: LLMModel; quant: QuantizationOption } | null>(null);

  // Calculate scope counts
  const publicCount = useMemo(() => {
    return allAvailableModels.filter(m => m.modelScope === 'public' && m.category !== 'huggingface-llm').length;
  }, [allAvailableModels]);

  const huggingFaceCount = useMemo(() => {
    return allAvailableModels.filter(m => m.category === 'huggingface-llm').length;
  }, [allAvailableModels]);

  const myLlmCount = useMemo(() => {
    return allAvailableModels.filter(m => m.modelScope === 'my_llm').length;
  }, [allAvailableModels]);

  // Compute category counts relative to selectedScope
  const categoryCounts = useMemo(() => {
    const scopeFiltered = allAvailableModels.filter(m => {
      if (selectedScope === 'all') return true;
      if (selectedScope === 'public') return m.modelScope === 'public' && m.category !== 'huggingface-llm';
      if (selectedScope === 'huggingface') return m.category === 'huggingface-llm';
      if (selectedScope === 'my_llm') return m.modelScope === 'my_llm';
      return true;
    });

    const counts: Record<ModelCategory, number> = {
      all: scopeFiltered.length,
      'huggingface-llm': 0,
      'bengali-indic': 0,
      coding: 0,
      reasoning: 0,
      'edge-lightweight': 0,
      vision: 0,
      'general-chat': 0,
      'medical-specialized': 0
    };

    scopeFiltered.forEach(m => {
      if (counts[m.category] !== undefined) {
        counts[m.category]++;
      }
    });

    return counts;
  }, [allAvailableModels, selectedScope]);

  // Filter and sort models
  const filteredModels = useMemo(() => {
    return allAvailableModels.filter((model) => {
      // Scope filter (Public LLM vs Hugging Face LLM vs My LLM)
      if (selectedScope === 'public' && (model.modelScope !== 'public' || model.category === 'huggingface-llm')) {
        return false;
      }
      if (selectedScope === 'huggingface' && model.category !== 'huggingface-llm') {
        return false;
      }
      if (selectedScope === 'my_llm' && model.modelScope !== 'my_llm') {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && model.category !== selectedCategory) {
        return false;
      }

      // Parameter size filter
      if (paramFilter === 'small' && model.paramNumber > 3) return false;
      if (paramFilter === 'medium' && (model.paramNumber <= 3 || model.paramNumber > 14)) return false;
      if (paramFilter === 'large' && model.paramNumber <= 14) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = model.name ? model.name.toLowerCase().includes(query) : false;
        const matchesArch = model.baseArchitecture ? model.baseArchitecture.toLowerCase().includes(query) : false;
        const matchesTags = Array.isArray(model.tags) ? model.tags.some(t => t && t.toLowerCase().includes(query)) : false;
        const matchesDesc = (model.description ? model.description.toLowerCase().includes(query) : false) || 
                            (model.descriptionBn ? model.descriptionBn.toLowerCase().includes(query) : false);
        const matchesOllama = model.ollamaCommand ? model.ollamaCommand.toLowerCase().includes(query) : false;
        const matchesCreator = model.creator ? model.creator.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesArch && !matchesTags && !matchesDesc && !matchesOllama && !matchesCreator) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'downloads') return b.downloadsCount - a.downloadsCount;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'size') return b.paramNumber - a.paramNumber;
      // Default: popular / featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return b.downloadsCount - a.downloadsCount;
    });
  }, [allAvailableModels, selectedScope, selectedCategory, paramFilter, searchQuery, sortBy]);

  const handleDownload = (model: LLMModel, quant: QuantizationOption) => {
    setActiveDownload({ model, quant });
  };

  const scrollToModels = () => {
    setActiveSection('models-section');
    const el = document.getElementById('models-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020203] text-zinc-100 font-sans selection:bg-blue-500 selection:text-white flex flex-col relative overflow-x-hidden">
      
      {/* Ambient background glow orbs for Immersive UI */}
      <div className="fixed top-[-10%] left-[20%] w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed top-[45%] right-[25%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* 1. Global Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        selectedScope={selectedScope}
        setSelectedScope={setSelectedScope}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalDownloads={TOTAL_STATS.totalDownloads}
        onScrollToModels={scrollToModels}
        myLlmCount={myLlmCount}
        onOpenSocialModal={() => setIsSocialModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroSection
        selectedScope={selectedScope}
        setSelectedScope={setSelectedScope}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalModels={allAvailableModels.length}
        publicCount={publicCount}
        huggingFaceCount={huggingFaceCount}
        myLlmCount={myLlmCount}
        categoryCounts={categoryCounts}
        totalDownloads={TOTAL_STATS.totalDownloads}
        onExploreClick={scrollToModels}
      />

      {/* 3. Main Models Catalog Grid Section */}
      <main id="models-section" className="py-10 sm:py-14 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 relative z-10">
        
        {/* Scope Tabs & Header Banner */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Title & Active Scope Description */}
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                  <span>Available Free AI Models</span>
                </h2>
                <span className="rounded-full bg-blue-500/20 border border-blue-500/30 px-2.5 py-0.5 text-xs font-bold text-blue-300">
                  {filteredModels.length} shown
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                {selectedScope === 'my_llm' && 'Showing Custom Curated Models, Vision Tools & Free APIs (OpenBG Background Remover, etc.).'}
                {selectedScope === 'public' && 'Showing Public Foundation Models from Meta, DeepSeek, Google DeepMind, Microsoft & Qwen.'}
                {selectedScope === 'huggingface' && 'Showing Trending Hugging Face GGUF models with direct hub repositories & Files and versions links.'}
                {selectedScope === 'all' && 'Browse all Public Open-Weights, Hugging Face, and Custom AI models in one unified catalog.'}
              </p>
            </div>

            {/* Scope Toggle Tabs (All Models vs Public LLM vs Hugging Face LLM vs My LLM) */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center rounded-xl bg-zinc-950 p-1 border border-white/10">
                <button
                  id="tab-scope-all"
                  onClick={() => setSelectedScope('all')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedScope === 'all'
                      ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>All Models</span>
                  <span className="rounded-full bg-blue-950/60 px-1.5 py-0.2 text-[10px] text-blue-200">
                    {allAvailableModels.length}
                  </span>
                </button>

                <button
                  id="tab-scope-public"
                  onClick={() => setSelectedScope('public')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedScope === 'public'
                      ? 'bg-sky-600 text-white shadow-[0_0_12px_rgba(2,132,199,0.4)]'
                      : 'text-zinc-400 hover:text-sky-300'
                  }`}
                >
                  <Globe2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Public LLM</span>
                  <span className="rounded-full bg-sky-950/60 px-1.5 py-0.2 text-[10px] text-sky-200">
                    {publicCount}
                  </span>
                </button>

                <button
                  id="tab-scope-huggingface"
                  onClick={() => setSelectedScope('huggingface')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedScope === 'huggingface'
                      ? 'bg-amber-600 text-white shadow-[0_0_12px_rgba(217,119,6,0.4)]'
                      : 'text-zinc-400 hover:text-amber-300'
                  }`}
                >
                  <span className="text-xs leading-none">🤗</span>
                  <span>Hugging Face LLM</span>
                  <span className="rounded-full bg-amber-950/60 px-1.5 py-0.2 text-[10px] text-amber-200">
                    {huggingFaceCount}
                  </span>
                </button>

                <button
                  id="tab-scope-my-llm"
                  onClick={() => setSelectedScope('my_llm')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedScope === 'my_llm'
                      ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.4)]'
                      : 'text-zinc-400 hover:text-purple-300'
                  }`}
                >
                  <span>🚀</span>
                  <span>My LLM</span>
                  <span className="rounded-full bg-purple-950/60 px-1.5 py-0.2 text-[10px] text-purple-200">
                    {myLlmCount}
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Secondary Filter & Sort Controls Row */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Parameter Size Filter */}
            <div className="flex items-center rounded-xl border border-white/5 bg-zinc-950/60 p-1">
              <span className="px-2 text-zinc-500 font-medium hidden sm:inline">Hardware Class:</span>
              <button
                onClick={() => setParamFilter('all')}
                className={`rounded-lg px-2.5 py-1 font-medium transition-all cursor-pointer ${
                  paramFilter === 'all' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                All Sizes
              </button>
              <button
                onClick={() => setParamFilter('small')}
                className={`rounded-lg px-2.5 py-1 font-medium transition-all cursor-pointer ${
                  paramFilter === 'small' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                ≤ 3B (Edge/CPU)
              </button>
              <button
                onClick={() => setParamFilter('medium')}
                className={`rounded-lg px-2.5 py-1 font-medium transition-all cursor-pointer ${
                  paramFilter === 'medium' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                7B - 14B (Standard GPU)
              </button>
              <button
                onClick={() => setParamFilter('large')}
                className={`rounded-lg px-2.5 py-1 font-medium transition-all cursor-pointer ${
                  paramFilter === 'large' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                32B - 70B (High VRAM)
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 hidden sm:inline">Sort:</span>
              <div className="relative">
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="appearance-none rounded-xl border border-white/10 bg-zinc-950 py-1.5 pl-3 pr-8 text-xs font-semibold text-zinc-200 focus:border-blue-500/50 focus:outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="downloads">Most Downloads</option>
                  <option value="rating">Top Rated</option>
                  <option value="size">Parameter Size (Largest First)</option>
                </select>
                <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                onDownload={handleDownload}
                onOpenSocialModal={() => setIsSocialModalOpen(true)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md p-12 text-center max-w-md mx-auto">
            <Search className="h-10 w-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="font-bold text-white text-base">
              No models matched your search or filters
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Try switching between "Public LLM" and "My LLM" scopes or reset your category and size filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedScope('all');
                setSelectedCategory('all');
                setParamFilter('all');
              }}
              className="mt-4 inline-flex items-center gap-1 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </main>

      {/* Global Footer */}
      <Footer
        onScrollTo={scrollToModels}
        onOpenSocialModal={() => setIsSocialModalOpen(true)}
      />

      {/* Creator Social Media Popup Modal */}
      <SocialModal
        isOpen={isSocialModalOpen}
        onClose={() => setIsSocialModalOpen(false)}
      />

      {/* Celebratory Download Toast Notification */}
      <DownloadToast
        activeDownload={activeDownload}
        onClose={() => setActiveDownload(null)}
      />

    </div>
  );
}

