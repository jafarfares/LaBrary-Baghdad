import './App.css';
import Hero from './component/Library-interface';
import Register from './component/Register';
import Login from './component/Login';
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './Context/theme';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div>
      <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
