import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {auth, provider } from '../../firebaseConfig';


function Login() {

    const[user,setUser] =useState(null);

    useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
        });
        return ()=> subscribe()
    },[])

    const handleLogin = async ()=>{
        let user = await signInWithPopup(auth,provider)
        console.log(user)
        setUser(user.user)
    }

    const handleSignOut =async()=>{
        await signOut(auth)
        setUser(null)
    }
  return (
    <div className='c1'>
     <div className='c2'>
        {
            user ?
            <div>
             <h2 id='t3'>Hey there, <span id='s1'>{user.displayName} !</span>  <br/>  It looks like you recently ordered <br/>
             Thank you for shopping with us! </h2>
             {/* <h1>Welcome {user.email}</h1> */}
             <img src = {user.photoURL} width='20%' alt='pic'/> <br/>
             <button onClick={handleSignOut}>Sign Out</button>
            </div>
            :
            
            <div>
                <h1 id='t1'>Thank You!</h1>
                <h2 id='t1'>Your order has been succesfully submitted !</h2>
                <h3 id='t2'>For Track your Order 
                    <br/> Please go to the login your ID where you can get the information.</h3>
            <button id='b1' onClick={handleLogin}>Log In</button>
            </div>
        
        }
        </div>
        </div>
  )
}

export default Login