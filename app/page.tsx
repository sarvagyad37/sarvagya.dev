"use client";

import { WelcomeRoom } from "@/components/Rooms";
import { projectsData, publicationsData } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-in fade-in duration-300">
        <WelcomeRoom projects={projectsData} publications={publicationsData} />
      </div>
    </div>
  );
}