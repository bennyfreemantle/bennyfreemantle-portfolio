import React from "react";
import ContentBlock from "./ContentBlock/ContentBlock";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto my-16 flex flex-col gap-4 px-4 py-16">
        <div>
          <h1 className="pt-2 pb-8 text-2xl font-semibold uppercase tracking-wide text-zinc-50">
            A little about me
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-zinc-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-36">
            <ContentBlock title="Who Am I ?">
              <p className="leading-snug">
              Hi there! I&apos;m Ben, a Software Engineer based in England with a strong interest in technology and gaming. 
              My fascination with these fields has shaped my career path, leading me to explore how I can contribute to the tech industry.
              </p>
            </ContentBlock>
            <ContentBlock title="Journey Through The School of Code Bootcamp">
              <p className="leading-snug">
              I made the decision to pursue my passion by enrolling in the School of Code bootcamp. This experience was transformative, enhancing my coding skills and personal growth. I connected with a diverse group of individuals, each bringing unique insights and perspectives, which enriched my learning journey
              </p>
            </ContentBlock>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-36">
            <ContentBlock title="My Personal Mission">
              <p className="leading-snug">
              I strive to offer a fresh perspective and a commitment to innovation. I&apos;m passionate about exploring new technologies and continuously improving my skill set. Proficient in TypeScript and AWS services, I approach challenges with a problem-solving mindset, ensuring that my projects are both functional and user-friendly.
              </p>
            </ContentBlock>
            <ContentBlock title="Outside of Coding">
              <p className="leading-snug">
              When I’m not coding, you can usually find me gaming or hanging out with friends, diving into new titles and enjoying some friendly competition. I also love to travel, discovering new places and cultures whenever I get the chance. Whether exploring the latest tech trends or planning my next adventure, I believe these experiences keep my curiosity alive and add an exciting dimension to my life.
              </p>
            </ContentBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
