import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about: "A simple interval timer to help boost productivity",
    demoLink: "https://www.github.com/bennyfreemantle",
    codeLink: "https://www.github.com/bennyfreemantle",
  },
  {
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about: "A simple interval timer to help boost productivity",
    demoLink: "https://www.github.com/bennyfreemantle",
    codeLink: "https://www.github.com/bennyfreemantle",
  },
  {
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about: "A simple interval timer to help boost productivity",
    demoLink: "https://www.github.com/bennyfreemantle",
    codeLink: "https://www.github.com/bennyfreemantle",
  },
  {
    image: "/images/project-thumbnails/pomodoro.jpg",
    title: "Pomodoro Timer",
    about: "A simple interval timer to help boost productivity",
    demoLink: "https://www.github.com/bennyfreemantle",
    codeLink: "https://www.github.com/bennyfreemantle",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-zinc-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="pb-8 text-lg font-semibold uppercase text-gray-900">
          Projects
        </h1>
        <div className="grid grid-cols-1 items-center justify-center gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
