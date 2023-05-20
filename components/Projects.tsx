import React from 'react';
import ProjectBox from './ProjectBox'

const projectList = [
  {
    name: "Pathfinding Visualizer",
    link: "https://github.com/thanosan23/Pathfinding",
    description: "Developed a pathfinding visualizer in Python that provides a visualization given a start point, an end point, and an algorithm."
  },
  {
    name: "Write It Down",
    link: "https://github.com/thanosan23/WriteItDown",
    description: "Created a simple note-taking application using Next.js, Tailwind CSS, Framer Motion, NextAuth and Prisma."
  },
  {
    name: "Research Buddy",
    link: "https://github.com/thanosan23/ResearchBuddy",
    description: "Created a chrome extension that uses machine learning to help students research more effectively"
  },
  {
    name: "Tutorial Tube",
    link: "https://github.com/thanosan23/TutorialTube",
    description: "Created a video search engine using state of the art machine learning models and algorithms"
  },
];

const Projects = () => {
  return (
    <>
      <h3 className="text-4xl text-white font-bold text-center mt-12 pb-20">Projects</h3>
      <div className="flex flex-wrap items-center justify-center gap-3">
      {
        projectList.map(({name, link, description}) =>

          <ProjectBox key={name} projectName={ name } link={ link }>
            { description }
          </ProjectBox>
        )
      }
      </div>
    </>
  );
};

export default Projects;
