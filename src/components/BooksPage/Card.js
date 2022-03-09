import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { getNewsByCategory } from "../../api";

export default function ImgMediaCard() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  React.useEffect(async () => {
    setError(false);
    const obj = await getNewsByCategory();
    if (obj.success) setData(obj.data);
    else setError(true);
    console.log("====================================");
    console.log(obj);
    console.log("====================================");
  }, []);
  return (
    <Paper elevation={6} sx={{ maxWidth: 345, borderRadius: "16px" }}>
      <CardMedia
        sx={{
          height: "380px",
          objectFit: "cover",
          borderRadius: "16px 16px 0 0",
        }}
        component="img"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: "20px", lineheight: "28px", color: "#0B0B0B" }}
        >
          Title: THE MIDNIGHT LIBRARY
        </Typography>
        <Typography
          sx={{ fontSize: "20px", lineheight: "28px", color: " #8F8F8F" }}
        >
          Author: Matt Haig
        </Typography>
        <Typography
          sx={{ fontSize: "20px", lineheight: "28px", color: "#8F8F8F" }}
        >
          Price: 0.00 $
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Buy
        </Button>
        <Button size="small" variant="contained">
          More
        </Button>
      </CardActions>
    </Paper>
  );
}
