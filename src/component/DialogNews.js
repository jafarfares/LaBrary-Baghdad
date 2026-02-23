import * as React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DialogNews({ open, setOpen, news }) {
  const [newsDetail, setNewsDetail] = useState(null);
 

  const handleClose = () => {
    setOpen(false);
  };

  
  useEffect(() => {
    if (!news || !news.id) return;

    async function fetchNewsDetail() {
      try {
        
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://abdalrhman.cupital.xyz/api/user/news/${news.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setNewsDetail(res.data.payload.data); 
      } catch (err) {
        console.log("Error fetching news details:", err);
      }
    }

    fetchNewsDetail();
  }, [news]);

  // إذا لم يوجد خبر مختار بعد
  if (!news) return null;

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
          {newsDetail?.title.replace(/<[^>]+>/g, "") || news.title}
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Image */}
      <Box
        component="img"
        src={newsDetail?.image_url.replace(/<[^>]+>/g, "") || news.image || ""}
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
          {newsDetail?.description.replace(/<[^>]+>/g, "") || news.description}
        </Typography>
      </Box>

      <Divider />
    </Dialog>
  );
}
