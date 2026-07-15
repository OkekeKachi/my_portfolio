"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Container from "../ui/Container";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { navigation, socialLinks, resumeLink } from "../../constants/navigation";

const iconStyles = "h-5 w-5";
const linkBase =
  "relative inline-flex items-center text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-sky-400 after:transition-all after:duration-200 hover:text-white hover:after:w-full";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds, isHome]);

  const scrollToSection = (href) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  };

  const handleSectionNavigation = (event, href) => {
    const targetId = href.replace("#", "");

    if (isHome) {
      event.preventDefault();
      scrollToSection(href);
      return;
    }

    event.preventDefault();
    setIsOpen(false);
    router.push(`/?section=${encodeURIComponent(targetId)}`, { scroll: false });
  };

  return (
    <header className="sticky inset-x-0 top-4 z-50 pointer-events-none">
      <Container className="pointer-events-auto">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-slate-200/20 bg-slate-950/70 px-4 py-3 text-slate-200 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.95)] backdrop-blur-2xl backdrop-saturate-150"
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-3">
            <motion.a
              href={isHome ? "#top" : "/"}
              aria-label="Navigate to hero section"
              onClick={(event) => handleSectionNavigation(event, "#top")}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-lg font-semibold tracking-tight text-white cursor-pointer transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Kachi<span className="text-sky-400">.</span>
            </motion.a>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center gap-8">
              {navigation.map((item) => {
                const sectionKey = item.href.replace("#", "");
                const isActive = activeSection === sectionKey;

                return (
                  <motion.div
                    key={item.href}
                    whileHover={{ y: -1, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link
                      href={isHome ? item.href : "/"}
                      scroll={false}
                      onClick={(event) => handleSectionNavigation(event, item.href)}
                      className={cn(
                        linkBase,
                        isActive
                          ? "text-white after:w-full"
                          : "text-slate-300"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -1, scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/25 bg-white/5 text-slate-200 transition hover:border-sky-400 hover:bg-slate-900/80"
                aria-label={link.label}
              >
                {link.label === "GitHub" ? (
                  <svg className={iconStyles} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.525.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.651.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.623-5.48 5.92.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.287 0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ) : (
                  <svg className={iconStyles} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.028-3.04-1.853-3.04-1.853 0-2.136 1.445-2.136 2.938v5.671H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.853 3.368-1.853 3.6 0 4.268 2.37 4.268 5.458v6.286zM5.337 7.433a2.064 2.064 0 11.001-4.128 2.064 2.064 0 010 4.128zm1.777 13.019H3.56V9h3.554v11.452z" />
                  </svg>
                )}
              </motion.a>
            ))}
            <a
              href={resumeLink.href}
              className="rounded-full bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
            >
              {resumeLink.label}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200/25 bg-white/5 p-2 text-slate-200 transition hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.span>
          </button>
        </motion.nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl border border-slate-200/20 bg-slate-950/90 px-4 py-4 text-slate-200 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.95)]"
            >
              <div className="space-y-3">
                {navigation.map((item) => {
                  const sectionKey = item.href.replace("#", "");
                  const isActive = activeSection === sectionKey;

                  return (
                    <Link key={item.href} href={isHome ? item.href : "/"} scroll={false} passHref>
                      <a
                        onClick={(event) => handleSectionNavigation(event, item.href)}
                        className={cn(
                          "inline-flex w-full text-left text-base font-medium transition-colors duration-200",
                          isActive ? "text-white" : "text-slate-300 hover:text-white"
                        )}
                      >
                        {item.label}
                      </a>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-200/25 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-900/80"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={resumeLink.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
                >
                  {resumeLink.label}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

export default Navbar;
