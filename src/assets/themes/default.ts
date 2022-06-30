import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontSize: 72,
      textAlign: "left",
    },
    h2: {
      fontSize: 64,
      textAlign: "left",
    },
    h3: {
      fontSize: 35,
      textAlign: "left",
    },
  },
  palette: {
    primary: {
      main: "#1373eb",
      contrastText: "#fff",
    },
    info: {
      main: "#545f6b",
      contrastText: "#fff",
    },
  },
});

export default defaultTheme;
