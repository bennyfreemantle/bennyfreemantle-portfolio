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
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about:
      "A simple interval timer to help boost productivity, A simple interval timer to help boost productivity A simple interval timer to help boost productivity",
    demoLink: "https://www.github.com/bennyfreemantle",
    codeLink: "https://www.github.com/bennyfreemantle",
  },
  {
    id: 3,
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about:
      "A simple interval timer to help boost productivity, A simple interval timer to help boost productivity A simple interval timer to help boost productivity",
    demoLink: "https://project-cinemate.netlify.app/",
    codeLink: "https://www.github.com/bennyfreemantle",
  },
  {
    id: 4,
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about:
      "A simple interval timer to help boost productivity, A simple interval timer to help boost productivity A simple interval timer to help boost productivity",
    demoLink: "https://www.github.com/bennyfreemantle",
    codeLink: "https://www.github.com/bennyfreemantle",
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
