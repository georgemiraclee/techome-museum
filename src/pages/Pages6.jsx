import React, { useEffect } from "react";
import Orang from "../images/gallery/proklamasi/hatta.png";
import Orang2 from "../images/gallery/proklamasi/irsoekarno.png";
import Orang3 from "../images/gallery/proklamasi/ahmadsoebarjo.png";

import About1 from "../images/gallery/proklamasi/about1.jpeg";
import About2 from "../images/gallery/proklamasi/about2.jpeg";
import About3 from "../images/gallery/proklamasi/about3.jpeg";
import About4 from "../images/gallery/proklamasi/about4.jpeg";
import Tugas1 from "../images/gallery/proklamasi/galeri1.png";
import Tugas2 from "../images/gallery/proklamasi/galeri2.png";

import Tugas4 from "../images/gallery/proklamasi/galeri3.png";
import "../css/ppki.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/Footer";

import StoryProklamasi from "../components/StoryProklamasi";
function Pages6() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container-about-bpupki">
        <div
          className="background-circle"
          style={{ backgroundColor: "#a84d31" }}
        >
          <span></span>
        </div>
        <div className="image-about-container" data-aos="fade-up">
          <div className="image1" data-aos="fade-left">
            <img src={About1} alt="" />
          </div>
          <div className="image2" data-aos="fade-up">
            <img src={About2} alt="" />
          </div>
          <div className="image3" data-aos="fade-up">
            <img src={About3} alt="" />
          </div>
          <div className="image4" data-aos="fade-right">
            <img src={About4} alt="" />
          </div>
        </div>
        <div
          className="about-bpupki-container"
          style={{ position: "relative" }}
        >
          <div className="title-bpupki" data-aos="fade-right">
            <h1>
              Sejarah
              <span style={{ fontSize: 60 }}> Peristiwa Proklamasi</span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              Proklamasi Kemerdekaan Indonesia dilaksanakan pada hari Jumat, 17
              Agustus 1945 tahun Masehi, atau tanggal 17 Agustus 2605 menurut
              tahun Jepang, yang dibacakan oleh Soekarno dengan didampingi oleh
              Drs. Mohammad Hatta bertempat di Jalan Pegangsaan Timur 56,
              Jakarta Pusat.
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="container-tokoh-bpupki">
        <div
          className="title-container"
          style={{ position: "relative" }}
          data-aos="fade-right"
        >
          <h1>
            Tokoh Peristiwa{" "}
            <span style={{ fontSize: 50 }}>
              <span>Proklamasi</span>
            </span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={200} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Ir Soekarno</span>
              <h4>Pembaca Teks Proklamasi</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Moh Hatta</span>
              <h4>Perumus Naskah Proklamasi</h4>
            </div>
          </div>

          <div className="main-card">
            {" "}
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang3} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Ahmad Soebarjo</span>
              <h4>Sebagai Penengah Golongan Muda</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <div className="container-tugas-bpupki">
        <div
          className="background-circle-2"
          style={{ backgroundColor: "#a84d31" }}
        >
          <span></span>
        </div>
        <div className="tugas-bpupki-main">
          <div className="title-tugas" data-aos="fade-right">
            <h1>
              Gallery Peristiwa <span className="wrap">Pr</span>oklamasi
            </h1>
          </div>
          <div className="list-tugas" data-aos="fade-up">
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas1} alt="" />
              </div>

              <h3>Pembacaan Naskah Proklamasi</h3>
              <div className="deskripsi-tugas">
                <p>
                  Pembacaan teks proklamasi kemerdekaan Indonesia oleh Soekarno
                  pada tanggal 17 Agustus 1945 di Jakarta merupakan momen
                  penting dalam sejarah Indonesia. Pada saat itu, suasana
                  politik di Indonesia sedang tidak stabil dan Belanda masih
                  berupaya untuk kembali menguasai Indonesia setelah Jepang
                  menyerah pada akhir Perang Dunia II. Dalam suasana yang sangat
                  tegang dan tidak menentu, Soekarno membacakan teks proklamasi
                  kemerdekaan Indonesia yang berisi pengumuman bahwa Indonesia
                  telah merdeka.
                </p>
              </div>
            </div>
          </div>
          <div className="list-tugas" style={{ marginTop: 70 }}>
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas4} alt="" />
              </div>

              <h3>Perumusan Naskah Proklamasi</h3>

              <div className="deskripsi-tugas">
                <p>
                  Perumusan naskah proklamasi kemerdekaan Indonesia merupakan
                  proses yang melibatkan beberapa tokoh nasionalis Indonesia
                  pada saat itu, seperti Soekarno, Hatta, Ahmad Soebardjo, dan
                  Soepomo. Proses perumusan naskah proklamasi dimulai pada bulan
                  Juni 1945, ketika para tokoh nasionalis Indonesia mengadakan
                  rapat di Jalan Pegangsaan Timur 56, Jakarta.
                </p>
              </div>
            </div>
          </div>
          <div className="list-tugas" style={{ marginTop: 70 }}>
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas2} alt="" />
              </div>

              <h3>Rumah Laksana Tadashi Maeda</h3>
              <div className="deskripsi-tugas">
                <p>
                  Sejarah Teks Proklamasi Dirumuskan di Rumah Laksamana Tadashi
                  Maeda. Teks proklamasi dirumuskan di rumah Laksamana Tadashi
                  Maeda, di Jalan Meiji Dori, sekarang dikenal dengan nama Jalan
                  Imam Bonjol Nomor 1, Jakarta Pusat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <StoryProklamasi color="#a84d31" />
        <Footer />
      </div>
    </div>
  );
}

export default Pages6;
