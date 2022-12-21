import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Cards from "./pages/Cards";
import img1 from "./media/weldo1.jpg";
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
      img: img1,
    },
    {
      id: 1,
      img: "",
    },
    {
      id: 2,
      img: "",
    },
  ];
  const imgLinks = useState(links);
  return (
    <div className="app">
      <Routes>
        <Route path="/" index element={<Intro />} />
        <Route path="/home">
          <Route index element={<Home img={imgLinks} />}></Route>
          <Route path="/home/:id" element={<Cards content={imgLinks} />} />
          <Route path="/home/leaderBoard" element={<LeaderBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
