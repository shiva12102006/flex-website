"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext"; // ✅ import auth context

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  // ✅ get user and logout from context
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // context logout
    setOpenDropdown(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border border-green-200 shadow-md w-full mb-2">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/sanvi/logo1.png" alt="logo" height={60} width={60} />
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Shanvi <span>Arts</span>
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link href="/main/About" className="hover:text-green-500 transition">
              About
            </Link>

            <Link href="/main/servise" className="hover:text-green-500 transition">
              Services
            </Link>

            <Link href="/main/bloge" className="hover:text-green-500 transition">
              Blog
            </Link>

            <Link href="/main/contact" className="hover:text-green-500 transition">
              Contact
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="hover:text-green-500" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
                0
              </span>
            </Link>

            {/* Auth */}
            {!user ? (

              <div className="flex gap-3">

                <Link href="/main/signup">
                  <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                    Signup
                  </button>
                </Link>

                <Link href="/main/signin">
                  <button className="border px-4 py-1 rounded hover:bg-gray-100">
                    Signin
                  </button>
                </Link>

              </div>

            ) : (

              <div className="relative">

                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="font-semibold text-green-600 border px-3 py-1 rounded"
                >
                  {user.name}
                </button>

                {openDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">

                    <Link href="/profile">
                      <div
                        onClick={() => setOpenDropdown(false)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Profile
                      </div>
                    </Link>

                    <Link href="/orders">
                      <div
                        onClick={() => setOpenDropdown(false)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Orders
                      </div>
                    </Link>

                    <Link href="/dashboard">
                      <div
                        onClick={() => setOpenDropdown(false)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Dashboard
                      </div>
                    </Link>

                    <div
                      onClick={handleLogout}
                      className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </div>

                  </div>
                )}

              </div>

            )}

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="md:hidden bg-white shadow-lg">

          <div className="flex flex-col items-center space-y-4 py-6">

            <Link href="/main/About" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/main/servise" onClick={() => setIsOpen(false)}>
              Services
            </Link>

            <Link href="/main/bloge" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <Link href="/main/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link href="/main/cart" onClick={() => setIsOpen(false)}>
              Cart
            </Link>

            {!user ? (
              <>
                <Link href="/main/signup" onClick={() => setIsOpen(false)}>
                  Signup
                </Link>

                <Link href="/main/signin" onClick={() => setIsOpen(false)}>
                  Signin
                </Link>
              </>
            ) : (

              <div className="flex flex-col items-center gap-2">

                <p className="font-semibold text-green-600 text-lg">
                  {user.name}
                </p>

                <Link href="/admin/profile" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>

                <Link href="/admin/orders" onClick={() => setIsOpen(false)}>
                  Orders
                </Link>

                <Link href="/admin/dashboard" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>

                <button
                  onClick={()=>{
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="text-red-500"
                >
                  Logout
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </nav>
  );
}