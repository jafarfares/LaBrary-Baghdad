import { useState } from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
// Icons
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ProfileSettingsCard from "./ProfileSettingsCard";
import GroupsIcon from "@mui/icons-material/Groups";
//components
import Favorite from "./Favorite";
import Download from "./Download";
import MyLibrary from "./MyLibrary";
import Setting from "./Setting";

// React
import React from "react";

// MUI Components
import { Card, CardContent, IconButton, Rating } from "@mui/material";

// MUI Icons

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomizedDialogs from "./DialogCommunity";
export default function Profile() {
  const [active, setActive] = useState("profile");
  const [getImagePro, setGetImagePro] = useState(null);
  const [MyGroup, setMyGroup] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [categoriesAPI, setCategoriesAPI] = useState([]);
  const [menu, setMenu] = useState([
    { id: "profile", label: "Profile", icon: <PersonIcon /> },
    { id: "favorite", label: "Favorite", icon: <FavoriteIcon />, count: 0 },
    { id: "download", label: "Download", icon: <BookmarkIcon />, count: 0 },
    { id: "myLibrary", label: "My Library", icon: <MenuBookIcon />, count: 0 },
    { id: "MyGroup", label: "My Groups", icon: <GroupsIcon />, count: 0 },
    { id: "setting", label: "Settings", icon: <PersonIcon /> },
    // { id: "logout", label: "Logout", icon: <PersonIcon /> },
  ]);

  useEffect(() => {
    async function getImageProfile() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        setGetImagePro(res.data.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getImageProfile();
  }, []);

  //count favrit
  useEffect(() => {
    async function FavoriteBook() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/books/fav",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        const favCount = res.data.payload.count;
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === "favorite" ? { ...item, count: favCount } : item,
          ),
        );
      } catch (err) {
        console.log("eroor", err);
      }
    }
    FavoriteBook();
  }, []);

  //count read
  useEffect(() => {
    async function myLibraryBook() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/books/to-read",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        const librCount = res.data.payload.count;
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === "myLibrary" ? { ...item, count: librCount } : item,
          ),
        );
      } catch (err) {
        console.log("eroor", err);
      }
    }
    myLibraryBook();
  }, []);

  //download
  useEffect(() => {
    async function downloadBook() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/books/download",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        const downCount = res.data.payload.count;
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === "download" ? { ...item, count: downCount } : item,
          ),
        );
      } catch (err) {
        console.log("eroor", err);
      }
    }
    downloadBook();
  }, []);

  //My Group
  useEffect(() => {
    async function MyGroup() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/groups/my",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        // const groupCount = res.data.payload.count;
        const groupCount = res.data.payload.meta.count ?? 0;
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === "MyGroup" ? { ...item, count: groupCount } : item,
          ),
        );
        setMyGroup(res.data.payload.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    MyGroup();
  }, []);

  //delete Group
  async function DeleteGroup(id) {
    try {
      await axios.delete(
        `https://abdalrhman.cupital.xyz/api/user/groups/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setMyGroup((prevGroup) => {
        const updatedGroups = prevGroup.filter((item) => item.id !== id);
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.id === "MyGroup"
              ? { ...item, count: updatedGroups.length }
              : item,
          ),
        );

        return updatedGroups;
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  //Edit my group
  // async function EditGroup(id,updatedData){
  //   try{
  //     const res=await axios.patch(`https://abdalrhman.cupital.xyz/api/user/groups/${id}`,updatedData,{
  //       headers:{
  //         Authorization:`Bearer ${localStorage.getItem("token")}`
  //       }
  //     });
  //     setMyGroup(prev => prev.map(item => item.id === id ? {...item, ...updatedData} : item));
  //   }catch(error){
  //     console.log("error",error);
  //   }
  // }
  useEffect(() => {
    async function getCategories() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/categories",
        );
        setCategoriesAPI(res.data.payload.data);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
  }, []);

  async function fetchMyGroups() {
    try {
      const res = await axios.get(
        "https://abdalrhman.cupital.xyz/api/user/groups/my",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setMyGroup(res.data.payload.data);

      const groupCount = res.data.payload.meta.count ?? 0;
      setMenu((prevMenu) =>
        prevMenu.map((item) =>
          item.id === "MyGroup" ? { ...item, count: groupCount } : item,
        ),
      );
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        gap: "25px",
        padding: "20px 0px",

        /* 📱 mobile */
        flexDirection: { xs: "column", md: "row", lg: "row" },
        justifyContent: "center",
      }}
    >
      {/* ===== LEFT CARD ===== */}
      <Box
        sx={{
          backgroundColor: "#fff",
          paddingBottom: { xs: "20px" },
          borderRadius: "25px",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
          alignItems: "center",
          pt: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          border: "solid 1px #f9de8b",

          /* 📱 mobile */
          width: { xs: "100%", md: "30%", lg: "30%" },
          height: { xs: "auto", md: "600px", lg: "600px" },
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
          {/* fullname */}
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

              {typeof item.count === "number" && (
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
          /* 📱 mobile */
          width: { xs: "100%", md: "65%", lg: "65%" },
          bgcolor: "#FFFFFF",
          borderRadius: "28px",
        }}
      >
        {/* <ProfileSettingsCard /> */}
        {active === "profile" && <ProfileSettingsCard />}
        {active === "favorite" && <Favorite />}
        {active === "download" && <Download />}
        {active === "myLibrary" && <MyLibrary />}
        {active === "MyGroup" && (
          <Box
            sx={{
              padding: "35px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              // bgcolor:"red",
              gap: 3,
            }}
          >
            {open1 && selectedGroup && (
              <CustomizedDialogs
                open={open1}
                setOpen={setOpen1}
                groupToEdit={selectedGroup}
                categoriesAPI={categoriesAPI}
                fetchGroups={fetchMyGroups}
              />
            )}
            {MyGroup?.length > 0 ? (
              MyGroup?.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    width: { xs: "100%", sm: "300px", md: "45%", lg: "45%" },
                    borderRadius: 3,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    position: "relative",
                    transition: "transform 0.2s",
                    "&:hover": { transform: "translateY(-4px)" },
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      height: 160,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      position: "relative",
                    }}
                  >
                    <img
                      src={item?.image_url}
                      alt="sorry"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </Box>

                  {/* Three dots / options */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 2,
                      display: "flex",
                    }}
                  >
                    <IconButton size="small" color="primary">
                      <EditIcon
                        fontSize="small"
                        onClick={() => {
                          setSelectedGroup(item);
                          setOpen1(true);
                        }}
                        sx={{
                          bgcolor: "#fff",
                          padding: "2px",
                          borderRadius: "5px",
                        }}
                      />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon
                        fontSize="small"
                        onClick={() => DeleteGroup(item.id)}
                        sx={{
                          bgcolor: "#fff",
                          padding: "2px",
                          borderRadius: "5px",
                        }}
                      />
                    </IconButton>
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ paddingTop: 2 }}>
                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mb={1}
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        overflow: "hidden",
                        height: { xs: "auto", md: "100px", lg: "100px" },
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item?.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Rating
                        name="read-only"
                        value={item.rating || 1}
                        readOnly
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography>No groups found.</Typography>
            )}
          </Box>
        )}
        {active === "setting" && <Setting />}
        
      </Box>
    </Box>
  );
}
