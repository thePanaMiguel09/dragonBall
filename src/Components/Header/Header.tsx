
import "./Header.css";

import image from "/dragonBallIcon.webp";
import heart from "/amor.png"

function Header() {
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
        <a href="https://web.dragonball-api.com/about" className="fontColor">
          About
        </a>
        <button
          type="button"
          className="button button-color button-border button-font-size
          button-font-family"
        >
          <a href="https://web.dragonball-api.com/support" className="suppor-links">
            <span className="button-font-color support">SUPPORT US</span>
            <img src={heart} alt="heart" className="heart"/>
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
