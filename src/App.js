import * as Components from './Components';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase-config"

 function App() {
     const [signIn, toggle] = React.useState(true);
     const navigate = useNavigate();

     const [errorMessage, setErrorMessage] = useState("");
     const [registerEmail, setRegisterEmail] = useState("")
     const [registerPassword, setRegisterPassword] = useState("")
     const [loginEmail, setLoginEmail] = useState("")
     const [loginPassword, setLoginPassword] = useState("")

     const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
         })
    }, [])

     const register = async (event) => {
        try {
            event.preventDefault();
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            navigate("/addName")
        } catch (error) {
            console.log(error.message)
            setErrorMessage(error.message)
        }
     };

     const login = async (event) => {
        try {
            event.preventDefault();
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            navigate("/homePage")
        } catch (error) {
            console.log(error.message)
            setErrorMessage(error.message)
        }
    };

    const logout = async () => {
        await signOut(auth);
      };
    

      return(
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Company' />
                      <Components.Input type='email' placeholder='Email' onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                      <Components.Input type='password' placeholder='Password' onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                      <Components.Button onClick={register}>Sign Up</Components.Button>
                      {errorMessage && <div className="error"><Components.Anchor>{errorMessage}</Components.Anchor></div>}
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' onChange={(event) => {setLoginEmail(event.target.value)}}/>
                       <Components.Input type='password' placeholder='Password' onChange={(event) => {setLoginPassword(event.target.value)}}/>
                       <Components.Button onClick={login}>Sign In</Components.Button>
                       {errorMessage && <div className="error"><Components.Anchor>{errorMessage}</Components.Anchor></div>}
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Verify</Components.Title>
                      <Components.Paragraph>
                            Detect unwelcome visitors by recognising faces that have previously been flagged, before alerting local security or management to the presence.                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Verify</Components.Title>
                        <Components.Paragraph>
                            Detect unwelcome visitors by recognising faces that have previously been flagged, before alerting local security or management to the presence.                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                            <h4> User Logged In: </h4>
                            {user?user.email:"Not logged in"}

                            <button onClick={logout}> Sign Out </button>
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default App;