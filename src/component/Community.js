import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CustomizedDialogs from "./DialogCommunity";
import { useNavigate } from "react-router-dom";
import { FiBook, FiCpu, FiGlobe, FiMusic, FiPenTool } from "react-icons/fi";

export default function Community() {
  const navigate = useNavigate();

  // API State
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [categoriesAPI, setCategoriesAPI] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [mate,setMate]=useState({});

  // Dialog
  const [open, setOpen] = useState(false);

  //Community function
  const fetchGroups = async () => {
    try {
      const res = await axios.get(
        "https://abdalrhman.cupital.xyz/api/user/groups",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );

      const data = res.data.payload.data;

      setGroups(data);
      console.log(data);

      const allCategories = data.flatMap((g) => g.categories);
      const uniqueCategories = Array.from(
        new Map(allCategories.map((c) => [c.id, c])).values(),
      );
      setCategoriesAPI(uniqueCategories);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect يستدعي fetchGroups
  // useEffect(() => {
  //   fetchGroups();
  // }, []);

  useEffect(() => {
  if (activeCategory === "all") {
    setFilteredGroups(groups);
  } else {
    const filtered = groups.filter((group) =>
      group.categories.some((cat) => cat.id === activeCategory)
    );
    setFilteredGroups(filtered);
  }
}, [groups, activeCategory]);

  // Fetch Groups
  useEffect(() => {
    async function getGroups() {
      try {
        const res = await axios.get(
          "https://abdalrhman.cupital.xyz/api/user/groups",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        const data = res.data.payload.data;
        const meta1=res.data.payload.meta;
        setMate(meta1);
        setGroups(data);
        setFilteredGroups(data);

        // Extract unique categories
        const allCategories = data.flatMap((g) => g.categories);
        const uniqueCategories = Array.from(
          new Map(allCategories.map((c) => [c.id, c])).values(),
        );
        setCategoriesAPI(uniqueCategories);
      } catch (err) {
        console.log(err);
      }
    }

    getGroups();
  }, []);

  // Filter function
  function filterGroups(categoryId) {
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      setFilteredGroups(groups);
      return;
    }

    const filtered = groups.filter((group) =>
      group.categories.some((cat) => cat.id === categoryId),
    );

    setFilteredGroups(filtered);
  }

  // Predefined Categories for Sidebar (icons)
  const categories = [
    { id: "all", name: "All Groups", count: groups.length, icons: <FiBook /> },
    { id: 1, name: "Literature & Novels", count: 0, icons: <FiPenTool /> },
    { id: 2, name: "Sciences", count: 0, icons: <FiCpu /> },
    { id: 3, name: "History & Archaeology", count: 0, icons: <FiGlobe /> },
    { id: 4, name: "Technology & AI", count: 0, icons: <FiCpu /> },
    { id: 5, name: "Art & Design", count: 0, icons: <FiPenTool /> },
    { id: 6, name: "Music & Performing Arts", count: 0, icons: <FiMusic /> },
  ];

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
              onClick={() => filterGroups(cat.id)}
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

          <Box
            onClick={() => filterGroups("all")}
            sx={{
              p: 1.2,
              mb: 1,
              borderRadius: 2,
              cursor: "pointer",
              bgcolor: activeCategory === "all" ? "#F1F5FF" : "transparent",
              color: activeCategory === "all" ? "#ff8a65" : "inherit",
            }}
          >
            <Typography fontSize={14}>All Groups</Typography>
          </Box>

          {categoriesAPI.map((cat) => (
            <Box
              key={cat.id}
              onClick={() => filterGroups(cat.id)}
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
              <Typography fontSize={14}>{cat.name}</Typography>
              <Box
                sx={{
                  bgcolor: "#EEF2F6",
                  px: 1.2,
                  py: 0.3,
                  borderRadius: 10,
                  fontSize: 12,
                }}
              >
                {/* Fetch the number of groups */}
                {
                  groups.filter((g) =>
                    g.categories.some((c) => c.id === cat.id),
                  ).length
                }
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
            {/* {open && <CustomizedDialogs open={open} setOpen={setOpen} />} */}
            {open && (
              <CustomizedDialogs
                open={open}
                setOpen={setOpen}
                fetchGroups={fetchGroups}
                setActiveCategory={setActiveCategory}
                categoriesAPI={categoriesAPI}
              />
            )}

            <Box>
              <Typography variant="h5" fontWeight={600}>
                All Communities
              </Typography>
              <Typography color="text.secondary">
                {filteredGroups.length} communities found
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
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {filteredGroups.map((c) => (
                <Card
                  key={c.id}
                  sx={{
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    width: { xs: "100%", sm: "48%", md: "31%" },
                    minWidth: 250,
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      height: 160,
                      backgroundImage: `url(${c.image_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                    }}
                  >
                    <Chip
                      label={c.availbility}
                      size="small"
                      sx={{ position: "absolute", top: 10, left: 10,bgcolor:"#fff" }}
                    />
                    <Chip
                      label={c.status}
                      size="small"
                      color={c.status === "active" ? "success" : "default"}
                      sx={{ position: "absolute", top: 10, right: 10 }}
                    />
                    <Chip
                      label={`⭐ ${c.rating}`}
                      size="small"
                      sx={{ position: "absolute", bottom: 10, right: 10,bgcolor:"#fff" }}
                    />
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600} mb={1}>
                      {c.title}
                    </Typography>
                    <Typography fontSize={14} color="text.secondary" mb={1}
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        // WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: { xs: "auto", md: "75px", lg: "75px" },
                      }}
                     >
                      {c.description || c.des}
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
                        👥{c.members_count || 0}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {c.categories?.map((cat) => (
                        <Chip key={cat.id} label={cat.name} size="small" />
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
                      onClick={()=>navigate(`/app/ShowGroup`)}
                    >
                      Join Community
                    </Button>
                  </Box>
                </Card>
              ))}
            </Box>

            {/* Community Types  */}
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
                    {mate?.public_count||0} communities
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
                    {mate?.private_count||0} communities
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
