"use client";
import React from 'react';
import { resumeData } from '@/data/resume';
import { BentoGrid } from '@/components/ui/bento-grid';
import { Terminal, Database, Code2 } from 'lucide-react';

export default function ProjectSection() {
  const icons = [Terminal, Code2, Database];

  const formattedProjects = resumeData.projects.map((proj, index) => {
    const Icon = icons[index % icons.length];
    
    return {
      title: proj.name,
      description: proj.bullets[0], // Use the first bullet as a short description
      meta: proj.technologies.join(', '),
      icon: <Icon className="w-4 h-4 text-primary" />,
      status: "Completed",
      tags: proj.technologies,
      colSpan: index === 0 ? 2 : 1, // Make the first item larger
      hasHover: true,
    };
  });

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground/80 border-b border-[var(--border-color)] pb-2">
        Projects
      </h2>
      <div className="w-full max-w-5xl mx-auto">
        <BentoGrid items={formattedProjects} />
      </div>
    </section>
  );
}
