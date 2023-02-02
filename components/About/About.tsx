import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-16">
        <div>
          <h1 className="text-center text-xl text-zinc-50">
            A little about me
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-zinc-50">
          <p className="p-4">
            A Junior Developer based in the UK, with a lifelong interest in
            technology. I&apos;ve made it my mission to work in the tech
            industry, and I bring a passion for solving problems and creating
            innovative solutions to every project.
          </p>
          <p className="p-4">
            When I&apos;m not coding, you can find me hanging out with my four
            feline friends, exploring the outdoors, or trying out new recipes in
            the kitchen. Let&apos;s build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
