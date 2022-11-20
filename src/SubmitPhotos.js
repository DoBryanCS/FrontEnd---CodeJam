import React from 'react'

function SubmitPhotos({ setImage }) {
  return (
    <div className="sign-up-container">
      <input accept=".jpg" type='file' id="imgInp"
        onChange={(e) => { setImage(e.target.files[0]) }}
      />

    </div>
  )
}

export default SubmitPhotos