import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import "./CustomCard.css";

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
    <Card sx={{ height: '83vh', width: '18vw', borderRadius: '10px' }}>
      <CardMedia component="img"
        height={"auto"}
        image={image}
        sx={{
          backgroundImage: "url('/cardBackground.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          height: '60%',
        }} />


      <CardContent className="cardContent">

        {/* <Typography className="nameCharacter" gutterBottom variant="h2" component="div">
          {name}
        </Typography> */}
        <div className="nameCharacter">
          {name}
        </div>

        {/* <Typography className="descriptionText" variant="caption">
          {race}
        </Typography> */}
        <div className="descriptionText">
          {race}
        </div>

        {/* <Typography className="descriptionTextTitle">
          Base ki:
        </Typography> */}
        <div className="descriptionTextTitle">
          Base KI:
        </div>

        {/* <Typography className="descriptionText" variant="caption">
          {baseki}
        </Typography> */}
        <div className="descriptionText">
          {baseKi}
        </div>

        {/* <Typography className="descriptionTextTitle" variant="h5">
          Total Ki:
        </Typography> */}
        <div className="descriptionTextTitle">
          Total KI:
        </div>

        {/* <Typography className="descriptionText" variant="caption">
          {totalki}
        </Typography> */}
        <div className="descriptionText">
          {totalKi}
        </div>

        {/* <Typography className="descriptionTextTitle" variant="h5">
          Afilliation:
        </Typography> */}
        <div className="descriptionTextTitle">
          Afilliation:
        </div>

        {/* <Typography className="descriptionText" variant="caption">
          {afilliation}
        </Typography> */}
        <div className="descriptionText">
          {afilliation}
        </div>

      </CardContent>
    </Card>
  );
}

export default CustomCard;
