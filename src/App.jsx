import { useState } from 'react'
import './App.css'
import React from 'react'
import Router from './components/Router';
import Test from './components/Test';
// import Header from './components/Header.jsx'
// import Maincomponent from './components/Maincomponent.jsx'
// import Footer from './components/Footer.jsx'
// import Fun from './components/Fun.jsx'
// import Conditional from './components/Conditional.jsx'
// import Lists from './components/Lists.jsx'
// import Usestate from './components/Usestate.jsx'
// import { Link, Router } from 'react-router-dom'
// import Greet from './components/greet.jsx'



function App(){
  // let style="title text"
  // let inlineStyle={
  //   color:'green',
  //   textAlign:'center',
  //   textdecoration:'underline'
    
  // }
  // let isDisabled=false;
  return(
    <>
       {/* <h1 className={style}>Welcome to resctjs</h1>
       <h2 style={{color:'blue',textAlign:'center'}}>Inline styling</h2>
       <h2 style={inlineStyle}>  inline styling using object</h2>

       <input type="text" placeholder='Enter here' disabled={isDisabled} />
       <button disabled={isDisabled}>{isDisabled? 'DisableButton':'submit'}</button>
       <Conditional/>
       <Lists/>
       <Usestate/> */}
       {/* <BrowserRouter></BrowserRouter>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNav">
        
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="greet">Greet</Link>
          <Link class="nav-link " to="events">Events</Link>
          <Link class="nav-link " to="use-state">Usestate</Link>
          <Link class="nav-link " to="lists">Lists</Link>
    </div>
  </div>
</nav>
<Router>
  <Router path='greet' element={<Greet/>}/>
  <Router path='greet' element={<Events/>}/>
  <Router path='greet' element={<Usestate/>}/>
  <Router path='greet' element={<Lists/>}/>
</Router>
<BrowserRouter/> */}
     {/* <Router/> */}
     <Test/>
     
      </>
    
  );
}
export default App;


