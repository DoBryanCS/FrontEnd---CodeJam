import React from 'react'

function Confirm({ image, name }) {

    return (
        <div className="test">
            <img className="confirmPhoto" id="imgDisplay" alt="" src={URL.createObjectURL(image)}/><br/>
            <div className="confirmName">{ name }</div>
        </div>
    )
}

export default Confirm
