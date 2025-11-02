import { Updates } from "@/components/Updates";

interface AboutProps {
  bio: string;
  updates?: {
    date: string;
    items: string[];
  }[];
}

export function About({ bio, updates }: AboutProps) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">02</span>
        <h2 className="text-2xl font-normal tracking-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
          About
        </h2>
        <div className="flex-1 h-px bg-border/10"></div>
      </div>
      <div className="max-w-3xl pl-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border/5"></div>
        <p className="leading-relaxed text-foreground/85 text-[15px] mb-6 pl-6">
          {bio}
        </p>
        {updates && (
          <div className="pl-6">
            <Updates
              updates={updates}
              trigger={
                <button className="text-xs font-mono uppercase tracking-wider text-muted-foreground/60 hover:text-foreground transition-colors group">
                  <span className="inline-block transition-transform group-hover:translate-x-1">Updates</span>
                  <span className="ml-1">→</span>
                </button>
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
