import { Box, Button, Container } from "@mui/material";

const navigationTabs = ["About Me", "Contacts", "Demos", "Download Resume"];
function TopNavigationBar() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FF7F11",
        maxWidth: 1,
        minWidth: 1,
        padding: 2,
        justifyContent: "flex-end",
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
          <Button sx={{ fontFamily: "Inter" }} key={tab}>
            {tab}
          </Button>
        ))}
      </Box>
    </Container>
  );
}

export default TopNavigationBar;
