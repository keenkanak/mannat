import React, { useState } from "react";
import Paypal from "../Paypal/Paypal";
import Coinbase from "../Coinbase/Coinbase";
import "./Donate.css";

const Donate = () => {
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(null);
  return (
    <>
      <section className="sub-header-1">
        <div className="donate-text-box">
          <h3>Donate</h3>
        </div>
      </section>
      <section className="donate-description">
        <form className="form">
          <input className="text" type="text" placeholder="Name" name="name" />
          <br />
          <input type="email" placeholder="Email Address" name="email" />
          <br />
          <input type="tel" placeholder="Phone Number" name="phno" />
          <br />
          <input
            type="number"
            placeholder="Amount"
            name="lname"
            onChange={(e) => setAmount(e.target.value)}
          />
          <p>Mode of Payment</p>
          <label>
            Paypal/Card
            <input
              type="radio"
              name="payment"
              value="paypal"
              onClick={(event) => {
                setValue(event.target.value);
              }}
            />
            <br />
          </label>
          <label>
            Crypto
            <input
              type="radio"
              name="payment"
              value="crypto"
              onClick={(event) => {
                setValue(event.target.value);
              }}
            />
          </label>
          <br />
          <br />
          {value === "paypal" && amount ? <Paypal amount={amount} /> : null}
          {value === "crypto" && amount ? <Coinbase amount={amount} /> : null}
        </form>
      </section>
    </>
  );
};

export default Donate;
