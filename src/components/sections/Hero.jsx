"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const stats = [
  { label: "Projects", value: "6+" },
  { label: "Technologies", value: "React, Next.js, Node.js" },
  { label: "Location", value: "Abuja, Nigeria" },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Hero section for a premium software engineering portfolio.
 */
function Hero() {
  return (
    <section id="top" className="bg-slate-950 text-white">
      <Container>
        <div className="flex flex-col gap-16 py-20 lg:gap-24">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-400">
              Hello, I&apos;m
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Okeke Kachi Felix
              </h1>
              <p className="text-xl font-medium text-slate-300">Software Engineer</p>
              <p className="max-w-2xl text-base leading-8 text-slate-400">
                I&apos;m a software engineer based in Abuja, Nigeria. I enjoy building scalable web applications, experimenting with AI-powered solutions, and creating products with clean architecture and exceptional user experiences.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.9)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl">
                <div className="absolute inset-x-0 -top-8 h-40 bg-sky-400/10 blur-3xl" aria-hidden="true" />
                <div className="absolute right-0 top-12 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 backdrop-blur-md p-5 shadow-2xl transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-[75vh] max-h-[420px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-xl sm:h-[68vh] lg:h-[72vh]">
                    <Image
                      src="/images/profile/hero.png"
                      alt="Portrait of Okeke Kachi Felix on a premium profile card"
                      fill
                      className="object-cover"
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm">
                      <span>🟢</span>
                      <span>Available for Opportunities</span>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-left shadow-sm">
                      <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Currently Building</p>
                      <p className="mt-3 text-base font-semibold text-white">Kachploy</p>
                      <p className="text-sm text-slate-400">AI-powered recruitment platform</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
