import React, { useEffect } from "react";
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
            <p>BELAJAR SEJARAH BERSAMA MUSEUM</p>
          </div>
          <div className="col col2" data-aos="fade-right">
            <ul>
              <li>
                <a href="#">Museum</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Teams</a>
              </li>
            </ul>
            <div className="social">
              <i className="fa-brands fa-facebook-f"></i>

              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col col3" data-aos="fade-right">
            <h3>JADILAH YANG PERTAMA UNTUK MENDENGAR KABAR DARI KAMI</h3>
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
