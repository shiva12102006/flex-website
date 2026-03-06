"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border border-green-200 shadow-md w-full mb-2">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/sanvi/logo1.png" alt="logo" height={80} width={80} />
            <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
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
              <div className="flex items-center gap-3">

                <span className="font-semibold text-green-600">
                  {user.name}
                </span>

                <button
                  onClick={logout}
                  className="text-red-500 border px-3 py-1 rounded hover:bg-red-50"
                >
                  Logout
                </button>

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

            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/servise" onClick={() => setIsOpen(false)}>
              Services
            </Link>

            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link href="/cart">Cart</Link>

            {!user ? (
              <>
                <Link href="/signup">Signup</Link>
                <Link href="/signin">Signin</Link>
              </>
            ) : (
              <>
                <p className="font-semibold">{user.name}</p>
                <button onClick={logout} className="text-red-500">
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      )}

    </nav>
  );
}