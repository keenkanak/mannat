import React from "react";
import { Link } from "react-router-dom";
import video1 from "../../assets/gettyimages-867172410-640_adpp.mp4";
import img1 from "../../assets/investors.jpg";
import img2 from "../../assets/partners.jpg";
import img3 from "../../assets/children.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="header">
        <div className="video-container">
          <div className="color-overlay"></div>
          <video loop autoPlay={true} muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>

        <div className="text-box">
          <h1>Mannat</h1>
          <p>E-commerce for the underprivileged.</p>
          <a href="#about" className="hero-btn">
            Learn More
          </a>
        </div>
      </section>

      <section id="about" className="sub-header">
        <div className="about-text-box">
          <h3>About Us</h3>
        </div>
        <div className="about-description">
          <p>
            Our mission here at Mannat is to help the underprivileged children
            who have been deprived of their education due to the ongoing
            pandemic. With our network of partners and volunteers, we wish to
            reach as many children as possible and provide them with the
            required academic resources so that they do not fall behind in this.
            Empowering all children equally will pave the way to a better
            future.
            <br />
            <br />
            Reach us at +080-2777777 to learn more.
          </p>
        </div>
      </section>

      <section className="split">
        <h1>Explore</h1>
        <p>Choose which one applies to you.</p>

        <div className="row">
          <div className="split-row">
            <Link to="/donate">
              <h3>Investors</h3>{" "}
            </Link>
            <img alt="" src={img1} />
            <br />
            <p>
              Donate to help support our cause. We accept payments through UPI,
              Internet Banking and Cryptocurrency.
            </p>
          </div>

          <div className="split-row">
            <Link to="/partnerLogin">
              <h3>Partners</h3>
            </Link>
            <img alt="" src={img2} />
            <br />
            <p>
              Become a volunteer and help us deliver the resources to the
              children.
            </p>
          </div>

          <div className="split-row">
            <Link to="/childLogin">
              <h3>Children</h3>
            </Link>
            <img alt="" src={img3} />
            <br />
            <p>
              Explore our services offered. These include books, stationary and
              more.
            </p>
          </div>
        </div>
      </section>
      <section className="partner-with-us">
        <p>Want to partner with us?</p>
        <form
          action="http://localhost:5001/mannat-7fcf2/us-central1/reachOut"
          method="POST"
        >
          <input
            className="text"
            type="text"
            placeholder="Name of Organisation"
            name="fname"
          />
          <br />
          <input type="email" placeholder="Email Address" name="email" />
          <br />
          <input type="tel" placeholder="Phone Number" name="phno" />
          <br />
          <textarea
            placeholder="Mention Services Offered"
            name="serve"
            cols="40"
            rows="5"
          />
          <input className="submit1" type="submit" value="Submit" />
          <br />
          <br />
        </form>
      </section>

      <section className="footer">
        <div className="icons">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </section>
    </>
  );
};

export default Home;
