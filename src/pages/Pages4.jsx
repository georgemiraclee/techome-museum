import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Orang from "../images/gallery/pengeboman/mayorjendralcharles.png";
import Orang2 from "../images/gallery/pengeboman/paulwarfield.png";
import About1 from "../images/gallery/pengeboman/galeri1.jpeg";
import About2 from "../images/gallery/pengeboman/galeri2.jpeg";
import About3 from "../images/gallery/pengeboman/galeri3.jpeg";
import About4 from "../images/gallery/pengeboman/galeri4.jpeg";
import Tugas1 from "../images/gallery/pengeboman/gallery1.png";
import Tugas2 from "../images/gallery/pengeboman/gallery2.png";
import Tugas3 from "../images/gallery/pengeboman/gallery3.png";
import Tugas4 from "../images/gallery/pengeboman/gallery4.png";
import "../css/ppki.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/Footer";
import StoryJapan from "../components/StoryJapan";
function Pages4() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container-about-bpupki">
        <div
          className="background-circle"
          style={{ backgroundColor: "#278227" }}
        >
          <span></span>
        </div>
        <div className="image-about-container" data-aos="fade-up">
        <Link to="/" className="back-to-home-link">
            Home
          </Link>
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
              Pengertian
              <span style={{ fontSize: 70 }}>
                {" "}
                Pengeboman Hiroshima dan Nagasaki
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              Amerika Serikat menjatuhkan bom atom di kota Hiroshima dan
              Nagasaki, Jepang, pada bulan Agustus 1945, tahap akhir Perang
              Dunia Kedua. Amerika Serikat menjatuhkan bom dengan persetujuan
              dari Britania Raya sebagaimana tertuang dalam Perjanjian Quebec.
              Dua operasi pengeboman yang menewaskan sedikitnya 129.000 jiwa ini
              merupakan penggunaan senjata nuklir masa perang untuk pertama kali
              dan satu-satunya dalam sejarah.
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
            Tokoh Pengeboman <span style={{ fontSize: 80 }}></span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Mayor Jendral Charles</span>
              <h4>Perwira Pasukan Amerika Serikat</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Paul Warfield</span>
              <h4>Pilot Pesawat Amerika Serikat</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <div className="container-tugas-bpupki">
        <div
          className="background-circle-2"
          style={{ backgroundColor: "#278227" }}
        >
          <span></span>
        </div>
        <div className="tugas-bpupki-main">
          <div className="title-tugas" data-aos="fade-right">
            <h1>Gallery Sejarah</h1>
          </div>
          <div className="list-tugas" data-aos="fade-up">
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas1} alt="" />
              </div>

              <h3>Tentara yang sedang bertugas</h3>
              <div className="deskripsi-tugas">
                <p>
                  Tentara Amerika Serikat yang sedang bertugas melawan Jepang
                  selama Perang Dunia II menghadapi tantangan besar di medan
                  perang Pasifik. Mereka menghadapi kondisi yang sangat berat
                  seperti cuaca tropis yang panas dan lembap, medan yang sulit
                  seperti hutan dan pegunungan, dan juga ancaman serangan
                  mendadak dari Jepang.
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

              <h3>
                Ledakan hasil pengeboman yang terjadi di kota Hiroshima dan
                Nagasaki
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Ledakan bom atom di Hiroshima dan Nagasaki merupakan salah
                  satu tragedi besar dalam sejarah dunia. Pada tanggal 6 Agustus
                  1945, pesawat Amerika Serikat, Enola Gay menjatuhkan bom atom
                  di Hiroshima yang menyebabkan ledakan dahsyat yang
                  menghancurkan sebagian besar kota. Tiga hari kemudian, pada 9
                  Agustus, pesawat lainnya, Bockscar, menjatuhkan bom atom kedua
                  di Nagasaki yang juga menghancurkan sebagian besar kota.
                  Diperkirakan bahwa sekitar 200.000 orang tewas dalam ledakan
                  bom atom dan dampak radiasinya, baik saat ledakan itu terjadi
                  atau dalam beberapa tahun setelahnya.
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

              <h3>Wujud dari bom atom yang digunakan oleh Amerika Serikat</h3>
              <div className="deskripsi-tugas">
                <p>
                  Bom atom yang digunakan oleh Amerika Serikat selama Perang
                  Dunia II merupakan senjata paling mematikan yang pernah
                  diciptakan dalam sejarah. Dikembangkan melalui proyek
                  Manhattan, bom atom yang dijatuhkan di Hiroshima dan Nagasaki
                  memiliki kekuatan ledakan yang belum pernah dilihat
                  sebelumnya. Bom tersebut menggunakan reaksi fisi nuklir untuk
                  menghasilkan ledakan dahsyat yang merusak segala sesuatu dalam
                  radius yang luas.
                </p>
              </div>
            </div>
          </div>
          <div className="list-tugas" style={{ marginTop: 70 }}>
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas3} alt="" />
              </div>

              <h3>
                Ledakan besar yang difoto dari atas langit di kota Hiroshima dan
                Nagasaki{" "}
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Ledakan besar yang di foto di langit Hiroshima adalah hasil
                  dari ledakan bom atom "Little Boy" yang dijatuhkan oleh
                  Amerika Serikat pada tanggal 6 Agustus 1945. Ledakan ini
                  adalah yang pertama kali dari dua bom atom yang dijatuhkan
                  pada Jepang selama Perang Dunia II. Ledakan tersebut terjadi
                  di ketinggian sekitar 600 meter dan menghasilkan sebuah bola
                  api raksasa yang dapat terlihat dari jarak jauh.
                </p>
              </div>
            </div>
            <hr style={{ marginTop: 60 }} />
          </div>
        </div>
        <StoryJapan color="#278227" />
        <Footer />
      </div>
    </div>
  );
}

export default Pages4;
