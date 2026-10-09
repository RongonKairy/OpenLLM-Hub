import React, { useState } from 'react';
import { LLMModel, QuantizationOption } from '../types';
import { OrganizationLogo } from './OrganizationLogo';
import { 
  X, 
  GitCompare, 
  ArrowLeftRight, 
  Download, 
  Copy, 
  Check, 
  Cpu, 
  Layers, 
  Terminal, 
  ExternalLink, 
  Gauge, 
  Sparkles,
  Zap,
  ShieldCheck,
  HardDrive,
  FileCode,
  Share2
} from 'lucide-react';

interface ModelCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelA: LLMModel | null;
  modelB: LLMModel | null;
  allModels: LLMModel[];
  onSelectModelA: (model: LLMModel) => void;
  onSelectModelB: (model: LLMModel) => void;
  onSwapModels: () => void;
  onDownload: (model: LLMModel, quant: QuantizationOption) => void;
}

export const ModelCompareModal: React.FC<ModelCompareModalProps> = ({
  isOpen,
  onClose,
  modelA,
  modelB,
  allModels,
  onSelectModelA,
  onSelectModelB,
  onSwapModels,
  onDownload
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedCmdA, setCopiedCmdA] = useState(false);
  const [copiedCmdB, setCopiedCmdB] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'quantization' | 'benchmarks'>('all');

  if (!isOpen || (!modelA && !modelB)) return null;

  // Fallback defaults if only 1 model is passed
  const primaryModel = modelA || modelB!;
  const secondaryModel = modelB || allModels.find(m => m.id !== primaryModel.id) || primaryModel;

  const mA = modelA || primaryModel;
  const mB = modelB || secondaryModel;

  const copyMarkdownSummary = () => {
    const summary = `# Side-by-Side Model Comparison: ${mA.name} vs ${mB.name}

| Technical Specification | ${mA.name} | ${mB.name} |
| :--- | :--- | :--- |
| **Parameters** | ${mA.parameterSize} (~${mA.paramNumber}B params) | ${mB.parameterSize} (~${mB.paramNumber}B params) |
| **Architecture** | ${mA.baseArchitecture} | ${mB.baseArchitecture} |
| **Context Window** | ${mA.contextWindow} | ${mB.contextWindow} |
| **Min VRAM Requirement** | ${mA.minVramGb} GB | ${mB.minVramGb} GB |
| **Recommended VRAM** | ${mA.recommendedVramGb} GB | ${mB.recommendedVramGb} GB |
| **Quantization Formats** | ${mA.quantizations.map(q => q.format).join(', ')} | ${mB.quantizations.map(q => q.format).join(', ')} |
| **Training Tokens** | ${mA.trainingTokens} | ${mB.trainingTokens} |
| **License** | ${mA.license} | ${mB.license} |
| **Inference Speed** | ${mA.benchmarks.tokensPerSec} tok/s | ${mB.benchmarks.tokensPerSec} tok/s |
| **MMLU Benchmark** | ${mA.benchmarks.mmlu}% | ${mB.benchmarks.mmlu}% |
| **Coding HumanEval** | ${mA.benchmarks.codingHumanEval}% | ${mB.benchmarks.codingHumanEval}% |
| **GSM8K Math** | ${mA.benchmarks.mathGsm8k}% | ${mB.benchmarks.mathGsm8k}% |
| **1-Click Run** | \`${mA.ollamaCommand}\` | \`${mB.ollamaCommand}\` |
`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const copyCommand = (cmd: string, which: 'a' | 'b') => {
    navigator.clipboard.writeText(cmd);
    if (which === 'a') {
      setCopiedCmdA(true);
      setTimeout(() => setCopiedCmdA(false), 2000);
    } else {
      setCopiedCmdB(true);
      setTimeout(() => setCopiedCmdB(false), 2000);
    }
  };

  const popularQuantA = mA.quantizations.find(q => q.isPopular) || mA.quantizations[0];
  const popularQuantB = mB.quantizations.find(q => q.isPopular) || mB.quantizations[0];

  // Helper to determine superior benchmark
  const getBetterTag = (valA: number, valB: number, higherIsBetter = true) => {
    if (valA === valB) return 'equal';
    if (higherIsBetter) return valA > valB ? 'a' : 'b';
    return valA < valB ? 'a' : 'b';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        id="model-compare-modal-container"
        className="relative w-full max-w-5xl rounded-3xl bg-[#0a0a0d] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden my-6 backdrop-blur-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950/90 px-5 sm:px-7 py-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <GitCompare className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Technical Specifications Comparison
                </h2>
                <span className="rounded-full bg-cyan-500/20 border border-cyan-500/30 px-2 py-0.5 text-[11px] font-bold text-cyan-300">
                  2 Models
                </span>
              </div>
              <p className="text-xs text-zinc-400 hidden sm:block">
                Side-by-side technical specs: parameters, architecture, context window, and quantization support.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyMarkdownSummary}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Copy comparison summary table as Markdown"
            >
              {copiedSummary ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Table!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Copy Table</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              id="close-compare-modal-btn"
              className="rounded-xl border border-white/10 bg-zinc-900/80 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Close Comparison Modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="border-b border-white/5 bg-zinc-950/50 px-5 sm:px-7 py-2.5 flex items-center justify-between gap-3 text-xs shrink-0 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-xl px-3 py-1.5 font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              All Specifications
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`rounded-xl px-3 py-1.5 font-bold transition-all cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Parameters & Architecture
            </button>
            <button
              onClick={() => setActiveTab('quantization')}
              className={`rounded-xl px-3 py-1.5 font-bold transition-all cursor-pointer ${
                activeTab === 'quantization'
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Quantization Matrix
            </button>
            <button
              onClick={() => setActiveTab('benchmarks')}
              className={`rounded-xl px-3 py-1.5 font-bold transition-all cursor-pointer ${
                activeTab === 'benchmarks'
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Benchmarks & Speed
            </button>
          </div>

          <button
            onClick={onSwapModels}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/80 px-2.5 py-1 text-xs font-semibold text-cyan-300 hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Swap columns (Model A ↔ Model B)"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
            <span>Swap Columns</span>
          </button>
        </div>

        {/* Scrollable Comparison Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          
          {/* Models Header Cards & Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Model A Card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-zinc-900/60 p-4.5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500/20 border-b border-l border-cyan-500/30 text-[10px] font-black uppercase text-cyan-300 tracking-wider rounded-bl-xl">
                Model A
              </div>
              <div className="flex items-start gap-3">
                <OrganizationLogo creator={mA.creator} size="lg" />
                <div className="flex-1 min-w-0 pr-12">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-white text-base truncate">
                      {mA.name}
                    </span>
                    <span className="rounded-lg bg-zinc-800 border border-white/10 px-2 py-0.5 text-xs font-bold text-cyan-300 font-mono">
                      {mA.parameterSize}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {mA.creator} • {mA.baseArchitecture}
                  </p>
                </div>
              </div>

              {/* Model A Selector Dropdown */}
              <div className="mt-3.5 pt-3 border-t border-white/5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Change Model A:
                </label>
                <select
                  value={mA.id}
                  onChange={(e) => {
                    const found = allModels.find(m => m.id === e.target.value);
                    if (found) onSelectModelA(found);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-semibold text-white focus:border-cyan-500 focus:outline-none cursor-pointer"
                >
                  {allModels.map((m) => (
                    <option key={`a-${m.id}`} value={m.id}>
                      {m.name} ({m.parameterSize} • {m.creator})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Model B Card */}
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/20 to-zinc-900/60 p-4.5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-blue-500/20 border-b border-l border-blue-500/30 text-[10px] font-black uppercase text-blue-300 tracking-wider rounded-bl-xl">
                Model B
              </div>
              <div className="flex items-start gap-3">
                <OrganizationLogo creator={mB.creator} size="lg" />
                <div className="flex-1 min-w-0 pr-12">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-white text-base truncate">
                      {mB.name}
                    </span>
                    <span className="rounded-lg bg-zinc-800 border border-white/10 px-2 py-0.5 text-xs font-bold text-blue-300 font-mono">
                      {mB.parameterSize}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {mB.creator} • {mB.baseArchitecture}
                  </p>
                </div>
              </div>

              {/* Model B Selector Dropdown */}
              <div className="mt-3.5 pt-3 border-t border-white/5">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                  Change Model B:
                </label>
                <select
                  value={mB.id}
                  onChange={(e) => {
                    const found = allModels.find(m => m.id === e.target.value);
                    if (found) onSelectModelB(found);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-xs font-semibold text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  {allModels.map((m) => (
                    <option key={`b-${m.id}`} value={m.id}>
                      {m.name} ({m.parameterSize} • {m.creator})
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* 1. CORE TECHNICAL SPECIFICATIONS TABLE */}
          {(activeTab === 'all' || activeTab === 'technical') && (
            <div className="rounded-2xl border border-white/10 bg-zinc-950/60 overflow-hidden shadow-xl">
              <div className="border-b border-white/10 bg-zinc-900/80 px-4 py-3 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-cyan-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                  Core Technical Specifications
                </h3>
              </div>

              <div className="divide-y divide-white/5 text-xs">
                {/* Parameters */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold flex flex-col">
                    <span className="text-zinc-200">Parameters</span>
                    <span className="text-[10px] text-zinc-500 font-normal">Active weights size</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white text-sm bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-lg">
                        {mA.parameterSize}
                      </span>
                      <span className="text-zinc-400 text-[11px] hidden sm:inline">
                        (~{mA.paramNumber}B parameters)
                      </span>
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white text-sm bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-lg">
                        {mB.parameterSize}
                      </span>
                      <span className="text-zinc-400 text-[11px] hidden sm:inline">
                        (~{mB.paramNumber}B parameters)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold flex flex-col">
                    <span className="text-zinc-200">Architecture</span>
                    <span className="text-[10px] text-zinc-500 font-normal">Transformer backbone</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className="font-medium text-cyan-300">
                      {mA.baseArchitecture}
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className="font-medium text-blue-300">
                      {mB.baseArchitecture}
                    </span>
                  </div>
                </div>

                {/* Context Window */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold flex flex-col">
                    <span className="text-zinc-200">Context Window</span>
                    <span className="text-[10px] text-zinc-500 font-normal">Maximum token span</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className="font-mono font-bold text-white bg-zinc-800/80 px-2 py-1 rounded-lg border border-white/5">
                      {mA.contextWindow}
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className="font-mono font-bold text-white bg-zinc-800/80 px-2 py-1 rounded-lg border border-white/5">
                      {mB.contextWindow}
                    </span>
                  </div>
                </div>

                {/* Minimum VRAM */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold flex flex-col">
                    <span className="text-zinc-200">Minimum VRAM</span>
                    <span className="text-[10px] text-zinc-500 font-normal">GPU memory floor</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      mA.minVramGb <= mB.minVramGb 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'text-zinc-300 bg-zinc-800/50'
                    }`}>
                      {mA.minVramGb === 0 ? 'CPU RAM (4GB)' : `${mA.minVramGb} GB VRAM`}
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      mB.minVramGb <= mA.minVramGb 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'text-zinc-300 bg-zinc-800/50'
                    }`}>
                      {mB.minVramGb === 0 ? 'CPU RAM (4GB)' : `${mB.minVramGb} GB VRAM`}
                    </span>
                  </div>
                </div>

                {/* Recommended VRAM */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold flex flex-col">
                    <span className="text-zinc-200">Recommended VRAM</span>
                    <span className="text-[10px] text-zinc-500 font-normal">Ideal full offload</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2 font-mono text-zinc-200">
                    {mA.recommendedVramGb} GB VRAM
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2 font-mono text-zinc-200">
                    {mB.recommendedVramGb} GB VRAM
                  </div>
                </div>

                {/* Training Tokens */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold flex flex-col">
                    <span className="text-zinc-200">Pre-training Volume</span>
                    <span className="text-[10px] text-zinc-500 font-normal">Dataset exposure</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2 text-zinc-300">
                    {mA.trainingTokens}
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2 text-zinc-300">
                    {mB.trainingTokens}
                  </div>
                </div>

                {/* License */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold">
                    <span className="text-zinc-200">Open License</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2 text-zinc-300 font-mono text-[11px]">
                    {mA.license}
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2 text-zinc-300 font-mono text-[11px]">
                    {mB.license}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. QUANTIZATION SUPPORT SIDE-BY-SIDE MATRIX */}
          {(activeTab === 'all' || activeTab === 'quantization') && (
            <div className="rounded-2xl border border-white/10 bg-zinc-950/60 overflow-hidden shadow-xl">
              <div className="border-b border-white/10 bg-zinc-900/80 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-cyan-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                    Quantization Support & Format Matrix
                  </h3>
                </div>
                <span className="text-[11px] text-zinc-400">
                  {mA.quantizations.length} formats vs {mB.quantizations.length} formats
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Model A Quantizations */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-300 pb-1 border-b border-cyan-500/20">
                      <span>{mA.name} Formats</span>
                      <span className="text-[11px] text-zinc-400">Popular: {popularQuantA.format}</span>
                    </div>

                    <div className="space-y-2">
                      {mA.quantizations.map((quant, idx) => (
                        <div
                          key={`qa-${idx}`}
                          className={`rounded-xl border p-3 transition-colors ${
                            quant.isPopular 
                              ? 'border-cyan-500/40 bg-cyan-950/20' 
                              : 'border-white/5 bg-zinc-900/40'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              {quant.format}
                              {quant.isPopular && (
                                <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-1.5 py-0.2 rounded font-bold">
                                  Default
                                </span>
                              )}
                            </span>
                            <span className="font-mono font-bold text-cyan-400 text-xs">
                              {quant.size}
                            </span>
                          </div>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-400">
                            <span>VRAM: {quant.recommendedVram}</span>
                            <span className="text-zinc-500 truncate max-w-[160px]">{quant.recommendedFor}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Model B Quantizations */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-blue-300 pb-1 border-b border-blue-500/20">
                      <span>{mB.name} Formats</span>
                      <span className="text-[11px] text-zinc-400">Popular: {popularQuantB.format}</span>
                    </div>

                    <div className="space-y-2">
                      {mB.quantizations.map((quant, idx) => (
                        <div
                          key={`qb-${idx}`}
                          className={`rounded-xl border p-3 transition-colors ${
                            quant.isPopular 
                              ? 'border-blue-500/40 bg-blue-950/20' 
                              : 'border-white/5 bg-zinc-900/40'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              {quant.format}
                              {quant.isPopular && (
                                <span className="bg-blue-500/20 text-blue-300 text-[10px] px-1.5 py-0.2 rounded font-bold">
                                  Default
                                </span>
                              )}
                            </span>
                            <span className="font-mono font-bold text-blue-400 text-xs">
                              {quant.size}
                            </span>
                          </div>
                          <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-400">
                            <span>VRAM: {quant.recommendedVram}</span>
                            <span className="text-zinc-500 truncate max-w-[160px]">{quant.recommendedFor}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* 3. BENCHMARKS & PERFORMANCE COMPARISON */}
          {(activeTab === 'all' || activeTab === 'benchmarks') && (
            <div className="rounded-2xl border border-white/10 bg-zinc-950/60 overflow-hidden shadow-xl">
              <div className="border-b border-white/10 bg-zinc-900/80 px-4 py-3 flex items-center gap-2">
                <Gauge className="h-4 w-4 text-cyan-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                  Empirical Benchmark Evaluations
                </h3>
              </div>

              <div className="divide-y divide-white/5 text-xs">
                {/* MMLU */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold">
                    <span className="text-zinc-200">MMLU (General)</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.mmlu, mB.benchmarks.mmlu) === 'a'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mA.benchmarks.mmlu}%
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.mmlu, mB.benchmarks.mmlu) === 'b'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mB.benchmarks.mmlu}%
                    </span>
                  </div>
                </div>

                {/* HumanEval Coding */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold">
                    <span className="text-zinc-200">HumanEval (Coding)</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.codingHumanEval, mB.benchmarks.codingHumanEval) === 'a'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mA.benchmarks.codingHumanEval}%
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.codingHumanEval, mB.benchmarks.codingHumanEval) === 'b'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mB.benchmarks.codingHumanEval}%
                    </span>
                  </div>
                </div>

                {/* GSM8K Math */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold">
                    <span className="text-zinc-200">GSM8K (Math & Logic)</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.mathGsm8k, mB.benchmarks.mathGsm8k) === 'a'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mA.benchmarks.mathGsm8k}%
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.mathGsm8k, mB.benchmarks.mathGsm8k) === 'b'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mB.benchmarks.mathGsm8k}%
                    </span>
                  </div>
                </div>

                {/* Inference Speed */}
                <div className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-white/[0.02]">
                  <div className="col-span-4 sm:col-span-3 text-zinc-400 font-semibold">
                    <span className="text-zinc-200">Inference Speed</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.tokensPerSec, mB.benchmarks.tokensPerSec) === 'a'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mA.benchmarks.tokensPerSec} tok/s
                    </span>
                  </div>
                  <div className="col-span-4 sm:col-span-4.5 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg font-mono font-bold ${
                      getBetterTag(mA.benchmarks.tokensPerSec, mB.benchmarks.tokensPerSec) === 'b'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-300'
                    }`}>
                      {mB.benchmarks.tokensPerSec} tok/s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. EXECUTION COMMANDS & ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Model A Command & Download */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Run {mA.name}</span>
                </span>
                <button
                  onClick={() => copyCommand(mA.ollamaCommand, 'a')}
                  className="text-[11px] font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedCmdA ? <span className="text-emerald-400">Copied!</span> : 'Copy Command'}
                </button>
              </div>

              <div className="font-mono text-xs text-zinc-300 bg-zinc-900/90 rounded-xl p-2.5 border border-white/5 overflow-x-auto select-all">
                {mA.ollamaCommand}
              </div>

              <button
                onClick={() => onDownload(mA, popularQuantA)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download {mA.name} ({popularQuantA.size})</span>
              </button>
            </div>

            {/* Model B Command & Download */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-blue-400" />
                  <span>Run {mB.name}</span>
                </span>
                <button
                  onClick={() => copyCommand(mB.ollamaCommand, 'b')}
                  className="text-[11px] font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedCmdB ? <span className="text-emerald-400">Copied!</span> : 'Copy Command'}
                </button>
              </div>

              <div className="font-mono text-xs text-zinc-300 bg-zinc-900/90 rounded-xl p-2.5 border border-white/5 overflow-x-auto select-all">
                {mB.ollamaCommand}
              </div>

              <button
                onClick={() => onDownload(mB, popularQuantB)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download {mB.name} ({popularQuantB.size})</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t border-white/10 bg-zinc-950 px-5 sm:px-7 py-3.5 flex items-center justify-between gap-3 text-xs shrink-0">
          <span className="text-zinc-500 text-[11px] hidden sm:inline">
            Comparing technical specifications for local execution, VRAM sizing, and quantization precision.
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Close Comparison
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
