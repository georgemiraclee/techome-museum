import React, { useEffect } from "react";

import Patung2 from "../images/gallery/proklamasi/patung.png";
import Patung3 from "../images/gallery/proklamasi/patung2.png";

import "../css/storry.css";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryProklamasi({ color }) {
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
        <h1>Cerita Sejarah Proklamasi</h1>
      </div>
      <section className="materi" style={{}}>
        <div className="contents">
          {/* <img className="plastic" src={Plastic} alt="" /> */}
          <div className="satu">
            <img src={Patung3} alt="" />
          </div>
          <div
            className="text"
            style={{ position: "relative" }}
            data-aos="fade-up"
          >
            <h1>Sejarah Singkat</h1>
            <p>
              Sejarah Proklamasi Kemerdekaan Republik Indonesia bisa dikatakan
              cukup panjang. Namun, pada intinya sejarah Proklamasi Kemerdekaan
              Republik Indonesia terbagi menjadi tiga bagian penting. Bagian
              pertama, menjelaskan pertemuan di Dalat. Bagian kedua, menjelaskan
              pertemuan Soekarno/Hatta dengan Jenderal Mayor Nishimura dan
              Laksamana Muda Maeda. Dan bagian ketiga, Peristiwa Rengasdengklok
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung2} style={{ position: "relative" }} alt="" />
          </div>
          <div className="text" data-aos="fade-up">
            <h1>Latar Belakang</h1>
            <p>
              Pada saat itu, sebelum Soekarno membacakan teks Proklamasi pada
              tanggal 17 Agustus 1945, banyak sekali peristiwa yang terjadi yang
              melatarbelakangi terjadinya pembacaan Proklamasi Kemerdekaan
              Republik Indonesia, salah satu peristiwa tersebut adalah
              dijatuhkannya bom di kota Hiroshima di tanggal 6 Agustus 1945 dan
              tanggal 9 Agustus 1945 di kota Nagasaki.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryProklamasi;
