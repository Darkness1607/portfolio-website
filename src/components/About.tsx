import React from 'react';
import { MapPin, Calendar, Award, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Html', level: 95 },
    { name: 'Css', level: 90 },
    { name: 'JavaScript', level: 50 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Figma', level: 75 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for various clients, collaborated with design teams, and optimized application performance.',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      description: 'Built interactive user interfaces, learned modern development practices, and contributed to multiple product launches.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate frontend developer with 1+ years of experience creating 
            exceptional digital experiences that combine beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get to Know Me</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-600" />
                <span className="text-gray-700">Tashkent, Uzbekistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-blue-600" />
                <span className="text-gray-700">1+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award size={20} className="text-blue-600" />
                <span className="text-gray-700">Master's Degree, IT Company</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target size={20} className="text-blue-600" />
                <span className="text-gray-700">Frontend Specialist</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a passionate frontend developer who loves turning complex problems into 
              simple, beautiful, and intuitive designs. When I'm not coding, you'll find me 
              exploring new technologies, contributing to open-source projects, or hiking 
              in the beautiful California mountains.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe that great user experiences are born from the perfect blend of 
              functionality and aesthetics. My goal is to build applications that not only 
              work flawlessly but also delight users at every interaction.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;