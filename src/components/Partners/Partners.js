import React from "react";
import "./Partners.css";
import img1 from "../../assets/cry.jpg";
import img2 from "../../assets/katha.jpg";
import img3 from "../../assets/smile.jpg";

const Partners = () => {
  return (
    <>
      <section className="sub-header-3">
        <div className="partners-text-box">
          <h3>Our Partners</h3>
        </div>
      </section>
      <section className="partners-description">
        <div className="partners-row">
          <div className="partners-split-row">
            <h3>CRY Foundation</h3>
            <img src={img1} alt="" />
            <br />
          </div>
          <div className="partners-split-row">
            <h3>Katha</h3>
            <img src={img2} alt="" />
            <br />
          </div>
          <div className="partners-split-row">
            <h3>SMILE Foundation</h3>
            <img src={img3} alt="" />
            <br />
          </div>
        </div>
      </section>

    </>
  );
};

export default Partners;
