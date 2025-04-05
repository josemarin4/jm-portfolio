import { Project } from "./ProjectsSection";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectCard = (project: Project) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = project.assets.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 500,
        minWidth: 0,
        minHeight: 650,
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        boxShadow: 4,
        overflow: "hidden",
        mx: "auto",
        flex: "1 1 100%",
      }}
    >
      <CardContent sx={{ px: 3, pt: 3, flex: "1 0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography color="primary" variant="h6" fontWeight="bold">
            {project.name}
          </Typography>
          {project.url && (
            <IconButton
              component="a"
              href={project.url}
              target="_blank"
              sx={{ p: 0 }}
            >
              <Box
                component="img"
                src="/assets/icons/github.svg"
                alt="GitHub Icon"
                sx={{
                  width: 28,
                  height: 28,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </IconButton>
          )}
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 2,
          }}
        >
          {project.technologies.map((tech, index) => (
            <Box
              key={index}
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                backgroundColor: "#f9fafb",
                boxShadow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              <Box
                component="img"
                src={tech}
                alt="Tech Icon"
                sx={{
                  maxWidth: tech.includes("sql") ? "75%" : "60%",
                  maxHeight: tech.includes("sql") ? "75%" : "60%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>

      <Box
        sx={{
          width: "100%",
          height: 300,
          position: "relative",
          px: 2,
          pb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {project.type === "video" ? (
          <CardMedia
            component="video"
            src={project.assets[currentIndex]}
            controls
            autoPlay
            muted
            playsInline
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        ) : (
          <CardMedia
            component="img"
            image={project.assets[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 2,
              objectFit: "cover", // ← this cuts the image
            }}
          />
        )}

        {total > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.3)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.3)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
