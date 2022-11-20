import React from "react";
import { useState } from 'react';
import SignUpInfo from "./SignUpInfo";
import SubmitPhotos from "./SubmitPhotos";
import Confirm from "./Confirm"
import "./App.css"
import { getDatabase, ref } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqu8MFLwT_8w8519gtrrUmkxTIIMVAYJQ",
  authDomain: "codejam-bbc52.firebaseapp.com",
  databaseURL: "https://codejam-bbc52-default-rtdb.firebaseio.com",
  projectId: "codejam-bbc52",
  storageBucket: "codejam-bbc52.appspot.com",
  messagingSenderId: "836253921935",
  appId: "1:836253921935:web:a2b8672035b4d19131f6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function AddName() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState(0)


  const FormTitles = ["Enter Name", "Import Photos", "Confirm"];

  function submitForm() {
    if (name && image) {
      // const database = getDatabase();
      const refUsers = ref(database, '/companies/company1');

      //let newUserRef = refUsers.push().set({ name: name })
      //firebase.database(app).ref().push({name: name})
      //const id = newUserRef.key
      //console.log(id)
    }
  }

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo name={name} setName={setName} />
    } else if (page === 1) {
      return <SubmitPhotos setImage={setImage} />
    } else {
      return <Confirm name={name} image={image} />
    }
  }

  return (
    <div className="form">

      <div className="progressbar">
        <div
          style={{ width: `${(page / 2) * 100}%` }}
        ></div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1 className="thename">{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>

          {
            page !== FormTitles.length - 1 ?
              <button
                disabled={page === FormTitles.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button> :
              <button onClick={submitForm}>Submit</button>
          }

        </div>
      </div>

    </div>
  )
}

export default AddName