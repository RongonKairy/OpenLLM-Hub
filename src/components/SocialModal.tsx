import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Youtube, 
  Facebook, 
  Instagram, 
  Github, 
  Globe, 
  Send, 
  Linkedin, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  description: string;
  handle: string;
}

export const SocialModal: React.FC<SocialModalProps> = ({ isOpen, onClose }) => {
  const [copiedUrl, setCopiedUrl] = React.useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const socialLinks: SocialLink[] = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@rongonkairy',
      icon: <Youtube className="h-5 w-5 text-red-500" />,
      color: 'hover:border-red-500/50 hover:bg-red-500/10 group-hover:text-red-400',
      badge: '▶️ Official Channel',
      description: 'AI tutorials, LLM benchmarks, fine-tuning guides & tech reviews',
      handle: '@rongonkairy'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/rongonkairy',
      icon: <Facebook className="h-5 w-5 text-blue-500" />,
      color: 'hover:border-blue-500/50 hover:bg-blue-500/10 group-hover:text-blue-400',
      badge: '📘 Official Page',
      description: 'Community updates, tech news & direct communication',
      handle: 'facebook.com/rongonkairy'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rongonkairy/',
      icon: <Instagram className="h-5 w-5 text-pink-500" />,
      color: 'hover:border-pink-500/50 hover:bg-pink-500/10 group-hover:text-pink-400',
      badge: '📸 Tech & Life',
      description: 'Behind the scenes, quick AI tips & visual updates',
      handle: '@rongonkairy'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/rongonkairy',
      icon: (
        <span className="font-extrabold text-sm font-sans tracking-tighter text-zinc-100 flex items-center justify-center w-5 h-5">
          𝕏
        </span>
      ),
      color: 'hover:border-white/50 hover:bg-white/10 group-hover:text-white',
      badge: '𝕏 Tweets & Threads',
      description: 'Fast-paced AI announcements, releases & discussions',
      handle: '@rongonkairy'
    },
    {
      name: 'Telegram Channel',
      url: 'https://t.me/rongonkairy',
      icon: <Send className="h-5 w-5 text-sky-400" />,
      color: 'hover:border-sky-500/50 hover:bg-sky-500/10 group-hover:text-sky-400',
      badge: '📢 Direct Updates',
      description: 'Instant model download links, prompts & early releases',
      handle: 't.me/rongonkairy'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rongonkairy',
      icon: <Github className="h-5 w-5 text-zinc-200" />,
      color: 'hover:border-purple-500/50 hover:bg-purple-500/10 group-hover:text-purple-300',
      badge: '💻 Open Source Code',
      description: 'Open source LLM training scripts, configs & web projects',
      handle: '@rongonkairy'
    },
    {
      name: 'Official Website',
      url: 'https://rongonkairy.vercel.app',
      icon: <Globe className="h-5 w-5 text-emerald-400" />,
      color: 'hover:border-emerald-500/50 hover:bg-emerald-500/10 group-hover:text-emerald-300',
      badge: '🌐 Official Portal',
      description: 'Articles, tools, contact information & projects archive',
      handle: 'rongonkairy.vercel.app'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rongonkairy',
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
      color: 'hover:border-blue-400/50 hover:bg-blue-400/10 group-hover:text-blue-300',
      badge: '💼 Professional Network',
      description: 'Professional background, collaborations & tech ventures',
      handle: 'in/rongonkairy'
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/user/rongonkairy',
      icon: <Share2 className="h-5 w-5 text-orange-500" />,
      color: 'hover:border-orange-500/50 hover:bg-orange-500/10 group-hover:text-orange-400',
      badge: '💬 Community Discussion',
      description: 'OpenLLM Hub feedback, discussions & AI debates',
      handle: 'u/rongonkairy'
    }
  ];

  const handleCopy = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Cross Bar / Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-white/20">
              RK
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-black text-[10px] font-bold ring-2 ring-zinc-950">
                ✓
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Rongon Kairy
                </h3>
                <CheckCircle2 className="h-4 w-4 text-blue-400 fill-blue-400/20" />
                <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400 border border-blue-500/20">
                  Creator & Developer
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Official Social Media & Connect Links • Open in a new tab
              </p>
            </div>
          </div>

          {/* Cross Bar / Close Button */}
          <button
            id="social-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="flex items-center gap-1 rounded-xl bg-zinc-900 border border-white/10 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-sm hover:border-white/20"
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Creator Intro Banner */}
        <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-zinc-900/60 p-3.5 border border-white/5 flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="text-zinc-200 font-medium leading-relaxed">
              Welcome to the official developer profile of <strong className="text-white">Rongon Kairy</strong>. Follow on social channels for new open-source AI model releases, fine-tuning benchmarks, and video tutorials.
            </p>
          </div>
        </div>

        {/* Social Media Links Grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[58vh] overflow-y-auto pr-1">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/70 p-3 transition-all duration-200 ${item.color} cursor-pointer`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 border border-white/10 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-zinc-100 group-hover:text-white truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono hidden xs:inline">
                      {item.handle}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate group-hover:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-2">
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, item.url)}
                  title="Copy Link URL"
                  className="rounded-lg p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  {copiedUrl === item.url ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
                <div className="rounded-lg p-1.5 text-zinc-400 group-hover:text-cyan-400 transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer info & Cross Bar bottom button */}
        <div className="mt-5 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>
            © 2026 OpenLLM Hub. Creat By <span className="text-zinc-300 font-semibold">Rongon Kairy.</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg bg-zinc-900 border border-white/10 px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Close Bar ✕
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
