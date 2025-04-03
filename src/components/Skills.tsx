import { Box, Typography, Grid } from "@mui/material";
import SkillIcon from "./SkillIcon";
export interface Icon {
  src: string;
  alt: string;
  name: string;
}

const Skills = () => {
  const langIcons: Icon[] = [
    { src: "/assets/icons/javaIcon.svg", alt: "Java Icon", name: "Java" },
    { src: "/assets/icons/database-sql.svg", alt: "SQL Icon", name: "SQL" },
    { src: "/assets/icons/jsIcon.svg", alt: "JS Icon", name: "JavaScript" },
    { src: "/assets/icons/tsIcon.svg", alt: "TS Icon", name: "TypeScript" },
    { src: "/assets/icons/htmlIcon.svg", alt: "HTML Icon", name: "HTML" },
    { src: "/assets/icons/cssIcon.svg", alt: "CSS Icon", name: "CSS" },
  ];

  const techIcons: Icon[] = [
    {
      src: "/assets/icons/springBootIcon.svg",
      alt: "Spring Boot Icon",
      name: "Spring Boot",
    },
    { src: "/assets/icons/kafkaIcon.svg", alt: "Kafka Icon", name: "Kafka" },
    { src: "/assets/icons/rectIcon.svg", alt: "React Icon", name: "React" },
    {
      src: "/assets/icons/materialIcon.svg",
      alt: "Material-UI Icon",
      name: "Material-UI",
    },
    { src: "/assets/icons/awsIcon.svg", alt: "AWS Icon", name: "AWS" },
    { src: "/assets/icons/dockerIcon.svg", alt: "Docker Icon", name: "Docker" },
    { src: "/assets/icons/gitHubIcon.svg", alt: "GitHub Icon", name: "GitHub" },
    { src: "/assets/icons/gitIcon.svg", alt: "Git Icon", name: "Git" },
  ];

  return (
    <Box
      id="Skills"
      sx={{
        scrollMarginTop: { xs: "80px", md: "100px" },
        mt: { xs: 10 },
        mb: 5,
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          mx: "auto",
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
            mb: 8,
            color: "secondary.main",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Tech Stack
        </Typography>

        {/* Languages */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 5,
              ml: { xs: 0, md: 3 },
              color: "primary.main",
            }}
          >
            Languages
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
          >
            {langIcons.map((lang) => (
              <Grid item xs="auto" key={lang.name}>
                <SkillIcon {...lang} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: { xs: 6, md: 10 }, mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 5,
              ml: { xs: 0, md: 3 },
              color: "primary.main",
            }}
          >
            Technologies and Frameworks
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
          >
            {techIcons.map((tech) => (
              <Grid item xs="auto" key={tech.name}>
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
