"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  const phone = "9616006456" // apna number
  const message = "Hello, I want to order a banner"

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Box */}
      {open && (
        <div className="bg-white w-72 shadow-xl rounded-2xl mb-3 overflow-hidden animate-fade-in">
          
          <div className="bg-green-500 text-white p-4">
            <h3 className="font-semibold">WhatsApp Chat</h3>
            <p className="text-sm">We usually reply in a few minutes</p>
          </div>

          <div className="p-4 text-sm text-gray-600">
            Hi 👋 <br />
            How can we help you today?
          </div>

          <div className="p-3">
            <a
              href={whatsappLink}
              target="_blank"
              className="block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Start Chat
            </a>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg text-2xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </button>

    </div>
  )
}