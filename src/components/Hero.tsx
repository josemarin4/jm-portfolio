import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons";
import { Button } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // baseline = default, change this:
          gap: 3,
          mt: 3,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/JoseMarinResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              paddingX: 2.5,
              paddingY: 1.2,
              borderRadius: 2,
              minWidth: 120,
              transform: "translateY(8px)", // 🔥 tweak here
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.07) translateY(2px)", // match the hover as well
              },
            }}
          >
            My Resume
          </Button>
        </a>

        <SocialIcons />
      </Box>
    </Box>
  );
};

export default Hero;
