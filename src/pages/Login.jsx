import React, { useState } from 'react'
import MyInput from '../components/Myinput';
import MyButton from '../components/MyButton.jsx';
function Login() {
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left: Subscribe Form */}
        <div className="p-8 ">
          <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
          <p className="text-gray-600 mb-6">
            Sign up to get latest news, updates and special offers.
          </p>

          <form className="space-y-4">
            <MyInput onChange={(e)=>{setEmail(e.target.value)}} value={email} type={"email"} placeholder={"shaman@gmail.com"}/>
            <MyInput onChange={(e)=>{setPassword(e.target.value)}} value={password} type={"text"} placeholder={"***********"}/>
            <MyButton onChange={()=>{console.log(email,password)}} text={"Login"} type={"submit"} />
            
          </form>

          <p className="text-xs text-gray-500 mt-4">You can unsubscribe at any time.</p>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Subscribe" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
