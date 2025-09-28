import React from 'react'
import { Link } from "react-router-dom"
import { Menu, X, Home, PlusSquare, User } from "lucide-react"
import { useState } from "react"
function Navbar() {
  return (
  <nav className="w-full bg-white shadow-md px-4 sm:px-6 lg:px-12 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">Blogify</h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/"}>
            <Home size={20}/> Home
          </Link>
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/create"}>
            <PlusSquare size={20}/> Create
          </Link>
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/profile"}>
            <User size={20}/> Profile
          </Link>
        </ul>

        </div>
        </nav>
  )
}

export default Navbar
