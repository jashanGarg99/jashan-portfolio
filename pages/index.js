import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Head>
        <title>Jashan Garg - Portfolio</title>
        <meta name="description" content="Jashan Garg - Creative Developer & Designer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              JG
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-600 ${
                    activeSection === section ? 'text-purple-600 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
              <div className="px-4 py-4 space-y-2">
                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section)
                      setMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg capitalize transition-all duration-300 hover:text-purple-600 hover:bg-purple-50 ${
                      activeSection === section ? 'text-purple-600 bg-purple-50 font-semibold' : 'text-gray-600'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/jashan.png"
                  alt="Jashan Garg"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                  width={160}
                  height={160}
                  priority
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Jashan Garg
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Creative Developer & Designer crafting digital experiences that inspire and innovate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            {/* <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Download CV
            </button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-6 py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I'm Jashan Garg, a passionate developer and designer with a love for creating beautiful, 
                functional, and user-centered digital experiences. I believe that design is about more than just 
                making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in modern web technologies and a keen eye for emerging design trends, 
                I'm always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600">Available for projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600">Remote work ready</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Frontend Development</h3>
              <div className="space-y-4">
                {['React.js', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Backend Development</h3>
              <div className="space-y-4">
                {['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Firebase'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold text-pink-600 mb-6">Design & Tools</h3>
              <div className="space-y-4">
                {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Tailwind CSS', 'Git', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Small Mobile Engine",
                description: "A mobile engine repair and maintenance service app with real-time tracking",
                tech: ["NextJS", "Node.js", "MongoDB"],
                image: "/engine.png",
                color: "from-purple-500 to-pink-500",
                href: "https://sunnysmallengine.ca"
              },
              {
                title: "Service Booking Web App",
                description: "A full-stack service booking application with user authentication and real-time updates",
                // description: "A modern e-commerce solution with React, Node.js, and MongoDB",
                tech: ["NextJS", "Node.js", "MongoDB"],
                image:"/booking.png",
                color: "from-purple-500 to-pink-500",
                href: "https://jssmallengine.ca"
              },
              {
                title: "E-Commerce Platform",
                description: "A modern e-commerce solution with React, Node.js, and MongoDB",
                tech: ["React", "Node.js", "MongoDB"],
                image: "/ecommerce.png",
                color: "from-purple-500 to-pink-500",
                href: "https://truepods.vercel.app"
              },
              {
                title: "Online IDE",
                description: "A collaborative online IDE with real-time code editing and execution",
                tech: ["React", "MongoDB", "Viet"],
                image: "/ide.png",
                color: "from-blue-500 to-cyan-500",
                href: "https://jashangarg99.github.io/ide/"
              },
              {
                title: "Portfolio Website",
                description: "Responsive portfolio built with Next.js and Tailwind CSS",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
                image: "/portfolio.png",
                color: "from-pink-500 to-rose-500",
                href: "https://truepods.vercel.app"
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather information with beautiful UI",
                tech: ["React", "OpenWeather API", "Tailwind CSS"],
                image: "/weather.png",
                color: "from-green-500 to-emerald-500",
                href: "https://weather-app-chi-orcin-34.vercel.app/"
              }
              // {
              //   title: "Social Media App",
              //   description: "Full-stack social platform with authentication",
              //   tech: ["React", "Express", "PostgreSQL"],
              //   color: "from-orange-500 to-red-500",
              //   href: "https://truepods.vercel.app"
              // },
              // {
              //   title: "AI Chat Interface",
              //   description: "Modern chat interface with AI integration",
              //   tech: ["Next.js", "OpenAI API", "Tailwind"],
              //   color: "from-indigo-500 to-purple-500",
              //   href: "https://truepods.vercel.app"
              // }
            ].map((project, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* <div className={`h-48 bg-gradient-to-r ${project.color}`}></div> */}
                <div className="h-48 overflow-hidden">
                  <Image 
                    className="w-full h-full object-cover" 
                    src={project.image} 
                    alt={project.title}
                    height={400} 
                    width={400}
                    priority={index < 2}
                  />
                </div>
                <div className="p-6">
                  {/* <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3> */}
                  <a className='text-xl font-bold text-gray-800 mb-3' target='_blank' href={project.href}>{project.title}</a>
                  {/* <a className='text-gray-600 mb-4 text underline' href={project.href}>{project.description}</a> */}
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">gargjashan96@gmail.com</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Punjab, India</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeM2AhR0uTwGi6w6hDxBFb3vEHNhgZlIAT_-taXaZmOdpWxrQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a 
              href="https://wa.me/917973760018?text=Hi%20Jashan!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Jashan Garg
          </div>
          <p className="text-gray-400 mb-4">
            Creating digital experiences that inspire and innovate
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 Jashan Garg. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
