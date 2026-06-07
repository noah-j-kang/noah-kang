"use client";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { Typewriter } from "@/components/ui/typewriter";
import { SplineScene } from "@/components/ui/splite";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Intro Section */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-4 mb-10 min-h-[40vh] justify-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Hi! I&apos;m <Typewriter text={["Noah Kang"]} loop={false} cursorChar="|" />
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-muted)]">
              Mathematics and Computer Science @ UIUC
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mt-4">
              I'm interested in topology and systems engineering. Welcome to my portfolio!
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden rounded-2xl">
          <div className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
            <SplineScene scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
          <div className="z-10 text-center flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-white tracking-widest uppercase opacity-80 mix-blend-overlay">Explore My Work</h3>
          </div>
        </div>
      </ContainerScroll>

      {/* Main Content Sections */}
      <div id="experience" className="flex flex-col gap-12 relative z-20 pt-10">
        <ExperienceSection />
        <div id="projects" className="pt-10">
          <ProjectSection />
        </div>
        <div id="skills" className="pt-10">
          <SkillSection />
        </div>
        <div id="education" className="pt-10">
          <EducationSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
        <p>{new Date().getFullYear()} Noah Kang</p>
      </footer>
    </main>
  );
}
