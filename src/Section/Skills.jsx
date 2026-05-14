import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaJava, FaReact, FaCss3, FaGithub, FaBootstrap, FaPython } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiKeras, SiScipy, SiMlflow, SiPlotly,  SiGit, SiAnaconda, SiGitlab } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

const skills = [
  { logo: <FaPython />, title: "Python", disc: "AI & Machine Learning Development", color: "#3776AB" },
  { logo: <SiTensorflow />, title: "TensorFlow", disc: "Deep Learning Framework", color: "#FF6F00" },
  { logo: <SiPytorch />, title: "PyTorch", disc: "Neural Network Development", color: "#EE4C2C" },
  { logo: <SiKeras />, title: "Keras", disc: "High-level Deep Learning API", color: "#D00000" },
  { logo: <SiNumpy />, title: "NumPy", disc: "Scientific Computing & Arrays", color: "#013243" },
  { logo: <SiPandas />, title: "Pandas", disc: "Data Analysis & Processing", color: "#150458" },
  { logo: <SiScipy />, title: "SciPy", disc: "Scientific & Statistical Computing", color: "#8CAAE6" },
  { logo: <SiScikitlearn />, title: "Scikit-learn", disc: "Machine Learning Library", color: "#F7931E" },
  { logo: <SiPlotly />, title: "Plotly", disc: "Data Visualisation & Dashboards", color: "#3F4F75" },
  { logo: <SiJupyter />, title: "Jupyter", disc: "AI Research & Experimentation", color: "#F37626" },
  { logo: <SiMlflow />, title: "MLflow", disc: "ML Experiment Tracking & Lifecycle", color: "#0194E2" },
  { logo: <SiGit />, title: "Git", disc: "Version Control System", color: "#F05032" },
  { logo: <FaGithub />, title: "GitHub", disc: "Code Collaboration & Hosting", color: "#E6EDF3" },
  { logo: <SiGitlab />, title: "GitLab", disc: "Version Control, CI/CD & DevOps Collaboration", color: "#FC6D26" },
];

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-3 stagger-reveal">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
