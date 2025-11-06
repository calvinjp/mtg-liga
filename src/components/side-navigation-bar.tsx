import { Box, Button, Container, Paper, Typography } from "@mui/material";

const navigationTabs = ["About Me", "Contacts", "Demos"];
function SideNavigationBar() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {navigationTabs.map((tab) => (
          <Button key={tab} variant="contained">
            {tab}
          </Button>
        ))}
      </Box>
      ;
    </Container>
  );
}

export default SideNavigationBar;
