import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getNewsByCategory } from "../../api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import book from "../../components/assets/images/book.svg";

function Card() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setError(false);
    setLoading(true);
    const obj = await getNewsByCategory();
    if (obj.success) setData(obj.data.results);
    else setError(true);
    setLoading(false);
  }, []);
  return (
    <NavLink to={"/secondpage"}>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.length ? (
          data.map((item) => {
            return (
              <Paper
                elevation={4}
                sx={{ width: 250, height: 240, mb: 2, borderRadius: "16px" }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "58.8px",
                      py: 2,
                    }}
                    component="img"
                    image={book}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        color: " #0B0B0B",
                        textAlign: "center",
                        fontSize: "26px",
                        lineHeight: "37px",
                        fontWeight: "400",
                        textDecoration: "none",
                      }}
                    >
                      {item.display_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            );
          })
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Container>
    </NavLink>
  );
}

export default Card;
