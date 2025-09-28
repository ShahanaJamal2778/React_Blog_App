import React from 'react'

function MyTextarea({onChange,value,placeholder}) {
  return (
    <textarea
              
              placeholder={placeholder} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none"
              onChange={onChange}
              value={value}
              rows={6}
            />
  )
}

export default MyTextarea
