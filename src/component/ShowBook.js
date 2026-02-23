// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Avatar, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";

// icons
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

//pdf.js
import { useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
export default function ShowBook() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [tab, setTab] = useState("details"); // details | comments
  const [show, setShow] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [PostCommint, setPostCommint] = useState([]); //manu comments
  const [commentText, setCommentText] = useState("");
  const [getImagePro, setGetImagePro] = useState(null);

  //pdf.js
  const canvasRef = useRef(null);

  useEffect(() => {
    async function ShowBookDet() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://abdalrhman.cupital.xyz/api/user/books/${id}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        setShow(res.data.payload);
      } catch (err) {
        console.log("error", err);
      }
    }
    ShowBookDet();
  }, [id]);

  //Download Book
  async function DownloadBook() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/download`,
        {
          responseType: "blob",
          headers: { Authorization: `Bearer ${token}` },
        },
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

  async function openPdf() {
    try {
      setShowPdf(true);

      const token = localStorage.getItem("token");

      // أولاً نطلب من الباك رابط القراءة
      const res = await axios.get(
        `https://abdalrhman.cupital.xyz/api/user/books/${id}/reading`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const pdfUrl = res.data.payload.url;

      // worker
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

      if (!pdfUrl || !pdfUrl.file || !pdfUrl.file.url) {
        console.log("PDF URL not found");
        return;
      }

      // الآن نمرر الرابط مباشرة
      console.log("PDF URL:", pdfUrl);
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;

      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;

      console.log("PDF loaded successfully!");
    } catch (err) {
      console.error("Error opening PDF:", err);
    }
  }

  //post commints
  async function AddPost() {
    try {
      const res = await axios.post(
        `https://abdalrhman.cupital.xyz/api/user/book/comment/${id}`,
        {
          context: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const addedComment = res.data.payload.data;
      setPostCommint((prev) => [...prev, addedComment]);
      setCommentText("");
      console.log("Create Comment");
    } catch (err) {
      console.log("error", err);
    }
  }

  //get comments
  useEffect(() => {
    async function AllComments() {
      try {
        const res = await axios.get(
          `https://abdalrhman.cupital.xyz/api/user/book/comment/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        setPostCommint(res.data.payload.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    AllComments();
  }, [id]);

  //image profile
  useEffect(() => {
    async function getImageProfile() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        setGetImagePro(res.data.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getImageProfile();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ p: 0, minHeight: "100vh" }}>
      {showPdf && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 3,
           
          }}
        >
          <canvas ref={canvasRef} style={{ borderRadius: "6px" }} />
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
        {/* ===== Book + Title ===== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: "20px", md: "40px", xl: "100px" },
            zIndex: 2,
            marginLeft: { md: "70px" },
            // backgroundColor:"red",
            width: {xs:"95%",md:"45%",lg:"45%"},
          }}
        >
          <Box
            sx={{
              width: { xs: "40%", md: "200px" },
              height: { xs: "250px", md: "260px" },
              boxShadow:
                "0px 18px 30px rgba(0,0,0,0.20), 0px 8px 12px rgba(0,0,0,0.15)",
              borderRadius: "6px",
            }}
          >
            <img
              src={show?.image_url || "https://via.placeholder.com/150"}
              alt="book"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "6px",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px",width:{xs:"60%"} }}>
            <Typography variant={"h4"} sx={{ fontWeight: 500 }}>
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
                  }}
                >
                  {e.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ===== Card ===== */}
        <Box
          sx={{
            width: {xs:"95%", md: "80%", lg: "80%", xl: "90%" },
            backgroundColor: "#FDFCF8",
            marginTop:{xs:"25px",md: "-50px",lg:"-50px",xl:"-50px"},
            borderRadius: "6px",
            padding: {xs:"25px 10px", md: "25px 40px",lg: "25px 40px" },
            // height:"600px"
          }}
        >
          {/* ===== Tabs ===== */}
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

          {/* ===== DETAILS ===== */}
          {tab === "details" && (
            <Box sx={{ display: "flex" }}>
              {/* Left */}
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  pointerEvents: "none",
                  marginTop: { xs:"102px",md: "102px",lg:"102px" },
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <Typography fontWeight="bold" fontSize="15px">
                    Description
                  </Typography>
                  <Typography fontSize="12px">{show?.description}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <Typography fontWeight="bold" fontSize="15px">
                    {show?.author_name}
                  </Typography>
                  <Typography fontSize="12px">{show?.description}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <Typography fontWeight="bold" fontSize="15px">
                    Rating
                  </Typography>
                  <Rating
                    value={show?.rating || 0}
                    readOnly
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#FFC83D",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Right */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: { md: "60px",lg:"60px", xl: "100px" },
                    width: {xs:"100%",md:"80%",lg:"80%"},
                    // backgroundColor:"red"
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#161720",
                      color: "#fff",
                      borderRadius: "25px",
                      mb: "15px",
                    }}
                    // onClick={() => Navigate("/app")}
                    onClick={openPdf}
                  >
                    Start reading <ArrowOutwardIcon sx={{ fontSize: "13px" }} />
                  </Button>

                  <Box sx={{ display: "flex", gap: "10px", mb: "20px" }}>
                    <BookmarkBorderOutlinedIcon />
                    <MusicNoteOutlinedIcon />
                    <DownloadOutlinedIcon onClick={DownloadBook} />
                  </Box>
                </Box>
                <hr
                  style={{
                    border: "1px solid #f1f1ee",
                    width: {md:"70%",lg:"70%"},
                    marginBottom: "40px",
                    marginRight: "90px",
                    borderRadius: "3px",
                  }}
                />

                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <Typography fontWeight="bold" fontSize="15px">
                      Language
                    </Typography>
                    <Typography fontSize="12px">{show?.language}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <Typography fontWeight="bold" fontSize="15px" mt="10px">
                      Paperback
                    </Typography>
                    <Typography fontSize="12px">
                      {show?.pages_read} pages
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <Typography fontWeight="bold" fontSize="15px" mt="10px">
                      Publish Year
                    </Typography>
                    <Typography fontSize="12px">
                      {show?.publish_year}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {/* ===== COMMENTS ===== */}
          {/* {tab === "comments" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {PostCommint.map((comment)=>(
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
              

                <Avatar src={comment.profile_image}/>
                <Box>
                  <Typography fontSize="13px" fontWeight="bold">
                    {comment.profile_name}
                  </Typography>
                  <Typography fontSize="12px">
                    {comment.context}
                  </Typography>
                </Box>
                
                
              </Box>
              ))}

             

              
              <Box sx={{ display: "flex", gap: "10px", mt: "10px" }}>
                
                <Avatar src={getImagePro.image_url}/>
                
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e)=>setCommentText(e.target.value)}
                />
                <Button variant="contained" onClick={AddPost}>Send</Button>
              </Box>
              
            </Box>
          )} */}
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
              {/* Comments list */}
              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {PostCommint.length === 0 ? (
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#888",
                      fontStyle: "italic",
                      flexDirection:"column"
                    }}
                  >
                    <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />
                    There are no comments
                  </Box>
                ) : (
                  PostCommint.map((comment, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: 1,
                        background: "#fff",
                        padding: "12px",
                        borderRadius: "8px",
                      }}
                    >
                      <Avatar src={comment.profile_image} />
                      <Box>
                        <Typography fontSize="13px" fontWeight="bold">
                          {comment.profile_name}
                        </Typography>
                        <Typography fontSize="12px">
                          {comment.context}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>

              {/* Input fixed at bottom */}
              <Box
                sx={{
                  p: 2,
                  borderTop: "1px solid #ddd",
                  display: "flex",
                  gap: 1,
                }}
              >
                <Avatar src={getImagePro.image_url} />
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <Button variant="contained" onClick={AddPost}>
                  Send
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
