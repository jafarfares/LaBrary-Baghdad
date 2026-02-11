import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  TextField,
  IconButton,
} from "@mui/material";
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";


export default function ShowGroup() {
  
  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 4 },
        // py: 3,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "3fr 1.3fr" },
        gap: 3,
        // bgcolor:"red"
        // minHeight: "100vh",
      }}
    >
      {/* ================= LEFT CARD ================= */}
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: "#FFFDF9",
          display: "flex",
          flexDirection: "column",
          height:"auto"
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={2}>
          <Avatar
            sx={{
              mx: "auto",
              mb: 1,
              bgcolor: "#ebe7d3",
              
            }}
          >
            <ImportContactsOutlinedIcon/>
          </Avatar>

          <Typography fontSize={22} fontWeight={700} color="#1F2937">
            Contemporary Arabic Literature Club
          </Typography>

          <Typography fontSize={14} color="#6B7280">
            Welcome to our discussion space
          </Typography>

          <Chip
            label="Today, Tuesday, February 10, 2026"
            sx={{
              mt: 2,
              bgcolor: "#EBEEED",
              color: "#000",
              fontSize: 13,
              px: 1.5,
            }}
          />
        </Box>

        {/* Messages */}
        <Box sx={{ maxHeight: 220,overflowY: "auto", pr: 1,display:"flex",flexDirection:"column",gap:0.9 }}>
          

          <Box display="flex" gap={1.5}>
            <Avatar />
            <Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography fontWeight={600}>
                  Dr. Ahmed Mahmoud
                </Typography>
                <Chip
                  label="Moderator"
                  size="small"
                  sx={{
                    bgcolor: "#EBEEED",
                    color: "#000",
                    fontSize: 11,
                  }}
                />
                <Typography fontSize={12} color="#6B7280">
                  10:30 AM
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: "0 1px 2px rgba(0,0,0,.05)",
                }}
              >
                <Typography fontSize={14} color="#374151">
                  Welcome everyone to our discussion of "Cities of Salt".
                  This masterpiece by Abdul Rahman Munif offers a profound
                  critique of modernization in the Arab world.
                </Typography>
              </Box>
            </Box>
          </Box>



          <Box display="flex" gap={1.5}>
            <Avatar />
            <Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography fontWeight={600}>
                  Dr. Ahmed Mahmoud
                </Typography>
                <Chip
                  label="Moderator"
                  size="small"
                  sx={{
                    bgcolor: "#EBEEED",
                    color: "#000",
                    fontSize: 11,
                  }}
                />
                <Typography fontSize={12} color="#6B7280">
                  10:30 AM
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: "0 1px 2px rgba(0,0,0,.05)",
                }}
              >
                <Typography fontSize={14} color="#374151">
                  Welcome everyone to our discussion of "Cities of Salt".
                  This masterpiece by Abdul Rahman Munif offers a profound
                  critique of modernization in the Arab world.
                </Typography>
              </Box>
            </Box>
          </Box>



          <Box display="flex" gap={1.5}>
            <Avatar />
            <Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography fontWeight={600}>
                  Dr. Ahmed Mahmoud
                </Typography>
                <Chip
                  label="Moderator"
                  size="small"
                  sx={{
                    bgcolor: "#EBEEED",
                    color: "#000",
                    fontSize: 11,
                  }}
                />
                <Typography fontSize={12} color="#6B7280">
                  10:30 AM
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: "0 1px 2px rgba(0,0,0,.05)",
                }}
              >
                <Typography fontSize={14} color="#374151">
                  Welcome everyone to our discussion of "Cities of Salt".
                  This masterpiece by Abdul Rahman Munif offers a profound
                  critique of modernization in the Arab world.
                </Typography>
              </Box>
            </Box>
          </Box>




          <Box display="flex" gap={1.5}>
            <Avatar />
            <Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography fontWeight={600}>
                  Dr. Ahmed Mahmoud
                </Typography>
                <Chip
                  label="Moderator"
                  size="small"
                  sx={{
                    bgcolor: "#EBEEED",
                    color: "#000",
                    fontSize: 11,
                  }}
                />
                <Typography fontSize={12} color="#6B7280">
                  10:30 AM
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  bgcolor: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: "0 1px 2px rgba(0,0,0,.05)",
                }}
              >
                <Typography fontSize={14} color="#374151">
                  Welcome everyone to our discussion of "Cities of Salt".
                  This masterpiece by Abdul Rahman Munif offers a profound
                  critique of modernization in the Arab world.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Input */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 1.5,
            alignItems: "center",
            
          }}
        >
          <TextField
            fullWidth
            placeholder="Share your thoughts about the book..."
            sx={{
              bgcolor: "#FFFFFF",
              borderRadius: 2,
              "& fieldset": { borderColor: "#ebe7d3" },
            }}
          />
          <IconButton
            sx={{
              bgcolor: "#ebe7d3",
              color: "#fff",
              width: 48,
              height: 48,
              "&:hover": { bgcolor: "#ece9da" },
            }}
          >
            <SendRoundedIcon />
          </IconButton>
        </Box>
      </Card>

      {/* ================= RIGHT CARD ================= */}
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: "#FFFDF9",
          
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            
          }}
        >
          <Box display="flex" alignItems="center" gap={1} sx={{marginBottom:"12px"}}>
            <Avatar sx={{ bgcolor: "#ebe7d3" }}>
              <PeopleAltRoundedIcon />
            </Avatar>
            <Typography fontSize={18} fontWeight={700}>
              Members
            </Typography>
          </Box>

          {/* <Chip
            label="12 online"
            size="small"
            sx={{
              bgcolor: "#DCFCE7",
              color: "#166534",
            }}
          /> */}
        </Box>

        {[
          "Dr. Ahmed Mahmoud",
          "Sarah Al-Z",
          "Omar Hassan",
          "Fatima Al-A",
        ].map((name, i) => (
          <Box
            key={i}
            display="flex"
            alignItems="center"
            gap={2}
            mb={2}
            sx={{marginTop:"20px"}}
          >
            <Avatar />
            <Box>
              <Typography fontWeight={600}>{name}</Typography>
              <Typography fontSize={13} color="#6B7280">
                Active member
              </Typography>
            </Box>
          </Box>
        ))}
      </Card>
    </Box>
  );
}
