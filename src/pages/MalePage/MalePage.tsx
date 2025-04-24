import InfiniteScroll from "react-infinite-scroll-component";
import CustomCard from "../../Components/CustomCard/CustomCard";
import { useGenderCharacter } from "../../hooks/UseGenderCharacters";
import CircularProgress from '@mui/material/CircularProgress';

import "./MalePage.css";

function MalePage() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching } =
    useGenderCharacter("male");


  return (
    <div className="containerPage">
      {isLoading || isFetching ?<CircularProgress />:<InfiniteScroll
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
      />}
    </div>
  );
}

export default MalePage;
