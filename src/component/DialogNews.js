import * as React from "react";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


export default function DialogNews({ open, setOpen, news }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: { xs: "90vw", sm: "80vw", md: "60vw" },
          maxHeight: "90vh",
          borderRadius: "12px",
          overflow: "hidden",
          p: 0,
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {news.title}
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Image */}
      <Box
        component="img"
        src={news.image}
        alt="news"
        sx={{
          width: "100%",
          height: "230px",
          // objectFit: "cover",
        }}
      />

      <Divider />

      {/* Content */}
      <Box
        sx={{
          p: 2,
          overflowY: "auto",
          maxHeight: "calc(90vh - 300px)",
        }}
      >
        <Typography sx={{ fontSize: "16px", lineHeight: 1.6 }}>
          {news.description}
        </Typography>
      </Box>

      <Divider />

    </Dialog>
  );
}
