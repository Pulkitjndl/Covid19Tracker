import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import CovidApp from "./components/CovidApp";
import Auth from './components/Auth'


const App  = ()=>{
   const routes = (
       
        <Switch>
          <Route exact path="/">
            {localStorage.getItem("loggedIn") == "true" ? <Redirect to="/login" /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

          <Route path="/dashboard">
            {localStorage.getItem("loggedIn") == "true" ? <CovidApp /> : <Redirect to="/home" />}
          </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
  const fallback = (
    <div className="flex w-screen h-screen justify-center items-center ">
    </div>
  );
    return (
       <Router basename={process.env.PUBLIC_URL}>
          {routes}
        </Router>
    );
  };
export default App;
