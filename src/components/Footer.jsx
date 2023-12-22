import React, { useEffect } from "react";
import { Link } from "react-router-dom";  // Import the Link component
import "../css/footer.css";
import Logo from "../images/logomoiseum.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="footers">
      <footer>
        <div className="row">
          <div className="col col1" data-aos="fade-right">
            <img src={Logo} alt="gambar logo moiseum" />
            <h1>...</h1>
            <p>BELAJAR BERSAMA CULTURE MUSEUM</p>
          </div>
          <div className="col col2" data-aos="fade-right">
            <ul>
              <li>
                <Link to="/">Museum</Link> {/* Update the link */}
              </li>
              <li>
                <Link to="/about">About</Link> {/* Update the link */}
              </li>
              <li>
                <Link to="/teams">Our Teams</Link> {/* Update the link */}
              </li>
            </ul>
            <div className="social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col col3" data-aos="fade-right">
          <h3>HUBUNGI KAMI BILA INGIN BELAJAR LEBIH BANYAK</h3>
            <input type="text" />
            <span>E-MAIL</span>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
