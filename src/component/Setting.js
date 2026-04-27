import Box from "@mui/material/Box";
import {InputLabel, FormControl, Select} from "@mui/material";

import {
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Divider,
  useMediaQuery
} from "@mui/material";
import axios from "axios";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';




import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#E5E5E5" },
    "&:hover fieldset": { borderColor: "#C9B27C" },
    "&.Mui-focused fieldset": {
      borderColor: "#8B6C2F",
      borderWidth: "2px",
    },
  },
  mb:2
};

export default function Setting() {

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  const [problems,setProblems]=useState({
    title:"",
    description:"",
    type:""
  });

  const [open1, setOpen1] = useState(false);
  
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const showSnack = (message, severity="success") => {
    setSnack({
      open: true,
      message,
      severity
    });
  };

  
  async function LogoutUser() {
    try {
      const res = await axios.post(
        "https://abdalrhman.cupital.xyz/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnack(prev => ({ ...prev, open: false }));
  };

  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/login");
  // };

  async function UserProblems(){

    
    if(!problems.title || !problems.description || !problems.type){
      showSnack("Please fill all fields ⚠️", "warning");
      return;
    }

    try{
      const token = localStorage.getItem("token");

      await axios.post("https://abdalrhman.cupital.xyz/api/user/tickets",{
        title:problems.title,
        description:problems.description,
        type:problems.type
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setProblems({title:"",description:"",type:""});
      showSnack("Ticket sent successfully 🎉", "success");

    }catch(error){
      showSnack("Something went wrong ❌", "error");
      console.log(error);
    }
  }



  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const formContent = (
    <Box sx={{width:"100%",padding:"20px"}}>

      <Typography variant="h5" fontWeight={600} mb={1}>
        Community Settings
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Manage your community information
      </Typography>

      <TextField
        fullWidth
        label="Community Title"
        value={problems.title}
        onChange={(e) => setProblems({...problems,title:e.target.value})}
        sx={ fieldStyle }
      />

      <TextField
        fullWidth
        label="Description"
        value={problems.description}
        onChange={(e) => setProblems({...problems,description:e.target.value})}
        multiline
        rows={4}
        sx={ fieldStyle }
      />

      <FormControl fullWidth sx={fieldStyle}>
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          value={problems.type}
          onChange={(e) =>
            setProblems({ ...problems, type: e.target.value })
          }
        >
          <MenuItem value="responsiv">responsiv</MenuItem>
          <MenuItem value="logic">logic</MenuItem>
        </Select>
      </FormControl>

      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#000",
          borderRadius: 2,
          height: 45,
          "&:hover": { bgcolor: "#111" }
        }}
        onClick={UserProblems}
      >
        Send
      </Button>

      <Divider sx={{ my: 4 }} />

      <Typography color="error" fontWeight={600} mb={1}>
        Danger Zone
      </Typography>

      <Typography color="text.secondary" mb={2}>
        Logging out will end your current session
      </Typography>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<LogoutOutlinedIcon />}
        // onClick={LogoutUser}
        onClick={handleClickOpen}
        sx={{
          borderColor: "#EF4444",
          color: "#EF4444",
          height: 45,
          borderRadius: 2,
          "&:hover": {
            borderColor: "#DC2626",
            backgroundColor: "#FEF2F2"
          }
        }}
      >
        Logout
      </Button>
    </Box>
  );

  return (
  <>





<Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>no</Button>
          <Button onClick={LogoutUser} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>





    {/* 🔥 Snackbar */}
    <Snackbar
      open={snack.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ zIndex: 9999, mt: "80px" }}
    >
      <Alert
        onClose={handleClose}
        severity={snack.severity}
        variant="filled"
        sx={{
          width: '100%',
          borderRadius: "12px",
          fontWeight: 500,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
        }}
      >
        {snack.message}
      </Alert>
    </Snackbar>

    {/* الصفحة */}
    <Box
      sx={{
        width: "100%",
        px: isMobile ? 2 : 0,
        py: isMobile ? 4 : 0
      }}
    >
      {isMobile ? (
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            p: 3,
            borderRadius: 4
          }}
        >
          {formContent}
        </Paper>
      ) : (
        <Box sx={{ width: "100%" }}>
          {formContent}
        </Box>
      )}
    </Box>
  </>
);
}