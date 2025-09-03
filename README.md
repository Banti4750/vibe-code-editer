# 🚀 ZenG AI

**Debug, Preview, and Build with AI Intelligence**

ZenG AI is a powerful development environment that combines the best of modern web technologies with artificial intelligence to streamline your coding workflow. Write, debug, and preview your projects seamlessly with AI-powered assistance.

## ✨ Features

### 🧠 **AI-Powered Development**
- **Intelligent Debugging** - AI analyzes your code and suggests fixes for bugs and performance issues
- **Smart Code Completion** - Context-aware suggestions powered by Ollama API
- **Automated Code Review** - Get instant feedback on code quality and best practices
- **Natural Language to Code** - Describe what you want and let AI generate the implementation

### 🔧 **Powerful Development Environment**
- **Monaco Editor** - VS Code-quality editing experience in the browser
- **Live Preview** - See your changes instantly with hot reload
- **WebContainer Integration** - Full Node.js environment running in the browser
- **Multi-language Support** - JavaScript, TypeScript, React, and more

### 🎨 **Modern UI/UX**
- **Tailwind CSS** - Beautiful, responsive design system
- **Dark/Light Mode** - Customizable themes for comfortable coding
- **Split Panes** - Flexible layout with resizable panels
- **Keyboard Shortcuts** - Boost productivity with intuitive hotkeys

### 🔐 **Secure Authentication**
- **NextAuth.js** - Secure authentication with multiple providers
- **Session Management** - Persistent login state across devices
- **User Profiles** - Personalized coding environment and preferences

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Monaco Editor** | Advanced code editor |
| **WebContainer** | Browser-based Node.js runtime |
| **NextAuth.js** | Authentication system |
| **Ollama API** | Local AI model integration |
| **Framer Motion** | Smooth animations |
| **Zustand** | State management |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Ollama installed locally

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zeng-ai.git
   cd zeng-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local`:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   OLLAMA_API_URL=http://localhost:11434
   DATABASE_URL=your-database-url
   ```

4. **Start Ollama service**
   ```bash
   ollama serve
   ollama pull codellama  # or your preferred model
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Creating a New Project
1. Click **"New Project"** on the dashboard
2. Choose your template (React, Vue, Vanilla JS, etc.)
3. Start coding with AI assistance

### AI Debugging
- Select problematic code
- Press `Ctrl+Shift+D` (or `Cmd+Shift+D` on Mac)
- Review AI suggestions and apply fixes

### Live Preview
- Your changes appear instantly in the preview pane
- Full browser DevTools integration
- Mobile responsive testing

## 🔌 API Integration

### Ollama Setup
```javascript
// Configure your preferred model
const MODEL_CONFIG = {
  model: 'codellama:13b',
  temperature: 0.1,
  max_tokens: 2048
}
```

### Custom AI Prompts
```javascript
// Example: Custom debugging prompt
const debugPrompt = `
Analyze this code for bugs and performance issues:
${selectedCode}

Focus on:
- Syntax errors
- Logic issues  
- Performance optimizations
- Best practices
`
```

## 🎯 Roadmap

- [ ] **Multi-user Collaboration** - Real-time collaborative editing
- [ ] **Git Integration** - Version control within the IDE
- [ ] **Plugin System** - Extensible architecture for custom tools
- [ ] **Cloud Deployment** - One-click deployment to popular platforms
- [ ] **Mobile App** - Native mobile development environment
- [ ] **Advanced AI Models** - Support for GPT-4, Claude, and custom models

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- [Ollama](https://ollama.ai/) for local AI model integration
- [WebContainer](https://webcontainers.io/) for browser-based Node.js runtime
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the excellent code editing experience
- [Vercel](https://vercel.com/) for Next.js and deployment platform

## 📞 Support

- 📧 Email: support@zeng-ai.dev
- 💬 Discord: [Join our community](https://discord.gg/zeng-ai)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/zeng-ai/issues)
- 📖 Docs: [Documentation](https://docs.zeng-ai.dev)

---

<div align="center">
  <strong>Built with ❤️ by the ZenG AI Team</strong>
  <br>
  <sub>Making AI-powered development accessible to everyone</sub>
</div>
