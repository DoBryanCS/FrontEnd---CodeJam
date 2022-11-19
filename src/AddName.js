import React from "react";
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./SubmitPhotos";
import "./App.css"


function AddName() {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
      name: "",
    });

    const FormTitles = ["Enter Name", "Import Photos"];

    const PageDisplay = () => {
      if (page === 0) {
        return <SignUpInfo formData={formData} setFormData={setFormData}/>
      } else {
        return <PersonalInfo />
      }
    }
  return (
    <div className="form">

      <div className="progressbar">
        <div
        style = {{ width: page === 0 ? "50%" : "100%"}}
        ></div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1 className="thename">{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled = {page == 0}
            onClick = {() => {
            setPage((currPage) => currPage - 1);
            }}
            >
            Prev
            </button>
          <button
            disabled = {page == FormTitles.length - 1}
            onClick = {() => {
              setPage((currPage) => currPage + 1);
            }}
            >
            Next
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default AddName