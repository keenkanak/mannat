import React from "react";
import { actions } from "../../../utils/reducer";
import { useStateValue } from "../../../utils/StateProvider";
import "./Book.css";

const Book = ({ id, title, publisher, price, rating, image, button }) => {
  const dispatch = useStateValue()[1];
  const removeFromBasket = () => {
    dispatch({ type: actions.removeFromBasket, payload: id });
  };

  const addToBasket = () => {
    dispatch({
      type: actions.addToBasket,
      item: {
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="Book">
      <div className="Book__info">
        <p>{title}</p>
        <p>{publisher}</p>
        <p className="Book__price">
          <strong>${price}</strong>
        </p>
        <div className="Book__rating">{rating}</div>
      </div>
      <img className="Book__img" src={image} alt="" />
      {button ? (
        <button className="Book__cart" onClick={removeFromBasket}>
          Remove Item
        </button>
      ) : (
        <button className="Book__cart" onClick={addToBasket}>
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Book;
