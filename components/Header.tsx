interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  label: string;
  url: string;
}

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  navLinks: NavLink[];
  socialLinks?: SocialLink[];
}

export function Header({ name, title, email, navLinks, socialLinks }: HeaderProps) {
  return (
    <header className="border-b border-border/10 pt-12 pb-10 text-center relative">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative inline-block">
          <h1
            className="text-6xl md:text-7xl font-normal tracking-tighter mb-3 leading-[0.9] transition-colors relative"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {name}
          </h1>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-px bg-foreground/20"></div>
        </div>
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-mono mb-1 mt-4">
          {title}
        </p>
        <a 
          href={`mailto:${email}`}
          className="text-xs text-muted-foreground/60 font-mono hover:text-foreground/80 transition-colors inline-block relative group"
        >
          {email}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 group-hover:w-full transition-all duration-300"></span>
        </a>
        {socialLinks && socialLinks.length > 0 && (
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground/50 hover:text-foreground transition-colors relative group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        )}
        <nav className="mt-10 flex w-full justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-xs font-mono uppercase tracking-widest text-muted-foreground/70 hover:text-foreground transition-all duration-200"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground/30 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
