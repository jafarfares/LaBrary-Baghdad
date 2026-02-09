import { Box, Typography, Grid, CardMedia, Card } from "@mui/material";
import { useState, useEffect } from "react";

import bookImage1 from "../images/download.png";
import bookImage2 from "../images/download (2).png";
import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
import bookImage4 from "../images/download (1).png";
import bookImage5 from "../images/download (1).jfif";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

export default function Home() {
  const visibleCount = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = books.length - visibleCount;

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <Box sx={{ marginLeft: { md: "110px" } }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Discover
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#9f9f9f" }}>
          Book Recommendation
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            marginRight: { md: "30px" },
          }}
        >
          <ArrowBackIosIcon
            sx={{ cursor: "pointer",fontSize:"20px" }}
            onClick={() =>
              setCurrentIndex((prev) =>
                prev <= 0 ? maxIndex : prev - 1
              )
            }
            
          />
          <ArrowForwardIosIcon
            sx={{ cursor: "pointer",fontSize:"20px" }}
            onClick={() =>
              setCurrentIndex((prev) =>
                prev >= maxIndex ? 0 : prev + 1
              )
            }
          />
        </Box>
      </Box>

      <Grid container spacing={4}>
        {books
          .slice(currentIndex, currentIndex + visibleCount)
          .map((img, i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  width: "100%",
                  boxShadow: "25px 25px 25px rgba(0, 0, 0, 0.12)",
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  height="220"
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </Card>
            </Grid>
          ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: { md: "3px" },
        }}
      >
        <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
          Book Category
        </Typography>
        <Box
          mt={5}
          mb={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            marginRight: { md: "40px" },
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1.2,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {["Design", "Romantic", "Religious", "Philosophical"].map(
            (title, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#F6F6F6",
                    borderRadius: "12px",
                    width: { md: "200px" },
                    height: { md: "80px" },
                    mt: { md: "70px" },
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <Box
                    component="img"
                    src={bookImage1}
                    alt="book"
                    sx={{
                      width: "100px",
                      position: "absolute",
                      top: "-61px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <h4>{title}</h4>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
