// import { Button } from "@mui/material";
// import bookImage1 from "../images/download.png";
// import bookImage2 from "../images/download (2).png";
// import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
// import bookImage4 from "../images/download (1).png";
// import bookImage5 from "../images/download (1).jfif";
// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import BookSlider from "./BookSlider";


// //icons
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// export default function Home() {
//   const scrollRef = useRef(null);
//  const recommendedRef = useRef(null);
// const philosophicalRef = useRef(null);
// const romanticRef = useRef(null);
// const historicalRef = useRef(null);
// const religiousRef = useRef(null);



//   const card1 = [
//     { id: 1, src: bookImage1 },
//     { id: 2, src: bookImage2 },
//     { id: 3, src: bookImage3 },
//     { id: 4, src: bookImage4 },
//     { id: 5, src: bookImage5 },
//     { id: 6, src: bookImage5 },
//     { id: 7, src: bookImage5 },
//     { id: 8, src: bookImage5 },
//     { id: 9, src: bookImage5 },
//     { id: 10, src: bookImage5 },
//   ];

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const cardWidth = 143; // move 143px
//     const jump = cardWidth * 2; // tow card
//     const delay = 3500; // 3.5 sec

//     const interval = setInterval(() => {
//       container.scrollBy({
//         left: jump,
//         behavior: "smooth",
//       });

//       //come to back
//       if (
//         container.scrollLeft + container.clientWidth + jump >=
//         container.scrollWidth
//       ) {
//         setTimeout(() => {
//           container.scrollTo({ left: 0, behavior: "smooth" });
//         }, 3500);
//       }
//     }, delay);

//     return () => clearInterval(interval);
//   }, []);


//   return (
//     <div
//       style={{
//         width: "100%",
//         // minHeight: "100vh",
//         background: "#eef1f6",
//         // padding: "30px 0px",
//         boxSizing: "border-box",
//         position: "relative",
//       }}
//     >
//       {/* MAIN CONTAINER */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "3fr 1.2fr",
//           gap: "10px",
//         }}
//       >
//         {/* LEFT CONTENT */}
//         <div style={{ maxWidth: "61%"}}>

//           {/* RECOMMENDED */}
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               padding: "15px",
//               marginBottom: "15px",
//               // maxWidth: "65%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "20px",
//               }}
//             >
//               <h4 style={{ margin: 0 }}>Recommended</h4>
//               <div style={{display:"flex",flexDirection:"row",gap:"3px"}}>
//                 <KeyboardArrowLeftIcon onClick={() => recommendedRef.current?.prev()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//                 <KeyboardArrowRightIcon onClick={() => recommendedRef.current?.next()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//               </div>
//             </div>
//             <BookSlider books={card1} controlRef={recommendedRef}/>
            
//           </div>

          

//           {/* Philosophical */}
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               padding: "15px",
//               marginBottom: "15px",
//               // maxWidth: "65%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "20px",
//               }}
//             >
//               <h4 style={{ margin: 0 }}>Philosophical</h4>
//               <div style={{display:"flex",flexDirection:"row",gap:"3px"}}>
//                 <KeyboardArrowLeftIcon onClick={() => philosophicalRef.current?.prev()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//                 <KeyboardArrowRightIcon onClick={() => philosophicalRef.current?.next()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//               </div>
//             </div>
//             <BookSlider books={card1} controlRef={philosophicalRef}/>
//           </div>

          
//           {/* Romantic */}
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               padding: "15px",
//               marginBottom: "15px",
//               // maxWidth: "65%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "20px",
//               }}
//             >
//               <h4 style={{ margin: 0 }}>Romantic</h4>
//               <div style={{display:"flex",flexDirection:"row",gap:"3px"}}>
//                 <KeyboardArrowLeftIcon onClick={() => romanticRef.current?.prev()}  sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//                 <KeyboardArrowRightIcon onClick={() => romanticRef.current?.next()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//               </div>
//             </div>
//             <BookSlider books={card1} controlRef={romanticRef}/>
//           </div>





//           {/* Historical */}
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               padding: "15px",
//               marginBottom: "15px",
//               // maxWidth: "65%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "20px",
//               }}
//             >
//               <h4 style={{ margin: 0 }}>Historical</h4>
//               <div style={{display:"flex",flexDirection:"row",gap:"3px"}}>
//                 <KeyboardArrowLeftIcon onClick={() => historicalRef.current?.prev()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//                 <KeyboardArrowRightIcon onClick={() => historicalRef.current?.next()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//               </div>
//             </div>
//             <BookSlider books={card1} controlRef={historicalRef}/>
//           </div>







//           {/* Religious */}
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               padding: "15px",
//               marginBottom: "15px",
//               // maxWidth: "65%",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "20px",
//               }}
//             >
//               <h4 style={{ margin: 0 }}>Religious</h4>
//               <div style={{display:"flex",flexDirection:"row",gap:"3px"}}>
//                 {/* <KeyboardArrowLeftIcon onClick={() => religiousRef.current?.prev()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/>
//                 <KeyboardArrowRightIcon onClick={() => religiousRef.current?.next()} sx={{backgroundColor:"#eef1f6",borderRadius:"50%"}}/> */}
//               </div>
//             </div>
//             <BookSlider books={card1} controlRef={religiousRef}/>
//           </div>

//         </div>
//       </div>

//       {/* ================= RIGHT BLUE CARD FIXED ================= */}
//       <div
//         style={{
//           position: "fixed",
//           top: 57,
//           right: 30,
//           maxWidth: "320px",
//           height: "auto",
//           background: "linear-gradient(180deg, #0b2c63, #081f47)",
//           borderRadius: "25px",
//           padding: "18px", 
//           color: "#fff",
//           zIndex: 5,
//         }}
//       >
//         <img
//           src={bookImage3}
//           alt="sorrty"
//           style={{
//             width: "150px", // تقليل حجم الصورة
//             height: "210px",
//             borderRadius: "14px",
//             objectFit: "cover",
//             display: "block",
//             margin: "0 auto 18px",
//           }}
//         />

//         <h2 style={{ margin: "0 0 5px", fontSize: "20px" }}>Company of One</h2>
//         <p style={{ margin: "0 0 10px", opacity: 0.8, fontSize: "13px" }}>
//           Paul Jarvis
//         </p>

//         <div
//           style={{ color: "#FFD700", marginBottom: "15px", fontSize: "14px" }}
//         >
//           ★★★★★{" "}
//           <span style={{ color: "#fff", opacity: 0.7, fontSize: "14px" }}>
//             4.8
//           </span>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "15px",
//             fontSize: "12px",
//           }}
//         >
//           <div>
//             <strong>320</strong>
//             <div style={{ fontSize: "12px", opacity: 0.7 }}>Pages</div>
//           </div>
//           <div>
//             <strong>643</strong>
//             <div style={{ fontSize: "12px", opacity: 0.7 }}>Readers</div>
//           </div>
//           <div>
//             <strong>110</strong>
//             <div style={{ fontSize: "12px", opacity: 0.7 }}>Reviews</div>
//           </div>
//         </div>

//         <p style={{ fontSize: "12px", lineHeight: "1.5", opacity: 0.85 }}>
//           Company of One offers a refreshing original business strategy that
//           focuses on staying small, agile, and independent.
//         </p>

//         <Button
//           fullWidth
//           variant="contained"
//           style={{
//             marginTop: "15px",
//             borderRadius: "12px",
//             textTransform: "none",
//           }}
//         >
//           Read Now
//         </Button>
//       </div>
//     </div>
//   );
// }














// import { Button } from "@mui/material";
// import bookImage1 from "../images/download.png";
// import bookImage2 from "../images/download (2).png";
// import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
// import bookImage4 from "../images/download (1).png";
// import bookImage5 from "../images/download (1).jfif";

// import { useEffect, useRef } from "react";
// import BookSlider from "./BookSlider";

// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// export default function Home() {
//   const card1 = [
//     { id: 1, src: bookImage1 },
//     { id: 2, src: bookImage2 },
//     { id: 3, src: bookImage3 },
//     { id: 4, src: bookImage4 },
//     { id: 5, src: bookImage5 },
//     { id: 6, src: bookImage5 },
//     { id: 7, src: bookImage5 },
//     { id: 8, src: bookImage5 },
//     { id: 9, src: bookImage5 },
//     { id: 10, src: bookImage5 },
//   ];

//   // 👇 Ref لكل Slider
//   const recRef = useRef(null);
//   const philRef = useRef(null);
//   const romRef = useRef(null);
//   const histRef = useRef(null);
//   const relRef = useRef(null);

//   // 👇 common settings
//   const cardWidth = 143;
//   const jump = cardWidth * 2;
//   const delay = 3500;

//   // auto scroll for each slider
//   const startAutoScroll = (ref) => {
//     const container = ref.current;
//     if (!container) return;

//     // stop previous interval
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
//       <div style={{ display: "grid", gridTemplateColumns: "3fr 1.2fr", gap: "10px" }}>
//         <div style={{ maxWidth: "61%" }}>

//           {/* RECOMMENDED */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
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
//             />
//           </div>

//           {/* Philosophical */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
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
//             />
//           </div>

//           {/* Romantic */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
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
//             />
//           </div>

//           {/* Historical */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
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
//             />
//           </div>

//           {/* Religious */}
//           <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
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
//             />
//           </div>

//         </div>
//       </div>

//       {/* RIGHT BLUE CARD FIXED */}
//       {/* ... نفس كودك هنا */}
//     </div>
//   );
// }













import { Button } from "@mui/material";
import bookImage1 from "../images/download.png";
import bookImage2 from "../images/download (2).png";
import bookImage3 from "../images/photo_2026-01-14_14-18-27.jpg";
import bookImage4 from "../images/download (1).png";
import bookImage5 from "../images/download (1).jfif";

import { useEffect, useRef, useState } from "react";
import BookSlider from "./BookSlider";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Home() {
  const card1 = [
    { id: 1, src: bookImage1, title: "Book 1", author: "Author 1" },
    { id: 2, src: bookImage2, title: "Book 2", author: "Author 2" },
    { id: 3, src: bookImage3, title: "Book 3", author: "Author 3" },
    { id: 4, src: bookImage4, title: "Book 4", author: "Author 4" },
    { id: 5, src: bookImage5, title: "Book 5", author: "Author 5" },
    { id: 6, src: bookImage5, title: "Book 6", author: "Author 6" },
    { id: 7, src: bookImage5, title: "Book 7", author: "Author 7" },
    { id: 8, src: bookImage5, title: "Book 8", author: "Author 8" },
    { id: 9, src: bookImage5, title: "Book 9", author: "Author 9" },
    { id: 10, src: bookImage5, title: "Book 10", author: "Author 10" },
  ];

  // 🟦 selectedBook (الكارد الأزرق)
  const [selectedBook, setSelectedBook] = useState(card1[0]);

  // Refs
  const recRef = useRef(null);
  const philRef = useRef(null);
  const romRef = useRef(null);
  const histRef = useRef(null);
  const relRef = useRef(null);

  const cardWidth = 143;
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
    startAutoScroll(romRef);
    startAutoScroll(histRef);
    startAutoScroll(relRef);

    return () => {
      stopAutoScroll(recRef);
      stopAutoScroll(philRef);
      stopAutoScroll(romRef);
      stopAutoScroll(histRef);
      stopAutoScroll(relRef);
    };
  }, []);

  return (
    <div style={{ width: "100%", background: "#eef1f6", boxSizing: "border-box", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1.2fr", gap: "10px" }}>
        <div style={{ maxWidth: "61%" ,display:"flex",flexDirection:"column",gap:"20px",paddingTop:"20px"}}>

          {/* RECOMMENDED */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <h4 style={{ margin: 0 }}>Recommended</h4>
              <div style={{ display: "flex", gap: "6px" }}>
                <KeyboardArrowLeftIcon
                  onClick={() => scrollPrev(recRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
                <KeyboardArrowRightIcon
                  onClick={() => scrollNext(recRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
              </div>
            </div>
            <BookSlider
              books={card1}
              scrollRef={recRef}
              onMouseEnter={() => stopAutoScroll(recRef)}
              onMouseLeave={() => startAutoScroll(recRef)}
              onCardClick={(book) => setSelectedBook(book)}
            />
          </div>

          {/* Philosophical */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <h4 style={{ margin: 0 }}>Philosophical</h4>
              <div style={{ display: "flex", gap: "6px" }}>
                <KeyboardArrowLeftIcon
                  onClick={() => scrollPrev(philRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
                <KeyboardArrowRightIcon
                  onClick={() => scrollNext(philRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
              </div>
            </div>
            <BookSlider
              books={card1}
              scrollRef={philRef}
              onMouseEnter={() => stopAutoScroll(philRef)}
              onMouseLeave={() => startAutoScroll(philRef)}
              onCardClick={(book) => setSelectedBook(book)}
            />
          </div>

          {/* Romantic */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <h4 style={{ margin: 0 }}>Romantic</h4>
              <div style={{ display: "flex", gap: "6px" }}>
                <KeyboardArrowLeftIcon
                  onClick={() => scrollPrev(romRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
                <KeyboardArrowRightIcon
                  onClick={() => scrollNext(romRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
              </div>
            </div>
            <BookSlider
              books={card1}
              scrollRef={romRef}
              onMouseEnter={() => stopAutoScroll(romRef)}
              onMouseLeave={() => startAutoScroll(romRef)}
              onCardClick={(book) => setSelectedBook(book)}
            />
          </div>

          {/* Historical */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <h4 style={{ margin: 0 }}>Historical</h4>
              <div style={{ display: "flex", gap: "6px" }}>
                <KeyboardArrowLeftIcon
                  onClick={() => scrollPrev(histRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
                <KeyboardArrowRightIcon
                  onClick={() => scrollNext(histRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
              </div>
            </div>
            <BookSlider
              books={card1}
              scrollRef={histRef}
              onMouseEnter={() => stopAutoScroll(histRef)}
              onMouseLeave={() => startAutoScroll(histRef)}
              onCardClick={(book) => setSelectedBook(book)}
            />
          </div>

          {/* Religious */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "15px", marginBottom: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <h4 style={{ margin: 0 }}>Religious</h4>
              <div style={{ display: "flex", gap: "6px" }}>
                <KeyboardArrowLeftIcon
                  onClick={() => scrollPrev(relRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
                <KeyboardArrowRightIcon
                  onClick={() => scrollNext(relRef)}
                  sx={{ cursor: "pointer", backgroundColor: "#eef1f6", borderRadius: "50%" }}
                />
              </div>
            </div>
            <BookSlider
              books={card1}
              scrollRef={relRef}
              onMouseEnter={() => stopAutoScroll(relRef)}
              onMouseLeave={() => startAutoScroll(relRef)}
              onCardClick={(book) => setSelectedBook(book)}
            />
          </div>

        </div>
      </div>

      {/* RIGHT BLUE CARD FIXED */}
      <div style={{
        position: "fixed",
        top: 57,
        right: 30,
        maxWidth: "320px",
        background: "linear-gradient(180deg, #0b2c63, #081f47)",
        borderRadius: "25px",
        padding: "18px",
        color: "#fff",
        zIndex: 5,
      }}>
        <img
          src={selectedBook.src}
          alt="book"
          style={{
            width: "150px",
            height: "210px",
            borderRadius: "14px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto 18px",
          }}
        />

        <h2 style={{ margin: "0 0 5px", fontSize: "20px" }}>
          {selectedBook.title}
        </h2>
        <p style={{ margin: "0 0 10px", opacity: 0.8, fontSize: "13px" }}>
          {selectedBook.author}
        </p>

        <div style={{ color: "#FFD700", marginBottom: "15px", fontSize: "14px" }}>
          ★★★★★{" "}
          <span style={{ color: "#fff", opacity: 0.7, fontSize: "14px" }}>
            4.8
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", fontSize: "12px" }}>
          <div>
            <strong>320</strong>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>Pages</div>
          </div>
          <div>
            <strong>643</strong>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>Readers</div>
          </div>
          <div>
            <strong>110</strong>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>Reviews</div>
          </div>
        </div>

        <p style={{ fontSize: "12px", lineHeight: "1.5", opacity: 0.85 }}>
          Company of One offers a refreshing original business strategy that
          focuses on staying small, agile, and independent.
        </p>

        <Button fullWidth variant="contained" style={{ marginTop: "15px", borderRadius: "12px", textTransform: "none" }}>
          Read Now
        </Button>
      </div>
    </div>
  );
}














