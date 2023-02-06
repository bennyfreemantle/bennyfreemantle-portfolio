import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const socials = [
  {
    name: "Github",
    icon: <AiFillGithub size={35} />,
    link: "https://github.com/bennyfreemantle",
  },
  {
    name: "Twitter",
    icon: <AiFillTwitterCircle size={35} />,
    link: "https://twitter.com/bennyfreemantle",
  },

  {
    name: "Linkedin",
    icon: <AiFillLinkedin size={35} />,
    link: "https://www.linkedin.com/in/ben-freemantle/",
  },
];
export default function BannerSection() {
  return (
    <div className="p-8">
      <div className="flex justify-center gap-6">
        {socials.map((social) => {
          return (
            <div
              key={social.name}
              className="flex items-center gap-1 text-zinc-50"
            >
              <a href={social.link} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
              {/* <h2 className="font-semibold text-sm">
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              </h2> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
