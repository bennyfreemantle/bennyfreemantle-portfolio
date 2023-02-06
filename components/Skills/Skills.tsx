import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiSupabase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills() {
  return (
    // <section className="bg-[url('/images/darken-35.webp')] bg-cover">
    <section className="bg-zinc-50">
      <div className="container mx-auto flex flex-col gap-10 px-4 py-8">
        <h3 className="py-4 text-center text-2xl text-zinc-900 underline decoration-blue-300 decoration-2">
          Technologies I Use
        </h3>
        <div className="flex cursor-pointer justify-center gap-6 text-zinc-50 md:justify-center md:gap-4">
          <div className="flex flex-col gap-10 md:flex-row">
            <span className="text-blue-500">
              <SiTypescript size={50} />
            </span>
            <span className="text-yellow-300">
              <SiJavascript size={50} />
            </span>
            <span className="text-blue-500">
              <SiTailwindcss size={50} />
            </span>
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            <span className="text-blue-500">
              <FaReact size={50} />
            </span>
            <span className="text-zinc-900">
              <TbBrandNextjs size={50} />
            </span>
            <span className="text-gray-700">
              <SiPrisma size={50} />
            </span>
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            <span className="text-green-600">
              <FaNodeJs size={50} />
            </span>
            <span className="text-blue-500">
              {" "}
              <SiPostgresql size={50} />
            </span>
            <span className="text-green-600">
              {" "}
              <SiSupabase size={50} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
