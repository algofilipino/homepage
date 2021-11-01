import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "tailwindcss/tailwind.css"
import Introduction from "./components/Introduction"; // Add This
import Testimonials from "./components/Testimonials"; // Add This
import JoinUs from "./components/JoinUs"; // Add This

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="px-6 md:px-36">
          <Header />
          <Introduction />
          <Testimonials />
          <JoinUs />
        </div>
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
