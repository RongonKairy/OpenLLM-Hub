import React, { useState, useEffect } from 'react';
import { 
  X, 
  Terminal, 
  Check, 
  Copy, 
  Sparkles, 
  Cpu, 
  Play, 
  Download, 
  Code2, 
  Sliders, 
  Plus, 
  BookOpen, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  FileCode2, 
  Server, 
  Zap, 
  RotateCcw,
  Search,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LLMModel, ModelCategory } from '../types';

interface OllamaModalProps {
  isOpen: boolean;
  onClose: () => void;
  models: LLMModel[];
  initialModel?: LLMModel | null;
  onAddNewModel?: (newModel: LLMModel) => void;
}

export const OllamaModal: React.FC<OllamaModalProps> = ({
  isOpen,
  onClose,
  models,
  initialModel,
  onAddNewModel
}) => {
  // Tabs: 'run' | 'create' | 'cheatsheet'
  const [activeTab, setActiveTab] = useState<'run' | 'create' | 'cheatsheet'>('run');

  // Filter models that have an ollamaCommand
  const ollamaCompatibleModels = models.filter(m => m.ollamaCommand && m.ollamaCommand.trim().length > 0);

  // Selected model for the runner tab
  const [selectedModelId, setSelectedModelId] = useState<string>(
    initialModel?.id || ollamaCompatibleModels[0]?.id || 'deepseek-r1'
  );

  // Sync initialModel when modal opens
  useEffect(() => {
    if (initialModel && initialModel.id) {
      setSelectedModelId(initialModel.id);
    }
  }, [initialModel]);

  const currentModel = models.find(m => m.id === selectedModelId) || ollamaCompatibleModels[0] || models[0];

  // Runner state
  const [cliOption, setCliOption] = useState<'run' | 'pull' | 'modelfile' | 'curl' | 'python' | 'node'>('run');
  const [isVerbose, setIsVerbose] = useState(false);
  const [simulatedPrompt, setSimulatedPrompt] = useState('Explain how quantum entanglement works in simple terms with a code analogy.');
  const [simulatedOutput, setSimulatedOutput] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // "Create New Ollama LLM" Form state
  const [customName, setCustomName] = useState('my-ai-assistant:latest');
  const [baseModel, setBaseModel] = useState('llama3.3');
  const [systemPrompt, setSystemPrompt] = useState('You are an expert full-stack engineer and AI assistant created by Rongon Kairy. Provide concise, clean, bug-free code with explanations.');
  const [temperature, setTemperature] = useState(0.7);
  const [numCtx, setNumCtx] = useState(32768);
  const [numGpu, setNumGpu] = useState(99);
  const [category, setCategory] = useState<ModelCategory>('coding');
  const [tagline, setTagline] = useState('Custom tuned Ollama assistant with deep domain capabilities');
  const [creatorName, setCreatorName] = useState('Rongon Kairy');
  const [createdSuccess, setCreatedSuccess] = useState(false);

  // Search in runner
  const [modelSearch, setModelSearch] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Extract clean model name for ollama run
  const getOllamaModelTag = (m: LLMModel): string => {
    if (m.ollamaCommand) {
      const match = m.ollamaCommand.match(/ollama run\s+([^\s]+)/i);
      if (match && match[1]) return match[1];
      const matchLaunch = m.ollamaCommand.match(/ollama launch\s+([^\s]+)/i);
      if (matchLaunch && matchLaunch[1]) return matchLaunch[1];
    }
    return m.slug.replace(/-gguf$/, '');
  };

  const modelTag = currentModel ? getOllamaModelTag(currentModel) : 'llama3.3';

  // Compute command snippets for Runner Tab
  const getRunnerCommand = () => {
    switch (cliOption) {
      case 'run':
        return isVerbose ? `ollama run ${modelTag} --verbose` : `ollama run ${modelTag}`;
      case 'pull':
        return `ollama pull ${modelTag}`;
      case 'modelfile':
        return `# Modelfile for ${currentModel.name}\nFROM ${modelTag}\nPARAMETER temperature 0.7\nPARAMETER num_ctx ${currentModel.contextWindow.includes('K') ? parseInt(currentModel.contextWindow) * 1024 : 8192}\nSYSTEM """You are a helpful AI assistant specialized in ${currentModel.category}."""`;
      case 'curl':
        return `curl -X POST http://localhost:11434/api/generate -d '{\n  "model": "${modelTag}",\n  "prompt": "${simulatedPrompt.replace(/'/g, "\\'")}",\n  "stream": false\n}'`;
      case 'python':
        return `import ollama\n\n# Run inference locally with Ollama\nresponse = ollama.chat(\n    model="${modelTag}",\n    messages=[\n        {"role": "user", "content": "${simulatedPrompt.replace(/"/g, '\\"')}"}\n    ]\n)\nprint(response["message"]["content"])`;
      case 'node':
        return `import OpenAI from "openai";\n\n// Ollama provides OpenAI-compatible REST endpoint on port 11434\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama", // api key is ignored\n});\n\nconst completion = await client.chat.completions.create({\n  model: "${modelTag}",\n  messages: [{ role: "user", content: "${simulatedPrompt.replace(/"/g, '\\"')}" }],\n});\n\nconsole.log(completion.choices[0].message.content);`;
    }
  };

  // Run simulated prompt output
  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulatedOutput(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedOutput(
        `[Ollama Local Engine :: ${modelTag}]\n` +
        `Thinking process initialized (${currentModel.contextWindow} context window)...\n\n` +
        `Here is the verified response for "${simulatedPrompt}":\n\n` +
        `Quantum entanglement is like two distributed microservices sharing a single transactional commit log across light-years without network latency. When one service updates its state bit (Spin-Up), the entangled replica instantaneously computes the inverse bit (Spin-Down).\n\n` +
        `Token speed: ~${currentModel.benchmarks?.tokensPerSec || 75} tokens/sec | VRAM utilized: ~${currentModel.minVramGb} GB | Quant: ${currentModel.quantizations?.[0]?.format || 'Q4_K_M'}`
      );
    }, 600);
  };

  // Build custom Modelfile text for Create Tab
  const generatedModelfile = `# Generated Modelfile for ${customName || 'custom-model'}
FROM ${baseModel}
PARAMETER temperature ${temperature}
PARAMETER num_ctx ${numCtx}
PARAMETER num_gpu ${numGpu}
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"

# Custom Persona & System Instruction
SYSTEM """${systemPrompt}"""
`;

  const generatedScript = `# 1. Save Modelfile to disk
cat << 'EOF' > Modelfile
${generatedModelfile.trim()}
EOF

# 2. Build the model into your local Ollama registry
ollama create ${customName.trim() || 'my-custom-model'} -f ./Modelfile

# 3. Launch and interact with your new LLM!
ollama run ${customName.trim() || 'my-custom-model'}
`;

  // Handle Save to Catalog
  const handleSaveToCatalog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const slug = customName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const modelId = `ollama-custom-${slug}-${Date.now().toString(36)}`;

    const newModel: LLMModel = {
      id: modelId,
      name: customName.trim(),
      slug: slug || modelId,
      tagline: tagline.trim() || 'Custom fine-tuned Ollama LLM model',
      taglineBn: 'কাস্টম ওলামা এলএলএম মডেল',
      description: `Fine-tuned custom Ollama model built on top of ${baseModel} with ${numCtx.toLocaleString()} context tokens and temperature ${temperature}. System persona: "${systemPrompt.slice(0, 100)}..."`,
      descriptionBn: `${baseModel}-এর ওপর ভিত্তি করে তৈরি কাস্টম ওলামা এলএলএম মডেল।`,
      creator: creatorName.trim() || 'Rongon Kairy',
      avatarIcon: category === 'coding' ? 'Code2' : category === 'reasoning' ? 'BrainCircuit' : 'Sparkles',
      baseArchitecture: `Ollama Modelfile (${baseModel})`,
      parameterSize: baseModel.includes('70b') ? '70B' : baseModel.includes('32b') ? '32B' : baseModel.includes('14b') ? '14B' : '8B',
      paramNumber: baseModel.includes('70b') ? 70 : baseModel.includes('32b') ? 32 : baseModel.includes('14b') ? 14 : 8,
      category: category,
      modelScope: 'my_llm',
      contextWindow: `${Math.round(numCtx / 1024)}K`,
      license: 'MIT / Open Weights',
      releaseDate: new Date().toISOString().split('T')[0],
      downloadsCount: 150,
      likesCount: 38,
      rating: 5.0,
      isFeatured: true,
      isTrending: true,
      isNew: true,
      benchmarks: {
        mmlu: 88.0,
        codingHumanEval: category === 'coding' ? 91.0 : 84.0,
        mathGsm8k: category === 'reasoning' ? 92.5 : 85.0,
        banglaNlpScore: category === 'bengali-indic' ? 92.0 : undefined,
        reasoningArc: 89.0,
        tokensPerSec: 72
      },
      minVramGb: baseModel.includes('70b') ? 38 : baseModel.includes('32b') ? 18 : 6,
      recommendedVramGb: baseModel.includes('70b') ? 48 : baseModel.includes('32b') ? 24 : 10,
      minCpuRamGb: 16,
      quantizations: [
        {
          format: 'GGUF Q4_K_M',
          size: baseModel.includes('70b') ? '42 GB' : baseModel.includes('32b') ? '19 GB' : '4.8 GB',
          bytes: 4800000000,
          filename: `${slug}-Q4_K_M.gguf`,
          downloadUrl: `https://ollama.com/library/${baseModel.split(':')[0]}`,
          recommendedVram: `${baseModel.includes('70b') ? 40 : 8} GB VRAM`,
          recommendedFor: 'Optimized local Ollama inference',
          isPopular: true
        }
      ],
      ollamaCommand: `ollama run ${customName.trim()}`,
      huggingFaceRepo: `ollama/${customName.trim().replace(/:.*/, '')}`,
      pythonSnippet: `import ollama\nresponse = ollama.chat(model='${customName.trim()}', messages=[{'role': 'user', 'content': 'Hello!' }])\nprint(response['message']['content'])`,
      tags: ['Ollama', 'My LLM', 'Custom Modelfile', baseModel, category, creatorName],
      features: [
        `Base Model: ${baseModel} with custom system persona`,
        `Context Window: ${numCtx.toLocaleString()} tokens`,
        `Ready for instant CLI execution: ollama run ${customName.trim()}`
      ],
      featuresBn: [`ওলামা কাস্টম মডেল: ${customName.trim()}`, `বেস ব্যাকবোন: ${baseModel}`],
      trainingTokens: 'Custom System Instructions & Modelfile Configuration',
      samplePrompts: [
        {
          id: 'custom-p1',
          title: 'System Prompt Test',
          prompt: `Run custom persona with model ${customName}`,
          response: `Loaded ${customName} successfully via Ollama runtime engine.`,
          category: 'Prompt'
        }
      ]
    };

    if (onAddNewModel) {
      onAddNewModel(newModel);
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setCreatedSuccess(true);
    setTimeout(() => {
      setCreatedSuccess(false);
      setActiveTab('run');
      setSelectedModelId(modelId);
    }, 1400);
  };

  const filteredOllamaModels = ollamaCompatibleModels.filter(m => {
    if (!modelSearch.trim()) return true;
    const q = modelSearch.toLowerCase();
    return m.name.toLowerCase().includes(q) || 
           m.slug.toLowerCase().includes(q) || 
           m.ollamaCommand.toLowerCase().includes(q);
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="ollama-modal-container"
        className="relative w-full max-w-5xl rounded-3xl bg-[#09090d] shadow-2xl border border-white/10 overflow-hidden my-6 backdrop-blur-2xl text-zinc-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950/90 px-6 py-4.5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-sky-500/20 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.25)]">
              <span className="text-2xl leading-none">🦙</span>
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span>Ollama LLM Hub & Model Runner</span>
                </h2>
                <span className="rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 px-2.5 py-0.5 text-[10px] font-bold text-sky-300">
                  Ollama v0.5+ Ready
                </span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                  Local & Cloud Bridge
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Run, pull, test, and build custom Ollama LLM models with 1-click CLI & REST commands
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            title="Close modal (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-zinc-950/50 px-6 overflow-x-auto shrink-0 gap-2">
          <button
            onClick={() => setActiveTab('run')}
            id="tab-ollama-run"
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'run'
                ? 'border-sky-500 text-sky-400 shadow-[0_4px_15px_rgba(56,189,248,0.3)]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Play className="h-4 w-4" />
            <span>Explore & Run LLM Models</span>
            <span className="rounded-full bg-sky-950/60 text-sky-300 text-[10px] px-1.5 py-0.2 border border-sky-800/40">
              {ollamaCompatibleModels.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('create')}
            id="tab-ollama-create"
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'create'
                ? 'border-purple-500 text-purple-400 shadow-[0_4px_15px_rgba(168,85,247,0.3)]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Plus className="h-4 w-4" />
            <span>+ Create New Ollama LLM</span>
            <span className="rounded-full bg-purple-950/60 text-purple-300 text-[10px] px-1.5 py-0.2 border border-purple-800/40">
              Modelfile Builder
            </span>
          </button>

          <button
            onClick={() => setActiveTab('cheatsheet')}
            id="tab-ollama-cheatsheet"
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'cheatsheet'
                ? 'border-amber-500 text-amber-400 shadow-[0_4px_15px_rgba(245,158,11,0.3)]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Ollama Setup & CLI Cheat Sheet</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* ======================================================== */}
          {/* TAB 1: RUN & EXPLORE OLLAMA MODELS                       */}
          {/* ======================================================== */}
          {activeTab === 'run' && (
            <div className="space-y-6">
              
              {/* Model Selector Card */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                      Select Ollama Model to Inspect & Run:
                    </label>
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      <div className="relative flex-1 min-w-[240px]">
                        <select
                          value={selectedModelId}
                          onChange={(e) => setSelectedModelId(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2.5 text-sm font-semibold text-white focus:border-sky-500 focus:outline-none cursor-pointer"
                        >
                          {ollamaCompatibleModels.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.name} ({m.parameterSize}) — {m.category}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Quick Chips */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {['deepseek-r1', 'llama3-3', 'qwen2-5-coder', 'phi4', 'claude-code'].map(id => {
                          const modelFound = models.find(m => m.id === id);
                          if (!modelFound) return null;
                          return (
                            <button
                              key={id}
                              onClick={() => setSelectedModelId(id)}
                              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                                selectedModelId === id
                                  ? 'bg-sky-600 text-white shadow-sm'
                                  : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700'
                              }`}
                            >
                              {modelFound.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Active Model Specs Badge */}
                  {currentModel && (
                    <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-3 flex flex-col gap-1.5 text-xs min-w-[220px]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{currentModel.name}</span>
                        <span className="font-mono text-sky-300 font-bold">{currentModel.parameterSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                        <span>Context Window:</span>
                        <span className="text-zinc-200 font-mono">{currentModel.contextWindow}</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                        <span>Min VRAM / RAM:</span>
                        <span className="text-emerald-400 font-mono">
                          {currentModel.minVramGb === 0 ? '4GB CPU RAM' : `${currentModel.minVramGb}GB VRAM`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                        <span>Creator:</span>
                        <span className="text-zinc-300">{currentModel.creator}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Command Generation & Format Switcher */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mr-1">
                      Mode:
                    </span>
                    <button
                      onClick={() => setCliOption('run')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        cliOption === 'run' ? 'bg-sky-600 text-white shadow-sm' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Terminal className="h-3.5 w-3.5 text-sky-400" />
                      <span>ollama run</span>
                    </button>

                    <button
                      onClick={() => setCliOption('pull')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        cliOption === 'pull' ? 'bg-sky-600 text-white shadow-sm' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>ollama pull</span>
                    </button>

                    <button
                      onClick={() => setCliOption('modelfile')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        cliOption === 'modelfile' ? 'bg-sky-600 text-white shadow-sm' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <FileCode2 className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Modelfile</span>
                    </button>

                    <button
                      onClick={() => setCliOption('curl')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        cliOption === 'curl' ? 'bg-sky-600 text-white shadow-sm' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Server className="h-3.5 w-3.5 text-amber-400" />
                      <span>cURL (REST API)</span>
                    </button>

                    <button
                      onClick={() => setCliOption('python')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        cliOption === 'python' ? 'bg-sky-600 text-white shadow-sm' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Python</span>
                    </button>

                    <button
                      onClick={() => setCliOption('node')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        cliOption === 'node' ? 'bg-sky-600 text-white shadow-sm' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>Node.js / OpenAI</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {cliOption === 'run' && (
                      <label className="flex items-center gap-1.5 text-xs text-zinc-400 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isVerbose}
                          onChange={(e) => setIsVerbose(e.target.checked)}
                          className="rounded border-zinc-700 bg-zinc-900 text-sky-500 focus:ring-sky-500"
                        />
                        <span>--verbose (token metrics)</span>
                      </label>
                    )}

                    <button
                      onClick={() => copyToClipboard(getRunnerCommand(), 'runner-cmd')}
                      className="flex items-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 px-3.5 py-1.5 text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(2,132,199,0.35)] cursor-pointer"
                    >
                      {copiedKey === 'runner-cmd' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-white" />
                          <span>Copied Command!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy 1-Click</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Command Snippet Preview */}
                <div className="mt-4 relative group">
                  <pre className="font-mono text-xs sm:text-sm text-sky-200 bg-zinc-900/90 p-4 rounded-xl border border-white/5 overflow-x-auto whitespace-pre select-all leading-relaxed">
                    {getRunnerCommand()}
                  </pre>
                </div>
              </div>

              {/* Interactive Prompt Tester Simulator */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Play className="h-3.5 w-3.5 text-emerald-400" />
                    Simulate Inference with {currentModel.name}
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    Preview expected response & memory footprint
                  </span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={simulatedPrompt}
                    onChange={(e) => setSimulatedPrompt(e.target.value)}
                    placeholder="Enter test prompt for Ollama..."
                    className="flex-1 rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none"
                  />
                  <button
                    onClick={handleSimulate}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 px-4 py-2 text-xs font-bold text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0"
                  >
                    {isSimulating ? (
                      <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Play className="h-3.5 w-3.5" />
                    )}
                    <span>{isSimulating ? 'Generating...' : 'Test Run'}</span>
                  </button>
                </div>

                {simulatedOutput && (
                  <div className="mt-4 rounded-xl border border-emerald-500/20 bg-zinc-950 p-4 text-xs font-mono text-zinc-300 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-emerald-400 text-[11px] mb-2 font-bold">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Simulated Local Inference Output
                      </span>
                      <button
                        onClick={() => copyToClipboard(simulatedOutput, 'sim-output')}
                        className="text-zinc-400 hover:text-white text-[10px] cursor-pointer"
                      >
                        {copiedKey === 'sim-output' ? 'Copied' : 'Copy Output'}
                      </button>
                    </div>
                    <pre className="whitespace-pre-wrap leading-relaxed">{simulatedOutput}</pre>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: CREATE NEW LLM MODEL FOR OLLAMA                   */}
          {/* ======================================================== */}
          {activeTab === 'create' && (
            <div className="space-y-6">
              
              {/* Intro Banner */}
              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-zinc-900/40 p-4 sm:p-5 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Build & Register a New LLM for Ollama
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Create your own fine-tuned persona or domain-specific model using Ollama's <span className="text-purple-300 font-semibold font-mono">Modelfile</span> specification. Adjust system instructions, sampling temperatures, context lengths, and export ready-to-run terminal commands.
                  </p>
                </div>
              </div>

              {/* Form & Modelfile Preview Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Form Inputs */}
                <form onSubmit={handleSaveToCatalog} className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
                  <div>
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      New Model Tag / Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="e.g. rongon-coder:latest, bangla-thinker:8b"
                      required
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Base Ollama Foundation Backbone
                    </label>
                    <select
                      value={baseModel}
                      onChange={(e) => setBaseModel(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3.5 py-2 text-xs sm:text-sm text-white focus:border-purple-500 focus:outline-none cursor-pointer"
                    >
                      <option value="llama3.3">llama3.3 (Meta 70B Flagship)</option>
                      <option value="deepseek-r1:14b">deepseek-r1:14b (Deep Reasoning)</option>
                      <option value="deepseek-r1:70b">deepseek-r1:70b (Top Frontier Math/Code)</option>
                      <option value="qwen2.5-coder:7b">qwen2.5-coder:7b (High-Speed Coding)</option>
                      <option value="qwen2.5-coder:32b">qwen2.5-coder:32b (Heavy Codebase Specialist)</option>
                      <option value="phi4">phi4 (Microsoft 14B Synthetic STEM)</option>
                      <option value="mistral:7b">mistral:7b (Lightweight Fast General)</option>
                      <option value="gemma2:9b">gemma2:9b (Google DeepMind)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center justify-between">
                      <span>System Persona & Instruction Prompt</span>
                      <span className="text-[10px] text-zinc-500 font-normal">{systemPrompt.length} chars</span>
                    </label>
                    <textarea
                      rows={4}
                      value={systemPrompt}
                      onChange={(e) => setSystemPrompt(e.target.value)}
                      placeholder="Specify the exact instructions, role, style, rules, and guidelines for your model..."
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 p-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Sliders Grid: Temperature & Context */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold">
                        <span>Temperature</span>
                        <span className="font-mono text-purple-400">{temperature}</span>
                      </div>
                      <input
                        type="range"
                        min="0.0"
                        max="1.5"
                        step="0.05"
                        value={temperature}
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="mt-2 w-full accent-purple-500 cursor-pointer"
                      />
                      <span className="text-[10px] text-zinc-500">Lower for exact code/math, higher for creative</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold">
                        <span>Context Length (num_ctx)</span>
                        <span className="font-mono text-purple-400">{numCtx.toLocaleString()}</span>
                      </div>
                      <select
                        value={numCtx}
                        onChange={(e) => setNumCtx(parseInt(e.target.value))}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none cursor-pointer"
                      >
                        <option value="4096">4,096 tokens (4K - Ultra Low RAM)</option>
                        <option value="8192">8,192 tokens (8K - Standard)</option>
                        <option value="16384">16,384 tokens (16K)</option>
                        <option value="32768">32,768 tokens (32K - Balanced)</option>
                        <option value="65536">65,536 tokens (64K - Long Document)</option>
                        <option value="131072">131,072 tokens (128K - Full Codebase)</option>
                      </select>
                    </div>
                  </div>

                  {/* Category & Creator */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-300">Category</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as ModelCategory)}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none cursor-pointer"
                      >
                        <option value="coding">Coding & Software</option>
                        <option value="reasoning">Reasoning & Math</option>
                        <option value="bengali-indic">Bengali & Indic</option>
                        <option value="general-chat">General Chat</option>
                        <option value="vision">Vision & Multimodal</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-300">Creator Tag</label>
                      <input
                        type="text"
                        value={creatorName}
                        onChange={(e) => setCreatorName(e.target.value)}
                        placeholder="Rongon Kairy"
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="btn-save-custom-ollama-model"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-3 text-xs sm:text-sm font-bold text-white transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] cursor-pointer hover:scale-[1.01]"
                    >
                      {createdSuccess ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                          <span>Saved & Registered to "My LLM"!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" />
                          <span>Save & Register to Hub Catalog (My LLM)</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Live Modelfile & Terminal Script Preview */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                          <FileCode2 className="h-3.5 w-3.5 text-purple-400" />
                          Live Generated Modelfile
                        </span>
                        <button
                          onClick={() => copyToClipboard(generatedModelfile, 'modelfile-only')}
                          className="flex items-center gap-1 text-[11px] font-semibold text-purple-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedKey === 'modelfile-only' ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy Modelfile</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="font-mono text-xs text-purple-200 bg-zinc-900/70 p-3.5 rounded-xl border border-white/5 overflow-x-auto whitespace-pre select-all max-h-56 leading-relaxed">
                        {generatedModelfile}
                      </pre>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                          1-Click Shell Build Script
                        </span>
                        <button
                          onClick={() => copyToClipboard(generatedScript, 'build-script')}
                          className="flex items-center gap-1 text-[11px] font-semibold text-cyan-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {copiedKey === 'build-script' ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied Script!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy Full Script</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="font-mono text-[11px] text-zinc-300 bg-zinc-900/90 p-3 rounded-xl border border-white/5 overflow-x-auto whitespace-pre select-all leading-relaxed">
                        {generatedScript}
                      </pre>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: OLLAMA SETUP & CLI CHEAT SHEET                    */}
          {/* ======================================================== */}
          {activeTab === 'cheatsheet' && (
            <div className="space-y-6">
              
              {/* Install Ollama Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">🍎</span>
                    <h4 className="font-bold text-white text-sm">macOS Setup</h4>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">
                    Download official universal DMG installer for Apple Silicon (M1/M2/M3/M4) and Intel.
                  </p>
                  <a
                    href="https://ollama.com/download/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-semibold text-white transition-all"
                  >
                    <span>Download Ollama for Mac</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">🪟</span>
                    <h4 className="font-bold text-white text-sm">Windows Setup</h4>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">
                    Native Windows executable with NVIDIA CUDA and DirectML GPU acceleration.
                  </p>
                  <a
                    href="https://ollama.com/download/windows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-semibold text-white transition-all"
                  >
                    <span>Download Ollama for Windows</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">🐧</span>
                    <h4 className="font-bold text-white text-sm">Linux 1-Liner</h4>
                  </div>
                  <p className="text-xs text-zinc-400 mb-2">
                    Install in 1 shell command with automatic systemd daemon configuration:
                  </p>
                  <button
                    onClick={() => copyToClipboard('curl -fsSL https://ollama.com/install.sh | sh', 'linux-install')}
                    className="w-full text-left font-mono text-[11px] text-amber-300 bg-zinc-950 p-2 rounded-lg border border-white/5 flex items-center justify-between cursor-pointer"
                  >
                    <span className="truncate">curl -fsSL https://ollama.com/install.sh | sh</span>
                    <Copy className="h-3 w-3 shrink-0 ml-1" />
                  </button>
                </div>
              </div>

              {/* Common Commands Table */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-sky-400" />
                  <span>Essential Ollama CLI Commands</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {[
                    { cmd: 'ollama list', desc: 'List all locally downloaded models and their sizes' },
                    { cmd: 'ollama ps', desc: 'Show currently loaded active models and memory usage' },
                    { cmd: 'ollama run <model>', desc: 'Start an interactive terminal chat session' },
                    { cmd: 'ollama pull <model>', desc: 'Download model weights without launching chat' },
                    { cmd: 'ollama rm <model>', desc: 'Delete local model to reclaim disk space' },
                    { cmd: 'ollama cp <src> <dest>', desc: 'Duplicate or rename an existing model' },
                    { cmd: 'ollama show --modelfile <model>', desc: 'Inspect parameters, license, and system prompt' },
                    { cmd: 'ollama stop <model>', desc: 'Unload a model from GPU VRAM immediately' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div>
                        <code className="font-mono text-sky-300 font-bold block">{item.cmd}</code>
                        <span className="text-zinc-400 text-[11px] mt-0.5 block">{item.desc}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.cmd, `cheat-${i}`)}
                        className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/10 cursor-pointer shrink-0"
                        title="Copy command"
                      >
                        {copiedKey === `cheat-${i}` ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Network & CORS Config */}
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Server className="h-4 w-4 text-purple-400" />
                  <span>Configuring CORS for Web Apps & Network Access</span>
                </h4>
                <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                  To allow browser-based apps or web dashboards to connect to your local Ollama instance on <code className="text-sky-300 font-mono">http://localhost:11434</code>, launch Ollama with CORS origins enabled:
                </p>
                <div className="rounded-xl bg-zinc-950 p-3 font-mono text-xs text-purple-200 border border-white/5 flex items-center justify-between">
                  <span>OLLAMA_ORIGINS="*" OLLAMA_HOST="0.0.0.0" ollama serve</span>
                  <button
                    onClick={() => copyToClipboard('OLLAMA_ORIGINS="*" OLLAMA_HOST="0.0.0.0" ollama serve', 'cors-cmd')}
                    className="flex items-center gap-1 text-[11px] font-semibold text-purple-300 hover:text-white cursor-pointer ml-2"
                  >
                    {copiedKey === 'cors-cmd' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-zinc-950/80 px-6 py-4 shrink-0 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Official Ollama Library:</span>
            <a
              href="https://ollama.com/library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>ollama.com/library</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl bg-zinc-800 hover:bg-zinc-700 px-4 py-2 font-semibold text-white transition-colors cursor-pointer"
          >
            Done / Close
          </button>
        </div>

      </div>
    </div>
  );
};
