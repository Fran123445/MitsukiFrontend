import { useTheme, useMediaQuery, ImageList, ImageListItem, ImageListItemBar, Box, Paper } from '@mui/material';
import { useContext } from 'react';
import { MediaContext } from '../context/MediaContext';

function Suggestions() {
    
    const { recommendationType, suggestions } = useContext(MediaContext);

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"))
    
    const getCols = () => {
        if (isSmallScreen) return 2
        if (isMediumScreen) return 3
        return 5
    }

    if (!suggestions) {
        return null;
    }

    return(
        (
            <Box 
              sx={{
                backgroundColor: theme.palette.secondary.main,
                padding: 2,
                borderRadius: 2
              }}
            >
              <ImageList cols={getCols()} gap={16}>
                {suggestions.map((item, index) => (
                  <Paper 
                    elevation={3} 
                    key={index}
                    sx={{ 
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 2,
                      overflow: 'hidden',
                      padding: 2,
                      "&:hover": {
                        backgroundColor: "red",
                        cursor: "pointer"
                      }
                    }}
                  >
                    <ImageListItem>
                      <img
                        src={item.image_url.replace("small", "medium")}
                        alt={item.title}
                        loading="lazy"
                        style={{ 
                          aspectRatio: "2/3", 
                          objectFit: "cover"
                        }}
                        onClick={() => window.open(`https://anilist.co/${recommendationType.toLowerCase()}/${item.id}`)}
                      />
                      <ImageListItemBar title={item.title} subtitle={`Score: ${item.score.toFixed(2)}`} />
                    </ImageListItem>
                  </Paper>
                ))}
              </ImageList>
            </Box>
          )
    )
}

export default Suggestions