import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import NavBarElement from "./NavBarElement";

function NavBar() {

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Anime recommendations", path: "/recommendation/anime"},
    { label: "Manga recommendations", path: "/recommendation/manga"},
    { label: "About", path: "/about" },
  ];

  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Toolbar>
        {navItems.map((item) => (
          <NavBarElement name={item.label} path={item.path} key={item.label}/>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;