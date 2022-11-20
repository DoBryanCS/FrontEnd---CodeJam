import React, { useEffect, useState } from "react";
import { storage, db } from "./firebase-config.js";
import { ref as dbRef, get, child } from "firebase/database";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "./Home.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate, Link } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState("");
  const [urls, setUrls] = useState([]);
  const [user, setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const fetchPersons = async () => {
      const imgRef = ref(storage, "company1/");
      const res = await listAll(imgRef);

      const urlPromises = res.items.map((imageRef) => getDownloadURL(imageRef));

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const _urls = await fetchPersons();
      console.log(_urls);
      setUrls(_urls);
    };

    loadImages();

    // const fetchNames = async () => {
    //   const refUsers = dbRef(db, "companies/");
    //   await get(child(refUsers, `company1/`))
    //     .then((snapshot) => {
    //       if (snapshot.exists()) {
    //         setUsers(snapshot.val());
    //         console.log(users);
    //       } else {
    //         console.log("No data available");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // };

    // fetchNames();
  }, []);

  return (
    <div className="form">
      <div className="form-containers">
        <div className="header">
          <button onClick={() => navigate("/addName")}>Add a person</button>
          <Link to="/">
            <button onClick={logout}>Logout</button>
          </Link>
        </div>
        <div className="body">
          <h1 className="thename">Logged in as:</h1>
          <h1 className="thename">{user?.email}</h1>
          {urls.map((url) => {
            return <img src={url} alt="image" key={url}></img>;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
