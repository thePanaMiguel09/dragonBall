import "./FemalePage.css";
import { useGenderCharacter } from "../../hooks/UseGenderCharacters";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";

import CustomCard from "../../Components/CustomCard/CustomCard";

function FemalePage() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching } =
    useGenderCharacter("female");

  if (isLoading) return <div>Cargando Más</div>;

  return (
    <div className="containerPage">
      <InfiniteScroll
        className="scrollContainer"
        dataLength={data?.pages.length!}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={isFetching && <p>Cargando más...</p>}
        children={data?.pages.flatMap((page) =>
          page.items.map((item) => (
            <CustomCard
              key={item.id}
              name={item.name}
              afilliation={item.affiliation}
              baseKi={item.ki}
              id={item.id.toString()}
              image={item.image}
              race={item.race}
              totalKi={item.race}
            />
          ))
        )}
      />
    </div>
  );
}

export default FemalePage;
