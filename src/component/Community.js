import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useState } from "react";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CustomizedDialogs from "./DialogCommunity";
import { useNavigate } from "react-router-dom";
import { FiBook, FiCpu, FiGlobe, FiMusic, FiPenTool } from "react-icons/fi";

export default function Community() {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigate=useNavigate();
  const categories = [
    {
      id: 0,
      name: "All Categories",
      count: 17,
      icons: <FiBook />,
    },
    {
      id: 1,
      name: "Literature & Novels",
      count: 3,
      icons: <FiPenTool />,
    },
    { id: 2, name: "Sciences", count: 2, icons: <FiCpu /> },
    {
      id: 3,
      name: "History & Archaeology",
      count: 2,
      icons: <FiGlobe />,
    },
    {
      id: 4,
      name: "Technology & AI",
      count: 2,
      icons: <FiCpu />,
    },
    { id: 5, name: "Art & Design", count: 4, icons: <FiPenTool /> },
    {
      id: 6,
      name: "Music & Performing Arts",
      count: 5,
      icons: <FiMusic />,
    },
  ];

  const communities = [
    {
      id: 1,
      title: "Contemporary Arabic Literature Club",
      description:
        "Discussing modern and contemporary Arabic literary works with deep analysis and cultural context.",
      rating: 4.8,
      members: 1247,
      comments: 3456,
      activity: "89/week",
      lastActive: "2 hours ago",
      tags: ["Literature", "Novel", "Literary Criticism"],
    },
    {
      id: 2,
      title: "Poetry & Verse Society",
      description:
        "Exploring classical and modern poetry from around the world, sharing original works.",
      rating: 4.6,
      members: 567,
      comments: 1234,
      activity: "45/week",
      lastActive: "1 hour ago",
      tags: ["Poetry", "Verse", "Creative Writing"],
    },
    {
      id: 3,
      title: "World Literature Exchange",
      description:
        "Reading and discussing literature from different cultures and languages in translation.",
      rating: 4.7,
      members: 892,
      comments: 2134,
      activity: "67/week",
      lastActive: "3 hours ago",
      tags: ["World Literature", "Translation"],
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh", p: { xs: 1, md: 2 } }}>
      {/* Main Layout: Sidebar + Content */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* ===== Mobile Categories (Buttons) ===== */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            gap: 3,
            mb: 3,
            pb: 1,
            flexWrap: "wrap",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              startIcon={cat.icons}
              sx={{
                flexShrink: 0,
                px: 2,
                py: 1,
                borderRadius: "999px",
                textTransform: "none",
                fontSize: 14,
                bgcolor: activeCategory === cat.id ? "#000" : "#F1F5FF",
                color: activeCategory === cat.id ? "#fff" : "#111827",
                "&:hover": {
                  bgcolor: activeCategory === cat.id ? "#111" : "#E5ECFF",
                },
                marginLeft: "5px",
                marginTop: "10px",
              }}
            >
              {cat.name}
            </Button>
          ))}
        </Box>

        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            bgcolor: "#fff",
            p: 2,
            borderRadius: 3,
            display: { xs: "none", md: "block" },
            width: 280,
            height: "fit-content",
            position: "sticky",
            top: 20,
          }}
        >
          <Typography fontWeight={600} mb={2}>
            Categories
          </Typography>

          {categories.map((cat) => (
            <Box
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1.2,
                mb: 1,
                borderRadius: 2,
                cursor: "pointer",
                bgcolor: activeCategory === cat.id ? "#F1F5FF" : "transparent",
                color: activeCategory === cat.id ? "#ff8a65" : "inherit",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {cat.icons}
                <Typography fontSize={14}>{cat.name}</Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: "#EEF2F6",
                  px: 1.2,
                  py: 0.3,
                  borderRadius: 10,
                  fontSize: 12,
                }}
              >
                {cat.count}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ================= CONTENT ================= */}
        <Box sx={{ flex: 1 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 2,
            }}
          >
            {open && <CustomizedDialogs open={open} setOpen={setOpen} />}

            <Box>
              <Typography variant="h5" fontWeight={600}>
                All Communities
              </Typography>
              <Typography color="text.secondary">
                {communities.length} communities found
              </Typography>
            </Box>

            <Button
              sx={{
                bgcolor: "#000000",
                borderRadius: 2,
                "&:hover": { bgcolor: "#131313" },
                color: "#fff",
                marginRight: { md: "18px" },
              }}
              onClick={() => setOpen(true)}
            >
              Create Community
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                gap: 3,
                justifyContent: { xs: "center", md: "flex-start" }, // center on small screens
              }}
            >
              {communities.map((c) => (
                <Card
                  key={c.id}
                  sx={{
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", sm: "48%", md: "31%" }, 
                    minWidth: 250, // optional: prevent cards from being too small
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      height: 160,
                      bgcolor: "#faf5db",
                      position: "relative",
                    }}
                  >
                    <Chip
                      label="Public"
                      size="small"
                      sx={{ position: "absolute", top: 10, left: 10 }}
                    />
                    <Chip
                      label="Active"
                      size="small"
                      color="success"
                      sx={{ position: "absolute", top: 10, right: 10 }}
                    />
                    <Chip
                      label={`⭐ ${c.rating}`}
                      size="small"
                      sx={{ position: "absolute", bottom: 10, right: 10 }}
                    />
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600} mb={1}>
                      {c.title}
                    </Typography>
                    <Typography fontSize={14} color="text.secondary" mb={2}>
                      {c.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize={13} mb={2}>
                        {" "}
                        👥{c.members}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {c.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Box>
                  </CardContent>

                  {/* Button */}
                  <Box p={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: "#000000",
                        borderRadius: 2,
                        "&:hover": { bgcolor: "#131313" },
                        color: "#fff",
                      }}
                     onClick={()=>navigate("/app/ShowGroup")}
                    >
                      Join Community
                    </Button>
                  </Box>
                </Card>
              ))}
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                margimTop: "7px",
              }}
            >
              <Typography
                sx={{ fontSize: "22px", fontWeight: "bold" }}
                color="#111827"
              >
                Community Types
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    width: { md: "30%", sm: "100%" },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "10px",
                    gap: 1,
                    borderRadius: 4,
                  }}
                >
                  <LanguageOutlinedIcon
                    style={{ fontSize: "40px", color: "#374151" }}
                  />
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                    color="#111827"
                  >
                    Public
                  </Typography>
                  <Typography sx={{ fontSize: "17px" }} color="#5B6572">
                    Open to everyone
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      padding: "5px 20px",
                      bgcolor: "#EDF3FA",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }}
                    color="#111827"
                  >
                    234 communities
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    width: { md: "30%", sm: "100%" },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "10px",
                    gap: 1,
                    borderRadius: 4,
                  }}
                >
                  <SecurityOutlinedIcon
                    style={{ fontSize: "40px", color: "#374151" }}
                  />
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                    color="#111827"
                  >
                    Private
                  </Typography>
                  <Typography sx={{ fontSize: "17px" }} color="#5B6572">
                    By code or invitation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      padding: "5px 20px",
                      bgcolor: "#EDF3FA",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }}
                    color="#111827"
                  >
                    89 communities
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
