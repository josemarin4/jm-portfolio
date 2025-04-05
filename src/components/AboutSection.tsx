import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { Email } from "@mui/icons-material";

const AboutMe = () => {
  return (
    <Box
      id="About"
      sx={{
        scrollMarginTop: { xs: "80px", md: "100px" },
        backgroundColor: "#f9fafb",
        borderRadius: "20px",
        padding: { xs: 3, sm: 6 },
        mt: 8,
        maxWidth: "75rem",
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#f97316",
          fontWeight: "bold",
          mb: 5,
          textAlign: { xm: "center", sm: "center", md: "left" },
        }}
      >
        About Me
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        <Grid item xs={12} md={10}>
          <Stack spacing={3} textAlign="left">
            <Typography>
              Hi, I’m a Full Stack Developer with a strong foundation in{" "}
              <strong>Java</strong>, <strong>Spring Boot</strong>, and modern
              frontend technologies like React. I’m passionate about building
              applications that are both visually polished and functionally
              robust.
            </Typography>

            <Typography>
              After earning my Computer Science degree from the University of
              Puerto Rico, I’ve been focused on building meaningful digital
              experiences—ranging from tools that help manage medication
              schedules to platforms that enhance online education.
            </Typography>

            <Typography>
              At Infosys, I completed advanced training in{" "}
              <strong>Java, React, and Google Cloud</strong>, and contributed to
              projects that integrated <strong>REST APIs</strong>,{" "}
              <strong>cloud infrastructure</strong>, and responsive UI
              components built with modern frontend frameworks.
            </Typography>

            <Typography>
              Some projects I’ve led include:
              <ul style={{ listStylePosition: "inside", paddingLeft: 0 }}>
                <li>
                  <strong>MedTrack</strong> – a health-focused app designed to
                  assist with medication tracking and improvement.
                </li>
                <li>
                  <strong>RevLearn</strong> – an educational platform built to
                  support remote learning and resource sharing.
                </li>
              </ul>
              My approach combines clean architecture, thoughtful user
              experiences, and robust backend logic to deliver complete
              solutions.
            </Typography>

            <Typography>
              Outside of work, I enjoy exploring new technologies like{" "}
              <strong>Docker</strong> and <strong>Kafka</strong>, constantly
              leveling up my skills and finding new ways to bring ideas to life
              through code.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<Email />}
                sx={{ width: "fit-content" }}
                href="mailto:josem.marinhernandez@gmail.com"
              >
                Contact Me
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
