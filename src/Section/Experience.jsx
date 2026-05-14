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
          heading="Network Engineering Intern"
          para="Contributed to telecommunications network operations, supporting fibre optic infrastructure, Wi-Fi deployment and configuration, router setup, and advanced network troubleshooting within a live service environment."
          date="November 22nd, 2025 - April 22nd, 2026"
        />
        <ExperienceCard
          heading="ICT Support Intern"
          para="Provided technical support within a county government ICT department, including website maintenance and updates, server administration support, printer and hardware troubleshooting, software installation, and end-user technical assistance."
          date="May 28th, 2025 – July 28th, 2025"
        />
      </div>
    </section>
  );
});

export default Experience;
