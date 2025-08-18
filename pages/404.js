import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4">
      <Head>
        <title>404 - Page Not Found | Jashan Garg</title>
        <meta name="description" content="Page not found - Jashan Garg Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-2 shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  404
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          The page you're looking for seems to have wandered off into the digital void. 
          Don't worry, let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Back to Home
          </Link>
          <Link href="/#projects" className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            View Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link href="/#about" className="text-purple-600 hover:text-purple-700 transition-colors duration-300">
              About Me
            </Link>
            <Link href="/#skills" className="text-purple-600 hover:text-purple-700 transition-colors duration-300">
              Skills
            </Link>
            <Link href="/#projects" className="text-purple-600 hover:text-purple-700 transition-colors duration-300">
              Projects
            </Link>
            <Link href="/#contact" className="text-purple-600 hover:text-purple-700 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>💡 Pro tip: Use the navigation menu to explore different sections of my portfolio!</p>
        </div>
      </div>
    </div>
  )
}
