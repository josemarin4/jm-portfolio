import { Box } from "@mui/material";
export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  images: string[];
};

const projects: Project[] = [
  { name: "none", description: "", url: "", technologies: [], images: [] },
];
const ProjectsList = () => {
  return <Box></Box>;
};

export default ProjectsList;
