import { Box, useTheme, useMediaQuery } from "@mui/material";
import { FC, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground: FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return null;
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
      }}
    >
      <Particles
        init={particlesInit}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        options={{
          fullScreen: false,
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 120,
                links: { opacity: 1 },
              },
            },
          },
          particles: {
            number: {
              value: 600,
              density: {
                enable: true,
                area: 2000,
              },
            },
            color: { value: "#f97316" },
            links: {
              enable: true,
              distance: 90,
              color: "#f97316",
              opacity: 0.5,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: {
                top: "bounce",
                bottom: "bounce",
                left: "bounce",
                right: "bounce", // 🔥 ensures full bounce effect in all directions
              },
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </Box>
  );
};

export default ParticleBackground;
