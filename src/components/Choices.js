import React from "react";

export default function Choices({
  x,
  y,
  cord,
  char,
  setReply,
  setPicker,
  picker,
}) {
  const characStyle = {
    position: "absolute",
    top: `${y}px`,
    left: `${x}px`,
  };

  function pick(i) {
    let arr = char[i].cord;
    const cords = parseInt(cord);

    if (arr.includes(cords)) {
      const reply = document.querySelector(".reply").firstChild;
      reply.textContent = `Yip you found ${char[i].name}`;
      setReply((prev) => !prev);
      setTimeout(() => {
        setReply((prev) => !prev);
      }, 3000);
      const buttons = [...document.querySelectorAll(".btnCont")];
      buttons[i].disable = true;

      buttons[i].style.border = "2px solid Green";
      picker[i] = true;
      setPicker((prev) => (prev = picker));
    } else {
      const reply = document.querySelector(".reply").firstChild;
      reply.textContent = "Wrong try again";
      setReply((prev) => !prev);
      setTimeout(() => {
        setReply((prev) => !prev);
      }, 3000);
    }
  }
  return (
    <div className="choice">
      <div className="charButton" style={characStyle}>
        <button
          onClick={() => {
            pick(0);
          }}
        >
          {char[0].name}
        </button>
        <button
          onClick={() => {
            pick(1);
          }}
        >
          {char[1].name}
        </button>
        <button
          onClick={() => {
            pick(2);
          }}
        >
          {char[2].name}
        </button>
      </div>
    </div>
  );
}
