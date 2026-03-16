import { Box, Typography } from "@mui/material";

type InfoCardProps = {
  title: string;
  description: string;
  bullets?: string[];
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
          variant="h3"
          sx={{ color: "primary.main", fontFamily: "Inter" }}
        >
          {infoCardProps.description}
        </Typography>

        {infoCardProps.bullets && (
          <Box
            component="ul"
            sx={{ color: "primary.main", fontFamily: "Inter", mt: 1 }}
          >
            {infoCardProps.bullets.map((item, index) => (
              <li key={index}>
                <Typography variant="body1">{item}</Typography>
              </li>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default InfoCard;
