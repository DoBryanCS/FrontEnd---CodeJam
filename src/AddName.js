import React from "react";
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

function AddName() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <form>
      <label>Add a person's name:
        <input type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={name} 
        />
      </label>
      <input type="submit" value="Next" onClick={()=> navigate("/addFace/" + name)} />
    </form>
  )
}

export default AddName
