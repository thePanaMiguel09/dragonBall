import "./Home.css";

import Header from "../../Components/Header/Header";
import logo from "/logo_dragonballapi.webp";
import CustomCard from "../../Components/CustomCard/CustomCard";
import { useCharacters } from "../../hooks/useCharacters";

function Home() {

  const {characters} = useCharacters();

  return (
    <div className="homeContainer">
      
      <Header />
      
      
      <main className="logoContainer">
        <img src={logo} alt="logoDragonBall" className="logoImage" />
        <h1 className="text-logo">The Dragon Ball API</h1>
      </main>
      <div className="main">
      {
        characters.data?.pages[0].items.map((item)=> 
          <CustomCard afilliation={item.affiliation} baseKi={item.ki} image={item.image} name={item.name}
          race={item.race}
          totalKi={item.maxKi}
          key={item.id}
          />
          
        )
      }
      </div>
    </div>
  );
}

export default Home;
