import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

//icon
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function ShowSidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 80,
        height: "100vh",
        bgcolor: "#F1EFE3",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 3,
        gap:{md:"80px"},
        // justifyContent:"center",
        borderRight:"2px solid #E6E4D9"
      }}
    >
      <IconButton sx={{ color: "#48453E" }} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"7px"}}>

      <IconButton sx={{ color: "#48453E", mt: 0 }} onClick={() => navigate("/app")}>
        <HomeOutlinedIcon />
      </IconButton>

      <IconButton sx={{ color: "#48453E", mt: 0 }} >
        <ImportContactsOutlinedIcon />
      </IconButton>

      <IconButton sx={{ color: "#48453E", mt: 0 }} >
        <FavoriteBorderOutlinedIcon />
      </IconButton>

      <IconButton sx={{ color: "#48453E", mt: 0 }} >
        <CloudDownloadOutlinedIcon />
      </IconButton>

      <IconButton sx={{ color: "#48453E", mt: 0 }} >
        <SettingsOutlinedIcon />
      </IconButton>

      <IconButton sx={{ color: "#48453E", mt: 0 }} >
        <LogoutOutlinedIcon />
      </IconButton>
      </Box>
    </Box>
  );
}
