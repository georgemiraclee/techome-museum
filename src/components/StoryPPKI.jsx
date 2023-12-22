import React, { useEffect } from "react";
import Patung from "../images/patunghatta.png";
import Patung2 from "../images/patung2.png";
import Patung3 from "../images/patung3.png";

import "../css/storry.css";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryPPKI({ color }) {
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
        <h1>Cerita Sejarah PPKI</h1>
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
            data-aos="fade-right"
          >
            <h1>Sidang PPKI Pertama (18 Agustus 1945)</h1>
            <p>
              (29 Mei 1945) Mohammad Yamin memaparkan uraian tentang kelengkapan
              negara yang dibutuhkan oleh Indonesia jika sudah merdeka nantinya.
              Ia memaparkan lima asas dasar negara yaitu Peri Kebangsaan, Peri
              Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, dan Kesejahteraan
              Rakyat , (31 Mei 1945 )Mr. Soepomo memaparkan rumusan yang serupa
              namun dengan nama Dasar Negara Indonesia Merdeka yaitu Persatuan,
              Kekeluargaan, Mufakat dan Demokrasi, Musyawarah, serta Keadilan
              Sosial , (1 Juni 1945) Ir. Soekarno memperkenalkan lima sila yang
              terdiri dari Kebangsaan Indonesia, Internasionalisme dan Peri
              Kemanusiaan, Mufakat atau Demokrasi, Kesejahteraan Sosial, dan
              Ketuhanan Yang Maha Esa. , 4. Membuat rumusan Piagam Jakarta atau
              Jakarta Charter.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung3} style={{ position: "relative" }} alt="" />
          </div>
          <div className="text">
            <h1>Sidang PPKI Kedua (19 Agustus 1945)</h1>
            <p>
              1. Membahas rancangan Undang – Undang Dasar, rancangan bentuk
              negara, wilayah serta kewarganegaraan. 2. Membahas susunan
              pemerintahan, unitarisme dan juga federalisme 3. Membahas tentang
              rancangan ekonomi, keuangan, pendidikan dan pengajaran. 4.
              Mendapatkan hasil laporan perancangan UUD 5. Menentukan rancangan
              Undang – Undang Dasar Negara
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung} alt="" />
          </div>
          <div className="text" data-aos="fade-right">
            <h1>Sidang PPKI Ketiga (20 Agustus 1945) , dan dibubarkannya </h1>
            <p>
              1. Pembentukan Komite Nasional 2. Membentuk Partai Nasional
              Indonesia 3. Membentuk Badan Keamanan Rakyat , dan Pada 29 Agustus
              1945 PPKI dibubarkan bersamaan dengan pelantikan anggota Komite
              Nasional Indonesia Pusat.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryPPKI;
