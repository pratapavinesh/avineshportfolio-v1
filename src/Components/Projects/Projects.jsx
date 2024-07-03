import React from "react";
import styles from "./Project.module.css";
import ProjectImage11 from "../../Assets/images/project11.png";
import ProjectImage12 from "../../Assets/images/project12.png";
import ProjectImage13 from "../../Assets/images/project13.png";
import ProjectImage14 from "../../Assets/images/project14.png";
// import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "Alphastair",
      subtitle: "Full Stack Web Application",
      description: `A web based game that is fun to play and also helps you learn
      vocabulary. The game is based on the popular game Word Ladder.`,
      images: [ProjectImage11, ProjectImage12, ProjectImage13, ProjectImage14],
      links: [
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/staircase-client",
        },
        {
          platform: "github",
          url: "https://github.com/jindalujjwal0720/staircase-server",
        },
        {
          platform: "blog",
          url: "https://longpost.netlify.app/post/64874aff76436952f5e4d985",
        },
        {
          platform: "demo",
          url: "https://alphastair.netlify.app/",
        },
      ],
      type: "mobile",
    },
  ];

  return (
    <div className={styles.projects} id="projects">
      {/* {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
          type={project.type}
        />
      ))} */}
    </div>
  );
};

export default Projects;
