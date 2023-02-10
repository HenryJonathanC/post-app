import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import './Home.css'
import { UserAuth } from '../AuthContext'

const Home = () => {
    const { user }= UserAuth()
    const [posts, setPosts]= useState([])
    const postsCollectionRef= collection(db, "posts")


    useEffect(()=>{
        const getPosts= async ()=>{
          const data= await getDocs(postsCollectionRef)
          setPosts(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
        }
        getPosts()
    }, [])

    const deletePost= async(id)=>{
        const userDoc= doc(db, "posts", id)
        await deleteDoc(userDoc)
      }    

    return(
        <>
            {user?.displayName ? <><div className='home'>
                <h3 className='greet'>Hello {user?.displayName}</h3>
                <h1>Posts</h1>
                {posts.map((post) => {
                    return (
                        <div className='body' key={post.id}>
                            <hr/>
                            <div className='post_header'>
                                <h3>{post.Title}</h3>
                                <div className='icons'>  
                                    <i onClick={()=>deletePost(post.id)} style={{ color: 'darkred', paddingRight: '5px', cursor: 'pointer'}} className='trash alternate outline icon'></i>
                                    <Link to={{ pathname: `/edit/${post.id}`}}>
                                        <i style={{cursor: 'pointer'}} className='edit outline icon'></i>
                                    </Link>
                                </div>
                            </div>
                            <p>{post.Post}</p>
                        </div>
                    )
                })}      
            </div>
            <hr/>
            <Link to="/add">
                <button className="ui positive button" style={{margin: '10px', alignSelf: 'center'}}>Create new post</button>
            </Link> </> : <> <div className='home'>
                <h3 className='greet'>Hello guest(view only mode)</h3>
                <h1>Posts</h1>
                {posts.map((post) => {
                    return (
                        <div className='body' key={post.id}>
                            <hr/>
                            <h3>{post.Title}</h3>        
                            <p>{post.Post}</p>
                        </div>
                    )
                })}      
            </div>
            <hr/> </>}
            
        </>
    )
}

export default Home