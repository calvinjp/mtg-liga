import { Box, Container, Typography } from "@mui/material";

type InfoCardProps = {
  title: string;
  description: string;
  subtitle?: string;
};
function InfoCard(infoCardProps: InfoCardProps) {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#21222D",
          borderRadius: 4,
          padding: 2,
        }}
      >
        <Typography variant="h1" sx={{ color: "primary.main" }}>
          {infoCardProps.title}
        </Typography>
        <Typography variant="h2" sx={{ color: "secondary.main" }}>
          {infoCardProps?.subtitle}
        </Typography>
        <Typography variant="h3" sx={{ color: "primary.main" }}>
          {infoCardProps.description}
        </Typography>
      </Box>
    </Container>
  );
}

export default InfoCard;
