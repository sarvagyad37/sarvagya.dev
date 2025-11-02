interface Publication {
  title: string;
  venue: string;
  description: string | string[];
  type?: "poster";
  link?: {
    href: string;
    label: string;
  };
  links: {
    label: string;
    url: string;
  }[];
}

interface PublicationsProps {
  publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <section id="publications" className="mb-16">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">03</span>
        <h2 className="text-2xl font-normal tracking-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
          Publications
        </h2>
        <div className="flex-1 h-px bg-border/10"></div>
      </div>
      <div className="flex flex-col gap-6 pl-8">
        {publications.map((pub, index) => {
          return (
            <article
              key={index}
              className="group relative pb-6 border-b border-border/10 last:border-b-0 transition-colors hover:border-border/20 pl-6 border-l border-border/5 hover:border-l-border/30"
            >
              <h3 className="text-lg font-medium leading-snug text-foreground mb-2 group-hover:text-foreground transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                {pub.title}
              </h3>
              <p className="mb-3 text-xs font-mono text-muted-foreground/60">
                {pub.type === "poster" ? (
                  <>
                    <span className="mr-2">[POSTER]</span>
                    <span>{pub.venue.replace(/^Poster,\s*/i, "")}</span>
                  </>
                ) : (
                  pub.venue
                )}
              </p>
              {Array.isArray(pub.description) ? (
                <ul className="leading-relaxed text-muted-foreground/80 text-[14px] mb-4 space-y-1 pl-0">
                  {pub.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-muted-foreground/80 text-[14px] mb-4">
                  {pub.description}
                  {pub.link && (
                    <>{" "}
                      <a
                        href={pub.link.href}
                        className="font-medium underline decoration-border/40 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                      >
                        {pub.link.label}
                      </a>
                    </>
                  )}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {pub.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground/50 hover:text-foreground transition-colors relative group/link"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground/30 group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
