import React from "react";

function Contact() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-zinc-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center tracking-wide">
          Contact Smart Food
        </h1>
        <div className="grid md:grid-cols-2 gap-8 text-zinc-300 mb-10">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Restaurant Info</h2>
            <p>Smart Food</p>
            <p>Höchstädtplatz 6</p>
            <p>1200 Wien, Austria</p>
            <p>Email: hello@smartfood.at</p>
            <p>Phone: +43 1 234 5678</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Opening Hours</h2>
            <p>Monday – Friday: 11:00 – 22:00</p>
            <p>Saturday: 12:00 – 23:00</p>
            <p>Sunday: 12:00 – 21:00</p>
          </div>
        </div>
        <form className="space-y-6 mb-10">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Your Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 bg-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 rounded-xl text-black font-semibold tracking-wide transition-all"
          >
            Send Message
          </button>
        </form>
        <div className="w-full">
          <iframe
            title="Smart Food Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.453710899892!2d16.377460476561705!3d48.23992604525711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d075a64e99a97%3A0x5adbe0a7ad7d8ea4!2sFH%20Technikum%20Wien!5e0!3m2!1sen!2sat!4v1681667976715!5m2!1sen!2sat"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Contact;
