interface Project {
  title: string;
  description: string | string[];
  url?: string;
  link?: {
    href: string;
    label: string;
  };
  tags: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="mb-16">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">04</span>
        <h2 className="text-2xl font-normal tracking-tight text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
          Projects
        </h2>
        <div className="flex-1 h-px bg-border/10"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pl-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative flex flex-col p-6 border border-border/10 transition-all duration-300 hover:border-border/30 hover:bg-card/5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.02)] border-l-2 border-l-border/10 hover:border-l-border/30"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium leading-snug text-foreground flex-1 pr-4 group-hover:text-foreground transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                {project.title}
              </h3>
              {project.url && (
                <a 
                  href={project.url} 
                  className="text-xs font-mono text-muted-foreground/40 hover:text-foreground transition-all duration-200 flex-shrink-0 mt-1 hover:translate-x-0.5 inline-block"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  →
                </a>
              )}
            </div>
            <div className="mb-5 flex-1">
              {Array.isArray(project.description) ? (
                <ul className="leading-relaxed text-muted-foreground/80 text-[14px] space-y-1 pl-0">
                  {project.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-muted-foreground/80 text-[14px]">
                  {project.description}
                  {project.link && (
                    <>{" "}
                      <a
                        href={project.link.href}
                        className="font-medium underline decoration-border/40 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                      >
                        {project.link.label}
                      </a>
                    </>
                  )}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-muted/20 text-muted-foreground/70 border border-border/20 transition-colors group-hover:border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
