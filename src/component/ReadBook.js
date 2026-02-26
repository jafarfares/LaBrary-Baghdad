// import { useEffect, useRef, useState, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";
// import {
//   Box, IconButton, Typography, Tooltip,
//   Slider, CircularProgress, Fade
// } from "@mui/material";

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import FullscreenIcon from "@mui/icons-material/Fullscreen";
// import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import MenuBookIcon from "@mui/icons-material/MenuBook";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// export default function ReadBook() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const leftCanvasRef = useRef(null);
//   const rightCanvasRef = useRef(null);
//   const pdfDocRef = useRef(null);
//   const containerRef = useRef(null);

//   // ✅ Track active render tasks so we can cancel them
//   const leftRenderTaskRef = useRef(null);
//   const rightRenderTaskRef = useRef(null);
//   // ✅ Prevent overlapping renderSpread calls
//   const renderingRef = useRef(false);

//   const [numPages, setNumPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [scale, setScale] = useState(1.2);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [pageInput, setPageInput] = useState("1");
//   const [turning, setTurning] = useState(false);

//   // ─── Load PDF ──────────────────────────────────────────────────────────────
//   useEffect(() => {
//     async function loadPdf() {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(
//           `https://abdalrhman.cupital.xyz/api/user/books/${id}/open-reading`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         const url = res.data?.reader_url || null;
//         if (!url) { setError("PDF not available."); setLoading(false); return; }

//         const pdfDoc = await pdfjsLib.getDocument({
//           url,
//           httpHeaders: { Authorization: `Bearer ${token}` },
//           withCredentials: false,
//         }).promise;

//         pdfDocRef.current = pdfDoc;
//         setNumPages(pdfDoc.numPages);
//         await renderSpread(1, pdfDoc, scale);
//       } catch (err) {
//         setError(`Failed to load: ${err.response?.data?.message || err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadPdf();
//   }, [id]);

//   // ─── Render a single page onto a canvas, cancelling any previous task ──────
//   const renderSinglePage = async (pageNum, canvasRef, renderTaskRef, doc, currentScale) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     // ✅ Cancel previous render task on this canvas if still running
//     if (renderTaskRef.current) {
//       try {
//         renderTaskRef.current.cancel();
//       } catch (_) {}
//       renderTaskRef.current = null;
//     }

//     if (pageNum < 1 || pageNum > doc.numPages) {
//       // Draw blank page
//       const ctx = canvas.getContext("2d");
//       canvas.width = 500;
//       canvas.height = 700;
//       ctx.fillStyle = "#fdf8f0";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       return;
//     }

//     const page = await doc.getPage(pageNum);
//     const viewport = page.getViewport({ scale: currentScale });
//     canvas.width = viewport.width;
//     canvas.height = viewport.height;
//     const ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#fdf8f0";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     const renderTask = page.render({ canvasContext: ctx, viewport });
//     renderTaskRef.current = renderTask; // ✅ store reference

//     try {
//       await renderTask.promise;
//     } catch (err) {
//       if (err?.name === "RenderingCancelledException") return; // ✅ safely ignore cancellations
//       throw err;
//     }

//     renderTaskRef.current = null;
//   };

//   // ─── Render both pages (spread) ────────────────────────────────────────────
//   const renderSpread = useCallback(async (leftPage, pdfDoc, currentScale) => {
//     const doc = pdfDoc || pdfDocRef.current;
//     if (!doc) return;

//     // ✅ If already rendering, skip to avoid overlap
//     if (renderingRef.current) return;
//     renderingRef.current = true;

//     try {
//       await Promise.all([
//         renderSinglePage(leftPage, leftCanvasRef, leftRenderTaskRef, doc, currentScale),
//         renderSinglePage(leftPage + 1, rightCanvasRef, rightRenderTaskRef, doc, currentScale),
//       ]);
//     } finally {
//       renderingRef.current = false; // ✅ always release lock
//     }
//   }, []);

//   // ─── Re-render on scale change ─────────────────────────────────────────────
//   useEffect(() => {
//     if (pdfDocRef.current) {
//       renderSpread(currentPage, pdfDocRef.current, scale);
//     }
//   }, [scale]);

//   // ─── Page navigation ───────────────────────────────────────────────────────
//   async function goToSpread(leftPage) {
//     if (turning) return; // ✅ block if already turning
//     const normalizedPage = leftPage % 2 === 0 ? leftPage - 1 : leftPage;
//     if (normalizedPage < 1 || normalizedPage > numPages) return;

//     setTurning(true);

//     // ✅ Cancel any in-progress renders before switching page
//     if (leftRenderTaskRef.current) {
//       try { leftRenderTaskRef.current.cancel(); } catch (_) {}
//       leftRenderTaskRef.current = null;
//     }
//     if (rightRenderTaskRef.current) {
//       try { rightRenderTaskRef.current.cancel(); } catch (_) {}
//       rightRenderTaskRef.current = null;
//     }
//     renderingRef.current = false; // ✅ release lock so next render can proceed

//     setCurrentPage(normalizedPage);
//     setPageInput(String(normalizedPage));
//     await renderSpread(normalizedPage, pdfDocRef.current, scale);
//     setTurning(false);

//     // Track progress
//     const token = localStorage.getItem("token");
//     axios.post(
//       `https://abdalrhman.cupital.xyz/api/user/books/${id}/track-page`,
//       { page: normalizedPage },
//       { headers: { Authorization: `Bearer ${token}` } }
//     ).catch(() => {});
//   }

//   // ─── Keyboard navigation ───────────────────────────────────────────────────
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === "ArrowRight") goToSpread(currentPage + 2);
//       if (e.key === "ArrowLeft") goToSpread(currentPage - 2);
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [currentPage, numPages, turning]);

//   // ─── Fullscreen ────────────────────────────────────────────────────────────
//   function toggleFullscreen() {
//     if (!isFullscreen) {
//       containerRef.current?.requestFullscreen?.();
//     } else {
//       document.exitFullscreen?.();
//     }
//     setIsFullscreen((prev) => !prev);
//   }

//   // ─── Page input jump ───────────────────────────────────────────────────────
//   function handlePageJump(e) {
//     if (e.key === "Enter") {
//       const page = parseInt(pageInput);
//       if (!isNaN(page)) goToSpread(page);
//     }
//   }

//   // ─── Loading / Error ───────────────────────────────────────────────────────
//   if (loading) return (
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 2, bgcolor: "#1a1a2e" }}>
//       <CircularProgress sx={{ color: "#c8a96e" }} size={60} />
//       <Typography sx={{ color: "#c8a96e", fontSize: "18px", fontFamily: "Cairo" }}>
//         جاري تحميل الكتاب...
//       </Typography>
//     </Box>
//   );

//   if (error) return (
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 2, bgcolor: "#1a1a2e" }}>
//       <Typography color="error" fontSize="16px">❌ {error}</Typography>
//       <IconButton onClick={() => navigate(-1)} sx={{ color: "#c8a96e" }}>
//         <ArrowBackIcon /> Back
//       </IconButton>
//     </Box>
//   );

//   const isFirstSpread = currentPage <= 1;
//   const isLastSpread = currentPage + 1 >= numPages;

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         minHeight: "100vh",
//         bgcolor: "#1a1a2e",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         userSelect: "none",
//       }}
//     >
//       {/* ── Top Bar ── */}
//       <Box sx={{
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         px: 3, py: 1.5,
//         bgcolor: "#12122a",
//         borderBottom: "1px solid #2a2a4a",
//       }}>
//         <Tooltip title="Back to book">
//           <IconButton onClick={() => navigate(-1)} sx={{ color: "#c8a96e" }}>
//             <ArrowBackIcon />
//           </IconButton>
//         </Tooltip>

//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <MenuBookIcon sx={{ color: "#c8a96e" }} />
//           <Typography sx={{ color: "#fff", fontFamily: "Cairo", fontSize: { xs: "13px", md: "16px" } }}>
//             Page {currentPage} – {currentPage + 1} of {numPages}
//           </Typography>
//         </Box>

//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <Tooltip title="Zoom out">
//             <IconButton onClick={() => setScale((s) => Math.max(0.6, s - 0.2))} sx={{ color: "#c8a96e" }}>
//               <ZoomOutIcon />
//             </IconButton>
//           </Tooltip>
//           <Typography sx={{ color: "#fff", minWidth: 40, textAlign: "center", fontSize: "13px" }}>
//             {Math.round(scale * 100)}%
//           </Typography>
//           <Tooltip title="Zoom in">
//             <IconButton onClick={() => setScale((s) => Math.min(2.5, s + 0.2))} sx={{ color: "#c8a96e" }}>
//               <ZoomInIcon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
//             <IconButton onClick={toggleFullscreen} sx={{ color: "#c8a96e" }}>
//               {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </Box>

      
//       <Box sx={{
//         flex: 1,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: { xs: 1, md: 4 },
//         py: 3,
//         width: "100%",
//         overflow: "auto",
//       }}>
        
//         <Tooltip title="Previous pages (←)">
//           <span>
//             <IconButton
//               onClick={() => goToSpread(currentPage - 2)}
//               disabled={isFirstSpread || turning}
//               sx={{
//                 color: isFirstSpread ? "#333" : "#c8a96e",
//                 bgcolor: "rgba(200,169,110,0.08)",
//                 mx: { xs: 0.5, md: 2 },
//                 "&:hover": { bgcolor: "rgba(200,169,110,0.18)" },
//               }}
//             >
//               <ArrowBackIosNewIcon fontSize="large" />
//             </IconButton>
//           </span>
//         </Tooltip>

        
//         <Fade in={!turning} timeout={300}>
//           <Box sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
//             borderRadius: "4px",
//             overflow: "hidden",
//           }}>
            
//             <Box sx={{
//               position: "relative",
//               borderRight: { md: "3px solid #8b6914" },
//               background: "linear-gradient(to right, #f5f0e8, #fdf8f0)",
//               boxShadow: "inset -8px 0 20px rgba(0,0,0,0.15)",
//             }}>
//               <Typography sx={{
//                 position: "absolute", bottom: 8, left: "50%",
//                 transform: "translateX(-50%)",
//                 fontSize: "11px", color: "#999", zIndex: 2,
//               }}>
//                 {currentPage}
//               </Typography>
//               <canvas ref={leftCanvasRef} style={{ display: "block", maxWidth: "100%" }} />
//             </Box>

            
//             <Box sx={{
//               width: { xs: 0, md: "12px" },
//               background: "linear-gradient(to right, #6b4c11, #c8a96e, #6b4c11)",
//               flexShrink: 0,
//             }} />

            
//             <Box sx={{
//               position: "relative",
//               borderLeft: { md: "3px solid #8b6914" },
//               background: "linear-gradient(to left, #f5f0e8, #fdf8f0)",
//               boxShadow: "inset 8px 0 20px rgba(0,0,0,0.15)",
//             }}>
//               <Typography sx={{
//                 position: "absolute", bottom: 8, left: "50%",
//                 transform: "translateX(-50%)",
//                 fontSize: "11px", color: "#999", zIndex: 2,
//               }}>
//                 {currentPage + 1 <= numPages ? currentPage + 1 : ""}
//               </Typography>
//               <canvas ref={rightCanvasRef} style={{ display: "block", maxWidth: "100%" }} />
//             </Box>
//           </Box>
//         </Fade>

        
//         <Tooltip title="Next pages (→)">
//           <span>
//             <IconButton
//               onClick={() => goToSpread(currentPage + 2)}
//               disabled={isLastSpread || turning}
//               sx={{
//                 color: isLastSpread ? "#333" : "#c8a96e",
//                 bgcolor: "rgba(200,169,110,0.08)",
//                 mx: { xs: 0.5, md: 2 },
//                 "&:hover": { bgcolor: "rgba(200,169,110,0.18)" },
//               }}
//             >
//               <ArrowForwardIosIcon fontSize="large" />
//             </IconButton>
//           </span>
//         </Tooltip>
//       </Box>

      
//       <Box sx={{
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 3,
//         px: 3, py: 1.5,
//         bgcolor: "#12122a",
//         borderTop: "1px solid #2a2a4a",
//       }}>
//         <Typography sx={{ color: "#888", fontSize: "12px", minWidth: 30 }}>1</Typography>
//         <Slider
//           value={currentPage}
//           min={1}
//           max={numPages}
//           step={2}
//           onChange={(_, val) => goToSpread(val)}
//           sx={{
//             maxWidth: 300,
//             color: "#c8a96e",
//             "& .MuiSlider-thumb": { bgcolor: "#c8a96e" },
//           }}
//         />
//         <Typography sx={{ color: "#888", fontSize: "12px", minWidth: 30 }}>{numPages}</Typography>

//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <Typography sx={{ color: "#888", fontSize: "12px" }}>Go to:</Typography>
//           <input
//             value={pageInput}
//             onChange={(e) => setPageInput(e.target.value)}
//             onKeyDown={handlePageJump}
//             style={{
//               width: 50, textAlign: "center",
//               background: "#1e1e3a", color: "#fff",
//               border: "1px solid #3a3a5a", borderRadius: 4,
//               padding: "4px 6px", fontSize: "13px",
//             }}
//           />
//         </Box>

//         <Typography sx={{ color: "#555", fontSize: "11px", display: { xs: "none", md: "block" } }}>
//           ← → keys to navigate
//         </Typography>
//       </Box> 


//     </Box>
//   );
// }

























import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";
import {
  Box, IconButton, Typography, Tooltip,
  Slider, CircularProgress, Fade
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuBookIcon from "@mui/icons-material/MenuBook";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function ReadBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);
  const pdfDocRef = useRef(null);
  const containerRef = useRef(null);

  const leftRenderTaskRef = useRef(null);
  const rightRenderTaskRef = useRef(null);
  const renderingRef = useRef(false);

  // ✅ Detect mobile responsively
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.2);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pageInput, setPageInput] = useState("1");
  const [turning, setTurning] = useState(false);
  // ✅ Add this ref
const visibleCanvasRef = useRef(null);

  // ✅ Listen to window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ─── Load PDF ──────────────────────────────────────────────────────────────
  useEffect(() => {
    async function loadPdf() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://abdalrhman.cupital.xyz/api/user/books/${id}/open-reading`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const url = res.data?.reader_url || null;
        if (!url) { setError("PDF not available."); setLoading(false); return; }

        const pdfDoc = await pdfjsLib.getDocument({
          url,
          httpHeaders: { Authorization: `Bearer ${token}` },
          withCredentials: false,
        }).promise;

        pdfDocRef.current = pdfDoc;
        setNumPages(pdfDoc.numPages);
        await renderSpread(1, pdfDoc, scale);
      } catch (err) {
        setError(`Failed to load: ${err.response?.data?.message || err.message}`);
      } finally {
        setLoading(false);
      }
    }
    loadPdf();
  }, [id]);

  // ─── Render single page ────────────────────────────────────────────────────
  const renderSinglePage = async (pageNum, canvasRef, renderTaskRef, doc, currentScale) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (renderTaskRef.current) {
      try { renderTaskRef.current.cancel(); } catch (_) {}
      renderTaskRef.current = null;
    }

    if (pageNum < 1 || pageNum > doc.numPages) {
      const ctx = canvas.getContext("2d");
      canvas.width = 500;
      canvas.height = 700;
      ctx.fillStyle = "#fdf8f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: currentScale });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fdf8f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const renderTask = page.render({ canvasContext: ctx, viewport });
    renderTaskRef.current = renderTask;

    try {
      await renderTask.promise;
    } catch (err) {
      if (err?.name === "RenderingCancelledException") return;
      throw err;
    }

    renderTaskRef.current = null;
  };

  // ─── Render spread ─────────────────────────────────────────────────────────
//   const renderSpread = useCallback(async (leftPage, pdfDoc, currentScale) => {
//     const doc = pdfDoc || pdfDocRef.current;
//     if (!doc) return;
//     if (renderingRef.current) return;
//     renderingRef.current = true;

//     try {
//       const mobile = window.innerWidth < 900;
//       if (mobile) {
//         // ✅ Mobile: only render one page on left canvas
//         await renderSinglePage(leftPage, leftCanvasRef, leftRenderTaskRef, doc, currentScale);
//       } else {
//         // ✅ Desktop: render both pages
//         await Promise.all([
//           renderSinglePage(leftPage, leftCanvasRef, leftRenderTaskRef, doc, currentScale),
//           renderSinglePage(leftPage + 1, rightCanvasRef, rightRenderTaskRef, doc, currentScale),
//         ]);
//       }
//     } finally {
//       renderingRef.current = false;
//     }
//   }, []);


   const renderSpread = useCallback(async (leftPage, pdfDoc, currentScale) => {
  const doc = pdfDoc || pdfDocRef.current;
  if (!doc) return;
  if (renderingRef.current) return;
  renderingRef.current = true;

  try {
    const mobile = window.innerWidth < 900;
    if (mobile) {
      await renderSinglePage(leftPage, visibleCanvasRef, leftRenderTaskRef, doc, currentScale);
    } else {
      await Promise.all([
        renderSinglePage(leftPage, leftCanvasRef, leftRenderTaskRef, doc, currentScale),
        renderSinglePage(leftPage + 1, rightCanvasRef, rightRenderTaskRef, doc, currentScale),
      ]);
    }
  } finally {
    renderingRef.current = false;
  }
}, []);

  // ─── Re-render on scale change ─────────────────────────────────────────────
  useEffect(() => {
    if (pdfDocRef.current) {
      renderSpread(currentPage, pdfDocRef.current, scale);
    }
  }, [scale]);

  // ─── Page navigation ───────────────────────────────────────────────────────
  async function goToSpread(leftPage) {
    if (turning) return;

    const mobile = window.innerWidth < 900;

    // ✅ Mobile: move 1 page, no normalization. Desktop: always odd page
    const normalizedPage = mobile
      ? leftPage
      : leftPage % 2 === 0 ? leftPage - 1 : leftPage;

    if (normalizedPage < 1 || normalizedPage > numPages) return;

    setTurning(true);

    if (leftRenderTaskRef.current) {
      try { leftRenderTaskRef.current.cancel(); } catch (_) {}
      leftRenderTaskRef.current = null;
    }
    if (rightRenderTaskRef.current) {
      try { rightRenderTaskRef.current.cancel(); } catch (_) {}
      rightRenderTaskRef.current = null;
    }
    renderingRef.current = false;

    setCurrentPage(normalizedPage);
    setPageInput(String(normalizedPage));
    await renderSpread(normalizedPage, pdfDocRef.current, scale);
    setTurning(false);

    const token = localStorage.getItem("token");
    axios.post(
      `https://abdalrhman.cupital.xyz/api/user/books/${id}/track-page`,
      { page: normalizedPage },
      { headers: { Authorization: `Bearer ${token}` } }
    ).catch(() => {});
  }

  // ─── Keyboard navigation ───────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e) => {
      const mobile = window.innerWidth < 900;
      if (e.key === "ArrowRight") goToSpread(currentPage + (mobile ? 1 : 2));
      if (e.key === "ArrowLeft") goToSpread(currentPage - (mobile ? 1 : 2));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentPage, numPages, turning]);

  // ─── Fullscreen ────────────────────────────────────────────────────────────
  function toggleFullscreen() {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen((prev) => !prev);
  }

  // ─── Page input jump ───────────────────────────────────────────────────────
  function handlePageJump(e) {
    if (e.key === "Enter") {
      const page = parseInt(pageInput);
      if (!isNaN(page)) goToSpread(page);
    }
  }

  // ─── Loading / Error ───────────────────────────────────────────────────────
  if (loading) return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 2, bgcolor: "#1a1a2e" }}>
      <CircularProgress sx={{ color: "#c8a96e" }} size={60} />
      <Typography sx={{ color: "#c8a96e", fontSize: "18px", fontFamily: "Cairo" }}>
        جاري تحميل الكتاب...
      </Typography>
    </Box>
  );

  if (error) return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 2, bgcolor: "#1a1a2e" }}>
      <Typography color="error" fontSize="16px">❌ {error}</Typography>
      <IconButton onClick={() => navigate(-1)} sx={{ color: "#c8a96e" }}>
        <ArrowBackIcon /> Back
      </IconButton>
    </Box>
  );

  const isFirstSpread = isMobile ? currentPage <= 1 : currentPage <= 1;
  const isLastSpread = isMobile ? currentPage >= numPages : currentPage + 1 >= numPages;

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "100vh",
        bgcolor: "#1a1a2e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      {/* ── Top Bar ── */}
      <Box sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3, py: 1.5,
        bgcolor: "#12122a",
        borderBottom: "1px solid #2a2a4a",
      }}>
        <Tooltip title="Back to book">
          <IconButton onClick={() => navigate(-1)} sx={{ color: "#c8a96e" }}>
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MenuBookIcon sx={{ color: "#c8a96e" }} />
          <Typography sx={{ color: "#fff", fontFamily: "Cairo", fontSize: { xs: "13px", md: "16px" } }}>
            {isMobile
              ? `Page ${currentPage} of ${numPages}`
              : `Page ${currentPage} – ${currentPage + 1} of ${numPages}`}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title="Zoom out">
            <IconButton onClick={() => setScale((s) => Math.max(0.6, s - 0.2))} sx={{ color: "#c8a96e" }}>
              <ZoomOutIcon />
            </IconButton>
          </Tooltip>
          <Typography sx={{ color: "#fff", minWidth: 40, textAlign: "center", fontSize: "13px" }}>
            {Math.round(scale * 100)}%
          </Typography>
          <Tooltip title="Zoom in">
            <IconButton onClick={() => setScale((s) => Math.min(2.5, s + 0.2))} sx={{ color: "#c8a96e" }}>
              <ZoomInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
            <IconButton onClick={toggleFullscreen} sx={{ color: "#c8a96e" }}>
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* ── Book Spread ── */}
      <Box sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 1, md: 4 },
        py: 3,
        width: "100%",
        overflow: "auto",
      }}>

        {/* Left Arrow */}
        <Tooltip title="Previous page (←)">
          <span>
            <IconButton
              onClick={() => goToSpread(currentPage - (isMobile ? 1 : 2))}
              disabled={isFirstSpread || turning}
              sx={{
                color: isFirstSpread ? "#333" : "#c8a96e",
                bgcolor: "rgba(200,169,110,0.08)",
                mx: { xs: 0.5, md: 2 },
                "&:hover": { bgcolor: "rgba(200,169,110,0.18)" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
          </span>
        </Tooltip>

        {/* <Fade in={!turning} timeout={300}>
          <Box>

            
            <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center" }}>
              <Box sx={{
                position: "relative",
                background: "linear-gradient(to right, #f5f0e8, #fdf8f0)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                borderRadius: "4px",
                overflow: "hidden",
              }}>
                <Typography sx={{
                  position: "absolute", bottom: 8, left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px", color: "#999", zIndex: 2,
                }}>
                  {currentPage}
                </Typography>
                <canvas ref={leftCanvasRef} style={{ display: "block", maxWidth: "90vw" }} />
              </Box>
            </Box>

            
            <Box sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
              borderRadius: "4px",
              overflow: "hidden",
            }}>
              
              <Box sx={{
                position: "relative",
                borderRight: "3px solid #8b6914",
                background: "linear-gradient(to right, #f5f0e8, #fdf8f0)",
                boxShadow: "inset -8px 0 20px rgba(0,0,0,0.15)",
              }}>
                <Typography sx={{
                  position: "absolute", bottom: 8, left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px", color: "#999", zIndex: 2,
                }}>
                  {currentPage}
                </Typography>
                <canvas ref={leftCanvasRef} style={{ display: "block", maxWidth: "100%" }} />
              </Box>

              
              <Box sx={{
                width: "12px",
                background: "linear-gradient(to right, #6b4c11, #c8a96e, #6b4c11)",
                flexShrink: 0,
              }} />

             
              <Box sx={{
                position: "relative",
                borderLeft: "3px solid #8b6914",
                background: "linear-gradient(to left, #f5f0e8, #fdf8f0)",
                boxShadow: "inset 8px 0 20px rgba(0,0,0,0.15)",
              }}>
                <Typography sx={{
                  position: "absolute", bottom: 8, left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px", color: "#999", zIndex: 2,
                }}>
                  {currentPage + 1 <= numPages ? currentPage + 1 : ""}
                </Typography>
                <canvas ref={rightCanvasRef} style={{ display: "block", maxWidth: "100%" }} />
              </Box>
            </Box>

          </Box>
        </Fade> */}






         

         <Fade in={!turning} timeout={300}>
          <Box>

            {/* ── MOBILE: single page, dedicated canvas ── */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center" }}>
              <Box sx={{
                position: "relative",
                background: "linear-gradient(to right, #f5f0e8, #fdf8f0)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                borderRadius: "4px",
                overflow: "hidden",
              }}>
                <Typography sx={{
                  position: "absolute", bottom: 8, left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px", color: "#999", zIndex: 2,
                }}>
                  {currentPage}
                </Typography>
                {/* ✅ dedicated canvas for mobile */}
                <canvas ref={visibleCanvasRef} style={{ display: "block", maxWidth: "90vw" }} />
              </Box>
            </Box>

            {/* ── DESKTOP: two pages side by side ── */}
            <Box sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
              borderRadius: "4px",
              overflow: "hidden",
            }}>
              {/* Left Page */}
              <Box sx={{
                position: "relative",
                borderRight: "3px solid #8b6914",
                background: "linear-gradient(to right, #f5f0e8, #fdf8f0)",
                boxShadow: "inset -8px 0 20px rgba(0,0,0,0.15)",
              }}>
                <Typography sx={{
                  position: "absolute", bottom: 8, left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px", color: "#999", zIndex: 2,
                }}>
                  {currentPage}
                </Typography>
                {/* ✅ desktop left canvas */}
                <canvas ref={leftCanvasRef} style={{ display: "block", maxWidth: "100%" }} />
              </Box>

              {/* Spine */}
              <Box sx={{
                width: "12px",
                background: "linear-gradient(to right, #6b4c11, #c8a96e, #6b4c11)",
                flexShrink: 0,
              }} />

              {/* Right Page */}
              <Box sx={{
                position: "relative",
                borderLeft: "3px solid #8b6914",
                background: "linear-gradient(to left, #f5f0e8, #fdf8f0)",
                boxShadow: "inset 8px 0 20px rgba(0,0,0,0.15)",
              }}>
                <Typography sx={{
                  position: "absolute", bottom: 8, left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "11px", color: "#999", zIndex: 2,
                }}>
                  {currentPage + 1 <= numPages ? currentPage + 1 : ""}
                </Typography>
                {/* ✅ desktop right canvas */}
                <canvas ref={rightCanvasRef} style={{ display: "block", maxWidth: "100%" }} />
              </Box>
            </Box>

          </Box>
        </Fade>










        {/* Right Arrow */}
        <Tooltip title="Next page (→)">
          <span>
            <IconButton
              onClick={() => goToSpread(currentPage + (isMobile ? 1 : 2))}
              disabled={isLastSpread || turning}
              sx={{
                color: isLastSpread ? "#333" : "#c8a96e",
                bgcolor: "rgba(200,169,110,0.08)",
                mx: { xs: 0.5, md: 2 },
                "&:hover": { bgcolor: "rgba(200,169,110,0.18)" },
              }}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </span>
        </Tooltip>
      </Box>

      {/* ── Bottom Bar ── */}
      <Box sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        px: 3, py: 1.5,
        bgcolor: "#12122a",
        borderTop: "1px solid #2a2a4a",
      }}>
        <Typography sx={{ color: "#888", fontSize: "12px", minWidth: 30 }}>1</Typography>
        <Slider
          value={currentPage}
          min={1}
          max={numPages}
          step={isMobile ? 1 : 2}
          onChange={(_, val) => goToSpread(val)}
          sx={{
            maxWidth: 300,
            color: "#c8a96e",
            "& .MuiSlider-thumb": { bgcolor: "#c8a96e" },
          }}
        />
        <Typography sx={{ color: "#888", fontSize: "12px", minWidth: 30 }}>{numPages}</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ color: "#888", fontSize: "12px" }}>Go to:</Typography>
          <input
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            onKeyDown={handlePageJump}
            style={{
              width: 50, textAlign: "center",
              background: "#1e1e3a", color: "#fff",
              border: "1px solid #3a3a5a", borderRadius: 4,
              padding: "4px 6px", fontSize: "13px",
            }}
          />
        </Box>

        <Typography sx={{ color: "#555", fontSize: "11px", display: { xs: "none", md: "block" } }}>
          ← → keys to navigate
        </Typography>
      </Box>
    </Box>
  );
}




















