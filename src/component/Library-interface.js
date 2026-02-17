//Hero page

//MUI
import { Box, Button, Typography } from "@mui/material";
//images
import bookImage1 from "../Assets/images/logo.jfif";
import bookImage2 from "../Assets/images/logo.png";
import bookImage3 from "../Assets/images/logo.jpg";
import bookImage4 from "../Assets/images/logo1.png";
import bookImage5 from "../Assets/images/logo2.png";
//Router
import { useNavigate } from "react-router-dom";

//function Hero
export default function Hero() {
  //navigation
  let navigation = useNavigate();

  //=====UI=====
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        bgcolor: "#eef1f6",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: {xs:1,md:6},
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
          Baghdad Library
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <ink to={"/Login"}>
            <Button
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                color: "#374151",
              }}
              onClick={() => navigation("/Login")}
            >
              Log in
            </Button>
          </ink>

          <Button
            sx={{
              backgroundColor: "#c8a26d",
              color: "#fff",
              borderRadius: "20px",
              px: 3,
              textTransform: "none",
              "&:hover": { backgroundColor: "#b8945f" },
            }}
            onClick={() => navigation("/Register")}
          >
            Sign up
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "23px", md: "30px" },
            fontWeight: 700,
            textAlign: "center",
            mt: {xs:8,md:4},
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          Your digital library <br /> for books and knowledge
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "15px" },
            fontWeight: 500,
            color: "#8d8787",
          }}
        >
          Welcome to Baghdad Library. Your window to the world of knowledge and
          meaningful
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "15px" },
            fontWeight: 500,
            color: "#8d8787",
          }}
        >
          reading. Where books, thought, and inspiration come together
        </Typography>

        <Box
          sx={{
            position: "relative",
            flexGrow: 1,
            width: {xs:"100%",md:"100%"},
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            pb: 4,
            marginRight:{xs:"25px",md:"44px"},
          }}
        >
          {/* Book 1 */}
          <Box
            component="img"
            src={bookImage1}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-230px)",
              height: { xs: "180px", md: "220px" },
              zIndex: 1,
            }}
          />

          {/* Book 2 */}
          <Box
            component="img"
            src={bookImage2}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-160px)",
              height: { xs: "220px", md: "260px" },
              zIndex: 2,
            }}
          />

          {/* Book 3 */}
          <Box
            component="img"
            src={bookImage3}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: { xs: "260px", md: "300px" },
              zIndex: 3,
            }}
          />

          {/* Book 4 */}
          <Box
            component="img"
            src={bookImage4}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(10px)",
              height: { xs: "220px", md: "260px" },
              zIndex: 2,
            }}
          />

          {/* Book 5 (Amazon) */}
          <Box
            component="img"
            src={bookImage5}
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(140px)",
              height: { xs: "180px", md: "220px" },
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
