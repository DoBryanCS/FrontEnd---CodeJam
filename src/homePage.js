import React, { useEffect, useState } from "react";
import { storage, db } from "./firebase-config.js";
import { ref as dbRef, get, child } from "firebase/database";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function HomePage() {
  const [users, setUsers] = useState("");
  const [urls, setUrls] = useState([]);

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
    <div id="img-wrapper">
      {urls.map((url) => {
        return <img src={url} alt="image" key={url}></img>;
      })}
    </div>
  );
}

export default HomePage;
