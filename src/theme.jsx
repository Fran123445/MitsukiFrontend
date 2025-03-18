import { createTheme } from "@mui/material";

const customPalette = {
  primary: {
    main: '#010312',
  },
  secondary: {
    main: '#c47704',
  },
  accentOrange: "#db6300",
};

let theme = createTheme({
  palette: customPalette,
});

const background = `linear-gradient(to bottom, ${theme.palette.primary.main}95, ${theme.palette.primary.main}, ${theme.palette.primary.main}95)`;

theme = createTheme(theme, {
  transitions: {
    zoomDelay: 50,
    standard: '0.3s ease-in-out'
  },
  breakpoints: {
    values: {
      imageCols: {
        small: 2,
        medium: 3,
        large: 5
      },
      ...theme.breakpoints.values,
    }
  },
  shape: {
    borderRadius: "6px"
  },
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
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: ({ theme }) => ({
          transition: 'color 0.2s ease',
          '&:hover': {
            color: theme.palette.accentOrange
          }
        })
      }
    },
  }
});

export default theme;