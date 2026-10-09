import React, { useState } from 'react';
import { 
  Download, 
  Terminal, 
  Cpu, 
  Check, 
  Copy, 
  Sparkles, 
  Layers, 
  Code2, 
  BrainCircuit, 
  Eye, 
  HeartPulse, 
  Bot, 
  Feather, 
  Info,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Zap,
  Gauge,
  FolderGit2,
  Globe2,
  GitCompare
} from 'lucide-react';
import { LLMModel, QuantizationOption } from '../types';
import { OrganizationLogo } from './OrganizationLogo';

interface ModelCardProps {
  model: LLMModel;
  onDownload: (model: LLMModel, quant: QuantizationOption) => void;
  onOpenSocialModal?: () => void;
  isCompared?: boolean;
  onToggleCompare?: (model: LLMModel) => void;
}

export const ModelCard: React.FC<ModelCardProps> = ({
  model,
  onDownload,
  onOpenSocialModal,
  isCompared = false,
  onToggleCompare
}) => {
  const [copiedOllama, setCopiedOllama] = useState(false);
  const [copiedHfLink, setCopiedHfLink] = useState(false);
  const [showQuantDropdown, setShowQuantDropdown] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const isHfModel = model.category === 'huggingface-llm';
  const hfCleanRepo = model.huggingFaceRepo ? model.huggingFaceRepo.replace(/\/tree\/.*$/, '') : '';
  const ollamaCleanSlug = model.slug.replace(/-gguf$/, '');
  const ollamaDetailsUrl = model.slug.includes('claude') || model.slug.includes('opencode') || model.slug.includes('hermes') || model.slug.includes('openclaw')
    ? 'https://ollama.com/search'
    : `https://ollama.com/library/${ollamaCleanSlug}`;

  const copyOllama = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(model.ollamaCommand);
    setCopiedOllama(true);
    setTimeout(() => setCopiedOllama(false), 2000);
  };

  const copyHfLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`https://huggingface.co/${hfCleanRepo}`);
    setCopiedHfLink(true);
    setTimeout(() => setCopiedHfLink(false), 2000);
  };

  const popularQuant = model.quantizations.find(q => q.isPopular) || model.quantizations[0];

  return (
    <div 
      id={`model-card-${model.id}`}
      className={`group relative flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-md transition-all ${
        isCompared
          ? 'border-cyan-400/80 bg-zinc-900/90 shadow-[0_0_30px_rgba(6,182,212,0.22)] ring-1 ring-cyan-400/50'
          : 'border-white/10 bg-zinc-900/50 hover:border-blue-500/40 hover:bg-zinc-900/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
      }`}
    >
      <div>
        {/* Top Header Row: Organization Logo, Name, Parameters, Badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <OrganizationLogo creator={model.creator} size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-base transition-colors ${
                  isCompared ? 'text-cyan-300' : 'text-white group-hover:text-blue-400'
                }`}>
                  {model.name}
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                {model.baseArchitecture} •{' '}
                {model.creator === 'Rongon Kairy' && onOpenSocialModal ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenSocialModal();
                    }}
                    className="font-semibold text-red-400 hover:text-red-300 hover:underline transition-colors inline-flex items-center gap-1 cursor-pointer"
                    title="Click to view Rongon Kairy profile"
                  >
                    <span>{model.creator}</span>
                    <span className="text-[10px] bg-red-500/20 text-red-300 px-1 rounded font-bold">PRO</span>
                  </button>
                ) : (
                  <span className="font-medium text-zinc-300">{model.creator}</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {/* Compare Quick Toggle */}
            <button
              type="button"
              id={`quick-compare-${model.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare?.(model);
              }}
              className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold transition-all cursor-pointer border ${
                isCompared
                  ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'bg-zinc-800/80 text-zinc-300 hover:text-cyan-300 border-white/10 hover:border-cyan-500/40 hover:bg-zinc-800'
              }`}
              title={isCompared ? 'Remove model from comparison' : 'Add model to side-by-side comparison (max 2)'}
            >
              <GitCompare className="h-3 w-3" />
              <span>{isCompared ? 'Compared' : 'Compare'}</span>
              {isCompared && <Check className="h-3 w-3 text-black stroke-[3]" />}
            </button>

            {isHfModel ? (
              <span className="rounded-lg bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-300 border border-amber-500/30">
                🤗 Hugging Face
              </span>
            ) : model.modelScope === 'my_llm' ? (
              <span className="rounded-lg bg-purple-500/10 px-2 py-0.5 text-[11px] font-bold text-purple-300 border border-purple-500/30">
                🚀 My LLM
              </span>
            ) : (
              <span className="rounded-lg bg-sky-500/10 px-2 py-0.5 text-[11px] font-bold text-sky-300 border border-sky-500/30">
                🌐 Public LLM
              </span>
            )}
            <span className="rounded-lg bg-zinc-800 border border-white/10 px-2 py-0.5 text-xs font-bold text-zinc-200 tracking-wide font-mono">
              {model.parameterSize}
            </span>
            {model.isFeatured && (
              <span className="rounded-lg bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-300 border border-amber-500/20">
                ★ Featured
              </span>
            )}
          </div>
        </div>

        {/* Tagline / Subtitle */}
        <p className="mt-3 text-xs font-semibold text-zinc-300 line-clamp-1">
          {model.tagline}
        </p>

        {/* Description */}
        <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
          {model.description}
        </p>

        {/* Key Metrics / Specs Badges */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="inline-flex items-center gap-1 rounded-lg bg-zinc-800/60 border border-white/5 px-2 py-1 font-medium text-zinc-300">
            <Layers className="h-3 w-3 text-zinc-500" />
            {model.contextWindow} Context
          </span>

          <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-2 py-1 font-medium text-blue-300 border border-blue-500/20">
            <Cpu className="h-3 w-3 text-blue-400" />
            {model.minVramGb === 0 ? 'CPU RAM: 4GB+' : `VRAM: ${model.minVramGb}GB+`}
          </span>

          {model.benchmarks.banglaNlpScore && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-300 border border-emerald-500/20">
              BanglaNLP: {model.benchmarks.banglaNlpScore}%
            </span>
          )}

          {model.benchmarks.codingHumanEval && !model.benchmarks.banglaNlpScore && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-2 py-1 font-semibold text-indigo-300 border border-indigo-500/20">
              HumanEval: {model.benchmarks.codingHumanEval}%
            </span>
          )}

          <span className="inline-flex items-center gap-1 rounded-lg bg-zinc-800/40 px-2 py-1 text-zinc-400 border border-white/5">
            <Download className="h-3 w-3 text-zinc-500" />
            {(model.downloadsCount / 1000).toFixed(0)}k downloads
          </span>
        </div>

        {/* Source Action Box: Hugging Face Link ONLY (No Ollama) for HF models, Ollama CLI for others */}
        {isHfModel ? (
          <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-2.5 text-zinc-100 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-amber-300 mb-1">
              <span className="flex items-center gap-1.5 font-medium text-amber-400">
                <span className="text-xs">🤗</span> Hugging Face Repository
              </span>
              <button
                onClick={copyHfLink}
                className="flex items-center gap-1 text-[10px] font-semibold text-amber-300/80 hover:text-amber-200 transition-colors cursor-pointer"
              >
                {copiedHfLink ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied Link!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center justify-between gap-2 bg-zinc-950/80 rounded-lg p-2 border border-white/5">
              <a
                href={`https://huggingface.co/${hfCleanRepo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-amber-300 hover:text-amber-200 hover:underline truncate"
              >
                huggingface.co/{hfCleanRepo}
              </a>
              <a
                href={`https://huggingface.co/${hfCleanRepo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20"
              >
                <span>Visit Repo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-white/10 bg-zinc-950/90 p-2.5 text-zinc-100 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
              <span className="flex items-center gap-1 font-mono text-cyan-400">
                <Terminal className="h-3 w-3" /> {model.ollamaCommand.startsWith('ollama launch') ? 'Ollama CLI Launch' : 'Ollama 1-Line Run'}
              </span>
              <button
                onClick={copyOllama}
                className="flex items-center gap-1 text-[10px] font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedOllama ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-xs text-zinc-200 select-all overflow-x-auto whitespace-nowrap">
              {model.ollamaCommand}
            </div>
          </div>
        )}

        {/* Inline Expandable Specs Tray */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-3.5 animate-in fade-in duration-200">
            {/* Benchmarks Grid */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1">
                  <Gauge className="h-3.5 w-3.5 text-cyan-400" />
                  Empirical Benchmark Scores
                </span>
                <span className="text-zinc-500 font-mono text-[10px]">{model.benchmarks.tokensPerSec} tok/s</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {model.benchmarks.banglaNlpScore && (
                  <div className="rounded-xl bg-zinc-950 p-2 border border-white/5">
                    <div className="text-[10px] text-zinc-400">BanglaNLP</div>
                    <div className="font-bold text-emerald-400 font-mono text-sm">{model.benchmarks.banglaNlpScore}%</div>
                  </div>
                )}
                {model.benchmarks.codingHumanEval && (
                  <div className="rounded-xl bg-zinc-950 p-2 border border-white/5">
                    <div className="text-[10px] text-zinc-400">HumanEval (Code)</div>
                    <div className="font-bold text-blue-400 font-mono text-sm">{model.benchmarks.codingHumanEval}%</div>
                  </div>
                )}
                {model.benchmarks.mathGsm8k && (
                  <div className="rounded-xl bg-zinc-950 p-2 border border-white/5">
                    <div className="text-[10px] text-zinc-400">GSM8K (Math)</div>
                    <div className="font-bold text-purple-400 font-mono text-sm">{model.benchmarks.mathGsm8k}%</div>
                  </div>
                )}
                {model.benchmarks.mmlu && (
                  <div className="rounded-xl bg-zinc-950 p-2 border border-white/5">
                    <div className="text-[10px] text-zinc-400">MMLU General</div>
                    <div className="font-bold text-amber-400 font-mono text-sm">{model.benchmarks.mmlu}%</div>
                  </div>
                )}
              </div>
            </div>

            {/* Architecture Details & Hub Links */}
            <div className="rounded-xl bg-zinc-950/80 p-3 text-xs space-y-2 border border-white/5">
              <div className="flex justify-between text-zinc-400">
                <span>License:</span>
                <span className="font-medium text-zinc-200">{model.license}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Min Hardware:</span>
                <span className="font-medium text-zinc-200">
                  {model.minVramGb === 0 ? 'Any 4GB+ RAM CPU' : `${model.minVramGb} GB VRAM GPU`}
                </span>
              </div>

              {/* Source-specific Links */}
              <div className="pt-2 border-t border-white/5 space-y-2 text-zinc-400">
                {model.webToolUrl && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-purple-300 font-medium">
                      <span>🎨</span>
                      <span>Online Web Tool:</span>
                    </span>
                    <a
                      href={model.webToolUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-purple-400 hover:underline"
                    >
                      <span>{model.webToolUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                {model.apiUrl && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-cyan-300 font-medium">
                      <span>⚡</span>
                      <span>{model.apiUrl.includes('.html') || model.apiUrl.includes('/api') ? 'Free API Endpoint:' : 'Free LLM Platform:'}</span>
                    </span>
                    <a
                      href={model.apiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-cyan-400 hover:underline"
                    >
                      <span>{model.apiUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                {isHfModel ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span>🤗</span>
                        <span>Hugging Face Hub:</span>
                      </span>
                      <a
                        href={`https://huggingface.co/${hfCleanRepo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-amber-400 hover:underline"
                      >
                        <span>{hfCleanRepo}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 font-medium">Direct Files & Versions:</span>
                      <a
                        href={`https://huggingface.co/${hfCleanRepo}/tree/main`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 hover:underline bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md"
                      >
                        <FolderGit2 className="h-3 w-3" />
                        <span>Files & versions (tree/main)</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </>
                ) : !model.webToolUrl ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sky-300">
                        <span>🦙</span>
                        <span>Ollama Library Page:</span>
                      </span>
                      <a
                        href={ollamaDetailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-sky-400 hover:underline"
                      >
                        <span>{ollamaCleanSlug}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    {hfCleanRepo && (
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Base HF Weights:</span>
                        <a
                          href={`https://huggingface.co/${hfCleanRepo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-mono text-zinc-400 hover:text-zinc-200 hover:underline text-[11px]"
                        >
                          <span>{hfCleanRepo}</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>
                    )}
                  </>
                ) : null}
              </div>
            </div>

            {/* Available Quantizations Direct List */}
            <div>
              <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Model Quantization & Disk Size:
              </div>
              <div className="space-y-1">
                {model.quantizations.map((quant, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl bg-zinc-950 px-3 py-2 text-xs border border-white/5"
                  >
                    <div>
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <span>{quant.format}</span>
                        {quant.isPopular && (
                          <span className="rounded bg-blue-500/20 border border-blue-500/30 px-1 text-[9px] font-bold text-blue-300">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-zinc-500">{quant.recommendedVram}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-cyan-400 bg-zinc-900 px-2 py-0.5 rounded-lg border border-white/10">
                        {quant.size}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Action Footer: Specs toggle, Compare button, Source Link, and Clean Size Badge */}
      <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Toggle Inline Specs */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            id={`btn-details-${model.id}`}
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/5 bg-zinc-800/40"
          >
            <Info className="h-3.5 w-3.5 text-blue-400" />
            <span>{isExpanded ? 'Hide Specs' : 'Specs'}</span>
            {isExpanded ? <ChevronUp className="h-3 w-3 text-zinc-400" /> : <ChevronDown className="h-3 w-3 text-zinc-400" />}
          </button>

          {/* Side-by-Side Compare Button */}
          <button
            onClick={() => onToggleCompare?.(model)}
            id={`btn-compare-${model.id}`}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all cursor-pointer border ${
              isCompared
                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/70 shadow-[0_0_15px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/40 font-bold'
                : 'text-zinc-300 hover:text-white hover:bg-white/10 border-white/10 bg-zinc-800/40 hover:border-cyan-500/40'
            }`}
            title={isCompared ? 'Remove model from comparison' : 'Select model to compare technical specifications side-by-side'}
          >
            <GitCompare className={`h-3.5 w-3.5 ${isCompared ? 'text-cyan-300' : 'text-zinc-400'}`} />
            <span>{isCompared ? 'Comparing' : 'Compare'}</span>
            {isCompared && <Check className="h-3 w-3 text-cyan-300 stroke-[2.5]" />}
          </button>
        </div>

        {/* Source Link (Web Tool vs Hugging Face Files & versions vs Ollama Model Details) */}
        {model.webToolUrl ? (
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={model.webToolUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`btn-webtool-${model.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/30 hover:to-indigo-600/30 border border-purple-500/40 px-3 py-2 text-xs font-bold text-purple-300 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
              title={`Open ${model.name} Tool`}
            >
              <span>{model.id.includes('bg') ? '🎨' : '🚀'}</span>
              <span>{model.id.includes('omni') ? 'Open AI Suite' : 'Open Web Tool'}</span>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
            {model.apiUrl && model.apiUrl !== model.webToolUrl && (
              <a
                href={model.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`btn-api-docs-${model.id}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-2 text-xs font-bold text-cyan-300 transition-all cursor-pointer shadow-sm"
                title={`Open ${model.name} Free API`}
              >
                <span>⚡</span>
                <span>Free API</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            )}
          </div>
        ) : isHfModel ? (
          <a
            href={`https://huggingface.co/${hfCleanRepo}/tree/main`}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-hf-files-${model.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-2 text-xs font-bold text-amber-300 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
            title={`Open ${model.name} Files and versions on Hugging Face`}
          >
            <span className="text-sm leading-none">🤗</span>
            <span>HF Files & versions</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        ) : (
          <a
            href={ollamaDetailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-ollama-details-${model.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 px-3 py-2 text-xs font-bold text-sky-300 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
            title={`Open ${model.name} Ollama Model Details`}
          >
            <span className="text-sm leading-none">🦙</span>
            <span>Ollama Details</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        )}

        {/* Clean Size Display Badge */}
        <div className="flex items-center gap-1.5 rounded-xl bg-zinc-800/80 border border-white/10 px-3 py-1.5 text-xs">
          <span className="text-[11px] text-zinc-400 font-medium">Size:</span>
          <span className="font-mono font-bold text-cyan-300">
            {popularQuant.size}
          </span>
        </div>

      </div>
    </div>
  );
};


