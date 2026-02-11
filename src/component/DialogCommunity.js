import * as React from "react";
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

const categoryOptions = [
  "Literature",
  "Technology",
  "Science",
  "Art & Design",
  "Music",
  "History",
];

const communityTypes = ["Public", "Private"];

export default function CommunityDialog({ open, setOpen }) {
  const [category, setCategory] = React.useState("");
  const [type, setType] = React.useState("");
  
  const [rating, setRating] = React.useState(0);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent
        sx={{
          bgcolor: "#FAFAFA",
          px: 4,
          py: 3,
        }}
      >
        {/* Header */}
        <Typography variant="h5" fontWeight={700} mb={3}>
          Create Community
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {/* Community Name */}
          <TextField
            label="title *"
            placeholder="Enter community name"
            fullWidth
          />

          {/* Description */}
          <TextField
            label="Description *"
            placeholder="Describe what your community is about"
            fullWidth
            multiline
          />

          {/* Category */}
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            fullWidth
            input={<OutlinedInput />}
          >
            <MenuItem value="" disabled>
              status*
            </MenuItem>
            {categoryOptions.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>

          {/* Community Type */}
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            displayEmpty
            fullWidth
            input={<OutlinedInput />}
          >
            <MenuItem value="" disabled>
              availbility*
            </MenuItem>
            {communityTypes.map((t) => (
              <MenuItem key={t} value={t}>
                {t}
              </MenuItem>
            ))}
          </Select>

          {/* Current Book */}
          <TextField
            label="categories"
            placeholder="What book is your community currently reading?"
            fullWidth
          />
          
            <Typography fontSize={14} >
              Community Image
            </Typography>
            <Button variant="outlined" component="label" size="small">
              Upload Image
              <input hidden type="file" accept="image/*" />
            </Button>
          {/* </Box> */}

          {/* Rating */}
          <Box>
            <Typography fontSize={14} mb={1}>
              Initial Rating
            </Typography>
            <Rating
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </Box>
        </Box>
      </DialogContent>

      {/* Footer */}
      <DialogActions sx={{ px: 4, py: 2, bgcolor: "#FAFAFA" }}>
        <Button
          onClick={handleClose}
          sx={{ color: "#000", border: "1px solid #000" }}
        >
          Cancel
        </Button>
        <Button variant="contained" sx={{ color: "#fff", bgcolor: "#131313" }}>
          Create Community
        </Button>
      </DialogActions>
    </Dialog>
  );
}
