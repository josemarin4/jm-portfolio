import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons";
import { Button } from "@mui/material";
import DevIcon from "../assets/icons/devIcon.svg";

const Hero: FC = () => {
  return (
    <>
      <Box
        id="Home"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "70vh",
          px: 2,
          gap: { xs: 4, md: 8 },
          mt: { xs: 12, md: -4 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              color: "text.primary",
              fontSize: { xs: "1.4rem", sm: "2.5rem", md: "3rem" },
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
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              mt: 2,
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.8rem", sm: "1.2rem" },
              color: "text.primary",
            }}
          >
            <Box sx={{ mr: 1 }}>I am a</Box>
            <Typewriter
              options={{
                loop: true,
                cursor: "_",
                autoStart: true,
                cursorClassName: "typewriter-cursor",
                wrapperClassName: "typewriter-text",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(" Software Engineer.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(" Java Developer.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(" Backend Developer.")
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
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              gap: 3,
              mt: { xs: 9, md: 3 },
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
                color="primary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  paddingX: 2.5,
                  paddingY: 1.2,
                  borderRadius: 2,
                  minWidth: 120,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.07)",
                  },
                }}
              >
                My Resume
              </Button>
            </a>
            <SocialIcons />
          </Box>
        </Box>
        <Box
          component="img"
          src={DevIcon}
          alt="Dev Icon"
          sx={{
            width: { xs: "80%", sm: "60%", md: 400 },
            height: "auto",
            maxWidth: "100%",
            mt: { xs: 10, md: 10 },
            mb: { xs: 20, md: 0 },
          }}
        />
      </Box>
    </>
  );
};

export default Hero;
