import { Box, Button, Container, Paper, Typography } from "@mui/material";

const navigationTabs = ["About Me", "Contacts", "Demos"];
function SideNavigationBar() {
  return (
    <Container>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      > */}
        {navigationTabs.map((tab) => (
          //   <Paper elevation={3}>
          //     <Typography variant="h3">{tab}</Typography>
          //   </Paper>
          <Button variant="contained">{tab}</Button>
        ))}
        {/* </Typography> */}
      </Box>
      ;
    </Container>
  );
}

export default SideNavigationBar;
