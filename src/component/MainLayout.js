// MUI
import { Box, Button } from "@mui/material";
import { IconButton, Menu, MenuItem } from "@mui/material";

// Router
import { Outlet, NavLink, useNavigate } from "react-router-dom";
// Icons
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import {Avatar} from "@mui/material";
// Components
import Sidebar from "./Sidebar";
// import ShowSidebar from "./ShowSidebarShow";
// Hooks
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Drawer } from "@mui/material";

/* ================= Layout ================= */

export default function MainLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [getImagePro, setGetImagePro] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //get image profile
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

  const location = useLocation();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  // =====  only Home =====
  const isHome = location.pathname === "/app" || location.pathname === "/app/";

  // const isShowPage = location.pathname === "/app/ShowBook";

  // const hasSidebar = isHome || isShowPage;

  const navItems = [
    { name: "Home", path: "." },
    { name: "Books", path: "Books" },
    // { name: "Research", path: "Research" },
    { name: "Community", path: "Community" },
  ];

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        backgroundImage: isHome
          ? {
              md: "url(/desktop-bgr.png)",
              lg: "url(/desktop-bgr.png)",
              xl: "url(/desktop-bgr.png)",
              // xs: "url(/iPhone13&14-1.png)",
            }
          : "none",
        backgroundColor: isHome ? "transparent" : "#F1EFE3",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        width: "100%",
      }}
    >
      {/* ================= Sidebar ================= */}
      {/* {hasSidebar && (
        <Box
          sx={{
            width: isShowPage ? 80 : 180,
            display: { xs: "none", md: "block", lg: "block", xl: "block" },
            //position: "fixed",
            //height: "100vh",
            // position:"sticky",
            top: 0,
            // height:"100vh",
            bgcolor: "#000",
          }}
        >
          {isShowPage ? <ShowSidebar /> : <Sidebar />}
        </Box>
      )} */}

      {/* ================= Content ================= */}
      {/* hasSidebar ? (isShowPage ? "0px" : "0px") : */}
      <Box
        sx={{
          //flex: 1,
          ml: {
            xs: 0,
            md: 0,
            lg: 0,
          },
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          width: "100%",
        }}
      >
        {/* ================= AppBar ================= */}
        <Box
          sx={{
            top: 0,
            zIndex: 1000,
            px: { xs: 1.5, md: 3 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",

            gap: 2,
            // marginLeft: { xs: 0, md: "350px" },
            ml: {
              xs: 0,
              // md: hasSidebar ? (isShowPage ? "0px" : "0px") : 0,
              md: 0,
              lg: 0,
            },
            position: { xs: "sticky", md: "static" },
            bgcolor: { xs: "#fff", md: "transparent", lg: "transparent" },
          }}
        >
          <ListOutlinedIcon
            sx={{
              display: { xs: "block", md: "none", lg: "none", xl: "none" },
              fontSize: "30px",
            }}
            onClick={() => setOpenMenu(true)}
          />

          <Box>{/* <Typography>hello</Typography> */}</Box>
          {/* Center - Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              // justifyContent: "center"
            }}
          >
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} end>
                {({ isActive }) => (
                  <Button
                    sx={{
                      color: isActive ? "#000" : "#7c7878",
                      fontWeight: 500,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: isActive ? "100%" : "0%",
                        height: "2px",
                        bgcolor: "#000",
                        transition: "0.3s",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>

          {/* sidebar mobil */}
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                width: 180,
              },
            }}
          >
            <Sidebar />
          </Drawer>

          {/* Right - Profile */}
          <Box
            sx={{
              // flex: 1,
              display: "flex",
              // justifyContent: "flex-end",
              gap: "9px",
              alignItems: "center",
            }}
          >
            {/* <PersonIcon
              onClick={() => navigate("Profile")}
              sx={{
                fontSize: 34,
                cursor: "pointer",
                border: "2px solid #000",
                borderRadius: "50%",
                p: "4px",
              }}
            /> */}
            {getImagePro?.image_url ? (
              <Avatar
                src={getImagePro.image_url}
                onClick={() => navigate("Profile")}
                sx={{
                  width: 42,
                  height: 42,
                  cursor: "pointer",
                  border: "2px solid #000",
                }}
              />
            ) : (
              <PersonIcon
                onClick={() => navigate("Profile")}
                sx={{
                  fontSize: 34,
                  cursor: "pointer",
                  border: "2px solid #000",
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
            )}
            <h4>{getImagePro?.fullname}</h4>
            {/* <ExpandMoreIcon /> */}

            <Box>
              {/* زر الأيقونة */}
              <IconButton onClick={handleClick} sx={{display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"}}}>
                <ExpandMoreIcon />
              </IconButton>

              {/* القائمة المنسدلة */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                slotProps={{
                  paper: {
                    sx: {
                      width: 200, // 👈 هنا تتحكم بالعرض
                    },
                  },
                }}
              >
                <MenuItem onClick={() => navigate("Profile")}>Profile</MenuItem>
                <MenuItem onClick={() => navigate("MyLibrary")}>
                  My Library
                </MenuItem>
                <MenuItem onClick={() => navigate("Favorite")}>
                  Favorite
                </MenuItem>
                <MenuItem onClick={() => navigate("Download")}>
                  Download
                </MenuItem>
                <MenuItem onClick={() => navigate("Setting")}>
                  Settings
                </MenuItem>
                <MenuItem onClick={() => navigate("Logout")}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>

        {/* ================= Pages ================= */}
        <Box sx={{ p: { xs: 1.5 }, width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

