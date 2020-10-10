import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchSection from "./components/SearchSection";
function App() {
  const headingstyle = {
    margin: "10px",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <Router>
      <Header />
      <h3 style={headingstyle}>Search/Search Buyer Requirements</h3>
      <div className="optionbox">
        <div className="select supplier">
          <p>Search Suppiler Products</p>
        </div>
        <div className="select buyer">
          <p>Search Buyer Requirements</p>
        </div>
      </div>

      <Route path="/:buyername?" component={SearchSection} />
    </Router>
  );
}

export default App;
