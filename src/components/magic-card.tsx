import { Box, Typography } from "@mui/material";

type CardProps = {
  name: string;
  imageUrl: string;
};

const MagicCard = (data: CardProps) => {
  const { name, imageUrl } = data;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#ACBFA4",
        padding: 1,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#FF7F11",
          fontFamily: "Space Grotesk",
          fontWeight: "600",
        }}
      >
        {name}
      </Typography>
      <img src={imageUrl} height={"20%"} width={"20%"} />
    </Box>
  );
};

export default MagicCard;
