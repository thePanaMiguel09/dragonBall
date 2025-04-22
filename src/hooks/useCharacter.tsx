import { useQuery } from "@tanstack/react-query";
import { getSingleCharacter } from "../../core/actions/characters/getSingleCharacter";

export const useCharacter = (id: string) =>
  useQuery({
    queryKey: ["character", id],
    queryFn: () => getSingleCharacter(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
