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
                Hi there! I&apos;m Ben, I&apos;m a junior developer based in
                England. I&apos;ve always been fascinated with technology and
                gaming, ever since I was a kid. I used to spend hours tinkering
                with gadgets and playing games, that interest has only continued
                to grow as I&apos;ve gotten older.
              </p>
            </ContentBlock>
            <ContentBlock title="Journey Through The School of Code Bootcamp">
              <p className="leading-snug">
                I decided to turn my passion into a career, so I enrolled in the
                School of Code bootcamp. It was a life-changing decision for me,
                and I learned so much about coding and about myself. The
                bootcamp was an incredible journey of self-discovery, and it
                opened up so many opportunities for me. I got to connect with
                amazing, hardworking individuals from all walks of life, and
                I&apos;m grateful for the experience.
              </p>
            </ContentBlock>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-36">
            <ContentBlock title="Innovating with a Fresh Perspective">
              <p className="leading-snug">
                As a junior developer, I bring a fresh perspective and drive to
                innovate to the table. I have a passion for exploration and
                continuous learning, and I approach challenges with a unique
                perspective. I&apos;m dedicated to creating projects that not
                only look great but are accessible.
              </p>
            </ContentBlock>
            <ContentBlock title="Balancing Adventure and Tech">
              <p className="leading-snug">
                When I&apos;m not coding, I love to go on adventures and seek
                out new challenges. I love exploring new destinations and
                cultures, staying up-to-date on the latest tech advancements,
                gaming, and finding new ways to push my limits. I recently went
                on a trip to Bali for my honeymoon, and it was an incredible
                experience. We washed elephants, explored the sacred Monkey
                forest, and went on a Jungle Quad biking adventure. My love for
                exploration, learning, and growth drives me and keeps me
                motivated, and I bring that same passion and determination to
                every project I work on.
              </p>
            </ContentBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
