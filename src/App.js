import "./App.css";
//Component
import Hero from "./component/Library-interface";
import Register from "./component/Register";
import Login from "./component/Login";
import Profile from "./component/Profile";
import MainLayout from "./component/MainLayout";
import Home from "./component/Home";
import Books from "./component/Books";
import Community from "./component/Community";
// import Research from "./component/Research";
import ShowBook from "./component/ShowBook";
import ShowGroup from "./component/ShowGroup";
import MyLibrary from "./component/MyLibrary";
import Setting from "./component/Setting";
import Favorite from "./component/Favorite";
import Download from "./component/Download";
import Logout from "./component/Logout";
//MUI
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
//Context
// import theme from "./Context/theme";

//import GuestRoute from "./component/GuestRoute";

import ColorModeContext from "./Context/ColorModeContext";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";

function App() {



  
     const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
        typography: {
          fontFamily: "Cairo, sans-serif",
        },
      }),
    [mode]
  );




  return (

    <ColorModeContext.Provider value={colorMode}>
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Community" element={<Community />} />
          {/* <Route path="Research" element={<Research />} /> */}
          <Route path="Books" element={<Books />} />
          <Route path="ShowBook/:id" element={<ShowBook/>}/>
          <Route path="ShowGroup" element={<ShowGroup/>}/>
          <Route path="MyLibrary" element={<MyLibrary/>}/>
          <Route path="Favorite" element={<Favorite/>}/>
          <Route path="Download" element={<Download/>}/>
          <Route path="Logout" element={<Logout/>}/>
          <Route path="Setting" element={<Setting/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default App;
