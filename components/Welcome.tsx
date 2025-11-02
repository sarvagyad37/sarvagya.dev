interface WelcomeProps {
  message: string;
}

export function Welcome({ message }: WelcomeProps) {
  return (
    <section id="welcome" className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">00</span>
        <h2 className="text-2xl font-normal tracking-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
          Welcome
        </h2>
        <div className="flex-1 h-px bg-border/10"></div>
      </div>
      <div className="max-w-3xl pl-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border/5"></div>
        <p className="leading-relaxed text-foreground/85 text-[15px] pl-6 whitespace-pre-line">
          {message}
        </p>
      </div>
    </section>
  );
}
