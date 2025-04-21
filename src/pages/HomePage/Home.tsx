import Header from "../../Components/Header/Header";
import logo from "/logo_dragonballapi.webp";
import CustomCard from "../../Components/CustomCard/CustomCard";
import { useCharacters } from "../../hooks/useCharacters";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "@mui/material/Button";

import "./Home.css";

function Home() {
  const { characters } = useCharacters();

  return (
    <div className="homeContainer">
      <Header />

      <main className="logoContainer">
        <img src={logo} alt="logoDragonBall" className="logoImage" />
        <h1 className="text-logo">The Dragon Ball API</h1>
        {characters.isLoading ? (
          <Button loading>Default</Button>
        ) : (
          <InfiniteScroll
            className="main"
            dataLength={characters.data?.pages.flat().length || 0}
            hasMore={!!characters.hasNextPage}
            next={characters.fetchNextPage}
            loader={characters.isFetching ? <Button loading></Button> : ""}
            scrollableTarget={false}
            children={characters.data?.pages.map((page) =>
              page.items.map((char) => (
                <CustomCard
                  key={char.id}
                  afilliation={char.affiliation}
                  baseKi={char.ki}
                  image={char.image}
                  name={char.name}
                  race={char.race}
                  totalKi={char.maxKi}
                />
              ))
            )}
          />
        )}
      </main>
    </div>
  );
}

export default Home;
