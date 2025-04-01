import { Box, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const AboutSection = () => {
  return (
    <Box
      id="About"
      sx={{
        scrollMarginTop: "100px",
        display: "flex",
        justifyContent: "center",
        mt: { xs: 10 },
        mb: 5,
        px: 2,
      }}
    >
      <Box
        sx={{
          background: "#f9fafb",
          borderRadius: "20px",
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 6 },
          width: "100%",
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
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Roboto, sans-serif",
            color: "text.primary",
            fontSize: { xs: "1rem", md: "1.05rem" },
            lineHeight: 1.8,
            textAlign: "justify",
            // Make side margins responsive
            marginLeft: { xs: 0, md: 5 },
            marginRight: { xs: 0, md: 5 },
          }}
        >
          Hello, I’m <strong>Jose</strong>, a Full Stack Developer with a solid
          background in Java, Spring Boot, and modern web technologies.
          <br />
          <br />
          I earned my Computer Science degree from the University of Puerto Rico
          and have since been passionate about building applications that solve
          real-world problems—from improving medication management to enhancing
          online learning.
          <br />
          <br />
          At Infosys, I’ve completed advanced training in Java, React, and
          Google Cloud, and have built proof-of-concept apps that integrate REST
          APIs and modern frontend frameworks. I’m constantly growing my skills
          in full-stack development, AWS deployment, and scalable system design.
          <br />
          <br />
          I’ve led the development of projects like{" "}
          <Box
            component="span"
            sx={{ color: "secondary.main", fontWeight: 600 }}
          >
            MedTrack
          </Box>
          , focused on health improvement, and{" "}
          <Box
            component="span"
            sx={{ color: "secondary.main", fontWeight: 600 }}
          >
            RevLearn
          </Box>
          , an educational platform. My work combines clean architecture, React
          with MUI, and robust backend logic.
          <br />
          <br />
          In my free time, I enjoy exploring and learning new technologies like
          Docker and Kafka, and bringing ideas to life through code.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            href="mailto:josemarin@example.com"
            sx={{
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontSize: "0.95rem",
              marginLeft: { xs: 0, md: 5 },
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "primary.dark",
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
