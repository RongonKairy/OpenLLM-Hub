import React, { useState } from 'react';
import { X, Plus, Sparkles, Terminal, Layers, Cpu, Code2, BrainCircuit, Rocket } from 'lucide-react';
import { LLMModel, ModelCategory } from '../types';

interface AddCustomModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddModel: (newModel: LLMModel) => void;
}

export const AddCustomModelModal: React.FC<AddCustomModelModalProps> = ({
  isOpen,
  onClose,
  onAddModel
}) => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [baseArchitecture, setBaseArchitecture] = useState('Meta Llama-3.1');
  const [parameterSize, setParameterSize] = useState('8B');
  const [paramNumber, setParamNumber] = useState(8.0);
  const [category, setCategory] = useState<ModelCategory>('bengali-indic');
  const [contextWindow, setContextWindow] = useState('128K');
  const [license, setLicense] = useState('Apache-2.0');
  const [description, setDescription] = useState('');
  const [ollamaCommand, setOllamaCommand] = useState('');
  const [huggingFaceRepo, setHuggingFaceRepo] = useState('');
  const [creator, setCreator] = useState('Rongon Kairy');
  const [minVramGb, setMinVramGb] = useState(5.5);
  const [quantSize, setQuantSize] = useState('4.8 GB');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const modelId = `custom-${slug}-${Date.now().toString(36)}`;

    const newModel: LLMModel = {
      id: modelId,
      name: name.trim(),
      slug: slug || modelId,
      tagline: tagline.trim() || 'Custom fine-tuned large language model',
      taglineBn: 'কাস্টম ফাইন-টিউনড লার্জ ল্যাঙ্গুয়েজ মডেল',
      description: description.trim() || 'A fine-tuned specialized model customized for target domains and inference performance.',
      descriptionBn: 'বিশেষায়িত উদ্দেশ্যে প্রশিক্ষিত নিজস্ব মডেল।',
      creator: creator.trim() || 'My AI Workspace',
      avatarIcon: category === 'coding' ? 'Code2' : category === 'reasoning' ? 'BrainCircuit' : 'Sparkles',
      baseArchitecture: baseArchitecture.trim() || 'Custom Backbone',
      parameterSize: parameterSize.trim() || '8B',
      paramNumber: Number(paramNumber) || 8,
      category: category,
      modelScope: 'my_llm',
      contextWindow: contextWindow.trim() || '128K',
      license: license.trim() || 'Apache-2.0',
      releaseDate: new Date().toISOString().split('T')[0],
      downloadsCount: 120,
      likesCount: 24,
      rating: 5.0,
      isFeatured: false,
      isTrending: false,
      isNew: true,
      benchmarks: {
        mmlu: 75.0,
        codingHumanEval: 72.0,
        mathGsm8k: 78.0,
        banglaNlpScore: category === 'bengali-indic' ? 88.0 : undefined,
        reasoningArc: 80.0,
        tokensPerSec: 55
      },
      minVramGb: Number(minVramGb) || 6,
      recommendedVramGb: (Number(minVramGb) || 6) + 4,
      minCpuRamGb: 16,
      quantizations: [
        {
          format: 'GGUF Q4_K_M',
          size: quantSize.trim() || '4.8 GB',
          bytes: 4800000000,
          filename: `${name.replace(/\s+/g, '-')}-Q4_K_M.gguf`,
          downloadUrl: '#download-custom',
          recommendedVram: `${minVramGb} GB VRAM`,
          recommendedFor: 'Balanced speed and precision on local hardware',
          isPopular: true
        }
      ],
      ollamaCommand: ollamaCommand.trim() || `ollama run ${slug || 'my-custom-model'}`,
      huggingFaceRepo: huggingFaceRepo.trim() || `my-user/${slug || 'custom-model'}`,
      pythonSnippet: `from transformers import AutoTokenizer, AutoModelForCausalLM\nimport torch\n\nmodel_id = "${huggingFaceRepo || 'my-user/' + slug}"\ntokenizer = AutoTokenizer.from_pretrained(model_id)\nmodel = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.bfloat16, device_map="auto")`,
      tags: ['My LLM', 'Custom Fine-Tune', parameterSize, category],
      features: [
        'Custom dataset fine-tuned and quantized for local inference',
        'Direct compatibility with Ollama, LM Studio, and llama.cpp'
      ],
      featuresBn: ['কাস্টম ফাইন-টিউন মডেল', 'লোকাল অফলাইন সাপোর্ট'],
      trainingTokens: 'Domain Specific Dataset',
      samplePrompts: []
    };

    onAddModel(newModel);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Add to "My LLM" (Custom Model)
              </h3>
              <p className="text-xs text-zinc-400">
                Register your own fine-tuned LLM or custom GGUF checkpoint in your local catalog
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-zinc-800 p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Model Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. MyBengali-Llama-8B or CodeMaster-14B"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Creator / Team Name
              </label>
              <input
                type="text"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                placeholder="e.g. Rongon AI Lab or Personal"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ModelCategory)}
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 focus:border-purple-500 focus:outline-none"
              >
                <option value="bengali-indic">Bengali & Indic NLP</option>
                <option value="coding">Coding & Architecture</option>
                <option value="reasoning">Reasoning & Math</option>
                <option value="edge-lightweight">Edge & Mobile (≤3B)</option>
                <option value="vision">Vision & Multimodal</option>
                <option value="general-chat">General & Chat</option>
                <option value="medical-specialized">Medical & Specialized</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Base Architecture
              </label>
              <input
                type="text"
                value={baseArchitecture}
                onChange={(e) => setBaseArchitecture(e.target.value)}
                placeholder="e.g. Meta Llama-3.1, Qwen-2.5, Gemma-2"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Parameter Size
              </label>
              <input
                type="text"
                value={parameterSize}
                onChange={(e) => {
                  setParameterSize(e.target.value);
                  const parsed = parseFloat(e.target.value);
                  if (!isNaN(parsed)) setParamNumber(parsed);
                }}
                placeholder="e.g. 8B, 14B, 1.5B"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 mb-1">
              Tagline / Short Summary
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. High precision Bengali instruction fine-tune with 128k context"
              className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 mb-1">
              Detailed Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what datasets were used, strengths, or intended use cases..."
              className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                <Terminal className="h-3 w-3 text-cyan-400" /> Ollama Run Command
              </label>
              <input
                type="text"
                value={ollamaCommand}
                onChange={(e) => setOllamaCommand(e.target.value)}
                placeholder="e.g. ollama run my-bengali-llama"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 font-mono text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Hugging Face Repo / ID
              </label>
              <input
                type="text"
                value={huggingFaceRepo}
                onChange={(e) => setHuggingFaceRepo(e.target.value)}
                placeholder="e.g. rongon/bangla-llama-8b"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 font-mono text-zinc-100 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Min VRAM (GB)
              </label>
              <input
                type="number"
                step="0.5"
                value={minVramGb}
                onChange={(e) => setMinVramGb(parseFloat(e.target.value) || 4)}
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                GGUF Q4 Size
              </label>
              <input
                type="text"
                value={quantSize}
                onChange={(e) => setQuantSize(e.target.value)}
                placeholder="e.g. 4.9 GB"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-zinc-300 mb-1">
                Context Window
              </label>
              <input
                type="text"
                value={contextWindow}
                onChange={(e) => setContextWindow(e.target.value)}
                placeholder="e.g. 128K or 32K"
                className="w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-zinc-100 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white hover:bg-purple-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)] cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Save to "My LLM"</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
