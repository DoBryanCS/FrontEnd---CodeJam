import React from 'react'

function SignUpInfo({ name, setName }) {

  return (
    <div className="sign-up-container">
      <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  )
}

export default SignUpInfo