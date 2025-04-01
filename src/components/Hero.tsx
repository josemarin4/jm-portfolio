import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Typewriter from "typewriter-effect";

const Hero: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60vh",
        px: 2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          color: "text.primary",
        }}
      >
        Hi, I'm{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          Jose Marin
        </Box>
      </Typography>

      {/* Subheading with matching size */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          fontFamily: "Poppins, sans-serif",
          fontSize: "1.2rem",
          color: "text.primary",
        }}
      >
        <Box sx={{ mr: 1 }}>I am a</Box>
        <Typewriter
          options={{
            loop: true,
            cursor: "_",
            autoStart: true,
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(" Software Engineer.")
              .pauseFor(1500)
              .deleteAll()
              .typeString(" Java Developer.")
              .pauseFor(1500)
              .deleteAll()
              .typeString(" Full Stack Developer.")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
