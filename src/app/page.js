"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  const router = useRouter();
  const [section, setSection] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSection(params.get("section"));
  }, []);
  useEffect(() => {
    if (!section) return;

    const target = document.getElementById(section);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    const params = new URLSearchParams(window.location.search);
    params.delete("section");

    const nextUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    router.replace(nextUrl, { scroll: false });
  }, [router, section]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}