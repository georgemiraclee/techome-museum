import React, { useEffect } from "react";

import Patung2 from "../images/gallery/rengasdengklok/patung1.png";
import Patung3 from "../images/gallery/rengasdengklok/patung2.png";

import "../css/storry.css";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryRengas({ color }) {
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
        <h1 style={{ fontSize: 50 }}>Cerita Sejarah Rengasdengklok</h1>
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
            <h1>Awal mula terjadinya</h1>
            <p>
              Menyerahnya Jepang kepada Sekutu menimbulkan tekanan Golongan Muda
              agar Golongan Tua segera mempercepat proklamasi kemerdekaan. Namun
              kedua tokoh Golongan Tua yaitu Ir. Soekarno dan Mohammad Hatta
              memilih untuk menunggu keputusan Jepang dan hasil sidang PPKI.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung3} style={{ position: "relative" }} alt="" />
          </div>
          <div className="text" data-aos="fade-up">
            <h1>Proses Penculikan</h1>
            <p>
              Hingga pada tanggal 16 Agustus 1945 dini hari, Golongan Muda yaitu
              Soekarni, Wikana, Aidit, dan Chaerul Saleh dari perkumpulan
              “Menteng 31” menculik dan membawa Soekarno serta Hatta ke
              Rengasdengklok Tujuan penculikan ini adalah agar para Golongan Tua
              mau untuk segera melakukan proklamasi kemerdekana saat itu juga.
              Perundingan yang alot berujung pada kesepakatan Golongan Muda dan
              Golongan Tua untuk melaksanakan proklamasi pada tanggal 17 Agustus
              1945.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryRengas;
