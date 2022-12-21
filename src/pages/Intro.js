import React from "react";
import { useNavigate } from "react-router-dom";
export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="intro">
        <div>
          <h2>WHERES WALDO</h2>
        </div>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          start
        </button>
      </div>
    </div>
  );
}
