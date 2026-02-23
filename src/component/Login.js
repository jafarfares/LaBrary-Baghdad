import { Box, Button, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import bookImage1 from "../Assets/images/logoLogin.jfif";
//react
import { useState } from "react";
//axios
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [Data,setData]=useState({email:null,password:null});
  const [Loading,setLoading]=useState(false);
  
  //  {
  //       headers:{
          
  //         Authorization:`Bearer ${token}`
  //       }
  //     }
  
  async function LoginUser(){
    try{

        setLoading(true);
        // const token = localStorage.getItem("token");
        // if(!token){
        //   console.log("error in login");
        //   return;
        // }
        const response=await axios.post("https://abdalrhman.cupital.xyz/api/login",{
        email:Data.email,
        password:Data.password
      });
      localStorage.setItem("token",response.data.payload.token);
      navigate("/app",{replace:true});
    }catch(error){
      console.log("error",error);
    }
  }

  return (
    /* PAGE */
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#eef1f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* CARD */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #f2f2f2, #fdf3cc)",
          borderRadius: "25px",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",

          /* 📱 mobile only */
          width: { xs: "70%", md: "900px" },
          height: { xs: "auto", md: "550px" },
        }}
      >
        {/* LEFT IMAGE – hidden on mobile */}
        <Box
          sx={{
            width: "60%",
            position: "relative",

            /* 📱 hide image */
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            component="img"
            src={bookImage1}
            alt="login"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              color: "#fff",
            }}
          >
            <Typography sx={{ fontSize: "14px", opacity: 0.9 }}>
              Welcome back
            </Typography>

            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                lineHeight: 1.2,
                mt: "10px",
              }}
            >
              Sign in to <br /> your account
            </Typography>
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Box
          sx={{
            padding: "50px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(180deg, #f2f2f2, #fdf3cc)",
            borderRadius: "25px",

            /* 📱 mobile only */
            width: { xs: "100%", md: "40%" },
            marginLeft: { xs: 0, md: "-30px" },
          }}
        >
          {/* FORM CONTENT */}
          <Box sx={{ mt: { xs: 0, md: "70px" } }}>
            {/* TITLE */}
            <Box
              sx={{
                marginBottom: "15px",

                /* 📱 mobile */
                marginLeft: { xs: 0, md: "54px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h6" sx={{ margin: 0, fontWeight: 700}}>Sign In</Typography>
              <Typography sx={{ fontSize: "12px", color: "#666" }}>
                If you have a previous account
              </Typography>
            </Box>

            {/* EMAIL */}
            <TextField
              label="Email"
              variant="standard"
              sx={{
                marginBottom: "18px",

                /* 📱 mobile */
                width: { xs: "100%", md: "70%" },
                marginLeft: { xs: 0, md: "60px" },

                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
              value={Data.email}
              onChange={(e)=>setData({...Data,email:e.target.value})}
            />

            {/* PASSWORD */}
            <TextField
              label="Password"
              type="password"
              variant="standard"
              sx={{
                marginBottom: "18px",

                /* 📱 mobile */
                width: { xs: "100%", md: "70%" },
                marginLeft: { xs: 0, md: "60px" },

                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
              value={Data.password}
              onChange={(e)=>setData({...Data,password:e.target.value})}
            />

            {/* SIGN IN BUTTON */}
            <Button
              variant="contained"
              onClick={LoginUser}
              sx={{
                backgroundColor: "#000",
                borderRadius: "25px",
                textTransform: "none",
                fontSize: "16px",

                marginTop: "5px",
                marginBottom: "10px",

                /* 📱 mobile */
                width: { xs: "100%", md: "70%" },
                marginLeft: { xs: 0, md: "62px" },
              }}
            >
              {Loading ? "Sign In...":"Sign In"}
            </Button>

            {/* GOOGLE BUTTON */}
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                borderRadius: "25px",
                padding: "10px",
                textTransform: "none",
                fontSize: "12px",
                color: "#000",

                /* 📱 mobile */
                width: { xs: "100%", md: "70%" },
                marginLeft: { xs: 0, md: "62px" },
              }}
              
            >
              Continue with Google
            </Button>
          </Box>

          {/* REGISTER */}
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "14px",
              color: "#777",

              /* 📱 mobile */
              textAlign: { xs: "center" , md: "left"},
              marginLeft:{xs:0,md:"10px"}
            }}
          >
            Don't have an account?{" "}
            <Box
              component="span"
              onClick={() => navigate("/Register")}
              sx={{
                color: "#000",
                cursor: "pointer",
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              Register
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
