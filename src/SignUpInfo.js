import React from 'react'

function SignUpInfo({formData, setFormData}) {
  return (
    <div className="sign-up-container">
        <input type="text" placeholder="Name" value={formData.name} onChange={(event) => setFormData({...formData, name: event.target.value})}/>
    </div>
  )
}

export default SignUpInfo