import React, { useState, useEffect } from "react";
import Book from "../ChildrenBooks/Book/Book";
import { actions } from "../../utils/reducer";
import Paypal from "../Paypal/Paypal";
import Coinbase from "../Coinbase/Coinbase";
import { getTotal } from "../../utils/reducer";
import { useStateValue } from "../../utils/StateProvider";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(getTotal(basket));

  useEffect(() => {
    setAmount(getTotal(basket));
  }, basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <div className="checkout__items">
          {basket.map(({ id, title, publisher, price, image }) => (
            <Book
              button
              id={id}
              key={Math.random()}
              title={title}
              price={price}
              rating={publisher}
              image={image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2 className="checkout__title1">Total</h2>
        <div className="checkout__total">
          Number Of Items :<strong> {basket?.length}</strong> <br />
          Total Amount : <strong>${amount}</strong>
        </div>
        <div className="checkout__payment">
          <button
            className="pay"
            type="submit"
            onClick={() => setClicked(true)}
          >
            Proceed To Pay
          </button>
          <button
            className="pay"
            onClick={() => {
              dispatch({ type: actions.emptyBasket });
              setAmount(0);
            }}
          >
            Clear Cart
          </button>
          {clicked && (
            <>
              <strong>Mode of Payment</strong>
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
            </>
          )}
          <br />
          <br />
          {value === "paypal" && amount ? <Paypal amount={amount} /> : null}
          {value === "crypto" && amount ? <Coinbase amount={amount} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
