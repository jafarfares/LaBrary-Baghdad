// MUI
import { Box, Button } from "@mui/material";
// Router
import { Outlet, NavLink, useNavigate } from "react-router-dom";
// Icons
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// Components
import Sidebar from "./Sidebar";
import ShowSidebar from "./ShowSidebarShow";
// Hooks
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Drawer } from "@mui/material";

/* ================= Layout ================= */

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  // =====  only Home =====
  const isHome = location.pathname === "/app" || location.pathname === "/app/";

  const isShowPage = location.pathname === "/app/ShowBook";

  const hasSidebar = isHome || isShowPage;

  const navItems = [
    { name: "Home", path: "." },
    { name: "Books", path: "Books" },
    { name: "Research", path: "Research" },
    { name: "Community", path: "Community" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
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
      }}
    >
      {/* ================= Sidebar ================= */}
      {hasSidebar && (
        <Box
          sx={{
            width: isShowPage ? 80 : 180,
            display: { xs: "none", md: "block" },
            position: "fixed",
            height: "100vh",
          }}
        >
          {isShowPage ? <ShowSidebar /> : <Sidebar />}
        </Box>
      )}

      {/* ================= Content ================= */}
      <Box
        sx={{
          flex: 1,
          ml: {
            xs: 0,
            md: hasSidebar ? (isShowPage ? "80px" : "180px") : 0,
          },
          display: "flex",
          flexDirection: "column",
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
            gap: 2,
            marginLeft: { xs: 0, md: "350px" },
            position:{xs:"sticky",md:"static"},
            bgcolor:{xs:"#fff",md:"transparent"}
          }}
        >
          <ListOutlinedIcon
            sx={{
              display: { xs: "block", md: "none", lg: "none", xl: "none" },
              fontSize: "30px",
            }}
            onClick={() => setOpenMenu(true)}
          />
          {/* Center - Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
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
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: "9px",
              alignItems: "center",
            }}
          >
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
            <h4>jafar fares ali</h4>
            <ExpandMoreIcon />
          </Box>
        </Box>

        {/* ================= Pages ================= */}
        <Box sx={{ p: { xs: 1.5 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
