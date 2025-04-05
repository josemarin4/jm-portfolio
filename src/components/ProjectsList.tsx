import { Box, Typography, Grid } from "@mui/material";
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
    name: "RevLearn",
    description:
      "Full-stack educational platform built with Spring Boot, PostgreSQL, and React, designed to streamline course delivery for institutions and enhance the learning experience for students. The platform includes secure account management, course enrollment, progress tracking, and payment integration. Backend event handling is powered by Kafka, and the application is deployed to AWS for scalability. The UI is crafted with Material-UI to ensure a responsive and modern user experience.",
    url: "https://github.com/2406-Ryan-Java-FS/project-2-frontend",
    technologies: [
      "/assets/icons/javaIcon.svg",
      "/assets/icons/springBootIcon.svg",
      "/assets/icons/database-sql.svg",
      "/assets/icons/kafkaIcon.svg",
      "/assets/icons/jsIcon.svg",
      "/assets/icons/rectIcon.svg",
      "/assets/icons/materialIcon.svg",
      "/assets/icons/dockerIcon.svg",
      "/assets/icons/awsIcon.svg",
    ],
    assets: [
      "/assets/pictures/revLearnHome.png",
      "/assets/pictures/revLearnRegister.png",
      "/assets/pictures/revLearnPay.png",
    ],
    type: "img",
  },
  {
    name: "LearningModules",
    description:
      "JavaFX desktop application designed to streamline computer science education through interactive learning modules, topic-specific calculators, auto-graded quizzes, and real-time performance analytics. The platform supports user account management and personalized learning experiences, leading to a reduction of 100+ tutoring hours annually and generating $2,000+ in cost savings for students and the university.",
    url: "",
    technologies: [
      "/assets/icons/javaIcon.svg",
      "/assets/icons/database-sql.svg",
      "/assets/icons/springBootIcon.svg",
      "/assets/icons/jsIcon.svg",
      "/assets/icons/materialIcon.svg",
      "/assets/icons/kafkaIcon.svg",
    ],
    assets: ["/assets/videos/LearningModules.mp4"],
    type: "video",
  },
  {
    name: "JMPortfolio",
    description:
      "Responsive, single-page developer portfolio built with React, TypeScript, and Material UI, featuring smooth animations and interactive components. It showcases full-stack projects, highlights technical proficiencies, and integrates video demos for a richer user experience. Optimized for performance and accessibility, the site is deployed via Cloudflare Pages.",
    url: "https://github.com/josemarin4/jm-portfolio",
    technologies: [
      "/assets/icons/tsIcon.svg",
      "/assets/icons/rectIcon.svg",
      "/assets/icons/materialIcon.svg",
    ],
    assets: [
      "/assets/pictures/jmPortfolio.png",
      "/assets/pictures/jmPortfolioTech.png",
    ],
    type: "img",
  },
];

const ProjectsList = () => {
  return (
    <Box id="Projects" sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      {/* Projects Title */}
      <Box sx={{ maxWidth: "lg", mx: "auto", px: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="secondary"
          sx={{ mb: 6, textAlign: { xs: "center", md: "left" } }}
        >
          Projects
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((proj, index) => (
          <Grid item xs={12} sm={10} md={6} key={index} display="flex">
            <ProjectCard {...proj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsList;
