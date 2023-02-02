import Image from "next/image";
import React from "react";
import BannerSection from "../BannerSection/BannerSection";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto flex h-[70vh] min-h-full flex-col justify-center px-4 text-zinc-50">
        <div className="flex flex-col gap-4">
          <div className="px-4 text-center text-4xl font-bold">
            <h1>
              Fullstack Junior{" "}
              <span className="text-blue-600">Web Developer</span>
            </h1>
            <h1>Based in the UK</h1>
          </div>
          <div className="px-4 text-center">
            <h1 className="text-sm font-light">
              Bringing a fresh perspective to the tech industry, helping shape
              the future
            </h1>
            {/* "Fresh Perspective, Future-Forward Web Solutions. As a Fullstack
            Junior Web Developer, I bring a unique blend of creativity and
            technical skills to the table, delivering impactful and innovative
            web solutions for businesses seeking a fresh perspective. Embrace
            change and stand out from the crowd with my cutting-edge ideas and
            timely delivery." */}
          </div>
          <div className="mt-8 text-center">
            <button className="text-md rounded bg-zinc-50 py-3 px-10 font-semibold text-zinc-900 transition-all duration-200 ease-in hover:bg-blue-600 hover:text-zinc-50">
              Get In Touch
            </button>
            <BannerSection />
          </div>
        </div>
      </div>
    </section>
  );
}
