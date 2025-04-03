import { Box, Typography, Grid } from "@mui/material";
import SkillIcon from "./SkillIcon";

import javaIcon from "../assets/icons/javaIcon.svg";
import sqlIcon from "../assets/icons/database-sql.svg";
import jsIcon from "../assets/icons/jsIcon.svg";
import tsIcon from "../assets/icons/tsIcon.svg";
import htmlIcon from "../assets/icons/htmlIcon.svg";
import cssIcon from "../assets/icons/cssIcon.svg";

import springBootIcon from "../assets/icons/springBootIcon.svg";
import kafkaIcon from "../assets/icons/kafkaIcon.svg";
import reactIcon from "../assets/icons/rectIcon.svg";
import materialIcon from "../assets/icons/materialIcon.svg";
import awsIcon from "../assets/icons/awsIcon.svg";
import dockerIcon from "../assets/icons/dockerIcon.svg";
import gitHubIcon from "../assets/icons/gitHubIcon.svg";
import gitIcon from "../assets/icons/gitIcon.svg";

export interface Icon {
  src: string;
  alt: string;
  name: string;
}

const Skills = () => {
  const langIcons: Icon[] = [
    { src: javaIcon, alt: "Java Icon", name: "Java" },
    { src: sqlIcon, alt: "SQL Icon", name: "SQL" },
    { src: jsIcon, alt: "JS Icon", name: "JavaScript" },
    { src: tsIcon, alt: "TS Icon", name: "TypeScript" },
    { src: htmlIcon, alt: "HTML Icon", name: "HTML" },
    { src: cssIcon, alt: "CSS Icon", name: "CSS" },
  ];

  const techIcons: Icon[] = [
    { src: springBootIcon, alt: "Spring Boot Icon", name: "Spring Boot" },
    { src: kafkaIcon, alt: "Kafka Icon", name: "Kafka" },
    { src: reactIcon, alt: "React Icon", name: "React" },
    { src: materialIcon, alt: "Material-UI Icon", name: "Material-UI" },
    { src: awsIcon, alt: "AWS Icon", name: "AWS" },
    { src: dockerIcon, alt: "Docker Icon", name: "Docker" },
    { src: gitHubIcon, alt: "GitHub Icon", name: "GitHub" },
    { src: gitIcon, alt: "Git Icon", name: "Git" },
  ];
  return (
    <Box
      id="Skills"
      sx={{
        justifyContent: "center",
        mt: { xs: 10 },
        mb: 5,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          marginX: "auto",
          background: "#f9fafb",
          borderRadius: "20px",
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 10,
            color: "secondary.main",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Tech Stack
        </Typography>
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 5,
              ml: { xs: 0, md: 3 },
              color: "black",
            }}
          >
            Languages
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {langIcons.map((lang) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2}
                key={lang.name}
                display="flex"
                justifyContent="center"
              >
                <SkillIcon {...lang} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 5,
              ml: { xs: 0, md: 3 },
              color: "black",
            }}
          >
            Technologies and Frameworks
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {techIcons.map((tech) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2}
                key={tech.name}
                display="flex"
                justifyContent="center"
              >
                <SkillIcon {...tech} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
