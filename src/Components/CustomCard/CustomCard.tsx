import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

interface Props {
  image: string;
  name: string;
  race: string;
  baseKi: string;
  totalKi: string;
  afilliation: string;
}

function CustomCard({
  image,
  name,
  race,
  baseKi,
  totalKi,
  afilliation,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img"
      height={"auto"}
      image={image} sx={{
        backgroundImage: "url('/cardBackground.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}/>

      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {name}
        </Typography>
        <Typography className="descriptionTextColor" variant="caption">
          {race}
        </Typography>
        <Typography className="descriptionTextColorTitle" variant="h5">
          Base kI:
        </Typography>
        <Typography className="descriptionTextColor" variant="caption">
          {baseKi}
        </Typography>
        <Typography className="descriptionTextColorTitle" variant="h5">
          Ttotal KI:
        </Typography>
        <Typography className="descriptionTextColor" variant="caption">
          {totalKi}
        </Typography>
        <Typography className="descriptionTextColorTitle" variant="h5">
          Afilliation:
        </Typography>
        <Typography className="descriptionTextColor" variant="caption">
          {afilliation}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
