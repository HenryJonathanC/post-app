// import { useEffect, useState } from 'react';
import './App.css';
// import { db } from './firebase';
// import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc, } from 'firebase/firestore';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';


function App() {
  // const [posts, setPosts]= useState([])
  // const [newTitle, setNewTitle]= useState("")
  // const [newPost, setNewPost]= useState("")
  // const usersCollectionRef= collection(db, "posts")
  // const [updatedTitle, setUpdatedTitle] = useState("")


  // useEffect(()=>{
  //     const getPosts= async ()=>{
  //       const data= await getDocs(usersCollectionRef)
  //       setPosts(data.docs.map((doc)=> ({...doc.data(), id: doc.id })))
  //     }
  //     getPosts()
  // }, [])

  // const updatePost= async(id)=>{
  //   return (
  //     <div>
  //       <div className='header'>
  //         <input className="title" placeholder='Title...' type='text' onChange={ e => setUpdatedTitle(e.target.value)}/>
  //         {/* <textarea className="content" placeholder='Post...' type='text' onChange={e => setNewPost(e.target.value)} /> */}
  //         <button type='submit' className="ui positive button" onClick={createPost}>Post</button>
  //     </div>
  //     </div>
  //   )
  //   const userDoc=doc(db, "posts", id)
  //   await updateDoc(userDoc,  )
  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add' component={Add} />
          <Route path='/edit/:id' component={Edit} />
        </Switch>
      </Router>
      
      {/* <div className='header'>
          <input className="title" placeholder='Title...' type='text' onChange={ e => setNewTitle(e.target.value)}/>
          <textarea className="content" placeholder='Post...' type='text' onChange={e => setNewPost(e.target.value)} />
          <button type='submit' className="ui positive button" onClick={createPost}>Post</button>
      </div>
      {console.log(posts)}
      <hr/>
      <h1 className='heading'>Posts</h1>
      <div className='post'>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <hr />
              <div className='post_header'>
                <h3>{post.Title}</h3>
                <div className='icons'>  
                  <i onClick={() => deletePost(post.id)} style={{ color: 'darkred', paddingRight: '5px', cursor: 'pointer'}} className='trash alternate outline icon'></i>
                  <i onClick={() => updatePost(post.id)} style={{cursor: 'pointer'}} className='edit outline icon'></i>
                </div>
              </div>
              <p>{post.Post}</p>
            </div>
          )
        })}
      </div> */}
    </div>
  );
}

export default App;
