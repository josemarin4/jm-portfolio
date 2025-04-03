import { Project } from "./ProjectsList";
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const total: number = project.assets.length;

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
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <Box sx={{ position: "relative" }}>
        {project.type === "video" ? (
          <CardMedia
            component="video"
            src={project.assets[currentIndex]}
            style={{ width: "100%", height: "auto" }}
            controls
            autoPlay
            muted
            playsInline
          />
        ) : (
          <CardMedia
            component="img"
            image={project.assets[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
          />
        )}
        {total > 1 && (
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        {total > 1 && (
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
