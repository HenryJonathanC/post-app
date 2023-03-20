import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { UserAuth } from '../AuthContext'

const Header = () => {
    const { user, logOut }= UserAuth()

    const handleSignOut = async() => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='ui header bar'>
        <h1>Post App</h1>
        <div className="ui buttons">
            <Link to='/'>
                <button style={{marginLeft: '10px'}} className="ui grey button">Home</button>
            </Link>  
            {user?.displayName ? <Link to='/add'>
                <button style={{marginLeft: '10px'}} className="ui green button">Create new post</button>
            </Link> :<> </> }          
            {user?.displayName ? <button onClick={handleSignOut} style={{marginLeft: '10px'}} className="ui red button">Logout</button> :
                <Link to='/signIn'>
                    <button style={{marginLeft: '10px'}} className="ui blue button">Sign in</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Header