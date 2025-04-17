import "./Home.css";

import Header from "../../Components/Header/Header";
import logo from "/logo_dragonballapi.webp";

function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <main className="logoContainer">
        <img src={logo} alt="logoDragonBall" className="logoImage" />
        <h1 className="text-logo">The Dragon Ball API</h1>
      </main>
    </div>
  );
}

export default Home;
