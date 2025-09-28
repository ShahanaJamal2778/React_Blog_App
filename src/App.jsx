



import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/signup'
import Home from './pages/Home'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/singleblog:id" element={<SingleBlog/>}/>
        <Route path="/create" element={<CreateBlog/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
