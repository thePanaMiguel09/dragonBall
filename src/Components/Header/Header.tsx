import "./Header.css";

import image from "/dragonBallIcon.webp";
import heart from "/amor.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/aboutus");
  };

  return (
    <header className="headerContainer">
      <img src={image} className="imgDragonBall" />
      <div className="linksContainer fontFamily fontSize">
        <a
          href="https://web.dragonball-api.com/documentation"
          className="fontColor"
        >
          Docs
        </a>
        <button
          className="button button-color button-border button-font-size
          button-font-family fontColor"
          onClick={handleNavigate}
        >
          About Us
        </button>
        <button
          type="button"
          className="button button-color button-border button-font-size
          button-font-family"
        >
          <a
            href="https://web.dragonball-api.com/support"
            className="suppor-links"
          >
            <span className="button-font-color support">SUPPORT US</span>
            <img src={heart} alt="heart" className="heart" />
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
