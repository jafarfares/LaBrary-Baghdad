// //MUI
// import { Button } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
// import TextField from "@mui/material/TextField";
// //image
// import bookImage1 from "../images/download (3).jfif";
// //react router
// import { useNavigate } from "react-router-dom";
// export default function Register() {
//   //navigate
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         background: "#eef1f6",
        
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "Inter, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "900px",
//           height: "550px",
//           borderRadius: "24px",
//           overflow: "hidden",
//           display: "flex",
//           background: "#fff",
//           boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//         }}
//       >
//         {/* LEFT SIDE */}
//         <div
//           style={{
//             width: "40%",
//             padding: "100px 20px",
//             background: "linear-gradient(180deg, #f2f2f2, #fcefbd)",
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//             }}
//           >
//             <h2 style={{ margin: 0, fontWeight: 700, fontSize: "20px" }}>
//               Create an account
//             </h2>

//             <p
//               style={{
//                 margin: "8px 0 10px",
//                 fontSize: "12px",
//                 color: "#666",
//               }}
//             >
//               If you don't have a previous account
//             </p>
//             <TextField
//               id="standard-basic"
//               label="Full Name"
//               variant="standard"
//               sx={{
//                 marginBottom: "18px",
//                 width: "55%",
//                 "& .MuiInputLabel-root": {
//                   fontSize: "14px",
//                 },
//               }}
//             />
//             <TextField
//               id="standard-basic"
//               label="Email"
//               variant="standard"
//               sx={{
//                 marginBottom: "18px",
//                 width: "55%",
//                 "& .MuiInputLabel-root": {
//                   fontSize: "14px",
//                 },
//               }}
//             />
//             <TextField
//               id="standard-basic"
//               label="Password"
//               variant="standard"
//               sx={{
//                 marginBottom: "18px",
//                 width: "55%",
//                 "& .MuiInputLabel-root": {
//                   fontSize: "14px",
//                 },
//               }}
//             />

//             {/* SUBMIT */}
//             <Button
//               sx={{
//                 height: "35px",
//                 borderRadius: "24px",
//                 border: "none",
//                 background: "#000",
//                 fontWeight: "600",
//                 marginTop: "10px",
//                 width: "55%",
//                 textTransform: "none",
//                 color: "#fff",
//                 "&:hover": { backgroundColor: "#2c2b2b" },
//               }}
//               onClick={()=>navigate("/app")}
//             >
//               Submit
//             </Button>

//             <Button
//               variant="outlined"
//               fullWidth
//               startIcon={<GoogleIcon />}
//               style={{
//                 borderRadius: "25px",
//                 padding: "10px",
//                 textTransform: "none",
//                 fontSize: "12px",
//                 color: "#000",
//                 width: "55%",
//                 marginTop:"10px"
//               }}
//             >
//               Continue with Google
//             </Button>
//             <h5
//               style={{
//                 marginTop: "30px",
//                 marginRight: "120px",
//                 color: "#979393",
//               }}
//             >
//               have any account?
//               <span
//                 style={{
//                   color: "#000",
//                   marginLeft: "5px",
//                   textDecoration: "underline",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => navigate("/Login")}
//               >
//                 Login
//               </span>
//             </h5>
//           </div>
//         </div>
//         {/* RIGHT SIDE */}
//         <div
//           style={{
//             width: "60%",
//             position: "relative",
//             padding: "30px",
//             background: "linear-gradient(180deg, #f2f2f2, #fcefbd)",
//           }}
//         >
//           <img
//             src={bookImage1}
//             alt="team"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "center right",
//               transform: "scale(1.05)",
//               borderRadius: "25px",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }























// MUI
import { Box, Button, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
// image
import bookImage1 from "../images/download (3).jfif";
// router
import { useNavigate } from "react-router-dom";
//axios
import axios from "axios";
//react
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  //stor data
  const [formData, setFormData] = useState({name:"",email:"",password:""});
  //Loading
  const [Loading,setLoading]=useState(false);

  //API
  
  async function RegisterUser(){
    try{
      setLoading(true);
      const response =await axios.post("https://abdalrhman.cupital.xyz/api/register",{
        name:formData.name,
        email:formData.email,
        password:formData.password
      });
      localStorage.setItem("token",response.data.token);
      navigate("/app",{replace:true});
      
    }catch(error){
      console.log("error",error);
    } finally{
      setLoading(false);
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
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* CARD */}
      <Box
        sx={{
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          background: "#fff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",

          /* 📱 mobile */
          width: { xs: "70%", md: "900px" },
          height: { xs: "auto", md: "550px" },
        }}
      >
        {/* LEFT SIDE (FORM) */}
        <Box
          sx={{
            background: "linear-gradient(180deg, #f2f2f2, #fcefbd)",
            display: "flex",
            flexDirection: "column",
            height: "100%",

            /* 📱 mobile */
            width: { xs: "100%", md: "40%" },
            padding: { xs: "50px 40px", md: "100px 20px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ margin: 0, fontWeight: 700}}
            >
              Create an account
            </Typography>

            <Typography
              sx={{
                margin: "0px 0 10px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              If you don't have a previous account
            </Typography>

            {/* FULL NAME */}
            <TextField
              label="Full Name"
              variant="standard"
              sx={{
                marginBottom: "18px",
                //width: "55%",

                /* 📱 mobile */
                width: { xs: "100%", md: "55%" },

                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
            />

            {/* EMAIL */}
            <TextField
              label="Email"
              variant="standard"
              sx={{
                marginBottom: "18px",

                /* 📱 mobile */
                width: { xs: "100%", md: "55%" },

                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
              value={formData.email}
              onChange={(e)=>setFormData({...formData,email:e.target.value})}
            />

            {/* PASSWORD */}
            <TextField
              label="Password"
              variant="standard"
              type="password"
              sx={{
                marginBottom: "18px",

                /* 📱 mobile */
                width: { xs: "100%", md: "55%" },

                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
              value={formData.password}
              onChange={(e)=>setFormData({...formData,password:e.target.value})}
            />

            {/* SUBMIT */}
            <Button
              // onClick={() => navigate("/app")}
              onClick={RegisterUser}
              sx={{
                height: "35px",
                borderRadius: "24px",
                background: "#000",
                fontWeight: 600,
                marginTop: "10px",
                
                textTransform: "none",
                color: "#fff",
                "&:hover": { backgroundColor: "#2c2b2b" },

                /* 📱 mobile */
                width: { xs: "100%", md: "55%" },
              }}
            >
              {Loading ? "loading..." : "Submit"}
            </Button>

            {/* GOOGLE */}

            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                borderRadius: "25px",
                padding: "10px",
                textTransform: "none",
                fontSize: "12px",
                color: "#000",
                
                marginTop: "10px",

                // 📱 mobile 
                width: { xs: "100%", md: "55%" },
              }}
            >
              Continue with Google
            </Button>

            {/* LOGIN LINK */}
            <Typography
              sx={{
                marginTop: "30px",
                
                color: "#979393",
                fontSize: "14px",

                /* 📱 mobile */
                marginRight: { xs: 0, md: "120px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              have any account?
              <Box
                component="span"
                sx={{
                  color: "#000",
                  marginLeft: "5px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Login")}
              >
                Login
              </Box>
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE (IMAGE) – hidden on mobile */}
        <Box
          sx={{
            width: "60%",
            position: "relative",
            padding: "30px",
            background: "linear-gradient(180deg, #f2f2f2, #fcefbd)",

            /* 📱 mobile */
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            component="img"
            src={bookImage1}
            alt="team"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center right",
              transform: "scale(1.05)",
              borderRadius: "25px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
