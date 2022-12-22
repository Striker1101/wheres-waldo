import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Cards from "./pages/Cards";
import ps3 from "./media/weldo1.jpg";
import ps4 from "./media/ps4.jpg";
import x360 from "./media/x360.jpg";
import tor from "./media/tortoise.jfif";
import LeaderBoard from "./pages/LeaderBoard";
import { Route, Routes } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuZcY0sy_3hx5SzpUczWrmcZ3iNZLZLwc",
  authDomain: "wheres-waldo-11d56.firebaseapp.com",
  projectId: "wheres-waldo-11d56",
  storageBucket: "wheres-waldo-11d56.appspot.com",
  messagingSenderId: "769814543298",
  appId: "1:769814543298:web:868052f74ee83c1871b45b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const links = [
    {
      id: 0,
      name: "sega",
      img: ps3,
      charc: [
        { img: tor, cord: [297, 298], name: "tortoise" },
        { img: "", cord: [611, 581, 582], name: "" },
        { img: "", cord: [760, 730], name: "" },
      ],
    },
    {
      id: 1,
      name: "X360",
      img: x360,
      charc: [
        { img: tor, cord: [297, 298], name: "tortoise" },
        { img: "", cord: [611, 581, 582], name: "" },
        { img: "", cord: [760, 730], name: "" },
      ],
    },
    {
      id: 2,
      name: "ps4",
      img: ps4,
      charc: [
        { img: tor, cord: [297, 298], name: "tortoise" },
        { img: "", cord: [611, 581, 582], name: "" },
        { img: "", cord: [760, 730], name: "" },
      ],
    },
  ];
  const [run, setRun] = useState(true);
  const Links = useRef(links);
  const images = useRef([]);
  if (run) {
    for (let i = 0; i < Links.current.length; i++) {
      images.current.push({
        img: Links.current[i].img,
        name: Links.current[i].name,
      });
    }
    setRun((prev) => (prev = false));
  }
  console.log(images.current);
  return (
    <div className="app">
      <Routes>
        <Route path="/" index element={<Intro />} />
        <Route path="/home">
          <Route index element={<Home img={images.current} />}></Route>
          <Route path="/home/:id" element={<Cards content={Links.current} />} />
          <Route
            path="/home/leaderBoard"
            element={<LeaderBoard images={images.current} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
