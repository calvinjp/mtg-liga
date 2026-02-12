import { Box, Container, Typography } from "@mui/material";

type InfoCardProps = {
  title: string;
  description: string;
  subtitle?: string;
};
function InfoCard(infoCardProps: InfoCardProps) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#262626",
          borderRadius: 4,
          padding: 2,
          boxShadow: 5,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "primary.main",
            fontFamily: "Space Grotesk",
            fontWeight: 600,
          }}
        >
          {infoCardProps.title}
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "secondary.main", fontFamily: "Inter" }}
        >
          {infoCardProps?.subtitle}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "primary.main", fontFamily: "Inter" }}
        >
          {infoCardProps.description}
        </Typography>
      </Box>
    </>
  );
}

export default InfoCard;
