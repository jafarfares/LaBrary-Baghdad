import { Box, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DialogNews from "./DialogNews";

export default function Home() {
  const [open, setOpen] = useState(false);

  //Best Book
  const [bestBook, setBestBook] = useState([]);
  //News
  const [news, setNews] = useState([]);
  //show New
  const [selectedNews, setSelectedNews] = useState(null);
  //Recommendation
  const [recommendation, setRecommendation] = useState([]);

  const newsRef = useRef(null);
  const bestRef = useRef(null);

  const navigate = useNavigate();

  /* ========== NEWS AUTO SCROLL ========== */
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
  }, [news]);
  /* ===================================================== */

  /* ========== BEST BOOK AUTO SCROLL ========== */
  useEffect(() => {
  const container = bestRef.current;
  if (!container) return;

  const card = container.children[0];
  if (!card) return;

  const scrollAmount = card.offsetWidth + 24; // 24 لأن عندك gap:3

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

}, [bestBook]);
  /* ===================================================== */

  // API BestBook
  useEffect(() => {
    async function BestBook() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("User not logged in, redirecting to login page...");
          return;
        }
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/books/best",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setBestBook(res.data.payload.data);
      } catch (err) {
        console.log("error kdavmkamklvmkakdka", err);
      }
    }

    BestBook();
  }, []);

  //News
  useEffect(() => {
    async function News() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found");
          return;
        }

        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/news",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setNews(res.data.payload.data);
      } catch (err) {
        console.log("NEWS ERROR:", err);
      }
    }

    News();
  }, []);

  //Recommendation
  useEffect(() => {
    async function Recommendation() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("token");
        }
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/books/recommended",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setRecommendation(res.data.payload.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    Recommendation();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        padding: { md: "0px 10px 10px 10px", lg: "0px 10px 10px 10px" },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 550 }} mb={2}>
        News
      </Typography>

      <DialogNews open={open} setOpen={setOpen} news={selectedNews} />

      {/* NEWS */}
      <Box
        ref={newsRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {news.map((item, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              height: 220,
              borderRadius: 3,
              width: { xs: "46%", sm: "30%", md: "32%", lg: "32%" },
              overflow: "hidden",
              flexShrink: 0,
            }}
            onClick={() => {
              setSelectedNews(item);
              setOpen(true);
            }}
          >
            <Box
              component="img"
              src={item.image_url}
              sx={{ width: "100%", height: "100%" }}
            />
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
              <Typography variant="h5" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.description.replace(/<[^>]+>/g, "")}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* BOOK BEST */}
      <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
        Best Books
      </Typography>

      <Box
        ref={bestRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          flexWrap: "nowrap",
          maxWidth: "100%",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          gap: 3,
          justifyContent: "flex-start",
          padding: 2,
          
        }}
        
      >
        {bestBook.map((title, i) => (
          <Box
            key={i}
            sx={{
              display: { xs: "flex", md: "flex", lg: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",

              width: { xs: 150, md: 200, lg: 180 },
              flex: "0 0 auto",
              
            }}
            onClick={()=>navigate(`/app/ShowBook/${title.id}`)}
          >
            <Box
              sx={{
                bgcolor: "#F6F6F6",
                borderRadius: "12px",
                width: "100%",
                height: "80px",
                position: "relative",
                mt: "70px",
              }}
            >
              <Box
                component="img"
                src={title.image_url}
                sx={{
                  width: "100px",
                  position: "absolute",
                  top: "-70px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "150px",
                }}
              />
            </Box>
            <Typography mt={2}>{title.title}</Typography>
          </Box>
        ))}
      </Box>

      {/* Recommendations Books */}
      <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
        Recommendations Books
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          width: "100%",
          justifyContent: { xs: "none", md: "center", lg: "center" },
        }}
      >
        {recommendation.map((title, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: { xs: "45%", sm: "30%", md: "17%", lg: "17%" },
            }}
            onClick={()=>navigate(`/app/ShowBook/${title.id}`)}
          >
            <Box
              sx={{
                bgcolor: "#F6F6F6",
                borderRadius: "12px",
                width: "100%",
                height: "80px",
                position: "relative",
                mt: "70px",
              }}
            >
              <Box
                component="img"
                src={title.image_url}
                sx={{
                  width: "100px",
                  position: "absolute",
                  top: "-70px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "150px",
                }}
              />
            </Box>
            <Typography mt={2}>{title.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
