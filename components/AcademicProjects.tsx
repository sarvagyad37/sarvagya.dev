import { Terminal, ExternalLink, BookOpen, FileText, Presentation, Mic, Play, Github } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string[];
  url: string;
  tags: string[];
  category?: string;
  relatedPublications?: string[]; // Array of publication titles
  image?: string; // Path to screenshot/demo image
  demo?: string; // Demo URL
  year?: number;
}

interface Publication {
  title: string;
  venue: string;
  description: string[];
  type?: "poster" | "oral";
  links: { label: string; url: string }[];
  year?: number;
  authors?: string;
  volume?: string;
}

const roomContexts: Record<string, { title: string; subtitle: string; description: string }> = {
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
};

export function ProjectsRoom({ projects }: { projects: Project[] }) {
  const roomContext = roomContexts.projects;
  
  // Group projects by category
  const categories = ["Quantum Transport", "Machine Learning", "Finance & Trading", "Distributed Systems"];
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category] = projects.filter(p => p.category === category);
    return acc;
  }, {} as Record<string, Project[]>);
  
  const uncategorizedProjects = projects.filter(p => !p.category || !categories.includes(p.category));
  
  return (
    <div className="min-h-screen px-6 py-20 mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Room Header Context */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Entering: {roomContext.title}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">{roomContext.subtitle}</h1>
          <p className="text-sm text-muted-foreground">{roomContext.description}</p>
        </div>
        
        {/* Projects by Category */}
        {categories.map((category) => {
          const categoryProjects = projectsByCategory[category];
          if (!categoryProjects || categoryProjects.length === 0) return null;
          
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-semibold text-foreground">{category}</h2>
                <div className="flex-1 h-px bg-border/10"></div>
                <span className="text-xs text-muted-foreground font-mono">{categoryProjects.length} {categoryProjects.length === 1 ? 'project' : 'projects'}</span>
              </div>
              <div className="space-y-6">
                {categoryProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          );
        })}
        
        {/* Uncategorized Projects */}
        {uncategorizedProjects.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-semibold text-foreground">Other Projects</h2>
              <div className="flex-1 h-px bg-border/10"></div>
            </div>
            <div className="space-y-6">
              {uncategorizedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-6 shadow-layered hover:scale-[1.01] transition-all group border-l-4 border-l-primary/30">
      {/* Project Image/Screenshot */}
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden border border-border/50 bg-muted/20">
          <div className="relative w-full aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
            {project.year && (
              <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                {project.year}
              </span>
            )}
          </div>
          {project.category && (
            <span className="inline-block text-xs px-2 py-0.5 bg-primary/10 text-primary rounded border border-primary/20 mb-2">
              {project.category}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-border/50 hover:border-primary hover:bg-primary/5 transition-colors text-muted-foreground hover:text-primary"
              title="View demo"
            >
              <Play className="w-4 h-4" />
            </a>
          )}
          {project.url && project.url !== "#" && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded border border-border/50 hover:border-primary hover:bg-primary/5 transition-colors text-muted-foreground hover:text-primary"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="space-y-2 mb-4 text-foreground/80 leading-relaxed text-sm">
        {project.description.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-start gap-2">
            <span className="text-primary mt-1.5 text-xs">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      
      {/* Related Publications */}
      {project.relatedPublications && project.relatedPublications.length > 0 && (
        <div className="mb-4 p-3 bg-muted/30 rounded border border-border/30">
          <div className="text-xs font-semibold text-primary mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3" />
            RELATED PUBLICATIONS
          </div>
          <div className="space-y-1">
            {project.relatedPublications.map((pubTitle, idx) => (
              <Link
                key={idx}
                href="/academic"
                className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/link"
              >
                <span className="group-hover/link:text-primary">→</span>
                <span className="italic">{pubTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-muted/50 rounded text-xs font-mono text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AcademicRoom({ publications }: { publications: Publication[] }) {
  const roomContext = roomContexts.academic;
  const [activeFilter, setActiveFilter] = useState<"all" | "journal" | "poster" | "oral">("all");
  
  // Group publications by type
  const journals = publications.filter(p => !p.type);
  const posters = publications.filter(p => p.type === "poster");
  const oral = publications.filter(p => p.type === "oral");
  
  // Extract date from venue string
  const getDateFromVenue = (venue: string): string => {
    // Try to find month names (full and abbreviated)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Look for "Month Day, Year" pattern (e.g., "November 15, 2025")
    for (let i = 0; i < monthNames.length; i++) {
      const regex = new RegExp(`(${monthNames[i]}|${monthAbbr[i]})\\s+\\d{1,2},\\s*(\\d{4})`, "i");
      const match = venue.match(regex);
      if (match) {
        return `${match[1]} ${match[2]}`;
      }
    }
    
    // Look for "Month Year" pattern (e.g., "August 2025")
    for (let i = 0; i < monthNames.length; i++) {
      const regex = new RegExp(`(${monthNames[i]}|${monthAbbr[i]})\\s+(\\d{4})`, "i");
      const match = venue.match(regex);
      if (match) {
        return `${match[1]} ${match[2]}`;
      }
    }
    
    // Look for just year
    const yearMatch = venue.match(/\b(202[1-9]|202[0-9])\b/);
    if (yearMatch) {
      return yearMatch[1];
    }
    
    return "";
  };
  
  // Get year for sorting
  const getYear = (pub: Publication): number => {
    if (pub.year) return pub.year;
    const yearMatch = pub.venue.match(/\b(202[1-9]|202[0-9])\b/);
    return yearMatch ? parseInt(yearMatch[1]) : 2025;
  };
  
  // Sort by year (newest first)
  const sortByYear = (a: Publication, b: Publication) => getYear(b) - getYear(a);
  
  // Format venue without date (to avoid duplication)
  const formatVenue = (venue: string): string => {
    // Remove common date patterns
    let cleaned = venue;
    
    // Remove "Poster," or "Oral Presentation," prefix if present
    cleaned = cleaned.replace(/^(Poster|Oral Presentation),\s*/i, "");
    
    // Remove "Month Day, Year" pattern (e.g., "November 15, 2025")
    cleaned = cleaned.replace(/,\s*\w+\s+\d{1,2},\s*\d{4}/gi, "");
    
    // Remove "Month Year" pattern (e.g., "August 2025")
    cleaned = cleaned.replace(/,\s*\w+\s+\d{4}/gi, "");
    
    // Remove standalone year at end (e.g., ", 2023")
    cleaned = cleaned.replace(/,\s*\d{4}\s*$/g, "");
    
    // Clean up extra commas and spaces
    cleaned = cleaned.replace(/,\s*,/g, ",").replace(/,\s*$/, "").trim();
    
    return cleaned || venue; // Fallback to original if everything is removed
  };
  
  const sortedJournals = [...journals].sort(sortByYear);
  const sortedPosters = [...posters].sort(sortByYear);
  const sortedOral = [...oral].sort(sortByYear);
  
  // Determine which sections to show based on filter
  const showJournals = activeFilter === "all" || activeFilter === "journal";
  const showPosters = activeFilter === "all" || activeFilter === "poster";
  const showOral = activeFilter === "all" || activeFilter === "oral";
  
  const getTypeIcon = (pub: Publication) => {
    if (pub.type === "oral") return <Mic className="w-4 h-4" />;
    if (pub.type === "poster") return <Presentation className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };
  
  const getTypeLabel = (pub: Publication) => {
    if (pub.type === "oral") return "ORAL";
    if (pub.type === "poster") return "POSTER";
    return "JOURNAL";
  };
  
  const getTypeColor = (pub: Publication) => {
    return "bg-primary/10 text-primary border-primary/20";
  };
  
  return (
    <div className="min-h-screen px-6 py-20 mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Room Header Context */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">Entering: {roomContext.title}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">{roomContext.subtitle}</h1>
          <p className="text-sm text-muted-foreground">{roomContext.description}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`card p-4 shadow-layered text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === "all" ? "border-2 border-primary bg-primary/5" : ""
            }`}
          >
            <div className="text-2xl font-bold text-primary mb-1">{publications.length}</div>
            <div className="text-xs text-muted-foreground font-mono">Total</div>
          </button>
          <button
            onClick={() => setActiveFilter("journal")}
            className={`card p-4 shadow-layered text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === "journal" ? "border-2 border-primary bg-primary/5" : ""
            }`}
          >
            <div className="text-2xl font-bold text-primary mb-1">{sortedJournals.length}</div>
            <div className="text-xs text-muted-foreground font-mono">Journal Articles</div>
          </button>
          <button
            onClick={() => setActiveFilter("poster")}
            className={`card p-4 shadow-layered text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === "poster" ? "border-2 border-primary bg-primary/5" : ""
            }`}
          >
            <div className="text-2xl font-bold text-primary mb-1">{sortedPosters.length}</div>
            <div className="text-xs text-muted-foreground font-mono">Posters</div>
          </button>
          <button
            onClick={() => setActiveFilter("oral")}
            className={`card p-4 shadow-layered text-center transition-all hover:scale-105 cursor-pointer ${
              activeFilter === "oral" ? "border-2 border-primary bg-primary/5" : ""
            }`}
          >
            <div className="text-2xl font-bold text-primary mb-1">{sortedOral.length}</div>
            <div className="text-xs text-muted-foreground font-mono">Oral Presentations</div>
          </button>
        </div>

        {/* Journal Articles */}
        {showJournals && sortedJournals.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Journal Articles</h2>
              <div className="flex-1 h-px bg-border/10"></div>
            </div>
            <div className="space-y-5">
              {sortedJournals.map((pub, index) => (
                <div key={index} className="card p-6 shadow-layered hover:scale-[1.01] transition-all group border-l-4 border-l-primary/30">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold leading-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <span className="text-xs text-muted-foreground font-mono">{formatVenue(pub.venue)}</span>
                        {pub.volume && (
                          <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                            {pub.volume}
                          </span>
                        )}
                        {getDateFromVenue(pub.venue) && (
                          <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                            {getDateFromVenue(pub.venue)}
                          </span>
                        )}
                      </div>
                      {pub.authors && (
                        <p className="text-xs text-muted-foreground mt-1 italic">{pub.authors}</p>
                      )}
                    </div>
                    <div className={`px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap border flex items-center gap-1.5 ${getTypeColor(pub)}`}>
                      {getTypeIcon(pub)}
                      {getTypeLabel(pub)}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 text-foreground/80 leading-relaxed text-sm">
                    {pub.description.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {pub.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {pub.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 hover:underline transition-colors px-2 py-1 rounded border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Oral Presentations */}
        {showOral && sortedOral.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Mic className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Oral Presentations</h2>
              <div className="flex-1 h-px bg-border/10"></div>
            </div>
            <div className="space-y-5">
              {sortedOral.map((pub, index) => (
                <div key={index} className="card p-6 shadow-layered hover:scale-[1.01] transition-all group border-l-4 border-l-primary/30">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold leading-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <span className="text-xs text-muted-foreground font-mono">{formatVenue(pub.venue)}</span>
                        {pub.volume && (
                          <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                            {pub.volume}
                          </span>
                        )}
                        {getDateFromVenue(pub.venue) && (
                          <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                            {getDateFromVenue(pub.venue)}
                          </span>
                        )}
                      </div>
                      {pub.authors && (
                        <p className="text-xs text-muted-foreground mt-1 italic">{pub.authors}</p>
                      )}
                    </div>
                    <div className={`px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap border flex items-center gap-1.5 ${getTypeColor(pub)}`}>
                      {getTypeIcon(pub)}
                      {getTypeLabel(pub)}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 text-foreground/80 leading-relaxed text-sm">
                    {pub.description.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {pub.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {pub.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 hover:underline transition-colors px-2 py-1 rounded border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Posters */}
        {showPosters && sortedPosters.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Presentation className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Posters</h2>
              <div className="flex-1 h-px bg-border/10"></div>
            </div>
            <div className="space-y-5">
              {sortedPosters.map((pub, index) => (
                <div key={index} className="card p-6 shadow-layered hover:scale-[1.01] transition-all group border-l-4 border-l-primary/30">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold leading-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <span className="text-xs text-muted-foreground font-mono">{formatVenue(pub.venue)}</span>
                        {pub.volume && (
                          <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                            {pub.volume}
                          </span>
                        )}
                        {getDateFromVenue(pub.venue) && (
                          <span className="text-xs px-2 py-0.5 bg-muted/30 rounded border border-border/30 text-muted-foreground">
                            {getDateFromVenue(pub.venue)}
                          </span>
                        )}
                      </div>
                      {pub.authors && (
                        <p className="text-xs text-muted-foreground mt-1 italic">{pub.authors}</p>
                      )}
                    </div>
                    <div className={`px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap border flex items-center gap-1.5 ${getTypeColor(pub)}`}>
                      {getTypeIcon(pub)}
                      {getTypeLabel(pub)}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4 text-foreground/80 leading-relaxed text-sm">
                    {pub.description.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {pub.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {pub.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 hover:underline transition-colors px-2 py-1 rounded border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
