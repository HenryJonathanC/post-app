import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../firebase'
import './Edit.css'

const Edit = () => {
    const[posts, setPosts] =useState([])
    const [newPost, setNewPost] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const {id}=useParams()
    const postsCollectionRef= collection(db, "posts")

    useEffect(()=>{
        const getPosts= async ()=>{
          const data= await getDocs(postsCollectionRef)
          setPosts(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getPosts()
    }, [posts])

    const editPost = async(id) =>{
        const postDoc= doc(db, "posts", id)
        const newFields = {
            Title: newTitle,
            Post: newPost
        }
        await updateDoc(postDoc, newFields)
    }

  return (
    <div> 
        {posts.map((post) => {
            if(post.id === id){
                console.log(post)
                return (
                    <div className='edit' key={post.id}>
                        <h2>Edit Post</h2>
                        <input className="title" placeholder='New title...' type='text' onChange={ e => setNewTitle(e.target.value)}/>
                        <textarea className="content" placeholder='New post...' type='text' onChange={e => setNewPost(e.target.value)} />
                        <Link to="/">
                            <button type='submit' className="ui positive button" onClick={() => editPost(post.id)}>Post</button>
                        </Link>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Edit