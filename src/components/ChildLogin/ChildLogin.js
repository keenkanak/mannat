import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import { db, auth } from "../../utils/firebase";
import "./ChildLogin.css";

const ChildLogin = () => {
  const [children, setChildren] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await db
        .collection("children")
        .onSnapshot((snapshot) =>
          setChildren(snapshot.docs.map((doc) => doc.data()))
        );
    };
    fetchData();
  }, []);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(children);
    const dummyChildren = [...children];
    const child = dummyChildren.find((child) => child.email === email);
    if (child) {
      console.log("Found");
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(`[ChildLogin] ${auth}`);
          history.push("/children");
        })
        .catch((e) => alert(e.message));
    } else {
      alert("Not registered");
    }
  };

  const registrationHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(`[ChildLogin] ${auth}`);
        db.collection("children").add({
          email: email,
          password: password,
        });
        console.log(children);
        history.push("/children");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login__shell">
      <div className="login">
        <h2>
          FOR THE CHILDREN. <LocalLibraryRoundedIcon className="icon" />
        </h2>
        <div className="login__container">
          <Link to="/">
            <img alt="" className="login__logo" src={logo} />
          </Link>
          <h2>विद्यार्थी? Login.</h2>
          <form>
            <h5>E-mail or mobile phone number</h5>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              className="login__signInButton"
              onClick={loginHandler}
            >
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to Mannat's Conditions of Use and Privacy
            Notice.
          </p>
          <p className="login__help">Need help?</p>
          <button
            className="login__registerButton"
            onClick={registrationHandler}
          >
            Create your Mannat account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildLogin;
