import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Orang from "../images/gallery/ppki/hatta.png";
import Orang2 from "../images/gallery/ppki/abdulwachid.png";
import Orang3 from "../images/gallery/ppki/irsoekarno.png";
import Orang4 from "../images/gallery/ppki/radjiman.png";
import Orang5 from "../images/gallery/ppki/RAAwiranata.png";
import Orang6 from "../images/gallery/ppki/soetarjokartohadikusumo.png";
import About1 from "../images/gallery/ppki/sidang1.jpeg";
import About2 from "../images/gallery/ppki/sidang2.webp";
import About3 from "../images/gallery/ppki/galery2.jpeg";
import About4 from "../images/gallery/ppki/galery3.jpeg";
import Tugas1 from "../images/gallery/ppki/tugas1.png";
import Tugas2 from "../images/gallery/ppki/tugas2.png";
import Tugas3 from "../images/gallery/ppki/tugas3.png";
import Tugas4 from "../images/gallery/ppki/tugas4.png";
import "../css/ppki.css";
import AOS from "aos";
import "aos/dist/aos.css";
import StoryPPKI from "../components/StoryPPKI";
import Footer from "../components/Footer";
function Pages3() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container-about-bpupki">
        <div className="background-circle">
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
              Apa itu{" "}
              <span style={{ fontSize: 90 }}>
                {" "}
                <span className="a">PP</span>KI ?
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              PPKI atau Panitia Persiapan Kemerdekaan Indonesia merupakan badan
              yang dibentuk untuk meneruskan persiapan kemerdekaan. Dalam bahasa
              Jepang, PPKI disebut “Dokuritsu Junbi Inkai” dibentuk pada 7
              Agustus 1945, setelah Badan Penyelidik Usaha-usaha Persiapan
              Kemerdekaan (BPUPKI) dibubarkan.
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
            Tokoh Pendiri{" "}
            <span style={{ fontSize: 80 }}>
              <span className="wrap">PP</span>
              <span>KI</span>
            </span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={200} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Mohammad Hatta</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Abdoel Wachid</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang6} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Soetarjo Kartohadikoesumo</span>
              <h4>Ketua BPUPKI</h4>
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
              <span>Ir.Soekarno</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang4} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Radjiman Wedyodiningrat</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang5} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Wiranatakoesomo</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <div className="container-tugas-bpupki">
        <div className="background-circle-2">
          <span></span>
        </div>
        <div className="tugas-bpupki-main">
          <div className="title-tugas" data-aos="fade-right">
            <h1>
              Tugas PP<span className="wrap">KI</span>
            </h1>
          </div>
          <div className="list-tugas" data-aos="fade-up">
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas1} alt="" />
              </div>

              <h3>
                Menetapkan Undang-Undang Negara Republik Indonesia Tahun 1945.
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  UUD 1945 ini sendiri, disahkan sebagai Undang-Undang dasar
                  negara oleh PPKI pada tanggal 18 Agustus 1945. Sejak tanggal
                  27 Desember 1949, di Indonesia berlaku Konstitusi RIS dan
                  sejak tanggal 17 Agustus 1950 di Indonesia berlaku UUDS 1950.
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
                Pancasila diakui sebagai dasar dari Negara Kesatuan Republik
                Indonesia (NKRI).
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Pancasila merupakan pandangan hidup bangsa, memiliki fungsi
                  utama sebagai dasar negara Indonesia. Dalam kedudukannya yang
                  demikian Pancasila menempati kedudukan yang paling tinggi,
                  sebagai sumber dari segala sumber hukum atau sebagai sumber
                  hukum dasar nasional dalam tata hukum di Indonesia.
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

              <h3>
                Memilih Presiden dan Wakil Presiden, yaitu Ir. Soekarno dan Drs.
                Mohammad Hatta.
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Pada tahun 1945, Jepang membentuk BPUPKI, yang menentukan
                  Dasar negara dan Bentuk negara. Namun setelah menyerahnya
                  Jepang pada 1945, Indonesia melaksanakan Kemerdekaan lebih
                  cepat dan tentu, Pemilihan Presiden juga lebih cepat. Pada
                  tanggal 18 Agustus 1945, Satu hari setelah kemerdekaan,
                  Terjadilah pemilihan Presiden yang menghasilkan Soekarno dan
                  Hatta sebagai Presiden dan Wakil Presiden Republik Indonesia.
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

              <h3>Membentuk Komite Nasional Indonesia Pusat (KNIP)</h3>
              <div className="deskripsi-tugas">
                <p>
                  Tugas Komite Nasional Indonesia Pusat (KNIP) yang dibentuk
                  oleh Panitia Persiapan Kemerdekaan Indonesia (PPKI) adalah
                  membantu presiden sebelum MPR dan DPR dibentuk.
                </p>
              </div>
            </div>
            <hr style={{ marginTop: 60 }} />
          </div>
        </div>
        <StoryPPKI color="#5fa8e8" />
        <Footer />
      </div>
    </div>
  );
}

export default Pages3;
