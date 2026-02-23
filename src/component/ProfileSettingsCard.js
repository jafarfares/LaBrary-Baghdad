import { useRef, useState, useEffect } from "react";
import { Box, Typography, Avatar, TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
//axios
import axios from "axios";
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
};

export default function ProfileSettingsCard() {
  const [image, setImage] = useState(null);
  const [hasProfile, setHasProfile] = useState(false);
  const [infopro, setInfopro] = useState({
    fullname: "",
    bio: "",
    age: "",
    phone: "",
    gender: "",
    image: null,
    language: "",
  });
  
  const fileInputRef = useRef(null);

  const handleOpenFile = () => {
    fileInputRef.current.click();
  };

  const CreatePro = async () => {
    const formData = new FormData();

    formData.append("fullname", infopro.fullname);
    formData.append("bio", infopro.bio);
    formData.append("age", infopro.age);
    formData.append("phone", infopro.phone);
    formData.append("gender", infopro.gender);
    formData.append("language", infopro.language);

    if (infopro.image) {
      formData.append("image", infopro.image);
    }

    try {
      const res = await axios.post(
        "https://abdalrhman.cupital.xyz/api/user/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        const data = res.data.data;

        setInfopro({
          fullname: data.fullname || "",
          email: data.email || "",
          bio: data.bio || "",
          age: data.age || "",
          phone: data.phone || "",
          gender: data.gender || "",
          language: data.language || "",
          image: null,
        });

        if (data.image_url) {
          setImage(data.image_url); 
        }
        if (res.data.data) {
          setHasProfile(true);
        } else {
          setHasProfile(false);
        }
      } catch (error) {
        console.log(error.response?.data);
      }
    };

    fetchProfile();
  }, []);

  //Updeat
  const EditProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("fullname", infopro.fullname);
      formData.append("bio", infopro.bio);
      formData.append("age", infopro.age);
      formData.append("phone", infopro.phone);
      formData.append("gender", infopro.gender);
      formData.append("language", infopro.language);

      if (infopro.image) {
        formData.append("image", infopro.image);
      }
      const res = await axios.patch(
        "https://abdalrhman.cupital.xyz/api/user/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      setInfopro({
        ...infopro,
        image: null,
      });

      if (res.data.data.image_url) {
        setImage(res.data.data.image_url);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "28px",
        padding: "35px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      }}
    >
      {/* TITLE */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
        <PersonOutlineIcon sx={{ color: "#ff9800", fontSize: 30 }} />
        <Typography sx={{ fontSize: 26, fontWeight: 600 }}>
          Profile Settings
        </Typography>
      </Box>

      {/* PROFILE PIC */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          mb: 5,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar
            src={image}
            sx={{
              width: 115,
              height: 115,
              bgcolor: "#fff",
              border: "4px solid #fad76e",
            }}
          />

          <Box
            onClick={handleOpenFile}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 36,
              height: 36,
              bgcolor: "#ff9800",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <AddAPhotoIcon sx={{ color: "#fff", fontSize: 18 }} />
          </Box>

          {/* input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setInfopro({ ...infopro, image: file });
                setImage(URL.createObjectURL(file));
              }
            }}
            style={{ display: "none" }}
          />
        </Box>
      </Box>

      {/* FORM */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TextField
            fullWidth
            value={infopro.fullname}
            label="Full Name"
            sx={fieldStyle}
            onChange={(e) =>
              setInfopro({ ...infopro, fullname: e.target.value })
            }
          />
          <TextField
            fullWidth
            value={infopro.email}
            label="Email Address"
            InputLabelProps={{ shrink: true }}
            sx={{
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
            }}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TextField
            fullWidth
            value={infopro.phone}
            label="Phone Number"
            sx={fieldStyle}
            onChange={(e) => setInfopro({ ...infopro, phone: e.target.value })}
          />
          <TextField
            fullWidth
            value={infopro.age}
            label="Age"
            sx={fieldStyle}
            onChange={(e) => setInfopro({ ...infopro, age: e.target.value })}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <TextField
            fullWidth
            value={infopro.language}
            label="Language"
            sx={fieldStyle}
            onChange={(e) =>
              setInfopro({ ...infopro, language: e.target.value })
            }
          />
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              label="Gender"
              value={infopro.gender}
              onChange={(e) =>
                setInfopro({ ...infopro, gender: e.target.value })
              }
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          fullWidth
          value={infopro.bio}
          multiline
          rows={4}
          label="Bio"
          sx={fieldStyle}
          onChange={(e) => setInfopro({ ...infopro, bio: e.target.value })}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Button sx={{ textTransform: "none" }}>Cancel</Button>
          <Button
            sx={{
              bgcolor: "#8B6C2F",
              color: "#fff",
              textTransform: "none",
              px: 4,
              borderRadius: "12px",
            }}
            // onClick={CreatePro}
            onClick={hasProfile ? EditProfile : CreatePro}
          >
           {hasProfile ? "Update" : "Create"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
