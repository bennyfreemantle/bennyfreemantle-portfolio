import React from "react";
import BannerSection from "../BannerSection/BannerSection";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto flex h-[70vh] min-h-full flex-col justify-center px-4 text-zinc-50">
        <div className="flex flex-col gap-4">
          <div className="px-4 text-center text-4xl font-bold">
            <h1 className="font-sans">
              Fullstack Junior{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
            <h1>Based in the UK</h1>
          </div>
          <div className="px-4 text-center">
            <h1 className="text-md font-light">
              Bringing a fresh perspective to the tech industry, helping shape
              the future
            </h1>
          </div>
          <div className="mt-8 text-center">
            <a href="#contact">
              <button className="text-md group relative z-10 rounded border-2 border-zinc-50 py-4 px-8 font-semibold uppercase tracking-widest text-zinc-50 transition-all duration-300 ease-in-out hover:text-zinc-50">
                Get In Touch
                <span className="absolute left-0 top-0 -z-10 mx-auto block h-full w-0 rounded bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </a>
            <BannerSection />
          </div>
        </div>
      </div>
    </section>
  );
}
