import { Box } from "@mui/material";
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
        height: "100vh",
        width: "100vw",
        bgcolor: "#21222D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: 2,
          alignItems: "center",
        }}
      >
        <TopNavigationBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#171821",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            padding: 10,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* PICTURE */}
          {/* <Box //pic is a bit weird on smaller resolutions
            component="img"
            src="src/assets/id-pic.jpg"
            alt="Profile picture"
            sx={{
              width: 250,
              height: 250,
              borderRadius: 4,
              objectFit: "cover",
              // marginRight: 2,
              padding: 2,
            }}
          /> */}

          {/* GENERAL INFO */}
          <InfoCard
            title="Calvin John B. Payumo"
            subtitle="Full Stack Software Engineer"
            description={GENERAL_INFO_DESC}
          ></InfoCard>
          {/* SKILLS */}
          <InfoCard title="Skills" description={SKILLS_DESC}></InfoCard>
          {/* WORK EXPERIENCE */}
          <InfoCard
            title="Work Experience"
            description={WORK_EXPERIENCE_DESC}
          ></InfoCard>
          <InfoCard
            title="Personal Projects"
            description={PERSONAL_PROJECTS_DESC}
          ></InfoCard>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
