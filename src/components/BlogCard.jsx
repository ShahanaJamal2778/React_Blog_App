import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({imagelink,title,description,date}) {
  return (
    <Link to={"/"} className='rounded-lg p-2 bg-neutral-50 cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-in-out'>
      <img src="https://ychef.files.bbci.co.uk/1280x720/p014pywf.jpg" alt=""
        className='w-full h-50 object-cover rounded-md'
      />
      <h2 className='text-xl mt-2 font-semibold text-neutral-700'>Nature</h2>
      <p className='text-sm   text-neutral-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui architecto nobis nostrum voluptatem sequi!</p>
    </Link>
  )
}

export default BlogCard
