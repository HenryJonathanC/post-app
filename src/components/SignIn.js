import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import './SignIn.css'
import { UserAuth } from '../AuthContext'
import { Link } from 'react-router-dom'


const SignIn = () => {
    const { googleSignIn, user }= UserAuth()

    const handleGoogleSignIn = async() => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='signIn'>
         {user?.displayName ?<> <h1>Welcome {user?.displayName}</h1>
            <p>Click here to view, edit, delete or create new posts</p> 
            <Link to='/'>
                <button style={{marginLeft: '10px'}} className="ui grey button">Home</button>
            </Link> </> : 
        <GoogleButton onClick={handleGoogleSignIn} />} 
    </div>
  )
}

export default SignIn