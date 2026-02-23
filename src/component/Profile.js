import { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
// Icons
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ProfileSettingsCard from "./ProfileSettingsCard";


export default function Profile() {
  const [active, setActive] = useState("profile");
  const [getImagePro, setGetImagePro] = useState(null);
  const menu = [
    { id: "profile", label: "Profile", icon: <PersonIcon />, count: null },
    { id: "reading", label: "Reading", icon: <MenuBookIcon />, count: 3 },
    { id: "favorite", label: "Favorite", icon: <FavoriteIcon />, count: 12 },
    { id: "wishlist", label: "Wishlist", icon: <BookmarkIcon />, count: 8 },
  ];

  useEffect(()=>{
    async function getImageProfile(){
    try{
      const res=await axios.get("https://abdalrhman.cupital.xyz/api/user/profile",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setGetImagePro(res.data.data);
    }catch(err){
      console.log("error",err);
    }
  }
  getImageProfile();
  },[])

  return (
    <Box
      sx={{
        width: "100%",
        minHeight:"100vh",
        display: "flex",
        gap: "25px",
        padding: "20px 0px",
        // marginLeft: { xs: 0, md: "20px" },

        /* 📱 mobile */
        flexDirection: { xs: "column", md: "row",lg:"row" },
        justifyContent:"center"
      }}
    >
      {/* ===== LEFT CARD ===== */}
      <Box
        sx={{
          backgroundColor: "#fff",
          paddingBottom:{xs:"20px"},
          borderRadius: "25px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          border: "solid 1px #f9de8b",

          /* 📱 mobile */
          width: { xs: "100%", md: "30%" ,lg:"30%"},
          height: { xs: "auto", md: "500px" ,lg:"500px"},
        }}
      >
        {/* Avatar */}
        <Box sx={{ position: "relative" }}>
          <Avatar
            src={getImagePro?.image_url}
            sx={{
              width: 120,
              height: 120,
              bgcolor: "white",
              color: "#c69e5a",
              border: "solid 4px #fad76e",
              fontSize: 36,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 6,
              right: 6,
              width: 32,
              height: 32,
              bgcolor: "#ff9800",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <AddAPhotoIcon sx={{ fontSize: 18, color: "#fff" }} />
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 600,
            fontSize: 20,
            color: "#2e2b26",
          }}
        >
          {/* Abd Alrhman */}
          {getImagePro?.fullname}
        </Typography>

        {/* Menu */}
        <Box
          sx={{
            width: "100%",
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {menu.map((item) => (
            <Button
              key={item.id}
              onClick={() => setActive(item.id)}
              sx={{
                width: "90%",
                px: 2,
                py: 1.5,
                borderRadius: "14px",
                textTransform: "none",
                display: "flex",
                justifyContent: "space-between",
                bgcolor: active === item.id ? "#ffecb3" : "transparent",
                color: active === item.id ? "#ff9800" : "#5f5b52",
                borderLeft:
                  active === item.id
                    ? "4px solid #ff9800"
                    : "4px solid transparent",
                "&:hover": { bgcolor: "#fbecc1" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                {item.icon}
                <Typography>{item.label}</Typography>
              </Box>

              {item.count !== null && (
                <Box
                  sx={{
                    width: 34,
                    height: 30,
                    borderRadius: "30%",
                    bgcolor: "#ff9800",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    border: "2px solid #fad76e",
                  }}
                >
                  {item.count}
                </Box>
              )}
            </Button>
          ))}
        </Box>
      </Box>

      {/* ===== RIGHT CARD ===== */}
      <Box
        sx={{
          // width: "65%",

          /* 📱 mobile */
          width: { xs: "100%", md: "65%",lg:"65%" },
          
        }}
      >
        <ProfileSettingsCard />
      </Box>
    </Box>
  );
}
