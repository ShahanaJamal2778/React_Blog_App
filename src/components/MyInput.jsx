import React from 'react'

function MyInput({onChange,value,type,placeholder}) {
  return (
   <input 
              type={type} 
              placeholder={placeholder} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none"
              onChange={onChange}
              value={value}
            />
  )
}

export default MyInput
