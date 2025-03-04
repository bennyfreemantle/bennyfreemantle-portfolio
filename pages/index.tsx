import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Head>
        <title>Ben Freemantle | Web Developer</title>
        <meta
          name="description"
          content="Personal portfolio website to track my journey through the tech world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <ProjectSection />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
