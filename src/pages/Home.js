import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const links = props.img;
  return (
    <div className="home">
      <div className="homeContainer">
        {links.map((link, index) => {
          return (
            <div key={index}>
              <Link to={`/home/${index}`}>
                <div>
                  <img
                    src={link.img}
                    alt={`waldo${index}`}
                    className="homeImage"
                  />
                  <h2 className="homeText">{link.name}</h2>
                </div>
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
