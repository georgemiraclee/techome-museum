import React, { useEffect } from "react";

import Patung2 from "../images/gallery/pengeboman/patung1.png";
import Patung3 from "../images/patung3.png";

import "../css/storry.css";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryJapan({ color }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ paddingTop: 200 }}>
      <div
        className="background-circle-story"
        style={{ backgroundColor: color }}
      >
        <span></span>
      </div>
      <div
        className="title-bpupki-story"
        style={{ position: "relative" }}
        data-aos="fade-down"
      >
        <h1>Cerita Sejarah Pengeboman</h1>
      </div>
      <section className="materi" style={{}}>
        <div className="contents">
          {/* <img className="plastic" src={Plastic} alt="" /> */}
          <div className="satu">
            <img src={Patung2} alt="" />
          </div>
          <div
            className="text"
            style={{ position: "relative" }}
            data-aos="fade-up"
          >
            <h1>Sejarah Singkat Pengeboman</h1>
            <p>
              Kota Hiroshima dijatuhi bom atom pada tanggal 6 Agustus 1945 oleh
              Amerika Serikat. Sebanyak 40.000 orang dan wilayah 47 km persegi
              hancur akibat bom atom. Bom ini berlanjut pada tanggal 9 Agustus
              1945 dengan jatuhnya bom Nagasaki yang menyebabkan menyerahnya
              Jepang
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung3} style={{ position: "relative" }} alt="" />
          </div>
          <div className="text" data-aos="fade-up">
            <h1>Akibat Pengeboman Hiroshima dan Nagasaki</h1>
            <p>
              Bom atom tersebut mengakibatkan sekitar 74 ribu warga sipil
              meninggal dunia serta menghancurkan berbagai bangunan dan
              infrastruktur kota. Tidak selesai di hari itu saja, ledakan bom di
              Hiroshima dan Nagasaki juga menyisakan berbagai penderitaan bagi
              hibakusha untuk jangka waktu yang lama.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryJapan;
