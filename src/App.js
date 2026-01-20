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
import Research from "./component/Research";
//MUI
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
//Context
import theme from "./Context/theme";

function App() {
  return (
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
          <Route path="Research" element={<Research />} />
          <Route path="Books" element={<Books />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
