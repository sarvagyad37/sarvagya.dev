"use client";

import { AcademicRoom } from "@/components/AcademicProjects";
import { publicationsData } from "../data";

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-in fade-in duration-300">
        <AcademicRoom publications={publicationsData} />
      </div>
    </div>
  );
}

