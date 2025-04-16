import { useQuery } from "@tanstack/react-query";
import { getSingleCharacter } from "../../core/actions/characters/getSingleCharacter";

export const useCharacter = (id: number) =>
  useQuery({
    queryKey: ["character", "getSingleCharacter"],
    queryFn: () => getSingleCharacter(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
