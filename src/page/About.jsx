import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import AboutSegment from "../components/AboutSegment";

const aboutData = [
    {
      title: "What's Mitsuki?",
      content: (
        <>
          Besides a witch who happens to love anime and manga, Mitsuki is a content-based recommendation system
          <br />
          that uses a combination of machine learning approaches and vector similarities to analyze your preferences and recommend titles that match your tastes.
          <br />
          (Or recommend you titles based on specific titles you input)
        </>
      ),
    },
    {
      title: "Why does Mitsuki exist?",
      content: "She's cute and I wanted a mascot for the site.",
    },
    {
      title: <>Why does <i>the site</i> Mitsuki exist?</>,
      content: (
        <>
          I've always been a big fan of anime and manga and I've been using AniList for a few years since I wanted to keep track of what I watched and read.
          <br />
          Eventually, I figured that, since I had all my watched anime and manga neatly scored and organized on one site,
          <br />
          I could use that data to recommend titles that matched my tastes.
          <br />
          So here we are.
        </>
      ),
    },
    {
      title: "Why should I use it?",
      content: "I think it's pretty good at recommending things, that's kinda the use case. It's also pretty easy to use, for the quite low price of free.",
    },
    {
      title: "What's with the Halloween colors?",
      content: (
        <>
          I liked the color scheme and it coincidentally matched that of Halloween.
          <br />
          I figured I might as well go along with that idea and that's how Mitsuki came to be a witch.
          <br />
          As for her name, Mitsuki (美月), it means "beautiful moon", and it's simply because my head figured Halloween {'->'} Moon.
        </>
      ),
    },
    {
      title: "Anything going forward?",
      content: "I'll probably keep updating the site with new features and stuff. I want to try to make the recommendations as good as possible.",
    },
  ];
  
  
  function About() {
    const theme = useTheme();
  
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 6, sm: 8 },
          px: { xs: 2, sm: 4 },
          gap: { xs: 4, sm: 8 }
        }}
      >
        {/* Image Section */}
        <Box sx={{
          textAlign: 'center',
          flexShrink: 0,
          mb: { xs: 4, md: 0 },
          mt: { xs: 4 }
        }}>
          <Box
              component="img"
              src="assets/mitsuki.jpeg"
              alt="Mitsuki"
              sx={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
                maxHeight: { xs: '250px', sm: '600px' },
                mx: 'auto',
                mb: 2,
                border: `4px solid ${theme.palette.secondary.main}`,
                borderRadius: theme.shape.borderRadius,
                overflow: "hidden"
              }}
           />
  
          <Typography variant="body1" align="center" sx={{ color: theme.palette.secondary.main }}>
            This is Mitsuki.
            <br />
            Believe it or not, she's the one watching and reading
            <br />
            everything so she can recommend you things
          </Typography>
        </Box>
  
        {/* Text Content Section */}
        <Box sx={{ maxWidth: '600px', width: '100%' }}>
          {aboutData.map((segment, index) => (
            <AboutSegment
              key={index}
              title={segment.title}
              content={segment.content}
            />
          ))}
        </Box>
      </Box>
    );
  }
  
  export default About;