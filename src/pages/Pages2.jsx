import React, { useEffect } from "react";
import Orang from "../images/radjiman2.png";
import Orang2 from "../images/soekarno.png";
import Orang3 from "../images/hatta.png";
import Orang4 from "../images/soeroso.png";
import Orang5 from "../images/kihajar.png";
import About1 from "../images/gallery/bpupki/sidang1.jpeg";
import About2 from "../images/gallery/bpupki/sidang2.jpeg";
import About3 from "../images/gallery/bpupki/sidang3.png";
import About4 from "../images/gallery/bpupki/sidang4.jpeg";
import Tugas1 from "../images/gallery/bpupki/tugas1.png";
import Tugas2 from "../images/gallery/bpupki/tugas2.png";
import Tugas3 from "../images/gallery/bpupki/tugas3.png";
import Tugas4 from "../images/gallery/bpupki/tugas4.png";
import "../css/bpupki.css";
import AOS from "aos";
import "aos/dist/aos.css";
import StoryBPUPKI from "../components/StoryBPUPKI";
import Footer from "../components/Footer";
function Pages2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container-about-bpupki">
        <div
          className="background-circle"
          style={{ backgroundColor: "#e8645f" }}
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
              Apa itu{" "}
              <span style={{ fontSize: 90 }}>
                {" "}
                <span className="a">BPU</span>PKI ?
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              Badan Usaha Persiapan Kemerdekaan Indonesia atau Dokuritsu Junbi
              Cosakai adalah badan yang didirikan untuk mempersiapkan komponen –
              komponen kemerdekaan Indonesia. BPUPKI dibentuk pada tanggal 1
              Maret 1945 dan baru diresmikan pada tanggal 29 Maret 1945
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
              <span className="wrap">BPU</span>
              <span>PKI</span>
            </span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={200} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Dr.Radjiman Widiyoningrat</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Ir.Soekarno</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            {" "}
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang3} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Moh Hatta</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang4} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Raden Pandji Soeroso</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang5} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Ki Hajar Dewantara</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="container-tugas-bpupki">
        <div
          className="background-circle-2"
          style={{ backgroundColor: "#e8645f" }}
        >
          <span></span>
        </div>
        <div className="tugas-bpupki-main">
          <div className="title-tugas" data-aos="fade-right">
            <h1>
              Tugas BPU<span className="wrap">PKI</span>
            </h1>
          </div>
          <div className="list-tugas" data-aos="fade-up">
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas1} alt="" />
              </div>

              <h3>Membantu Panitia Sembilan Bersama Panitia Kecil</h3>
              <div className="deskripsi-tugas">
                <p>
                  BPUPKI membentuk panitia perumus dasar negara yang
                  beranggotakan sembilan orang sehingga disebut Panitia
                  Sembilan. Tugas Panitia Sembilan adalah menampung berbagai
                  aspirasi tentang pembentukan dasar negara Indonesia merdeka.
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

              <h3>Membahas Dasar Negara</h3>
              <div className="deskripsi-tugas">
                <p>
                  Sidang pertama BPUPKI membahas tentang rumusan dasar negara
                  untuk Indonesia merdeka. Sidang BPUPKI yang pertama
                  berlangsung dari tanggal 29 Mei sampai 1 Juni 1945. Dalam
                  sidang pertama BPUPKI membahas tentang rumusan dasar negara,
                  ada tiga tokoh nasionalis yang mengemukakan usulan-usulannya,
                  yakni Moh Yamin, Mr Soepomo dan Ir Soekarno.
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

              <h3>Membentuk Panitia Delapan</h3>
              <div className="deskripsi-tugas">
                <p>
                  Panitia Kecil atau yang juga disebut Panitia Delapan adalah
                  panitia yang dibentuk oleh BPUPKI setelah sidang pertama
                  berakhir pada 1 Juni 1945. Panitia Kecil diketuai oleh Bung
                  Karno yang merumuskan dasar negara Pancasila dalam sidang
                  pertama BPUPKI.
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

              <h3>Menghasilkan Jakarta Charter atau Piagam Jakarta</h3>
              <div className="deskripsi-tugas">
                <p>
                  Piagam Jakarta juga sering disebut dengan Jakarta Charter, hal
                  tersebut dikarenakan Piagam Jakarta merupakan piagam atau
                  sebuah naskah yang disusun pada rapat Panitia Sembilan atau 9
                  tokoh Indonesia tepatnya pada tanggal 22 Juni 1945. Panitia
                  Sembilan yang dibentuk pada 1 Jun 1045.
                </p>
              </div>
            </div>
            <hr style={{ marginTop: 60 }} />
          </div>
        </div>
        <StoryBPUPKI />
        <Footer />
      </div>
    </div>
  );
}

export default Pages2;
