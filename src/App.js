import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout'
import Login from "./Components/Login/Login"
import { useStateValue } from './Services/StateProvider';
import { auth } from "./Services/firebase"

function App() {
  const [{ user }, dispatch] = useStateValue();

  // code that runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      //Any cleanup operations go in here
      unsubscribe();
    }
  }, [])

  console.log("USER IS >>>>>>>>>>>", user);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>

          <Route path="/checkout">
            {/* <Header /> */}
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            {/* <Header /> */}
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
