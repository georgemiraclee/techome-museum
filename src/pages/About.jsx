import React, { useEffect } from "react";
import Patung from "../images/grouping2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

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

          <div className="about-desc" data-aos="fade-up"style={{fontSize: 20}}>
            <p>Selamat datang di situs resmi Museum Budaya Indonesia! Kami berkomitmen untuk mempersembahkan warisan budaya yang kaya dan beragam dari Indonesia melalui platform daring ini. Dengan gembira, kami membuka pintu virtual ke khazanah sejarah, seni, dan tradisi yang membanggakan..</p>
          </div>
        </div>
      </div>
      {/* // ini adalah bagian about// */}
      <hr className="hr" />
      <div className="explore">
        <div className="ie-2" data-aos="fade-right">
          <span></span>
        </div>
        <div
          className="about-bpupki-container"
          style={{ position: "relative" }}
        >
          <div className="title-bpupki" data-aos="fade-right">
            <h1>
              Cerita kita{" "}
              <span style={{ fontSize: 90 }}>
                {" "}
                <span className="a">MUSE</span>UM
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
            Kami hadir untuk mengundang Anda dalam perjalanan tak terlupakan melintasi ruang dan waktu, menyelami keindahan seni tradisional, menggali kisah-kisah heroik, dan merasakan kekayaan budaya Indonesia yang mempesona. Melalui koleksi kami, Anda akan menemukan bagaimana nilai-nilai luhur dan keindahan seni telah menjadi bagian integral dari perjalanan sejarah bangsa ini.
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <Footer />
    </div>
  );
}

export default About;
