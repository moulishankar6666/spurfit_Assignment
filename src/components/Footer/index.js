import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

import "./index.css";

const Footer = () => (
  <>
    <hr className="horizontal-line" />
    <footer className="footer-section-container">
      <div className="footer-logo-name-container">
        <img
          className="app-logo"
          src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708144025/434x0w_an99ot.webp"
          alt="app logo"
        />
        <p>ahead</p>
      </div>
      <div className="ahead-app-contact-info-container">
        <div className="location-container">
          <IoLocationSharp size={25} color="#fff" className="location" />
          <p>AugustsraBe 26, 10117 Berlin</p>
        </div>
        <div className="email-container">
          <IoIosMail size={25} color="#fff" className="email" />
          <p>hi@ahead-app.com</p>
        </div>
      </div>
      <div className="app-donwload-container">
        <img
          className="apple-logo-img"
          alt="apple logo"
          src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708137225/1685901641apple-icon-png_j81cm0.webp"
        />
        <div>
          <p>Donwload on the</p>
          <p>APP STORE</p>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
