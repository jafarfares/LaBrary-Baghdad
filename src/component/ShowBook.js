// // MUI
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Button, Avatar, TextField } from "@mui/material";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Rating from "@mui/material/Rating";

//  //pdf 
//   import { getDocument } from 'pdfjs-dist';


// // icons
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
// //pdf.js
// import { useRef } from "react";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
// export default function ShowBook() {
//   const { id } = useParams();

//   const [tab, setTab] = useState("details"); // details | comments
//   const [show, setShow] = useState(null);
//   const [showPdf, setShowPdf] = useState(false);
//   const [PostCommint, setPostCommint] = useState([]); //manu comments
//   const [commentText, setCommentText] = useState("");
//   const [getImagePro, setGetImagePro] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isRead, setIsRead] = useState(false);
//   const [selectedComment, setSelectedComment] = useState(null);

 



//   //pdf
//   const [pdfUrl, setPdfUrl] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [numPages, setNumPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const canvasRef = useRef(null);

//   const handleMenuOpen = (event, comment) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedComment(comment);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedComment(null);
//   };






   

























//   //pdf.js
//   // const canvasRef = useRef(null);

//   useEffect(() => {
//     async function ShowBookDet() {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(
//           `https://abdalrhman.cupital.xyz/api/user/books/${id}`,
//           { headers: { Authorization: `Bearer ${token}` } },
//         );
//         setShow(res.data.payload);
//       } catch (err) {
//         console.log("error", err);
//       }
//     }
//     ShowBookDet();
//   }, [id]);



//   useEffect(() => {
//       setLoading(true);
//       setError(null);
  
//       axios.get(`/api/books/${id}/reading`)
//         .then(res => {
//           if (res.data.url) setPdfUrl(res.data.url);
//           else setError(res.data.message || 'PDF not available');
//         })
//         .catch(err => setError('Failed to load PDF'))
//         .finally(() => setLoading(false));
//     }, [id]);




//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   setLoading(true);
//   setError(null);

//   axios.get(
//     `https://abdalrhman.cupital.xyz/api/user/books/${id}/reading`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
//   .then(res => {
//     if (res.data.payload?.url) {
//       setPdfUrl(res.data.payload.url);
//     } else {
//       setError("PDF not available");
//     }
//   })
//   .catch(err => {
//     console.log(err.response); // مهم للتأكد
//     setError("Failed to load PDF");
//   })
//   .finally(() => setLoading(false));

// }, [id]);






//     useEffect(() => {
//         if (!pdfUrl) return;
    
//         let pdfDoc = null;
    
//         const loadPdf = async () => {
//           const loadingTask = getDocument(pdfUrl);
//           pdfDoc = await loadingTask.promise;
//           setNumPages(pdfDoc.numPages);
//           renderPage(currentPage, pdfDoc);
//         };
    
//         const renderPage = async (pageNum, pdfDoc) => {
//           const page = await pdfDoc.getPage(pageNum);
//           const viewport = page.getViewport({ scale: 1.5 });
//           const canvas = canvasRef.current;
//           const context = canvas.getContext('2d');
//           canvas.height = viewport.height;
//           canvas.width = viewport.width;
    
//           const renderContext = { canvasContext: context, viewport };
//           await page.render(renderContext).promise;
//         };
    
//         loadPdf();
//       }, [pdfUrl, currentPage]);



      


//        const goToPage = (page) => {
//           if (page < 1 || page > numPages) return;
//           setCurrentPage(page);
      
          
//           axios.post(`/api/books/${id}/track-page`, { page })
//             .catch(err => console.error('Failed to track page', err));
//         };
      
//         if (loading) return <div>Loading PDF...</div>;
//         if (error) return <div>{error}</div>;






//   //Download Book
//   async function DownloadBook() {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(
//         `https://abdalrhman.cupital.xyz/api/user/books/${id}/download`,
//         {
//           responseType: "blob",
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       );

//       const url = window.URL.createObjectURL(new Blob([res.data]));

//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", `${show?.title || "book"}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   // async function openPdf() {
//   //   try {
//   //     setShowPdf(true);

//   //     const token = localStorage.getItem("token");

//   //     // أولاً نطلب من الباك رابط القراءة
//   //     const res = await axios.get(
//   //       `https://abdalrhman.cupital.xyz/api/user/books/${id}/reading`,
//   //       {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       },
//   //     );

//   //     const pdfUrl = res.data.payload.url;

//   //     // worker
//   //     pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

//   //     if (!pdfUrl || !pdfUrl.file || !pdfUrl.file.url) {
//   //       console.log("PDF URL not found");
//   //       return;
//   //     }

//   //     console.log("PDF URL:", pdfUrl);
//   //     const loadingTask = pdfjsLib.getDocument(pdfUrl);
//   //     const pdf = await loadingTask.promise;

//   //     const page = await pdf.getPage(1);
//   //     const viewport = page.getViewport({ scale: 1.5 });

//   //     const canvas = canvasRef.current;
//   //     const context = canvas.getContext("2d");

//   //     canvas.width = viewport.width;
//   //     canvas.height = viewport.height;

//   //     await page.render({
//   //       canvasContext: context,
//   //       viewport,
//   //     }).promise;

//   //     console.log("PDF loaded successfully!");
//   //   } catch (err) {
//   //     console.error("Error opening PDF:", err);
//   //   }
//   // }





  

//   //post commints
//   async function AddPost() {
//     try {
//       const res = await axios.post(
//         `https://abdalrhman.cupital.xyz/api/user/book/comment/${id}`,
//         {
//           context: commentText,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       const addedComment = res.data.payload.data;
//       setPostCommint((prev) => [...prev, addedComment]);
//       setCommentText("");
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

   



//   //get comments
//   useEffect(() => {
//     async function AllComments() {
//       try {
//         const res = await axios.get(
//           `https://abdalrhman.cupital.xyz/api/user/book/comment/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           },
//         );
//         setPostCommint(res.data.payload.data);
//       } catch (err) {
//         console.log("error", err);
//       }
//     }
//     AllComments();
//   }, [id]);

//   //image profile
//   useEffect(() => {
//     async function getImageProfile() {
//       try {
//         const res = await axios.get(
//           "https://abdalrhman.cupital.xyz/api/user/profile",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           },
//         );
//         setGetImagePro(res.data.data);
//       } catch (err) {
//         console.log("error", err);
//       }
//     }
//     getImageProfile();
//   }, []);



//   //delete comment
//   async function DeleteComment() {
//     try {
//       await axios.delete(
//         `https://abdalrhman.cupital.xyz/api/user/book/comment/${selectedComment.id}/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       setPostCommint((prev) =>
//         prev.filter((comment) => comment.id !== selectedComment.id),
//       );
//       handleMenuClose();
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   //EditComment
//   async function EditComment() {
//     try {
//       await axios.patch(
//         `https://abdalrhman.cupital.xyz/api/user/book/comment/${editingCommentId}/${id}`,
//         {
//           context: commentText,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );

//       setPostCommint((prev) =>
//         prev.map((comment) =>
//           comment.id === editingCommentId
//             ? { ...comment, context: commentText }
//             : comment,
//         ),
//       );

//       setEditingCommentId(null);
//       setCommentText("");
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   //add Favorite
//   async function AddFavorite() {
//     try {
//       await axios.get(
//         `https://abdalrhman.cupital.xyz/api/user/books/${id}/add-fav`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       console.log("add the like ");
//       setIsFavorite(true);
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   //remove Favorite
//   async function RemoveFavorite() {
//     try {
//       await axios.post(
//         `https://abdalrhman.cupital.xyz/api/user/books/${id}/remove-fav`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       console.log("remove the like ");
//       setIsFavorite(false);
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   //add read list
//   async function addReadList() {
//     try {
//       await axios.get(
//         `https://abdalrhman.cupital.xyz/api/user/books/${id}/add-read`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       setIsRead(true);
//       console.log("add the red list");
//     } catch (err) {
//       console.log("error", err);
//     }
//   }
//   //remove read list
//   async function removeReadList() {
//     try {
//       await axios.post(
//         `https://abdalrhman.cupital.xyz/api/user/books/${id}/remove-read`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );
//       setIsRead(false);
//       console.log("remove the red list");
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   return (
//     <Container maxWidth="xl" sx={{ p: 0, minHeight: "100vh" }}>


//      {showPdf && (
//       <div>
//       <canvas ref={canvasRef} style={{ border: '1px solid #ccc' }}></canvas>
//       <div style={{ marginTop: 10 }}>
//         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
//         <span style={{ margin: '0 10px' }}>{currentPage} / {numPages}</span>
//         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= numPages}>Next</button>
//       </div>
//     </div>
//     )}









//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           flexDirection: "column",
//           position: "relative",
//           width: "100%",
//         }}
//       >
//         {/* ===== Book + Title ===== */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             gap: { xs: "20px", md: "30px",lg:"40px", xl: "100px" },
//             zIndex: 2,
//             marginLeft: { md: "70px" },
//             width: { xs: "95%", md: "43%", lg: "45%" },
//           }}
//         >
//           <Box
//             sx={{
//               width: { xs: "50%", md: "200px",lg:"200px" },
//               height: { xs: "250px", md: "260px",lg:"260px" },
//               boxShadow:
//                 "0px 18px 30px rgba(0,0,0,0.20), 0px 8px 12px rgba(0,0,0,0.15)",
//               borderRadius: "6px",
//             }}
//           >
//             <img
//               src={show?.image_url || "https://via.placeholder.com/150"}
//               alt="book"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "6px",
//               }}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "7px",
//               width: { xs: "50%" },
//             }}
//           >
//             {/*  */}
//             <Typography  sx={{ fontWeight: 500,fontSize: { xs: "1.5rem", md: "1.7rem", lg: "2rem" }, }}>
//               {show?.title}
//             </Typography>
//             <Typography sx={{ fontWeight: 500, fontSize: "17px" }}>
//               {show?.author_name}
//             </Typography>
//             <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
//               {show?.categories?.map((e, index) => (
//                 <Button
//                   key={index}
//                   sx={{
//                     backgroundColor: "#b1b4b2",
//                     color: "#fff",
//                     borderRadius: "25px",
//                     textTransform: "none", 
//                   }}
//                 >
//                   {e.name}
//                 </Button>
//               ))}
//             </Box>
//           </Box>
//         </Box>

//         {/* ===== Card ===== */}
//         <Box
//           sx={{
//             width: { xs: "95%", md: "80%", lg: "80%", xl: "90%" },
//             backgroundColor: "#FDFCF8",
//             marginTop: { xs: "25px", md: "-50px", lg: "-50px", xl: "-50px" },
//             borderRadius: "6px",
//             padding: { xs: "25px 10px", md: "25px 40px", lg: "25px 40px" },
//             // height:"600px"
//           }}
//         >
//           {/* ===== Tabs ===== */}
//           <Box sx={{ display: "flex", gap: "20px", mb: "20px" }}>
//             <Typography
//               onClick={() => setTab("details")}
//               sx={{
//                 cursor: "pointer",
//                 fontWeight: tab === "details" ? "bold" : "normal",
//                 borderBottom: tab === "details" ? "2px solid #161720" : "none",
//               }}
//             >
//               Details
//             </Typography>
//             <Typography
//               onClick={() => setTab("comments")}
//               sx={{
//                 cursor: "pointer",
//                 fontWeight: tab === "comments" ? "bold" : "normal",
//                 borderBottom: tab === "comments" ? "2px solid #161720" : "none",
//               }}
//             >
//               Comments
//             </Typography>
//           </Box>

//           {/* ===== DETAILS ===== */}
//           {tab === "details" && (
            
//             <Box sx={{ display: "flex" }}>

//               {/* Left */}
//               <Box
//                 sx={{
//                   width: "50%",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "20px",
//                   pointerEvents: "none",
//                   marginTop: { xs: "102px", md: "102px", lg: "102px" },
//                 }}
//               >
//                 <Box
//                   sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
//                 >
//                   <Typography fontWeight="bold" fontSize="15px">
//                     Description
//                   </Typography>
//                   <Typography fontSize="12px">{show?.description}</Typography>
//                 </Box>
//                 <Box
//                   sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
//                 >
//                   <Typography fontWeight="bold" fontSize="15px">
//                     {show?.author_name}
//                   </Typography>
//                   <Typography fontSize="12px">{show?.description}</Typography>
//                 </Box>
//                 <Box
//                   sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
//                 >
//                   <Typography fontWeight="bold" fontSize="15px">
//                     Rating
//                   </Typography>
//                   <Rating
//                     value={show?.rating || 0}
//                     readOnly
//                     sx={{
//                       "& .MuiRating-iconFilled": {
//                         color: "#FFC83D",
//                       },
//                     }}
//                   />
//                 </Box>
//               </Box>

//               {/* Right */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   width: "50%",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     gap: { xs:"5px",md: "60px", lg: "60px", xl: "100px" },
//                     width: { xs: "100%", md: "80%", lg: "80%" },
                    
//                   }}
//                 >
//                   <Button
//                     size="small"
//                     sx={{
//                       bgcolor: "#161720",
//                       color: "#fff",
//                       borderRadius: "25px",
//                       mb: "15px",
//                       textTransform: "none",
//                     }}
//                     // onClick={openPdf}
//                   >
//                     read <ArrowOutwardIcon sx={{ fontSize: {xs:"13px",md:"13px",lg:"13px"} }} />
//                   </Button>

//                   <Box sx={{ display: "flex", gap: {xs:"2px",md:"10px",lg:"10px"}, mb: "20px" }}>
//                     {isFavorite ? (
//                       <BookmarkIcon
//                         onClick={RemoveFavorite}
//                         sx={{ cursor: "pointer", color: "#000" }}
//                       />
//                     ) : (
//                       <BookmarkBorderOutlinedIcon
//                         onClick={AddFavorite}
//                         sx={{ cursor: "pointer" }}
//                       />
//                     )}
//                     <MusicNoteOutlinedIcon />
//                     {isRead ? (
//                       <ImportContactsOutlinedIcon
//                         onClick={removeReadList}
//                         sx={{ cursor: "pointer", color: "#000" }}
//                       />
//                     ) : (
//                       <ImportContactsOutlinedIcon
//                         onClick={addReadList}
//                         sx={{ cursor: "pointer" }}
//                       />
//                     )}
//                     <DownloadOutlinedIcon onClick={DownloadBook} />
//                   </Box>
//                 </Box>
//                 <hr
//                   style={{
//                     border: "1px solid #f1f1ee",
//                     width: { md: "70%", lg: "70%" },
//                     marginBottom: "40px",
//                     marginRight: "90px",
//                     borderRadius: "3px",
//                   }}
//                 />

//                 <Box
//                   sx={{
//                     width: "70%",
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "15px",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "12px",
//                     }}
//                   >
//                     <Typography fontWeight="bold" fontSize="15px">
//                       Language
//                     </Typography>
//                     <Typography fontSize="12px">{show?.language}</Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "12px",
//                     }}
//                   >
//                     <Typography fontWeight="bold" fontSize="15px" mt="10px">
//                       Paperback
//                     </Typography>
//                     <Typography fontSize="12px">
//                       {show?.pages_read} pages
//                     </Typography>
//                   </Box>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "12px",
//                     }}
//                   >
//                     <Typography fontWeight="bold" fontSize="15px" mt="10px">
//                       Publish Year
//                     </Typography>
//                     <Typography fontSize="12px">
//                       {show?.publish_year}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           )}

//           {/* tap commint */}
//           {tab === "comments" && (
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "307px",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Comments list */}
//               <Box
//                 sx={{
//                   flex: 1,
//                   overflowY: "auto",
//                   p: 2,
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 2,
//                 }}
//               >
                
//                 {PostCommint.length === 0 ? (
//                   <Box
//                     sx={{
//                       flex: 1,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#888",
//                       fontStyle: "italic",
//                       flexDirection: "column",
//                     }}
//                   >
//                     <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />
//                     There are no comments
//                   </Box>
//                 ) : (
//                   PostCommint.map((comment) => (
//                     <Box
//                       key={comment.id}
//                       sx={{
//                         display: "flex",
//                         gap: 1,
//                         background: "#fff",
//                         padding: "12px",
//                         borderRadius: "8px",
//                         alignItems: "flex-start",
//                       }}
//                     >
//                       <Avatar src={comment.profile_image} />

//                       <Box sx={{ flex: 1 }}>
//                         {/* ... */}
//                         <Box
//                           sx={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Typography fontSize="13px" fontWeight="bold">
//                             {comment.profile_name}
//                           </Typography>

//                           {/* */}

//                           <IconButton
//                             size="small"
//                             onClick={(e) => handleMenuOpen(e, comment)}
//                             sx={{ padding: "4px" }}
//                           >
//                             <MoreVertIcon fontSize="small" />
//                           </IconButton>
//                         </Box>

//                         {/* comment text */}
//                         <Typography fontSize="12px" mt="4px">
//                           {comment.context}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   ))
//                 )}
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                 >
//                   <MenuItem
//                     onClick={() => {
//                       setEditingCommentId(selectedComment.id);
//                       setCommentText(selectedComment.context);
//                       handleMenuClose();
//                     }}
//                   >
//                     Edit
//                   </MenuItem>

//                   <MenuItem onClick={DeleteComment}>Delete</MenuItem>
//                 </Menu>
//               </Box>

//               {/* Input fixed at bottom */}
//               <Box
//                 sx={{
//                   p: 2,
//                   borderTop: "1px solid #ddd",
//                   display: "flex",
//                   gap: 1,
//                 }}
//               >
//                 <Avatar src={getImagePro.image_url} />
//                 <TextField
//                   fullWidth
//                   size="small"
//                   placeholder="Write a comment..."
//                   value={commentText}
//                   onChange={(e) => setCommentText(e.target.value)}
//                 />
//                 <Button
//                   variant="contained"
//                   onClick={editingCommentId ? EditComment : AddPost}
//                 >
//                   {editingCommentId ? "Save" : "Send"}
//                 </Button>
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Container>
//   );
// }











































// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Avatar, TextField } from "@mui/material";

import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";

// icons
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import { useNavigate } from "react-router-dom";
// pdf.js
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function ShowBook() {
  const { id } = useParams();

  const [tab, setTab] = useState("details");
  const [show, setShow] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [PostCommint, setPostCommint] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [getImagePro, setGetImagePro] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const navigate = useNavigate();
  // PDF state
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false); // ✅ separate loading flag, starts FALSE
  const [pdfError, setPdfError] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRef = useRef(null);
  // Keep a ref to the loaded pdf document so we can re-render pages without reloading
  const pdfDocRef = useRef(null);

  const handleMenuOpen = (event, comment) => {
    setAnchorEl(event.currentTarget);
    setSelectedComment(comment);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedComment(null);
  };

  // ─── Fetch book details ────────────────────────────────────────────────────
  useEffect(() => {
    async function ShowBookDet() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://abdalrhman.cupital.xyz/api/user/books/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setShow(res.data.payload);
      } catch (err) {
        console.log("error", err);
      }
    }
    ShowBookDet();
  }, [id]);

  // ─── Fetch comments ────────────────────────────────────────────────────────
  useEffect(() => {
    async function AllComments() {
      try {
        const res = await axios.get(
          `https://abdalrhman.cupital.xyz/api/user/book/comment/${id}`,
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
        setPostCommint(res.data.payload.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    AllComments();
  }, [id]);

  // ─── Fetch profile image ───────────────────────────────────────────────────
  useEffect(() => {
    async function getImageProfile() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/profile",
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
        setGetImagePro(res.data.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getImageProfile();
  }, []);

  // ─── Render PDF page whenever pdfUrl or currentPage changes ───────────────
  // ✅ Only runs AFTER the user clicks Read, when pdfUrl is set
  useEffect(() => {
    if (!pdfUrl) return;

    const renderPage = async (pageNum, pdfDoc) => {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context, viewport }).promise;
    };

    const loadAndRender = async () => {
      try {
        // If we already have the doc loaded, just re-render the new page
        if (pdfDocRef.current) {
          await renderPage(currentPage, pdfDocRef.current);
          return;
        }
        const token = localStorage.getItem("token");
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          httpHeaders: { Authorization: `Bearer ${token}` },
          withCredentials: false,
        });
        const pdfDoc = await loadingTask.promise;
        pdfDocRef.current = pdfDoc;
        setNumPages(pdfDoc.numPages);
        await renderPage(currentPage, pdfDoc);
      } catch (err) {
        console.error("PDF render error:", err);
        setPdfError("Failed to render PDF page.");
      }
    };

    loadAndRender();
  }, [pdfUrl, currentPage]);

  // ─── Open PDF: fetch URL then show canvas ─────────────────────────────────
  // ✅ This is the function wired to the Read button
  // async function openPdf() {
  //   setShowPdf(true);
  //   setPdfLoading(true);
  //   setPdfError(null);
  //   pdfDocRef.current = null; // reset cached doc on fresh open

  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.get(
  //       // `https://abdalrhman.cupital.xyz/api/user/books/${id}/reading`,
  //       `https://abdalrhman.cupital.xyz/api/user/user/books/${id}/open-reading`,
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     const url = res.data.url;
  //     if (!url) {
  //       setPdfError("PDF not available for this book.");
  //       setPdfLoading(false);
  //       return;
  //     }

  //     setPdfUrl(url); // ✅ triggers the useEffect above to load & render
  //   } catch (err) {
  //     console.error("Error fetching PDF URL:", err);
  //     setPdfError(`Failed to load PDF. ${err.response?.data?.message || ""}`);
  //   } finally {
  //     setPdfLoading(false);
  //   }
  // }



  function openPdf() {
  const token = localStorage.getItem("token");
  const url = `https://abdalrhman.cupital.xyz/api/user/books/${id}/open-reading`;
  
  // Open in new tab with auth header isn't directly possible,
  // so we fetch it as a blob and open it
  fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      if (!res.ok) throw new Error("Failed to load PDF");
      return res.blob();
    })
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob);
      window.open(blobUrl, "_blank");
    })
    .catch(err => {
      console.error("Error opening PDF:", err);
      alert("Failed to open PDF");
    });
}

  // ─── Page navigation ───────────────────────────────────────────────────────
  const goToPage = (page) => {
    if (page < 1 || page > numPages) return;
    setCurrentPage(page);

    // Track reading progress (fire-and-forget)
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/track-page`,
        { page },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .catch((err) => console.error("Failed to track page", err));
  };

  // ─── Download ──────────────────────────────────────────────────────────────
  async function DownloadBook() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/download`,
        {
          responseType: "blob",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${show?.title || "book"}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log("error", err);
    }
  }

  // ─── Comments ──────────────────────────────────────────────────────────────
  async function AddPost() {
    try {
      const res = await axios.post(
        `https://abdalrhman.cupital.xyz/api/user/book/comment/${id}`,
        { context: commentText },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      const addedComment = res.data.payload.data;
      setPostCommint((prev) => [...prev, addedComment]);
      setCommentText("");
    } catch (err) {
      console.log("error", err);
    }
  }

  async function DeleteComment() {
    try {
      await axios.delete(
        `https://abdalrhman.cupital.xyz/api/user/book/comment/${selectedComment.id}/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setPostCommint((prev) =>
        prev.filter((comment) => comment.id !== selectedComment.id)
      );
      handleMenuClose();
    } catch (err) {
      console.log("error", err);
    }
  }

  async function EditComment() {
    try {
      await axios.patch(
        `https://abdalrhman.cupital.xyz/api/user/book/comment/${editingCommentId}/${id}`,
        { context: commentText },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setPostCommint((prev) =>
        prev.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, context: commentText }
            : comment
        )
      );
      setEditingCommentId(null);
      setCommentText("");
    } catch (err) {
      console.log("error", err);
    }
  }

  // ─── Favorites & Reading List ──────────────────────────────────────────────
  async function AddFavorite() {
    try {
      await axios.get(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/add-fav`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIsFavorite(true);
    } catch (err) {
      console.log("error", err);
    }
  }

  async function RemoveFavorite() {
    try {
      await axios.post(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/remove-fav`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIsFavorite(false);
    } catch (err) {
      console.log("error", err);
    }
  }

  async function addReadList() {
    try {
      await axios.get(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/add-read`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIsRead(true);
    } catch (err) {
      console.log("error", err);
    }
  }

  async function removeReadList() {
    try {
      await axios.post(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/remove-read`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setIsRead(false);
    } catch (err) {
      console.log("error", err);
    }
  }

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <Container maxWidth="xl" sx={{ p: 0, minHeight: "100vh" }}>

      {/* ✅ PDF Viewer — only renders when user clicked Read */}
      {showPdf && (
        <Box sx={{ p: 2, textAlign: "center" }}>
          {pdfLoading && <Typography>Loading PDF...</Typography>}
          {pdfError && (
            <Typography color="error">{pdfError}</Typography>
          )}
          {!pdfLoading && !pdfError && (
            <>
              <canvas
                ref={canvasRef}
                style={{ border: "1px solid #ccc", maxWidth: "100%" }}
              />
              <Box sx={{ mt: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                >
                  Previous
                </Button>
                <Typography>
                  {currentPage} / {numPages}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= numPages}
                >
                  Next
                </Button>
                <Button
                  variant="text"
                  size="small"
                  onClick={() => { setShowPdf(false); setPdfUrl(""); pdfDocRef.current = null; }}
                >
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Book + Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: "20px", md: "30px", lg: "40px", xl: "100px" },
            zIndex: 2,
            marginLeft: { md: "70px" },
            width: { xs: "95%", md: "43%", lg: "45%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "50%", md: "200px", lg: "200px" },
              height: { xs: "250px", md: "260px", lg: "260px" },
              boxShadow:
                "0px 18px 30px rgba(0,0,0,0.20), 0px 8px 12px rgba(0,0,0,0.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src={show?.image_url || "https://via.placeholder.com/150"}
              alt="book"
              style={{ width: "100%", height: "100%", borderRadius: "6px" }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px", width: { xs: "50%" } }}>
            <Typography sx={{ fontWeight: 500, fontSize: { xs: "1.5rem", md: "1.7rem", lg: "2rem" } }}>
              {show?.title}
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "17px" }}>
              {show?.author_name}
            </Typography>
            <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {show?.categories?.map((e, index) => (
                <Button
                  key={index}
                  sx={{
                    backgroundColor: "#b1b4b2",
                    color: "#fff",
                    borderRadius: "25px",
                    textTransform: "none",
                  }}
                >
                  {e.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Card */}
        <Box
          sx={{
            width: { xs: "95%", md: "80%", lg: "80%", xl: "90%" },
            backgroundColor: "#FDFCF8",
            marginTop: { xs: "25px", md: "-50px", lg: "-50px", xl: "-50px" },
            borderRadius: "6px",
            padding: { xs: "25px 10px", md: "25px 40px", lg: "25px 40px" },
          }}
        >
          {/* Tabs */}
          <Box sx={{ display: "flex", gap: "20px", mb: "20px" }}>
            <Typography
              onClick={() => setTab("details")}
              sx={{
                cursor: "pointer",
                fontWeight: tab === "details" ? "bold" : "normal",
                borderBottom: tab === "details" ? "2px solid #161720" : "none",
              }}
            >
              Details
            </Typography>
            <Typography
              onClick={() => setTab("comments")}
              sx={{
                cursor: "pointer",
                fontWeight: tab === "comments" ? "bold" : "normal",
                borderBottom: tab === "comments" ? "2px solid #161720" : "none",
              }}
            >
              Comments
            </Typography>
          </Box>

          {/* DETAILS TAB */}
          {tab === "details" && (
            <Box sx={{ display: "flex" }}>
              {/* Left */}
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: { xs: "102px", md: "102px", lg: "102px" },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Typography fontWeight="bold" fontSize="15px">Description</Typography>
                  <Typography fontSize="12px">{show?.description}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Typography fontWeight="bold" fontSize="15px">{show?.author_name}</Typography>
                  <Typography fontSize="12px">{show?.description}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Typography fontWeight="bold" fontSize="15px">Rating</Typography>
                  <Rating
                    value={show?.rating || 0}
                    readOnly
                    sx={{ "& .MuiRating-iconFilled": { color: "#FFC83D" } }}
                  />
                </Box>
              </Box>

              {/* Right */}
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: { xs: "5px", md: "60px", lg: "60px", xl: "100px" },
                    width: { xs: "100%", md: "80%", lg: "80%" },
                  }}
                >
                  {/* ✅ Read button now calls openPdf */}
                  {/* <Button
                    size="small"
                    sx={{
                      bgcolor: "#161720",
                      color: "#fff",
                      borderRadius: "25px",
                      mb: "15px",
                      textTransform: "none",
                    }}
                    onClick={openPdf}
                  >
                    read <ArrowOutwardIcon sx={{ fontSize: { xs: "13px", md: "13px", lg: "13px" } }} />
                  </Button> */}
                  <Button
  size="small"
  sx={{
    bgcolor: "#161720",
    color: "#fff",
    borderRadius: "25px",
    mb: "15px",
    textTransform: "none",
  }}
  onClick={() => navigate(`/app/read/${id}`)}
>
  read <ArrowOutwardIcon sx={{ fontSize: { xs: "13px" } }} />
</Button>

                  <Box sx={{ display: "flex", gap: { xs: "2px", md: "10px", lg: "10px" }, mb: "20px" }}>
                    {isFavorite ? (
                      <BookmarkIcon onClick={RemoveFavorite} sx={{ cursor: "pointer", color: "#000" }} />
                    ) : (
                      <BookmarkBorderOutlinedIcon onClick={AddFavorite} sx={{ cursor: "pointer" }} />
                    )}
                    <MusicNoteOutlinedIcon />
                    {isRead ? (
                      <ImportContactsOutlinedIcon onClick={removeReadList} sx={{ cursor: "pointer", color: "#000" }} />
                    ) : (
                      <ImportContactsOutlinedIcon onClick={addReadList} sx={{ cursor: "pointer" }} />
                    )}
                    <DownloadOutlinedIcon onClick={DownloadBook} sx={{ cursor: "pointer" }} />
                  </Box>
                </Box>

                <hr
                  style={{
                    border: "1px solid #f1f1ee",
                    width: "70%",
                    marginBottom: "40px",
                    marginRight: "90px",
                    borderRadius: "3px",
                  }}
                />

                <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography fontWeight="bold" fontSize="15px">Language</Typography>
                    <Typography fontSize="12px">{show?.language}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography fontWeight="bold" fontSize="15px" mt="10px">Paperback</Typography>
                    <Typography fontSize="12px">{show?.pages_read} pages</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography fontWeight="bold" fontSize="15px" mt="10px">Publish Year</Typography>
                    <Typography fontSize="12px">{show?.publish_year}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* COMMENTS TAB */}
          {tab === "comments" && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "307px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box sx={{ flex: 1, overflowY: "auto", p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                {PostCommint.length === 0 ? (
                  <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontStyle: "italic", flexDirection: "column" }}>
                    <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />
                    There are no comments
                  </Box>
                ) : (
                  PostCommint.map((comment) => (
                    <Box
                      key={comment.id}
                      sx={{ display: "flex", gap: 1, background: "#fff", padding: "12px", borderRadius: "8px", alignItems: "flex-start" }}
                    >
                      <Avatar src={comment.profile_image} />
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography fontSize="13px" fontWeight="bold">{comment.profile_name}</Typography>
                          <IconButton size="small" onClick={(e) => handleMenuOpen(e, comment)} sx={{ padding: "4px" }}>
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        <Typography fontSize="12px" mt="4px">{comment.context}</Typography>
                      </Box>
                    </Box>
                  ))
                )}
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={() => { setEditingCommentId(selectedComment.id); setCommentText(selectedComment.context); handleMenuClose(); }}>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={DeleteComment}>Delete</MenuItem>
                </Menu>
              </Box>

              {/* ✅ Safe guard: only render Avatar when getImagePro is loaded */}
              <Box sx={{ p: 2, borderTop: "1px solid #ddd", display: "flex", gap: 1 }}>
                <Avatar src={getImagePro?.image_url} />
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <Button variant="contained" onClick={editingCommentId ? EditComment : AddPost}>
                  {editingCommentId ? "Save" : "Send"}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
