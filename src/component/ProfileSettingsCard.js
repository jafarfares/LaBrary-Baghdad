import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "#E5E5E5",
    },
    "&:hover fieldset": {
      borderColor: "#C9B27C",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8B6C2F",
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#8A8A8A",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8B6C2F",
  },
};

export default function ProfileSettingsCard() {
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
      {/* ===== TITLE ===== */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
        <PersonOutlineIcon sx={{ color: "#ff9800", fontSize: 30 }} />
        <Typography sx={{ fontSize: 26, fontWeight: 600, color: "#1C1C1C" }}>
          Profile Settings
        </Typography>
      </Box>

      {/* ===== PROFILE PICTURE ===== */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 5 }}>
        <Box sx={{ position: "relative" }}>
          <Avatar
            sx={{
              width: 115,
              height: 115,
              bgcolor: "#fff",
              color: "#c69e5a",
              border: "4px solid #fad76e",
            }}
          />
          <Box
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
        </Box>

        <Box>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Profile Picture
          </Typography>
          <Typography sx={{ color: "#8A8A8A", mb: 2 }}>
            Upload a new profile picture
          </Typography>

          <Button
            sx={{
              bgcolor: "#ffecb3",
              color: "#ff9800 ",
              textTransform: "none",
              px: 3,
              borderRadius: "12px",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#E9DDBF",
              },
            }}
          >
            Change Picture
          </Button>
        </Box>
      </Box>

      {/* ===== FORM ===== */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Row 1 */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            sx={fieldStyle}
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            sx={fieldStyle}
          />
        </Box>

        {/* Row 2 */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            sx={fieldStyle}
          />
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            sx={fieldStyle}
          />
        </Box>

        <TextField
          fullWidth
          label="Language"
          variant="outlined"
          sx={fieldStyle}
        />

        {/* Bio */}
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Bio"
          variant="outlined"
          sx={fieldStyle}
        />

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
          <Button
            sx={{
              color: "#8A8A8A",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              bgcolor: "#8B6C2F",
              color: "#fff",
              textTransform: "none",
              px: 4,
              borderRadius: "12px",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#745924",
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
