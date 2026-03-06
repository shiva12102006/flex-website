"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* 1️⃣ Map + Social */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Our Location
          </h2>

          {/* Google Map */}
          <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14052.372719501482!2d82.39614431840499!3d26.757962105268113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990bab5d7487c8b%3A0x84ce55aab8a2de2a!2sAmorha%20Sabzi%20Mandi!5e1!3m2!1sen!2sin!4v1772632836449!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
         

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition duration-300 hover:scale-110 cursor-pointer"
                >
                  <Icon className="text-white" />
                </div>
              )
            )}
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {["Home", "Shop", "About Us", "Contact", "Blog"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-green-500 cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* 3️⃣ Customer Services */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Customer Service
          </h2>
          <ul className="space-y-3">
            {[
              "My Account",
              "Order Tracking",
              "Wishlist",
              "Returns",
              "Shipping Info",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-green-500 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Payment & Policies */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Payment & Policies
          </h2>
          <ul className="space-y-3">
            {[
              "Secure Payment",
              "Privacy Policy",
              "Terms & Conditions",
              "Refund Policy",
              "FAQs",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-green-500 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Payment Icons */}
          <div className="flex gap-3 mt-6">
            <img src="/visa.png" className="h-6" />
            <img src="/mastercard.png" className="h-6" />
            <img src="/upi.png" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© 2026 Sanvika. All rights reserved.</p>
        <p className="mt-1">Designed & Developed by Shiva Rav</p>
      </div>
    </footer>
  );
}