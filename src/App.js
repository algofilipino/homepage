import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "tailwindcss/tailwind.css"
import Introduction from "./components/Introduction";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs"; 
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="px-6 lg:px-36">
          <Header />
          <Introduction />
          <Testimonials />
          <JoinUs />
        </div>
        <Footer />

        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
