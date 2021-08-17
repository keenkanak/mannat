import React from "react";
import { Link } from "react-router-dom";
import "./Children.css";
import img1 from "../../assets/books.jpg";
import img2 from "../../assets/stationery.jpg";
import img3 from "../../assets/teaching.jpg";

const Children = () => {
  return (
    <>
      <section className="sub-header-2">
        <div className="children-text-box">
          <h3>Services for Children</h3>
        </div>
      </section>
      <section className="children-description">
        <div className="children-row">
          <div className="children-split-row">
            <Link to="/children_books">
              <h3>Books</h3>{" "}
            </Link>
            <img src={img1} alt="" />
            <br />
            <p>Choose your subjects and the necessary books for your grade.</p>
          </div>

          <div className="children-split-row">
            <h3>Stationary</h3>
            <img src={img2} alt="" />
            <br />
            <p>Choose your required stationary from our available resources.</p>
          </div>
          <div className="children-split-row">
            <h3>Study Material</h3>
            <img src={img3} alt="" />
            <br />
            <p>
              Select from our available resources to help become better at your
              studies. Choose from our online videos and our pre-prepared
              presentations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Children;
