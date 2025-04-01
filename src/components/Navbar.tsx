import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import HamburguerMenu from "./HamburguerMenu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
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
          sx={{ color: "common.white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          JM
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
            {["About", "Technologies", "Projects"].map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  color: "common.white",
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
