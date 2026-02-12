import { AppBar, Box, Typography } from "@mui/material";
import "./App.css";
import TopNavigationBar from "./components/top-navigation-bar";
import InfoCard from "./components/info-card";
import {
  GENERAL_INFO_DESC,
  PERSONAL_PROJECTS_DESC,
  SKILLS_DESC,
  WORK_EXPERIENCE_DESC,
} from "./constants";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: 1,
        bgcolor: "#ACBFA4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 1,
          position: "fixed",
          boxShadow: 5,
        }}
      >
        <TopNavigationBar />
      </Box>
      {/* Seems stupid and unnecessary, fix this */}
      <Box
        sx={{
          display: "flex",
          bgcolor: "#ACBFA4",
          minHeight: "100%",
          width: 1,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            padding: 10,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{ color: "#262626", fontFamily: "Inter" }}
              >
                Hi, I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "#FF7F11",
                  fontFamily: "Space Grotesk",
                  fontWeight: "600",
                }}
              >
                Calvin Payumo
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: "#262626", fontFamily: "Inter" }}
              >
                Full Stack Software Engineer
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 1,
              alignItems: "flex-start",
            }}
          >
            {/* SKILLS */}
            <InfoCard title="Skills" description={SKILLS_DESC} />
            {/* WORK EXPERIENCE */}
            <InfoCard
              title="Work Experience"
              description={WORK_EXPERIENCE_DESC}
            />
            <InfoCard
              title="Personal Projects"
              description={PERSONAL_PROJECTS_DESC}
            />
          </Box>
        </Box>

        <Box //pic is a bit weird on smaller resolutions
          component="img"
          src="src/assets/chris.png"
          alt="Profile picture"
          sx={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            objectFit: "cover",
            // marginRight: 2,
            // padding: 2,
            border: "solid",
            borderWidth: 5,
            borderColor: "#FF7F11",
            margin: 5,
            boxShadow: 5,
            alignItems: "center",
            mt: 25,
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
