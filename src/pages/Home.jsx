import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Stack
        direction={"column"}
        className="hero-section"
        alignItems={"center"}
        justifyContent="center"
      >
        <Box
          sx={{
            borderRadius: 3,
            padding: 3,
            color: "#404040",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "400",
              textAlign: "center",
              fontSize: {
                xs: "4rem",
                sm: "5rem",
              },
            }}
          >
            MUIBurger
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
              },
              textAlign: "center",
            }}
            variant="h3"
          >
            The Best Burger Stop
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <NavLink to={"/menu"}>
              <Button variant="contained">Explore Our Menu</Button>
            </NavLink>
          </Box>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Home;
