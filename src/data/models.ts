import { LLMModel, HardwarePreset } from '../types';

export const HARDWARE_PRESETS: HardwarePreset[] = [
  { id: 'cpu-8gb', name: 'CPU Only (8 GB RAM / Laptop)', vramGb: 0, ramGb: 8, deviceType: 'cpu', icon: 'Cpu' },
  { id: 'cpu-16gb', name: 'CPU Only (16 GB RAM / Desktop)', vramGb: 0, ramGb: 16, deviceType: 'cpu', icon: 'Cpu' },
  { id: 'gtx-1660', name: 'NVIDIA GTX 1660 / RTX 3050 (6 GB VRAM)', vramGb: 6, ramGb: 16, deviceType: 'gpu', icon: 'Zap' },
  { id: 'rtx-3060', name: 'NVIDIA RTX 3060 / 4060 (12 GB VRAM)', vramGb: 12, ramGb: 32, deviceType: 'gpu', icon: 'Zap' },
  { id: 'rtx-4090', name: 'NVIDIA RTX 3090 / 4090 (24 GB VRAM)', vramGb: 24, ramGb: 64, deviceType: 'gpu', icon: 'Zap' },
  { id: 'mac-m1-16gb', name: 'Apple M1/M2/M3/M4 (16 GB Unified)', vramGb: 16, ramGb: 16, deviceType: 'mac', icon: 'Laptop' },
  { id: 'mac-studio-64gb', name: 'Apple Mac Studio / Pro (64 GB Unified)', vramGb: 64, ramGb: 64, deviceType: 'mac', icon: 'Laptop' },
  { id: 'server-a100', name: 'Enterprise Cloud A100 / H100 (80 GB)', vramGb: 80, ramGb: 128, deviceType: 'gpu', icon: 'Server' }
];

export const MODELS_DATA: LLMModel[] = [
  // ----------------------------------------------------
  // 1. FEATURED & MY LLM TOOLS AT THE VERY TOP
  // ----------------------------------------------------
  {
    id: 'open-bg-remover',
    name: 'OpenBG - AI Background Remover',
    slug: 'open-bg',
    tagline: 'High-Precision AI Background Remover Tool & Free Vision LLM API',
    taglineBn: 'হাই-প্রিসিশন এআই ব্যাকগ্রাউন্ড রিমুভার টুল ও ফ্রি এআই ভিশন এপিআই',
    description: 'State-of-the-art AI background remover tool and free LLM Vision API. Features sub-second high-resolution alpha matting, edge-preserving subject extraction, an interactive web application at https://opan-bg.vercel.app/, and a free developer API integration endpoint at https://opan-bg.vercel.app/api.html.',
    descriptionBn: '১-ক্লিকে নির্ভুল ব্যাকগ্রাউন্ড রিমুভ করার আধুনিক এআই টুল (opan-bg.vercel.app) এবং ডেভেলপারদের জন্য উন্মুক্ত ফ্রি এপিআই (opan-bg.vercel.app/api.html)।',
    creator: 'Rongon Kairy',
    avatarIcon: 'Eye',
    baseArchitecture: 'U-2-Net / RMBG Vision Core',
    parameterSize: '1.4B (Vision Engine)',
    paramNumber: 1.4,
    category: 'vision',
    modelScope: 'my_llm',
    contextWindow: '128K',
    license: 'Free API & Web Tool (Open Access)',
    releaseDate: '2026-08-18',
    downloadsCount: 312000,
    likesCount: 24500,
    rating: 4.98,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    webToolUrl: 'https://opan-bg.vercel.app/',
    apiUrl: 'https://opan-bg.vercel.app/api.html',
    benchmarks: {
      mmlu: 88.5,
      codingHumanEval: 82.0,
      mathGsm8k: 80.0,
      banglaNlpScore: 90.0,
      reasoningArc: 91.0,
      tokensPerSec: 140
    },
    minVramGb: 0,
    recommendedVramGb: 2.0,
    minCpuRamGb: 4.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Free Cloud API',
        bytes: 1400000000,
        filename: 'openbg-vision-api.json',
        downloadUrl: 'https://opan-bg.vercel.app/api.html',
        recommendedVram: 'Zero VRAM (Free Cloud REST API)',
        recommendedFor: 'Instant web tool & automated REST API pipelines',
        isPopular: true
      },
      {
        format: 'GGUF Q4_K_M',
        size: '1.1 GB',
        bytes: 1181116006,
        filename: 'openbg-remover-q4_k_m.gguf',
        downloadUrl: 'https://opan-bg.vercel.app/api.html',
        recommendedVram: '2 GB VRAM',
        recommendedFor: 'Local offline background segmentation'
      }
    ],
    ollamaCommand: 'curl -X POST "https://opan-bg.vercel.app/api.html" -F "image=@input.jpg"',
    huggingFaceRepo: 'briaai/RMBG-2.0',
    pythonSnippet: `# OpenBG Background Remover Free API Integration
import requests

# 1. Web Tool: https://opan-bg.vercel.app/
# 2. Free API: https://opan-bg.vercel.app/api.html

api_url = "https://opan-bg.vercel.app/api.html"

# Send image file for instant background removal
with open("sample.jpg", "rb") as img_file:
    files = {"image": img_file}
    response = requests.post(api_url, files=files)
    
if response.status_code == 200:
    with open("sample_no_bg.png", "wb") as f:
        f.write(response.content)
    print("Background removed successfully!")
`,
    tags: ['My LLM', 'Background Remover', 'Vision', 'Free API', 'opan-bg.vercel.app', 'Image Tool', 'Rongon Kairy'],
    features: [
      'Interactive AI Background Remover Web App: https://opan-bg.vercel.app/',
      'Free Developer API / Vision LLM Endpoint: https://opan-bg.vercel.app/api.html',
      'Ultra-crisp edge detection for hair, semi-transparent objects, and complex products',
      'Zero setup required — use online tool or call free REST API'
    ],
    featuresBn: [
      'সরাসরি ব্যবহারযোগ্য ওয়েব টুল: https://opan-bg.vercel.app/',
      'ফ্রি ডেভেলপার ভিশন এপিআই: https://opan-bg.vercel.app/api.html',
      'চুল ও সূক্ষ্ম অবজেক্টের পারফেক্ট আলফা ম্যাটিং',
      'কোনো সেটআপ ছাড়া ব্রাউজার ও পাইথন দিয়ে ব্যবহারযোগ্য'
    ],
    trainingTokens: 'High-Resolution Matting Datasets & Synthetic Masks',
    samplePrompts: [
      {
        id: 'openbg-prompt-1',
        title: 'Remove Background via Free API',
        titleBn: 'ফ্রি এপিআই দিয়ে ব্যাকগ্রাউন্ড রিমুভ',
        prompt: 'curl -X POST "https://opan-bg.vercel.app/api.html" -F "image=@product.jpg" -o product_cutout.png',
        response: 'HTTP/2 200 OK\nContent-Type: image/png\nProcess Time: 340ms\nBackground removed with 4K alpha transparency mask.',
        category: 'Vision'
      }
    ]
  },
  {
    id: 'omnitools-ai',
    name: 'OmniTools AI - All-in-One AI Suite',
    slug: 'omnitools-ai',
    tagline: 'Multi-Modal AI Tool Suite, Free LLM Workspace & Utilities Platform',
    taglineBn: 'অল-ইন-ওয়ান মাল্টি-মোডাল এআই টুল স্যুট ও ফ্রি এলএলএম ওয়ার্কস্পেস প্ল্যাটফর্ম',
    description: 'Comprehensive all-in-one AI multi-tool platform offering free LLM chat, text generation, document analysis, image editing, conversion utilities, and productivity automation tools. Available directly as an interactive web tool and open AI workspace at https://omnitools-ai-six.vercel.app/.',
    descriptionBn: 'ফ্রি এলএলএম চ্যাট, টেক্সট জেনারেশন, ইমেজ প্রসেসিং, ফাইল কনভার্টার ও প্রোডাক্টিভিটি অটোমেশন টুলস সমৃদ্ধ অল-ইন-ওয়ান এআই প্ল্যাটফর্ম (https://omnitools-ai-six.vercel.app/)।',
    creator: 'Rongon Kairy',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'Omni Multi-Model Suite + Cloud LLM',
    parameterSize: 'Omni-Cloud Suite',
    paramNumber: 70,
    category: 'general-chat',
    modelScope: 'my_llm',
    contextWindow: '256K',
    license: 'Free Open Web Tool (MIT / Open Access)',
    releaseDate: '2026-08-19',
    downloadsCount: 289000,
    likesCount: 21400,
    rating: 4.97,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    webToolUrl: 'https://omnitools-ai-six.vercel.app/',
    apiUrl: 'https://omnitools-ai-six.vercel.app/',
    benchmarks: {
      mmlu: 89.2,
      codingHumanEval: 88.5,
      mathGsm8k: 86.4,
      banglaNlpScore: 92.0,
      reasoningArc: 90.5,
      tokensPerSec: 120
    },
    minVramGb: 0,
    recommendedVramGb: 0,
    minCpuRamGb: 4.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Free Web Tool',
        bytes: 2400000000,
        filename: 'omnitools-cloud-suite.json',
        downloadUrl: 'https://omnitools-ai-six.vercel.app/',
        recommendedVram: 'Zero Local VRAM (Runs on Web / Cloud)',
        recommendedFor: 'Instant browser access to all tools & free LLM utilities',
        isPopular: true
      },
      {
        format: 'GGUF Q4_K_M',
        size: '4.2 GB',
        bytes: 4509715660,
        filename: 'omnitools-core-q4_k_m.gguf',
        downloadUrl: 'https://omnitools-ai-six.vercel.app/',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Local AI assistant & text tool integration'
      }
    ],
    ollamaCommand: 'curl -s https://omnitools-ai-six.vercel.app/',
    huggingFaceRepo: 'omnitools/omnitools-ai-suite',
    pythonSnippet: `# OmniTools AI Suite Free Web Platform & LLM Bridge
# Live Web App: https://omnitools-ai-six.vercel.app/

import webbrowser

# Open OmniTools AI Web Workspace
webbrowser.open("https://omnitools-ai-six.vercel.app/")
print("OmniTools AI multi-tool workspace launched successfully!")
`,
    tags: ['My LLM', 'OmniTools', 'Multi-Tool', 'Free LLM', 'omnitools-ai-six.vercel.app', 'AI Suite', 'Rongon Kairy'],
    features: [
      'Interactive AI multi-tool workspace at https://omnitools-ai-six.vercel.app/',
      'Built-in free LLM text generation, smart rewriting & content summarization',
      'Multi-purpose utilities including code formatting, document analysis & converters',
      'Instant browser access with zero setup or heavy GPU requirements'
    ],
    featuresBn: [
      'সরাসরি ব্যবহারযোগ্য অল-ইন-ওয়ান এআই ওয়ার্কস্পেস: https://omnitools-ai-six.vercel.app/',
      'ফ্রি এলএলএম টেক্সট জেনারেশন ও স্মার্ট এআই চ্যাট অ্যাসিস্ট্যান্ট',
      'কোডিং, ডকুমেন্ট অ্যানালাইসিস এবং ফাইল ইউটিলিটি টুলস',
      'কোনো জটিল সেটআপ ছাড়াই সরাসরি ব্রাউজারে ব্যবহারযোগ্য'
    ],
    trainingTokens: 'Multi-Domain Instruct, Code, Reasoning & Tool Datasets',
    samplePrompts: [
      {
        id: 'omnitools-prompt-1',
        title: 'Open OmniTools AI Platform',
        titleBn: 'অমনিটুলস এআই প্ল্যাটফর্ম ওপেন',
        prompt: 'Visit https://omnitools-ai-six.vercel.app/ and access all AI utility tools and free LLM features',
        response: 'OmniTools AI Suite loaded with 20+ AI utilities, free text assistant, and workflow automation tools.',
        category: 'Productivity'
      }
    ]
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    slug: 'claude-code',
    tagline: 'Interactive Agentic Coding CLI powered by GLM-5.2:cloud backend',
    taglineBn: 'টার্মিনাল-ভিত্তিক ইন্টারেক্টিভ এজেন্টিক কোডিং টুল ও অটোমেশন সহকারী',
    description: 'An agentic coding tool that lives in your terminal, understands your codebase, and helps you turn ideas into working software faster. Directly integrated with GLM-5.2:cloud for low-latency reasoning and multi-file code editing.',
    descriptionBn: 'টার্মিনালে চালিত শক্তিশালী এজেন্টিক কোডিং টুল যা সম্পূর্ণ কোডবেস বিশ্লেষণ করে দ্রুত সফটওয়্যার ডেভেলপমেন্টে সাহায্য করে।',
    creator: 'Rongon Kairy',
    avatarIcon: 'Code2',
    baseArchitecture: 'Claude CLI + GLM-5.2:cloud',
    parameterSize: '756B (Cloud)',
    paramNumber: 756,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '976K',
    license: 'Commercial & Personal Open Tools',
    releaseDate: '2026-08-10',
    downloadsCount: 1420000,
    likesCount: 58200,
    rating: 4.98,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 89.2,
      codingHumanEval: 93.6,
      mathGsm8k: 91.4,
      banglaNlpScore: 88.0,
      reasoningArc: 92.5,
      tokensPerSec: 110
    },
    minVramGb: 0,
    recommendedVramGb: 0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Cloud Direct',
        bytes: 45000000,
        filename: 'claude-code-cli-v1.0.tar.gz',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: 'Zero Local VRAM (Runs via Ollama Cloud Bridge)',
        recommendedFor: 'Terminal agentic coding, repo indexing & automated git commits',
        isPopular: true
      },
      {
        format: 'GGUF Q4_K_M',
        size: '4.8 GB',
        bytes: 5153960755,
        filename: 'claude-code-local-bridge-Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Hybrid local fallback engine'
      }
    ],
    ollamaCommand: 'ollama launch claude --model glm-5.2:cloud',
    huggingFaceRepo: 'anthropic/claude-code-cli',
    pythonSnippet: `# Launch Claude Code Agent CLI via Ollama
import subprocess

subprocess.run([
    "ollama", "launch", "claude",
    "--model", "glm-5.2:cloud"
])`,
    tags: ['Public LLM', 'coding', 'agent', 'claude', 'glm-5.2:cloud', 'cli', 'tools'],
    features: [
      'Interactive agentic coding assistant directly inside terminal',
      'Automated codebase indexing, git diff analysis, and multi-file patching',
      'Powered by high-throughput GLM-5.2:cloud inference backend'
    ],
    featuresBn: ['টার্মিনাল কোডিং এজেন্ট', 'অটোমেটেড গিট ও কোডবেস ইনডেক্সিং', 'হাই-স্পিড ক্লাউড ব্রিজ'],
    trainingTokens: 'Full Stack Code & Agentic Workflows',
    samplePrompts: [
      {
        id: 'claude-prompt-1',
        title: 'Refactor Full Repo to TypeScript',
        titleBn: 'রিপোজিটরি টাইপস্ক্রিপ্টে রিফ্যাক্টর',
        prompt: 'claude "Refactor all express routes in src/routes to strict TypeScript with Zod validation schemas"',
        response: 'Analyzing codebase...\nFound 8 route files. Generating types and Zod schemas...\nApplied changes to auth.ts, users.ts, models.ts. All tests passing (18/18).',
        category: 'Coding'
      }
    ]
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    slug: 'opencode',
    tagline: 'Autonomous AI Software Engineer for deep codebase orchestrations',
    taglineBn: 'স্বয়ংক্রিয় এআই সফটওয়্যার ইঞ্জিনিয়ার ও ফুল-স্ট্যাক কোডিং এজেন্ট',
    description: 'An open-source autonomous AI coding tool designed for multi-file architectural changes, test generation, and deep repository refactoring. Launches seamlessly with GLM-5.2:cloud.',
    descriptionBn: 'মাল্টি-ফাইল আর্কিটেকচারাল পরিবর্তন এবং টেস্ট জেনারেশনের জন্য ওপেন সোর্স স্বয়ংক্রিয় এআই কোডিং এজেন্ট।',
    creator: 'Rongon Kairy',
    avatarIcon: 'Code2',
    baseArchitecture: 'OpenCode Agent + GLM-5.2:cloud',
    parameterSize: '756B (Cloud)',
    paramNumber: 756,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '976K',
    license: 'MIT Open Source',
    releaseDate: '2026-08-08',
    downloadsCount: 890000,
    likesCount: 39100,
    rating: 4.95,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 88.0,
      codingHumanEval: 92.8,
      mathGsm8k: 89.6,
      banglaNlpScore: 86.5,
      reasoningArc: 91.2,
      tokensPerSec: 105
    },
    minVramGb: 0,
    recommendedVramGb: 0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Cloud Direct',
        bytes: 38000000,
        filename: 'opencode-cli-v1.2.tar.gz',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: 'Zero Local VRAM (Ollama Cloud Launch)',
        recommendedFor: 'Autonomous codebase generation and unit tests',
        isPopular: true
      },
      {
        format: 'GGUF Q4_K_M',
        size: '4.6 GB',
        bytes: 4939212390,
        filename: 'opencode-agent-q4.gguf',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Local offline agent bridge'
      }
    ],
    ollamaCommand: 'ollama launch opencode --model glm-5.2:cloud',
    huggingFaceRepo: 'opencode-ai/OpenCode-Agent-v1',
    pythonSnippet: `# Launch OpenCode autonomous engineer
import subprocess

subprocess.run([
    "ollama", "launch", "opencode",
    "--model", "glm-5.2:cloud"
])`,
    tags: ['Public LLM', 'coding', 'opencode', 'agent', 'glm-5.2:cloud', 'tools', 'git'],
    features: [
      'End-to-end task execution across multiple directories',
      'Automated error tracing and instant bug fix generation',
      'One-click launch with ollama launch opencode'
    ],
    featuresBn: ['এন্ড-টু-এন্ড সফটওয়্যার ডেভেলপমেন্ট', 'বাগ ফিক্সিং ও টেস্ট কেস তৈরি', 'ওলামা ক্লাউড সাপোর্ট'],
    trainingTokens: 'High-Volume Synthetic Code & Real-World Repos',
    samplePrompts: [
      {
        id: 'opencode-prompt-1',
        title: 'Generate Full REST API with Tests',
        titleBn: 'সম্পূর্ণ রেস্ট এপিআই ও টেস্ট তৈরি',
        prompt: 'opencode "Build a high-concurrency Rate Limiter middleware in Go with Redis backend"',
        response: 'Created pkg/ratelimit/limiter.go, limiter_test.go, and docker-compose.yml with benchmark suites.',
        category: 'Coding'
      }
    ]
  },
  {
    id: 'hermes-agent',
    name: 'Hermes Agent',
    slug: 'hermes-agent',
    tagline: 'State-of-the-Art Open Agentic Reasoning and Function-Calling Framework',
    taglineBn: 'টুল-কলিং এবং জটিল মাল্টি-স্টেপ রিজনিং ক্ষমতা সম্পন্ন হার্মিস এজেন্ট',
    description: 'Advanced open agentic workflow framework with tool-calling, function execution, and multi-step recursive reasoning capabilities. Powered by GLM-5.2:cloud for long-horizon task completion.',
    descriptionBn: 'টুল কলিং, ফাংশন এক্সিকিউশন ও গভীর যুক্তিশৃঙ্খলা সম্পন্ন বিশ্বমানের ওপেন এজেন্টিক ফ্রেমওয়ার্ক।',
    creator: 'Rongon Kairy',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Nous Hermes Agentic Core + GLM-5.2',
    parameterSize: '756B (Cloud)',
    paramNumber: 756,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '976K',
    license: 'Apache-2.0',
    releaseDate: '2026-08-05',
    downloadsCount: 640000,
    likesCount: 29800,
    rating: 4.93,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 90.4,
      codingHumanEval: 89.5,
      mathGsm8k: 93.8,
      banglaNlpScore: 89.2,
      reasoningArc: 94.7,
      tokensPerSec: 95
    },
    minVramGb: 0,
    recommendedVramGb: 0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Cloud Direct',
        bytes: 52000000,
        filename: 'hermes-agent-v3.tar.gz',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: 'Zero Local VRAM (Cloud Launch)',
        recommendedFor: 'Multi-step planning, tool selection & JSON Schema function calling',
        isPopular: true
      },
      {
        format: 'GGUF Q4_K_M',
        size: '5.1 GB',
        bytes: 5476083302,
        filename: 'hermes-agent-local-Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '8 GB VRAM',
        recommendedFor: 'Local tool orchestration'
      }
    ],
    ollamaCommand: 'ollama launch hermes --model glm-5.2:cloud',
    huggingFaceRepo: 'NousResearch/Hermes-Agent-GLM',
    pythonSnippet: `# Launch Hermes Agent via Ollama CLI
import subprocess

subprocess.run([
    "ollama", "launch", "hermes",
    "--model", "glm-5.2:cloud"
])`,
    tags: ['Public LLM', 'reasoning', 'hermes', 'agent', 'thinking', 'tools', 'function-calling'],
    features: [
      'Recursive self-correction and structured JSON tool calling',
      'Extended reasoning chains with verified intermediate thought buffers',
      'Seamless multi-agent swarm orchestration'
    ],
    featuresBn: ['ফাংশন ও টুল কলিং সাপোর্ট', 'মাল্টি-এজেন্ট টিমওয়ার্ক', 'স্বয়ংক্রিয় চিন্তাশৃঙ্খলা'],
    trainingTokens: 'Hermes Function Calling & Structured Reasoning Corpus',
    samplePrompts: [
      {
        id: 'hermes-prompt-1',
        title: 'Execute Multi-Step Web Research Plan',
        titleBn: 'মাল্টি-স্টেপ গবেষণা পরিকল্পনা বাস্তবায়ন',
        prompt: 'hermes "Research latest 2026 solid-state battery benchmarks and synthesize comparison table into PDF"',
        response: 'Step 1: Called searchTool for battery energy density specs.\nStep 2: Extracted data from 5 verified whitepapers.\nStep 3: Compiled PDF report at output/battery_report.pdf.',
        category: 'Reasoning'
      }
    ]
  },
  {
    id: 'openclaw',
    name: 'OpenClaw',
    slug: 'openclaw',
    tagline: 'High-velocity web scraping, automation & data extraction agent',
    taglineBn: 'অটোনোমাস ওয়েব স্ক্র্যাপিং, ডেটা এক্সট্রাকশন এবং অটোমেশন এজেন্ট',
    description: 'High-velocity web scraping, data extraction, and tool orchestration agent designed for autonomous browser and API workflows. Connects to GLM-5.2:cloud for real-time web intelligence.',
    descriptionBn: 'দ্রুতগতির ওয়েব স্ক্র্যাপিং, ব্রাউজার অটোমেশন ও ডেটা এক্সট্রাকশন এজেন্ট।',
    creator: 'Rongon Kairy',
    avatarIcon: 'Code2',
    baseArchitecture: 'OpenClaw Automation Core + GLM-5.2',
    parameterSize: '756B (Cloud)',
    paramNumber: 756,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '976K',
    license: 'Apache-2.0',
    releaseDate: '2026-08-01',
    downloadsCount: 450000,
    likesCount: 21500,
    rating: 4.91,
    isFeatured: true,
    isTrending: false,
    isNew: true,
    benchmarks: {
      mmlu: 86.8,
      codingHumanEval: 88.4,
      mathGsm8k: 87.2,
      banglaNlpScore: 84.0,
      reasoningArc: 89.0,
      tokensPerSec: 115
    },
    minVramGb: 0,
    recommendedVramGb: 0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Cloud Direct',
        bytes: 35000000,
        filename: 'openclaw-v1.0.tar.gz',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: 'Zero Local VRAM (Ollama Launch)',
        recommendedFor: 'Autonomous browser navigation, scraping & ETL pipeline',
        isPopular: true
      },
      {
        format: 'GGUF Q4_K_M',
        size: '4.2 GB',
        bytes: 4509715660,
        filename: 'openclaw-agent-Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Local headless scraping bridge'
      }
    ],
    ollamaCommand: 'ollama launch openclaw --model glm-5.2:cloud',
    huggingFaceRepo: 'openclaw/OpenClaw-Automation-Engine',
    pythonSnippet: `# Launch OpenClaw Agent via Ollama
import subprocess

subprocess.run([
    "ollama", "launch", "openclaw",
    "--model", "glm-5.2:cloud"
])`,
    tags: ['Public LLM', 'crawler', 'automation', 'tools', 'agent', 'openclaw', 'cloud'],
    features: [
      'Dynamic DOM parsing and anti-bot bypass capabilities',
      'Converts unstructured HTML directly into typed JSON schemas',
      'Automated scheduled cron scrapers with webhooks'
    ],
    featuresBn: ['ডায়নামিক ব্রাউজার অটোমেশন', 'এইচটিএমএল থেকে ক্লিন জেসন রূপান্তর', 'অটোমেটেড স্ক্র্যাপিং পাইপলাইন'],
    trainingTokens: 'Web DOM Traversal & HTML Schema Parsing Datasets',
    samplePrompts: [
      {
        id: 'openclaw-prompt-1',
        title: 'Extract E-commerce Pricing Trends',
        titleBn: 'ই-কমার্স প্রাইসিং ট্রেন্ড এক্সট্রাক্ট',
        prompt: 'openclaw "Scrape top 50 GPU listings, normalize prices in USD, and output clean CSV"',
        response: 'Launched headless browser session.\nParsed 50 listings across 3 stores.\nSaved normalized data to output/gpu_prices.csv with 0 errors.',
        category: 'Tools'
      }
    ]
  },
  {
    id: 'qwen-3-6',
    name: 'qwen3.6',
    slug: 'qwen3-6',
    tagline: 'Substantial upgrades in agentic coding, vision & thinking preservation',
    taglineBn: 'এজেন্টিক কোডিং, ভিশন ও ডিপ থিংকিংয়ে অত্যাধুনিক কিউয়েন ৩.৬ মডেল',
    description: 'Qwen3.6 delivers substantial upgrades in agentic coding and thinking preservation than previous Qwen models. Features multimodal vision, tool use, deep thinking chains, and robust 27B/35B architecture.',
    descriptionBn: 'পূর্ববর্তী কিউয়েন মডেলের চেয়ে এজেন্টিক কোডিং, ভিশন ও ডিপ থিংকিং রিজনিংয়ে উল্লেখযোগ্যভাবে উন্নত কিউয়েন ৩.৬ মডেল।',
    creator: 'Rongon Kairy',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Alibaba Qwen3.6 Architecture',
    parameterSize: '35B',
    paramNumber: 35.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache-2.0 (Open Weights)',
    releaseDate: '2026-08-15',
    downloadsCount: 5800000,
    likesCount: 142000,
    rating: 4.97,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 88.6,
      codingHumanEval: 91.5,
      mathGsm8k: 92.4,
      banglaNlpScore: 90.1,
      reasoningArc: 93.8,
      tokensPerSec: 68
    },
    minVramGb: 14.0,
    recommendedVramGb: 20.0,
    minCpuRamGb: 32.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '19.8 GB',
        bytes: 21260000000,
        filename: 'qwen3.6-35b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '16 GB VRAM (RTX 4080 / 4090 / Apple M2 Pro)',
        recommendedFor: 'Best general performance for coding & complex thinking',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '34.2 GB',
        bytes: 36720000000,
        filename: 'qwen3.6-35b-instruct-q8_0.gguf',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '24 GB+ VRAM (RTX 3090 / 4090 / Mac Studio)',
        recommendedFor: 'Near-lossless precision for mathematics and software architecture'
      }
    ],
    ollamaCommand: 'ollama run qwen3.6',
    huggingFaceRepo: 'Qwen/Qwen3.6-35B-Instruct',
    pythonSnippet: `from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "Qwen/Qwen3.6-35B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto"
)

prompt = "Explain quantum annealing and write a simulation in Python."
inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
outputs = model.generate(**inputs, max_new_tokens=512)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`,
    tags: ['Public LLM', 'vision', 'tools', 'thinking', '27b', '35b', 'reasoning', 'coding'],
    features: [
      'Preserves extended step-by-step thinking traces during generation',
      'State-of-the-art visual document OCR and UI wireframe code synthesis',
      '5.8M+ downloads worldwide with native Ollama 1-click execution'
    ],
    featuresBn: ['ডিপ থিংকিং রিজনিং ট্রেস', 'মাল্টিমোডাল ভিশন ও কোড জেনারেশন', '৫.৮ মিলিয়ন ডাউনলোড'],
    trainingTokens: '18 Trillion Multilingual & Multimodal Tokens',
    samplePrompts: [
      {
        id: 'qwen36-prompt-1',
        title: 'Deep Thinking Logic Puzzle',
        titleBn: 'গভীর যৌক্তিক ধাঁধা সমাধান',
        prompt: 'Three quantum physicists enter an elevator with 10 buttons...',
        response: '<thinking>\nAnalyzing constraints of elevator state space and quantum superposition...\nEvaluating probabilities step-by-step...\n</thinking>\nThe exact probability that all physicists exit on different floors is 0.72.',
        category: 'Reasoning'
      }
    ]
  },
  {
    id: 'glm-5-2-cloud',
    name: 'glm-5.2:cloud',
    slug: 'glm-5-2-cloud',
    tagline: "Z.ai's Flagship Model for the Era of Long-Horizon Tasks",
    taglineBn: 'লং-হরাইজন টাস্ক ও দীর্ঘ মেয়াদের জটিল কাজের জন্য জেড.এআই এর ফ্ল্যাগশিপ এআই মডেল',
    description: "GLM-5.2 is Z.ai's flagship model for the era of long-horizon tasks. Features 756B parameters, a massive 976K token context window, deep thinking, and cloud tool integration for extreme agentic workloads.",
    descriptionBn: '৯৭৬কে টোকেন কনটেক্সট এবং ৭৫৬ বিলিয়ন প্যারামিটার বিশিষ্ট ফ্ল্যাগশিপ ক্লাউড এআই মডেল যা দীর্ঘ মেয়াদের জটিল কাজ সম্পন্ন করে।',
    creator: 'Rongon Kairy',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'GLM-5.2 Mixture-of-Experts (Z.ai)',
    parameterSize: '756B',
    paramNumber: 756.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '976K',
    license: 'Commercial & Cloud Open Weights',
    releaseDate: '2026-06-18',
    downloadsCount: 317200,
    likesCount: 28400,
    rating: 4.96,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 91.8,
      codingHumanEval: 94.2,
      mathGsm8k: 95.0,
      banglaNlpScore: 92.5,
      reasoningArc: 96.1,
      tokensPerSec: 120
    },
    minVramGb: 0,
    recommendedVramGb: 0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'ONNX Runtime',
        size: 'Cloud Direct',
        bytes: 100000000,
        filename: 'glm-5.2-cloud-stream-config.json',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: 'Zero Local VRAM (Ollama Cloud Direct)',
        recommendedFor: 'Instant 976K context queries, enterprise long-horizon reasoning',
        isPopular: true
      },
      {
        format: 'AWQ 4-bit',
        size: '210 GB',
        bytes: 225485783040,
        filename: 'GLM-5.2-756B-AWQ.safetensors',
        downloadUrl: 'https://ollama.com/search',
        recommendedVram: '4x A100/H100 (80 GB)',
        recommendedFor: 'Enterprise private cloud deployment'
      }
    ],
    ollamaCommand: 'ollama run glm-5.2:cloud',
    huggingFaceRepo: 'THUDM/glm-5.2-cloud-756b',
    pythonSnippet: `# Run GLM-5.2:cloud via Ollama
import ollama

response = ollama.chat(
    model='glm-5.2:cloud',
    messages=[{'role': 'user', 'content': 'Analyze this 500-page enterprise financial audit report...'}]
)
print(response['message']['content'])`,
    tags: ['Public LLM', 'tools', 'thinking', 'cloud', '756b', '976k-context', 'reasoning'],
    features: [
      'Unprecedented 976,000 token context window for book-length documents',
      'High-speed cloud execution with low latency via ollama run glm-5.2:cloud',
      'High usage rating for continuous multi-hour agent workflows'
    ],
    featuresBn: ['৯৭৬কে টোকেন কনটেক্সট উইন্ডো', 'হাই স্পিড ক্লাউড এক্সিকিউশন', '৭৫৬ বিলিয়ন প্যারামিটার MoE'],
    trainingTokens: '25 Trillion Multilingual & Multimodal Tokens',
    samplePrompts: [
      {
        id: 'glm-prompt-1',
        title: 'Long-Horizon Multi-Document Analysis',
        titleBn: 'মাল্টি-ডকুমেন্ট লং-হরাইজন বিশ্লেষণ',
        prompt: 'Analyze these 12 research papers and synthesize a meta-review with cross-citation graphs...',
        response: 'Processed 840K tokens across 12 papers.\nKey findings extracted: 4 primary breakthroughs in sparse attention.\nGenerated complete meta-review with cross-citation matrix.',
        category: 'Reasoning'
      }
    ]
  },

  // ----------------------------------------------------
  // 2. 20 POPULAR OLLAMA LLM MODELS (from ollama.com/search)
  // ----------------------------------------------------
  {
    id: 'deepseek-r1-70b',
    name: 'deepseek-r1:70b',
    slug: 'deepseek-r1-70b',
    tagline: 'Flagship 70B distilled reasoning model with extreme math and coding capability',
    taglineBn: 'শীর্ষস্থানীয় ৭০ বিলিয়ন প্যারামিটারের ডিপ রিজনিং ও ম্যাথ মডেল',
    description: 'DeepSeek-R1-Distill-Llama-70B offers frontier-tier performance on AIME, MATH, and HumanEval. Preserves complete thinking traces, chain-of-thought deductions, and rigorous formal derivations.',
    descriptionBn: 'মেটার লামা ৩.৩ আর্কিটেকচারে ডিস্টিল করা ৭০ বিলিয়ন ডিপসিক-আর১ মডেল যা জটিল গণিত ও কোডিংয়ে অভূতপূর্ব দক্ষ।',
    creator: 'DeepSeek',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Llama-3.3 + DeepSeek R1 Distill',
    parameterSize: '70B',
    paramNumber: 70.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'MIT (Open Source)',
    releaseDate: '2026-02-15',
    downloadsCount: 14200000,
    likesCount: 420000,
    rating: 4.99,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 92.4,
      codingHumanEval: 94.2,
      mathGsm8k: 97.4,
      banglaNlpScore: 90.0,
      reasoningArc: 96.8,
      tokensPerSec: 36
    },
    minVramGb: 38.0,
    recommendedVramGb: 48.0,
    minCpuRamGb: 64.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '42.8 GB',
        bytes: 45956128000,
        filename: 'deepseek-r1-distill-llama-70b-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/deepseek-r1:70b',
        recommendedVram: '48 GB VRAM (Dual RTX 3090/4090 or Apple M-series 64GB)',
        recommendedFor: 'Frontier reasoning, competition-level mathematics & system design',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run deepseek-r1:70b',
    huggingFaceRepo: 'deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
    pythonSnippet: `import ollama\nresponse = ollama.chat(model='deepseek-r1:70b', messages=[{'role': 'user', 'content': 'Prove that any planar graph has chromatic number at most 4.'}])\nprint(response['message']['content'])`,
    tags: ['Public LLM', 'Ollama', 'deepseek', 'r1', '70b', 'reasoning', 'math', 'frontier'],
    features: [
      'Full 70B frontier mathematical deduction and chain-of-thought reasoning',
      'Ultra-high HumanEval code generation accuracy',
      'Single-command deployment with ollama run deepseek-r1:70b'
    ],
    featuresBn: ['৭০ বিলিয়ন প্যারামিটার ডিপ রিজনিং', 'উচ্চমানের চেইন-অব-থট প্রুফ', 'ওলামা ১-ক্লিক রান'],
    trainingTokens: 'Reinforcement Learning CoT & Llama-3.3 Backbone',
    samplePrompts: [
      {
        id: 'r1-70b-p1',
        title: 'Rigorous Mathematical Derivation',
        prompt: 'Formulate an end-to-end formal proof for the convergence of policy gradients in non-stationary MDPs.',
        response: '<think>\nSetting up stochastic approximation bounds...\n</think>\nHere is the rigorous proof structure...',
        category: 'Reasoning'
      }
    ]
  },
  {
    id: 'qwen2-5-coder-32b',
    name: 'qwen2.5-coder:32b',
    slug: 'qwen2-5-coder-32b',
    tagline: 'Heavyweight 32B coding specialist with 128K context for massive repositories',
    taglineBn: '৩২ বিলিয়ন প্যারামিটারের হেভিওয়েট কোডিং স্পেশালিস্ট মডেল',
    description: 'Qwen2.5-Coder 32B matches frontier proprietary models on HumanEval and SWE-bench. Capable of analyzing thousands of lines of code across entire git repositories in a single prompt.',
    descriptionBn: 'সম্পূর্ণ গিট রিপোজিটরি বিশ্লেষণ ও রিফ্যাক্টরিংয়ে সক্ষম ৩২ বিলিয়ন কোডিং স্পেশালিস্ট মডেল।',
    creator: 'Qwen / Alibaba',
    avatarIcon: 'Code2',
    baseArchitecture: 'Qwen 2.5 Code 32B',
    parameterSize: '32B',
    paramNumber: 32.0,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache-2.0',
    releaseDate: '2026-03-05',
    downloadsCount: 7600000,
    likesCount: 220000,
    rating: 4.98,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 89.4,
      codingHumanEval: 93.8,
      mathGsm8k: 92.1,
      banglaNlpScore: 86.0,
      reasoningArc: 91.5,
      tokensPerSec: 52
    },
    minVramGb: 18.0,
    recommendedVramGb: 24.0,
    minCpuRamGb: 32.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '19.8 GB',
        bytes: 21260000000,
        filename: 'qwen2.5-coder-32b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/qwen2.5-coder:32b',
        recommendedVram: '20-24 GB VRAM (RTX 3090/4090 or Apple M 32GB)',
        recommendedFor: 'Full-repository refactoring, AST transformations, and architectural design',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run qwen2.5-coder:32b',
    huggingFaceRepo: 'Qwen/Qwen2.5-Coder-32B-Instruct',
    pythonSnippet: `import ollama\nresponse = ollama.chat(model='qwen2.5-coder:32b', messages=[{'role': 'user', 'content': 'Architect an asynchronous event-driven microservices kernel in Go' }])\nprint(response['message']['content'])`,
    tags: ['Public LLM', 'Ollama', 'coding', 'qwen', '32b', 'swe-bench', 'architect'],
    features: [
      'Massive 128,000 token context window for reading whole repos',
      'Matches closed frontier models on SWE-bench and HumanEval',
      '1-line launch with ollama run qwen2.5-coder:32b'
    ],
    featuresBn: ['১২৮কে কোড কনটেক্সট', '৩২ বিলিয়ন প্যারামিটার', 'হাই পারফরম্যান্স সফটওয়্যার আর্কিটেকচার'],
    trainingTokens: '5.5 Trillion Multi-Language Code Tokens',
    samplePrompts: [
      {
        id: 'qwen32b-p1',
        title: 'Full Stack Microservices Architecture',
        prompt: 'Build a production-grade distributed consensus layer with Raft algorithm in Rust.',
        response: 'Here is the comprehensive implementation with election timers, log replication, and RPC handling...',
        category: 'Coding'
      }
    ]
  },
  {
    id: 'mistral-small-3',
    name: 'mistral-small:24b',
    slug: 'mistral-small-3',
    tagline: 'Mistral Small 3 24B with Apache 2.0 license, 32K context & lightning inference',
    taglineBn: 'মিস্ট্রাল স্মল ৩ ২৪ বিলিয়ন প্যারামিটারের আল্ট্রা-ফাস্ট ওপেন মডেল',
    description: 'Mistral Small 3 (24B) is a compact powerhouse built for enterprise workloads, agentic tasks, and low latency on single prosumer GPUs. Fully open under Apache 2.0.',
    descriptionBn: 'একক জিপিইউতে দ্রুতগতির এজেন্টিক কাজ ও ব্যবসায়িক অটোমেশনের জন্য ২৪ বিলিয়ন মিস্ট্রাল স্মল ৩ মডেল।',
    creator: 'Mistral AI',
    avatarIcon: 'Cpu',
    baseArchitecture: 'Mistral Small 3',
    parameterSize: '24B',
    paramNumber: 24.0,
    category: 'general-chat',
    modelScope: 'public',
    contextWindow: '32K',
    license: 'Apache-2.0',
    releaseDate: '2026-02-28',
    downloadsCount: 5100000,
    likesCount: 165000,
    rating: 4.95,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 88.2,
      codingHumanEval: 89.6,
      mathGsm8k: 88.4,
      banglaNlpScore: 85.0,
      reasoningArc: 90.2,
      tokensPerSec: 65
    },
    minVramGb: 14.0,
    recommendedVramGb: 16.0,
    minCpuRamGb: 24.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '14.5 GB',
        bytes: 15569256448,
        filename: 'mistral-small-24b-instruct-2501-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/mistral-small:24b',
        recommendedVram: '16 GB VRAM (RTX 4070 Ti / 4080)',
        recommendedFor: 'Enterprise tool use, JSON schema outputs, and customer-facing chat',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run mistral-small:24b',
    huggingFaceRepo: 'mistralai/Mistral-Small-24B-Instruct-2501',
    pythonSnippet: `import ollama\nresponse = ollama.chat(model='mistral-small:24b', messages=[{'role': 'user', 'content': 'Draft a technical SLA specification for a 99.99% cloud storage service'}])\nprint(response['message']['content'])`,
    tags: ['Public LLM', 'Ollama', 'mistral', '24b', 'apache-2.0', 'tools', 'fast'],
    features: [
      'Apache 2.0 open source commercial license',
      'Fits comfortably on 16GB VRAM GPUs with Q4_K_M',
      'Exceptional function calling and structured JSON mode'
    ],
    featuresBn: ['অ্যাপাচি ২.০ লাইসেন্স', '১৬জিবি জিপিইউতে পারফেক্ট রান', '২৪ বিলিয়ন প্যারামিটার'],
    trainingTokens: 'Dense Multilingual Instruct Corpus',
    samplePrompts: [
      {
        id: 'mistral-s3-p1',
        title: 'Generate Structured JSON Schema',
        prompt: 'Extract purchase order details from this unstructured email and format as strict JSON schema.',
        response: '{\n  "po_number": "PO-98124",\n  "vendor": "Acme Corp",\n  "total_usd": 14500.00\n}',
        category: 'Automation'
      }
    ]
  },
  {
    id: 'llama3-3',
    name: 'llama3.3',
    slug: 'llama3-3',
    tagline: "Meta's latest 70B state-of-the-art open source flagship model",
    taglineBn: 'মেটার অত্যাধুনিক ৭০ বিলিয়ন প্যারামিটারের ফ্ল্যাগশিপ ওপেন মডেল',
    description: 'Llama 3.3 70B delivers performance competitive with top frontier models on coding, reasoning, and multi-turn chat at an industry-leading open weight efficiency.',
    descriptionBn: 'কোডিং, গণিত ও গভীর যুক্তিশৃঙ্খলায় শীর্ষস্থানীয় মেটার ৭০ বিলিয়ন প্যারামিটারের মডেল।',
    creator: 'Meta',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'Meta Llama 3.3',
    parameterSize: '70B',
    paramNumber: 70.0,
    category: 'general-chat',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Llama 3.3 Community License',
    releaseDate: '2026-02-10',
    downloadsCount: 9400000,
    likesCount: 215000,
    rating: 4.97,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 88.6,
      codingHumanEval: 89.2,
      mathGsm8k: 91.5,
      banglaNlpScore: 87.0,
      reasoningArc: 92.4,
      tokensPerSec: 38
    },
    minVramGb: 38.0,
    recommendedVramGb: 48.0,
    minCpuRamGb: 64.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '42.5 GB',
        bytes: 45634027520,
        filename: 'llama-3.3-70b-instruct.Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/library/llama3.3',
        recommendedVram: '48 GB VRAM (Dual RTX 3090/4090 or Mac 64GB)',
        recommendedFor: 'Enterprise production reasoning and agentic workflows',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run llama3.3',
    huggingFaceRepo: 'meta-llama/Llama-3.3-70B-Instruct',
    pythonSnippet: `import ollama
response = ollama.chat(model='llama3.3', messages=[{'role': 'user', 'content': 'Write a complete distributed task queue in Rust'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'meta', 'llama3.3', '70b', 'chat', 'general'],
    features: ['128K Token context window', 'State-of-the-art multilingual chat', 'Top industry coding benchmark score'],
    featuresBn: ['১২৮কে কনটেক্সট', 'মাল্টিলিঙ্গুয়াল সাপোর্ট', '৭০ বিলিয়ন প্যারামিটার'],
    trainingTokens: '15+ Trillion Tokens',
    samplePrompts: [
      {
        id: 'llama33-1',
        title: 'Distributed System Architecture',
        prompt: 'Design a resilient event-driven architecture using Apache Kafka and Rust workers.',
        response: 'Here is the step-by-step blueprint with consensus protocols and error recovery...',
        category: 'Architecture'
      }
    ]
  },
  {
    id: 'deepseek-r1',
    name: 'deepseek-r1',
    slug: 'deepseek-r1',
    tagline: 'Deep reasoning model with step-by-step thinking traces',
    taglineBn: 'স্বচ্ছ চিন্তা প্রক্রিয়া ও যুক্তি বিশ্লেষণ বিশিষ্ট শীর্ষস্থানীয় মডেল',
    description: 'DeepSeek-R1 introduces groundbreaking reinforcement-learning-driven reasoning with chain-of-thought preservation for complex mathematics, coding, and logical derivations.',
    descriptionBn: 'ধাপে ধাপে চিন্তাভাবনা করে গণিত, কোডিং ও যুক্তি বিশ্লেষণে বিশ্বমানের পারফরম্যান্স প্রদানকারী মডেল।',
    creator: 'DeepSeek',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'DeepSeek R1 Reasoning MoE',
    parameterSize: '14B / 32B / 70B',
    paramNumber: 14.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '64K',
    license: 'MIT',
    releaseDate: '2026-01-20',
    downloadsCount: 12800000,
    likesCount: 380000,
    rating: 4.99,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 90.8,
      codingHumanEval: 92.4,
      mathGsm8k: 96.2,
      banglaNlpScore: 88.5,
      reasoningArc: 95.8,
      tokensPerSec: 45
    },
    minVramGb: 9.0,
    recommendedVramGb: 12.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '8.9 GB',
        bytes: 9556302200,
        filename: 'deepseek-r1-distill-qwen-14b-Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/library/deepseek-r1',
        recommendedVram: '12 GB VRAM (RTX 3060/4060 or Apple M1/M2 16GB)',
        recommendedFor: 'Maximum reasoning per gigabyte of memory',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run deepseek-r1',
    huggingFaceRepo: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-14B',
    pythonSnippet: `import ollama
response = ollama.chat(model='deepseek-r1', messages=[{'role': 'user', 'content': 'Solve the Riemann hypothesis boundary conditions in 3 steps'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'deepseek', 'reasoning', 'math', 'r1', 'thinking'],
    features: ['Chain-of-Thought (CoT) reasoning', 'Unmatched math problem solving', 'High coding deduction capability'],
    featuresBn: ['চেইন অব থট রিজনিং', 'গণিত ও কোডিং সমস্যা সমাধান', 'ওপেন সোর্স এমআইটি লাইসেন্স'],
    trainingTokens: 'Reinforcement Learning CoT Corpus',
    samplePrompts: [
      {
        id: 'r1-1',
        title: 'Mathematical Proof',
        prompt: 'Prove whether every even integer greater than 2 can be expressed as the sum of two primes for n <= 100.',
        response: '<think>\nEvaluating Goldbach conjecture bounds...\n</think>\nHere is the verified analytical proof...',
        category: 'Mathematics'
      }
    ]
  },
  {
    id: 'qwen2-5-coder',
    name: 'qwen2.5-coder',
    slug: 'qwen2-5-coder',
    tagline: 'Code generation, debugging & repo navigation specialist',
    taglineBn: 'কোড জেনারেশন, বাগ ফিক্সিং ও সফটওয়্যার আর্কিটেকচার স্পেশালিস্ট',
    description: 'Qwen2.5-Coder is Alibaba’s flagship code-specialized model family. Trained on 5.5 trillion tokens of source code, it excels in 92+ programming languages, unit testing, and full codebase edits.',
    descriptionBn: '৯২টিরও বেশি প্রোগ্রামিং ভাষায় কোডিং, অ্যালগরিদম ও সফটওয়্যার আর্কিটেকচারে পারদর্শী স্পেশালিস্ট মডেল।',
    creator: 'Qwen / Alibaba',
    avatarIcon: 'Code2',
    baseArchitecture: 'Qwen 2.5 Code Core',
    parameterSize: '7B / 14B / 32B',
    paramNumber: 7.0,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache-2.0',
    releaseDate: '2026-03-01',
    downloadsCount: 8200000,
    likesCount: 195000,
    rating: 4.96,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 85.4,
      codingHumanEval: 90.2,
      mathGsm8k: 89.1,
      banglaNlpScore: 84.0,
      reasoningArc: 88.7,
      tokensPerSec: 82
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.7 GB',
        bytes: 5046586500,
        filename: 'qwen2.5-coder-7b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/qwen2.5-coder',
        recommendedVram: '6 GB VRAM (GTX 1660 / RTX 3050)',
        recommendedFor: 'Lightning-fast IDE autocomplete & full code generation',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run qwen2.5-coder',
    huggingFaceRepo: 'Qwen/Qwen2.5-Coder-7B-Instruct',
    pythonSnippet: `import ollama
response = ollama.chat(model='qwen2.5-coder', messages=[{'role': 'user', 'content': 'Write a high-performance HTTP web server in C using epoll'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'coding', 'qwen', 'coder', 'developer', 'tools'],
    features: ['128K context for reading entire codebases', 'Support for 92+ languages', 'Top HumanEval code score'],
    featuresBn: ['৯২+ প্রোগ্রামিং ভাষা সাপোর্ট', '১২৮কে কোড কনটেক্সট', 'হাই স্পিড জেনারেশন'],
    trainingTokens: '5.5 Trillion Code Tokens',
    samplePrompts: [
      {
        id: 'qwen-coder-1',
        title: 'React Custom Hook',
        prompt: 'Create a performant React custom hook for WebSocket connection management with automatic exponential backoff retry.',
        response: 'Here is the complete TypeScript implementation with full cleanup and typing...',
        category: 'Coding'
      }
    ]
  },
  {
    id: 'mistral-nemo',
    name: 'mistral-nemo',
    slug: 'mistral-nemo',
    tagline: '12B parameter powerhouse trained jointly with NVIDIA',
    taglineBn: 'এনভিডিয়ার যৌথ সহযোগিতায় ১২ বিলিয়ন প্যারামিটারের শক্তিশালী মডেল',
    description: 'Mistral NeMo 12B features a massive 128K context window with Tekken tokenizer, offering exceptional multilingual precision, reasoning, and world knowledge in an easily deployable footprint.',
    descriptionBn: '১২৮কে কনটেক্সট উইন্ডো এবং আধুনিক টেকেন টোকেনাইজার যুক্ত শক্তিশালী ১২ বিলিয়ন মডেল।',
    creator: 'Mistral AI & NVIDIA',
    avatarIcon: 'Cpu',
    baseArchitecture: 'Mistral NeMo 12B',
    parameterSize: '12B',
    paramNumber: 12.0,
    category: 'general-chat',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache-2.0',
    releaseDate: '2026-01-15',
    downloadsCount: 4600000,
    likesCount: 112000,
    rating: 4.92,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 86.8,
      codingHumanEval: 83.4,
      mathGsm8k: 84.6,
      banglaNlpScore: 82.0,
      reasoningArc: 89.2,
      tokensPerSec: 62
    },
    minVramGb: 8.0,
    recommendedVramGb: 12.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '7.1 GB',
        bytes: 7623565312,
        filename: 'mistral-nemo-12b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/mistral-nemo',
        recommendedVram: '8 GB - 10 GB VRAM',
        recommendedFor: 'Multilingual document summarization & enterprise chat',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run mistral-nemo',
    huggingFaceRepo: 'mistralai/Mistral-Nemo-Instruct-2407',
    pythonSnippet: `import ollama
response = ollama.chat(model='mistral-nemo', messages=[{'role': 'user', 'content': 'Summarize the key architectural benefits of Transformer attention mechanisms'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'mistral', 'nemo', '12b', 'multilingual', 'chat'],
    features: ['Tekken Tokenizer for efficient compression', '128K context window', 'Apache 2.0 open license'],
    featuresBn: ['১২৮কে কনটেক্সট', 'মাল্টিলিঙ্গুয়াল সাপোর্ট', 'অরিজিনাল ওপেন সোর্স'],
    trainingTokens: 'Multi-trillion Multilingual Dataset',
    samplePrompts: [
      {
        id: 'nemo-1',
        title: 'Document Summarization',
        prompt: 'Summarize the legal obligations under GDPR for cloud service providers in 5 bullet points.',
        response: '1. Data processing agreements...\n2. Privacy by design...\n3. Security measures...',
        category: 'Legal'
      }
    ]
  },
  {
    id: 'phi4',
    name: 'phi4',
    slug: 'phi4',
    tagline: 'Microsoft 14B state-of-the-art synthetic reasoning model',
    taglineBn: 'মাইক্রোসফটের ১৪ বিলিয়ন সিন্থেটিক ডেটা ট্রেনিং সমৃদ্ধ শীর্ষ রিজনিং মডেল',
    description: 'Phi-4 is Microsoft’s 14B parameter open model that outperforms much larger models on STEM reasoning, complex mathematics, and multi-turn logic synthesis using organic & curated synthetic textbooks.',
    descriptionBn: 'বিজ্ঞান, গণিত ও জটিল যুক্তি বিশ্লেষণে মাইক্রোসফটের সর্বাধুনিক ১৪ বিলিয়ন মডেল।',
    creator: 'Microsoft',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Microsoft Phi-4',
    parameterSize: '14B',
    paramNumber: 14.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '16K',
    license: 'MIT',
    releaseDate: '2026-01-05',
    downloadsCount: 3900000,
    likesCount: 98000,
    rating: 4.94,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 87.2,
      codingHumanEval: 88.0,
      mathGsm8k: 92.8,
      banglaNlpScore: 83.5,
      reasoningArc: 93.1,
      tokensPerSec: 58
    },
    minVramGb: 9.0,
    recommendedVramGb: 12.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '9.1 GB',
        bytes: 9771057152,
        filename: 'phi-4-14b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/phi4',
        recommendedVram: '12 GB VRAM (RTX 3060/4060)',
        recommendedFor: 'Heavy STEM reasoning, scientific analysis & competitive math',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run phi4',
    huggingFaceRepo: 'microsoft/phi-4',
    pythonSnippet: `import ollama
response = ollama.chat(model='phi4', messages=[{'role': 'user', 'content': 'Derive the Navier-Stokes momentum equations in cylindrical coordinates'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'microsoft', 'phi4', '14b', 'math', 'reasoning'],
    features: ['High STEM reasoning accuracy', 'MIT Open license', 'Synthetic data breakthrough'],
    featuresBn: ['উচ্চমানের গণিত ও বিজ্ঞান যুক্তি', 'এমআইটি লাইসেন্স', 'দ্রুত পারফরম্যান্স'],
    trainingTokens: '9.8 Trillion Tokens',
    samplePrompts: [
      {
        id: 'phi4-1',
        title: 'Physics Derivation',
        prompt: 'Explain the thermodynamic efficiency limits of a Carnot cycle with entropy diagrams.',
        response: 'The Carnot cycle represents the maximum theoretical efficiency limit...',
        category: 'Physics'
      }
    ]
  },
  {
    id: 'gemma2',
    name: 'gemma2',
    slug: 'gemma2',
    tagline: "Google's ultra-efficient open weights built from Gemini research",
    taglineBn: 'গুগলের জেমিনাই টেকনোলজিতে নির্মিত ৯ বিলিয়ন ও ২৭ বিলিয়ন ওপেন মডেল',
    description: 'Gemma 2 models by Google DeepMind deliver incredible parameter efficiency, high factual precision, and robust safety using advanced knowledge distillation techniques.',
    descriptionBn: 'গুগল ডিপমাইন্ডের জেমিনাই গবেষণায় তৈরি ৯ বিলিয়ন প্যারামিটারের অন্যতম সেরা ওপেন মডেল।',
    creator: 'Google DeepMind',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'Google Gemma 2',
    parameterSize: '9B / 27B',
    paramNumber: 9.0,
    category: 'general-chat',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'Gemma Terms of Use',
    releaseDate: '2025-11-20',
    downloadsCount: 7100000,
    likesCount: 168000,
    rating: 4.93,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 85.9,
      codingHumanEval: 82.5,
      mathGsm8k: 84.1,
      banglaNlpScore: 85.2,
      reasoningArc: 89.8,
      tokensPerSec: 72
    },
    minVramGb: 6.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '5.5 GB',
        bytes: 5905580032,
        filename: 'gemma-2-9b-it-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/gemma2',
        recommendedVram: '8 GB VRAM (RTX 3050/3060)',
        recommendedFor: 'Nuanced writing, accurate facts & general conversation',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run gemma2',
    huggingFaceRepo: 'google/gemma-2-9b-it',
    pythonSnippet: `import ollama
response = ollama.chat(model='gemma2', messages=[{'role': 'user', 'content': 'Explain the difference between supervised fine-tuning and DPO in LLMs'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'google', 'gemma2', '9b', 'gemini', 'chat'],
    features: ['Distilled from Gemini technology', 'High factual coherence', 'Exceptional safety alignment'],
    featuresBn: ['গুগল ডিপমাইন্ডের গবেষণা', '৯ বিলিয়ন সাইজ', 'উচ্চমানের ব্যাকরণ ও তথ্য নির্ভুলতা'],
    trainingTokens: '8 Trillion Tokens',
    samplePrompts: [
      {
        id: 'gemma2-1',
        title: 'AI Concept Explanation',
        prompt: 'Explain how Direct Preference Optimization (DPO) works without RLHF reward models.',
        response: 'Direct Preference Optimization directly optimizes the policy network using implicit reward formulation...',
        category: 'AI Research'
      }
    ]
  },
  {
    id: 'llama3-2',
    name: 'llama3.2',
    slug: 'llama3-2',
    tagline: 'Meta 1B & 3B ultra-fast on-device edge models',
    taglineBn: 'মেটার ১ বিলিয়ন ও ৩ বিলিয়ন সাইজের আল্ট্রা-ফাস্ট এজ মডেল',
    description: 'Meta Llama 3.2 1B and 3B models are optimized for edge devices, mobile processors, local laptop execution, and lightning-fast low-latency assistant tasks.',
    descriptionBn: 'যেকোনো ল্যাপটপ ও মোবাইলে দ্রুতগতির জন্য মেটার ৩ বিলিয়ন প্যারামিটার এজ মডেল।',
    creator: 'Meta',
    avatarIcon: 'Cpu',
    baseArchitecture: 'Meta Llama 3.2',
    parameterSize: '3B',
    paramNumber: 3.0,
    category: 'edge-lightweight',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Llama 3.2 Community License',
    releaseDate: '2025-10-12',
    downloadsCount: 11500000,
    likesCount: 260000,
    rating: 4.90,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 76.5,
      codingHumanEval: 74.0,
      mathGsm8k: 77.2,
      banglaNlpScore: 79.5,
      reasoningArc: 81.0,
      tokensPerSec: 135
    },
    minVramGb: 2.2,
    recommendedVramGb: 4.0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '2.0 GB',
        bytes: 2147483648,
        filename: 'llama-3.2-3b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/llama3.2',
        recommendedVram: '4 GB VRAM or any standard 8GB CPU laptop',
        recommendedFor: 'Edge devices, local CLI tools & fast summarization',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run llama3.2',
    huggingFaceRepo: 'meta-llama/Llama-3.2-3B-Instruct',
    pythonSnippet: `import ollama
response = ollama.chat(model='llama3.2', messages=[{'role': 'user', 'content': 'Draft a friendly follow-up email after a job interview'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'meta', 'llama3.2', '3b', 'edge', 'fast', 'cpu'],
    features: ['128K context on a 3B model', 'Runs at 130+ tok/s on CPU', 'Perfect for local edge devices'],
    featuresBn: ['মাত্র ২ জিবি সাইজ', 'যেকোনো কম্পিউটারে দ্রুত চলে', '১২৮কে কনটেক্সট'],
    trainingTokens: '9 Trillion Tokens',
    samplePrompts: [
      {
        id: 'llama32-1',
        title: 'Quick Email Drafting',
        prompt: 'Write a polite email asking for project status update from a developer team.',
        response: 'Subject: Checking in on [Project Name] progress\n\nHi team, hope you are doing well...',
        category: 'Productivity'
      }
    ]
  },
  {
    id: 'qwen2-5-vl',
    name: 'qwen2.5-vl',
    slug: 'qwen2-5-vl',
    tagline: 'Leading open multimodal vision & image understanding model',
    taglineBn: 'ওপেন মাল্টিমোডাল ভিশন, চার্ট রিডিং ও ইমেজ অ্যানালাইসিস মডেল',
    description: 'Qwen2.5-VL understands documents, scans, charts, UI screenshots, video keyframes, and natural images with native pixel-level bounding box spatial localization.',
    descriptionBn: 'ছবি, চার্ট, ডকুমেন্ট স্ক্যান এবং স্ক্রিনশট নিখুঁতভাবে বিশ্লেষণ করতে সক্ষম ভিশন মডেল।',
    creator: 'Qwen / Alibaba',
    avatarIcon: 'Eye',
    baseArchitecture: 'Qwen 2.5 Vision Core',
    parameterSize: '7B / 72B',
    paramNumber: 7.0,
    category: 'vision',
    modelScope: 'public',
    contextWindow: '32K',
    license: 'Apache-2.0',
    releaseDate: '2026-02-28',
    downloadsCount: 3400000,
    likesCount: 88000,
    rating: 4.95,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 84.2,
      codingHumanEval: 85.0,
      mathGsm8k: 88.0,
      banglaNlpScore: 82.0,
      reasoningArc: 90.5,
      tokensPerSec: 52
    },
    minVramGb: 6.0,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '5.2 GB',
        bytes: 5583457484,
        filename: 'qwen2.5-vl-7b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/qwen2.5-vl',
        recommendedVram: '8 GB VRAM',
        recommendedFor: 'OCR extraction, image question answering & diagram-to-code',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run qwen2.5-vl',
    huggingFaceRepo: 'Qwen/Qwen2.5-VL-7B-Instruct',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='qwen2.5-vl',
    messages=[{
        'role': 'user',
        'content': 'Analyze this chart and extract values into a table',
        'images': ['path/to/chart.png']
    }]
)
print(response['message']['content'])`,
    tags: ['Public LLM', 'vision', 'multimodal', 'qwen', 'ocr', 'charts'],
    features: ['Pixel-level spatial bounding box detection', 'DocOCR and table parsing', 'High multimodal reasoning'],
    featuresBn: ['ডকুমেন্ট ও চার্ট রিডিং', 'ছবি থেকে কোড তৈরি', 'মাল্টিমোডাল ভিশন'],
    trainingTokens: 'Multimodal Image-Text Corpus',
    samplePrompts: [
      {
        id: 'qwen-vl-1',
        title: 'UI Screenshot to Code',
        prompt: 'Convert this dashboard UI mockup screenshot into responsive Tailwind CSS HTML.',
        response: '<div class="grid grid-cols-3 gap-4 p-6 bg-zinc-950 text-white">...</div>',
        category: 'Vision'
      }
    ]
  },
  {
    id: 'nomic-embed-text',
    name: 'nomic-embed-text',
    slug: 'nomic-embed-text',
    tagline: 'High-performing 8192 context embedding model for RAG',
    taglineBn: 'র‌্যাগ (RAG) ও ভেক্টর ডাটাবেসের জন্য সর্বাধুনিক টেক্সট এম্বেডিং মডেল',
    description: 'Nomic Embed Text is an open-source text embedding model with an 8192 context window that outperforms OpenAI text-embedding-ada-002 on short and long-context MTEB benchmarks.',
    descriptionBn: 'ভেক্টর সার্চ ও নলেজ রিট্রিভালে ৮১৯২ কনটেক্সটের শীর্ষ এম্বেডিং মডেল।',
    creator: 'Nomic AI',
    avatarIcon: 'Layers',
    baseArchitecture: 'Nomic Bert',
    parameterSize: '137M',
    paramNumber: 0.14,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'Apache-2.0',
    releaseDate: '2025-08-10',
    downloadsCount: 15200000,
    likesCount: 310000,
    rating: 4.96,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 82.0,
      codingHumanEval: 78.0,
      mathGsm8k: 80.0,
      banglaNlpScore: 78.0,
      reasoningArc: 84.0,
      tokensPerSec: 250
    },
    minVramGb: 1.0,
    recommendedVramGb: 2.0,
    minCpuRamGb: 4.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '274 MB',
        bytes: 287309824,
        filename: 'nomic-embed-text-v1.5.Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/library/nomic-embed-text',
        recommendedVram: '1 GB VRAM / Any CPU',
        recommendedFor: 'Vector databases, RAG pipelines & semantic search',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run nomic-embed-text',
    huggingFaceRepo: 'nomic-ai/nomic-embed-text-v1.5',
    pythonSnippet: `import ollama
embedding = ollama.embeddings(model='nomic-embed-text', prompt='Artificial intelligence embeddings')
print(len(embedding['embedding']))`,
    tags: ['Public LLM', 'embeddings', 'rag', 'nomic', 'search', 'vector'],
    features: ['8192 context length', 'Matryoshka embeddings (dimension flexibility)', 'Runs instantly on CPU'],
    featuresBn: ['মাত্র ২৭৪ এমবি সাইজ', 'ভেক্টর সার্চ ও আরএজি স্পেশালিস্ট', '৮১৯২ টোকেন কনটেক্সট'],
    trainingTokens: 'Multi-stage Contrastive Dataset',
    samplePrompts: [
      {
        id: 'nomic-1',
        title: 'Generate Embedding Vector',
        prompt: 'search_document: Understanding transformer self-attention mechanisms in deep learning',
        response: '[0.0124, -0.0452, 0.0891, ... (768 dimensions)]',
        category: 'Embeddings'
      }
    ]
  },
  {
    id: 'codellama',
    name: 'codellama',
    slug: 'codellama',
    tagline: "Meta's dedicated code synthesis and infilling model",
    taglineBn: 'কোড জেনারেশন ও ইনফিলিংয়ে মেটার বিশেষায়িত মডেল',
    description: 'Code Llama is Meta’s family of large language models for coding, built on top of Llama 2 with specialized infilling capabilities and long context up to 100K tokens.',
    descriptionBn: 'কোড লেখার জন্য মেটার অন্যতম বিশ্বস্ত ও পরীক্ষিত ওপেন সোর্স মডেল।',
    creator: 'Meta',
    avatarIcon: 'Code2',
    baseArchitecture: 'Code Llama',
    parameterSize: '7B / 13B / 34B / 70B',
    paramNumber: 7.0,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '100K',
    license: 'Llama 2 Community License',
    releaseDate: '2025-06-01',
    downloadsCount: 8900000,
    likesCount: 178000,
    rating: 4.89,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 81.2,
      codingHumanEval: 82.4,
      mathGsm8k: 78.5,
      banglaNlpScore: 72.0,
      reasoningArc: 83.2,
      tokensPerSec: 75
    },
    minVramGb: 4.5,
    recommendedVramGb: 6.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '3.8 GB',
        bytes: 4080218931,
        filename: 'codellama-7b-instruct.Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/library/codellama',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Local code autocomplete & bug fixes',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run codellama',
    huggingFaceRepo: 'codellama/CodeLlama-7b-Instruct-hf',
    pythonSnippet: `import ollama
response = ollama.chat(model='codellama', messages=[{'role': 'user', 'content': 'Write a Python script to parse large JSON files in streams'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'meta', 'codellama', 'coding', 'python', 'tools'],
    features: ['Code infilling support', 'Trained on 500B code tokens', 'Stable long context handling'],
    featuresBn: ['কোড ইনফিলিং', '৫০০ বিলিয়ন কোড টোকেন', 'মেটার বিশ্বস্ত মডেল'],
    trainingTokens: '500 Billion Code Tokens',
    samplePrompts: [
      {
        id: 'codellama-1',
        title: 'Stream JSON Parser',
        prompt: 'Write a memory-efficient generator in Python to stream and parse 10GB JSON lines.',
        response: 'import ijson\n\ndef stream_records(file_path):\n    with open(file_path, "rb") as f:\n        for item in ijson.items(f, "item"):\n            yield item',
        category: 'Coding'
      }
    ]
  },
  {
    id: 'starcoder2',
    name: 'starcoder2',
    slug: 'starcoder2',
    tagline: 'Transparent & responsibly trained next-gen coding copilot',
    taglineBn: 'বিগকোড প্রকল্পের দায়িত্বশীল ও স্বচ্ছ কোডিং কোপাইলট মডেল',
    description: 'StarCoder2 is developed by BigCode & ServiceNow, trained on 600+ programming languages with complete data transparency and opt-out compliance.',
    descriptionBn: '৬০০টির বেশি ভাষায় কোড জেনারেশনে দক্ষ বিগকোড প্রজেক্টের ওপেন কোডিং মডেল।',
    creator: 'BigCode & ServiceNow',
    avatarIcon: 'Code2',
    baseArchitecture: 'StarCoder2',
    parameterSize: '3B / 7B / 15B',
    paramNumber: 7.0,
    category: 'coding',
    modelScope: 'public',
    contextWindow: '16K',
    license: 'BigCode OpenRAIL-M v1',
    releaseDate: '2025-07-20',
    downloadsCount: 3100000,
    likesCount: 65000,
    rating: 4.88,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 79.5,
      codingHumanEval: 83.8,
      mathGsm8k: 79.0,
      banglaNlpScore: 71.0,
      reasoningArc: 82.5,
      tokensPerSec: 85
    },
    minVramGb: 4.5,
    recommendedVramGb: 6.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.0 GB',
        bytes: 4294967296,
        filename: 'starcoder2-7b-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/starcoder2',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Enterprise code compliance & secure IDE integration',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run starcoder2',
    huggingFaceRepo: 'bigcode/starcoder2-7b',
    pythonSnippet: `import ollama
response = ollama.chat(model='starcoder2', messages=[{'role': 'user', 'content': 'Write a SQL query for customer churn calculation in PostgreSQL'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'bigcode', 'starcoder', 'coding', 'sql', 'developer'],
    features: ['Trained on The Stack v2 (600+ languages)', 'Complete data transparency', 'Fast token output'],
    featuresBn: ['৬০০+ প্রোগ্রামিং ভাষা', 'স্বচ্ছ ওপেন ডেটাসেট', 'এসকিউএল ও ডেটা পাইপলাইন'],
    trainingTokens: '3.5 Trillion Tokens',
    samplePrompts: [
      {
        id: 'star-1',
        title: 'SQL Window Functions',
        prompt: 'Calculate rolling 30-day average revenue per user with window functions in PostgreSQL.',
        response: 'SELECT user_id, date, AVG(revenue) OVER (PARTITION BY user_id ORDER BY date ROWS BETWEEN 29 PRECEDING AND CURRENT ROW) as rolling_avg FROM sales;',
        category: 'SQL'
      }
    ]
  },
  {
    id: 'llava',
    name: 'llava',
    slug: 'llava',
    tagline: 'Visual instruction tuning for multimodal image reasoning',
    taglineBn: 'ভিজ্যুয়াল ইনস্ট্রাকশন ও ইমেজ কোয়েশ্চেন অ্যান্সারিং মডেল',
    description: 'LLaVA (Large Language and Vision Assistant) combines a vision encoder with an LLM for general-purpose visual and language understanding, visual chat, and meme interpretation.',
    descriptionBn: 'ছবি দেখে প্রশ্নের উত্তর দেওয়া এবং ইমেজ ব্যাখ্যা করার জনপ্রিয় ওপেন সোর্স মডেল।',
    creator: 'LLaVA Team / UW-Madison',
    avatarIcon: 'Eye',
    baseArchitecture: 'LLaVA 1.6 / CLIP ViT-L',
    parameterSize: '7B / 13B',
    paramNumber: 7.0,
    category: 'vision',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'Apache-2.0',
    releaseDate: '2025-05-15',
    downloadsCount: 6800000,
    likesCount: 154000,
    rating: 4.89,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 80.4,
      codingHumanEval: 75.0,
      mathGsm8k: 76.2,
      banglaNlpScore: 76.0,
      reasoningArc: 82.0,
      tokensPerSec: 55
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.5 GB',
        bytes: 4831838208,
        filename: 'llava-v1.6-7b-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/llava',
        recommendedVram: '6 GB - 8 GB VRAM',
        recommendedFor: 'Visual chat, image analysis & object identification',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run llava',
    huggingFaceRepo: 'liuhaotian/llava-v1.6-7b',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='llava',
    messages=[{
        'role': 'user',
        'content': 'What is in this picture?',
        'images': ['path/to/image.jpg']
    }]
)
print(response['message']['content'])`,
    tags: ['Public LLM', 'llava', 'vision', 'multimodal', 'image-chat'],
    features: ['CLIP ViT-L vision backbone', 'Visual multi-turn dialogue', 'Object and context reasoning'],
    featuresBn: ['ইমেজ চ্যাট', 'ছবি থেকে অবজেক্ট শনাক্তকরণ', 'ওপেন মাল্টিমোডাল'],
    trainingTokens: 'Visual Instruction Datasets',
    samplePrompts: [
      {
        id: 'llava-1',
        title: 'Image Captioning',
        prompt: 'Describe the main subject, background setting, and lighting atmosphere of this photo.',
        response: 'The image depicts a serene mountain landscape during golden hour...',
        category: 'Vision'
      }
    ]
  },
  {
    id: 'command-r-plus',
    name: 'command-r-plus',
    slug: 'command-r-plus',
    tagline: 'Cohere enterprise 104B model optimized for RAG & Tool Use',
    taglineBn: 'এন্টারপ্রাইজ আরএজি ও টুল ব্যবহারের জন্য কোহিয়ারের ১০৪ বিলিয়ন মডেল',
    description: 'Command R+ is Cohere’s flagship 104B open weights model designed specifically for enterprise-grade conversational interaction, grounded RAG citations, and complex multi-step tool use across 10 languages.',
    descriptionBn: 'উচ্চমানের আরএজি এবং মাল্টি-টুল অর্কেস্ট্রেশনে বিশ্বখ্যাত কোহিয়ার ফ্ল্যাগশিপ মডেল।',
    creator: 'Cohere For AI',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'Cohere Command R+',
    parameterSize: '104B',
    paramNumber: 104.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Cohere CC-BY-NC',
    releaseDate: '2025-09-10',
    downloadsCount: 2200000,
    likesCount: 78000,
    rating: 4.95,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 89.0,
      codingHumanEval: 86.5,
      mathGsm8k: 88.4,
      banglaNlpScore: 86.0,
      reasoningArc: 91.5,
      tokensPerSec: 28
    },
    minVramGb: 48.0,
    recommendedVramGb: 64.0,
    minCpuRamGb: 128.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '59.0 GB',
        bytes: 63350767616,
        filename: 'command-r-plus-104b-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/command-r-plus',
        recommendedVram: '64 GB VRAM (Mac Studio 64GB / Dual A6000)',
        recommendedFor: 'Enterprise grounded RAG with verifiable citations',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run command-r-plus',
    huggingFaceRepo: 'CohereForAI/c4ai-command-r-plus',
    pythonSnippet: `import ollama
response = ollama.chat(model='command-r-plus', messages=[{'role': 'user', 'content': 'Synthesize an executive briefing on AI safety regulations with citations'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'cohere', 'command-r-plus', '104b', 'rag', 'enterprise'],
    features: ['Grounded RAG with verifiable citations', 'Multi-step tool integration', '128K context window'],
    featuresBn: ['আরএজি রেফারেন্স সাইটেশন', '১০৪ বিলিয়ন প্যারামিটার', '১২৮কে কনটেক্সট'],
    trainingTokens: 'Enterprise Multilingual Corpus',
    samplePrompts: [
      {
        id: 'cr-1',
        title: 'Executive Briefing',
        prompt: 'Draft an executive summary of enterprise risk management frameworks under ISO 31000.',
        response: 'Executive Summary: Risk Management Framework Overview...',
        category: 'Enterprise'
      }
    ]
  },
  {
    id: 'smollm2',
    name: 'smollm2',
    slug: 'smollm2',
    tagline: 'HuggingFace ultra-compact models (135M, 360M, 1.7B)',
    taglineBn: 'হাগিংফেসের অত্যন্ত কম সাইজের ১.৭ বিলিয়ন আল্ট্রা-লাইটওয়েট মডেল',
    description: 'SmolLM2 is a family of compact state-of-the-art small models developed by Hugging Face, capable of on-device instruction following, local summarization, and mobile apps.',
    descriptionBn: 'হাগিংফেসের ১.৭ বিলিয়ন সাইজের অত্যন্ত হালকা কিন্তু পারদর্শী এআই মডেল।',
    creator: 'Hugging Face',
    avatarIcon: 'Feather',
    baseArchitecture: 'SmolLM2 1.7B',
    parameterSize: '1.7B',
    paramNumber: 1.7,
    category: 'edge-lightweight',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'Apache-2.0',
    releaseDate: '2025-12-01',
    downloadsCount: 4200000,
    likesCount: 92000,
    rating: 4.89,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 68.4,
      codingHumanEval: 65.0,
      mathGsm8k: 69.5,
      banglaNlpScore: 74.0,
      reasoningArc: 76.2,
      tokensPerSec: 180
    },
    minVramGb: 1.2,
    recommendedVramGb: 2.0,
    minCpuRamGb: 4.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '1.0 GB',
        bytes: 1073741824,
        filename: 'smollm2-1.7b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/smollm2',
        recommendedVram: '2 GB VRAM / Any standard PC or phone',
        recommendedFor: 'In-browser Transformers.js & Raspberry Pi / edge compute',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run smollm2',
    huggingFaceRepo: 'HuggingFaceTB/SmolLM2-1.7B-Instruct',
    pythonSnippet: `import ollama
response = ollama.chat(model='smollm2', messages=[{'role': 'user', 'content': 'List 5 creative ideas for a weekend science project'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'huggingface', 'smollm2', '1.7b', 'edge', 'small', 'fast'],
    features: ['Runs at 180+ tok/s on CPU', '1.0 GB download size', 'Apache 2.0 open license'],
    featuresBn: ['মাত্র ১ জিবি সাইজ', '১৮০+ টোকেন পার সেকেন্ড', 'হাগিংফেসের উদ্ভাবন'],
    trainingTokens: 'FineWeb-Edu Curated Dataset',
    samplePrompts: [
      {
        id: 'smol-1',
        title: 'Quick Brainstorming',
        prompt: 'List 5 fun science experiments you can do at home with baking soda and vinegar.',
        response: '1. Classic Volcano...\n2. Balloon Inflator...\n3. Secret Message Reveal...',
        category: 'Ideas'
      }
    ]
  },
  {
    id: 'dolphin3',
    name: 'dolphin3',
    slug: 'dolphin3',
    tagline: 'Cognitive Computations uncensored & highly capable multi-skill model',
    taglineBn: 'কগনিটিভ কম্পিউটেশনসের আনসেন্সরড ও মাল্টি-টাস্ক কোডিং সহকারী',
    description: 'Dolphin 3.0 is Eric Hartford’s newest uncensored instruction-tuned model based on Llama 3.1, designed with maximum alignment to user requests without artificial refusal guardrails.',
    descriptionBn: 'ব্যবহারকারীর নির্দেশনা নিখুঁতভাবে পালনকারী আনসেন্সরড ওপেন সোর্স মডেল।',
    creator: 'Cognitive Computations (Eric Hartford)',
    avatarIcon: 'Bot',
    baseArchitecture: 'Llama 3.1 Dolphin 3',
    parameterSize: '8B',
    paramNumber: 8.0,
    category: 'general-chat',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache-2.0',
    releaseDate: '2026-01-10',
    downloadsCount: 3800000,
    likesCount: 89000,
    rating: 4.91,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 82.5,
      codingHumanEval: 83.0,
      mathGsm8k: 84.5,
      banglaNlpScore: 81.0,
      reasoningArc: 86.8,
      tokensPerSec: 80
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.9 GB',
        bytes: 5261334937,
        filename: 'dolphin3-8b-llama3.1-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/dolphin3',
        recommendedVram: '6 GB - 8 GB VRAM',
        recommendedFor: 'Cybersecurity research, uncensored creative writing & unfiltered coding',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run dolphin3',
    huggingFaceRepo: 'cognitivecomputations/Dolphin3.0-Llama3.1-8B',
    pythonSnippet: `import ollama
response = ollama.chat(model='dolphin3', messages=[{'role': 'user', 'content': 'Analyze network packet capture logs for potential SYN flood patterns'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'dolphin3', 'uncensored', 'llama3.1', 'cybersecurity', 'chat'],
    features: ['Zero artificial refusal filters', 'Great at cybersecurity research', '128K context window'],
    featuresBn: ['আনসেন্সরড মডেল', 'সাইবার সিকিউরিটি রিসার্চ', '১২৮কে কনটেক্সট'],
    trainingTokens: 'Dolphin Multi-Agent Dataset',
    samplePrompts: [
      {
        id: 'dolphin-1',
        title: 'Penetration Testing Analysis',
        prompt: 'Explain common defense mechanisms against DNS amplification attacks in cloud networks.',
        response: 'DNS amplification defense strategies include Response Rate Limiting (RRL)...',
        category: 'Security'
      }
    ]
  },
  {
    id: 'solar-pro',
    name: 'solar-pro',
    slug: 'solar-pro',
    tagline: 'Upstage 22B Depth-Up Scaled single GPU powerhouse',
    taglineBn: 'আপস্টেজের ২২ বিলিয়ন প্যারামিটারের সিঙ্গেল জিপিইউ হাই-পারফরম্যান্স মডেল',
    description: 'SOLAR-Pro 22B preview by Upstage fits entirely onto a single NVIDIA RTX 4090 / 3090 GPU while rivaling the performance of 70B models through Depth-Up Scaling.',
    descriptionBn: 'সিঙ্গেল ২৪ জিবি জিপিইউতে ৭০ বিলিয়নের সমান পারফরম্যান্স প্রদানকারী ২২ বিলিয়ন মডেল।',
    creator: 'Upstage AI',
    avatarIcon: 'Zap',
    baseArchitecture: 'SOLAR Depth-Up Scaled',
    parameterSize: '22B',
    paramNumber: 22.0,
    category: 'general-chat',
    modelScope: 'public',
    contextWindow: '4K',
    license: 'Upstage Open Model License',
    releaseDate: '2025-11-05',
    downloadsCount: 1900000,
    likesCount: 47000,
    rating: 4.90,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 86.4,
      codingHumanEval: 84.0,
      mathGsm8k: 85.5,
      banglaNlpScore: 80.0,
      reasoningArc: 88.9,
      tokensPerSec: 50
    },
    minVramGb: 14.0,
    recommendedVramGb: 16.0,
    minCpuRamGb: 32.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '13.0 GB',
        bytes: 13958643712,
        filename: 'solar-pro-22b-preview-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/solar-pro',
        recommendedVram: '16 GB VRAM (RTX 4080 / Apple M2 24GB)',
        recommendedFor: 'High throughput reasoning fitting into a single GPU',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run solar-pro',
    huggingFaceRepo: 'upstage/solar-pro-preview-instruct',
    pythonSnippet: `import ollama
response = ollama.chat(model='solar-pro', messages=[{'role': 'user', 'content': 'Draft a business strategy proposal for expanding SaaS into Southeast Asia'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'upstage', 'solar-pro', '22b', 'enterprise', 'chat'],
    features: ['Depth-Up Scaling architecture', 'Fits on single 24GB GPU', 'High reasoning density'],
    featuresBn: ['সিঙ্গেল জিপিইউতে চলে', '২২ বিলিয়ন প্যারামিটার', 'বিজনেস অ্যানালিটিক্স'],
    trainingTokens: 'Solar Upstage Proprietary Dataset',
    samplePrompts: [
      {
        id: 'solar-1',
        title: 'Business Strategy Proposal',
        prompt: 'Outline key regulatory risks when launching cross-border payment gateway in ASEAN.',
        response: '1. Central Bank Licensing requirements...\n2. Foreign exchange control compliance...',
        category: 'Business'
      }
    ]
  },
  {
    id: 'granite3-dense',
    name: 'granite3-dense',
    slug: 'granite3-dense',
    tagline: 'IBM enterprise open models trained with full safety & legal indemnity',
    taglineBn: 'আইবিএম এর এন্টারপ্রাইজ গ্রেড ওপেন মডেল যা ব্যবসায়িক ব্যবহারের জন্য নিরাপদ',
    description: 'Granite 3.0 8B Dense by IBM is designed for enterprise AI workloads including tool integration, code translation, and enterprise customer service with legal indemnification assurances.',
    descriptionBn: 'আইবিএম এর ৮ বিলিয়ন এন্টারপ্রাইজ মডেল যা কর্পোরেট ডাটা ও বিজনেস অটোমেশনে কার্যকর।',
    creator: 'IBM Research',
    avatarIcon: 'Cpu',
    baseArchitecture: 'IBM Granite 3.0 Dense',
    parameterSize: '8B',
    paramNumber: 8.0,
    category: 'reasoning',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache-2.0',
    releaseDate: '2025-10-25',
    downloadsCount: 2600000,
    likesCount: 54000,
    rating: 4.90,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 83.2,
      codingHumanEval: 82.0,
      mathGsm8k: 83.5,
      banglaNlpScore: 78.5,
      reasoningArc: 86.0,
      tokensPerSec: 78
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.9 GB',
        bytes: 5261334937,
        filename: 'granite-3.0-8b-instruct-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/granite3-dense',
        recommendedVram: '6 GB - 8 GB VRAM',
        recommendedFor: 'Enterprise workflows, RAG & structured tool execution',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run granite3-dense',
    huggingFaceRepo: 'ibm-granite/granite-3.0-8b-instruct',
    pythonSnippet: `import ollama
response = ollama.chat(model='granite3-dense', messages=[{'role': 'user', 'content': 'Convert this legacy COBOL payroll formula to modern Python 3.12'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'ibm', 'granite3', '8b', 'enterprise', 'tools'],
    features: ['128K context length', 'Enterprise legal indemnity', 'Apache 2.0 license'],
    featuresBn: ['আইবিএম রিসার্চ', '১২৮কে কনটেক্সট', 'কর্পোরেট আরএজি ও টুলিং'],
    trainingTokens: '12 Trillion Tokens',
    samplePrompts: [
      {
        id: 'granite-1',
        title: 'Legacy Code Migration',
        prompt: 'Convert COBOL fixed-point arithmetic calculation to decimal in Python.',
        response: 'from decimal import Decimal\n\ndef calculate_payroll(base, tax_rate):\n    return base * (Decimal("1.0") - tax_rate)',
        category: 'Enterprise'
      }
    ]
  },
  {
    id: 'aya-expanse',
    name: 'aya-expanse',
    slug: 'aya-expanse',
    tagline: 'Cohere 23-language multilingual research powerhouse',
    taglineBn: '২৩টি বিশ্বভাষায় নিখুঁত যোগাযোগের জন্য কোহিয়ারের বহুভাষিক মডেল',
    description: 'Aya Expanse 8B and 32B by Cohere For AI are built specifically to bridge language barriers across 23 global languages with native cultural nuance and high syntactic fidelity.',
    descriptionBn: 'বাংলা সহ ২৩টি আন্তর্জাতিক ভাষায় অনুবাদ ও আলোচনার জন্য কোহিয়ারের বহুভাষিক মডেল।',
    creator: 'Cohere For AI',
    avatarIcon: 'Globe2',
    baseArchitecture: 'Cohere Aya Expanse',
    parameterSize: '8B / 32B',
    paramNumber: 8.0,
    category: 'bengali-indic',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'CC-BY-NC',
    releaseDate: '2025-11-12',
    downloadsCount: 1800000,
    likesCount: 46000,
    rating: 4.93,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 82.8,
      codingHumanEval: 78.5,
      mathGsm8k: 81.0,
      banglaNlpScore: 91.5,
      reasoningArc: 86.4,
      tokensPerSec: 76
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '5.1 GB',
        bytes: 5476083302,
        filename: 'aya-expanse-8b-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/aya-expanse',
        recommendedVram: '6 GB - 8 GB VRAM',
        recommendedFor: 'Bengali translation, Indic languages & cross-cultural NLP',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run aya-expanse',
    huggingFaceRepo: 'CohereForAI/aya-expanse-8b',
    pythonSnippet: `import ollama
response = ollama.chat(model='aya-expanse', messages=[{'role': 'user', 'content': 'Translate this complex technical paragraph into eloquent Bengali'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'cohere', 'aya', 'multilingual', 'bengali', 'indic'],
    features: ['23 global languages supported', 'Exceptional Bengali & Indic NLP', 'Cohere multilingual dataset'],
    featuresBn: ['২৩টি ভাষায় সাবলীল', 'বাংলা অনুবাদে সেরা', 'সাংস্কৃতিক ব্যাকরণ সচেতন'],
    trainingTokens: 'Aya Multilingual Collection',
    samplePrompts: [
      {
        id: 'aya-1',
        title: 'Bengali Technical Translation',
        prompt: 'Translate: "Asynchronous I/O improves server throughput by avoiding blocking threads."',
        response: 'অ্যাসিঙ্ক্রোনাস আই/ও থ্রেড আটকে না রেখে সার্ভারের কার্যক্ষমতা এবং থ্রুপুট উল্লেখযোগ্যভাবে বৃদ্ধি করে।',
        category: 'Translation'
      }
    ]
  },
  {
    id: 'tinyllama',
    name: 'tinyllama',
    slug: 'tinyllama',
    tagline: '1.1B lightweight powerhouse trained on 3 trillion tokens',
    taglineBn: '৩ ট্রিলিয়ন টোকেনে প্রশিক্ষিত ১.১ বিলিয়ন সাইজের আল্ট্রা-লাইটওয়েট মডেল',
    description: 'TinyLlama 1.1B is a compact open-source model pre-trained on 3 trillion tokens, ideal for microcontrollers, embedded IoT systems, and real-time text completion.',
    descriptionBn: 'লো-এন্ড কম্পিউটার এবং আইওটি ডিভাইসে অতি দ্রুত চলার জন্য ১.১ বিলিয়ন মডেল।',
    creator: 'TinyLlama Team',
    avatarIcon: 'Cpu',
    baseArchitecture: 'Llama Architecture 1.1B',
    parameterSize: '1.1B',
    paramNumber: 1.1,
    category: 'edge-lightweight',
    modelScope: 'public',
    contextWindow: '2K',
    license: 'Apache-2.0',
    releaseDate: '2024-12-01',
    downloadsCount: 9200000,
    likesCount: 185000,
    rating: 4.86,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 58.2,
      codingHumanEval: 54.0,
      mathGsm8k: 56.5,
      banglaNlpScore: 65.0,
      reasoningArc: 67.0,
      tokensPerSec: 210
    },
    minVramGb: 0.8,
    recommendedVramGb: 1.5,
    minCpuRamGb: 4.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '637 MB',
        bytes: 668032768,
        filename: 'tinyllama-1.1b-chat-v1.0.Q4_K_M.gguf',
        downloadUrl: 'https://ollama.com/library/tinyllama',
        recommendedVram: '1 GB VRAM / Any standard CPU or phone',
        recommendedFor: 'Instant lightweight completion & edge IoT execution',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run tinyllama',
    huggingFaceRepo: 'TinyLlama/TinyLlama-1.1B-Chat-v1.0',
    pythonSnippet: `import ollama
response = ollama.chat(model='tinyllama', messages=[{'role': 'user', 'content': 'Give me a 2-line summary of quantum physics'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'tinyllama', '1.1b', 'small', 'edge', 'iot', 'fast'],
    features: ['Ultra-small 637 MB download size', '200+ tok/s generation', 'Apache 2.0 open source'],
    featuresBn: ['মাত্র ৬৩৭ এমবি সাইজ', '২০০+ টোকেন পার সেকেন্ড', 'আইওটি ও মোবাইলে উপযোগী'],
    trainingTokens: '3 Trillion Tokens',
    samplePrompts: [
      {
        id: 'tiny-1',
        title: 'Quick 2-Line Summary',
        prompt: 'Summarize what photosynthesis is in 2 simple sentences.',
        response: 'Photosynthesis is the process where plants turn sunlight and water into energy. It produces oxygen that we breathe.',
        category: 'Science'
      }
    ]
  },
  {
    id: 'meditron',
    name: 'meditron',
    slug: 'meditron',
    tagline: 'Open medical LLM tailored for clinical knowledge & healthcare guidance',
    taglineBn: 'ক্লিনিক্যাল জ্ঞান ও চিকিৎসা পরামর্শের জন্য বিশেষায়িত ওপেন মেডিকেল মডেল',
    description: 'Meditron by EPFL is adapted from Llama 2 and trained on PubMed, clinical guidelines, and medical textbooks to provide reliable clinical QA and healthcare literature synthesis.',
    descriptionBn: 'পাবমেড ও মেডিকেল গাইডলাইনে প্রশিক্ষিত ওপেন সোর্স ক্লিনিক্যাল হেলথকেয়ার মডেল।',
    creator: 'EPFL Medical AI',
    avatarIcon: 'HeartPulse',
    baseArchitecture: 'Llama 2 Meditron',
    parameterSize: '7B',
    paramNumber: 7.0,
    category: 'medical-specialized',
    modelScope: 'public',
    contextWindow: '4K',
    license: 'Llama 2 Community License',
    releaseDate: '2025-04-10',
    downloadsCount: 1400000,
    likesCount: 39000,
    rating: 4.88,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    benchmarks: {
      mmlu: 79.8,
      codingHumanEval: 68.0,
      mathGsm8k: 72.0,
      banglaNlpScore: 75.0,
      reasoningArc: 83.5,
      tokensPerSec: 70
    },
    minVramGb: 4.5,
    recommendedVramGb: 6.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '3.9 GB',
        bytes: 4187593113,
        filename: 'meditron-7b-q4_k_m.gguf',
        downloadUrl: 'https://ollama.com/library/meditron',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Medical research, pharmacology synthesis & clinical knowledge QA',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run meditron',
    huggingFaceRepo: 'epfl-llm/meditron-7b',
    pythonSnippet: `import ollama
response = ollama.chat(model='meditron', messages=[{'role': 'user', 'content': 'Explain the mechanism of action of ACE inhibitors in hypertension'}])
print(response['message']['content'])`,
    tags: ['Public LLM', 'medical', 'healthcare', 'clinical', 'meditron', 'biology'],
    features: ['PubMed and medical guideline pre-training', 'Clinical trial interpretation', 'Pharmacology analysis'],
    featuresBn: ['মেডিকেল জ্ঞান ও ফার্মাকোলজি', 'ক্লিনিক্যাল রিসার্চ', 'পাবমেড ডেটাসেট'],
    trainingTokens: 'Medical Guidelines & PubMed 48B Tokens',
    samplePrompts: [
      {
        id: 'med-1',
        title: 'Pharmacological Mechanism',
        prompt: 'Explain how ACE inhibitors reduce blood pressure in patients with chronic kidney disease.',
        response: 'ACE inhibitors block the conversion of angiotensin I to angiotensin II, preventing vasoconstriction...',
        category: 'Medicine'
      }
    ]
  },

  // =========================================================================
  // HUGGING FACE LLM (GGUF TRENDING FROM https://huggingface.co/models?library=gguf&sort=trending)
  // =========================================================================
  {
    id: 'hf-deepseek-r1-gguf',
    name: 'DeepSeek-R1-GGUF (Unsloth)',
    slug: 'hf-deepseek-r1-gguf',
    tagline: 'Top #1 Trending Reasoning LLM with Dynamic GGUF Quants (1.58-bit to Q8_0)',
    taglineBn: 'হাগিং ফেসের শীর্ষ ট্রেন্ডিং ওপেন সোর্স রিজনিং মডেল ও ডায়নামিক কোয়ান্টস',
    description: 'Unsloth dynamic 1.58-bit to Q8_0 GGUF quants of DeepSeek-R1 671B MoE reasoning model. Excels in complex mathematics, competitive coding, and chain-of-thought logic synthesis.',
    descriptionBn: 'হাগিং ফেসে শীর্ষ ট্রেন্ডিং আনস্লথ ডিপসিক-আর১ কোয়ান্টস যা জটিল ম্যাথ ও কোডিংয়ে অপ্রতিদ্বন্দ্বী।',
    creator: 'unsloth',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'DeepSeek MoE Reasoning',
    parameterSize: '671B (37B active)',
    paramNumber: 671.0,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'MIT Open Weights',
    releaseDate: '2026-01-20',
    downloadsCount: 3840000,
    likesCount: 145000,
    rating: 4.99,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 90.8,
      codingHumanEval: 96.1,
      mathGsm8k: 97.3,
      banglaNlpScore: 89.4,
      reasoningArc: 96.5,
      tokensPerSec: 45
    },
    minVramGb: 24.0,
    recommendedVramGb: 48.0,
    minCpuRamGb: 64.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '404.0 GB (Full MoE) / 20.2 GB (Distill)',
        bytes: 21690000000,
        filename: 'DeepSeek-R1-UD-IQ1_S.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/DeepSeek-R1-GGUF/tree/main',
        recommendedVram: '24 GB+ VRAM with offloading',
        recommendedFor: 'Highest precision frontier reasoning & competitive coding',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '710.0 GB',
        bytes: 762000000000,
        filename: 'DeepSeek-R1-Q8_0.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/DeepSeek-R1-GGUF/tree/main',
        recommendedVram: 'Multi-GPU Cluster / 512GB RAM',
        recommendedFor: 'Zero degradation full precision inference'
      }
    ],
    ollamaCommand: 'ollama run deepseek-r1',
    huggingFaceRepo: 'unsloth/DeepSeek-R1-GGUF',
    pythonSnippet: `# Direct Hugging Face GGUF inference via llama-cpp-python
from llama_cpp import Llama

llm = Llama.from_pretrained(
    repo_id="unsloth/DeepSeek-R1-GGUF",
    filename="DeepSeek-R1-UD-IQ1_S/DeepSeek-R1-UD-IQ1_S-00001-of-00006.gguf",
    n_ctx=16384,
    n_gpu_layers=-1
)
output = llm.create_chat_completion(
    messages=[{"role": "user", "content": "Solve the Riemann hypothesis step-by-step reasoning"}]
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'unsloth', 'deepseek-r1', 'reasoning', 'math'],
    features: ['Unsloth Dynamic 1.58-bit & 4-bit quants', 'Chain-of-thought <think> reasoning tokens', '128K context window'],
    featuresBn: ['আনস্লথ ডায়নামিক কোয়ান্টাইজেশন', 'স্টেপ-বাই-স্টেপ রিজনিং চেইন', '১২৮কে কনটেক্সট'],
    trainingTokens: '14.8 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-r1-1',
        title: 'High-Level Mathematical Proof',
        prompt: 'Prove that the square root of 2 is irrational using proof by contradiction.',
        response: 'Assume √2 is rational, meaning √2 = a/b where a and b are co-prime integers...\nTherefore √2 cannot be rational.',
        category: 'Reasoning'
      }
    ]
  },
  {
    id: 'hf-llama-3-3-70b-gguf',
    name: 'Llama-3.3-70B-Instruct-GGUF (bartowski)',
    slug: 'hf-llama-3-3-70b-gguf',
    tagline: 'Meta\'s premier 70B open weight instruction tuned model quantized by bartowski',
    taglineBn: 'মেটার শীর্ষ ৭০বি ইনস্ট্রাক্ট মডেলের বার্টোভস্কি জিজিইউএফ কোয়ান্ট',
    description: 'bartowski quantized GGUF release for Meta Llama 3.3 70B Instruct. Delivers GPT-4 class capabilities across tool use, coding, multilingual translations, and reasoning.',
    descriptionBn: 'মেটার লেটেস্ট লামা ৩.৩ ৭০বি মডেলের হাই-কোয়ালিটি জিজিইউএফ ফাইল।',
    creator: 'bartowski',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'Meta Llama 3.3',
    parameterSize: '70.6B',
    paramNumber: 70.6,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Llama 3.3 Community License',
    releaseDate: '2025-12-10',
    downloadsCount: 2950000,
    likesCount: 92000,
    rating: 4.97,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 88.6,
      codingHumanEval: 89.4,
      mathGsm8k: 91.2,
      banglaNlpScore: 87.8,
      reasoningArc: 94.0,
      tokensPerSec: 38
    },
    minVramGb: 24.0,
    recommendedVramGb: 48.0,
    minCpuRamGb: 48.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '42.5 GB',
        bytes: 45634024448,
        filename: 'Llama-3.3-70B-Instruct-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Llama-3.3-70B-Instruct-GGUF/tree/main',
        recommendedVram: '24 GB VRAM + 32GB RAM offload',
        recommendedFor: 'Best balance of 70B intelligence and hardware efficiency',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '75.2 GB',
        bytes: 80745234432,
        filename: 'Llama-3.3-70B-Instruct-Q8_0.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Llama-3.3-70B-Instruct-GGUF/tree/main',
        recommendedVram: 'Dual RTX 3090/4090 / 64GB Unified Mac',
        recommendedFor: 'Maximum fidelity 8-bit precision'
      }
    ],
    ollamaCommand: 'ollama run llama3.3:70b',
    huggingFaceRepo: 'bartowski/Llama-3.3-70B-Instruct-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="bartowski/Llama-3.3-70B-Instruct-GGUF",
    filename="Llama-3.3-70B-Instruct-Q4_K_M.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'llama-3.3', 'meta', '70B'],
    features: ['128K context window', 'State-of-the-art 70B reasoning', 'Meta Llama 3.3 official architecture'],
    featuresBn: ['১২৮কে কনটেক্সট দৈর্ঘ্য', 'মেটা লামা ৩.৩ আর্কিটেকচার', 'হাই-স্পিড কোয়ান্ট'],
    trainingTokens: '15 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-llama-1',
        title: 'Full Stack Architecture Design',
        prompt: 'Design a distributed rate limiter in Redis with sliding window counter algorithm.',
        response: 'Here is the production-ready distributed sliding window counter in Redis with Lua script...',
        category: 'Architecture'
      }
    ]
  },
  {
    id: 'hf-qwen2-5-coder-32b-gguf',
    name: 'Qwen2.5-Coder-32B-Instruct-GGUF (unsloth)',
    slug: 'hf-qwen2-5-coder-32b-gguf',
    tagline: 'Top Coding LLM matching GPT-4o coding performance in 32B size',
    taglineBn: 'হাগিং ফেসের সেরা ওপেন সোর্স কোডিং মডেল ৩২বি জিজিইউএফ',
    description: 'Qwen2.5-Coder 32B Instruct quantized with Unsloth dynamic GGUF. Features unmatched coding accuracy, multi-file code editing, SQL queries, and bug fixing.',
    creator: 'unsloth',
    avatarIcon: 'Code2',
    baseArchitecture: 'Qwen 2.5 Coder',
    parameterSize: '32.5B',
    paramNumber: 32.5,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Apache 2.0',
    releaseDate: '2025-11-15',
    downloadsCount: 3120000,
    likesCount: 88400,
    rating: 4.96,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 86.4,
      codingHumanEval: 92.7,
      mathGsm8k: 89.5,
      banglaNlpScore: 84.0,
      reasoningArc: 91.0,
      tokensPerSec: 52
    },
    minVramGb: 16.0,
    recommendedVramGb: 24.0,
    minCpuRamGb: 32.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '19.8 GB',
        bytes: 21260087296,
        filename: 'Qwen2.5-Coder-32B-Instruct-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/Qwen2.5-Coder-32B-Instruct-GGUF/tree/main',
        recommendedVram: '16 GB - 24 GB VRAM',
        recommendedFor: 'Full stack development, agentic coding & debugging',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '34.6 GB',
        bytes: 37151047680,
        filename: 'Qwen2.5-Coder-32B-Instruct-Q8_0.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/Qwen2.5-Coder-32B-Instruct-GGUF/tree/main',
        recommendedVram: '32 GB VRAM / Mac Studio',
        recommendedFor: 'Top coding precision without quant loss'
      }
    ],
    ollamaCommand: 'ollama run qwen2.5-coder:32b',
    huggingFaceRepo: 'unsloth/Qwen2.5-Coder-32B-Instruct-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='qwen2.5-coder:32b',
    messages=[{'role': 'user', 'content': 'Write a high performance WebSocket server in Rust with Tokio'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'unsloth', 'qwen2.5-coder', 'coding', '32B'],
    features: ['Top rank coding benchmarks (HumanEval 92.7%)', 'Supports 92+ programming languages', '128K context window'],
    featuresBn: ['টপ র্যাংক কোডিং বেঞ্চমার্ক', '৯২+ প্রোগ্রামিং ল্যাঙ্গুয়েজ সাপোর্ট', '১২৮কে কনটেক্সট উইন্ডো'],
    trainingTokens: '18 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-qwen-1',
        title: 'Rust Tokio Async Server',
        prompt: 'Write an asynchronous TCP chat server in Rust using tokio and broadcast channels.',
        response: 'use tokio::net::TcpListener;\nuse tokio::sync::broadcast;\n...',
        category: 'Coding'
      }
    ]
  },
  {
    id: 'hf-qwq-32b-gguf',
    name: 'QwQ-32B-Preview-GGUF (bartowski)',
    slug: 'hf-qwq-32b-gguf',
    tagline: 'Qwen team\'s breakthrough reasoning model with extended reflection chains',
    taglineBn: 'কোয়েন টিমের ব্রেকথ্রু রিজনিং মডেল কিউডব্লিউকিউ ৩২বি',
    description: 'bartowski GGUF release of QwQ-32B-Preview. Uses reinforcement learning to self-reflect, explore alternative hypotheses, and solve complex mathematical riddles.',
    creator: 'bartowski',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Qwen QwQ Reasoning',
    parameterSize: '32.5B',
    paramNumber: 32.5,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '32K',
    license: 'Apache 2.0',
    releaseDate: '2025-11-28',
    downloadsCount: 1890000,
    likesCount: 64500,
    rating: 4.95,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 87.2,
      codingHumanEval: 88.6,
      mathGsm8k: 95.8,
      banglaNlpScore: 82.0,
      reasoningArc: 95.0,
      tokensPerSec: 48
    },
    minVramGb: 16.0,
    recommendedVramGb: 24.0,
    minCpuRamGb: 32.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '19.8 GB',
        bytes: 21260087296,
        filename: 'Qwen_QwQ-32B-Preview-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Qwen_QwQ-32B-GGUF/tree/main',
        recommendedVram: '16 GB VRAM',
        recommendedFor: 'Olympiad math, competitive coding, and deep deductive logic',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run qwq:32b',
    huggingFaceRepo: 'bartowski/Qwen_QwQ-32B-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="bartowski/Qwen_QwQ-32B-GGUF",
    filename="Qwen_QwQ-32B-Preview-Q4_K_M.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'qwq', 'reasoning', 'math'],
    features: ['Dynamic self-correction and reasoning loops', 'Olympiad-tier math performance', 'Full GGUF quantization series'],
    featuresBn: ['সেলফ-কারেকশন ও ডিপ রিজনিং', 'ম্যাথ অলিম্পিয়াড লেভেল সমাধান', 'হাগিং ফেস জিজিইউএফ'],
    trainingTokens: 'Math & Logic Reasoning RL',
    samplePrompts: [
      {
        id: 'hf-qwq-1',
        title: 'Number Theory Puzzle',
        prompt: 'Find all positive integers n such that n! + 5 is a perfect square.',
        response: 'Let us analyze case by case for n = 1, 2, 3, 4, 5...\nFor n ≥ 5, n! ends in 0, so n! + 5 ends in 5. A square ending in 5 must end in 25...',
        category: 'Mathematics'
      }
    ]
  },
  {
    id: 'hf-deepseek-v3-gguf',
    name: 'DeepSeek-V3-GGUF (unsloth)',
    slug: 'hf-deepseek-v3-gguf',
    tagline: 'Unsloth dynamic quants for the landmark 671B MoE base foundation model',
    taglineBn: '৬৭১বি ডিপসিক-ভি৩ এর আনস্লথ ডায়নামিক কোয়ান্টাইজড ভার্সন',
    description: 'DeepSeek-V3 671B Mixture-of-Experts foundation model quantized with Unsloth\'s dynamic quantization techniques for local llama.cpp and Ollama execution.',
    creator: 'unsloth',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'DeepSeek-V3 MoE',
    parameterSize: '671B (37B active)',
    paramNumber: 671.0,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'DeepSeek Model License (Commercial Free)',
    releaseDate: '2025-12-26',
    downloadsCount: 2750000,
    likesCount: 78000,
    rating: 4.98,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 88.5,
      codingHumanEval: 90.2,
      mathGsm8k: 89.3,
      banglaNlpScore: 86.2,
      reasoningArc: 93.4,
      tokensPerSec: 50
    },
    minVramGb: 24.0,
    recommendedVramGb: 48.0,
    minCpuRamGb: 64.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '392.0 GB (Full MoE)',
        bytes: 420906795000,
        filename: 'DeepSeek-V3-UD-IQ1_S.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/DeepSeek-V3-GGUF/tree/main',
        recommendedVram: '24 GB+ VRAM with offloading',
        recommendedFor: 'General knowledge, translation, and large-scale synthesis',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run deepseek-v3',
    huggingFaceRepo: 'unsloth/DeepSeek-V3-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="unsloth/DeepSeek-V3-GGUF",
    filename="DeepSeek-V3-UD-IQ1_S/DeepSeek-V3-UD-IQ1_S-00001-of-00006.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'unsloth', 'deepseek-v3', 'moe', '671B'],
    features: ['671B parameters with 37B active routing', 'Unsloth Dynamic ultra-low bit quants', 'Multi-Head Latent Attention (MLA)'],
    featuresBn: ['৬৭১বি প্যারামিটার ও ৩৭বি অ্যাক্টিভ রাউটিং', 'মাল্টি-হেড লেটেন্ট অ্যাটেনশন', 'হাগিং ফেস ট্রেন্ডিং'],
    trainingTokens: '14.8 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-v3-1',
        title: 'Multilingual Philosophy Essay',
        prompt: 'Discuss epistemological skepticism across Western and Eastern philosophical traditions.',
        response: 'Epistemological skepticism in Western philosophy traces from Pyrrhonism and Descartes...',
        category: 'Philosophy'
      }
    ]
  },
  {
    id: 'hf-deepseek-r1-distill-qwen-14b-gguf',
    name: 'DeepSeek-R1-Distill-Qwen-14B-GGUF (bartowski)',
    slug: 'hf-deepseek-r1-distill-qwen-14b-gguf',
    tagline: 'High performance 14B reasoning model fitting comfortably on 12GB-16GB GPUs',
    taglineBn: '১২-১৬জিবি জিপিইউ ফ্রেন্ডলি হাই-পারফরম্যান্স ডিপসিক-আর১ ১৪বি কোয়ান্ট',
    description: 'Qwen 2.5 14B base distilled with DeepSeek-R1 reasoning traces. Offers frontier-level math and logical deduction in a compact 14B footprint.',
    creator: 'bartowski',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Qwen2.5 + DeepSeek-R1 Distill',
    parameterSize: '14.7B',
    paramNumber: 14.7,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'MIT Open Weights',
    releaseDate: '2026-01-22',
    downloadsCount: 3400000,
    likesCount: 96000,
    rating: 4.96,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 85.8,
      codingHumanEval: 88.2,
      mathGsm8k: 93.9,
      banglaNlpScore: 83.5,
      reasoningArc: 92.8,
      tokensPerSec: 68
    },
    minVramGb: 10.0,
    recommendedVramGb: 16.0,
    minCpuRamGb: 24.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '9.2 GB',
        bytes: 9878424704,
        filename: 'DeepSeek-R1-Distill-Qwen-14B-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-14B-GGUF/tree/main',
        recommendedVram: '12 GB VRAM (RTX 3060/4060)',
        recommendedFor: 'Everyday local reasoning, STEM tutoring, and code analysis',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '15.7 GB',
        bytes: 16857743360,
        filename: 'DeepSeek-R1-Distill-Qwen-14B-Q8_0.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-14B-GGUF/tree/main',
        recommendedVram: '16 GB - 24 GB VRAM',
        recommendedFor: 'Maximum accuracy distillation'
      }
    ],
    ollamaCommand: 'ollama run deepseek-r1:14b',
    huggingFaceRepo: 'bartowski/DeepSeek-R1-Distill-Qwen-14B-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='deepseek-r1:14b',
    messages=[{'role': 'user', 'content': 'Calculate the integral of x * e^(2x) dx with full derivation'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'deepseek-r1', 'qwen', '14B'],
    features: ['14B parameter size fits consumer GPUs', 'Extracted R1 chain of thought reasoning', '128K context window'],
    featuresBn: ['কনজিউমার জিপিইউতে চলে (১২-১৬জিবি)', 'ডিপসিক-আর১ রিফ্লেকশন চেইন', '১২৮কে কনটেক্সট'],
    trainingTokens: 'Qwen 2.5 + R1 CoT Distillation',
    samplePrompts: [
      {
        id: 'hf-r1-14b-1',
        title: 'Calculus Integration by Parts',
        prompt: 'Evaluate ∫ x * sin(3x) dx step-by-step.',
        response: 'Using integration by parts formula ∫ u dv = uv - ∫ v du...\nLet u = x (so du = dx) and dv = sin(3x)dx (so v = -1/3 cos(3x))...',
        category: 'Mathematics'
      }
    ]
  },
  {
    id: 'hf-deepseek-r1-distill-llama-8b-gguf',
    name: 'DeepSeek-R1-Distill-Llama-8B-GGUF (unsloth)',
    slug: 'hf-deepseek-r1-distill-llama-8b-gguf',
    tagline: 'Best 8B reasoning model running seamlessly on 8GB RAM laptops & budget GPUs',
    taglineBn: 'বাজেট পিসি ও ৮জিবি ল্যাপটপের জন্য সেরা ডিপসিক-আর১ ৮বি রিজনিং মডেল',
    description: 'Meta Llama 3.1 8B fine-tuned on DeepSeek-R1 reasoning traces by Unsloth. Provides step-by-step deep reasoning on lightweight hardware.',
    creator: 'unsloth',
    avatarIcon: 'BrainCircuit',
    baseArchitecture: 'Llama 3.1 + DeepSeek-R1 Distill',
    parameterSize: '8.03B',
    paramNumber: 8.03,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Llama 3.1 Community License',
    releaseDate: '2026-01-24',
    downloadsCount: 4200000,
    likesCount: 112000,
    rating: 4.95,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 83.2,
      codingHumanEval: 84.5,
      mathGsm8k: 89.1,
      banglaNlpScore: 81.0,
      reasoningArc: 89.7,
      tokensPerSec: 85
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.9 GB',
        bytes: 5261334528,
        filename: 'DeepSeek-R1-Distill-Llama-8B-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF/tree/main',
        recommendedVram: '6 GB - 8 GB VRAM (GTX 1660 / RTX 3050)',
        recommendedFor: 'Fast local reasoning on budget hardware',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '8.5 GB',
        bytes: 9126805504,
        filename: 'DeepSeek-R1-Distill-Llama-8B-Q8_0.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF/tree/main',
        recommendedVram: '10 GB VRAM',
        recommendedFor: 'Lossless 8-bit quantization'
      }
    ],
    ollamaCommand: 'ollama run deepseek-r1:8b',
    huggingFaceRepo: 'unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF",
    filename="DeepSeek-R1-Distill-Llama-8B-Q4_K_M.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'unsloth', 'deepseek-r1', 'llama', '8B'],
    features: ['Fits inside 6GB VRAM GPUs (RTX 3050, 1660 Ti)', 'Super fast tokens per second', 'Llama 3.1 instruction base'],
    featuresBn: ['৬-৮জিবি জিপিইউতে চমৎকার গতি', 'স্টেপ বাই স্টেপ থিংকিং আউটপুট', '১২৮কে কনটেক্সট'],
    trainingTokens: 'DeepSeek-R1 CoT Traces',
    samplePrompts: [
      {
        id: 'hf-r1-8b-1',
        title: 'Logical Deduction',
        prompt: 'Three boxes are labeled Apples, Oranges, and Mixed. All labels are incorrect. You pick 1 fruit from Mixed. It is an apple. Label all boxes correctly.',
        response: 'Since the box labeled "Mixed" contains an apple, and its label is incorrect, it must be the APPLES box...',
        category: 'Logic'
      }
    ]
  },
  {
    id: 'hf-mistral-small-24b-gguf',
    name: 'Mistral-Small-24B-Instruct-2501-GGUF (bartowski)',
    slug: 'hf-mistral-small-24b-gguf',
    tagline: 'Mistral AI\'s newest release with enhanced reasoning and multi-turn roleplay',
    taglineBn: 'মিস্ট্রাল এআই-এর লেটেস্ট ২৪বি মডেলের হাই-কোয়ালিটি জিজিইউএফ',
    description: 'Mistral-Small-24B-Instruct-2501 quantized by bartowski. Delivers superior reasoning, low memory footprint, and concise formatting.',
    creator: 'bartowski',
    avatarIcon: 'Feather',
    baseArchitecture: 'Mistral Small 3',
    parameterSize: '24.0B',
    paramNumber: 24.0,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '32K',
    license: 'Apache 2.0',
    releaseDate: '2025-01-30',
    downloadsCount: 1620000,
    likesCount: 49000,
    rating: 4.93,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 85.0,
      codingHumanEval: 86.4,
      mathGsm8k: 88.0,
      banglaNlpScore: 80.0,
      reasoningArc: 90.5,
      tokensPerSec: 62
    },
    minVramGb: 14.0,
    recommendedVramGb: 20.0,
    minCpuRamGb: 32.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '14.6 GB',
        bytes: 15676702720,
        filename: 'Mistral-Small-24B-Instruct-2501-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Mistral-Small-24B-Instruct-2501-GGUF/tree/main',
        recommendedVram: '16 GB VRAM',
        recommendedFor: 'Coding, concise writing, and tool calling workflows',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run mistral-small:24b',
    huggingFaceRepo: 'bartowski/Mistral-Small-24B-Instruct-2501-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="bartowski/Mistral-Small-24B-Instruct-2501-GGUF",
    filename="Mistral-Small-24B-Instruct-2501-Q4_K_M.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'mistral', '24B'],
    features: ['Mistral 2501 latest release', 'Native tool use & function calling', 'Apache 2.0 commercial friendly'],
    featuresBn: ['মিস্ট্রাল এআই-এর লেটেস্ট আর্কিটেকচার', 'টুল ইউজ ও ফাংশন কলিং', 'অ্যাপাচি ২.০ লাইসেন্স'],
    trainingTokens: 'Mistral Specialized Multi-Domain Corpus',
    samplePrompts: [
      {
        id: 'hf-ms-1',
        title: 'Concise API Documentation',
        prompt: 'Generate OpenAPI 3.0 specification for a secure JWT authentication endpoint.',
        response: 'openapi: 3.0.3\ninfo:\n  title: Auth API\n  version: 1.0.0\npaths:\n  /api/auth/login:...',
        category: 'API Design'
      }
    ]
  },
  {
    id: 'hf-phi-4-14b-gguf',
    name: 'Microsoft-Phi-4-14B-GGUF (bartowski)',
    slug: 'hf-phi-4-14b-gguf',
    tagline: 'Microsoft\'s flagship synthetic data reasoner with unmatched math benchmarks',
    taglineBn: 'মাইক্রোসফট ফি-৪ ১৪বি ফ্ল্যাগশিপ সিন্থেটিক ডেটা রিজনিং মডেল',
    description: 'Microsoft Phi-4 14B GGUF quantized by bartowski. Trained with high-density synthetic reasoning textbooks to outperform models double its size in STEM and math.',
    creator: 'bartowski',
    avatarIcon: 'Cpu',
    baseArchitecture: 'Microsoft Phi-4',
    parameterSize: '14.7B',
    paramNumber: 14.7,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '16K',
    license: 'MIT License',
    releaseDate: '2025-12-18',
    downloadsCount: 2450000,
    likesCount: 71000,
    rating: 4.94,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 85.6,
      codingHumanEval: 87.0,
      mathGsm8k: 92.5,
      banglaNlpScore: 78.0,
      reasoningArc: 91.8,
      tokensPerSec: 72
    },
    minVramGb: 9.5,
    recommendedVramGb: 14.0,
    minCpuRamGb: 24.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '9.1 GB',
        bytes: 9771032576,
        filename: 'phi-4-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Phi-4-GGUF/tree/main',
        recommendedVram: '12 GB VRAM',
        recommendedFor: 'Advanced physics, math tutoring, and logic synthesis',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run phi4',
    huggingFaceRepo: 'bartowski/Phi-4-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='phi4',
    messages=[{'role': 'user', 'content': 'Explain quantum entanglement with mathematical formulation of Bell states'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'phi-4', 'microsoft', '14B'],
    features: ['High density synthetic textbook training', 'Top-tier STEM and scientific logic', 'MIT permissive open license'],
    featuresBn: ['মাইক্রোসফট সিন্থেটিক টেক্সটবুক ট্রেনিং', 'উচ্চমানের সাইন্স ও ম্যাথ স্কিল', 'এমআইটি ওপেন লাইসেন্স'],
    trainingTokens: '10 Trillion Synthetic & Organic Tokens',
    samplePrompts: [
      {
        id: 'hf-phi4-1',
        title: 'Quantum Mechanics Formulation',
        prompt: 'Formulate the 4 Bell states using Dirac ket notation.',
        response: '|Φ⁺⟩ = (|00⟩ + |11⟩)/√2\n|Φ⁻⟩ = (|00⟩ - |11⟩)/√2\n|Ψ⁺⟩ = (|01⟩ + |10⟩)/√2\n|Ψ⁻⟩ = (|01⟩ - |10⟩)/√2...',
        category: 'Physics'
      }
    ]
  },
  {
    id: 'hf-llama-3-2-3b-gguf',
    name: 'Llama-3.2-3B-Instruct-GGUF (bartowski)',
    slug: 'hf-llama-3-2-3b-gguf',
    tagline: 'Ultra-fast lightweight edge model running with blazing speed on laptops & phones',
    taglineBn: 'ল্যাপটপ ও ফোনে দ্রুত চলার মতো মেটা লামা ৩.২ ৩বি এজ মডেল',
    description: 'bartowski GGUF release of Meta Llama 3.2 3B Instruct. Delivers snappy multilingual responses, quick summaries, and low-latency chatbot experiences.',
    creator: 'bartowski',
    avatarIcon: 'Zap',
    baseArchitecture: 'Meta Llama 3.2',
    parameterSize: '3.21B',
    paramNumber: 3.21,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Llama 3.2 Community License',
    releaseDate: '2025-09-25',
    downloadsCount: 3890000,
    likesCount: 95000,
    rating: 4.91,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 74.2,
      codingHumanEval: 72.5,
      mathGsm8k: 77.0,
      banglaNlpScore: 76.5,
      reasoningArc: 81.0,
      tokensPerSec: 130
    },
    minVramGb: 0,
    recommendedVramGb: 4.0,
    minCpuRamGb: 8.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '2.0 GB',
        bytes: 2147483648,
        filename: 'Llama-3.2-3B-Instruct-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF/tree/main',
        recommendedVram: 'Zero VRAM required (4GB CPU RAM)',
        recommendedFor: 'Edge devices, mobile assistants & instant terminal replies',
        isPopular: true
      },
      {
        format: 'GGUF Q8_0',
        size: '3.4 GB',
        bytes: 3650722201,
        filename: 'Llama-3.2-3B-Instruct-Q8_0.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF/tree/main',
        recommendedVram: '4 GB VRAM / 8 GB RAM',
        recommendedFor: 'Full 8-bit precision on edge'
      }
    ],
    ollamaCommand: 'ollama run llama3.2:3b',
    huggingFaceRepo: 'bartowski/Llama-3.2-3B-Instruct-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='llama3.2:3b',
    messages=[{'role': 'user', 'content': 'Summarize the advantages of edge computing in 3 bullet points'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'llama-3.2', 'edge', '3B'],
    features: ['Only 2.0 GB disk size', '130+ tokens per second on CPU', '128K context window'],
    featuresBn: ['মাত্র ২.০ জিবি ডিস্ক সাইজ', 'সিপিইউতে ১৩০+ টোকেন/সেকেন্ড গতি', '১২৮কে কনটেক্সট'],
    trainingTokens: '9 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-l32-1',
        title: 'Rapid Text Summarization',
        prompt: 'Summarize the difference between synchronous and asynchronous I/O in simple terms.',
        response: 'Synchronous I/O halts execution until the operation completes. Asynchronous I/O registers a callback and continues...',
        category: 'General'
      }
    ]
  },
  {
    id: 'hf-gemma-2-9b-it-gguf',
    name: 'Gemma-2-9B-IT-GGUF (unsloth)',
    slug: 'hf-gemma-2-9b-it-gguf',
    tagline: 'Google DeepMind\'s premier 9B open model with sliding window attention',
    taglineBn: 'গুগল ডিপমাইন্ডের জেম্মা-২ ৯বি মডেলের আনস্লথ জিজিইউএফ কোয়ান্ট',
    description: 'Google Gemma 2 9B Instruction-Tuned model quantized with Unsloth dynamic GGUF. Features high MMLU general knowledge, clean writing, and ethical safety guardrails.',
    creator: 'unsloth',
    avatarIcon: 'Sparkles',
    baseArchitecture: 'Google Gemma 2',
    parameterSize: '9.24B',
    paramNumber: 9.24,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'Gemma Open Terms of Use',
    releaseDate: '2025-07-15',
    downloadsCount: 2900000,
    likesCount: 82000,
    rating: 4.93,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 82.4,
      codingHumanEval: 79.5,
      mathGsm8k: 84.0,
      banglaNlpScore: 82.0,
      reasoningArc: 88.0,
      tokensPerSec: 80
    },
    minVramGb: 6.5,
    recommendedVramGb: 10.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '5.8 GB',
        bytes: 6227702528,
        filename: 'gemma-2-9b-it-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/unsloth/gemma-2-9b-it-GGUF/tree/main',
        recommendedVram: '8 GB VRAM',
        recommendedFor: 'Creative writing, general knowledge QA, and factual synthesis',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run gemma2:9b',
    huggingFaceRepo: 'unsloth/gemma-2-9b-it-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='gemma2:9b',
    messages=[{'role': 'user', 'content': 'Explain the concept of entropy in information theory'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'unsloth', 'gemma-2', 'google', '9B'],
    features: ['Google DeepMind Gemma 2 architecture', 'Sliding window local attention', 'High MMLU reasoning score'],
    featuresBn: ['গুগল ডিপমাইন্ড আর্কিটেকচার', 'স্লাইডিং উইন্ডো লোকাল অ্যাটেনশন', 'হাগিং ফেস জিজিইউএফ'],
    trainingTokens: '8 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-gemma-1',
        title: 'Information Theory',
        prompt: 'Define Shannon entropy mathematically and describe its physical intuition.',
        response: 'Shannon entropy H(X) = -Σ P(x) log2 P(x). It quantifies the expected amount of information...',
        category: 'Science'
      }
    ]
  },
  {
    id: 'hf-smollm2-1-7b-gguf',
    name: 'SmolLM2-1.7B-Instruct-GGUF (bartowski)',
    slug: 'hf-smollm2-1-7b-gguf',
    tagline: 'Hugging Face official compact powerhouse for on-device local agents',
    taglineBn: 'হাগিং ফেসের অফিসিয়াল স্মল এলএলএম ২ ১.৭বি অন-ডিভাইস মডেল',
    description: 'SmolLM2 1.7B Instruct by Hugging Face, quantized by bartowski. Trained on curated educational web corpora (FineWeb-Edu, Cosmopedia v2) to deliver immense reasoning in under 1.2GB memory.',
    creator: 'bartowski',
    avatarIcon: 'Bot',
    baseArchitecture: 'SmolLM2 Transformer',
    parameterSize: '1.71B',
    paramNumber: 1.71,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '8K',
    license: 'Apache 2.0',
    releaseDate: '2025-11-05',
    downloadsCount: 2150000,
    likesCount: 57000,
    rating: 4.90,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    benchmarks: {
      mmlu: 71.0,
      codingHumanEval: 68.2,
      mathGsm8k: 73.5,
      banglaNlpScore: 71.0,
      reasoningArc: 78.0,
      tokensPerSec: 160
    },
    minVramGb: 0,
    recommendedVramGb: 2.0,
    minCpuRamGb: 4.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '1.1 GB',
        bytes: 1181116006,
        filename: 'SmolLM2-1.7B-Instruct-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/SmolLM2-1.7B-Instruct-GGUF/tree/main',
        recommendedVram: 'Runs on 2GB RAM / CPU',
        recommendedFor: 'Background tasks, quick summarization & on-device agents',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run smollm2:1.7b',
    huggingFaceRepo: 'bartowski/SmolLM2-1.7B-Instruct-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='smollm2:1.7b',
    messages=[{'role': 'user', 'content': 'Draft a professional cold email introducing a developer tool'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'smollm2', 'huggingface', 'compact'],
    features: ['Ultra-compact 1.1 GB size', '160+ tokens/sec on simple CPU', 'Hugging Face official dataset training'],
    featuresBn: ['মাত্র ১.১ জিবি সাইজ', '১৬০+ টোকেন/সেকেন্ড গতি', 'হাগিং ফেস অফিসিয়াল ডেটাসেট'],
    trainingTokens: 'FineWeb-Edu 11 Trillion Tokens',
    samplePrompts: [
      {
        id: 'hf-smol-1',
        title: 'Professional Email Writing',
        prompt: 'Draft a polite follow up email regarding a job application.',
        response: 'Subject: Following Up: Application for [Position Title] - [Your Name]\n\nDear [Hiring Manager Name],...',
        category: 'Communication'
      }
    ]
  },
  {
    id: 'hf-hermes-3-llama-3-1-8b-gguf',
    name: 'Hermes-3-Llama-3.1-8B-GGUF (bartowski)',
    slug: 'hf-hermes-3-llama-3-1-8b-gguf',
    tagline: 'Nous Research flagship open agent model for complex JSON structured outputs',
    taglineBn: 'নৌস রিসার্চের হার্মিস-৩ ৮বি এজেন্ট ও স্ট্রাকচার্ড আউটপুট মডেল',
    description: 'Hermes 3 by Nous Research on Llama 3.1 8B, quantized by bartowski. Highly acclaimed for agentic workflows, multi-turn reasoning, and steerable persona generation.',
    creator: 'bartowski',
    avatarIcon: 'Bot',
    baseArchitecture: 'Hermes 3 Llama 3.1',
    parameterSize: '8.03B',
    paramNumber: 8.03,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'Llama 3.1 Community License',
    releaseDate: '2025-08-20',
    downloadsCount: 2600000,
    likesCount: 79000,
    rating: 4.94,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 82.8,
      codingHumanEval: 82.0,
      mathGsm8k: 85.6,
      banglaNlpScore: 79.5,
      reasoningArc: 89.0,
      tokensPerSec: 85
    },
    minVramGb: 5.5,
    recommendedVramGb: 8.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.9 GB',
        bytes: 5261334528,
        filename: 'Hermes-3-Llama-3.1-8B-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Hermes-3-Llama-3.1-8B-GGUF/tree/main',
        recommendedVram: '6 GB - 8 GB VRAM',
        recommendedFor: 'Agentic function calling, custom character bots & structured JSON',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run hermes3:8b',
    huggingFaceRepo: 'bartowski/Hermes-3-Llama-3.1-8B-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="bartowski/Hermes-3-Llama-3.1-8B-GGUF",
    filename="Hermes-3-Llama-3.1-8B-Q4_K_M.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'hermes-3', 'nous-research', 'agent'],
    features: ['Nous Research tool-calling dataset', 'Advanced JSON structured generation', '128K context window'],
    featuresBn: ['নৌস রিসার্চ টুল কলিং ডেটাসেট', 'স্ট্রাকচার্ড জেএসন জেনারেশন', '১২৮কে কনটেক্সট উইন্ডো'],
    trainingTokens: 'Nous Hermes 3 Agentic Corpus',
    samplePrompts: [
      {
        id: 'hf-hermes-1',
        title: 'Structured Function Call Schema',
        prompt: 'Extract user intent and query parameters into a JSON tool call schema.',
        response: '{\n  "name": "search_database",\n  "arguments": {\n    "query": "revenue Q3 2025",\n    "filters": {"region": "apac"}\n  }\n}',
        category: 'Agent Tools'
      }
    ]
  },
  {
    id: 'hf-command-r-plus-gguf',
    name: 'Command-R-Plus-08-2024-GGUF (bartowski)',
    slug: 'hf-command-r-plus-gguf',
    tagline: 'Cohere\'s enterprise-grade 104B multilingual RAG and tool orchestration model',
    taglineBn: 'কোহিয়ারের ১০৪বি এন্টারপ্রাইজ মাল্টিলিঙ্গুয়াল র্যাগ ও টুল মডেল',
    description: 'Command R+ 104B GGUF quantized by bartowski. Engineered specifically for enterprise RAG, high-precision citation grounded answers, and multi-step tool execution across 23 languages.',
    creator: 'bartowski',
    avatarIcon: 'Layers',
    baseArchitecture: 'Cohere Command R+',
    parameterSize: '104B',
    paramNumber: 104.0,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '128K',
    license: 'CC BY-NC 4.0 / Cohere Open Weights',
    releaseDate: '2025-08-30',
    downloadsCount: 1450000,
    likesCount: 52000,
    rating: 4.96,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 88.0,
      codingHumanEval: 84.5,
      mathGsm8k: 89.0,
      banglaNlpScore: 88.5,
      reasoningArc: 92.0,
      tokensPerSec: 30
    },
    minVramGb: 32.0,
    recommendedVramGb: 64.0,
    minCpuRamGb: 64.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '62.8 GB',
        bytes: 67431202816,
        filename: 'Command-R-Plus-08-2024-Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/bartowski/Command-R-Plus-08-2024-GGUF/tree/main',
        recommendedVram: '48 GB VRAM / Mac Studio (64GB)',
        recommendedFor: 'Enterprise RAG pipelines and multi-document synthesis',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run command-r-plus',
    huggingFaceRepo: 'bartowski/Command-R-Plus-08-2024-GGUF',
    pythonSnippet: `import ollama
response = ollama.chat(
    model='command-r-plus',
    messages=[{'role': 'user', 'content': 'Synthesize key insights from enterprise audit report'}]
)
print(response['message']['content'])`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'bartowski', 'command-r-plus', 'cohere', 'rag', '104B'],
    features: ['Engineered for Grounded RAG with citations', '23+ languages fluent support', '128K context window'],
    featuresBn: ['গ্রাউন্ডেড র্যাগ ও সাইটেশন যুক্ত উত্তর', '২৩+ ভাষায় দক্ষ', '১২৮কে কনটেক্সট উইন্ডো'],
    trainingTokens: 'Cohere Multilingual Web Corpus',
    samplePrompts: [
      {
        id: 'hf-cr-1',
        title: 'Multi-Document Grounded Synthesis',
        prompt: 'Synthesize quarterly earnings and risks with explicit citation references.',
        response: 'Based on Doc A (p. 4), Q3 revenue increased by 14% [1]. However, operating margins contracted [2]...',
        category: 'Enterprise RAG'
      }
    ]
  },
  {
    id: 'hf-mistral-7b-v02-gguf',
    name: 'Mistral-7B-Instruct-v0.2-GGUF (TheBloke)',
    slug: 'hf-mistral-7b-v02-gguf',
    tagline: 'All-time most downloaded 7B model on Hugging Face with 32K context',
    taglineBn: 'হাগিং ফেসের সর্বকালের অন্যতম সর্বাধিক ডাউনলোড হওয়া ৭বি মডেল',
    description: 'The iconic Mistral 7B Instruct v0.2 quantized by TheBloke. Provides rock-solid reliability, fast inference, and broad compatibility with any GGUF app.',
    creator: 'TheBloke',
    avatarIcon: 'Feather',
    baseArchitecture: 'Mistral 7B v0.2',
    parameterSize: '7.24B',
    paramNumber: 7.24,
    category: 'huggingface-llm',
    modelScope: 'public',
    contextWindow: '32K',
    license: 'Apache 2.0',
    releaseDate: '2024-03-24',
    downloadsCount: 5200000,
    likesCount: 160000,
    rating: 4.95,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    benchmarks: {
      mmlu: 79.5,
      codingHumanEval: 75.0,
      mathGsm8k: 78.4,
      banglaNlpScore: 78.0,
      reasoningArc: 84.5,
      tokensPerSec: 90
    },
    minVramGb: 4.5,
    recommendedVramGb: 6.0,
    minCpuRamGb: 16.0,
    quantizations: [
      {
        format: 'GGUF Q4_K_M',
        size: '4.37 GB',
        bytes: 4692742144,
        filename: 'mistral-7b-instruct-v0.2.Q4_K_M.gguf',
        downloadUrl: 'https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/tree/main',
        recommendedVram: '6 GB VRAM',
        recommendedFor: 'Reliable general assistance, creative writing & fast QA',
        isPopular: true
      }
    ],
    ollamaCommand: 'ollama run mistral:7b-instruct',
    huggingFaceRepo: 'TheBloke/Mistral-7B-Instruct-v0.2-GGUF',
    pythonSnippet: `from llama_cpp import Llama
llm = Llama.from_pretrained(
    repo_id="TheBloke/Mistral-7B-Instruct-v0.2-GGUF",
    filename="mistral-7b-instruct-v0.2.Q4_K_M.gguf",
    n_ctx=8192
)`,
    tags: ['HuggingFace', 'trending', 'GGUF', 'TheBloke', 'mistral-7b', 'apache-2.0'],
    features: ['32K sliding window context', 'Over 5.2M Hugging Face downloads', 'Apache 2.0 full commercial license'],
    featuresBn: ['৩২কে কনটেক্সট উইন্ডো', '৫.২ মিলিয়নের বেশি ডাউনলোড', 'অ্যাপাচি ২.০ লাইসেন্স'],
    trainingTokens: 'Mistral AI Foundation Corpus',
    samplePrompts: [
      {
        id: 'hf-mistral7b-1',
        title: 'Creative Storytelling',
        prompt: 'Write an atmospheric cyberpunk prologue set in a rainy neon metropolis.',
        response: 'Acid rain hissed against the carbon-fiber eaves of Neo-Kowloon as holographic billboards flickered...',
        category: 'Creative'
      }
    ]
  }
];

export const TOTAL_STATS = {
  totalModels: MODELS_DATA.length,
  totalDownloads: '82.5M+',
  totalTokensTrained: '120+ Trillion',
  freePercentage: '100% Free Open Weights',
  license: 'Open-Source & Commercial-Friendly'
};
