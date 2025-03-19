import { AppBar, Toolbar } from "@mui/material";
import NavBarElement from "./NavBarElement";
import RecommendationsMenu from "./RecommendationsMenu";

function NavBar() {

  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Toolbar>
        <NavBarElement name={"Home"} path={"/"} />

        <RecommendationsMenu />

        <NavBarElement name={"About"} path={"/about"} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
