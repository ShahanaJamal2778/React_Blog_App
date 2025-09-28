import React from 'react'
import MyTextarea from '../components/MyTextarea'
import Navbar from '../components/Navbar'
import MyInput from '../components/Myinput'
import MyButton from '../components/MyButton'


function CreateBlog() {
  return (
    <div>
      <Navbar/>
    <div className='max-w-4xl bg-neutral-100 mx-auto mt-10 flex flex-col gap-10 items-center'>
      <MyInput onChange={(e)=>{}} value={""} type={"url"} placeholder={"Title"}/>
          <MyTextarea onChange={(e)=>{}} value={""} placeholder={"Whats on your mind..."}/>
          <MyButton onChange={()=>{}} text={"Upload Blog"} type={"submit"} />
    </div></div>
  )
}

export default CreateBlog
