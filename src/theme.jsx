import { createTheme } from "@mui/material";

let theme = createTheme({ });

theme = createTheme(theme, {
    palette: {
        primary: theme.palette.augmentColor({ color: { main: "#154592" } }),
        secondary:theme.palette.augmentColor({ color: { main: "#FFFFFF" } }),
        tertiary: theme.palette.augmentColor({ color: { main: "#ff5722" } })
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
              html: {
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                minHeight: "100%",
              },
              body: {
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                minHeight: "100vh",
              },
            },
          },
          
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: ({ theme }) =>  ({
                    backgroundColor: theme.palette.secondary.main
                }),
                paper: ({ theme }) => ({
                    backgroundColor: theme.palette.secondary.main
                })
            }
        },
        MuiAccordion: {
            styleOverrides: {
              root: ({ theme }) => ({
                backgroundColor: theme.palette.secondary.main,
              }),
            },
          },
    }
});

export default theme;