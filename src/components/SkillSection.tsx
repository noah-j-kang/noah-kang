import React from 'react';
import { resumeData } from '@/data/resume';

export default function SkillSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground/80 border-b border-[var(--border-color)] pb-2">
        Technical Skills
      </h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="font-semibold text-sm text-foreground">Languages</div>
          <div className="sm:col-span-2 text-sm text-[var(--text-muted)]">
            {resumeData.skills.languages.join(', ')}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="font-semibold text-sm text-foreground">Tools/Dev</div>
          <div className="sm:col-span-2 text-sm text-[var(--text-muted)]">
            {resumeData.skills.toolsAndDev.join(', ')}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="font-semibold text-sm text-foreground">Data/Arch</div>
          <div className="sm:col-span-2 text-sm text-[var(--text-muted)]">
            {resumeData.skills.dataAndArch.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
}
