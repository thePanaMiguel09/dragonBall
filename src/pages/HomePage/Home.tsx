import "./Home.css";

import Header from "../../Components/Header/Header";
import logo from "/logo_dragonballapi.webp";
import CustomCard from "../../Components/CustomCard/CustomCard";

function Home() {
  return (
    <div className="homeContainer">
      <header>
      <Header />
      </header>
      
      <main className="logoContainer">
        <img src={logo} alt="logoDragonBall" className="logoImage" />
        <h1 className="text-logo">The Dragon Ball API</h1>
      </main>
      <div className="main">
        <CustomCard
          afilliation="Z Fighter"
          baseKi="1000"
          image="https://dragonball-api.com/characters/goku_normal.webp"
          name="Goku"
          race="GOKU"
          totalKi="1000000"
        />
        <CustomCard
          afilliation="Z Fighter"
          baseKi="1000"
          image="https://dragonball-api.com/characters/goku_normal.webp"
          name="Goku"
          race="GOKU"
          totalKi="1000000"
        />
        <CustomCard
          afilliation="Z Fighter"
          baseKi="1000"
          image="https://dragonball-api.com/characters/goku_normal.webp"
          name="Goku"
          race="GOKU"
          totalKi="1000000"
        />
        <CustomCard
          afilliation="Z Fighter"
          baseKi="1000"
          image="https://dragonball-api.com/characters/goku_normal.webp"
          name="Goku"
          race="GOKU"
          totalKi="1000000"
        />
        <CustomCard
          afilliation="Z Fighter"
          baseKi="1000"
          image="https://dragonball-api.com/characters/goku_normal.webp"
          name="Goku"
          race="GOKU"
          totalKi="1000000"
        />
      </div>
    </div>
  );
}

export default Home;
