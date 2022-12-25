import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { fireBaseApp } from "../components/firebase";

export default function LeaderBoard({ images }) {
  //full array

  const [board, setBoard] = useState([]);
  async function getData(board) {
    const db = getFirestore(fireBaseApp);
    const docRef = doc(db, "leaderBoard", board);
    const docSnap = await getDoc(docRef);
    const take = docSnap.data().data;
    setBoard(take);
  }

  useEffect(() => {
    let checker = true;
    if (checker) {
    }
    getData("board0");
    return () => {
      checker = false;
    };
  }, []);

  if (board.length > 0) {
    const img0 = document.querySelector(".board0");
    const img1 = document.querySelector(".board1");
    const img2 = document.querySelector(".board2");

    img0.addEventListener("mouseover", () => {
      getData("board0");
    });

    img1.addEventListener("mouseover", () => {
      getData("board1");
    });

    img2.addEventListener("mouseover", () => {
      getData("board2");
    });
  }

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
                  className={`board${index} homeImage`}
                />
                <h2 className="homeText">{link.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="score">
        <h1 style={{ color: "white" }}>LeaderBoard</h1>
        {board && (
          <div className="content">
            {board.map((item, index) => {
              const spit = item.date.toDate().toString();
              return (
                <div className="boardItems" key={index}>
                  <span className="boardItem">{item.name}</span>
                  <span className="boardItem">{item.time}</span>
                  <span>{spit}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
