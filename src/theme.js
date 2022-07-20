import { createTheme } from "@mui/material";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    type: "light",
    primary: {
      main: "#1c2c2e",
      light: "#F3F3F3",
    },
    secondary: {
      main: "#E76E3C",
      light: "#fef6f3",
    },
    text: {
      primary: "#1c2c2e",
      secondary: "#696871",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,

    h1: {
      fontWeight: 600,
      fontSize: "3.875em",
    },
    h2: {
      fontSize: "3.75em",
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "31px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "0.85em",
      lineHeight: 1.3,
    },
    body1: {
      fontWeight: 600,
      fontSize: "1em",
    },
    body2: {
      lineHeight: 1.71,
    },
    button: {
      fontSize: "1em",
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 4,
  },
});
