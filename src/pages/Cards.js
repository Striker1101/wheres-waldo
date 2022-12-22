import React, { useRef, useState } from "react";
import Choices from "../components/Choices";
import { useParams, Link } from "react-router-dom";
export default function Cards(props) {
  const { id } = useParams();
  const content = props.content;
  const item = content[id];
  const image = item.img;
  const width = useRef(650);
  const height = useRef(1000);
  const char = item.charc;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [cord, setCord] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [reply, setReply] = useState(false);
  const [picker, setPicker] = useState([false, false, false]);
  console.log(picker);
  let result = picker.every((i) => {
    return i === true;
  });

  const divsArray = Array.apply(null, Array(616));

  const cardStyle = {
    width: `${width.current}px`,
    height: `${height.current}px`,
    cursor: "crosshair",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  function clicked(e) {
    setX((prev) => (prev = e.nativeEvent.pageX));
    setY((prev) => (prev = e.nativeEvent.pageY));
    let target = e.target.getAttribute("data-index");
    setCord((prev) => (prev = target));
    setToggle((prev) => !prev);
    setTimeout(() => {
      setToggle((prev) => !prev);
    }, 5000);
  }
  const replyStyle = {
    visibility: reply ? "visible" : "hidden",
  };
  return (
    <div className="cardContainer">
      <div className="cardCharacters">
        <div className="cardCharac">
          {char.map((item, i) => {
            return (
              <button className="btnCont" key={i}>
                <img className="btnCard" src={item.img} alt="charac" />
              </button>
            );
          })}
        </div>
        <div className="cardButton">
          <button
            onClick={() => {
              //zoom
            }}
            className="cardclick inc"
          >
            +
          </button>
          <button
            onClick={() => {
              //zoom out
            }}
            className="cardclick dec"
          >
            -
          </button>
        </div>
      </div>
      <div>
        <div className="card" style={cardStyle} onClick={clicked}>
          {divsArray.map((x, i) => {
            return <div key={i} data-index={i} className="cords"></div>;
          })}
        </div>
        {toggle && (
          <Choices
            x={x}
            y={y}
            cord={cord}
            char={char}
            setReply={setReply}
            setPicker={setPicker}
            picker={picker}
          />
        )}

        <div style={replyStyle} className="reply">
          <h3>""</h3>
        </div>

        {result && (
          <div className="winner">
            <div>
              <h1>you won the game</h1>
              <form className="winnerForm">
                <label htmlFor="name"> Input your name</label>
                <br />
                <input type="text" />
                <br />
                <Link to="/home/leaderBoard">
                  <input type="submit" />
                </Link>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
