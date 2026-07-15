"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { skillCategories } from "../../data/skills";

function SkillCategoryCard({ category, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
      whileHover={{ y: -3, scale: 1.02, boxShadow: "0 20px 45px -24px rgba(2, 6, 23, 0.55)" }}
      className="h-full"
    >
      <Card className="h-full border-slate-800/80 bg-slate-900/80 shadow-[0_12px_40px_-24px_rgba(2,6,23,0.8)] backdrop-blur-sm transition-all duration-300 hover:border-slate-700">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
          <span className="text-sm font-medium text-slate-400">{category.skills.length} skills</span>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
          {category.skills.map((skill) => (
            <li key={skill} className="list-none">
              <Badge className="border-slate-700 bg-slate-800/90 text-sm text-slate-200 transition-colors duration-200 hover:border-slate-600 hover:text-white">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
      </Card>
    </motion.article>
  );
}

function Skills() {
  return (
    <Section className="bg-slate-900 text-slate-100" id="skills">
      <Container>
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/5 p-8 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.95)]">
          <SectionHeading
            eyebrow="Skills"
            title="A focused toolkit for building thoughtful digital products."
            description="Modern frontend craft, resilient backend foundations, and practical tooling that keeps projects moving forward."
            align="left"
            className="mx-0 max-w-none"
            eyebrowClassName="text-slate-400"
            titleClassName="text-white"
            descriptionClassName="text-slate-400"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Skills;
