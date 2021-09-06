 import React from 'react'
import Auth from './useAuth'
 
 const Login = () => {
     const auth=Auth();
     const handelSignIn=()=>{
         auth.signInWithGoogle()
         .then(res=>{
             window.location.pathname='/oder';
         })
     }

     const handelSignOut=()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname='/shop';
        })
    }
    
     
     return (
         <div>
             <h1> Hello I am sojib </h1>
            {auth.user ? <button onClick={handelSignOut}>signOut</button> :
                
                <button onClick={ handelSignIn}>sign in with google</button>}
         </div>
     )
 }
 
 export default Login
 
 
