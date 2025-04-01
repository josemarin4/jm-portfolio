import { Box, Tooltip } from "@mui/material";
import { Icon } from "./Skills";

const SkillIcon = ({ src, alt, name }: Icon) => {
  return (
    <Tooltip title={name} arrow>
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          cursor: "pointer",
          transition:
            "transform 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1) rotate(5deg)",
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            maxWidth: "70%",
            maxHeight: "70%",
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default SkillIcon;
