import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CardComponent = ({ image, name }) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      elevation={3}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          ducimus iste, optio quae accusantium reiciendis repellat ea suscipit
          tempora assumenda?
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
