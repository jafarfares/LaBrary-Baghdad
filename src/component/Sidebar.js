import { Box, Typography, List, ListItemButton ,Button} from "@mui/material";


const menu = [
  "Discover",
  "Category",
  "My Library",
  "Download",
  "Favorite",
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 200,
        bgcolor: "#d1cfcf",
        p: 2,
        //borderRadius: "20px",
        position:"fixed",
        height:"100vh",
        
      }}
    >
      <Box  sx={{backgroundColor:"#f6f4f4",width:"100%",padding:"10px",fontSize:"15px",fontWeight:700,color:"#000",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        Baghdad Labrary
      </Box>

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": { bgcolor: "#f0eee9" },
            }}
          >
            {item}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
