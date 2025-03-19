import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";

function RecommendationsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mediaBasedAnchorEl, setMediaBasedAnchorEl] = useState(null);
  const [userBasedAnchorEl, setUserBasedAnchorEl] = useState(null);
  const [menuWidth, setMenuWidth] = useState("auto");
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleClick = (event) => {
    setMenuWidth(event.currentTarget.clientWidth);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMediaBasedAnchorEl(null);
    setUserBasedAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <>
      <Button
        disableRipple={true}
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          color: location.pathname.includes("/recommendation")
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          backgroundColor: location.pathname.includes("/recommendation")
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
        }}
      >
        Recommendations
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ sx: { width: menuWidth } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={(e) => setMediaBasedAnchorEl(e.currentTarget)}>
          Media Based
        </MenuItem>
        <Menu
          anchorEl={mediaBasedAnchorEl}
          open={Boolean(mediaBasedAnchorEl)}
          onClose={handleClose}
          elevation={0}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleNavigation("/recommendation/anime")}>
            Anime
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/recommendation/manga")}>
            Manga
          </MenuItem>
        </Menu>

        <MenuItem onClick={(e) => setUserBasedAnchorEl(e.currentTarget)}>
          User Based
        </MenuItem>
        <Menu
          anchorEl={userBasedAnchorEl}
          open={Boolean(userBasedAnchorEl)}
          onClose={handleClose}
          elevation={0}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleNavigation("/recommendation/user/anime")}>
            Anime
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/recommendation/user/manga")}>
            Manga
          </MenuItem>
        </Menu>
      </Menu>
    </>
  );
}

export default RecommendationsMenu;