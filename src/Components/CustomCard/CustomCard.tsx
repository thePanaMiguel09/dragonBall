import Card from "@mui/material/Card";
import "./CustomCard.css";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  race: string;
  baseKi: string;
  totalKi: string;
  afilliation: string;
  id: string;
}

function CustomCard({
  image,
  name,
  race,
  baseKi,
  totalKi,
  afilliation,
  id,
}: Props) {
  const navigate = useNavigate();
  const toDetails = (id: string) => {
    navigate("/details/" + id);
  };

  return (
    <Card
      sx={{ width: "280px", position: "relative", overflow: "visible" }}
      className="card"
    >
      <CardActionArea onClick={() => toDetails(id)}>
        <div className="imageBackground"></div>
        <img src={image} alt={name} className="imageCharacter" />
        <div className="cardContentBackroung">
        </div>
        <div className="cardContent">
            <div className="nameCharacter">{name}</div>
            <div className="descriptionText">{race}</div>
            <div className="descriptionTextTitle">Base KI:</div>
            <div className="descriptionText">{baseKi}</div>
            <div className="descriptionTextTitle">Total KI:</div>
            <div className="descriptionText">{totalKi}</div>
            <div className="descriptionTextTitle">Afilliation:</div>
            <div className="descriptionText">{afilliation}</div>
          </div>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
