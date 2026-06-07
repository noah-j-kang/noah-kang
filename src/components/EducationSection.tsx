import React from 'react';
import { resumeData } from '@/data/resume';

export default function EducationSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground/80 border-b border-[var(--border-color)] pb-2">
        Education
      </h2>
      <div className="flex flex-col gap-6">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="text-lg font-semibold text-foreground">{edu.institution}</h3>
              <span className="text-sm text-[var(--text-muted)] font-mono">{edu.period}</span>
            </div>
            <p className="text-[var(--text-muted)] font-medium">{edu.degree}</p>
            {edu.honors && <p className="text-sm italic text-[var(--text-muted)]">{edu.honors}</p>}
            <div className="pt-2">
              <p className="text-sm font-semibold mb-1">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-mono bg-black/5 dark:bg-white/10 rounded-md text-[var(--text-muted)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
