import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { db, auth } from "../../utils/firebase";
import "./PartnerLogin.css";

const ChildLogin = () => {
  const [partners, setPartners] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const emailRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await db
        .collection("partners")
        .onSnapshot((snapshot) =>
          setPartners(snapshot.docs.map((doc) => doc.data()))
        );
    };
    fetchData();
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    if (!emailRef.current.value.includes("@mannat.org")) {
      alert("Invalid email");
    } else {
      console.log(partners);
      const dummyPartners = [...partners];
      const partner = dummyPartners.find((partner) => partner.email === email);
      if (partner) {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            console.log(`[PartnerLogin] ${auth}`);
            history.push("/partners");
          })
          .catch((e) => alert(e.message));
      }
    }
  };

  return (
    <div className="login__shell">
      <div className="login">
        <h2>
          FOR THE PARTNERS. <AccessibilityNewIcon className="icon" />
        </h2>
        <div className="login__container">
          <Link to="/">
            <img alt="" className="login__logo" src={logo} />
          </Link>
          <h2>साथी? Login.</h2>
          <form onSubmit={loginHandler}>
            <h5>E-mail or mobile phone number</h5>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              ref={emailRef}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="login__signInButton">
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to Mannat's Conditions of Use and Privacy
            Notice.
          </p>
          <p className="login__help">Need help?</p>
        </div>
      </div>
    </div>
  );
};

export default ChildLogin;
