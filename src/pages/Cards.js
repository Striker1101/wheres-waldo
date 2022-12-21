import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function Cards(props) {
  const { id } = useParams();
  const content = props.content[0];
  const item = content[id];
  const image = item.img;
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  (function () {})();

  const cardStyle = {
    backgroundImage: `url(${image})`,
    width: `${width}vh`,
    height: `${height}vh`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const take = Array.apply(null, Array(900));
  console.log(take);

  const clickStyle = {
    height: `${5}vh`,
    width: `${5}vh`,
  };
  return (
    <div className="cardContainer">
      <div className="cardCharacters">
        <div></div>
        <div className="cardButton">
          <button
            onClick={() => {
              setHeight((prev) => prev + 5);
              setWidth((prev) => prev + 5);
            }}
            className="cardclick inc"
          >
            +
          </button>
          <button
            onClick={() => {
              setHeight((prev) => prev - 5);
              setWidth((prev) => prev - 5);
            }}
            className="cardclick dec"
          >
            -
          </button>
        </div>
      </div>
      <div style={cardStyle} className="card">
        {take.map((x, i) => {
          return (
            <div
              key={i}
              data-index={i}
              style={clickStyle}
              className="click"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
