"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import experience from "../../data/experience";

function Experience() {
  return (
    <Section className="bg-slate-950 text-slate-100" id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience & Education"
          title="A timeline of growth, building, and continuous learning."
          description="Selected milestones that reflect both formal education and hands-on product building."
          align="left"
          className="mx-0 max-w-none"
          eyebrowClassName="text-slate-400"
          titleClassName="text-white"
          descriptionClassName="text-slate-400"
        />

        <div className="relative mt-10 ml-2 border-l border-slate-800/80 pl-6 sm:ml-0 sm:pl-8 lg:pl-10">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, boxShadow: "0 16px 38px -24px rgba(15,23,42,0.8)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
              className="relative pb-8 last:pb-0"
            >
              <span className="absolute -left-[1.6rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-slate-200 shadow-[0_0_0_4px_rgba(15,23,42,0.8)] sm:-left-[2.1rem]" />
              <Card className="border-slate-800/80 bg-slate-900/80 shadow-[0_12px_40px_-24px_rgba(2,6,23,0.8)] backdrop-blur-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-300">{item.company}</p>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Experience;
