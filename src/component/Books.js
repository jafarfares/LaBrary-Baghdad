// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Button, Avatar, TextField } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";

// import React, { useState } from "react";

// export default function Books() {
//   const [minValue, setMinValue] = useState("");
//   const [maxValue, setMaxValue] = useState("");

//   const handleIncrement = (type) => {
//     if (type === "min") setMinValue((prev) => (prev === "" ? 1 : prev + 1));
//     else setMaxValue((prev) => (prev === "" ? 1 : prev + 1));
//   };

//   const handleDecrement = (type) => {
//     if (type === "min") setMinValue((prev) => (prev === "" ? 0 : prev - 1));
//     else setMaxValue((prev) => (prev === "" ? 0 : prev - 1));
//   };

//   return (
//     <Container maxWidth="xl">
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//         }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//           }}
//         >
//           <label
//             style={{ color: "#7c7878", fontSize: "14px", marginBottom: "8px" }}
//           >
//             Search Books
//           </label>
//           <TextField
//             fullWidth
//             placeholder="Search Books"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon sx={{ color: "#888" }} />
//                 </InputAdornment>
//               ),
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 fontSize: "15px",

//                 "& fieldset": {
//                   borderColor: "#ddd",
//                 },

//                 "&:hover fieldset": {
//                   borderColor: "#ddd",
//                 },

//                 "&.Mui-focused fieldset": {
//                   borderColor: "#060606",
//                   borderWidth: "2px",
//                 },
//               },

//               "& .MuiOutlinedInput-input": {
//                 padding: "10px 12px",
//               },
//             }}
//           />
//         </Box>

//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             flexDirection: "row",
//             gap: "10px",
//             flex: 1,
//             flexWrap: "wrap",
//           }}
//         >
//           <Box
//             sx={{
//               width: "25%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//                 marginBottom: "8px",
//               }}
//             >
//               Category
//             </label>
//             <Select
//               defaultValue=""
//               displayEmpty
//               fullWidth
//               variant="outlined"
//               sx={{
//                 fontSize: "15px",

//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#060606",
//                   borderWidth: "2px",
//                 },

//                 /* padding */
//                 "& .MuiSelect-select": {
//                   padding: "10px 12px",
//                 },
//               }}
//             >
//               <MenuItem value="">
//                 <em>All Category</em>
//               </MenuItem>

//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </Box>

//           <Box
//             sx={{
//               width: "25%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//                 marginBottom: "8px",
//               }}
//             >
//               Auther
//             </label>
//             <Select
//               defaultValue=""
//               displayEmpty
//               fullWidth
//               variant="outlined"
//               sx={{
//                 fontSize: "15px",

//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#060606",
//                   borderWidth: "2px",
//                 },

//                 /* padding */
//                 "& .MuiSelect-select": {
//                   padding: "10px 12px",
//                 },
//               }}
//             >
//               <MenuItem value="">
//                 <em>All Auther</em>
//               </MenuItem>

//               <MenuItem value={20}>Twenty</MenuItem>
//               <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//           </Box>

//           <Box
//             sx={{
//               width: "25%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//                 marginBottom: "8px",
//               }}
//             >
//               Language
//             </label>
//             <Select
//               defaultValue=""
//               displayEmpty
//               fullWidth
//               variant="outlined"
//               sx={{
//                 fontSize: "15px",

//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#060606",
//                   borderWidth: "2px",
//                 },

//                 /* padding */
//                 "& .MuiSelect-select": {
//                   padding: "10px 12px",
//                 },
//               }}
//             >
//               <MenuItem value="">
//                 <em>All Language</em>
//               </MenuItem>

//               <MenuItem value={20}>English</MenuItem>
//               <MenuItem value={30}>Arabic</MenuItem>
//             </Select>
//           </Box>

//           <Box
//             sx={{
//               width: "25%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//                 marginBottom: "8px",
//               }}
//             >
//               Publisher
//             </label>
//             <Select
//               defaultValue=""
//               displayEmpty
//               fullWidth
//               variant="outlined"
//               sx={{
//                 fontSize: "15px",

//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#060606",
//                   borderWidth: "2px",
//                 },

//                 /* padding */
//                 "& .MuiSelect-select": {
//                   padding: "10px 12px",
//                 },
//               }}
//             >
//               <MenuItem value="">
//                 <em>All Publisher</em>
//               </MenuItem>

//               <MenuItem value={20}>English</MenuItem>
//               <MenuItem value={30}>Arabic</MenuItem>
//             </Select>
//           </Box>

//           <Box
//             sx={{
//               width: "25%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//               }}
//             >
//               Sort By
//             </label>
//             <Select
//               defaultValue=""
//               displayEmpty
//               fullWidth
//               variant="outlined"
//               sx={{
//                 fontSize: "15px",

//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ddd",
//                 },

//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#060606",
//                   borderWidth: "2px",
//                 },

//                 "& .MuiSelect-select": {
//                   padding: "10px 12px",
//                 },
//               }}
//             >
//               <MenuItem value="">
//                 <em>Title(A-Z)</em>
//               </MenuItem>

//               <MenuItem value={20}>Title(Z-A)</MenuItem>
//               <MenuItem value={30}>Author(A-Z)</MenuItem>
//             </Select>
//           </Box>

//         </Box>

//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             flexDirection: "row",
//             gap: "10px",
//             flex: 1,
//             flexWrap: "wrap",
//           }}
//         >

//           <Box
//             sx={{
//               width: "40%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               // flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//                 marginBottom: "8px",
//               }}
//             >
//               Format
//             </label>
//             <FormGroup
//                 sx={{
//                   gap: "2px",
//                   display:"flex",
//                   flexDirection:"row"
//                 }}
//               >
//                 <FormControlLabel
//                   sx={{
//                     m: 0,
//                     "& .MuiTypography-root": {
//                       fontSize: "14px",
//                     },
//                   }}
//                   control={
//                     <Checkbox
//                       defaultChecked
//                       size="small"
//                       sx={{
//                         p: "4px",
//                         color: "#000",
//                         "&.Mui-checked": {
//                           color: "#000",
//                         },
//                         "& .MuiSvgIcon-root": {
//                           fontSize: 18,
//                         },
//                       }}
//                     />
//                   }
//                   label="PDF"
//                 />

//                 <FormControlLabel
//                   sx={{ m: 0 }}
//                   control={
//                     <Checkbox
//                       defaultChecked
//                       size="small"
//                       sx={{
//                         p: "4px",
//                         color: "#000",
//                         "&.Mui-checked": { color: "#000" },
//                         "& .MuiSvgIcon-root": { fontSize: 18 },
//                       }}
//                     />
//                   }
//                   label="EPUB"
//                 />

//                 <FormControlLabel
//                   sx={{ m: 0 }}
//                   control={
//                     <Checkbox
//                       defaultChecked
//                       size="small"
//                       sx={{
//                         p: "4px",
//                         color: "#000",
//                         "&.Mui-checked": { color: "#000" },
//                         "& .MuiSvgIcon-root": { fontSize: 18 },
//                       }}
//                     />
//                   }
//                   label="Audiobook"
//                 />

//                 <FormControlLabel
//                   sx={{ m: 0 }}
//                   control={
//                     <Checkbox
//                       defaultChecked
//                       size="small"
//                       sx={{
//                         p: "4px",
//                         color: "#000",
//                         "&.Mui-checked": { color: "#000" },
//                         "& .MuiSvgIcon-root": { fontSize: 18 },
//                       }}
//                     />
//                   }
//                   label="Physical Book"
//                 />
//               </FormGroup>
//           </Box>

//           <Box
//             sx={{
//               width: "40%",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               // flex: 1,
//             }}
//           >
//             <label
//               style={{
//                 color: "#7c7878",
//                 fontSize: "14px",
//                 marginBottom: "8px",
//               }}
//             >
//               Availability
//             </label>
//             <RadioGroup
//                 defaultValue="female"
//                 sx={{
//                   gap: "2px",
//                   display:"flex",
//                   flexDirection:"row"
//                 }}
//               >
//                 {["All Books", "Available Now", "Currently Borrowed"].map((label) => (
//                   <FormControlLabel
//                     key={label}
//                     value={label.toLowerCase()}
//                     label={label}
//                     sx={{
//                       m: 0,
//                       "& .MuiTypography-root": {
//                         fontSize: "14px",
//                       },
//                     }}
//                     control={
//                       <Radio
//                         size="small"
//                         sx={{
//                           p: "4px",
//                           color: "#000",
//                           "&.Mui-checked": {
//                             color: "#000",
//                           },
//                           "& .MuiSvgIcon-root": {
//                             fontSize: 18,
//                           },
//                         }}
//                       />
//                     }
//                   />
//                 ))}
//               </RadioGroup>
//           </Box>

//           <Box
//          sx={{
//            display: "flex",
//            flexDirection: "column",
//            gap: "5px",
//            marginTop: "5px",
//          }}
//         >
//           <Typography
//             sx={{
//               fontSize: "15px",
//             }}
//           >
//             Minimum Rating
//           </Typography>
//             <Stack spacing={1}>
//               <Rating
//                 name="book-rating"
//                 defaultValue={0}
//                 sx={{ fontSize: "18px" }}
//               />
//             </Stack>
//           </Box>

//         </Box>

//         <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
//             <Box>

//             </Box>
//             <Button sx={{  color: "#fff", bgcolor: "#161720",marginTop:"10px" }}>
//               Clear All Filters
//             </Button>
//         </Box>

//       </Box>
//     </Container>
//   );
// }

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
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//images
import bookImage1 from "../images/download.png";
import bookImage2 from "../images/download (2).png";
import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
import bookImage4 from "../images/download (1).png";
import bookImage5 from "../images/download (1).jfif";

//array
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
                marginLeft:"38px"
              }}
            >
      {["Design", "Romantic", "Religious", "Philosophical","Philosophical","Philosophical"].map(
        (title, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px"
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
                // component="img"
                // src={bookImage1}
                // alt="book"
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
            
          </Box>
         
        ),
      )}
       </Box>
    </Container>
  );
}
