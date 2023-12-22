import React, { useEffect } from "react";
import Image from "../images/image-main.png";
import "../css/MainSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
function MainSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-section-container">
      <div className="background-circle-main">
        <span></span>
      </div>
      <div className="main-container-section">
        <div className="right-section">
          <div
            className="main-image-content"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img src={Image} alt="" style={{ position: "relative" }} />
          </div>
        </div>
        <div className="left-section">
          <div
            className="virtual-text"
            style={{ position: "relative" }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            VIRTUAL MUSEUM
          </div>
          <div className="title-main-section" style={{ position: "relative" }}>
            <h1 data-aos="fade-left" data-aos-duration="1000">
              Modern &
            </h1>
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Indoensian
            </h1>
            <h1 data-aos="fade-left" data-aos-duration="1000">
              & Museum
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
