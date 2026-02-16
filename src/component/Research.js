// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import { Typography } from "@mui/material";
// export default function Research() {
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#1A2027",
//     }),
//   }));
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} wrap="nowrap" sx={{ overflowX: "auto" }}>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//          <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid  size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//         <Grid size={{ xs: 4,md:6, lg: 2 }} sx={{ flexShrink: 0 }}>
//           <Box sx={{padding:"7px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"red",height:{sx:"100px",md:"200px",lg:"300px"}}}>xs=6 md=4</Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

























// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import { useEffect, useRef } from "react";

// export default function Research() {
//   const scrollRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const startScroll = () => {
//       intervalRef.current = setInterval(() => {
//         container.scrollLeft += 1; // سرعة الحركة

//         if (
//           container.scrollLeft + container.clientWidth >=
//           container.scrollWidth
//         ) {
//           container.scrollLeft = 0;
//         }
//       }, 10);
//     };

//     const stopScroll = () => {
//       clearInterval(intervalRef.current);
//     };

//     startScroll();

//     container.addEventListener("mouseenter", stopScroll);
//     container.addEventListener("mouseleave", startScroll);

//     return () => {
//       stopScroll();
//       container.removeEventListener("mouseenter", stopScroll);
//       container.removeEventListener("mouseleave", startScroll);
//     };
//   }, []);

//   return (
//     <Box sx={{ flexGrow: 1,width:"100%" }}>
//       <Grid
//         ref={scrollRef}
//         container
//         spacing={2}
//         wrap="nowrap"
//         sx={{
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           "&::-webkit-scrollbar": { display: "none" }, 
//           width:"100%",
//           maxWidth:"100%"

//         }}
//       >
//         {[...Array(30)].map((_, index) => (
//           <Grid
//             key={index}
//             size={{ xs: 6, md: 6, lg: 2 }}
//             sx={{ flexShrink: 0 }}
//           >
//             <Box
//               sx={{
//                 p: "7px",
//                 borderRadius: "5px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 bgcolor: "red",
//                 height: { xs: "200px", md: "200px", lg: "300px" },
//                 color: "white",
//                 fontWeight: "bold",
//               }}
//             >
//               Card {index + 1}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }












import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";

export default function Research() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        container.scrollLeft += 1;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 10);
    };

    const stopScroll = () => clearInterval(intervalRef.current);

    startScroll();
    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        //overflow: "hidden"
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          flexWrap: "nowrap",
          maxWidth: "100%",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {[...Array(30)].map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              minWidth: 250,
              height: 220,
              mr: 2,
              borderRadius: 2,
              bgcolor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold"
            }}
          >
            Card {index + 1}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
