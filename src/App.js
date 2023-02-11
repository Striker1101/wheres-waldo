import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Cards from "./pages/Cards";
import LeaderBoard from "./pages/LeaderBoard";
import { Route, Routes } from "react-router-dom";
import { fireBaseApp } from "./components/firebase";

import { getFirestore, collection, getDocs } from "firebase/firestore";
function App() {
  const [Links, setLinks] = useState(null);
  async function getData() {
    const db = getFirestore(fireBaseApp());
    const querySnapshot = await getDocs(collection(db, "links"));
    querySnapshot.forEach((doc) => {
      let take = doc.data();
      setLinks( take.lists);
    });
  }
 
  useEffect(() => {
    let checker = true;

    if (checker) {
      getData();
    }
    return () => {
      checker = false;
    };
  }, []);
  
  const [run, setRun] = useState(true);
  const images = useRef([]);
  if (Links) {
    if (run) {
      images.current = Links.map((el) => {
        return { img: el.img, name: el.name };
      });
      setRun((prev) => (prev = false));
    }
  }
  return (
    <div className="app">
      {Links ? (
        <Routes>
          <Route path="/" index element={<Intro />} />
          <Route path="/home">
            <Route index element={<Home img={images.current} />}></Route>
            <Route path="/home/:id" element={<Cards content={Links} />} />
            <Route
              path="/home/leaderBoard"
              element={<LeaderBoard images={images.current} />}
            />
          </Route>
        </Routes>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
