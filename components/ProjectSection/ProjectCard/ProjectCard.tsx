import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import React, { useRef, useState } from "react";

type ProjectCardProps = {
  project: {
    id: number;
    image: string;
    title: string;
    about: string;
    demoLink: string;
    codeLink: string;
  };
};
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useIntersectionObserver(ref, () => {
    setIsVisible(true);
  });

  return (
    <div
      className={`flex flex-col items-center gap-12 opacity-0 transition-all duration-700 ease-linear md:flex-row ${
        project.id % 2 === 0 ? "md:flex-row-reverse" : ""
      } ${isVisible ? "left-0 opacity-100" : ""}`}
    >
      <div
        ref={ref}
        className={`relative aspect-square w-full max-w-xl rounded-md object-contain shadow-sm shadow-zinc-900`}
      >
        <Image
          src={project.image}
          alt={""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
          className="rounded-md"
        />
      </div>
      <div className="w-full">
        <span className="text-4xl font-thin">
          {project.id < 10 ? `0${project.id}.` : `${project.id}.`}
        </span>
        <h1 className="relative text-2xl text-zinc-900 sm:w-5/6">
          <span
            className={`relative ${project.id % 2 === 0 ? "highlight" : ""}`}
          >
            {project.title}
          </span>
        </h1>
        <p className="py-10 sm:w-5/6">{project.about}</p>
        <button className="group relative z-10 rounded border-2 border-slate-600 py-4 px-8 uppercase tracking-widest text-zinc-900">
          Details
        </button>
      </div>
    </div>
  );
}
