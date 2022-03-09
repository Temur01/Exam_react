import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ImgMediaCard from "./Card";

function BooksPage() {
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
          Books in Combined Print & E-Book Fiction
        </Typography>
        <ImgMediaCard />
      </Container>
    </Box>
  );
}

export default BooksPage;
