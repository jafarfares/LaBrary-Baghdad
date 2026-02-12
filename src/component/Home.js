import { Box, Typography, Grid, CardMedia, Card } from "@mui/material";
import { useState, useEffect, useRef } from "react";

import bookImage1 from "../images/download.png";
import bookImage2 from "../images/download (2).png";
import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
import bookImage4 from "../images/download (1).png";
import bookImage5 from "../images/download (1).jfif";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import DialogNews from "./DialogNews";

const books = [
  bookImage1,
  bookImage2,
  bookImage3,
  bookImage4,
  bookImage5,
  bookImage5,
  bookImage1,
  bookImage2,
  bookImage3,
  bookImage4,
  bookImage5,
  bookImage5,
];

const items = [
  {
    title: "February",
    subtitle: "Explore our roundup of the month's new books.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "New York Times Bestselling Author",
    subtitle: "Discover top trending stories",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    title: "Best Books",
    subtitle: "Recommended in February",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "Best Books",
    subtitle: "Recommended in February",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "Best Books",
    subtitle: "Recommended in February",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "Best Books",
    subtitle: "Recommended in February",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
];

export default function Home() {
  const visibleCount = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const maxIndex = books.length - visibleCount;

  /* ========== NEWS AUTO SCROLL ========== */
  const newsRef = useRef(null);



  const sampleNews = {
  title: "The book",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  description: "self-reflection. Rather than simply presenting information, it challenges the way you think, analyze situations, and understand the world around you. The author combines clear reasoning with engaging storytelling, making complex ideas accessible and meaningful for readers from all backgrounds. Throughout its chapters, the book explores essential themes such as decision-making, self-awareness, resilience, and the development of long-term habits. It avoids quick fixes and superficial advice, focusing instead on building a strong mindset rooted in critical thinking and conscious growth. This approach gives the book lasting value and distinguishes it from many others in the same genre Each chapter begins with a real-world question or scenario, gradually expanding into deeper analysis supported by practical examples, research insights, and lived experiences. This structure invites the reader into an ongoing conversation, encouraging reflection rather than passive reading. A strong emphasis is placed on the human side of learning—highlighting that true progress comes not only from acquiring knowledge, but from applying it intentionally in everyday life. The book encourages patience, awareness, and the courage to re-examine assumptions we often accept without question. Ideal for readers seeking depth, clarity, and inspiration, this book offers more than a momentary reading experience. Its ideas linger long after the final page, influencing how you think, make decisions, and approach personal and professional challenges. It is a compelling read for anyone who values thoughtful growth, meaningful insight, and lasting intellectual impact."
};






  useEffect(() => {
    const container = newsRef.current;
    if (!container) return;

    const card = container.children[0];
    if (!card) return;

    const scrollAmount = card.offsetWidth + 16;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  /* ===================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <Box sx={{ marginLeft: { md: "110px" } }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        News
      </Typography>

      <DialogNews open={open} setOpen={setOpen} news={sampleNews}/>
      {/* NEWS */}
      <Box
        ref={newsRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollbarWidth: "none",        // Firefox
          msOverflowStyle: "none",       // IE & Edge
          "&::-webkit-scrollbar": {
            display: "none",             // Chrome, Safari
          },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: 220,
              borderRadius: 3,
              width: { xs: "48%", sm: "30%", md: "32%" },
              overflow: "hidden",
              flexShrink: 0,     
            }}
            onClick={()=>setOpen(true)}
          >
            <Box component="img" src={item.image} sx={{ width: "100%", height: "100%" }} />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                p: 2,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0))",
                color: "#fff",
              }}
            >
              <Typography variant="h5" fontWeight="bold">{item.title}</Typography>
              <Typography variant="body2">{item.subtitle}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* BOOK RECOMMENDATION */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2,marginTop:"30px",marginBottom:"15px" }}>
        <Typography variant="h6" sx={{ color: "#9f9f9f" }}>
          Book Recommendation
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <ArrowBackIosIcon onClick={() => setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1)} />
          <ArrowForwardIosIcon onClick={() => setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)} />
        </Box>
      </Box>

      <Grid container spacing={4} >
        {books.slice(currentIndex, currentIndex + visibleCount).map((img, i) => (
          <Grid item xs={6} sm={4} md={3} key={i}>
            <Card sx={{ borderRadius: 3 }} >
              <CardMedia component="img" image={img} height={220} sx={{ objectFit: "contain" }} />
            </Card>
          </Grid>
        ))}
      </Grid>
      


      {/* ========= BOOK CATEGORY ========= */}
      <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
        Book Category
      </Typography>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {["Design", "Romantic", "Religious", "Philosophical"].map((title, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                bgcolor: "#F6F6F6",
                borderRadius: "12px",
                width: "200px",
                height: "80px",
                position: "relative",
                mt: "70px",
              }}
            >
              <Box
                component="img"
                src={bookImage1}
                sx={{
                  width: "100px",
                  position: "absolute",
                  top: "-61px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </Box>
            <Typography mt={2}>{title}</Typography>
          </Box>
        ))}
      </Box>
      {/* ========================================= */}
    </Box>
  );
}