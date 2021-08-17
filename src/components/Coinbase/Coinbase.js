import React, { useRef, useEffect } from "react";

const Coinbase = ({ amount }) => {
  useEffect(() => {
    const handleClick = async () => {
      console.log(amount);
      await fetch(
        //Dev
        `http://localhost:5001/mannat-7fcf2/us-central1/createCharge?value=${amount}`
        //Production
        //`https://us-central1-mannat-7fcf2.cloudfunctions.net/createChargevalue=${amount}`
      )
        .then(async (res) => {
          const data = await res.json();
          console.log(data);
          payRef.current.innerHTML = `<a href="${data.hosted_url}" target="_blank">Pay Now</a>`;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    handleClick();
  }, []);

  const payRef = useRef();

  return (
    <div className="coinbase">
      <p id="pay" ref={payRef} />
    </div>
  );
};

export default Coinbase;
