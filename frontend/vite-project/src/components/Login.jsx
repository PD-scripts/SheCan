import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication - just set logged in to true
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Navigation */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">She</span>
                </div>
              </div>
              <div>
                <h1 className="text-white text-lg font-bold">She Can Foundation</h1>
                <p className="text-gray-400 text-xs">www.shecanfoundation.org</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-red-500 hover:text-red-400 font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white">Our Story</a>
              <a href="#" className="text-gray-300 hover:text-white">Our Certificate</a>
              <a href="#" className="text-gray-300 hover:text-white">Donate</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen">
        {/* Left Side - Mission & Information */}
        <div className="hidden lg:flex lg:w-1/2 bg-black p-12 text-white relative">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
          
          <div className="relative z-20 flex flex-col justify-center max-w-lg">
            {/* Mission Statement */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 leading-tight text-white">
                Together, we can break down barriers and 
                <span className="text-orange-500"> empower women</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                She Can Foundation is an NGO, registered under the Indian Society Registration Act of 1860, 
                dedicated to uplifting and empowering underprivileged women. Our mission is to provide education, 
                training, and resources to help women from marginalized communities overcome obstacles and achieve their full potential.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">📚</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Education & Training</h4>
                  <p className="text-gray-400">Providing quality education and skill development programs to empower women with knowledge and capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">🏥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Healthcare Access</h4>
                  <p className="text-gray-400">Ensuring healthcare and wellness support for women in marginalized communities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Economic Empowerment</h4>
                  <p className="text-gray-400">Creating opportunities for financial independence and economic growth.</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-orange-500 pl-6 mb-8">
              <p className="text-gray-300 italic text-lg">
                "We work to promote gender equality, increase access to healthcare and education, 
                and provide opportunities for economic growth and development."
              </p>
            </div>

            {/* Call to Action */}
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-fit">
              JOIN US
            </button>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-md w-full space-y-8">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold">She</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white">She Can Foundation</h2>
              <p className="text-gray-400 text-sm">Empowering Women • Building Futures</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                {isSignup ? 'Join Our Mission' : 'Welcome Back'}
              </h3>
              <p className="text-gray-400 text-lg">
                {isSignup 
                  ? 'Create your account to support women empowerment and help make a real impact in the lives of women.' 
                  : 'Access your intern dashboard and be part of an organization dedicated to creating a more equitable society.'
                }
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                {isSignup && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="appearance-none relative block w-full px-4 py-3 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-600 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {isSignup ? 'JOIN OUR MISSION' : 'ACCESS DASHBOARD'}
                </button>
              </div>

              <div className="text-center pt-4">
                <button
                  type="button"
                  className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup 
                    ? 'Already have an account? Sign in' 
                    : "New to She Can Foundation? Join us"
                  }
                </button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">🔒</span>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Verified NGO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🇮🇳</span>
                  <span>Registered in India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📄</span>
                  <span>Society Act 1860</span>
                </div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-300 text-sm italic mb-2">
                "Join us in our mission to create a world where every woman has the opportunity to thrive and succeed."
              </p>
              <p className="text-orange-500 text-xs font-semibold">
                - REETA MISHRA, Founder & President, She Can Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;