"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/OkekeKachi",
    ariaLabel: "GitHub profile",
  },
  {
    label: "Email",
    href: "mailto:okekefelix51@gmail.com",
    ariaLabel: "Send email",
  },
  {
    label: "LinkedIn",
    href: "#",
    ariaLabel: "LinkedIn coming soon",
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-slate-800/80 bg-black text-slate-100"
    >
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Okeke Kachi Felix
              </p>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-400">
                A software engineer creating premium web experiences with clean architecture, thoughtful details, and modern tooling.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Navigation
                </p>
                <nav aria-label="Footer navigation">
                  <ul className="space-y-3 text-sm text-slate-400">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="transition hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Social
                </p>
                <nav aria-label="Footer social links">
                  <ul className="space-y-3 text-sm text-slate-400">
                    {socialLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          aria-label={link.ariaLabel}
                          target={link.href === "#" ? undefined : "_blank"}
                          rel={link.href === "#" ? undefined : "noreferrer"}
                          className="inline-block transition duration-300 ease-out hover:text-white hover:-translate-y-0.5"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between gap-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Quick links
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {navLinks.slice(0, 3).map((link) => (
                  <a key={link.label} href={link.href} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-600 hover:text-white">
                    {link.label}
                  </a>
                ))}
                {navLinks.slice(3).map((link) => (
                  <a key={link.label} href={link.href} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-600 hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="self-end">
              <Button
                type="button"
                onClick={scrollToTop}
                size="md"
                whileHover={{ rotate: 4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-white/5 px-5 py-3 text-white transition hover:bg-white/10 hover:shadow-lg"
              >
                Scroll to Top
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Okeke Kachi Felix</p>
          <p>Built with Next.js + Tailwind CSS</p>
          <p className="text-slate-400">A premium portfolio experience.</p>
        </div>
      </Container>
    </motion.footer>
  );
}

export default Footer;
