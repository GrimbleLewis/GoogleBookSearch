import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>
        <span style={{ color: "#4285f4" }}>G</span>
        <span style={{ color: "#ea4335" }}>o</span>
        <span style={{ color: "#fbbc05" }}>o</span>
        <span style={{ color: "#4285f4" }}>g</span>
        <span style={{ color: "#34a853" }}>l</span>
        <span style={{ color: "#ea4335" }}>e</span>Book Search
      </h1>
      <h2>Search for and save books of interest</h2>
    </div>
  );
}

export default Jumbotron;
