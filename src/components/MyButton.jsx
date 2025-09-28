import React from 'react'

function MyButton({onClick,text,type}) {
  return (
     <button 
              type={type} 
              className="w-full outline-none border-none bg-black text-white rounded-md font-semibold cursor-pointer hover:bg-gray-800 hover:text-black transition-all text-xl py-2 px-3"
    onClick={onClick}
    >
              {text}
            </button>
  )
}

export default MyButton
