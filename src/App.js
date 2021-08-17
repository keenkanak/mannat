import React, { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useStateValue } from "./utils/StateProvider";
import { actions } from "./utils/reducer";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Donate from "./components/Donate/Donate";
import Checkout from "./components/Checkout/Checkout";
import Children1 from "./components/Children/Children";
import Partners from "./components/Partners/Partners";
import ChildrenBooks from "./components/ChildrenBooks/ChildrenBooks";
import ChildLogin from "./components/ChildLogin/ChildLogin";
import PartnerLogin from "./components/PartnerLogin/PartnerLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //Firebase Listener
      if (authUser) {
        // console.log(authUser.email);
        if (authUser.email.includes("@mannat.org")) {
          dispatch({ type: actions.setPartner, payload: authUser });
        } else {
          dispatch({ type: actions.setChild, payload: authUser });
        }

        //The user logged in or was just logged out
      } else {
        dispatch({ type: actions.logout, payload: null });
        //User logged out
      }
    });
  }, []);
  const [{ basket, partner, child }, dispatch] = useStateValue();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/children_books">
            <Header />
            <ChildrenBooks />
          </Route>
          <Route path="/partners">
            <Header />
            {partner ? <Partners /> : <PartnerLogin />}
          </Route>
          <Route path="/children">
            <Header />
            {child ? <Children1 /> : <ChildLogin />}
          </Route>
          <Route path="/donate">
            <Header />
            <Donate />
          </Route>
          <Route path="/about">
            <Header />
            <News />
          </Route>
          <Route path="/childLogin">
            <Header />
            {child ? <Children1 /> : <ChildLogin />}
          </Route>
          <Route path="/partnerLogin">
            <Header />
            {partner ? <Partners /> : <PartnerLogin />}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
