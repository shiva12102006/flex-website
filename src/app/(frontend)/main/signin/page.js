"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext" // ✅ import auth context

export default function signin() {

  const router = useRouter()
  const { login } = useAuth() // ✅ get login function

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const handleLogin = async (e) => {
  e.preventDefault()

  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const data = await res.json()

  if(res.ok && data.success){

    // ✅ save user using context (this also updates navbar instantly)
    login({
      name: data.name,
      role: data.role
    })

    if(data.role === "ADMIN"){
      router.push("/admin")
    }else{
      router.push("/")
    }

  }else{
    alert(data.error)
  }
}

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <span
            onClick={() => router.push("/main/signup")}
            className="text-blue-500 cursor-pointer ml-1"
          >
            Signup
          </span>
        </p>

      </div>

    </div>
  )
}