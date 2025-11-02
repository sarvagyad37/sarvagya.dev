"use client";

import { ProjectsRoom } from "@/components/AcademicProjects";
import { projectsData } from "../data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-in fade-in duration-300">
        <ProjectsRoom projects={projectsData} />
      </div>
    </div>
  );
}

