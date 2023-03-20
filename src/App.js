// import { useEffect, useState } from 'react';
// import { db } from './firebase';
// import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc, } from 'firebase/firestore';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Header from './components/Header';
import { AuthContextProvider } from './AuthContext';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' component={Add} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/signIn' component={SignIn} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
