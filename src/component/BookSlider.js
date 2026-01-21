import { Box } from "@mui/material";
import { useState } from "react";
export default function BookSlider({
  books,
  scrollRef,
  onMouseEnter,
  onMouseLeave,
  onCardClick,
}) {
  
  return (
    <Box
      ref={scrollRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        display: "flex",
        gap: "20px",
        overflowX: "hidden",
        padding: "10px 7px 7px 7px",
      }}
    >
      {books.map((book) => (
        <Box
          key={book.id}
          onClick={() => onCardClick(book)}   
          sx={{
            width: "120px",
            flexShrink: 0,
            borderRadius: "5px 5px 5px 5px",
            boxShadow: "0 5px 5px rgba(0,0,0,0.15)",
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05) translateY(-5px)",
            },
          }}
        >
          <img
            src={book.src}
            alt=""
            style={{
              width: "100%",
              height: "140px",
              borderRadius: "5px 5px 5px 5px",
            }}
          />
          <p style={{ fontSize: "13px", margin: "2px 0 0",marginLeft:"5px"}}>
            {book.title || "Book Title"}
          </p>
          <span style={{ fontSize: "11px", color: "#888" ,marginLeft:"5px"}}>
            {book.author || "Author"}
          </span>
        </Box>
      ))}
    </Box>
  );
}