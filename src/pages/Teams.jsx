import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Teams from "../components/Team";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <hr className="hr" />

      <Teams />
      <Footer />
    </div>
  );
}

export default About;
