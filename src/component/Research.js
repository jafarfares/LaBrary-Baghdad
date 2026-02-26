// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import { Typography } from "@mui/material";
// export default function Research() {
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#1A2027",
//     }),
//   }));
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} wrap="nowrap" sx={{ overflowX: "auto" }}>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//          <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid  size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

























// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import { useEffect, useRef } from "react";

// export default function Research() {
//   const scrollRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const startScroll = () => {
//       intervalRef.current = setInterval(() => {
//         container.scrollLeft += 1; // سرعة الحركة

//         if (
//           container.scrollLeft + container.clientWidth >=
//           container.scrollWidth
//         ) {
//           container.scrollLeft = 0;
//         }
//       }, 10);
//     };

//     const stopScroll = () => {
//       clearInterval(intervalRef.current);
//     };

//     startScroll();

//     container.addEventListener("mouseenter", stopScroll);
//     container.addEventListener("mouseleave", startScroll);

//     return () => {
//       stopScroll();
//       container.removeEventListener("mouseenter", stopScroll);
//       container.removeEventListener("mouseleave", startScroll);
//     };
//   }, []);

//   return (
//     <Box sx={{ flexGrow: 1,width:"100%" }}>
//       <Grid
//         ref={scrollRef}
//         container
//         spacing={2}
//         wrap="nowrap"
//         sx={{
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           "&::-webkit-scrollbar": { display: "none" }, 
//           width:"100%",
//           maxWidth:"100%"

//         }}
//       >
//         {[...Array(30)].map((_, index) => (
//           <Grid
//             key={index}
//             size={{ xs: 6, md: 6, lg: 2 }}
//             sx={{ flexShrink: 0 }}
//           >
//             <Box
//               sx={{
//                 p: "7px",
//                 borderRadius: "5px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 bgcolor: "red",
//                 height: { xs: "200px", md: "200px", lg: "300px" },
//                 color: "white",
//                 fontWeight: "bold",
//               }}
//             >
//               Card {index + 1}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }












// import Box from "@mui/material/Box";
// import { useEffect, useRef } from "react";

// export default function Research() {
//   const scrollRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const startScroll = () => {
//       intervalRef.current = setInterval(() => {
//         container.scrollLeft += 1;

//         if (
//           container.scrollLeft + container.clientWidth >=
//           container.scrollWidth
//         ) {
//           container.scrollLeft = 0;
//         }
//       }, 10);
//     };

//     const stopScroll = () => clearInterval(intervalRef.current);

//     startScroll();
//     container.addEventListener("mouseenter", stopScroll);
//     container.addEventListener("mouseleave", startScroll);

//     return () => {
//       stopScroll();
//       container.removeEventListener("mouseenter", stopScroll);
//       container.removeEventListener("mouseleave", startScroll);
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         //overflow: "hidden"
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           flexWrap: "nowrap",
//           maxWidth: "100%",
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": { display: "none" }
//         }}
//       >
//         {[...Array(30)].map((_, index) => (
//           <Box
//             key={index}
//             sx={{
//               flex: "0 0 auto",
//               minWidth: 250,
//               height: 220,
//               mr: 2,
//               borderRadius: 2,
//               bgcolor: "red",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//               fontWeight: "bold"
//             }}
//           >
//             Card {index + 1}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }












import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getDocument } from 'pdfjs-dist';

export default function Research({ bookId }) {
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRef = useRef(null);

  
  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`/api/books/${bookId}/reading`)
      .then(res => {
        if (res.data.url) setPdfUrl(res.data.url);
        else setError(res.data.message || 'PDF not available');
      })
      .catch(err => setError('Failed to load PDF'))
      .finally(() => setLoading(false));
  }, [bookId]);

  // تحميل PDF باستخدام pdf.js
  useEffect(() => {
    if (!pdfUrl) return;

    let pdfDoc = null;

    const loadPdf = async () => {
      const loadingTask = getDocument(pdfUrl);
      pdfDoc = await loadingTask.promise;
      setNumPages(pdfDoc.numPages);
      renderPage(currentPage, pdfDoc);
    };

    const renderPage = async (pageNum, pdfDoc) => {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = { canvasContext: context, viewport };
      await page.render(renderContext).promise;
    };

    loadPdf();
  }, [pdfUrl, currentPage]);

  // تحديث الصفحة الحالية وتتبع القراءة
  const goToPage = (page) => {
    if (page < 1 || page > numPages) return;
    setCurrentPage(page);

    // تحديث عدد الصفحات المقروءة في backend
    axios.post(`/api/books/${bookId}/track-page`, { page })
      .catch(err => console.error('Failed to track page', err));
  };

  if (loading) return <div>Loading PDF...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: '1px solid #ccc' }}></canvas>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
        <span style={{ margin: '0 10px' }}>{currentPage} / {numPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= numPages}>Next</button>
      </div>
    </div>
  );
}