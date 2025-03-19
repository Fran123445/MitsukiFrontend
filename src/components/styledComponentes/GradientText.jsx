import { Typography } from "@mui/material"

function GradientText({ children, variant, colors, fontWeight, sx }) {
  return (
    <Typography
      variant={variant}
      fontWeight={fontWeight}
      sx={{
        backgroundImage: `linear-gradient(45deg, ${colors.join(",")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}

export default GradientText;