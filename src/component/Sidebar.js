import { Box, Typography, List, ListItemButton ,Button} from "@mui/material";
import MosqueOutlinedIcon from "@mui/icons-material/MosqueOutlined";

import ApartmentIcon from "@mui/icons-material/Apartment";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const menu = [
  {name:"My Library",icon:<AutoStoriesOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>},
  {name:"Download",icon:<UploadFileOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>},
  {name:"Audio Books",icon:<PersonAddAltOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>},
  {name:"Favorite",icon:<FavoriteBorderOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>},
  {name:"Want to Read",icon:<AutoStoriesOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>}
];
const settings=[
  {name:"setting",icon:<SettingsOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>},
  {name:"logout",icon:<LogoutOutlinedIcon style={{padding:"2px",borderRadius:"4px"}}/>}
]

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 200,
        bgcolor:"white",
        padding:"2px",
        // p:2,
        position:"fixed",
        height:"100vh",
        
      }}
    >
      <Box  sx={{backgroundColor:"#f6f4f4",width:"80%",padding:"5px",fontSize:"15px",fontWeight:700,color:"#000",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:"5px",marginBottom:"10px",marginLeft:"18px",marginTop:"15px"}}>
        <MosqueOutlinedIcon/>
        Baghdad Labrary
      </Box>

      <List sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        {menu.map((item) => (
          
          <Button
            key={item.name}
            sx={{
              borderRadius: 2,
              display:"flex",
              flexDirection:"row",
              gap:"10px",
              width:"80%",
              alignItems:"start",
              justifyContent:"start",
              marginTop:"15px",
              fonstSize:"11px",
              color:"#7c7878",
              // backgroundColor:"#f1f5ff"
              "&:hover":{
                  backgroundColor:"#f1f5ff"
              }
              
            }}
          >
            
            {item.icon}
            
            {item.name}
            
            
          </Button>
         
        ))}

        <hr style={{border:"1px solid #eef1f6",width:"100%"}}></hr>

        {settings.map((item) => (
          
          <Button
            key={item.name}
            sx={{
              borderRadius: 2,
              display:"flex",
              flexDirection:"row",
              gap:"10px",
              width:"80%",
              alignItems:"start",
              justifyContent:"start",
              marginTop:"10px",
              fonstSize:"11px",
              color:"#7c7878",
              
              
            }}
          >
            
            {item.icon}
            
            {item.name}
            
            
          </Button>
         
        ))}

      </List>
      
 

    </Box>
  );
}
