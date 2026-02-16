import { Box, List ,Button,Typography} from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { NavLink } from "react-router-dom";
const menu = [
  {name:"Home",path: "/app",icon:<HomeOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#F8946C",fontSize:"27px",color:"#fff"}}/>},
  {name:"Books",path: "/app/Books",icon:<SearchOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"Research",path: "/app/Research",icon:<MenuBookOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"community",path: "/app/Community",icon:<PeopleOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"My Library",path: "/app/MyLibrary",icon:<ImportContactsOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"Favorite",path: "/app/Favorite",icon:<FavoriteBorderOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"Download",path: "/app/Download" ,icon:<CloudDownloadOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>}
];
const settings=[
  {name:"setting", path:"/app/Setting",icon:<SettingsOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>},
  {name:"logout", path: "/app/Logout",icon:<LogoutOutlinedIcon style={{padding:"5px",borderRadius:"7px",background:"#EBEEED",fontSize:"27px",color:"#7C7F7E"}}/>}
]

export default function Sidebar() {
  return (
    <Box
      sx={{
        padding:"0.50rem",
        position:"fixed",
        height:"100vh",
        width:180,
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        bgcolor:"red"
      }}
    >
      {/* <h4 style={{margin:0,display:"flex",justifyContent:"start",marginTop:"15px"}}>THE BOOKS</h4> */}
      <Typography sx={{margin:0,color:"#D2D2D0",marginRight:"65px",marginTop:"30px",fontSize:"10px"}}>MENU</Typography>
      <List sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
        {menu.map((item,index) => (
          <NavLink
           key={item.name}
           to={item.path}
           style={{ textDecoration: "none", width: "100%" }}
         >
           {({ isActive }) => (
          
          <Button
            key={index}
            sx={{
              borderRadius: 2,
              display:"flex",
              flexDirection:"row",
              gap:"1rem",
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
            )}
          </NavLink>
         
        ))}
        

        <hr style={{border:"1px solid #AFAFAF",width:"100%"}}></hr>

        {settings.map((item) => (

          <NavLink
           key={item.name}
           to={item.path}
           style={{ textDecoration: "none", width: "100%" }}
         >
          
          <Button
            
            sx={{
              borderRadius: 2,
              display:"flex",
              flexDirection:"row",
              gap:"1rem",
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
          </NavLink>
         
        ))}

      </List>
      
 

    </Box>
  );
}
