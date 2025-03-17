import { createTheme } from "@mui/material";

const customPalette = {
  primary: {
    main: '#010312',
  },
  secondary: {
    main: '#c47704',
  },
  accentOrange: "#db6300"
};

let theme = createTheme({ palette: customPalette });

const background = `linear-gradient(to bottom, ${theme.palette.primary.main}95, ${theme.palette.primary.main}, ${theme.palette.primary.main}95)`;

theme = createTheme(theme, {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
              html: {
                background: background,
                minHeight: "100%",
              },
              body: {
                background: background,
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