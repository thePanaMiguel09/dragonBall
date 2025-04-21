import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
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
    <Card
      sx={{ width: "280px", position: "relative", overflow: "visible" }}
      className="card"
    >
      <Box
        sx={{
          width: "100%",
          height: "350px",
          backgroundImage: "url('/cardBackground.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
          overflow: "hidden",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: "100%",
          maxHeight: "350px",
          objectFit: "contain",
          transform: "scale(1.1)",
          transition: "transform 0.6s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          "&:hover": {
            transform: "scale(1.25)",
            transition: "transform 0.6s",
          },
        }}
      />
      <CardContent
        sx={{ position: "relative", zIndex: 1,}}
        className="cardContent"
      >
        <div className="nameCharacter">{name}</div>
        <div className="descriptionText">{race}</div>
        <div className="descriptionTextTitle">Base KI:</div>
        <div className="descriptionText">{baseKi}</div>
        <div className="descriptionTextTitle">Total KI:</div>
        <div className="descriptionText">{totalKi}</div>
        <div className="descriptionTextTitle">Afilliation:</div>
        <div className="descriptionText">{afilliation}</div>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
