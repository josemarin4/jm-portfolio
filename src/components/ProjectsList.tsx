import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  images: string[];
};

const projects: Project[] = [
  {
    name: "RevLearn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, quos alias, aut dicta recusandae rem commodi voluptas, repudiandae dolore quasi dolor voluptatibus quod voluptatum odio distinctio ipsum fuga veniam.",
    url: "www.github.com",
    technologies: ["src/assets/icon/reactIcon.svg"],
    images: [
      "src/assets/icons/jsIcon.svg",
      "src/assets/icons/materialIcon.svg",
    ],
  },
];
const ProjectsList = () => {
  return (
    <Box>
      {projects.map((proj) => (
        <ProjectCard {...proj} />
      ))}
    </Box>
  );
};

export default ProjectsList;
