import React from 'react';

interface OrganizationLogoProps {
  creator: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const OrganizationLogo: React.FC<OrganizationLogoProps> = ({ 
  creator, 
  className = '',
  size = 'md' 
}) => {
  const normalized = creator.toLowerCase().trim();

  const sizeClasses = {
    sm: 'h-6 w-6 text-[10px]',
    md: 'h-10 w-10 text-xs',
    lg: 'h-12 w-12 text-sm'
  };

  const containerClass = `relative flex items-center justify-center rounded-xl font-bold shadow-md transition-transform group-hover:scale-105 shrink-0 overflow-hidden ${sizeClasses[size]} ${className}`;

  // 1. Hugging Face
  if (normalized.includes('hugging') || normalized.includes('hf') || normalized.includes('smollm')) {
    return (
      <div className={`${containerClass} bg-[#FFD21E] text-zinc-900 border border-amber-300 shadow-[0_0_12px_rgba(255,210,30,0.3)]`} title="Hugging Face">
        <span className="text-lg leading-none select-none">🤗</span>
      </div>
    );
  }

  // 2. Unsloth AI
  if (normalized.includes('unsloth')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-emerald-950 via-zinc-900 to-black border border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]`} title="Unsloth AI">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#10B981" />
        </svg>
      </div>
    );
  }

  // 3. bartowski / Quantizer
  if (normalized.includes('bartowski')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-blue-900 via-indigo-950 to-zinc-950 border border-blue-400/50 text-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.3)]`} title="bartowski Quantizer">
        <span className="font-mono font-black text-sm tracking-tighter text-cyan-300">b.</span>
      </div>
    );
  }

  // 4. Meta / Llama
  if (normalized.includes('meta') || normalized.includes('llama')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-[#0668E1] to-[#004BB7] text-white border border-blue-400/40 shadow-[0_0_12px_rgba(6,104,225,0.4)]`} title="Meta AI">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M16.994 4.545C15.358 4.545 13.9 5.418 13.06 6.74C12.222 5.418 10.763 4.545 9.127 4.545C5.973 4.545 3.5 7.07 3.5 10.155C3.5 14.652 7.79 17.518 11.758 19.345C12.188 19.544 12.67 19.544 13.1 19.345C17.068 17.518 21.358 14.652 21.358 10.155C21.358 7.07 18.885 4.545 15.731 4.545H16.994ZM12.06 17.29C8.618 15.655 5.5 13.25 5.5 10.155C5.5 8.167 7.108 6.545 9.127 6.545C10.665 6.545 12.008 7.55 12.008 9.5H12.112C12.112 7.55 13.455 6.545 14.993 6.545C17.012 6.545 18.62 8.167 18.62 10.155C18.62 13.25 15.502 15.655 12.06 17.29Z" />
        </svg>
      </div>
    );
  }

  // 5. DeepSeek
  if (normalized.includes('deepseek')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-cyan-950 via-blue-950 to-zinc-950 border border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.35)]`} title="DeepSeek AI">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current" strokeWidth="2">
          <circle cx="12" cy="12" r="9" stroke="#06b6d4" />
          <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" fill="#06b6d4" />
          <path d="M12 3v3m0 12v3M3 12h3m12 0h3" stroke="#38bdf8" />
        </svg>
      </div>
    );
  }

  // 6. Google / DeepMind / Gemma
  if (normalized.includes('google') || normalized.includes('deepmind') || normalized.includes('gemma')) {
    return (
      <div className={`${containerClass} bg-zinc-900 border border-white/15 shadow-[0_0_12px_rgba(66,133,244,0.3)]`} title="Google DeepMind">
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      </div>
    );
  }

  // 7. Alibaba / Qwen
  if (normalized.includes('qwen') || normalized.includes('alibaba')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-[#6A11CB] to-[#2575FC] text-white border border-purple-400/40 shadow-[0_0_12px_rgba(106,17,203,0.35)]`} title="Alibaba Qwen">
        <span className="font-extrabold text-sm font-sans tracking-wide">Qwen</span>
      </div>
    );
  }

  // 8. Microsoft / Phi
  if (normalized.includes('microsoft') || normalized.includes('phi')) {
    return (
      <div className={`${containerClass} bg-zinc-950 border border-white/10 p-2 shadow-[0_0_12px_rgba(255,255,255,0.1)]`} title="Microsoft">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="bg-[#F25022] rounded-[1px]" />
          <div className="bg-[#7FBA00] rounded-[1px]" />
          <div className="bg-[#00A4EF] rounded-[1px]" />
          <div className="bg-[#FFB900] rounded-[1px]" />
        </div>
      </div>
    );
  }

  // 9. Mistral AI
  if (normalized.includes('mistral')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-[#FA520F] via-[#FF8000] to-[#E02E00] text-white border border-orange-400/50 shadow-[0_0_12px_rgba(250,82,15,0.4)]`} title="Mistral AI">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <rect x="3" y="5" width="4" height="14" rx="1" />
          <rect x="9" y="9" width="4" height="10" rx="1" />
          <rect x="15" y="13" width="4" height="6" rx="1" />
        </svg>
      </div>
    );
  }

  // 10. Nous Research
  if (normalized.includes('nous') || normalized.includes('hermes')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-rose-950 via-zinc-900 to-black border border-rose-500/40 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.3)]`} title="Nous Research">
        <span className="font-serif font-black text-sm text-rose-300">N</span>
      </div>
    );
  }

  // 11. Cohere
  if (normalized.includes('cohere') || normalized.includes('command')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-[#39594C] to-[#1E332A] text-[#FF7759] border border-[#FF7759]/40 shadow-[0_0_12px_rgba(255,119,89,0.3)]`} title="Cohere AI">
        <span className="font-black text-xs">C+</span>
      </div>
    );
  }

  // 12. TheBloke
  if (normalized.includes('thebloke')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-amber-950 via-zinc-900 to-black border border-amber-500/40 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]`} title="TheBloke">
        <span className="font-mono font-bold text-xs">TB</span>
      </div>
    );
  }

  // 13. Rongon Kairy (Verified Creator)
  if (normalized.includes('rongon') || normalized.includes('kairy')) {
    return (
      <div className={`${containerClass} bg-gradient-to-br from-red-600 via-rose-700 to-zinc-950 text-white border border-red-400/50 shadow-[0_0_15px_rgba(239,68,68,0.4)]`} title="Rongon Kairy (Verified Creator)">
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
      </div>
    );
  }

  // 14. Ollama
  if (normalized.includes('ollama')) {
    return (
      <div className={`${containerClass} bg-zinc-900 text-white border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]`} title="Ollama">
        <span className="font-bold text-xs tracking-wider font-mono">🦙</span>
      </div>
    );
  }

  // Fallback default avatar with initials
  const initials = creator.slice(0, 2).toUpperCase();
  return (
    <div className={`${containerClass} bg-zinc-800 text-zinc-200 border border-white/10`} title={creator}>
      <span className="font-mono text-xs">{initials}</span>
    </div>
  );
};
