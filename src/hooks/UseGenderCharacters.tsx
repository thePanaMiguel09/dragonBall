import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "../../core/actions/characters/getCharacters";

export const useGenderCharacter = (gender: string) => {
    return useInfiniteQuery({
        queryKey: ["charactersGender", gender],
        initialPageParam: 1,
        queryFn: async ({ pageParam }) => {
          const response = await getCharacters(pageParam); 
          const filteredItems = response.items.filter(
            (char) => char.gender.toLowerCase() === gender.toLowerCase()
          );
          return {
            items: filteredItems,
            nextPage: response.meta.currentPage + 1,
            hasMore: response.meta.currentPage < response.meta.totalPages,
          };
        },
        getNextPageParam: (lastPage) => {
          return lastPage.hasMore ? lastPage.nextPage : undefined;
        },
        staleTime: 1000 * 60 * 60 * 5
      });
};
