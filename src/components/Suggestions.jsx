import { useTheme, useMediaQuery, ImageList, ImageListItem, ImageListItemBar, Box, Paper, Zoom } from '@mui/material';
import { useContext } from 'react';
import { MediaContext } from '../context/MediaContext';

const NUM_COLS_SMALL = 2;
const NUM_COLS_MEDIUM = 3;
const NUM_COLS_LARGE = 5;
const IMAGE_LIST_GAP = 16;
const ZOOM_DELAY = 50;
const PAPER_PADDING = 0.4;
const ASPECT_RATIO = '2/3';

function Suggestions() {
    const { suggestionType, suggestions } = useContext(MediaContext);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
    
    const getCols = () => {
        if (isSmallScreen) return NUM_COLS_SMALL;
        if (isMediumScreen) return NUM_COLS_MEDIUM;
        return NUM_COLS_LARGE;
    };

    if (!suggestions) {
        return null;
    }

    return(
      <Box sx={{ width: '100%', mt: 1 }}>
          <ImageList cols={getCols()} gap={IMAGE_LIST_GAP}>
              {suggestions.map((item, index) => (
                  <Zoom 
                      in={true} 
                      style={{ 
                          transitionDelay: `${index * ZOOM_DELAY}ms`,
                      }}
                      key={`${item.id}`}
                  >
                      <Paper 
                          elevation={4} 
                          sx={{ 
                              overflow: 'hidden',
                              padding: PAPER_PADDING,
                              background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.main}90)`,
                              "&:hover": {
                                  "& .MuiImageListItemBar-title": {
                                      color: theme.palette.accentOrange,
                                  }
                              }
                          }}
                      >
                          <ImageListItem
                              sx={{ 
                                  cursor: 'pointer', 
                              }}
                              onClick={() => window.open(`https://anilist.co/${suggestionType.toLowerCase()}/${item.id}`)}
                          >
                              <img
                                  src={item.image_url}
                                  alt={item.title}
                                  loading="lazy"
                                  style={{ 
                                      aspectRatio: ASPECT_RATIO,
                                      objectFit: "cover",
                                      borderRadius: theme.shape.borderRadius
                                  }}
                              />
                              <ImageListItemBar 
                                  title={item.title} 
                                  subtitle={`Score: ${item.score.toFixed(2)}`}
                                  sx={{
                                      background: 'linear-gradient(rgba(0,0,0,0)1%, rgba(0,0,0,1)95%)',
                                      '& .MuiImageListItemBar-title': {
                                          fontSize: '0.9rem',
                                          fontWeight: '600',
                                          transition: 'color 0.3s ease',
                                      },
                                      '& .MuiImageListItemBar-subtitle': {
                                          color: theme.palette.accentOrange,
                                      }
                                  }}
                              />
                          </ImageListItem>
                      </Paper>
                  </Zoom>
              ))}
          </ImageList>
      </Box>
    );
}

export default Suggestions;