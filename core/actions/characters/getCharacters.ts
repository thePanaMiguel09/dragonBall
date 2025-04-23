import { apiDragonBall } from "../../api/apiDragonBall";
import { CharacterResponse } from "../../../infrastructure/interface/CharactersResponse";

export const getCharacters = async (page: number, limit?: number) => {
  try {
    const { data } = await apiDragonBall.get<CharacterResponse>("/characters", {
      params: {
        page: page,
        limit: limit,
      },
    });
    return data;
  } catch (error) {
    console.log("No se pudo obterner los personajes");
    throw error;
  }
};
