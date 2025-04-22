import "./Details.css";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';



function Details() {
  const { id } = useParams();

  const character = useCharacter(id!);

  return (
    <div className="detailsContainer">
      <Card
        variant="outlined"
        orientation="vertical"
        className="cardContainer"
        sx={{
          width: "80vw",
          height: "90vh",
          "&:hover": {
            boxShadow: "md"
          },
        }}
      >
        <AspectRatio className="containerImage" ratio="1" sx={{ width: "100%" }}>
          <img
            src= {character.data?.image}
            loading="eager"
            alt=""
            className="image"
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg" id="card-description">
           {character.data?.name}
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            sx={{ mb: 1 }}
          >
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              {character.data?.originPlanet.name}
            </Link>
          </Typography>
          
        </CardContent>
      </Card>
    </div>
  );
}

export default Details;
