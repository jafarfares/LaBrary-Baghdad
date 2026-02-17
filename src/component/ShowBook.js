// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Avatar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// icons
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

// images
// import bookImage5 from "../images/download (1).jfif";
import bookImage5 from "../Assets/images/logo2.png";
export default function ShowBook() {
  const Navigate = useNavigate();
  const [tab, setTab] = useState("details"); // details | comments

  return (
    <Container maxWidth="xl" sx={{ p: 0 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          
        }}
      >
        {/* ===== Book + Title ===== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs:"20px",md: "40px", xl: "100px" },
            zIndex: 2,
            marginLeft:{md:"70px"}
          }}
        >
          <Box
            sx={{
              width: { xs: "100px", md: "200px" },
              height: { xs: "150px", md: "260px" },
              boxShadow:
                "0px 18px 30px rgba(0,0,0,0.20), 0px 8px 12px rgba(0,0,0,0.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src={bookImage5}
              alt="book"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "6px",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Typography variant={  "h4" } sx={{ fontWeight: 500 }}>
              HarryPotter:Half <br sx={{display:{xs:"none",md:"block"}}}/> Blood Prince
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "17px" }}>
              JK Rowling
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Button sx={{ backgroundColor: "#b1b4b2", color: "#fff", borderRadius: "25px" }}>Romantic</Button>
              <Button sx={{ backgroundColor: "#b1b4b2", color: "#fff", borderRadius: "25px" }}>Epic</Button>
              <Button sx={{ backgroundColor: "#b1b4b2", color: "#fff", borderRadius: "25px" }}>Literary</Button>
            </Box>
          </Box>
        </Box>

        {/* ===== Card ===== */}
        <Box
          sx={{
            width: { md: "80%", xl: "90%" },
            backgroundColor: "#FDFCF8",
            marginTop: "-50px",
            borderRadius: "6px",
            padding: { md: "25px 40px" },
          }}
        >
          {/* ===== Tabs ===== */}
          <Box sx={{ display: "flex", gap: "20px", mb: "20px" }}>
            <Typography
              onClick={() => setTab("details")}
              sx={{
                cursor: "pointer",
                fontWeight: tab === "details" ? "bold" : "normal",
                borderBottom: tab === "details" ? "2px solid #161720" : "none",
              }}
            >
              Details
            </Typography>
            <Typography
              onClick={() => setTab("comments")}
              sx={{
                cursor: "pointer",
                fontWeight: tab === "comments" ? "bold" : "normal",
                borderBottom: tab === "comments" ? "2px solid #161720" : "none",
              }}
            >
              Comments
            </Typography>
          </Box>

          {/* ===== DETAILS ===== */}
          {tab === "details" && (
            <Box sx={{ display: "flex" }}>
              {/* Left */}
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  pointerEvents: "none",
                  marginTop: { md: "102px" },
                }}
              >
                <Box sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <Typography fontWeight="bold" fontSize="15px">
                  Description
                </Typography>
                <Typography fontSize="12px">
                  kladvklklvmklsfklbklsfaklbklfsaklbsf scnjsnjcnj v dn vjk dajVJAva
                </Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <Typography fontWeight="bold" fontSize="15px">
                  Roberto Jordan
                </Typography>
                <Typography fontSize="12px">
                  kladvklklvmklsfklbklsfaklbklfsaklbsf
                </Typography>
                </Box>
              </Box>



              {/* Right */}
              <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",width: "50%"}}>

              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:{md:"60px",xl:"100px",},width:"80%"}}>
                <Button
                  sx={{
                    bgcolor: "#161720",
                    color: "#fff",
                    borderRadius: "25px",
                    mb: "15px",
                  }}
                  onClick={() => Navigate("/app")}
                >
                  Start reading <ArrowOutwardIcon sx={{ fontSize: "13px" }} />
                </Button>

                <Box sx={{ display: "flex", gap: "10px", mb: "20px" }}>
                  <BookmarkBorderOutlinedIcon />
                  <MusicNoteOutlinedIcon />
                  <DownloadOutlinedIcon />
                </Box>
                </Box>
                <hr
                 style={{
                 border: "1px solid #f1f1ee",
                 width: "70%",
                 marginBottom:"40px",
                 marginRight:"90px",
                 borderRadius: "3px",
                }}
                />





              
              <Box sx={{ width: "70%",display:"flex",flexDirection:"column",gap: "15px",}}>
                
                <Box sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <Typography fontWeight="bold" fontSize="15px">
                  Language
                </Typography>
                <Typography fontSize="12px">English</Typography>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <Typography fontWeight="bold" fontSize="15px" mt="10px">
                  Paperback
                </Typography>
                <Typography fontSize="12px">450 pages</Typography>
                </Box>

              </Box>
            </Box>
            </Box>
          )}

          {/* ===== COMMENTS ===== */}
          {tab === "comments" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Comment */}
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <Avatar />
                <Box>
                  <Typography fontSize="13px" fontWeight="bold">
                    Ahmed Ali
                  </Typography>
                  <Typography fontSize="12px">
                    This book is amazing, I really enjoyed it.
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <Avatar />
                <Box>
                  <Typography fontSize="13px" fontWeight="bold">
                    Sara Mohammed
                  </Typography>
                  <Typography fontSize="12px">
                    One of the best novels I’ve read.
                  </Typography>
                </Box>
              </Box>

              {/* Input */}
              <Box sx={{ display: "flex", gap: "10px", mt: "10px" }}>
                <Avatar />
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Write a comment..."
                />
                <Button variant="contained">Send</Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
