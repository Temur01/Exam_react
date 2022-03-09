import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getNewsByCategory } from "../../api";

import Card from "./card";
function Categories() {
  return (
    <Box sx={{ background: "#EEEEEE", py: 5 }}>
      <Container>
        <Typography
          sx={{
            color: "#0B0B0B",
            fontSize: "50px",
            textAlign: "center",
            pt: 4,
            pb: 4,
          }}
        >
          Categories
        </Typography>
        <Card />
      </Container>
    </Box>
  );
}

export default Categories;
