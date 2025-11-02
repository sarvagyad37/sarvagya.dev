"use client";

import { AboutRoom } from "@/components/Rooms";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-in fade-in duration-300">
        <AboutRoom />
      </div>
    </div>
  );
}

