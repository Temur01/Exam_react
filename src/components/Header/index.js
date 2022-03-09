import React from "react";
import {
  CardMedia,
  Container,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import logo from "../../components/assets/images/Logo.svg";
import { FaSearch } from "react-icons/fa";
function HeaderPage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: "8px",
      }}
    >
      <CardMedia component="img" image={logo} sx={{ width: "188px" }} />

      <FormControl
        variant="outlined"
        sx={{
          ".MuiInput-root": {
            border: "1px solid #DDDDDD",
            borderRadius: "16px",
            py: "5px",
            px: 2,
          },
        }}
      >
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="end">
              <FaSearch />
            </InputAdornment>
          }
        />
      </FormControl>
    </Container>
  );
}

export default HeaderPage;
