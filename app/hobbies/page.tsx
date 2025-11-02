"use client";

import { HobbiesRoom } from "@/components/Rooms";

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-in fade-in duration-300">
        <HobbiesRoom />
      </div>
    </div>
  );
}

