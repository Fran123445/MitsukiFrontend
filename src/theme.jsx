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

const background = `linear-gradient(to bottom, ${theme.palette.primary.main}CC, ${theme.palette.primary.main}, ${theme.palette.primary.main}CC)`;

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
          minHeight: "100vh",
        },
        body: {
          background: "transparent",
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
          backgroundColor: theme.palette.secondary.main,
        }),
        option: ({ theme }) => ({
          color: theme.palette.primary.main,
          
          // apparently paper has higher priority than option,
          // so I have to use !important
          // if there's other way around it, I have no idea.
          '&:hover, &[aria-selected="true"]': {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: theme.palette.secondary.main,
          },
        }),
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
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.secondary.main,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            }
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
          }
        })
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
        })
      }
    },
  }
});

export default theme;