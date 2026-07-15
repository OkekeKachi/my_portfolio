"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const highlights = [
  "Software Engineering Graduate",
  "Full-Stack Development",
  "AI Enthusiast",
  "Problem Solver",
];

const paragraphs = [
  "I’m Okeke Kachi Felix, a software engineering graduate based in Abuja, Nigeria, and I’m passionate about building products that feel both thoughtful and useful.",
  "I enjoy turning ideas into clean, modern web experiences through a mix of design sensitivity, frontend craft, and practical engineering.",
  "What drives me most is the chance to create solutions that are not only polished, but also meaningful to the people using them every day.",
];

function About() {
  return (
    <Section className="bg-slate-50 text-slate-900 border-t-0" id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm sm:items-center lg:items-start"
          >
            <div className="relative flex h-32 w-32 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
              <Image
                src="/images/profile/about.png"
                alt="Portrait of Okeke Kachi Felix"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            <div className="space-y-2 text-center sm:text-center lg:text-left">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                Okeke Kachi Felix
              </h3>
              <p className="text-base text-slate-600">Based in Abuja, Nigeria</p>
            </div>

            <Badge variant="primary">Available for opportunities</Badge>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <SectionHeading
              eyebrow="About"
              title="Crafting thoughtful digital experiences with clarity and purpose."
              align="left"
              className="mx-0 max-w-none"
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2" aria-label="Highlights">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
                  className="list-none"
                >
                  <Card className="h-full border-slate-200/80 bg-slate-900 text-white shadow-sm">
                    <p className="text-sm font-semibold">{highlight}</p>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
