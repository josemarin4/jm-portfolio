import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

type ProjectType = "img" | "video";

export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  assets: string[];
  type: ProjectType;
};

const projects: Project[] = [
  {
    name: "LearningModules",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, quos alias, aut dicta recusandae rem commodi voluptas, repudiandae dolore quasi dolor voluptatibus quod voluptatum odio distinctio ipsum fuga veniam.",
    url: "",
    technologies: ["/assets/icon/reactIcon.svg"],
    assets: ["/assets/videos/LearningModules.mp4"],
    type: "video",
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
