import {
  FacebookRounded,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          bgcolor: "#000",
          color: "#fff",
          paddingY: "5px",
        }}
      >
        <IconButton aria-label="facebook">
          <FacebookRounded sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton aria-label="youtube">
          <YouTube sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton aria-label="twitter">
          <Twitter sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton aria-label="linkedin">
          <LinkedIn sx={{ color: "#fff" }} />
        </IconButton>
        <Typography>
          &copy; {new Date().getFullYear()} Made by Avinash
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
