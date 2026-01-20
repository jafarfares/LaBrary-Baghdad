import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import bookImage1 from "../images/main_reading_room_cambridge_university_library_web_banner.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {

  //navigate
  const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* LEFT IMAGE */}
        <div style={styles.imageContainer}>
          <img src={bookImage1} alt="login" style={styles.image} />

          <div style={styles.imageOverlay}>
            <span style={styles.welcome}>Welcome back</span>
            <h1 style={styles.title}>
              Sign in to
              <br />
              your account
            </h1>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div style={styles.formContainer}>
          <div style={{marginTop:"70px"}}>
            <div style={styles.signIn}>
              <h2 style={{ margin: 0 }}>Sign In</h2>
              <h5 style={{ margin: 0 ,color: "#666"}}>If you have a previous account</h5>
            </div>

            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={styles.input}
            />

            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              sx={styles.input}
              type="password"
            />

            <Button variant="contained" fullWidth style={styles.signInButton} onClick={()=>navigate("/app")}>
              Sign In
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              style={styles.googleButton}
            >
              Continue with Google
            </Button>
          </div>
          <div>
          <p style={styles.register}>
            Don't have an account?{" "}
            <span
              style={styles.registerLink}
              onClick={() => navigate("/Register")}
            >
              Register
            </span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    height: "100vh",
    background: "#eef1f6",
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "900px",
    height: "550px",
    background: "linear-gradient(180deg, #f2f2f2, #fdf3cc)",
    borderRadius: "25px",
    display: "flex",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },

  imageContainer: {
    width: "60%",
    position: "relative",
    zIndex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageOverlay: {
    position: "absolute",
    bottom: "40px",
    left: "40px",
    color: "#fff",
  },

  welcome: {
    fontSize: "14px",
    opacity: 0.9,
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginTop: "10px",
  },

  formContainer: {
    width: "40%",
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "25px",
    background: "linear-gradient(180deg, #f2f2f2, #fdf3cc)",
    zIndex: 999,
    marginLeft: "-30px",
    gap:"50px"
  },

  signIn: {
    marginBottom: "15px",
    marginLeft: "54px",
  },

  input: {
    marginBottom: "18px",
    borderRadius: "25px",
    width: "70%",
    marginLeft: "60px",
    "& .MuiInputLabel-root": {
      fontSize: "14px",   
    },
  },

  signInButton: {
    backgroundColor: "#000",
    borderRadius: "25px",
    marginTop: "5px",
    marginBottom: "10px",
    textTransform: "none",
    fontSize: "16px",
    width: "70%",
    marginLeft: "62px",
  },

  googleButton: {
    borderRadius: "25px",
    padding: "10px",
    textTransform: "none",
    fontSize: "12px",
    color: "#000",
    width: "70%",
    marginLeft: "62px",
  },

  register: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#777",
  },

  registerLink: {
    color: "#000",
    cursor: "pointer",
    fontWeight: "500",
    textDecoration: "underline"
  },
};
