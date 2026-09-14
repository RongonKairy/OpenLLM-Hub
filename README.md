```text
 ██████╗ ██████╗ ███████╗███╗   ██╗  ██╗     ██╗     ███╗   ███╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║  ██║     ██║     ████╗ ████║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║  ██║     ██║     ██╔████╔██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║  ██║     ██║     ██║╚██╔╝██║
╚██████╔╝██║     ███████╗██║ ╚████║  ███████╗███████╗██║ ╚═╝ ██║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝     ╚═╝

██╗  ██╗██╗   ██╗██████╗
██║  ██║██║   ██║██╔══██╗
███████║██║   ██║██████╔╝
██╔══██║██║   ██║██╔══██╗
██║  ██║╚██████╔╝██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═════╝

──────────────────────────────────────────────────────────────────────────────
⚡ OPENLLM HUB • OPEN-SOURCE AI • LLM DISCOVERY
──────────────────────────────────────────────────────────────────────────────

```

<p align="center">
  <img src="https://img.shields.io/badge/Open-Source-orange?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/GGUF-Supported-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Safetensors-Supported-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Ollama-Supported-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/100%25-Free-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-red?style=for-the-badge" />
</p>

<p align="center">
  <b>All-in-one open-source LLM hub to explore, test, benchmark,<br>
  and download custom AI models for free.</b>
</p>

<p align="center">
  <a href="https://openllm-hub.vercel.app/"><b>🌐 Live Demo → openllm-hub.vercel.app</b></a>
</p>

---

## ✨ What is OpenLLM Hub?

**OpenLLM Hub** is a free, open-source platform to explore, test, benchmark, and download custom fine-tuned AI language models. It supports multiple model formats including **GGUF**, **Safetensors**, and **Ollama** — all available for free download.

Whether you're a researcher, developer, or AI enthusiast — OpenLLM Hub gives you access to custom fine-tuned LLMs optimized for Bengali NLP, Coding, Reasoning, and Edge devices.

---

## 🚀 Features

- 🔍 **Explore Models** — Browse a curated collection of custom fine-tuned LLMs
- 🧪 **Test Models** — Try out models directly before downloading
- 📊 **Benchmark** — Compare model performance side by side
- 📥 **Free Downloads** — Download models in GGUF, Safetensors, and Ollama formats
- 🌏 **Bengali NLP** — Custom models fine-tuned for Bengali language processing
- 💻 **Coding Models** — Specialized models for code generation and completion
- 🧠 **Reasoning Models** — Advanced reasoning and problem-solving models
- 📱 **Edge Device Models** — Lightweight models optimized for low-resource devices
- 💰 **100% Free** — No subscription, no signup required

---

## 📦 Supported Model Formats

| Format | Description | Best For |
|--------|-------------|----------|
| 🔷 **GGUF** | Optimized quantized format | Running locally with llama.cpp |
| 🟣 **Safetensors** | Safe, fast tensor format | Python/HuggingFace projects |
| 🦙 **Ollama** | Ready-to-run Ollama format | Easy local deployment |

---

## 🧠 Model Categories

| Category | Description |
|----------|-------------|
| 🌏 **Bengali NLP** | Fine-tuned for Bengali language understanding and generation |
| 💻 **Coding** | Optimized for code generation, completion, and debugging |
| 🧠 **Reasoning** | Advanced logical reasoning and problem solving |
| 📱 **Edge Devices** | Lightweight models for low-RAM and mobile devices |

---

## 🦙 How to Use Downloaded Models

### With Ollama
```bash
# Pull and run directly
ollama run <model-name>
```

### With llama.cpp (GGUF)
```bash
./llama-cli -m model.gguf -p "Your prompt here"
```

### With Python (Safetensors)
```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("model-path")
tokenizer = AutoTokenizer.from_pretrained("model-path")
```

---

## 💻 Run Locally

### Prerequisites

#### 1. 🟢 Node.js (v18 or higher)
👉 [**Download Node.js**](https://nodejs.org/en/download) — Choose the **LTS** version

#### 2. 💻 VS Code (Recommended)
👉 [**Download VS Code**](https://code.visualstudio.com/download)

---

### Setup Steps

**Step 1** — Download the project:

Click the green **"Code"** button → **"Download ZIP"** → Extract the ZIP file

**Step 2** — Open in VS Code:

Open VS Code → **File** → **Open Folder** → Select the extracted folder

**Step 3** — Install dependencies:
```bash
npm install
```

**Step 4** — Start the app:
```bash
npm run dev
```

**Step 5** — Open your browser:
```
http://localhost:5173
```

---

### 🤖 For Non-Coders — Use VS Code AI Assistant

1. Install **Node.js** and **VS Code** from the links above
2. Download the project ZIP → Extract → Open VS Code → Open the folder
3. Press **Ctrl + Shift + P** → type **"Chat"** → open AI assistant
4. Paste this prompt:

```
I downloaded OpenLLM Hub. Please help me:
1. Run: npm install
2. Run: npm run dev
3. Open http://localhost:5173 in my browser
Do each step one by one and fix any errors.
```

---

## 🌐 Deploy for Free

| Platform | Steps |
|----------|-------|
| **Vercel** | Connect GitHub repo → Auto-deploy instantly |
| **Netlify** | Connect GitHub repo → Auto-deploy instantly |
| **GitHub Pages** | Run `npm run build` → Upload `dist/` folder |

---

## ❓ FAQ

**Q: Is OpenLLM Hub really free?**
> Yes! Completely free. All models are available for free download, no account needed.

**Q: What is GGUF format?**
> GGUF is an optimized quantized model format for running LLMs locally with llama.cpp. It's fast, efficient, and works on regular computers without a GPU.

**Q: Can I use these models commercially?**
> It depends on each model's individual license. Check the model page for specific license details.

**Q: Do I need a GPU to run these models?**
> Not necessarily! Edge device models are designed to run on CPU-only systems. GGUF models with quantization also work well on regular computers.

**Q: How do I run models with Ollama?**
> Install Ollama from [ollama.com](https://ollama.com), then use `ollama run <model-name>` in your terminal.

---

## 📜 License

This project is licensed under the **MIT License** — free to use, share, and modify.

---

## 👨‍💻 Made by

**Rongon Kairy** — [@RongonKairy](https://github.com/RongonKairy)

> ⭐ If you like this project, please give it a **star** on GitHub!
READMEEOF
