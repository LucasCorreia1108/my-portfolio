import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  shape: {
    borderRadius: 20,
  },
  palette: {
    primary: {
      main: "#0b1220",
      dark: "#060b17",
      light: "#172033",
    },
    secondary: {
      main: "#cbd5e1",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    background: {
      default: "#060b17",
      paper: "rgba(15, 23, 42, 0.72)",
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          background:
            "radial-gradient(circle at top left, rgba(56, 189, 248, 0.14), transparent 28%), radial-gradient(circle at right, rgba(168, 85, 247, 0.12), transparent 26%), linear-gradient(180deg, #060b17 0%, #0b1220 48%, #09111d 100%)",
          color: "#e2e8f0",
        },
        "*::selection": {
          backgroundColor: "rgba(56, 189, 248, 0.28)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme)
export default theme;
