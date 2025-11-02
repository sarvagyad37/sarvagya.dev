"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Terminal, Code, BookOpen, Coffee, Gamepad2, Music, Camera, Zap, Github, Linkedin, Mail, ArrowRight, GraduationCap, Trophy, Award, Menu, X } from "lucide-react";
import Image from "next/image";

interface Room {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  path: string;
}

const rooms: Room[] = [
  { id: "home", name: "Home", icon: <Coffee />, description: "Welcome, make yourself at home", path: "/" },
  { id: "about", name: "About Me", icon: <Code />, description: "Who I am, what I do", path: "/about" },
  { id: "projects", name: "Terminal", icon: <Terminal />, description: "Where I code", path: "/projects" },
  { id: "academic", name: "Papers", icon: <BookOpen />, description: "Where I research", path: "/academic" },
  { id: "hobbies", name: "Playroom", icon: <Gamepad2 />, description: "What I do for fun", path: "/hobbies" },
  { id: "blog", name: "Writings", icon: <Zap />, description: "Where I write", path: "/blog" },
];

const roomContexts: Record<string, { title: string; subtitle: string; description: string }> = {
  home: {
    title: "Home",
    subtitle: "Welcome to sarvagya.dev",
    description: "This is where I hang out. Grab a coffee, explore around, and make yourself comfortable."
  },
  about: {
    title: "About Me",
    subtitle: "Who I am and what I'm about",
    description: "I'm a developer and researcher working at the intersection of quantum physics, distributed systems, machine learning, and quantitative finance. Here's my story (or at least parts of it)."
  },
  projects: {
    title: "Terminal",
    subtitle: "Where I code",
    description: "My coding workspace. Projects spanning quantum transport simulators, distributed systems, machine learning pipelines, and algorithmic trading systems."
  },
  academic: {
    title: "Papers",
    subtitle: "Where I research",
    description: "My research space. Academic work, papers, and research contributions in computational physics, quantum transport, and computational methods."
  },
  hobbies: {
    title: "Playroom",
    subtitle: "What I do when I'm not coding",
    description: "Music, photography, gaming, and other interests that provide balance. Sometimes you need to step away from the terminal."
  },
  blog: {
    title: "Writings",
    subtitle: "Where I write",
    description: "My writing space. Technical articles, research insights, and occasional thoughts on development, machine learning, and quantitative finance."
  },
};

export function Navigation() {
  const pathname = usePathname();
  const currentRoom = pathname === "/" ? "home" : pathname.slice(1);
  const currentRoomInfo = rooms.find(r => r.path === pathname) || rooms[0];
  const currentContext = roomContexts[currentRoom] || roomContexts.home;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left side - Command prompt */}
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0 shadow-sm shadow-green-500/50"></div>
              <span className="font-mono text-xs sm:text-sm text-muted-foreground hidden sm:inline">sarvagya@dev:~$</span>
              <span className="font-mono text-xs sm:text-sm text-foreground truncate">cd {pathname === "/" ? "/home" : pathname}</span>
              <span className="hidden lg:inline text-xs text-muted-foreground ml-2">→</span>
              <span className="hidden lg:inline text-xs text-muted-foreground">Enter {currentRoomInfo.name}</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
              {rooms.map((room) => {
                const isActive = pathname === room.path;
                return (
                  <Link
                    key={room.id}
                    href={room.path}
                    className={`px-2.5 sm:px-3 py-1.5 text-xs font-mono transition-all duration-200 whitespace-nowrap flex-shrink-0 focus-ring ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-border"
                    }`}
                    title={`Enter ${room.name} - ${room.description}`}
                  >
                    {room.name}
                  </Link>
                );
              })}
              <a
                href="https://github.com/sarvagyad37"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 p-1.5 text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg md:hidden">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {rooms.map((room) => {
                const isActive = pathname === room.path;
                return (
                  <Link
                    key={room.id}
                    href={room.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-mono transition-all duration-200 rounded ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <div className="font-semibold">{room.name}</div>
                    <div className="text-xs mt-0.5 opacity-80">{room.description}</div>
                  </Link>
                );
              })}
              <a
                href="https://github.com/sarvagyad37"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export function WelcomeRoom({ projects, publications }: { 
  projects?: Array<{ title: string; description: string[]; url: string; tags: string[] }>;
  publications?: Array<{ title: string; venue: string; description: string[]; links: { label: string; url: string }[] }>;
}) {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState("");
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [commandHistory, setCommandHistory] = useState<Array<{ command: string; timestamp: number }>>([]);
  const [status, setStatus] = useState("");
  const [greeting, setGreeting] = useState("");
  const [dailyMantra, setDailyMantra] = useState("");
  
  const welcomeText = `Hey! I'm Sarvagya. I code quantum simulations, train ML models, and trade 0DTE options. When I'm not debugging distributed systems or backtesting strategies, I'm probably building something weird.

I write code, run experiments, break things, fix them, repeat. Sometimes I publish papers, sometimes I deploy models, sometimes I just build random projects because why not. Currently in New Jersey, drinking matcha, listening to music, and definitely coding.`;

  // Mantras for daily rotation
  const mantras = [
    "small improvements add up",
    "enjoy the process",
    "think before you code",
    "break things, learn, repeat",
    "code with intention",
    "build for fun, build for impact",
    "backtest before you deploy",
    "overfitting is a feature, not a bug (just kidding)",
    "trust the model, but verify the results",
    "greed is good, but risk management is better",
    "don't trade on emotion (easier said than done)",
  ];

  // Random status messages
  const statusMessages = [
    "● Available",
    "● Coding",
    "● In the zone",
    "● Probably debugging",
    "● Simulating electrons",
    "● Drinking coffee",
    "● Late night coding",
    "● Reading papers",
    "● Training models",
    "● Backtesting strategies",
    "● Analyzing market data",
    "● Debugging ML pipelines",
    "● Calculating Greeks",
    "● Optimizing hyperparameters",
    "● Probably overfitting",
    "● Paper trading (with real anxiety)",
  ];

  // Get status based on time
  const getStatusBasedOnTime = () => {
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 6) {
      return "● Probably sleeping";
    } else if (hour >= 6 && hour < 9) {
      return "● Early morning coding";
    } else if (hour >= 9 && hour < 12) {
      return "● Available";
    } else if (hour >= 12 && hour < 14) {
      return "● Probably eating";
    } else if (hour >= 14 && hour < 18) {
      return "● Coding";
    } else if (hour >= 18 && hour < 22) {
      return "● Late night coding";
    }
    return "● Available";
  };

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 17) {
      return "afternoon";
    } else if (hour >= 17 && hour < 21) {
      return "evening";
    } else {
      return "late night";
    }
  };

  // Set daily mantra (based on date)
  useEffect(() => {
    const today = new Date().getDate();
    const mantraIndex = today % mantras.length;
    setDailyMantra(mantras[mantraIndex]);
  }, []);

  // Update time with timezone and status
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = now.toLocaleTimeString('en-US', { 
        hour12: false,
        timeZone: 'America/New_York'
      });
      const tz = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }).includes('EDT') ? 'EDT' : 'EST';
      setCurrentTime(`${estTime} ${tz}`);
      setStatus(getStatusBasedOnTime());
      setGreeting(getGreeting());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Terminal command outputs
  const commandOutputs: Record<string, string[]> = {
    'whoami': ['sarvagya'],
    'pwd': ['~/dev/sarvagya.dev'],
    'location': ['New Jersey, USA 🗽'],
    'ls -la': [
      'total 42',
      'drwxr-xr-x  8 sarvagya sarvagya   256 Jan 20 2025  .',
      'drwxr-xr-x  3 sarvagya sarvagya    96 Jan 20 2025  ..',
      '-rw-r--r--  1 sarvagya sarvagya  1024 Jan 20 2025  projects/',
      '-rw-r--r--  1 sarvagya sarvagya   512 Jan 20 2025  publications/',
      '-rw-r--r--  1 sarvagya sarvagya   256 Jan 20 2025  hobbies/',
      '-rw-r--r--  1 sarvagya sarvagya   128 Jan 20 2025  blog/',
      '-rw-r--r--  1 sarvagya sarvagya  2048 Jan 20 2025  .env',
    ],
    'cat .env': [
      'NODE_ENV=development',
      'LOCATION=New Jersey',
      'FAVORITE_LANG=python',
      'EDITOR=vscode (cyberpunk theme)',
      'TERMINAL=iterm2',
      'COFFEE=matcha || cold_brew || iced_latte_1pump_simple_syrup_light_ice',
      'HOBBIES=[music, photography, gaming, dj, film, fashion, poetry]',
      'PHILOSOPHY=kaizen',
      'MANTRA="so lets dance"',
      'WHITEBOARD_LOVE=true',
      'VIBE="mode: code"',
      'ML_FRAMEWORK=tensorflow || pytorch',
      'TRADING_MODE=paper_trading',
      'RISK_TOLERANCE=moderate',
      'FAVORITE_INDICATORS=[RSI, MACD, Bollinger Bands]',
      'BACKTESTING_ENABLED=true',
      'OVERFITTING_ALERT=true',
      'PORTFOLIO_ALLOCATION=60/30/10',
    ],
    'mantra': [
      '✨ kaizen: small improvements add up',
      '✨ so let\'s dance: enjoy the process',
      '✨ whiteboard first: think before you code',
      '✨ backtest before you deploy',
      '✨ overfitting is a feature, not a bug (just kidding)',
      '✨ trust the model, but verify the results',
      '✨ greed is good, but risk management is better',
    ],
    'coffee': [
      '☕ matcha - my go-to',
      '☕ cold brew - when I need that extra kick',
      '☕ iced latte (1 pump simple syrup, light ice) - perfect balance',
      '☕ iced tea - for when I want something lighter',
    ],
    'vibes': [
      '🎵 tame impala - perfect coding vibes',
      '🎵 arctic monkeys - late night sessions',
      '🎵 twenty one pilots - chill coding',
      '🎵 empire of the sun - gets me in the zone',
      '🎵 mode: code playlist - my favorite',
    ],
    'cat ml_projects.txt': [
      '> Neural network price predictor (accuracy: 65%, confidence: low)',
      '> Sentiment analysis transformer (accuracy: 78%, still improving)',
      '> Reinforcement learning trading agent (returns: TBD, anxiety: high)',
      '> Time series forecasting model (probably overfitting, but learning)',
    ],
    'portfolio --status': [
      'Portfolio Status:',
      '- Current allocation: 60% equities, 30% bonds, 10% crypto',
      '- Sharpe ratio: improving (slowly)',
      '- Max drawdown: acceptable (barely)',
      '- Emotional state: calm (for now)',
      '- Trading mode: paper trading',
    ],
    'ml --train': [
      'Training model...',
      'Epoch 1/100: Loss decreasing (good sign)',
      'Epoch 50/100: Loss plateauing (suspicious)',
      'Epoch 100/100: Probably overfitting (as expected)',
      'Validation accuracy: 72% (better than random, worse than hoped)',
    ],
    'neofetch': [
      '                   sarvagya@dev',
      '       ████████████████      OS: macOS (Darwin)',
      '   ████████████████████████   Host: MacBook Pro',
      ' ████████████████████████████  Kernel: 24.6.0',
      ' ████████████████████████████   Uptime: 24/7 coding',
      ' ████████████████████████████   Shell: zsh',
      ' ████████████████████████████   Editor: VS Code',
      ' ████████████████████████████   Terminal: iTerm2',
      ' ████████████████████████████   Theme: Cyberpunk',
      ' ████████████████████████████',
      ' ████████████████████████████   Languages: Python, TypeScript',
      ' ████████████████████████████   ML: TensorFlow, PyTorch',
      ' ████████████████████████████   Finance: QuantLib, pandas',
      ' ████████████████████████████   Physics: PySCF, NEGF',
      '',
      ' "code quantum simulations, train ML models, trade options"',
    ],
    'fortune': [
      'You will write code that works on the first try.',
      '(but probably not)',
      '',
      'In the quantum realm, all bugs are features.',
      '',
      'The best code is the code you don\'t have to write.',
      'The second best is code that works.',
      '',
      'Remember: overfitting is a feature, not a bug.',
      '(just kidding, always validate)',
    ],
    'matrix': [
      'Wake up, Neo...',
      'The Matrix has you...',
      'Follow the white rabbit.',
      '',
      '01001000 01100101 01101100 01101100 01101111',
      '',
      'Actually, I just wanted to see if you\'d try this command.',
      'Did you know I code quantum simulations?',
      'Pretty cool, right?',
    ],
  };

  const handleCommand = (cmd: string) => {
    // Add to history (reverse chronological - newest first)
    setCommandHistory(prev => {
      const newHistory = [{ command: cmd, timestamp: Date.now() }, ...prev];
      return newHistory.slice(0, 5); // Keep only last 5
    });
    
    if (cmd === 'rm -rf /') {
      setSelectedCommand('rm -rf /');
      setTimeout(() => {
        alert("lol nice try 😄 not happening!");
        setSelectedCommand(null);
      }, 500);
      return;
    }
    setSelectedCommand(cmd);
    if (cmd === 'cat about.md' || cmd === 'cd hobbies' || cmd === 'vim blog.txt') {
      setTimeout(() => {
        if (cmd === 'cat about.md') router.push('/about');
        if (cmd === 'cd hobbies') router.push('/hobbies');
        if (cmd === 'vim blog.txt') router.push('/blog');
        setSelectedCommand(null);
      }, 300);
    } else if (cmd === 'ls projects/') {
      setTimeout(() => {
        router.push('/projects');
        setSelectedCommand(null);
      }, 300);
    } else {
      setTimeout(() => setSelectedCommand(null), 2000);
    }
  };

  const roomContext = roomContexts.home;

  return (
    <div className="min-h-screen bg-background text-foreground font-mono text-sm px-4 py-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Room Header Context */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Entering: {roomContext.title}</span>
          </div>
          <div className="flex items-baseline gap-3 flex-wrap mb-2">
            <h1 className="text-2xl font-bold text-foreground m-0">{roomContext.subtitle}</h1>
            
            {/* Retro Connection Box */}
            <div className="inline-flex items-center border border-border/50 bg-muted/20 px-3 py-1.5 font-mono text-xs">
              <span className="text-foreground/70">connected to</span>
              <span className="text-yellow-400 font-semibold ml-1">216.198.79.1</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{roomContext.description}</p>
        </div>

        {/* ASCII Art Name */}
        <div className="mb-6 flex justify-center">
          <Image 
            src="/ascii-art-text.png" 
            alt="Sarvagya Dwivedi ASCII Art" 
            width={800} 
            height={200}
            className="max-w-full h-auto"
            priority
          />
        </div>

        {/* Retro ASCII Header */}
        <div className="mb-6 text-primary leading-tight whitespace-pre flex justify-center">
          <pre className="text-xs">{`╔═══════════════════════════════════════════════════════════════════════════╗
║                      Software Developer & Researcher                      ║
║            Quantum Physics | Machine Learning | Computer Vision           ║
║    Computational Finance | Computational Physics | Distributed Systems    ║
╚═══════════════════════════════════════════════════════════════════════════╝`}</pre>
        </div>

        {/* Main Content Grid - Left Column + Right Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2 space-y-4">
            {/* Hero Terminal */}
            <div className="border border-border bg-card p-6 shadow-layered">
              <div className="mb-3 text-xs">
                <span className="text-primary">sarvagya@dev:~$</span> <span className="text-foreground/60">welcome</span>
              </div>
              <div className="text-foreground/90 mb-4 leading-relaxed text-sm whitespace-pre-line">
                {welcomeText}
                <span className="inline-block w-2 h-4 bg-primary cursor-blink ml-1"></span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs pt-3 border-t border-border">
                <div><span className="text-primary">Status:</span> <span className="text-secondary font-medium">{status}</span></div>
                <div><span className="text-primary">Time:</span> <span className="text-primary font-medium">{currentTime}</span></div>
                <div><span className="text-primary">Location:</span> <span className="text-foreground/70">New Jersey</span></div>
                <div><span className="text-primary">OS:</span> <span className="text-foreground/70">macOS</span></div>
                <div><span className="text-primary">Editor:</span> <span className="text-foreground/70">VS Code</span></div>
                <div><span className="text-primary">Coffee:</span> <span className="text-foreground/70">Matcha/Cold Brew</span></div>
              </div>
            </div>

            {/* Explore My Work */}
            <div className="border border-border bg-card p-6 shadow-layered">
              <div className="text-primary mb-4 text-base font-bold">EXPLORE MY WORK</div>
              <div className="space-y-6">
                {/* Terminal - Projects */}
                <div className="border border-border/50 rounded p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-6 h-6 text-primary" />
                      <div>
                        <div className="text-base font-semibold text-foreground mb-1">Terminal</div>
                        <div className="text-xs text-muted-foreground">Where I code</div>
                      </div>
                    </div>
                    <Link
                      href="/projects"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                      title="Enter Terminal"
                    >
                      explore all <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {projects && projects.length > 0 && (
                    <div className="space-y-3 mt-4">
                      {projects.slice(0, 2).map((project, idx) => (
                        <div key={idx} className="pl-2 border-l-2 border-primary/30">
                          <div className="text-sm font-medium text-foreground mb-1">{project.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-2">
                            {project.description[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Papers - Publications */}
                <div className="border border-border/50 rounded p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <div>
                        <div className="text-base font-semibold text-foreground mb-1">Papers</div>
                        <div className="text-xs text-muted-foreground">Where I research</div>
                      </div>
                    </div>
                    <Link
                      href="/academic"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                      title="Enter Papers"
                    >
                      explore all <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {publications && publications.length > 0 && (
                    <div className="space-y-3 mt-4">
                      {publications.slice(0, 2).map((pub, idx) => (
                        <div key={idx} className="pl-2 border-l-2 border-primary/30">
                          <div className="text-sm font-medium text-foreground mb-1">{pub.title}</div>
                          <div className="text-xs text-muted-foreground">{pub.venue}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Writings - Blog */}
                <div className="border border-border/50 rounded p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Zap className="w-6 h-6 text-primary" />
                      <div>
                        <div className="text-base font-semibold text-foreground mb-1">Writings</div>
                        <div className="text-xs text-muted-foreground">Where I write</div>
                      </div>
                    </div>
                    <Link
                      href="/blog"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                      title="Enter Writings"
                    >
                      explore all <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="mt-4 pl-2 border-l-2 border-primary/30">
                    <div className="text-sm text-muted-foreground italic">Coming soon...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commands Section */}
            <div className="border border-border bg-card p-4 shadow-layered">
                <div className="text-primary mb-2 text-xs font-bold">COMMANDS</div>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <button onClick={() => handleCommand('whoami')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    whoami
                  </button>
                  <button onClick={() => handleCommand('location')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    location
                  </button>
                  <button onClick={() => handleCommand('pwd')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    pwd
                  </button>
                  <button onClick={() => handleCommand('ls -la')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    ls -la
                  </button>
                  <button onClick={() => handleCommand('cat .env')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    cat .env
                  </button>
                  <button onClick={() => handleCommand('mantra')} className="px-2 py-1 border border-border hover:bg-secondary/10 hover:border-secondary transition-colors">
                    mantra
                  </button>
                  <button onClick={() => handleCommand('coffee')} className="px-2 py-1 border border-border hover:bg-secondary/10 hover:border-secondary transition-colors">
                    coffee
                  </button>
                  <button onClick={() => handleCommand('vibes')} className="px-2 py-1 border border-border hover:bg-secondary/10 hover:border-secondary transition-colors">
                    vibes
                  </button>
                  <button onClick={() => handleCommand('cat about.md')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    cat about.md
                  </button>
                  <button onClick={() => handleCommand('ls projects/')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    ls projects/
                  </button>
                  <button onClick={() => handleCommand('cd hobbies')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    cd hobbies
                  </button>
                    <button onClick={() => handleCommand('vim blog.txt')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    vim blog.txt
                  </button>
                  <button onClick={() => handleCommand('cat ml_projects.txt')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    cat ml_projects.txt
                  </button>
                  <button onClick={() => handleCommand('portfolio --status')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    portfolio --status
                  </button>
                  <button onClick={() => handleCommand('ml --train')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    ml --train
                  </button>
                  <button onClick={() => handleCommand('backtest --run')} className="px-2 py-1 border border-border hover:bg-primary/10 hover:border-primary transition-colors">
                    backtest --run
                  </button>
                  <button onClick={() => handleCommand('neofetch')} className="px-2 py-1 border border-border hover:bg-secondary/10 hover:border-secondary transition-colors" title="Easter egg">
                    neofetch
                  </button>
                  <button onClick={() => handleCommand('fortune')} className="px-2 py-1 border border-border hover:bg-secondary/10 hover:border-secondary transition-colors" title="Easter egg">
                    fortune
                  </button>
                  <button onClick={() => handleCommand('matrix')} className="px-2 py-1 border border-border hover:bg-secondary/10 hover:border-secondary transition-colors" title="Easter egg">
                    matrix
                  </button>
                </div>
                
                {/* Command History - Last 5 Commands */}
                {commandHistory.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="text-primary mb-2 text-xs font-bold">RECENT COMMANDS</div>
                    <div className="space-y-2 text-xs">
                      {commandHistory.map((item, idx) => (
                        <div key={idx} className="border border-border/50 rounded p-2 bg-muted/20">
                          <div className="text-primary mb-1">sarvagya@dev:~$ {item.command}</div>
                          {commandOutputs[item.command] && (
                            <div className="space-y-0.5 text-foreground/70 ml-2">
                              {commandOutputs[item.command].map((line, lineIdx) => (
                                <div key={lineIdx}>{line}</div>
                              ))}
                            </div>
                          )}
                          {item.command === 'rm -rf /' && (
                            <div className="text-destructive ml-2">Permission denied: lol nice try 😄 not happening!</div>
                          )}
                          {(item.command === 'cat about.md' || item.command === 'cd hobbies' || item.command === 'vim blog.txt' || item.command === 'ls projects/') && (
                            <div className="text-primary/70 ml-2 italic">→ navigating...</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Right Column - Quick Stats Sidebar */}
          <div className="md:col-span-1 space-y-4">
            {/* Today's Reminder */}
            {dailyMantra && (
              <div className="border border-border bg-card p-5 shadow-layered">
                <div className="text-primary mb-2 text-xs font-bold">TODAY'S REMINDER</div>
                <div className="text-primary italic text-sm">{dailyMantra}</div>
              </div>
            )}

            <div className="border border-border bg-card p-5 shadow-layered">
              <div className="text-primary mb-4 text-sm font-bold">QUICK STATS</div>
              <div className="space-y-4">
                {/* Stats Numbers */}
                <div className="grid grid-cols-3 gap-2 pb-4 border-b border-border/50">
                  <div className="text-center">
                    <div className="text-xl text-primary font-bold">{publications ? publications.length : 14}</div>
                    <div className="text-xs text-muted-foreground mt-1">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl text-primary font-bold">{projects ? projects.length : 10}</div>
                    <div className="text-xs text-muted-foreground mt-1">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-primary font-bold">Python</div>
                    <div className="text-xs text-muted-foreground mt-1">Primary Lang</div>
                  </div>
                </div>

                {/* Currently */}
                <div className="pb-4 border-b border-border/50">
                  <div className="text-primary mb-3 text-xs font-bold">CURRENTLY</div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▶</span>
                      <div>
                        <span className="text-foreground/70">Working on:</span>{" "}
                        <span className="text-foreground font-medium">spin-polarized NEGF</span>
                        <span className="text-muted-foreground text-xs block mt-0.5">(magnetic systems are cool)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▶</span>
                      <div>
                        <span className="text-foreground/70">Training:</span>{" "}
                        <span className="text-foreground font-medium">LSTM model for price prediction</span>
                        <span className="text-muted-foreground text-xs block mt-0.5">(probably overfitting, but learning)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▶</span>
                      <div>
                        <span className="text-foreground/70">Backtesting:</span>{" "}
                        <span className="text-foreground font-medium">mean reversion strategy</span>
                        <span className="text-muted-foreground text-xs block mt-0.5">(results: mixed, but improving)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▶</span>
                      <div>
                        <span className="text-foreground/70">Reading:</span>{" "}
                        <a href="https://www-cs-faculty.stanford.edu/~knuth/taocp.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">TAOCP</a>
                        <span className="text-muted-foreground text-xs block mt-0.5">(slowly, it's dense)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▶</span>
                      <div className="flex-1">
                        <span className="text-foreground/70">Listening:</span>{" "}
                        <a href="https://open.spotify.com/playlist/7IZUfEQza66WT6U7V4op7B" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">mode: code</a>
                        <span className="text-muted-foreground text-xs block mt-0.5">playlist on repeat</span>
                        <div className="mt-2">
                          <iframe 
                            src="https://open.spotify.com/embed/playlist/7IZUfEQza66WT6U7V4op7B?utm_source=generator&theme=0" 
                            width="100%" 
                            height="152" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                    {greeting && (
                      <div className="mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground">
                        good {greeting}! 👋
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div>
                  <div className="text-primary mb-2 text-xs font-bold">TECH STACK</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'TypeScript', 'Next.js', 'React', 'PySCF', 'NEGF', 'DFT', 'TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'GCP', 'Redis', 'MongoDB', 'quantlib'].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/50 text-xs text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-3 border-t border-border/50">
                  <div className="text-primary mb-2 text-xs font-bold">CONNECT</div>
                  <div className="flex flex-wrap gap-1.5">
                    <a 
                      href="https://github.com/sarvagyad37" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-muted/50 rounded border border-border/50 hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <Github className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-foreground/80 group-hover:text-primary transition-colors">GitHub</span>
                    </a>
                    <a 
                      href="https://www.researchgate.net/profile/Sarvagya-Dwivedi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-muted/50 rounded border border-border/50 hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-foreground/80 group-hover:text-primary transition-colors">ResearchGate</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/sarvagyadwivedi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-muted/50 rounded border border-border/50 hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-foreground/80 group-hover:text-primary transition-colors">LinkedIn</span>
                    </a>
                    <a 
                      href="mailto:contact@sarvagya.dev"
                      className="inline-flex items-center gap-1.5 px-2 py-1.5 bg-muted/50 rounded border border-border/50 hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-foreground/80 group-hover:text-primary transition-colors">Email</span>
                    </a>
                  </div>
                </div>

                {/* Fun Stuff */}
                <div className="pt-3 border-t border-border/50">
                  <div className="text-primary mb-2 text-xs font-bold">FUN STUFF</div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="text-primary mb-1.5 text-xs">Interests:</div>
                      <div className="text-foreground/70 flex flex-wrap gap-1.5">
                        {['Music', 'Photography', 'Gaming', 'DJ', 'Film', 'Fashion', 'Poetry'].map((interest) => (
                          <span key={interest} className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/50 text-xs">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border/30">
                      <div className="text-primary mb-1 text-xs">Coffee:</div>
                      <div className="text-foreground/70 space-y-0.5">
                        <div>• Matcha</div>
                        <div>• Cold brew</div>
                        <div>• Iced latte</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="pt-3 border-t border-border/50">
                  <div className="text-primary mb-2 text-xs font-bold">PHILOSOPHY</div>
                  <div className="space-y-1.5 text-xs">
                    <div><span className="text-primary font-medium">kaizen:</span> small improvements add up</div>
                    <div><span className="text-secondary font-medium">so let's dance:</span> enjoy the process</div>
                    <div><span className="text-primary font-medium">whiteboard first:</span> think before you code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export function AboutRoom() {
  const roomContext = roomContexts.about;
  
  const updates = [
    {
      date: "2025-01-15",
      items: [
        "Presented quantum transport research at SURP Conference, Rowan University. Developed a self-consistent DFT + NEGF implementation with PySCF integration—check out the poster in publications.",
        "Launched this website to document my work and research publicly.",
        "Currently training LSTM models for financial time series prediction, focusing on regularization techniques to improve generalization.",
      ],
    },
    {
      date: "2024-12-01",
      items: [
        "Released scf-negf—an open-source quantum transport simulator with PySCF integration. Achieved numerical equivalence to TranSiesta for benchmark systems.",
        "Extended NEGF framework to handle spin-polarized transport for magnetic systems.",
        "Developed algorithmic trading system with comprehensive backtesting framework and risk management modules.",
      ],
    },
    {
      date: "2023-08-15",
      items: [
        "Published research on exponential functionally graded plates in Archive of Applied Mechanics. Co-developed DSM framework with neutral-surface corrections.",
        "Contributed to pyRUQT—a recursive quantum transport package for Green's function calculations.",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Room Header Context */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Entering: {roomContext.title}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">{roomContext.subtitle}</h1>
          <p className="text-sm text-muted-foreground">{roomContext.description}</p>
        </div>

        {/* About - Main Introduction */}
        <div className="card p-6 shadow-layered mb-6">
          <div className="text-primary mb-4 text-base font-bold">ABOUT</div>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-sm">
            <p>
              I'm a developer and researcher working at the intersection of quantum physics, distributed systems, machine learning, and quantitative finance. I build computational frameworks, train ML models, and develop algorithmic trading systems—all while maintaining a focus on rigorous research and practical applications.
            </p>
            <p>
              My work spans quantum transport simulations using self-consistent DFT + NEGF methods, distributed systems engineering for high-performance applications, deep learning models for time series forecasting, and quantitative trading strategies. I'm driven by the challenge of solving complex problems across domains, whether that's simulating electron behavior at the atomic level or building production-ready ML pipelines.
            </p>
            <p>
              I've published research in computational physics, contributed to open-source quantum transport packages, and built systems that handle real-world scale. When I'm not coding or researching, I'm usually reading papers, experimenting with new models, or backtesting trading strategies. I believe in building things that are both scientifically rigorous and practically useful.
            </p>
          </div>
        </div>

        {/* Research & Academic Highlights - Combined */}
        <div className="card p-6 shadow-layered mb-6">
          <div className="text-primary mb-6 text-base font-bold">RESEARCH & ACADEMIC HIGHLIGHTS</div>
          
          {/* Research Highlights */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-4 text-primary/80">RESEARCH</h3>
            <div className="space-y-3 text-foreground/80 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <span className="font-semibold text-foreground">Spectral Learning for Financial Regimes</span>
                  <p className="text-foreground/70 mt-1">Low-rank Hankel–SVD representations for regime shift detection in financial markets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <span className="font-semibold text-foreground">Spectral Surrogate Modeling of Functionally Graded Plates</span>
                  <p className="text-foreground/70 mt-1">Physics-informed surrogate models using Hankel–SVD features and Dynamic Stiffness Method</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <span className="font-semibold text-foreground">Quantum Transport Simulation</span>
                  <p className="text-foreground/70 mt-1">DFT + NEGF implementation for modeling charge transport in nanoscale electronic systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Leadership */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 text-primary/80">LEADERSHIP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">President, Rowan FinTech Club</h4>
                <p className="text-xs text-muted-foreground mb-1">2024–2025</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Leading research discussions on quantitative finance, algorithmic trading models, and stochastic processes.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Web Master, IEEE Rowan Chapter</h4>
                <p className="text-xs text-muted-foreground mb-1">2024–2025</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Managing research outreach, technical communications, and conference participation logistics.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Event Coordinator, ACM Rowan Chapter</h4>
                <p className="text-xs text-muted-foreground mb-1">2023–2025</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Organizing technical seminars, coding theory workshops, and ML reading groups for student researchers.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Co-Lead, IEEE ProfHacks Hackathon</h4>
                <p className="text-xs text-muted-foreground mb-1">2023</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Designed challenge frameworks and coordinated interdisciplinary project mentoring.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates/Timeline */}
        <div className="card p-6 shadow-layered mb-6">
          <div className="text-primary mb-6 text-base font-bold">RECENT UPDATES</div>
          <div className="space-y-6 relative pl-6 border-l-2 border-primary/30">
            {updates.map((update, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background"></div>
                <div className="font-mono text-xs text-muted-foreground mb-3">{update.date}</div>
                <div className="space-y-2.5 text-foreground/80">
                  {update.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span className="leading-relaxed text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements - Full Width */}
        <div className="card p-6 shadow-layered">
          <div className="text-primary mb-6 text-base font-bold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            ACHIEVEMENTS & AWARDS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">3rd Place, SkillSwap</h3>
                <p className="text-xs text-muted-foreground mb-1">Temple University OwlHacks 2025</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Token-based community skill-exchange platform with lightweight on-chain/off-chain blockchain rewards+trust model. Led UI/UX and data logic integration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">3rd Place, SeaSOS</h3>
                <p className="text-xs text-muted-foreground mb-1">NJIT HackTheLoc 2024</p>
                <p className="text-foreground/70 text-xs leading-relaxed">AI maritime emergency response system with Unity-AR navigation, Swift/iOS UI, FastAPI microservices, Redis Stack, and real-time evacuation routing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">1st Place, MediSync</h3>
                <p className="text-xs text-muted-foreground mb-1">UPMC Hack 2023</p>
                <p className="text-foreground/70 text-xs leading-relaxed">AI-enhanced VR health system combining immersive collaboration environments with computer vision for automated medical analysis.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">2nd Place, BlocSoc</h3>
                <p className="text-xs text-muted-foreground mb-1">IEEE ProfHacks 2022</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Developed NFT authentication protocol for decentralized apps with blockchain-based identity credentials. Built censorship-resistant blogging platform with governance system enabling verified users to participate in content moderation and platform development.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">2nd Place, Kryptonyte CTF</h3>
                <p className="text-xs text-muted-foreground mb-1">2022</p>
                <p className="text-foreground/70 text-xs leading-relaxed">Competed in capture-the-flag cybersecurity competition, demonstrating strong algorithmic reasoning skills and real-time systems debugging capabilities. Solved complex cryptographic challenges and reverse engineering problems under time constraints.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HobbiesRoom() {
  const roomContext = roomContexts.hobbies;
  
  const hobbies = [
    { icon: <Music />, title: "Music", description: "Always have something playing in the background", extra: "Favorite artists: Tame Impala, Arctic Monkeys, Twenty One Pilots" },
    { icon: <Camera />, title: "Photography", description: "Capturing moments and interesting angles", extra: "Focus areas: street photography, concerts, architecture" },
    { icon: <Gamepad2 />, title: "Gaming", description: "From indie games to competitive titles", extra: "Current interests: indie puzzle games, competitive FPS" },
    { icon: <Coffee />, title: "Coffee", description: "A daily ritual and source of inspiration", extra: "Preferences: matcha, cold brew, specialty coffee" },
    { icon: <Code />, title: "Side Projects", description: "Building experimental projects and prototypes", extra: "Recent work: quantum transport visualization tools, ML experiment trackers" },
    { icon: <BookOpen />, title: "Reading", description: "Technical books, research papers, and sci-fi", extra: "Currently reading: TAOCP, research papers on NEGF and quantitative finance" },
  ];

  // Placeholder for photo gallery - you can add actual images later
  const photoGallery = [
    { id: 1, placeholder: "📸 Concert vibes" },
    { id: 2, placeholder: "📸 Street photography" },
    { id: 3, placeholder: "📸 Coffee shop moments" },
    { id: 4, placeholder: "📸 Late night coding" },
  ];

  return (
    <div className="min-h-screen px-6 py-20 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Room Header Context */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Gamepad2 className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Entering: {roomContext.title}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">{roomContext.subtitle}</h1>
          <p className="text-sm text-muted-foreground">{roomContext.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="card p-6 shadow-layered hover:scale-[1.02] transition-all group">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{hobby.title}</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-2">{hobby.description}</p>
              {hobby.extra && (
                <p className="text-xs text-muted-foreground italic">{hobby.extra}</p>
              )}
            </div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="card p-6 shadow-layered mb-6">
          <div className="text-primary mb-4 text-base font-bold">PHOTO GALLERY</div>
          <p className="text-sm text-muted-foreground mb-4">Moments captured through photography—coming soon</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photoGallery.map((photo) => (
              <div 
                key={photo.id} 
                className="aspect-square bg-muted rounded border border-border flex items-center justify-center hover:scale-105 transition-all cursor-pointer group"
              >
                <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{photo.placeholder}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Music Taste Visualization */}
        <div className="card p-6 shadow-layered">
          <div className="text-primary mb-4 text-base font-bold">MUSIC TASTE</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Psychedelic / Indie</span>
              <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "40%" }} />
              </div>
              <span className="text-xs text-muted-foreground">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Electronic / Synth</span>
              <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-secondary" style={{ width: "30%" }} />
              </div>
              <span className="text-xs text-muted-foreground">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Alternative / Rock</span>
              <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "20%" }} />
              </div>
              <span className="text-xs text-muted-foreground">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ambient / Lo-fi</span>
              <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-secondary" style={{ width: "10%" }} />
              </div>
              <span className="text-xs text-muted-foreground">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogRoom() {
  const roomContext = roomContexts.blog;
  
  const drafts = [
    { title: "Self-Consistent NEGF Implementation: A Technical Deep Dive", status: "drafting", progress: "60%" },
    { title: "Building Production ML Pipelines: Lessons Learned", status: "thinking", progress: "30%" },
    { title: "Quantitative Trading Strategies: Backtesting and Risk Management", status: "outlining", progress: "15%" },
  ];

  const comingSoon = [
    "Building a quantum transport simulator from scratch",
    "Lessons learned from 7+ research papers",
    "How I organize my research code",
    "Distributed systems patterns in production",
    "Deep learning for financial time series",
    "Risk management in algorithmic trading",
    "Debugging complex computational physics simulations",
  ];

  return (
    <div className="min-h-screen px-6 py-20 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Room Header Context */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Entering: {roomContext.title}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">{roomContext.subtitle}</h1>
          <p className="text-sm text-muted-foreground">{roomContext.description}</p>
        </div>
        
        {/* Coming Soon Section */}
        <div className="card p-6 shadow-layered mb-6">
          <div className="text-primary mb-4 text-base font-bold">COMING SOON</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comingSoon.map((topic, index) => (
              <div key={index} className="flex items-start gap-2 p-3 hover:bg-muted/30 rounded transition-colors">
                <span className="text-primary mt-1 text-xs">•</span>
                <span className="text-foreground/80">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Drafts Section */}
        <div className="card p-6 shadow-layered">
          <div className="text-primary mb-4 text-base font-bold">DRAFTS (WORK IN PROGRESS)</div>
          <div className="space-y-4">
            {drafts.map((draft, index) => (
              <article key={index} className="p-4 border border-border/50 rounded hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{draft.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-mono">{draft.status}</span>
                      <span>•</span>
                      <span>{draft.progress} complete</span>
                    </div>
                  </div>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: draft.progress }}
                    />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">Work in progress</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
