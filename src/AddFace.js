import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function AddFace() {

    const params = useParams()

    return (
        <div>
            add a face image of {params.name}
        </div>
    )
}

export default AddFace;