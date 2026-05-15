import React, { useState } from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";
import { IoIosArrowForward } from "react-icons/io";

const experiences = [
  {
    heading: "Network Engineering Intern",
    para: "Contributed to telecommunications network operations, supporting fibre optic infrastructure, Wi-Fi deployment and configuration, router setup, and advanced network troubleshooting within a live service environment.",
    date: "November 22nd, 2025 - April 22nd, 2026",
  },
  {
    heading: "ICT Support Intern",
    para: "Provided technical support within a county government ICT department, including website maintenance and updates, server administration support, printer and hardware troubleshooting, software installation, and end-user technical assistance.",
    date: "May 28th, 2025 – July 28th, 2025",
  },

  // Add more experiences here
  
  
];

const Experience = React.forwardRef(function Experience(props, ref) {
  const INITIAL_VISIBLE = 2;

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const showMoreExperience = () => {
    setVisibleCount(experiences.length);
  };

  const hasMore = visibleCount < experiences.length;

  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>

      <div className="mt-10 stagger-reveal">
        {experiences.slice(0, visibleCount).map((exp, index) => (
          <ExperienceCard
            key={index}
            heading={exp.heading}
            para={exp.para}
            date={exp.date}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreExperience}
            className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Experience
              <IoIosArrowForward className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>
      )}
    </section>
  );
});

export default Experience;