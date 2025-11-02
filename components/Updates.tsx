"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface UpdateEntry {
  date: string;
  items: string[];
}

interface UpdatesProps {
  updates: UpdateEntry[];
  trigger: React.ReactNode;
}

export function Updates({ updates, trigger }: UpdatesProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-border/30">
        <DialogHeader>
          <DialogTitle
            className="text-3xl font-normal tracking-tight text-foreground mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Updates
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8 pr-2">
          {updates.map((update, index) => (
            <div key={index} className="group">
              <time className="block mb-3 text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground/80">
                {update.date}
              </time>
              <ul className="space-y-1.5 pl-0">
                {update.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed text-foreground/90 text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
