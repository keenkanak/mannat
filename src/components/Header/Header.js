import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../utils/StateProvider";
import { auth } from "../../utils/firebase";

const Header = () => {
  const [{ basket, partner, child }] = useStateValue();
  const history = useHistory();

  const logoutHandler = () => {
    if (child || partner) {
      auth.signOut();
      console.log("signed out");
      history.push("/");
    }
  };
  return (
    <div className="main__header">
      <div className="mannat">मन्नत |</div>
      {/* <Link to="/">
        <img className="header__logo" src={mannatLogo} alt="amazon-logo" />
      </Link> */}
      <div className="nav-links">
        {partner || child ? (
          partner ? (
            <Link to="/partners">
              <li>{partner?.email.split("@")[0]}</li>
            </Link>
          ) : (
            <Link to="/children">
              <li>{child?.email.split("@")[0]}</li>
            </Link>
          )
        ) : null}

        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>UPDATES</li>
        </Link>

        {!partner && !child && (
          <>
            <Link to="/partners">
              <li>PARTNERS</li>
            </Link>
            <Link to="/children">
              <li>CHILDREN</li>
            </Link>
          </>
        )}
        <Link to="/donate">
          <li>DONATE</li>
        </Link>
        {partner || child ? <li onClick={logoutHandler}>SIGN OUT</li> : null}
        {child && (
          <Link to="/checkout">
            <li>
              <div className="mainheader__cart">
                <ShoppingCartIcon className="mainheader__cartIcon" />

                {/* Dynamic Value */}
                <span className="mainheader__optionLineTwo mainheader__CartCount">
                  {basket?.length}
                </span>
              </div>
            </li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
