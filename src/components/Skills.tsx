import { Box, Typography, Grid } from "@mui/material";
import SkillIcon from "./SkillIcon";

export interface Icon {
  src: string;
  alt: string;
  name: string;
}

const Skills = () => {
  const langIcons: Icon[] = [
    { src: "src/assets/icons/javaIcon.svg", alt: "Java Icon", name: "Java" },
    { src: "src/assets/icons/database-sql.svg", alt: "SQL Icon", name: "SQL" },
    { src: "src/assets/icons/jsIcon.svg", alt: "JS Icon", name: "JavaScript" },
    { src: "src/assets/icons/tsIcon.svg", alt: "TS Icon", name: "TypeScript" },
    { src: "src/assets/icons/htmlIcon.svg", alt: "HTML Icon", name: "HTML" },
    { src: "src/assets/icons/cssIcon.svg", alt: "CSS Icon", name: "CSS" },
  ];

  const techIcons: Icon[] = [
    {
      src: "src/assets/icons/springBootIcon.svg",
      alt: "Spring Boot Icon",
      name: "Spring Boot",
    },
    { src: "src/assets/icons/kafkaIcon.svg", alt: "Kafka Icon", name: "Kafka" },
    { src: "src/assets/icons/rectIcon.svg", alt: "React Icon", name: "React" },
    {
      src: "src/assets/icons/materialIcon.svg",
      alt: "Material-UI Icon",
      name: "Material-UI",
    },
    { src: "src/assets/icons/awsIcon.svg", alt: "AWS Icon", name: "AWS" },
    {
      src: "src/assets/icons/dockerIcon.svg",
      alt: "Docker Icon",
      name: "Docker",
    },
    {
      src: "src/assets/icons/gitHubIcon.svg",
      alt: "GitHub Icon",
      name: "GitHub",
    },
    { src: "src/assets/icons/gitIcon.svg", alt: "Git Icon", name: "Git" },
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
