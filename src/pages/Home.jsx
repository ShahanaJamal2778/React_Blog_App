import React from 'react'
import Blogcard from '../components/BlogCard'
import MyInput from '../components/Myinput'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
    <Navbar/>
        <div className='max-w-4xl bg-neutral-100 mx-auto mt-10 flex flex-col gap-10 items-center'>
      <MyInput onChange={(e)=>{}} value={""} type={"search"} placeholder={"search.."}/>
        <div className='w-full grid  grid-cols-3 gap-4'>
          <Blogcard/>
          <Blogcard/>
          <Blogcard/>
        </div>
    </div></div>
  )
}

export default Home
