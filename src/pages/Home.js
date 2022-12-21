import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const links = props.img[0];
  return (
    <div className="home">
      <div className="homeContainer">
        {links.map((link, index) => {
          return (
            <div key={index}>
              <Link to={`/home/${index}`}>
                <img
                  src={link.img}
                  alt={`waldo${index}`}
                  className="homeImage"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="leaderBoard">
        <Link to="/home/leaderBoard">
          <h2 className="link">LeaderBoard</h2>
        </Link>
      </div>
    </div>
  );
}
