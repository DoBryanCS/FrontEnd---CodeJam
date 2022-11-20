import React from 'react'

function SubmitPhotos({ setImage }) {
  return (
    <div className="sign-up-container">
      <input accept="image/*" type='file' id="imgInp"
        onChange={(e) => { setImage(e.target.files) }}
      />

    </div>
  )
}

export default SubmitPhotos