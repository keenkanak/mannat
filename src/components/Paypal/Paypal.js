import React from "react";
import ReactDOM from "react-dom";

import "./Paypal.css";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Paypal = ({ amount }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <div className="paypal">
      <div className="wrapper">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
};

export default Paypal;
