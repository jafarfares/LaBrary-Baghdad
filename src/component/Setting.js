import Box from "@mui/material/Box";
//import Button from "@mui/material";
import { Typography } from "@mui/material";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
//icon
//import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
//import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ColorModeContext from "../Context/ColorModeContext";
import { useContext } from "react";
import {Button} from "@mui/material";
export default function Setting() {
  const colorMode = useContext(ColorModeContext)
  return (
    <Box sx={{ width: "100%", padding: "35px" }}>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: 20,
            color: "#2e2b26",
          }}
        >
          Setting
        </Typography>

        {/* <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: 550 }}>Language :</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Typography>English</Typography>
            <LanguageOutlinedIcon />
          </Box> 
        </Box>*/}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: 550 }}>Theme :</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Typography>dark</Typography>
            <Button onClick={colorMode.toggleColorMode}> dark </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: 550 }}>Log out :</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            {/* <Typography>dark</Typography> */}
            <LogoutOutlinedIcon />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
