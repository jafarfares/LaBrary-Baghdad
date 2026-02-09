import { Box, List ,Button} from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const menu = [
  {name:"Discover",icon:<HomeOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#F8946C",fontSize:"27px",color:"#fff"}}/>},
  {name:"My Library",icon:<ImportContactsOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"Favorite",icon:<FavoriteBorderOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"Download",icon:<CloudDownloadOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>}
];
const settings=[
  {name:"setting",icon:<SettingsOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"logout",icon:<LogoutOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>}
]

export default function Sidebar() {
  return (
    <Box
      sx={{
        
        // bgcolor:"white",
        padding:"2px",
        position:"fixed",
        height:"100vh",
        width:180,
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
        
      }}
    >
      <h4 style={{margin:0,display:"flex",justifyContent:"start",marginTop:"15px"}}>THE BOOKS</h4>
      <h6 style={{margin:0,color:"#D2D2D0",marginRight:"65px",marginTop:"30px"}}>MENU</h6>
      <List sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        {menu.map((item) => (
          
          <Button
            key={item.name}
            sx={{
              borderRadius: 2,
              display:"flex",
              flexDirection:"row",
              gap:"10px",
              width:"100%",
              alignItems:"start",
              justifyContent:"start",
              color:"#AFAFAF",
              "&:hover":{
                  backgroundColor:"#f1f5ff"
              }
              
            }}
          >
            
            {item.icon}
            
            <span style={{ fontSize: "13px" }}>
              {item.name}
            </span>
            
            
          </Button>
         
        ))}

        <hr style={{border:"1px solid #AFAFAF",width:"100%"}}></hr>

        {settings.map((item) => (
          
          <Button
            key={item.name}
            sx={{
              borderRadius: 2,
              display:"flex",
              flexDirection:"row",
              gap:"10px",
              width:"100%",
              alignItems:"start",
              justifyContent:"start",
              color:"#AFAFAF",
            }}
          >
            
            {item.icon}
            
            <span style={{ fontSize: "13px" }}>
              {item.name}
            </span>
            
            
          </Button>
         
        ))}

      </List>
      
 

    </Box>
  );
}




















// import { Box, Typography, List, ListItemButton } from "@mui/material";

// export default function Sidebar() {
//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         bgcolor: "#fff",
//         borderRight: "1px solid #eee",
//         px: 2,
//         py: 3,
//       }}
//     >
//       <Typography fontWeight="bold" mb={3}>
//         THE BOOKS
//       </Typography>

//       <List>
//         {["Discover", "Categories", "My Library", "Download", "Favorite"].map(
//           (item) => (
//             <ListItemButton
//               key={item}
//               sx={{
//                 borderRadius: 2,
//                 mb: 1,
//                 "&:hover": { bgcolor: "#f2f2f2" },
//               }}
//             >
//               {item}
//             </ListItemButton>
//           )
//         )}
//       </List>
//     </Box>
//   );
// }