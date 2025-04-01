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
      main: "#1e40af", // Blue
    },
    secondary: {
      main: "#f97316", // Orange
    },
    background: {
      default: "#ffffff", // White background
      paper: "#f9fafb", // Light gray for cards or sections
    },
    text: {
      primary: "#111827", // Dark gray for main text
      secondary: "#6b7280", // Muted gray for subtext
    },
  },
});
export default theme;
