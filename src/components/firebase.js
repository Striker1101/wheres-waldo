// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  setDoc,
  doc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
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
const db = getFirestore(app);
export function writeUserData(list) {
  addDoc(collection(db, "links"), {
    lists: list,
  })
    .then(() => {
      // Data saved successfully!
      console.log("data saved");
    })
    .catch((error) => {
      // The write failed...
      console.log(error);
    });
}

export function receive() {
  const db = getFirestore(app);
  const data = getDocs(collection(db, "lists"))
    .then(() => {
      // Data received successfully!
      console.log("data received");
      return data;
    })
    .catch((error) => {
      // The write failed...
      console.log(error);
    });
}

export function fireBaseApp() {
  return app;
}

export async function addBoard(board) {
  await setDoc(doc(db, "leaderBoard", board), {
    name: "name0second",
    time: "time0",
    date: "date0",
  });
}

export async function updateWinner(board, name, time) {
  const leaderBoard = doc(db, "leaderBoard", board);
  const timestamp = Timestamp.fromDate(new Date());
  await updateDoc(leaderBoard, {
    data: arrayUnion({ name: name, time: time, date: timestamp.toDate() }),
  });
}
// getting collection->doc
// async function getData(board) {
//   const db = getFirestore(fireBaseApp);
//   const docRef = doc(db, "leaderBoard", board);
//   const docSnap = await getDoc(docRef);
//   const take = docSnap.data().data;
//   console.log(take);
//   setBoard(take);
// }

//get collection
// async function collect() {
//   const db = getFirestore(fireBaseApp);
//   const querySnapshot = await getDocs(collection(db, "leaderBoard"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     if (boards.length <= 3) {
//       setBoards((prev) => prev.concat(doc.data()));
//     }
//     // console.log(doc.id, " => ", doc.data());
//     console.log(doc.data());
//   });
// }
