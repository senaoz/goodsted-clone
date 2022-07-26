import { createTheme } from "@mui/material";

export const themePlayground = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0e0e75",
    },
    secondary: {
      main: "#00bb37",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1a237e",
      secondary: "rgb(103,110,194)",
      disabled: "rgba(26,35,126,0.34)",
      hint: "rgba(4,8,70,0.38)",
    },
    error: {
      main: "#dd2c00",
    },
    info: {
      main: "#1976d2",
    },
    success: {
      main: "#66bb6a",
    },
  },
  typography: {
    fontFamily: "Red Hat Display",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "5rem",
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    button: {
      fontSize: "0.8rem",
      fontWeight: 600,
      lineHeight: 1.1,
    },
    caption: {
      lineHeight: 1.5,
      fontSize: "0.8rem",
    },
  },
  spacing: 8,

  shape: {
    borderRadius: 4,
  },
  props: {
    MuiLink: {
      underline: "none",
    },
  },
});
