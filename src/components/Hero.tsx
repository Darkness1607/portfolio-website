import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Code size={64} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Farid Otajonov
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Frontend Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              I craft beautiful, responsive web experiences with modern technologies.
              Passionate about clean code, user-centered design, and bringing ideas to life.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button   onClick={() => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Farid_Otajonov_Resume.pdf';
    link.click();
  }}
   className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <Download size={20} /> 
              <span>Download Resume</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Darkness1607"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/farid-dev"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable, scalable, and efficient code that follows best practices.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful Design</h3>
              <p className="text-gray-600">Creating visually appealing interfaces with attention to detail and user experience.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Performance</h3>
              <p className="text-gray-600">Optimizing applications for speed and performance across all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;