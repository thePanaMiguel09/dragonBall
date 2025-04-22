import { apiDragonBall } from "../../api/apiDragonBall";
import { SingleCharacter } from "../../../infrastructure/interface/SingleCharacterResponse";

export const getSingleCharacter = async (id: string) => {
  try {
    const { data } = await apiDragonBall.get<SingleCharacter>(
      `/characters/${id}`
    );
    return data;
  } catch (error) {
    console.log("No se pudo obterner el personaje");
    throw error;
  }
};
