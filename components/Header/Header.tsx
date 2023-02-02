import useScrolled from "@/hooks/useScrolled";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled] = useScrolled();

  function scrollToTop() {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }

  return (
    <div
      className={`zinc-900 sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "blur-bg-lg bg-zinc-50" : "bg-zinc-900"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="h-14 w-14 cursor-pointer self-center rounded-full grayscale">
          <Image
            className="rounded-full"
            src={"/images/profile-picture.jpg"}
            alt="A profile picture of me, the author Ben Freemantle"
            fill
          />
        </div>
        <div className="hidden md:flex md:flex-col md:items-center">
          <ul className={`flex ${scrolled ? "text-zinc-900" : "text-zinc-50"}`}>
            <li className="group" onClick={scrollToTop}>
              <a className="relative cursor-pointer px-4 py-2 font-medium">
                Home
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="group">
              <a
                href="#projects"
                className="relative cursor-pointer px-4 py-2 font-medium"
              >
                Projects
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="group">
              <a
                href="#about"
                className="relative cursor-pointer px-4 py-2 font-medium"
              >
                About
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                className="relative cursor-pointer px-4 py-2 font-medium"
              >
                Contact
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className={`flex items-center rounded px-3 py-2 ${
              scrolled ? "text-zinc-900" : "text-zinc-50"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex flex-col items-center gap-12 pt-32" : "hidden"
          } fixed inset-0 z-50 bg-zinc-900 md:hidden`}
        >
          <button
            className={`rounded px-3 py-2 text-zinc-50`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul
            className={`flex flex-col items-center gap-12 text-lg text-zinc-50`}
          >
            <li className="group" onClick={scrollToTop}>
              <a className="relative cursor-pointer px-4 py-2 font-bold">
                Home
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="group" onClick={() => setIsOpen(false)}>
              <a
                href="#projects"
                className="relative cursor-pointer px-4 py-2 font-bold"
              >
                Projects
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="group" onClick={() => setIsOpen(false)}>
              <a
                href="#about"
                className="relative cursor-pointer px-4 py-2 font-bold"
              >
                About
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li className="group" onClick={() => setIsOpen(false)}>
              <a
                href="#contact"
                className="relative cursor-pointer px-4 py-2 font-bold"
              >
                Contact
                <span className="absolute left-0 top-[90%] mx-auto block h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
