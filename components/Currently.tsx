interface CurrentlyProps {
  items: {
    label: string;
    content: string;
    link?: string;
  }[];
}

export function Currently({ items }: CurrentlyProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">01</span>
        <h2 className="text-2xl font-normal tracking-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
          Currently
        </h2>
        <div className="flex-1 h-px bg-border/10"></div>
      </div>
      <div className="max-w-3xl pl-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border/5"></div>
        <div className="pl-6 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="text-[15px]">
              <span className="text-muted-foreground/60 font-mono text-xs uppercase tracking-wider mr-3">
                {item.label}
              </span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/85 hover:text-foreground transition-colors underline decoration-border/40 underline-offset-4 hover:decoration-foreground/60"
                >
                  {item.content}
                </a>
              ) : (
                <span className="text-foreground/85">{item.content}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






