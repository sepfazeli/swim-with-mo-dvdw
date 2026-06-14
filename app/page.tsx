"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon to discuss your swimming journey.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-700">
            Swim with <span className="text-cyan-600">Mo</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 hover:scale-105"
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 opacity-70"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Dive Into Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Swimming Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
              Professional swim instruction for all ages and abilities. Build
              confidence, strength, and lifelong skills in the water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Classes
              </a>
              <a
                href="#contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-teal-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L50 10C100 20 200 40 300 46.7C400 53 500 47 600 43.3C700 40 800 40 900 46.7C1000 53 1100 67 1150 73.3L1200 80V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Meet Mo
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  With over 15 years of experience teaching swimmers of all
                  ages, Mo brings a passion for water safety and a gentle,
                  encouraging approach to every lesson.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Certified by the National Swimming School Association and
                  trained in advanced water rescue techniques, Mo creates a safe,
                  supportive environment where students build confidence and
                  develop proper technique.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're a nervous beginner or looking to refine your
                  competitive stroke, Mo tailors each session to your unique
                  goals and pace.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl h-96 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                  MO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Swimming Programs
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Personalized instruction for every skill level
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🧒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kids Classes
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fun, engaging lessons for children ages 3-12. Build water
                  confidence, learn essential safety skills, and develop proper
                  swimming techniques through games and structured practice.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Small group sizes
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Age-appropriate methods
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Progress tracking
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Adult Lessons
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Never too late to learn! Overcome fear, improve fitness, or
                  master advanced techniques. Private and semi-private sessions
                  available in a judgment-free environment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Beginner to advanced
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Flexible scheduling
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Personalized approach
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🏊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Competitive Training
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Refine your stroke technique, improve speed and endurance, and
                  prepare for competitions. Video analysis and personalized
                  training plans included.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Stroke refinement
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Race preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Performance metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Making Waves
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                See our swimmers in action
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative h-64 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  🏊‍♀️
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  🧒
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-teal-500 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  🌊
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  🏅
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  👨‍👩‍👧‍👦
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  💪
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Swimmers Say
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Real stories from real students
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Mo is absolutely wonderful with kids! My daughter was terrified
                  of water, and now she can't wait for her swimming lessons. The
                  progress in just 3 months has been incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    SP
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Peterson</p>
                    <p className="text-gray-600 text-sm">Parent of 6-year-old</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "I'm 42 and never learned to swim. Mo made me feel comfortable
                  from day one. Patient, encouraging, and professional. I can now
                  swim confidently and enjoy pool time with my family!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    MJ
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Marcus Johnson</p>
                    <p className="text-gray-600 text-sm">Adult beginner</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Mo helped me shave 5 seconds off my 100m time! The technique
                  analysis and personalized drills made all the difference. Highly
                  recommend for competitive swimmers."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    EC
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Emily Chen</p>
                    <p className="text-gray-600 text-sm">Competitive swimmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ready to Dive In?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Let's start your swimming journey today
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">📍</span>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-cyan-100">
                          Aquatic Center, 123 Pool Lane
                          <br />
                          Marina Bay, CA 94000
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">📞</span>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-cyan-100">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">✉️</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-cyan-100">hello@swimwithmo.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">🕒</span>
                      <div>
                        <p className="font-semibold">Hours</p>
                        <p className="text-cyan-100">
                          Mon-Fri: 6am - 8pm
                          <br />
                          Sat-Sun: 8am - 6pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your swimming goals..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-3xl font-bold mb-4">
              Swim with <span className="text-cyan-400">Mo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building confidence, one stroke at a time
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Swim with Mo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}