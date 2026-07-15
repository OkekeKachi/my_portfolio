"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

export default function ProjectDetailLayout({ project }) {
  const router = useRouter();

  return (
    <div className="space-y-16 py-10 sm:py-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-40 bg-sky-400/10 blur-3xl" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-400">Project</p>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Featured</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {project.featured ? "Premium portfolio case study" : "A detailed product story"}
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Technologies</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  View GitHub
                </Button>
                <Button
                  type="button"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Live Demo
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-950">
                <Image
                  src={project.heroImage}
                  alt={`${project.title} hero image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200/5 bg-white py-16 px-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] text-slate-900 sm:px-10">
        <SectionHeading
          eyebrow="Overview"                    
          align="left"
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Problem</p>
            <p className="mt-4 text-base leading-7 text-slate-700">{project.problem}</p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Solution</p>
            <p className="mt-4 text-base leading-7 text-slate-700">{project.solution}</p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-slate-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 text-white shadow-2xl sm:p-10">
        <SectionHeading
          eyebrow="Details"
          title="What made this project stand out"
          description="A few core sections highlight the design decisions, implementation focus, and the outcomes that grew from the work."
          align="left"
          titleClassName="text-white"
          descriptionClassName="text-slate-300"
        />

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] xl:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Challenges</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What I Learned</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-300">
                {project.learned.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Image Gallery</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image) => (
                  <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                    <Image
                      src={image}
                      alt={`${project.title} gallery image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Project Links</p>
              <div className="mt-4 grid gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-white"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  GitHub
                </Button>
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Live Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => router.push("/projects")}
                >
                  Back to Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
