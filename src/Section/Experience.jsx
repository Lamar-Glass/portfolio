import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
        <ExperienceCard
          heading="I.C.T Intern"
          para="Worked at Faiba Telecommunications under Abra Contractors, assisting in the management and maintenance of network infrastructure. Responsibilities included supporting fibre optic and broadband network operations, troubleshooting connectivity issues, monitoring network performance, and assisting in the installation and configuration of networking equipment."
          date="November 22nd, 2025 – April 22nd, 2026"
        />
        <ExperienceCard
          heading="Software Engineering Intern"
          para="Worked as an ICT and Software Engineering Intern at the Busia County Government, assisting with ICT support, software related tasks, system maintenance, troubleshooting technical issues, and supporting daily technology operations across county departments."
          date="May 28th, 2025 – July 28th, 2025"
        />
      </div>
    </section>
  );
});

export default Experience;
