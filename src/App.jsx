import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

export default function DIYANVenturesWebsite() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const properties = [
    {
      name: 'Lekki Luxury Apartment',
      status: 'Available',
      price: '₦120,000,000'
    },
    {
      name: 'Victoria Island Office Space',
      status: 'Occupied',
      price: '₦250,000,000'
    },
    {
      name: 'Ikoyi Duplex',
      status: 'Available',
      price: '₦180,000,000'
    }
  ];
  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} min-h-screen font-sans transition-colors duration-500`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-[100] px-5 py-3 rounded-2xl font-semibold shadow-2xl transition ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="/WhatsApp_Image_2026-05-28_at_10.41.36_AM-removebg-preview.png"
                  alt="DIYAN Ventures Logo"
                  className="w-28 h-28 object-contain bg-white rounded-2xl p-2 shadow-xl"
                />

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  DIYAN VENTURES & CO
                </h1>
              </div>
              <p className="mt-6 text-lg text-green-100 leading-relaxed">
                Professional Estate Management, Property Development, and Real Estate Solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
                >
                  Admin Login
                </button>
                <button className="bg-white text-green-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                  Contact Us
                </button>

                <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-green-900 transition">
                  Our Services
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Estate Building"
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop"
            alt="Property Management"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-green-900">About Us</h2>
            <p className="mt-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed">
              DIYAN VENTURES & CO is a trusted estate management company focused on delivering reliable property management, estate development, facility maintenance, and real estate consulting services.
            </p>

            <p className="mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed">
              We help property owners, investors, and tenants enjoy secure, organized, and professionally managed real estate services.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-900">Our Services</h2>
            <p className="mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg">
              Complete real estate and estate management solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: 'Estate Management',
                text: 'Professional management of residential and commercial estates.'
              },
              {
                title: 'Property Sales',
                text: 'Helping clients buy and sell properties with confidence.'
              },
              {
                title: 'Property Leasing',
                text: 'Reliable tenant sourcing and rental management services.'
              },
              {
                title: 'Facility Maintenance',
                text: 'Maintenance and upkeep for buildings and estates.'
              },
              {
                title: 'Real Estate Consulting',
                text: 'Expert guidance for real estate investments and development.'
              },
              {
                title: 'Property Development',
                text: 'Development of modern and secure residential properties.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} rounded-3xl p-8 shadow-lg border hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                  🏢
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-green-900">
                  {service.title}
                </h3>

                <p className="mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Why Choose DIYAN VENTURES & CO?</h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            {[
              'Trusted Professionals',
              'Quality Service Delivery',
              'Transparent Transactions',
              'Customer Satisfaction'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-3xl p-8"
              >
                <div className="text-5xl">✔️</div>
                <p className="mt-4 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-900">Contact Us</h2>
            <p className="mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg">
              Reach out to us for professional estate management services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            <div className="${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-green-900">Office Information</h3>

              <div className="mt-6 space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}">
                <p>📍 Lagos, Nigeria</p>
                <p>📞 +234 XXX XXX XXXX</p>
                <p>✉️ info@diyanventures.com</p>
              </div>
            </div>

            <div className="${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} rounded-3xl shadow-lg p-8">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                />

                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                ></textarea>

                <button className="bg-green-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-800 transition w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center gap-4 border-b border-gray-800 pb-6">
          <img
            src="/WhatsApp_Image_2026-05-28_at_10.41.36_AM-removebg-preview.png"
            alt="DIYAN Ventures Logo"
            className="w-20 h-20 object-contain bg-white rounded-2xl p-2"
          />

          <div>
            <h3 className="text-2xl font-bold text-white">
              DIYAN VENTURES & CO
            </h3>
            <p className="${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1">
              Estate Management & Real Estate Solutions
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 DIYAN VENTURES & CO. All Rights Reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Admin Dashboard */}
      {showLogin && !isLoggedIn && (
        <div className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-6">
          <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} w-full max-w-md rounded-3xl shadow-2xl p-8 transition-colors duration-500`}>
            <div className="text-center">
              <img
                src="/WhatsApp_Image_2026-05-28_at_10.41.36_AM-removebg-preview.png"
                alt="DIYAN Logo"
                className="w-24 h-24 mx-auto object-contain bg-white rounded-2xl p-2"
              />

              <h2 className="text-3xl font-bold mt-6 text-green-900">
                Admin Login
              </h2>

              <p className="mt-2 text-gray-500">
                Secure access to DIYAN dashboard
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" size={20} />

                <input
                  type="email"
                  placeholder="Admin Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white'} w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-green-700`}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-4 text-gray-400" size={20} />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white'} w-full border rounded-2xl pl-12 pr-14 py-4 outline-none focus:ring-2 focus:ring-green-700`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                onClick={() => {
                  if (
                    email === 'admin@diyanventures.com' &&
                    password === 'admin123'
                  ) {
                    setIsLoggedIn(true);
                    setShowLogin(false);
                    setDashboardOpen(true);
                  } else {
                    alert('Invalid admin credentials');
                  }
                }}
                className="w-full bg-green-900 text-white py-4 rounded-2xl font-semibold hover:bg-green-800 transition"
              >
                Login to Dashboard
              </button>

              <button
                onClick={() => setShowLogin(false)}
                className="w-full border border-gray-300 py-4 rounded-2xl font-semibold"
              >
                Cancel
              </button>
            </div>

            <div className="mt-6 bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-2xl p-4 text-sm">
              Demo Login:<br />
              Email: admin@diyanventures.com<br />
              Password: admin123
            </div>
          </div>
        </div>
      )}

      {dashboardOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">
          <div className="min-h-screen p-6 flex items-start justify-center">
            <div className="bg-white w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-green-900 text-white p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold">DIYAN Admin Dashboard</h2>
                  <p className="text-green-100 mt-1">
                    Estate Management Control Panel
                  </p>
                </div>

                <button
                  onClick={() => setDashboardOpen(false)}
                  className="bg-white text-green-900 px-4 py-2 rounded-xl font-semibold"
                >
                  Close
                </button>
              </div>

              {/* Dashboard Stats */}
              <div className="grid md:grid-cols-4 gap-6 p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}">
                {[
                  {
                    title: 'Total Properties',
                    value: '48'
                  },
                  {
                    title: 'Available Units',
                    value: '12'
                  },
                  {
                    title: 'Occupied Units',
                    value: '36'
                  },
                  {
                    title: 'Monthly Revenue',
                    value: '₦18M'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} rounded-3xl p-6 shadow-lg"
                  >
                    <p className="${darkMode ? 'text-gray-400' : 'text-gray-500'}">{item.title}</p>
                    <h3 className="text-3xl font-bold text-green-900 mt-3">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Property Table */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h3 className="text-2xl font-bold text-green-900">
                    Managed Properties
                  </h3>

                  <button className="bg-green-900 text-white px-5 py-3 rounded-2xl font-semibold">
                    + Add New Property
                  </button>
                </div>

                <div className="overflow-x-auto mt-8">
                  <table className="w-full border-collapse overflow-hidden rounded-2xl shadow-lg">
                    <thead>
                      <tr className="bg-green-900 text-white text-left">
                        <th className="p-4">Property Name</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {properties.map((property, index) => (
                        <tr
                          key={index}
                          className="border-b hover:${darkMode ? 'bg-gray-900' : 'bg-gray-50'}"
                        >
                          <td className="p-4 font-medium">{property.name}</td>
                          <td className="p-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-medium ${property.status === 'Available'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                              }`}>
                              {property.status}
                            </span>
                          </td>
                          <td className="p-4">{property.price}</td>
                          <td className="p-4 flex gap-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
                              Edit
                            </button>

                            <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tenant Section */}
              <div className="p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t">
                <h3 className="text-2xl font-bold text-green-900">
                  Recent Tenants
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    'Mr. Adeyemi Johnson',
                    'Mrs. Sarah Williams',
                    'TechNova Limited'
                  ].map((tenant, index) => (
                    <div
                      key={index}
                      className="${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} rounded-3xl p-6 shadow-md"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                        👤
                      </div>

                      <h4 className="mt-4 text-xl font-semibold text-gray-800">
                        {tenant}
                      </h4>

                      <p className="mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}">
                        Active Tenant
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
