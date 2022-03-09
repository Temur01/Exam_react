import { Box, CardMedia, Container } from "@mui/material";
import logo from "../../components/assets/images/Logo.svg";
import Algo from "../../components/assets/images/Algorismic.svg";
import { NavLink } from "react-router-dom";

function FooterPage() {
  return (
    <Box
      sx={{
        background: "#C4C4C4",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardMedia component="img" image={logo} sx={{ width: "188px" }} />

        <CardMedia component="img" image={Algo} sx={{ width: "300px" }} />
      </Container>
    </Box>
  );
}

export default FooterPage;
