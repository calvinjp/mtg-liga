import { Box, Button, Container } from "@mui/material";

const navigationTabs = ["About Me", "Contacts", "Demos"];
function TopNavigationBar() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {navigationTabs.map((tab) => (
          <Button key={tab} variant="contained">
            {tab}
          </Button>
        ))}
      </Box>
    </Container>
  );
}

export default TopNavigationBar;
