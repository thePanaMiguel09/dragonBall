import "./Details.css";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Details() {
  const { id } = useParams();
  const character = useCharacter(id!);

  return (
    <div className="detailsPage">
      {character.isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="warning"/>
        </Box>
      ) : (
        <div className="cardContainer">
          <div className="imageContainer">
            <img
              src={character.data?.image}
              alt=""
              className="characterImage"
            />
          </div>
          <div className="cardContentDetails">
            <div className="headingCard">
              <h2>{character.data?.name}</h2>
              <p>{character.data?.originPlanet.name}</p>
            </div>
            <div className="mainContentCard">
              <div>
                <h2>Race</h2>
                <p>{character.data?.race}</p>
              </div>
              <div>
                <h2>Gender</h2>
                <p>{character.data?.gender}</p>
              </div>
              <div>
                <h2>Status</h2>
                <p>
                  {character.data?.deletedAt !== null
                    ? character.data?.deletedAt
                    : "Alive"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
