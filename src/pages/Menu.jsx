import CardComponent from "../components/CardComponent";
import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Typography
        variant="h4"
        textAlign={"center"}
        mt={3}
        fontWeight={"bold"}
        color={"#303030"}
      >
        Our Menu
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
          padding: "2rem",
          width: "90%",
          marginX: "auto",
        }}
      >
        <CardComponent
          image={
            "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"Special"}
        />
        <CardComponent
          image={
            "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"Sea Food"}
        />
        <CardComponent
          image={
            "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"Pizza"}
        />
        <CardComponent
          image={
            "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"French Fries"}
        />
        <CardComponent
          image={
            "https://images.pexels.com/photos/4078047/pexels-photo-4078047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"Dumplings"}
        />
        <CardComponent
          image={
            "https://images.pexels.com/photos/12653335/pexels-photo-12653335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"Burger"}
        />
      </Box>
    </Layout>
  );
};

export default Menu;
