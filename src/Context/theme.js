import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Cairo, sans-serif",

    // h1: { fontWeight: 700 },
    // h2: { fontWeight: 600 },
    // h3: { fontWeight: 600 },

    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

export default theme;