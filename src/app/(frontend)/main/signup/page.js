"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup(){

  const router = useRouter()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const res = await fetch("/api/auth/resgister",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    })

    if(res.ok){
      router.push("/main/signin")
    }
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
          >
            Signup
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account? 
          <span
            onClick={()=>router.push(" /main/signin")}
            className="text-blue-500 cursor-pointer ml-1"
          >
            Login
          </span>
        </p>

      </div>

    </div>
  )
}