import Section from "../../components/ui/Section";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import FeaturedProjects from "../../components/sections/FeaturedProjects";
import projects from "../../data/projects";

export const metadata = {
  title: "Projects | Okeke Kachi Felix",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section className="bg-slate-950 text-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Portfolio work with a focus on product quality and technical clarity."
            description="Explore project case studies that demonstrate modern web applications, clean architecture, and polished user experiences."
            align="left"
          />
        </Container>
      </Section>
      <FeaturedProjects projects={projects} />
    </main>
  );
}
