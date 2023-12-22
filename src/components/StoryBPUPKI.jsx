import React, { useEffect } from "react";
import Patung from "../images/patunghatta.png";
import Patung2 from "../images/patung2.png";
import Patung3 from "../images/patung3.png";

import "../css/storry.css";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryBPUPKI() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ paddingTop: 200 }}>
      <div className="background-circle-story">
        <span></span>
      </div>
      <div
        className="title-bpupki-story"
        style={{ position: "relative" }}
        data-aos="fade-down"
      >
        <h1>Cerita Sejarah BPUPKI</h1>
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
            <h1>Sidang Pertama BPUPKI (29 Mei – 1 Juni 1945)</h1>
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
            <h1>Sidang Kedua BPUPKI (10 Juli – 17 Juli 1945)</h1>
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
            <h1>Kapan BPUPKI Dibubarkan ?</h1>
            <p>
              BPUPKI akhirnya dibubarkan pada tanggal 7 Agustus 1945,dan sebagai
              ganti dari pembubaran BPUPKI, Jepang membentuk Panitai Persiapan
              Kemerdekaan Indonesia atau yang lebih dikenal dengan istilah PPKI
              atau Dokuritsu Junbi Inkai.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryBPUPKI;
