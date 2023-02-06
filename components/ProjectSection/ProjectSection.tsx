import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    image: "/images/project-thumbnails/cinemate.png",
    title: "CineMate",
    about:
      "A 4 week, end of bootcamp final project. The idea of the app is to keep track of all of your friends movie recommendations",
    demoLink: "https://project-cinemate.netlify.app/",
    codeLink: "https://github.com/bennyfreemantle/404-team-name-not-found",
  },
  {
    id: 2,
    image: "/images/project-thumbnails/pomodoro.png",
    title: "Pomodoro Timer",
    about:
      "A simple interval timer to help boost productivity. The user can set their preferred work, break & interval settings",
    demoLink: "https://stunning-sunburst-930b76.netlify.app/",
    codeLink: "https://github.com/bennyfreemantle/pomodoro-timer",
  },
  {
    id: 3,
    image: "/images/project-thumbnails/snip.png",
    title: "Snip",
    about:
      "A mid bootcamp project. The idea is to have a repository of code snippets a user can create & comment on",
    demoLink: "https://bennyfreemantle.github.io/higher-or-lower/",
    codeLink: "",
  },
  {
    id: 4,
    image: "/images/project-thumbnails/hi-low.png",
    title: "Higher Or Lower",
    about:
      "One of my first experiences using a 3rd party API. Written with vanilla JS... Thank humanity for frameworks & libraries!",
    demoLink: "https://bennyfreemantle.github.io/higher-or-lower/",
    codeLink: "https://github.com/bennyfreemantle/higher-or-lower",
  },
  {
    id: 5,
    image: "/images/project-thumbnails/wedding-rsvp.png",
    title: "RSVP",
    about:
      "A personal project for me and my now wife. Instead of collecting our guests RSVP meal preferences via post, they could instead submit online",
    demoLink: "https://www.benandsaffswedding.co.uk/",
    codeLink: "https://github.com/bennyfreemantle/rsvp",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-zinc-50">
      <div className="container mx-auto px-4 py-16">
        <h3 className="inline border-b border-dashed border-zinc-900 text-sm uppercase text-blue-600">
          Latest Works
        </h3>
        <h1 className="pt-2 pb-8 text-2xl font-semibold uppercase tracking-wide text-zinc-900">
          My Projects
        </h1>
        <div className="flex flex-col justify-center gap-12">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
