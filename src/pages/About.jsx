import React, { useEffect } from "react";
import Patung from "../images/grouping2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Teams from "../components/Team";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <hr className="hr" />
      <div className="about-container">
        <div className="ie" data-aos="fade-right">
          <span></span>
        </div>
        <div className="about-border" data-aos="fade-up">
          <div className="about-title fade-right" data-aos="fade-up">
            <h1 style={{ fontFamily: "Darker Grotesque", fontWeight: 900 }}>
              About{" "}
              <span style={{ fontWeight: 900 }}>
                <span style={{ color: "#4aa9f7", fontFamily: "MuseoModerno" }}>M</span>
                useum
              </span>{" "}
              Exhibition
            </h1>
          </div>
          <div className="about-imagess">
            <img src={Patung} alt="" className="images-patung" />
          </div>

          <div className="about-desc" data-aos="fade-up">
            <p>Museum Exhibition Website hadir untuk para penggiat sejarah indonesia kami menghadirkan display museum terbaik untuk anda.</p>
            <div className="button-readmore">Selengkapnya</div>
          </div>
        </div>
      </div>
      {/* // ini adalah bagian about// */}
      <hr className="hr" />
      <div className="explore">
        <div className="ie-2" data-aos="fade-right">
          <span></span>
        </div>
        <div className="container-flex" data-aos="fade-right">
          <div className="title-container">
            {" "}
            <h1>
              Cerita Kita <span style={{ color: "#4aa9f7" }}>Indonesia</span>
            </h1>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <Teams />
      <Footer />
    </div>
  );
}

export default About;
