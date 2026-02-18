// import { Box, Typography } from "@mui/material";
// import { useState, useEffect, useRef } from "react";

// import bookImage1 from "../Assets/images/logo.jfif";
// import bookImage2 from "../Assets/images/logo.png";
// import bookImage3 from "../Assets/images/logo.jpg";
// import bookImage4 from "../Assets/images/logo1.png";
// import bookImage5 from "../Assets/images/logo2.png";

// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// import DialogNews from "./DialogNews";

// const books = [
//   bookImage1,
//   bookImage2,
//   bookImage3,
//   bookImage4,
//   bookImage5,
//   bookImage1,
//   bookImage2,
//   bookImage3,
//   bookImage4,
//   bookImage5,
//   bookImage1,
//   bookImage2,
//   bookImage3,
//   bookImage4,
//   bookImage5,
// ];

// const items = [
//   {
//     title: "February",
//     subtitle: "Explore our roundup of the month's new books.",
//     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
//   },
//   {
//     title: "New York Times Bestselling Author",
//     subtitle: "Discover top trending stories",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//   },
//   {
//     title: "Best Books",
//     subtitle: "Recommended in February",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//   },
//   {
//     title: "Best Books",
//     subtitle: "Recommended in February",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//   },
//   {
//     title: "Best Books",
//     subtitle: "Recommended in February",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//   },
//   {
//     title: "Best Books",
//     subtitle: "Recommended in February",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//   },
// ];

// export default function Home() {
//   const visibleCount = 15;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [open, setOpen] = useState(false);
//   const maxIndex = books.length - visibleCount;

//   /* ========== NEWS AUTO SCROLL ========== */
//   const newsRef = useRef(null);

//   const sampleNews = {
//   title: "The book",
//   image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
//   description: "self-reflection. Rather than simply presenting information, it challenges the way you think, analyze situations, and understand the world around you. The author combines clear reasoning with engaging storytelling, making complex ideas accessible and meaningful for readers from all backgrounds. Throughout its chapters, the book explores essential themes such as decision-making, self-awareness, resilience, and the development of long-term habits. It avoids quick fixes and superficial advice, focusing instead on building a strong mindset rooted in critical thinking and conscious growth. This approach gives the book lasting value and distinguishes it from many others in the same genre Each chapter begins with a real-world question or scenario, gradually expanding into deeper analysis supported by practical examples, research insights, and lived experiences. This structure invites the reader into an ongoing conversation, encouraging reflection rather than passive reading. A strong emphasis is placed on the human side of learning—highlighting that true progress comes not only from acquiring knowledge, but from applying it intentionally in everyday life. The book encourages patience, awareness, and the courage to re-examine assumptions we often accept without question. Ideal for readers seeking depth, clarity, and inspiration, this book offers more than a momentary reading experience. Its ideas linger long after the final page, influencing how you think, make decisions, and approach personal and professional challenges. It is a compelling read for anyone who values thoughtful growth, meaningful insight, and lasting intellectual impact."
// };

//   useEffect(() => {
//     const container = newsRef.current;
//     if (!container) return;

//     const card = container.children[0];
//     if (!card) return;

//     const scrollAmount = card.offsetWidth + 16;

//     const interval = setInterval(() => {
//       if (
//         container.scrollLeft + container.clientWidth >=
//         container.scrollWidth
//       ) {
//         container.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);
//   /* ===================================== */

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   return (
//     <Box >
//       <Typography variant="h4" fontWeight="bold" mb={2}>
//         News
//       </Typography>

//       <DialogNews open={open} setOpen={setOpen} news={sampleNews}/>
//       {/* NEWS */}
//       <Box
//         ref={newsRef}
//         sx={{
//           display: "flex",
//           gap: 2,
//           overflowX: "auto",
//           scrollbarWidth: "none",        // Firefox
//           msOverflowStyle: "none",       // IE & Edge
//           "&::-webkit-scrollbar": {
//             display: "none",             // Chrome, Safari
//           },
//         }}
//       >
//         {items.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               height: 220,
//               borderRadius: 3,
//               width: { xs: "48%", sm: "30%", md: "32%" },
//               overflow: "hidden",
//               flexShrink: 0,
//             }}
//             onClick={()=>setOpen(true)}
//           >
//             <Box component="img" src={item.image} sx={{ width: "100%", height: "100%" }} />
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 width: "100%",
//                 p: 2,
//                 background:
//                   "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0))",
//                 color: "#fff",
//               }}
//             >
//               <Typography variant="h5" fontWeight="bold">{item.title}</Typography>
//               <Typography variant="body2">{item.subtitle}</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       {/* BOOK BEST */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2,marginTop:"30px",marginBottom:"15px" }}>
//         <Typography variant="h6" sx={{ color: "#9f9f9f" }}>
//           Book Best
//         </Typography>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <ArrowBackIosIcon onClick={() => setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1)} />
//           <ArrowForwardIosIcon onClick={() => setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)} />
//         </Box>
//       </Box>

//       {/* <Grid container spacing={4} >
//         {books.slice(currentIndex, currentIndex + visibleCount).map((img, i) => (
//           <Grid item xs={6} sm={4} md={3} key={i}>
//             <Card sx={{ borderRadius: 3 }} >
//               <CardMedia component="img" image={img} height={220} sx={{ objectFit: "contain" }} />
//             </Card>
//           </Grid>
//         ))}
//       </Grid> */}

//       <Box
//             sx={{
//               width: "100%",
//               //overflow: "hidden"
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 overflowX: "auto",
//                 flexWrap: "nowrap",
//                 maxWidth: "100%",
//                 scrollbarWidth: "none",
//                 "&::-webkit-scrollbar": { display: "none" }
//               }}
//             >
//               {books.slice(currentIndex, currentIndex + visibleCount).map((img, i) => (
//                 <Box
//                   key={i}
//                   sx={{
//                     flex: "0 0 auto",
//                     width: {xs:100,md:150,lg:170},
//                     height: {xs:150,md:220,lg:250},
//                     mr: 2,
//                     borderRadius: 2,
//                     bgcolor: "red",
//                     display: "flex",
//                     // justifyContent: "center",
//                     // alignItems: "center",
//                     color: "white",
//                     fontWeight: "bold",
//                     overflow:"hidden"
//                   }}
//                 >

//                   <img alt="sorry" src={img} style={{width:"100%",height:"100%"}}/>
//                 </Box>
//               ))}
//             </Box>
//           </Box>

//       {/* ========= BOOK CATEGORY ========= */}
//       <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
//         Book Category
//       </Typography>

//       <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap",width:"100%" }}>
//         {["Design", "Romantic", "Religious", "Philosophical"].map((title, index) => (
//           <Box key={index} sx={{ textAlign: "center",width:{xs:"40%",sm:"30%",md:"21%",lg:"20%",xl:"20%"} }}>
//             <Box
//               sx={{
//                 bgcolor: "#F6F6F6",
//                 borderRadius: "12px",
//                 width:"100%",
//                 height: "80px",
//                 position: "relative",
//                 mt: "70px",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={bookImage2}
//                 sx={{
//                   width: "100px",
//                   position: "absolute",
//                   top: "-70px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   backgroundColor:"red",
//                   height:"150px"
//                 }}
//               />
//             </Box>
//             <Typography mt={2}>{title}</Typography>
//           </Box>
//         ))}
//       </Box>
//       {/* ========================================= */}
//     </Box>
//   );
// }

// import { Box, Typography } from "@mui/material";
// import { useState, useEffect, useRef } from "react";

// import bookImage1 from "../Assets/images/logo.jfif";
// import bookImage2 from "../Assets/images/logo.png";
// import bookImage3 from "../Assets/images/logo.jpg";
// import bookImage4 from "../Assets/images/logo1.png";
// import bookImage5 from "../Assets/images/logo2.png";

// import DialogNews from "./DialogNews";

// const books = [
//   bookImage1,
//   bookImage2,
//   bookImage3,
//   bookImage4,
//   bookImage5,
//   bookImage1,
//   bookImage2,
//   bookImage3,
//   bookImage4,
//   bookImage5,
//   bookImage1,
//   bookImage2,
//   bookImage3,
//   bookImage4,
//   bookImage5,
// ];

// const items = [
//   {
//     title: "February",
//     subtitle: "Explore our roundup of the month's new books.",
//     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
//   },
//   {
//     title: "New York Times Bestselling Author",
//     subtitle: "Discover top trending stories",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//   },
//   {
//     title: "Best Books",
//     subtitle: "Recommended in February",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//   },
// ];

// export default function Home() {
//   const [open, setOpen] = useState(false);

//   const newsRef = useRef(null);
//   const bestRef = useRef(null);

//   const sampleNews = {
//     title: "The book",
//     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
//     description: "Book description here..."
//   };

//   /* ========== NEWS AUTO SCROLL ========== */
//   useEffect(() => {
//     const container = newsRef.current;
//     if (!container) return;

//     const card = container.children[0];
//     if (!card) return;

//     const scrollAmount = card.offsetWidth + 16;

//     const interval = setInterval(() => {
//       if (
//         container.scrollLeft + container.clientWidth >=
//         container.scrollWidth
//       ) {
//         container.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   /* ========== BEST BOOK AUTO SCROLL ========== */
//   useEffect(() => {
//     const container = bestRef.current;
//     if (!container) return;

//     const card = container.children[0];
//     if (!card) return;

//     const scrollAmount = card.offsetWidth + 16;

//     const interval = setInterval(() => {
//       if (
//         container.scrollLeft + container.clientWidth >=
//         container.scrollWidth
//       ) {
//         container.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h4" fontWeight="bold" mb={2}>
//         News
//       </Typography>

//       <DialogNews open={open} setOpen={setOpen} news={sampleNews} />

//       {/* NEWS */}
//       <Box
//         ref={newsRef}
//         sx={{
//           display: "flex",
//           gap: 2,
//           overflowX: "auto",
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": { display: "none" },
//         }}
//       >
//         {items.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               height: 220,
//               borderRadius: 3,
//               width: { xs: "70%", sm: "40%", md: "32%" },
//               overflow: "hidden",
//               flexShrink: 0,
//             }}
//             onClick={() => setOpen(true)}
//           >
//             <Box
//               component="img"
//               src={item.image}
//               sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 width: "100%",
//                 p: 2,
//                 background:
//                   "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,0))",
//                 color: "#fff",
//               }}
//             >
//               <Typography variant="h6" fontWeight="bold">
//                 {item.title}
//               </Typography>
//               <Typography variant="body2">{item.subtitle}</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       {/* BOOK BEST */}
//       <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
//         Book Best
//       </Typography>

//       <Box
//         ref={bestRef}
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           flexWrap: "nowrap",
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": { display: "none" },
//         }}
//       >
//         {books.map((img, i) => (
//           <Box
//             key={i}
//             sx={{
//               flex: "0 0 auto",
//               width: { xs: 100, md: 150, lg: 170 },
//               height: { xs: 150, md: 220, lg: 250 },
//               mr: 2,
//               borderRadius: 2,
//               overflow: "hidden",
//             }}
//           >
//             <Box
//               component="img"
//               src={img}
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </Box>
//         ))}
//       </Box>

//       {/* BOOK CATEGORY */}
//       <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
//         Book Category
//       </Typography>

//       <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
//         {["Design", "Romantic", "Religious", "Philosophical"].map(
//           (title, index) => (
//             <Box
//               key={index}
//               sx={{
//                 textAlign: "center",
//                 width: { xs: "45%", sm: "30%", md: "21%" },
//               }}
//             >
//               <Box
//                 sx={{
//                   bgcolor: "#F6F6F6",
//                   borderRadius: "12px",
//                   width: "100%",
//                   height: "80px",
//                   position: "relative",
//                   mt: "70px",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={bookImage2}
//                   sx={{
//                     width: "100px",
//                     position: "absolute",
//                     top: "-70px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     height: "150px",
//                   }}
//                 />
//               </Box>
//               <Typography mt={2}>{title}</Typography>
//             </Box>
//           )
//         )}
//       </Box>
//     </Box>
//   );
// }

import { Box, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bookImage1 from "../Assets/images/logo.jfif";
import bookImage2 from "../Assets/images/logo.png";
import bookImage3 from "../Assets/images/logo.jpg";
import bookImage4 from "../Assets/images/logo1.png";
import bookImage5 from "../Assets/images/logo2.png";

import DialogNews from "./DialogNews";
import ShowBook from "./ShowBook";

const books = [
  bookImage1,
  bookImage2,
  bookImage3,
  bookImage4,
  bookImage5,
  bookImage1,
  bookImage2,
  bookImage3,
  bookImage4,
  bookImage5,
  bookImage1,
  bookImage2,
  bookImage3,
  bookImage4,
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
];

export default function Home() {
  const [open, setOpen] = useState(false);

  //Best Book
  const [bestBook, setBestBook] = useState([]);
  //News
  const [news, setNews] = useState([]);
  //show New
  const [selectedNews, setSelectedNews] = useState(null);

  const newsRef = useRef(null);
  const bestRef = useRef(null);

  const navigate=useNavigate();

  const sampleNews = {
    title: "The book",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "Book description here...",
  };

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

  /* ========== BEST BOOK AUTO SCROLL (الجديد) ========== */
  useEffect(() => {
    const cardsToScroll = 3;
    const container = bestRef.current;
    if (!container) return;

    const card = container.children[0];
    if (!card) return;

    const scrollAmount = (card.offsetWidth + 16) * cardsToScroll;

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

        console.log("NEWS RESPONSE:", res.data); // 👈 مهم
        setNews(res.data.payload.data);
      } catch (err) {
        console.log("NEWS ERROR:", err);
      }
    }

    News();
  }, []);

  return (
    <Box sx={{ width: "100%", padding: { md: "0px 10px", lg: "0px 10px" } }}>
      <Typography variant="h4" sx={{ fontWeight: 550 }} mb={2}>
        News
      </Typography>

      {/* <DialogNews open={open} setOpen={setOpen} news={sampleNews} /> */}
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
              width: { xs: "48%", sm: "30%", md: "32%", lg: "32%" },
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
              <Typography variant="h5"  fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2"  sx={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow:"hidden"}}>{item.description.replace(/<[^>]+>/g, "")}</Typography>
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
        }}
      >
        {bestBook.map((e, i) => (
          <Box
            key={i}
            sx={{
              flex: "0 0 auto",
              width: { xs: 100, md: 150, lg: 186 },
              height: { xs: 150, md: 220, lg: 230 },
              mr: 3,
              borderRadius: 2,
              overflow: "hidden",
              
            }}
            onClick={()=>navigate(`/app/ShowBook/${e.id}`)}
          >
            <img
              alt="sorry"
              src={e.image_url || "https://via.placeholder.com/150"}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Box>
      {/* BOOK CATEGORY */}
      <Typography variant="h6" mt={5} mb={2} sx={{ color: "#9f9f9f" }}>
        Book Recommendation
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {[
          "The Republic",
          "A Brief History of Time",
          "The Story of Art",
          "The Elegant Universe",
        ].map((title, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: { xs: "45%", sm: "30%", md: "21%", lg: "23%" },
            }}
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
                src={bookImage2}
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
            <Typography mt={2}>{title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
