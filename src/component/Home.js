// import { Button } from "@mui/material";
// import bookImage1 from "../images/download.png";
// import bookImage2 from "../images/download (2).png";
// import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
// import bookImage4 from "../images/download (1).png";
// import bookImage5 from "../images/download (1).jfif";

// import { useEffect, useRef, useState } from "react";
// import BookSlider from "./BookSlider";

// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// export default function Home() {

//   const card1 = [
//     { id: 1, src: bookImage1, title: "Book 1", author: "Author 1" },
//     { id: 2, src: bookImage2, title: "Book 2", author: "Author 2" },
//     { id: 3, src: bookImage3, title: "Book 3", author: "Author 3" },
//     { id: 4, src: bookImage4, title: "Book 4", author: "Author 4" },
//     { id: 5, src: bookImage5, title: "Book 5", author: "Author 5" },
//     { id: 6, src: bookImage5, title: "Book 6", author: "Author 6" },
//     { id: 7, src: bookImage5, title: "Book 7", author: "Author 7" },
//     { id: 8, src: bookImage5, title: "Book 8", author: "Author 8" },
//     { id: 9, src: bookImage5, title: "Book 9", author: "Author 9" },
//     { id: 10, src: bookImage5, title: "Book 10", author: "Author 10" },
//   ];

//   const [show,setShow]=useState(false);

//   const [selectedBook, setSelectedBook] = useState(card1[0]);

//   // Refs
//   const recRef = useRef(null);
//   const philRef = useRef(null);
//   const romRef = useRef(null);
//   const histRef = useRef(null);
//   const relRef = useRef(null);

//   const cardWidth = 140;
//   const jump = cardWidth * 2;
//   const delay = 3500;

//   const startAutoScroll = (ref) => {
//     const container = ref.current;
//     if (!container) return;
//     clearInterval(container.interval);

//     container.interval = setInterval(() => {
//       container.scrollBy({ left: jump, behavior: "smooth" });

//       if (container.scrollLeft + container.clientWidth + jump >= container.scrollWidth) {
//         setTimeout(() => {
//           container.scrollTo({ left: 0, behavior: "smooth" });
//         }, delay);
//       }
//     }, delay);
//   };

//   const stopAutoScroll = (ref) => {
//     const container = ref.current;
//     if (!container) return;
//     clearInterval(container.interval);
//   };

//   const scrollNext = (ref) => {
//     const container = ref.current;
//     if (!container) return;

//     stopAutoScroll(ref);

//     if (container.scrollLeft + container.clientWidth >= container.scrollWidth - jump) {
//       container.scrollTo({ left: 0, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: jump, behavior: "smooth" });
//     }

//     startAutoScroll(ref);
//   };

//   const scrollPrev = (ref) => {
//     const container = ref.current;
//     if (!container) return;

//     stopAutoScroll(ref);

//     if (container.scrollLeft <= 0) {
//       container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: -jump, behavior: "smooth" });
//     }

//     startAutoScroll(ref);
//   };

//   useEffect(() => {
//     startAutoScroll(recRef);
//     startAutoScroll(philRef);
//     startAutoScroll(romRef);
//     startAutoScroll(histRef);
//     startAutoScroll(relRef);

//     return () => {
//       stopAutoScroll(recRef);
//       stopAutoScroll(philRef);
//       stopAutoScroll(romRef);
//       stopAutoScroll(histRef);
//       stopAutoScroll(relRef);
//     };
//   }, []);

//   return (
//     <div style={{ width: "100%", background: "#eef1f6", boxSizing: "border-box", position: "relative" }}>
//       <div style={{width:"100%" }}>
//         <div style={{ maxWidth:show?"70%":"98%" ,display:"flex",flexDirection:"column",gap:"16px",paddingTop:"19px",marginLeft:"12px"}}>

//           {/* RECOMMENDED */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "10px 15px 15px 15px", marginBottom: "15px" }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//               <h4 style={{ margin: 0 }}>Recommended</h4>
//               <div style={{ display: "flex", gap: "6px" }}>
//                 <KeyboardArrowLeftIcon
//                   onClick={() => scrollPrev(recRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//                 <KeyboardArrowRightIcon
//                   onClick={() => scrollNext(recRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//               </div>
//             </div>
//             <BookSlider
//               books={card1}
//               scrollRef={recRef}
//               onMouseEnter={() => stopAutoScroll(recRef)}
//               onMouseLeave={() => startAutoScroll(recRef)}
//               onCardClick={(book) => {setSelectedBook(book); setShow(true)}}
//             />
//           </div>

//           {/* Philosophical */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "10px 15px 15px 15px", marginBottom: "15px" }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//               <h4 style={{ margin: 0 }}>Philosophical</h4>
//               <div style={{ display: "flex", gap: "6px" }}>
//                 <KeyboardArrowLeftIcon
//                   onClick={() => scrollPrev(philRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//                 <KeyboardArrowRightIcon
//                   onClick={() => scrollNext(philRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//               </div>
//             </div>
//             <BookSlider
//               books={card1}
//               scrollRef={philRef}
//               onMouseEnter={() => stopAutoScroll(philRef)}
//               onMouseLeave={() => startAutoScroll(philRef)}
//               onCardClick={(book) => {setSelectedBook(book); setShow(true)}}
//             />
//           </div>

//           {/* Romantic */}
//           <div style={{ background: "#fff", borderRadius: "10px 15px 15px 15px", padding: "15px", marginBottom: "15px" }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//               <h4 style={{ margin: 0 }}>Romantic</h4>
//               <div style={{ display: "flex", gap: "6px" }}>
//                 <KeyboardArrowLeftIcon
//                   onClick={() => scrollPrev(romRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//                 <KeyboardArrowRightIcon
//                   onClick={() => scrollNext(romRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//               </div>
//             </div>
//             <BookSlider
//               books={card1}
//               scrollRef={romRef}
//               onMouseEnter={() => stopAutoScroll(romRef)}
//               onMouseLeave={() => startAutoScroll(romRef)}
//               onCardClick={(book) => {setSelectedBook(book); setShow(true)}}
//             />
//           </div>

//           {/* Historical */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "10px 15px 15px 15px", marginBottom: "15px" }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//               <h4 style={{ margin: 0 }}>Historical</h4>
//               <div style={{ display: "flex", gap: "6px" }}>
//                 <KeyboardArrowLeftIcon
//                   onClick={() => scrollPrev(histRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//                 <KeyboardArrowRightIcon
//                   onClick={() => scrollNext(histRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//               </div>
//             </div>
//             <BookSlider
//               books={card1}
//               scrollRef={histRef}
//               onMouseEnter={() => stopAutoScroll(histRef)}
//               onMouseLeave={() => startAutoScroll(histRef)}
//               onCardClick={(book) => {setSelectedBook(book); setShow(true)}}
//             />
//           </div>

//           {/* Religious */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "10px 15px 15px 15px", marginBottom: "15px" }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//               <h4 style={{ margin: 0 }}>Religious</h4>
//               <div style={{ display: "flex", gap: "6px" }}>
//                 <KeyboardArrowLeftIcon
//                   onClick={() => scrollPrev(relRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//                 <KeyboardArrowRightIcon
//                   onClick={() => scrollNext(relRef)}
//                   sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
//                 />
//               </div>
//             </div>
//             <BookSlider
//               books={card1}
//               scrollRef={relRef}
//               onMouseEnter={() => stopAutoScroll(relRef)}
//               onMouseLeave={() => startAutoScroll(relRef)}
//               onCardClick={(book) => {setSelectedBook(book); setShow(true)}}
//             />
//           </div>

//         </div>
//       </div>

//       {/* RIGHT BLUE CARD FIXED */}
//       {show&&
//       <div style={{
//         position: "fixed",
//         top:56,
//         right: 30,
//         maxWidth: "250px",
//         background: "linear-gradient(180deg, #0b2c63, #081f47)",
//         borderRadius: "25px",
//         padding: "30px 10px 30px 10px",
//         color: "#fff",
//         zIndex: 5,
//         display:"flex",
//         flexDirection:"column",
        
        
//       }}>
        
//         <img
//           src={selectedBook.src}
//           alt="book"
//           style={{
//             width: "140px",
//             height: "200px",
//             display: "block",
//             margin: "0 auto 18px",
//             borderRadius:"15px"
//           }}
//         />
        

//         <h2 style={{ marginTop: "5px", fontSize: "20px"}}>
//           {selectedBook.title}
//         </h2>
//         <p style={{ margin: "0", opacity: 0.8, fontSize: "13px"}}>
//           {selectedBook.author}
//         </p>

//         <div style={{ color: "#FFD700", marginBottom: "3px", fontSize: "14px" }}>
//           ★★★★★{" "}
//           <span style={{ color: "#fff", opacity: 0.7, fontSize: "14px" }}>
//             4.8
//           </span>
//         </div>

//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", fontSize: "12px" }}>
//           <div>
//             <strong>320</strong>
//             <div style={{ fontSize: "12px", opacity: 0.7 }}>Pages</div>
//           </div>
//         </div>

//         <p style={{ fontSize: "12px", lineHeight: "1.5", opacity: 0.85 }}>
//           Company of One offers a refreshing original business strategy that
//           focuses on staying small, agile, and independent.
//         </p>

//         <Button fullWidth  variant="contained" style={{ marginTop: "10px", borderRadius: "12px", textTransform: "none" }}>
//           Read more
//         </Button>
//       </div>}
//     </div>
//   );
// }















import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import BookSlider from "./BookSlider";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const card1 = [
    { id: 1, src: "/images/download.png", title: "Book 1", author: "Author 1" },
    { id: 2, src: "/images/download (2).png", title: "Book 2", author: "Author 2" },
    { id: 3, src: "/images/photo_2026-01-14_14-18-27.jpg", title: "Book 3", author: "Author 3" },
    { id: 4, src: "/images/download (1).png", title: "Book 4", author: "Author 4" },
    { id: 5, src: "/images/download (1).jfif", title: "Book 5", author: "Author 5" },
    { id: 1, src: "/images/download.png", title: "Book 1", author: "Author 1" },
    { id: 2, src: "/images/download (2).png", title: "Book 2", author: "Author 2" },
    { id: 3, src: "/images/photo_2026-01-14_14-18-27.jpg", title: "Book 3", author: "Author 3" },
    { id: 4, src: "/images/download (1).png", title: "Book 4", author: "Author 4" },
    { id: 5, src: "/images/download (1).jfif", title: "Book 5", author: "Author 5" },
  ];

  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(card1[0]);

  const recRef = useRef(null);
  const philRef = useRef(null);

  const cardWidth = 140;
  const jump = cardWidth * 2;
  const delay = 3500;

  const startAutoScroll = (ref) => {
    const container = ref.current;
    if (!container) return;
    clearInterval(container.interval);

    container.interval = setInterval(() => {
      container.scrollBy({ left: jump, behavior: "smooth" });

      if (container.scrollLeft + container.clientWidth + jump >= container.scrollWidth) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, delay);
      }
    }, delay);
  };

  const stopAutoScroll = (ref) => {
    const container = ref.current;
    if (!container) return;
    clearInterval(container.interval);
  };

  const scrollNext = (ref) => {
    const container = ref.current;
    if (!container) return;

    stopAutoScroll(ref);

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - jump) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: jump, behavior: "smooth" });
    }

    startAutoScroll(ref);
  };

  const scrollPrev = (ref) => {
    const container = ref.current;
    if (!container) return;

    stopAutoScroll(ref);

    if (container.scrollLeft <= 0) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -jump, behavior: "smooth" });
    }

    startAutoScroll(ref);
  };

  useEffect(() => {
    startAutoScroll(recRef);
    startAutoScroll(philRef);

    return () => {
      stopAutoScroll(recRef);
      stopAutoScroll(philRef);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        background: "#eef1f6",
        boxSizing: "border-box",
        overflowX: "hidden", 
      }}
    >
      <Box
        sx={{
          
          maxWidth: { xs: "100%", md: "90%", lg: "100%" },
          margin: "0 auto",
          padding: { xs: "12px 8px", md: "18px 16px" },
          display: "flex",
          flexDirection: "column",
          marginRight:show?{md:"268px"}:"0px",
          gap: "16px",
        }}
      >
        <Section
          title="Recommended"
          refProp={recRef}
          books={card1}
          onPrev={() => scrollPrev(recRef)}
          onNext={() => scrollNext(recRef)}
          onCardClick={(book) => {
            setSelectedBook(book);
            setShow(true);
          }}
        />

        <Section
          title="Philosophical"
          refProp={philRef}
          books={card1}
          onPrev={() => scrollPrev(philRef)}
          onNext={() => scrollNext(philRef)}
          onCardClick={(book) => {
            setSelectedBook(book);
            setShow(true);
          }}
        />
      </Box>

      
      {show && !isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: 80,
            right: 15,
            width: "250px",
            background: "linear-gradient(180deg, #0b2c63, #081f47)",
            borderRadius: "25px",
            padding: "30px 10px",
            color: "#fff",
            zIndex: 5,
          }}
        >
          <Box component="img" src={selectedBook.src} alt="book"
            sx={{
              width: "140px",
              height: "200px",
              display: "block",
              margin: "0 auto 18px",
              borderRadius: "15px",
            }}
          />

          <Box sx={{ fontSize: "20px", fontWeight: 700 }}>{selectedBook.title}</Box>
          <Box sx={{ opacity: 0.8, fontSize: "13px", mb: 1 }}>{selectedBook.author}</Box>

          <Box sx={{ color: "#FFD700", fontSize: "14px", mb: 1 }}>
            ★★★★★ <Box component="span" sx={{ color: "#fff", opacity: 0.7 }}>4.8</Box>
          </Box>

          <Box sx={{ fontSize: "12px", lineHeight: 1.5, opacity: 0.85, mb: 1 }}>
            Company of One offers a refreshing original business strategy that focuses on staying small, agile, and independent.
          </Box>

          <Button fullWidth variant="contained" sx={{ borderRadius: "12px", textTransform: "none" }}>
            Read more
          </Button>
        </Box>
      )}
    </Box>
  );
}

function Section({ title, refProp, books, onPrev, onNext, onCardClick }) {
  return (
    <Box sx={{ background: "#fff", borderRadius: "20px", padding: "10px 15px 15px 15px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Box component="h4" sx={{ margin: 0 }}>{title}</Box>
        <Box sx={{ display: "flex", gap: "6px" }}>
          <KeyboardArrowLeftIcon onClick={onPrev} sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }} />
          <KeyboardArrowRightIcon onClick={onNext} sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }} />
        </Box>
      </Box>

      <BookSlider
        books={books}
        scrollRef={refProp}
        onCardClick={onCardClick}
      />
    </Box>
  );
}
