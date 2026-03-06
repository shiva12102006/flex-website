
import Cards from "@/app/components/cards"
import Image from "next/image";

const User = [
    {
        "name": "shiva",
        id: 1
    },
    {
        "name": "shiva",
        id: 1
    },
    {
        "name": "shiva",
        id: 1
    },
]

export default function Srevise() {
    return (

        <>

            
<div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-500 to-green-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Exceptional Services, Just For You
            </h1>
            <p className="mb-6 text-lg opacity-90">
              Bringing Quality & Convenience To Your Doorstep
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
                Shop Now
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative h-80 w-full">
            <Image
              src="/service/servise1.jpg"
              alt="Delivery"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "Fast Delivery",
            "Secure Payments",
            "Easy Returns",
            "24/7 Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="h-12 w-12 bg-green-100 rounded-full mb-4"></div>
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-sm text-gray-600">
                High quality professional service guaranteed.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHIPPING INFO */}
      <section className="bg-white py-12 px-6 shadow-inner">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>🚚 Free Shipping on Orders Over ₹999</div>
          <div>⏱ Delivery in 1-3 Business Days</div>
          <div>💵 Cash on Delivery Available</div>
        </div>
      </section>

      {/* RETURNS */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Easy Returns & Refunds
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-xl">
            30-Day Return Policy
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            Full Refund Guarantee
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            Easy Exchange Process
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-green-600">10,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">100%</h3>
            <p>Genuine Products</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">Best Price</h3>
            <p>Guarantee</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600">Trusted</h3>
            <p>By Top Brands</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              Amazing service and super fast delivery!
            </p>
            <p className="mt-4 font-semibold">— Rahul K.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">
              Return process was smooth and easy.
            </p>
            <p className="mt-4 font-semibold">— Sarah M.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            "How long does shipping take?",
            "What is your return policy?",
            "How do I track my order?",
            "Do you offer international shipping?",
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
            >
              {faq}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need Assistance?
        </h2>
        <div className="flex justify-center gap-6">
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg">
            Live Chat
          </button>
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg">
            Email Us
          </button>
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg">
            Call Us
          </button>
        </div>
      </section>

    </div>






        </>
    );



}