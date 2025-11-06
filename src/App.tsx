import { Box, Typography } from "@mui/material";
import "./App.css";
import SideNavigationBar from "./components/side-navigation-bar";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#21222D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "90%",
          width: "90%",
          bgcolor: "#171821",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "20%",
            minWidth: 240,
            boxShadow: 2,
            paddingTop: 10,
          }}
        >
          <SideNavigationBar />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            width: "80%",
            padding: 10,
            borderLeft: 2,
            borderColor: "primary.main",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box //pic is a bit weird on smaller resolutions
              component="img"
              src="src/assets/id-pic.jpg"
              alt="Profile picture"
              sx={{
                width: 250,
                height: 250,
                borderRadius: 4,
                objectFit: "cover",
                marginRight: 2,
              }}
            />
            <Box
              sx={{
                backgroundColor: "#21222D",
                borderRadius: 4,
                padding: 2,
                width: "80%",
              }}
            >
              <Typography variant="h1" sx={{ color: "primary.main" }}>
                Calvin John B. Payumo
              </Typography>
              <Typography variant="h2" sx={{ color: "secondary.main" }}>
                Full Stack Software Engineer
              </Typography>
              <Typography variant="h3" sx={{ color: "primary.main" }}>
                With multiple years of experience as a web developer, I am eager
                to explore work opportunities that will help me grow and provide
                value to clients.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#21222D",
              borderRadius: 4,
              padding: 2,
            }}
          >
            <Typography variant="h1" sx={{ color: "primary.main" }}>
              Skills
            </Typography>
            <Typography variant="h3" sx={{ color: "primary.main" }}>
              Programming Languages: Javascript/Typescript, Java Frameworks: AWS
              CDK Frontend: ReactJS, AngularJS Backend: AWS, Google Firebase AWS
              Services: DynamoDB, RDS, Lambda, Cloudwatch, Code Pipeline,
              Systems Manager, API Gateway, S3, Cloudfront Firebase Services:
              Firestore, Cloud Functions
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#21222D",
                borderRadius: 4,
                padding: 2,
                width: "50%",
              }}
            >
              <Typography variant="h1" sx={{ color: "primary.main" }}>
                Work Experience
              </Typography>
              <Typography variant="h3" sx={{ color: "primary.main" }}>
                ● Created and edited frontend components for web application
                using ReactJS and the Material Design MUI Component Library ●
                Used the React Testing Library to create unit tests ● Created
                and edited API endpoints through AWS Lambda and CDK. Endpoints
                were responsible for tasks which include retrieving and updating
                data from DynamoDB and uploading files to S3 buckets ●
                Experience reading and updating Swagger API Documentation and
                testing endpoints through Postman ● Created and updated JIRA
                tickets for Sprints (Agile) ● Worked on UI redesign for web
                application dashboard, navigation sidepanel, etc. using
                AngularJS ● Used Jest in creating unit tests ● Edited API
                endpoints through Firebase Functions ● Created API endpoints
                responsible for sending in-app and email notifications to users
                ● Created endpoints for updating and retrieving data from
                Firestore
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#21222D",
                borderRadius: 4,
                padding: 2,
                width: "50%",
              }}
            >
              <Typography variant="h1" sx={{ color: "primary.main" }}>
                Personal Projects
              </Typography>
              <Typography variant="h3" sx={{ color: "primary.main" }}>
                This Website :3 MTG Leaderboards
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
