import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import './Add.css'

const Add = () => {
    const [newTitle, setNewTitle]= useState("")
    const [newPost, setNewPost]= useState("")
    const postsCollectionRef= collection(db, "posts")

    const createPost = async ()=>{
        // if(newTitle || newPost == ''){
        //    return alert("All fields are required")            
        // }
        await addDoc(postsCollectionRef, {Title: newTitle, Post: newPost})
      }

  return (
        <div className='add'>
          <h2>Create New Post</h2>
          <input className="title" placeholder='Title...' type='text' onChange={ e => setNewTitle(e.target.value)}/>
          <textarea className="content" placeholder='Post...' type='text' onChange={e => setNewPost(e.target.value)} />
          <Link to="/">
            <button type='submit' className="ui positive button" onClick={createPost}>Post</button>
          </Link>
      </div>
    
  )
}

export default Add