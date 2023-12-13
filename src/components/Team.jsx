import React, { useEffect } from "react";
import Person from "../images/person2.png";
import "../css/tes.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Teams() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="ourteam-title-container">
        <div className="container-title" data-aos="zoom-in">
          <h1
            style={{
              fontFamily: "Darker Grotesque",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            <span>
              <span style={{ color: "#3595e9", fontFamily: "MuseoModerno" }}>
                M
              </span>
              useum
            </span>{" "}
            Teams
          </h1>
        </div>
      </div>
      <div className="container-testing-2">
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>George Miracle Theophylus</h1>
            <span>Techome - Universitas Diponegoro</span>
          </div>
        </div>
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>Samuel Arya Permana</h1>
            <span>Techome - Universitas Diponegoro</span>
          </div>
        </div>
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>Nikolaus Evan Dewanto</h1>
            <span>Techome - Universitas Diponegoro</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;