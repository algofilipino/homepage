import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "tailwindcss/tailwind.css"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
