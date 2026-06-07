import React from 'react';
import { resumeData } from '@/data/resume';

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground/80 border-b border-[var(--border-color)] pb-2">
        Work Experience
      </h2>
      <div className="flex flex-col gap-8">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <span className="text-sm text-[var(--text-muted)] font-mono">{exp.period}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm text-[var(--text-muted)] mb-2">
              <span className="font-medium">{exp.company}</span>
              <span>{exp.location}</span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-[var(--text-muted)] text-sm">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
