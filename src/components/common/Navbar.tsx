import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import HamburguerMenu from "./HamburguerMenu";
import { useState, useEffect } from "react";
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        transition: "all 0.3s ease",
        backgroundColor: scrolled
          ? `${theme.palette.primary.main}CC` // Blue with ~80% opacity
          : theme.palette.primary.main,
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          marginX: "auto",
          paddingX: 2,
          paddingY: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="a"
          href="#Home"
          sx={{ display: "flex", textDecoration: "none", cursor: "pointer" }}
        >
          <Box
            component="img"
            src="../assets/icons/favIcon.png"
            alt="JM Icon"
            sx={{
              marginRight: 1,
              height: 50,
              width: 50,
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.15)",
              borderRadius: "50%",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              },
            }}
          />
          <Box
            sx={{
              color: "common.white",
              fontWeight: "bold",
              fontSize: "1rem",
              marginTop: 1.5,
            }}
          >
            Jose Marin
          </Box>
        </Box>

        {isMobile ? (
          <HamburguerMenu />
        ) : (
          <Box
            component="ul"
            sx={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <Box
                component="a"
                href={"#" + item}
                key={item}
                onClick={() => {
                  setSelectedOption("#" + item);
                }}
                sx={{
                  color:
                    selectedOption === item ? "secondary.main" : "common.white",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
