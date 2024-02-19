import "./index.css";

import Popup from "reactjs-popup";

import { GiCrossMark } from "react-icons/gi";

import { TiThMenu } from "react-icons/ti";

const Header = () => (
  <header className="app-header">
    <img
      className="app-logo"
      src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708144025/434x0w_an99ot.webp"
      alt="app logo"
    />
    <nav className="app-nav-links-container">
      <ul className="app-nav-links">
        <li>
          <a href="#section-emotions" className="nav-link">
            Emotions
          </a>
        </li>
        <li>
          <a href="#section-Manifesto" className="nav-link">
            Manifesto
          </a>
        </li>
        <li>
          <a href="#section-self-improvement" className="nav-link">
            self-awareness test
          </a>
        </li>
        <li>
          <a href="#section-work-with-us" className="nav-link">
            Work With Us
          </a>
        </li>
      </ul>
    </nav>
    <button className="donwload-btn">Donwload app</button>
    <Popup
      modal
      trigger={
        <button className="hamburger-btn">
          <TiThMenu size={30} />
        </button>
      }
    >
      {(close) => (
        <nav className="app-nav-links-container-mobile">
          <button className="mobile-popup-close-btn">
            <GiCrossMark onClick={() => close()} color="#000" size={30} />
          </button>
          <ul className="app-nav-links-mobile">
            <li>
              <a href="#section-emotions" className="nav-link">
                Emotions
              </a>
            </li>
            <li>
              <a href="#section-Manifesto" className="nav-link">
                Manifesto
              </a>
            </li>
            <li>
              <a href="#section-self-improvement" className="nav-link">
                self-awareness test
              </a>
            </li>
            <li>
              <a href="#section-work-with-us" className="nav-link">
                Work With Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </Popup>
  </header>
);

export default Header;
