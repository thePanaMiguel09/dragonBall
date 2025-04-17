import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../../core/actions/characters/getCharacters";

export const useCharacters = () => {
  const characters = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["characters", "getAllCharacters"],
    queryFn: ({ pageParam }) => {
      return getCharacters(pageParam, 4);
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });

  return {
    characters,
  };
};
