// // import { Box, Button } from "@mui/material";
// // import { Outlet, NavLink, useNavigate } from "react-router-dom";
// // import { styled } from "@mui/material/styles";
// // import InputBase from "@mui/material/InputBase";
// // import Sidebar from "./Sidebar";
// // //icon
// // import PersonIcon from "@mui/icons-material/Person";
// // import SearchIcon from "@mui/icons-material/Search";

// // const Search = styled("div")(() => ({
// //   position: "relative",
// //   borderRadius: 20,
// //   backgroundColor: "#eef1f6",
// //   "&:hover": {
// //     backgroundColor: "#e5e5e5",
// //   },
// //   marginLeft: "16px",
// // }));

// // const SearchIconWrapper = styled("div")(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: "100%",
// //   position: "absolute",
// //   pointerEvents: "none",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   // color: 'inherit',
// //   color: "#7c7878",
// //   width: "100%",
// //   "& .MuiInputBase-input": {
// //     padding: theme.spacing(1, 1, 1, 0),

// //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //     transition: theme.transitions.create("width"),
// //     [theme.breakpoints.up("sm")]: {
// //       width: "12ch",
// //       "&:focus": {
// //         width: "20ch",
// //       },
// //     },
// //   },
// // }));

// // export default function MainLayout() {
// //   const navigate = useNavigate();

// //   const ButtonNavBar = [
// //     { name: "Home", path: "." },
// //     { name: "Books", path: "Books" },
// //     { name: "Research", path: "Research" },
// //     { name: "Community", path: "Community" },
// //   ];

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         bgcolor: "#eef1f6",
// //         display: "flex",
// //         flexDirection: "column",
// //         width: "100%",
// //       }}
// //     >
// //       <Box sx={{ width: "200px" }}>
// //         <Sidebar />
// //       </Box>
// //       <Box sx={{ flex:1, display: "flex", flexDirection: "column",width:"84%",marginLeft:"200px" }}>
// //         <Box
// //           sx={{
// //             width: "85%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             px: 2,
// //             py: 1,
// //             bgcolor: "#fff",
// //             zIndex: 999,
// //             position: "fixed",
// //           }}
// //         >
// //           {/* Left - Logo */}
// //           <div style={{ display: "flex", alignItems: "center" }}>
// //             <Search>
// //               <SearchIconWrapper>
// //                 <SearchIcon />
// //               </SearchIconWrapper>
// //               <StyledInputBase
// //                 placeholder="Search…"
// //                 inputProps={{ "aria-label": "search" }}
// //               />
// //             </Search>
// //           </div>

// //           {/* Center - Nav buttons */}
// //           <Box
// //             sx={{
// //               display: "flex",
// //               gap: 2,
// //               position: "absolute",
// //               left: "50%",
// //               transform: "translateX(-50%)",
// //             }}
// //           >
// //             {ButtonNavBar.map((user) => (
// //               <NavLink key={user.path} to={user.path} end>
// //                 {({ isActive }) => (
// //                   <Button
// //                     sx={{
// //                       position: "relative",
// //                       color: isActive ? "#000" : "#7c7878",
// //                       bgcolor: "none",
// //                       overflow: "hidden",

// //                       "&::after": {
// //                         content: '""',
// //                         position: "absolute",
// //                         left: 0,
// //                         bottom: 0,
// //                         width: isActive ? "100%" : "0%",
// //                         height: "3px",
// //                         backgroundColor: "#000",
// //                         transition: "width 0.35s ease",
// //                       },
// //                       "&:hover": {
// //                         bgcolor: "transparent",
// //                       },
// //                     }}
// //                   >
// //                     {user.name}
// //                   </Button>
// //                 )}
// //               </NavLink>
// //             ))}
// //           </Box>

// //           {/* Right - Profile */}
// //           <PersonIcon
// //             onClick={() => navigate("profile")}
// //             sx={{
// //               fontSize: 35,
// //               color: "#000",
// //               cursor: "pointer",
// //               border: "3px solid #000",
// //               padding: "3px",
// //               borderRadius: "50%",
// //             }}
// //           />
// //         </Box>

// //         {/* Pages */}
// //         <Box sx={{ p: 2, marginTop: "50px" }}>
// //           <Outlet />
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // }
















import { Box, Button } from "@mui/material";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Sidebar from "./Sidebar";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "#eef1f6",
  "&:hover": {
    backgroundColor: "#e5e5e5",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#7c7878",
  width: "100%",
  "& .MuiInputBase-input": {
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),

  width: {
    xs: "8ch",   
    sm: "12ch",  
    md: "20ch",  
    lg: "30ch",  
  },

  "&:focus": {
    width:"25ch"
  },
},

}));

export default function MainLayout() {
  const navigate = useNavigate();

  const ButtonNavBar = [
    { name: "Home", path: "." },
    { name: "Books", path: "Books" },
    { name: "Research", path: "Research" },
    { name: "Community", path: "Community" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#eef1f6",
        display: "flex",
        maxWidth:"100%",
        flexDirection:"row"
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 200,
          display: { xs: "none", md: "block",lg:"block" },
          position: "fixed",
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth:{sx:"100%",md:"calc(100% - 200px)"},
          marginLeft:{sx:"0px",md:"200px"},

        }}
      >
        {/* AppBar */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            px: { xs: 1, md: 2 },
            py: 1,
            bgcolor: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            maxWidth:"100%",
          }}
        >
          {/* Left */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center",

           }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
            </Search>
          </Box>

          {/* Center (Laptop + PC) */}
          <Box
            sx={{
              // flex: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "center",
              gap: {
                sx:"0px",
                md:"2px",
                lg:"4px"
              },
            }}
          >
            {ButtonNavBar.map((item) => (
              <NavLink key={item.path} to={item.path} end>
                {({ isActive }) => (
                  <Button
                    sx={{

                      fontSize: {
                        xs: "12px",   
                        sm: "13px",   
                        md: "14px",   
                        lg: "15px",   
                      },
                      color: isActive ? "#000" : "#7c7878",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: isActive ? "100%" : "0%",
                        height: "3px",
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

          {/* Right */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <PersonIcon
              onClick={() => navigate("profile")}
              sx={{
                fontSize: {
                  xs:"32px",
                  sm:"32px",
                  md:"32px",
                  lg:"33px"
                },
                cursor: "pointer",
                border: "2px solid #000",
                borderRadius: "50%",
                p: "4px",
              }}
            />
          </Box>
        </Box>

        {/* Pages */}
        <Box sx={{ p: { xs: 1, md: 2 } ,maxWidth:"100%"}}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
