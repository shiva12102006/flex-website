"use client"

import { useState } from "react"

export default  function AddToCart() {
   const images = [
    "/sanvi/banner1.jpg",
    "/sanvi/banner2.jpg",
    "/sanvi/banner1.jpg",
  ]

  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-400">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - IMAGES */}
        <div className="flex gap-4">
          
          {/* Small Images */}
          <div className="flex flex-col gap-3">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="poster"
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-cover border cursor-pointer hover:border-black"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt="Main Poster"
              className="w-full h-[450px] object-cover border rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Premium Flex Poster Design
          </h1>

          <p className="text-gray-600 mb-4">
            High quality custom flex poster printing with waterproof material.
            Perfect for shop branding, events, and advertising.
          </p>

          <p className="text-2xl font-semibold text-green-600 mb-4">
            ₹499
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-500">
              Add to Cart
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Product Details:</h2>
            <ul className="list-disc ml-5 text-gray-600 space-y-1">
              <li>Size: Custom Available</li>
              <li>Material: Waterproof Flex</li>
              <li>Printing: HD Quality</li>
              <li>Delivery: 3-5 Working Days</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
