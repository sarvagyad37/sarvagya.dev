"use client";

import { BlogRoom } from "@/components/Rooms";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-in fade-in duration-300">
        <BlogRoom />
      </div>
    </div>
  );
}

