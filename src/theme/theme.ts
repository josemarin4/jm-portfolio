import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#4B6EAF",
    },
    secondary: {
      main: "#7FDBFF",
    },
    background: {
      default: "#F7F9FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5E5E5E",
    },
    success: {
      main: "#A4EB34",
    },
  },
});
export default theme;
