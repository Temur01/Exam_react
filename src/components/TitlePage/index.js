import { Box, Typography } from "@mui/material";
import React from "react";
import Back from "../../components/assets/images/Homeback.svg";
function TitlePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: `url(${Back})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7)",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "100px",
          lineHeight: "142px",
          color: "white",
          textAlign: "center",
        }}
      >
        BookShop - easy buy books online
      </Typography>
    </Box>
  );
}

export default TitlePage;
