import React from 'react'

function Confirm({ image, name }) {

    return (
        <div className="test">
            <img id="imgDisplay" alt="" src={URL.createObjectURL(image)} style={{ maxWidth:"35%", maxHeight:"35%"}}/><br/>
            <div style={{color: "white"}}>{ name }</div>
        </div>
    )
}

export default Confirm
