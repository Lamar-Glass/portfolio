import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const socialLinks = [
  {
    Icon: FaGithub,
    href: "https://github.com/Lamar-Glass",
    hoverColor: "#e6edf3",
  },
  {
    Icon: CiLinkedin,
    href: "https://www.linkedin.com/in/muhammad-abdullah-949b26195/",
    hoverColor: "#0A66C2",
  },
];

function Sidebar() {
  return (
    <div className="animated-border relative flex flex-col p-[2px] rounded-2xl lg:sticky top-20 shadow-2xl">
      <div className="bg-[#1a1816] p-5 lg:p-10 rounded-2xl items-center gap-8 flex flex-col">
        {/* Full image — no cropping */}
        <div className="relative group w-full overflow-hidden rounded-2xl">
          <img
            src="Media.jpg"
            alt="Lamar"
            className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-orange-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-white">
            Lamar
          </h1>
          <div className="h-0.5 w-10 bg-orange-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Bio */}
        <div>
          <p className="font-medium leading-7 text-gray-500 text-center text-xl">
            An <span className="text-white/80">AI Engineer</span> focused on building intelligent systems, machine learning solutions, and scalable software applications.
          </p>
    
        </div>

        {/* Social icons — show original brand colour on hover */}
        <div className="flex gap-4 text-2xl text-gray-500">
          {socialLinks.map((item, i) => {
            const Icon = item.Icon;
            const { href, hoverColor } = item;
            return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 hover:-translate-y-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
              onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Icon />
            </a>
          );
          })}
        </div>

        {/* Download CV — white default, orange on hover */}
        <a
          href="/Lamar.pdf"
          download
          className="relative overflow-hidden group text-center w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95 block uppercase tracking-widest text-sm"
        >
          <span className="relative z-10">Download CV</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
