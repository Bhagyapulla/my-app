import React from 'react'
import Lists from './components/Lists.jsx'
import Usestate from './components/Usestate.jsx'
import {BrowserRouter, Link, Router,Routes } from 'react-router-dom'
import Greet from './components/greet.jsx'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <nav>
        <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="greet">Greet</Link>
          <Link class="nav-link " to="events">Events</Link>
          <Link class="nav-link " to="use-state">Usestate</Link>
          <Link class="nav-link " to="lists">Lists</Link>
        </nav>
        <Routes>
            <Route path='greet' element={<Greet/>}/>
            <Route path='greet' element={<Events/>}/>
            <Route path='greet' element={<Usestate/>}/>
            <Route path='greet' element={<Lists/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router