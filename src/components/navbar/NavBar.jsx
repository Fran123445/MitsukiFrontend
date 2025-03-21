import { AppBar, Toolbar, Box } from "@mui/material";
import NavBarElement from "./NavBarElement";
import RecommendationsMenu from "./RecommendationsMenu";
import UserInfo from "./UserInfo";

function NavBar() {

  return (
    <AppBar position="fixed" color="primary" elevation={1}>
      <Toolbar>
        <NavBarElement name={"Home"} path={"/"} />

        <RecommendationsMenu />

        <NavBarElement name={"About"} path={"/about"} />
        
        <Box sx={{ flexGrow: 1 }} />

        <UserInfo/>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
