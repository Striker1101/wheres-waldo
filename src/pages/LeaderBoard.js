import React from "react";

export default function LeaderBoard({ images }) {
  return (
    <div className="leaderBoardContainer">
      <div className="leaderBoardImages">
        {images.map((link, index) => {
          return (
            <div key={index}>
              <div>
                <img
                  src={link.img}
                  alt={`leaderboard ${index}`}
                  className="homeImage"
                />
                <h2 className="homeText">{link.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="score">
        <h1 style={{ color: "white" }}>LeaderBoard</h1>
        <div>content</div>
      </div>
    </div>
  );
}
