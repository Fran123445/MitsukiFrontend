import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#154592",
        },
        secondary: {
            main: "rgba(255, 255, 255, 0.87)",
        }
    },
    components: {
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