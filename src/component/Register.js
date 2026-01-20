//MUI
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import TextField from "@mui/material/TextField";
//image
import bookImage1 from "../images/download (3).jfif";
//react router
import { useNavigate } from "react-router-dom";
export default function Register() {
  //navigate
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
       background: "#eef1f6",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "900px",
          height: "550px",
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          background: "#fff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "40%",
            padding: "100px 20px",
            background: "linear-gradient(180deg, #f2f2f2, #fcefbd)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: "20px" }}>
              Create an account
            </h2>

            <p
              style={{
                margin: "8px 0 10px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              If you don't have a previous account
            </p>
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
              sx={{
                marginBottom: "18px",
                width: "55%",
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{
                marginBottom: "18px",
                width: "55%",
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              sx={{
                marginBottom: "18px",
                width: "55%",
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
              }}
            />

            {/* SUBMIT */}
            <Button
              sx={{
                height: "35px",
                borderRadius: "24px",
                border: "none",
                background: "#000",
                fontWeight: "600",
                marginTop: "10px",
                width: "55%",
                textTransform: "none",
                color: "#fff",
                "&:hover": { backgroundColor: "#2c2b2b" },
              }}
              onClick={()=>navigate("/app")}
            >
              Submit
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              style={{
                borderRadius: "25px",
                padding: "10px",
                textTransform: "none",
                fontSize: "12px",
                color: "#000",
                width: "55%",
                marginTop:"10px"
              }}
            >
              Continue with Google
            </Button>
            <h5
              style={{
                marginTop: "30px",
                marginRight: "120px",
                color: "#979393",
              }}
            >
              have any account?
              <span
                style={{
                  color: "#000",
                  marginLeft: "5px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Login")}
              >
                Login
              </span>
            </h5>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div
          style={{
            width: "60%",
            position: "relative",
            padding: "30px",
            background: "linear-gradient(180deg, #f2f2f2, #fcefbd)",
          }}
        >
          <img
            src={bookImage1}
            alt="team"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center right",
              transform: "scale(1.05)",
              borderRadius: "25px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
