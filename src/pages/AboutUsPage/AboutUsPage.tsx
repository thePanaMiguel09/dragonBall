

import Image1 from "../../../public/frank.png";
import Image2 from "../../../public/miguel.png";
import PersonalCard from "../../Components/PersonalCard/PersonalCard";

import "./AboutUsPage.css";


function AboutUsPage() {
  return (
    <div className="aboutContainer">
        <div className="text">
            <h1>This web site was created by</h1>
        </div>
      <PersonalCard
        img={Image2}
        name="Miguel Ángel Chávez Barrera"
        career="Ing. Sistemas"
        semester="5"
        instagram="https://www.instagram.com/miguel_achb/"
        git="https://github.com/MarinBotScript"
      />

      <PersonalCard
        img={Image1}
        name="Frank Danilo Marin"
        career="Ing. Sistemas"
        semester="5"
        instagram="https://www.instagram.com/fr4nk_marin/"
        git="https://github.com/MarinBotScript"
      />
    </div>
  );
}

export default AboutUsPage;
