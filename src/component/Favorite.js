import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Favorite() {
  const [getFavorite,serGetFavorite]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    async function FavoriteBook(){
        try{
            const res=await axios.get("https://abdalrhman.cupital.xyz/api/user/books/fav",{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            });
            serGetFavorite(res.data.payload.data);
        }catch(err){
            console.log("eroor",err);
        }
    }
    FavoriteBook();
  },[]);
  return (
    <Box sx={{ width: "100%", padding: "35px" }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" ,gap:2}}>
        <Typography
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: 20,
            color: "#2e2b26",
          }}
        >
          Favorite Books
        </Typography>
        <Box sx={{ width: "100%",display:"flex",flexDirection:"row",alignItems:"center",gap:3,flexWrap: "wrap",}}>
            
                    {getFavorite.map((title) => (
                      <Box
                        
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          width: { xs: "45%", sm: "30%", md: "30%", lg: "30%" },
                        }}
                        onClick={()=>navigate(`/app/ShowBook/${title.id}`)}
                      >
                        <Box
                          sx={{
                            bgcolor: "#F6F6F6",
                            borderRadius: "12px",
                            width: "100%",
                            height: "80px",
                            position: "relative",
                            mt: "70px",
                          }}
                        >
                          <Box
                            component="img"
                            src={title.image_url}
                            sx={{
                              width: "100px",
                              position: "absolute",
                              top: "-70px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              height: "150px",
                            }}
                          />
                        </Box>
                        <Typography mt={2}>{title.title}</Typography>
                      </Box>
                    ))}
                  
        </Box>
      </Box>
    </Box>
  );
}
