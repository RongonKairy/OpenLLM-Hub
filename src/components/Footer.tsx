import React from 'react';
import { 
  Sparkles, 
  Heart,
  ExternalLink,
  Share2
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenSocialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenSocialModal }) => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/80 py-12 text-xs text-zinc-400 relative z-10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          
          {/* Col 1: Brand & Creator */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="md" />
              <span className="font-bold text-white text-base">OpenLLM Hub</span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/20">
                100% Free Forever
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              An all-in-one open-source LLM platform dedicated to empowering developers, researchers, and AI enthusiasts worldwide with free, custom fine-tuned large language models in GGUF, Safetensors, and Ollama formats.
            </p>
            
            {/* Creator & License line */}
            <div className="flex items-center gap-2 pt-1 text-zinc-300 font-medium flex-wrap">
              <span className="flex items-center gap-1">
                Creator:{' '}
                <button
                  id="footer-creator-btn"
                  onClick={onOpenSocialModal}
                  className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-2 py-0.5 font-bold text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all border border-blue-500/30 cursor-pointer shadow-sm"
                  title="Click to view Rongon Kairy social channels"
                >
                  <span>Rongon Kairy</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </span>
              <span className="text-zinc-600">•</span>
              <span>
                License: <strong className="text-white">Apache 2.0 / MIT</strong>
              </span>
            </div>

            {/* Quick Social Connect Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenSocialModal}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-blue-500/40 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white transition-all cursor-pointer shadow-inner hover:bg-zinc-850"
              >
                <Share2 className="h-3.5 w-3.5 text-blue-400" />
                <span>Connect with Rongon Kairy (Social Profiles)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-zinc-200 text-xs tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onScrollTo('models-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  All Free AI Models
                </button>
              </li>
              <li>
                <button onClick={onOpenSocialModal} className="hover:text-cyan-400 transition-colors cursor-pointer text-left">
                  Creator Social Media
                </button>
              </li>
              <li>
                <a href="https://github.com/rongonkairy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@rongonkairy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  YouTube Channel
                </a>
              </li>
              <li>
                <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Ollama Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Supported Ecosystem */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-zinc-200 text-xs tracking-wider uppercase">
              Supported Formats
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-lg bg-zinc-900 border border-white/5 px-2.5 py-1 text-zinc-300">🦙 Ollama Native</span>
              <span className="rounded-lg bg-zinc-900 border border-white/5 px-2.5 py-1 text-zinc-300">📦 GGUF Q4_K_M</span>
              <span className="rounded-lg bg-zinc-900 border border-white/5 px-2.5 py-1 text-zinc-300">⚡ Hugging Face</span>
              <span className="rounded-lg bg-zinc-900 border border-white/5 px-2.5 py-1 text-zinc-300">🖥️ LM Studio</span>
              <span className="rounded-lg bg-zinc-900 border border-white/5 px-2.5 py-1 text-zinc-300">📱 Apple MLX</span>
              <span className="rounded-lg bg-zinc-900 border border-white/5 px-2.5 py-1 text-zinc-300">🚀 vLLM Engine</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Exact Copyright requirement */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>
            © 2026 OpenLLM Hub. Creat By{' '}
            <button
              onClick={onOpenSocialModal}
              className="text-blue-400 hover:text-blue-300 font-bold underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-all cursor-pointer inline-flex items-center gap-1"
            >
              Rongon Kairy.
              <ExternalLink className="h-3 w-3 inline" />
            </button>
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> for Open Source AI
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
