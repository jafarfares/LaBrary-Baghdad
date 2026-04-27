// import * as React from "react";
// import axios from "axios";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogActions,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   OutlinedInput,
//   Rating,
// } from "@mui/material";

// const categoryOptions = [
//   { label: "Literature", value: 1 },
//   { label: "Technology", value: 2 },
//   { label: "Science", value: 3 },
//   { label: "Art & Design", value: 4 },
//   { label: "Music", value: 5 },
//   { label: "History", value: 6 },
// ];

// const statusOptions = [
//   { label: "Active", value: "active" },
//   { label: "Inactive", value: "inactive" },
// ];

// const communityTypes = [
//   { label: "Public", value: "public" },
//   { label: "Private", value: "private" },
// ];
// // { open, setOpen }
// export default function CommunityDialog({ open, setOpen, fetchGroups }) {
//   const [category, setCategory] = React.useState("");
//   const [type, setType] = React.useState("");

//   const [rating, setRating] = React.useState(0);

//   const [error, setError] = useState();

//   const handleClose = () => setOpen(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     des: "",
//     image: "",
//     rating: "",
//     availbility: "",
//     status: "",
//     categories: "",
//   });

//   // async function CreateGroup() {
//   //   if (
//   //     !formData.title ||
//   //     !formData.des ||
//   //     !formData.image ||
//   //     !formData.rating ||
//   //     !formData.availbility ||
//   //     !formData.status ||
//   //     !formData.categories
//   //   ) {
//   //     setError("Fill in all fields");
//   //   }
//   //   try {
//   //     const data = new FormData();
//   //     data.append("title", formData.title);
//   //     data.append("des", formData.des);
//   //     data.append("image", formData.image);
//   //     data.append("rating", formData.rating);
//   //     data.append("availbility", formData.availbility);
//   //     data.append("status", formData.status);
//   //     data.append("categories[]", formData.categories);

//   //     const res = await axios.post(
//   //       "https://abdalrhman.cupital.xyz/api/user/groups",
//   //       data,
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //         },
//   //       },
//   //     );
//   //     handleClose();
//   //     console.log("create Group");
//   //   } catch (err) {
//   //     console.log(err.response.data);
//   //   }
//   // }

//  async function CreateGroup() {
//     if (!formData.title || !formData.des || !formData.image || !formData.rating || !formData.availbility || !formData.status || !formData.categories) {
//       setError("Fill in all fields");
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("des", formData.des);
//       data.append("image", formData.image);
//       data.append("rating", formData.rating);
//       data.append("availbility", formData.availbility);
//       data.append("status", formData.status);
//       data.append("categories[]", formData.categories);

//       await axios.post(
//         "https://abdalrhman.cupital.xyz/api/user/groups",
//         data,
//         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//       );

//       handleClose();

//       fetchGroups(); // ← تحديث الصفحة بعد الإضافة
//       console.log("Group created successfully");
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   }

//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//       <DialogContent
//         sx={{
//           bgcolor: "#FAFAFA",
//           px: 4,
//           py: 3,
//         }}
//       >
//         {/* Header */}
//         <Typography variant="h5" fontWeight={700} mb={3}>
//           Create Community
//         </Typography>

//         <Box display="flex" flexDirection="column" gap={2}>
//           {/* Community Name */}
//           <TextField
//             label="title *"
//             placeholder="Enter community name"
//             fullWidth
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//           />

//           {/* Description */}
//           <TextField
//             label="Description *"
//             placeholder="Describe what your community is about"
//             fullWidth
//             multiline
//             onChange={(e) => setFormData({ ...formData, des: e.target.value })}
//           />

//           {/* Category */}
//           <Select
//             // value={category}
//             // onChange={(e) => setCategory(e.target.value)}
//             value={formData.status}
//             onChange={(e) =>
//               setFormData({ ...formData, status: e.target.value })
//             }
//             displayEmpty
//             fullWidth
//             input={<OutlinedInput />}
//           >
//             <MenuItem value="" disabled>
//               status*
//             </MenuItem>
//             {statusOptions.map((t) => (
//               <MenuItem key={t.value} value={t.value}>
//                 {t.label}
//               </MenuItem>
//             ))}
//           </Select>

//           {/* Community Type */}
//           <Select
//             value={formData.availbility}
//             onChange={(e) =>
//               setFormData({ ...formData, availbility: e.target.value })
//             }
//             displayEmpty
//             fullWidth
//             input={<OutlinedInput />}
//           >
//             <MenuItem value="" disabled>
//               availbility*
//             </MenuItem>
//             {communityTypes.map((t) => (
//               <MenuItem key={t.value} value={t.value}>
//                 {t.label}
//               </MenuItem>
//             ))}
//           </Select>

//           {/* Current Book */}
//           <Select
//             // value={category}
//             // onChange={(e) => setCategory(e.target.value)}
//             value={formData.categories}
//             onChange={(e) =>
//               setFormData({ ...formData, categories: e.target.value })
//             }
//             displayEmpty
//             fullWidth
//             input={<OutlinedInput />}
//           >
//             <MenuItem value="" disabled>
//               category*
//             </MenuItem>
//             {categoryOptions.map((cat) => (
//               <MenuItem key={cat.value} value={cat.value}>
//                 {cat.label}
//               </MenuItem>
//             ))}
//           </Select>

//           <Typography fontSize={14}>Community Image</Typography>
//           <Button variant="outlined" component="label" size="small">
//             Upload Image
//             <input
//               hidden
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFormData({ ...formData, image: e.target.files[0] })
//               }
//             />
//           </Button>

//           {/* Rating */}
//           <Box>
//             <Typography fontSize={14} mb={1}>
//               Initial Rating
//             </Typography>
//             <Rating
//               value={formData.rating}
//               precision={0.5}
//               onChange={(event, newValue) =>
//                 setFormData({ ...formData, rating: newValue })
//               }
//             />
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {error && (
//             <Typography
//               sx={{
//                 color: "red",
//                 fontSize: "15px",
//               }}
//             >
//               {error}
//             </Typography>
//           )}
//         </Box>
//       </DialogContent>

//       {/* Footer */}
//       <DialogActions sx={{ px: 4, py: 2, bgcolor: "#FAFAFA" }}>
//         <Button
//           onClick={handleClose}
//           sx={{ color: "#000", border: "1px solid #000" }}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           sx={{ color: "#fff", bgcolor: "#131313" }}
//           onClick={CreateGroup}
//         >
//           Create Community
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }






































import * as React from "react";
import axios from "axios";
import { useState } from "react";
import {InputLabel} from "@mui/material";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  OutlinedInput,
  Rating,
} from "@mui/material";
import { FormControl } from "@mui/material";

const categoryOptions = [
  { label: "Literature", value: 1 },
  { label: "Technology", value: 2 },
  { label: "Science", value: 3 },
  { label: "Art & Design", value: 4 },
  { label: "Music", value: 5 },
  { label: "History", value: 6 },
];

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const communityTypes = [
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
];

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: "#fff",

    "& fieldset": {
      borderColor: "#E5E5E5",
    },

    "&:hover fieldset": {
      borderColor: "#C9B27C",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#8B6C2F",
      borderWidth: "2px",
    },
  },
};

export default function CommunityDialog({
  open,
  setOpen,
  fetchGroups,
  setActiveCategory,
  categoriesAPI,
  // groupToEdit = null,
}) {
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    des: "",
    image: null,
    rating: 0,
    availbility: "",
    status: "",
    categories: [],
  });

  const handleClose = () => setOpen(false);

  async function CreateGroup() {
    
    if (
      !formData.title ||
      !formData.des ||
      !formData.image ||
      !formData.rating ||
      !formData.availbility ||
      !formData.status ||
      formData.categories.length === 0
    ) {
      setError("Fill in all fields");
      return;
    }

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("des", formData.des);
      data.append("image", formData.image);
      data.append("rating", formData.rating); 
      data.append("availbility", formData.availbility); 
      data.append("status", formData.status); 
      formData.categories.forEach((cat) => {
        data.append("categories[]", cat);
      });

      await axios.post("https://abdalrhman.cupital.xyz/api/user/groups", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      handleClose();
      fetchGroups(); 
      setFormData({
        title: "",
        des: "",
        image: null,
        rating: 0,
        availbility: "",
        status: "",
        categories:[],
      });
      setError("");
      console.log("Group created successfully");
    } catch (err) {
      console.log(err.response?.data);
      if (err.response?.data?.errors?.status) {
        setError("Invalid status selected");
      } else {
        setError("Failed to create group");
      }
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ bgcolor: "#FFFFFF", px: 4, py: 3 }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Create Community
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Title *"
            placeholder="Enter community name"
            fullWidth
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            sx={fieldStyle}
          />
          <TextField
            label="Description *"
            placeholder="Describe what your community is about"
            fullWidth
            multiline
            value={formData.des}
            onChange={(e) => setFormData({ ...formData, des: e.target.value })}
            sx={fieldStyle}
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FormControl fullWidth sx={fieldStyle}>
              <Select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                displayEmpty
                fullWidth
                input={<OutlinedInput />}
              >
                <MenuItem value="" disabled>
                  Status *
                </MenuItem>
                {statusOptions.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={fieldStyle}>
              <Select
                value={formData.availbility}
                onChange={(e) =>
                  setFormData({ ...formData, availbility: e.target.value })
                }
                displayEmpty
                fullWidth
                input={<OutlinedInput />}
              >
                <MenuItem value="" disabled>
                  Availability *
                </MenuItem>
                {communityTypes.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={fieldStyle}>
  <Select
    multiple
    value={formData.categories}
    onChange={(e) =>
      setFormData({ ...formData, categories: e.target.value })
    }
    displayEmpty
    input={<OutlinedInput />}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <span style={{ color: "#000" }}>Category *</span>;
      }

      return selected
        .map(
          (id) => categoriesAPI .find((c) => c.id === id)?.name
        )
        .join(", ");
    }}
  >
    {categoriesAPI .map((cat) => (
      <MenuItem key={cat.id} value={cat.id}>
        {cat.name}
      </MenuItem>
    ))}
  </Select>
</FormControl>
          </Box>

          <Box>
            <Typography fontSize={14} mb={1}>
              Community Image
            </Typography>

            <Box
              component="label"
              sx={{
                width: "100%",
                height: "250px",
                border: "2px dashed #E5E5E5",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#fff",
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  borderColor: "#C9B27C",
                },
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    // objectFit: "cover",
                  }}
                />
              ) : (
                <Typography color="#999">Click to upload image</Typography>
              )}

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData({ ...formData, image: file });
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography fontSize={14} mb={1}>
              Initial Rating
            </Typography>
            <Rating
              value={formData.rating}
              precision={0.5}
              onChange={(event, newValue) =>
                setFormData({ ...formData, rating: newValue })
              }
            />
          </Box>
        </Box>

        {error && (
          <Typography sx={{ color: "red", fontSize: "15px", mt: 1 }}>
            {error}
          </Typography>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 4, py: 2, bgcolor: "#FFFFFF" }}>
        <Button
          onClick={handleClose}
          sx={{ color: "#000", border: "1px solid #000",textTransform:"none" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ color: "#fff", bgcolor: "#131313",textTransform:"none" }}
          onClick={CreateGroup}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

