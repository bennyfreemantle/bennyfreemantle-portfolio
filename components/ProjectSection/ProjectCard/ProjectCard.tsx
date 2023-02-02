import Image from "next/image";
import React, { useState } from "react";

type ProjectCardProps = {
  project: {
    image: string;
    title: string;
    about: string;
    demoLink: string;
    codeLink: string;
  };
};
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyles = isHovered ? "blur-[2px]" : "";

  return (
    <div
      className="relative w-full cursor-pointer rounded-lg shadow-md shadow-zinc-900 sm:max-w-sm md:max-w-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.about}
          fill
          className={`${hoverStyles} transition-blur duration-300`}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-200 hover:opacity-100">
        <p className="p-2 text-center text-white">{project.about}</p>
        <div className="flex gap-4">
          <a href={project.codeLink} target={"_blank"} rel="noreferrer">
            <button className="rounded bg-zinc-50  p-2 text-sm text-zinc-900 transition-all duration-300  hover:scale-105 hover:bg-blue-600 hover:text-zinc-50">
              {"</Code>"}
            </button>
          </a>
          <a href={project.demoLink} target={"_blank"} rel="noreferrer">
            <button className="rounded bg-zinc-50 p-2 text-sm text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-zinc-50">
              {"Demo"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
