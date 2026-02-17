import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
//image
import bookImage2 from "../Assets/images/logo.png";
const fieldStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover": {
    boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
  },
  "&.Mui-focused": {
    boxShadow: "0 5px 14px rgba(0,0,0,0.1)",
  },
};

export default function Books() {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
    >
      <Box
        sx={{
          backgroundColor: "#f3f2ef",
          borderRadius: "16px",
          p: "18px",
          boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* Search + Sort */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 200px" },
            gap: "14px",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search books, authors, ISBN..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#999" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              ...fieldStyle,
              "& .MuiOutlinedInput-input": {
                py: "12px",
                fontSize: "14px",
              },
            }}
          />

          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              ...fieldStyle,
              "& .MuiSelect-select": {
                py: "12px",
                fontSize: "14px",
              },
            }}
          >
            <MenuItem value="">
              <em>Sort by: Title (A–Z)</em>
            </MenuItem>
            <MenuItem value="za">Title (Z–A)</MenuItem>
            <MenuItem value="author">Author</MenuItem>
          </Select>
        </Box>

        {/* Main Filters */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
          }}
        >
          {["Category", "Author", "Language", "Publisher"].map((item) => (
            <Box key={item}>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#8a8a8a",
                  mb: "4px",
                  fontWeight: 500,
                }}
              >
                {item}
              </Typography>
              <Select
                fullWidth
                displayEmpty
                defaultValue=""
                sx={{
                  ...fieldStyle,
                  "& .MuiSelect-select": {
                    py: "11px",
                    fontSize: "13px",
                  },
                }}
              >
                <MenuItem value="">
                  <em>All {item}</em>
                </MenuItem>
              </Select>
            </Box>
          ))}
        </Box>

        {/* Advanced */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Format */}
          <Box>
            <Typography sx={{ fontSize: "12px", mb: "6px", color: "#555" }}>
              Format
            </Typography>
            <FormGroup row sx={{ gap: "2px" }}>
              {["PDF", "Audio"].map((format) => (
                <FormControlLabel
                  key={format}
                  label={format}
                  control={
                    <Checkbox
                      sx={{
                        p: "5px",
                        color: "#999",
                        "&.Mui-checked": {
                          color: "#111",
                        },
                      }}
                    />
                  }
                />
              ))}
            </FormGroup>
          </Box>

          {/* Rating */}
          <Box>
            <Typography sx={{ fontSize: "12px", mb: "6px", color: "#555" }}>
              Minimum Rating
            </Typography>
            <Rating
              size="small"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#111",
                },
              }}
            />
          </Box>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "24px",
              px: "22px",
              py: "7px",
              backgroundColor: "#111",
              textTransform: "none",
              fontSize: "13px",
              "&:hover": {
                backgroundColor: "#000",
              },
            }}
          >
            Clear Filters
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: {md:"38px",xs:"38px"},
          marginTop:{xs:"30px"}
        }}
      >
        {[
          "Design",
          "Romantic",
          "Religious",
          "Philosophical",
          "Philosophical",
          "Philosophical",
        ].map((title, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
               marginTop: {xs:"70px",md:"5px"},         
            }}
          >
            <Box
              sx={{
                bgcolor: "#F6F6F6",
                borderRadius: "12px",
                width: { md: "200px",xs:"170px" },
                height: { md: "80px",xs:"80px" },
                mt: { md: "70px",xs:"20px" },
                position: "relative",
                overflow: "visible",
                // marginBottom:{xs:"20px"}
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  position: "absolute",
                  top: "-69px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  objectFit: "contain",
                  backgroundColor: "red",
                  height: "150px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  src={bookImage2}
                  alt="book"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
            <Typography mt={2}>{title}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
