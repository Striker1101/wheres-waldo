import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { fireBaseApp } from "../components/firebase";
import { images } from "./Data";
import { useNavigate } from "react-router-dom";
export default function LeaderBoard() {
  //full array
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  async function getData(board) {
    const db = getFirestore(fireBaseApp);
    const docRef = doc(db, "leaderBoard", board);
    const docSnap = await getDoc(docRef);
    const take = docSnap.data().data;
    setBoard(sorter(take));
  }

  function sorter(arr) {
    arr.map((x) => {
      return (x.time = x.time.split(":").join(""));
    });

    return arr.sort((a, b) => a.time - b.time);
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
      <button
        className="btn"
        onClick={() => {
          navigate("/home");
        }}
        style={{ float: "left", marginLeft: "20px", marginBottom: "10px" }}
      >
        Back to Home
      </button>
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
      <div
        className="score"
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "darkblue" }}>LeaderBoard</h1>
        <table style={{ marginBottom: "10px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="content">
            {board && (
              <>
                {board.map((item, index) => {
                  const spit = item.date.toDate().toString();
                  return (
                    <tr>
                      <td>{item.name} </td>
                      <td> {item.time}</td>
                      <td> {spit}</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
