import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateWinner } from "./firebase";
export default function Winner({ index, pause, time }) {
  useEffect(() => {
    pause();
    // const form = document.querySelector(".winnerForm");
  }, []);

  const input = useRef(null);
  const form = useRef(null);
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const board = ["board0", "board1", "board2"];
  function winner() {
    updateWinner(board[index], value, time);
    if (value !== undefined) {
      navigate("/home/leaderBoard");
    }
    //inform leaderBoard of play card
  }

  return (
    <div className="winner">
      <div>
        <h1>you won the game in {time}</h1>
        <form ref={form} className="winnerForm">
          <label htmlFor="name"> Input your name</label>
          <br />
          <input
            ref={input}
            onChange={(e) => {
              setValue((prev) => (prev = e.target.value));
            }}
            type="text"
          />
          <br />
          <input
            onClick={(e) => {
              e.preventDefault();
              winner();
            }}
            type="submit"
            required
          />
        </form>
      </div>
    </div>
  );
}
