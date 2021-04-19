// Globals
import "./styles.scss";
import React from "react";

// Components
import { Link } from "react-router-dom";

// Component
function Home() {
  return (
    <div className="qd-home qd-page">
      <h1>Qualified Digital Code Challenge</h1>

      <div className="qd-home-cards">
        <Link to="/timer">
          <div className="qd-home-card">
            <h2>Part I</h2>
            React Timer
          </div>
        </Link>
        <Link to="/records">
          <div className="qd-home-card">
            <h2>Part II</h2>
            Global Records
          </div>
        </Link>
      </div>
    </div>
  );
}

export { Home };
