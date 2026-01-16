import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import bookImage1 from "../images/download (3).jfif";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
export default function Login() {

  //navigate
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#bfc3c9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "95%",
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
        {/* RIGHT SIDE */}
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
              width:"100%"
            }}
          >
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: "20px" }}>
              Create an account
            </h2>

            <p
              style={{
                margin: "8px 0 30px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              If you have a previous account
            </p>

            {/* INPUTS */}
            <div style={{display:"flex",flexDirection:"column",gap:"5px",width:"100%",justifyContent:"center",alignItems:"center"}}>
            <TextField id="standard-basic" label="Email" variant="standard" sx={{width:"60%"}}/>
            <TextField id="standard-basic" label="Password" variant="standard" sx={{width:"60%"}}/>
            </div>
            {/* <input
              type="Password"
              placeholder="Password"
              style={{
                height: "35px",
                borderRadius: "24px",
                border: "none",
                padding: "0 20px",
                fontSize: "14px",
                marginBottom: "18px",
                outline: "none",
                width: "60%",
              }}
            /> */}
            {/* SUBMIT */}
            <Button
              sx={{
                height: "35px",
                borderRadius: "24px",
                border: "none",
                background: "#ffd54f",
                fontWeight: "600",
                marginTop: "10px",
                width: "70%",
                textTransform: "none",
                color: "#000",
                "&:hover": { backgroundColor: "#fad047" },
              }}
            >
              Submit
            </Button>

            {/* GOOGLE */}
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              sx={{
                mt: 2,
                height: "48px",
                borderRadius: "24px",
                width: "70%",
                textTransform: "none",
                fontWeight: 500,
                color: "#000",
                borderColor: "#ddd",
              }}
            >
              Google
            </Button>
            <h5
              style={{
                marginTop: "143px",
                marginRight: "0px",
                color: "#979393",
              }}
            >
              dont have any account?
              <span
                style={{
                  color: "#140ecd",
                  marginLeft: "5px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Register")}
              >
                Register
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
