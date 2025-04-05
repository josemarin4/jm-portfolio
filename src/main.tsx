import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import theme from "./theme/theme";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/hero/HeroSection";
import { Box } from "@mui/material";
import ParticleBackground from "./components/hero/ParticleBackground";
import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          ".typewriter-text": {
            fontFamily: "'Poppins', sans-serif",
            color: theme.palette.secondary.main,
          },
          ".typewriter-cursor": {
            color: theme.palette.secondary.main,
            animation: "blink 0.5s infinite",
          },
          "@keyframes blink": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        })}
      />
      <Navbar />
      <Box
        sx={{
          maxWidth: "85%",
          marginX: "auto",
          height: "auto",
          paddingX: { xs: 2, sm: 3 },
          mt: 7,
        }}
      >
        <HeroSection />
        <ParticleBackground />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </Box>
    </ThemeProvider>
  </StrictMode>
);
