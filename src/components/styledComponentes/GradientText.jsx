import { Typography } from "@mui/material"

function GradientText({ children, variant, colors, fontWeight }) {
    return(
        <Typography
          variant={variant}
          fontWeight={fontWeight}
          sx={{
            backgroundImage: `linear-gradient(45deg, ${colors.join(",")})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {children}
        </Typography>
    )
}

export default GradientText;