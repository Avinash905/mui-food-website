import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { text: "Home", link: "/mui-food-website" },
  { text: "Menu", link: "/mui-food-website/menu" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "#303030", height: "100%" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, color: "#fff" }}
      >
        MUIBurger
      </Typography>
      <Divider color="gray" />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink
                to={item.link}
                style={{ color: "#fff", margin: "auto" }}
              >
                {item.text}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "sticky", top: "0", zIndex: "1" }}>
      <AppBar
        component="nav"
        sx={{ bgcolor: "#303030" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "goldenrod",
            }}
          >
            MUIBurger
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex", gap: "2rem" } }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                style={{ color: "#fff" }}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
