"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import projects from "../../data/projects";

function FeaturedProjectCard({ project }) {
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group"
    >
      <Card
        className="h-full overflow-hidden border-slate-200/80 transition-all duration-300 ease-out group-hover:border-slate-300/90 group-hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.22)]"
        onClick={() => router.push(`/projects/${project.slug}`)}
      >
        <div className="overflow-hidden rounded-3xl bg-slate-100">
          <div className="rounded-t-3xl border border-slate-200/10 bg-slate-100">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="border-t border-slate-200/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden"
              >
                <div className="relative w-full pb-[56.25%]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="space-y-5 p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="text-sm leading-7 text-slate-600">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-slate-700">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
              onClick={(event) => {
                event.stopPropagation();
                window.open(project.github, "_blank");
              }}
            >
              GitHub
            </Button>
            {project.demo && project.demo !== "#" && (
              <Button
                size="sm"
                className="w-full sm:w-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demo, "_blank");
                }}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

/**
 * FeaturedProjects displays curated portfolio work in a responsive grid.
 */
function FeaturedProjects({ projects: projectList }) {
  const router = useRouter();
  const featuredProjects = projectList ?? projects.filter((project) => project.featured);

  return (
    <Section className="bg-slate-100 text-slate-900" id="featured-projects">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that highlight impact and craftsmanship."
          description="A selection of featured projects that demonstrates modern web architecture, polished interfaces, and real-world utility."
          align="center"
        />

        <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" onClick={() => router.push("/projects")}>View All Projects</Button>
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedProjects;
