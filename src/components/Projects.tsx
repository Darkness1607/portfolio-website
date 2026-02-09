import React from 'react';
import { ExternalLink, Github, Star, Users, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.',
      image: '/2.png',
      technologies: ['Html', 'Tailwind CSS', 'Javascript'],
      liveUrl: 'https://e-commerce1607.netlify.app/',
      githubUrl: '#',
      stats: { stars: 124, forks: 32, contributors: 5 }
    },
    {
      id: 2,
      title: 'Netflix Clone',
      description: 'A full-featured Netflix clone with user authentication, movie streaming UI, dynamic categories, and responsive design for all devices.',
      image: '/1.png',
      technologies: ['Html', 'Tailwind CSS', 'Javascript'],
      liveUrl: 'https://netfliks-clone16.netlify.app/',
      githubUrl: '#',
      stats: { stars: 89, forks: 21, contributors: 3 }
    },
    {
      id: 3,
      title: 'Amazon Clone',
      description: 'A scalable e-commerce platform inspired by Amazon, featuring product listings, cart functionality, checkout flow, and clean user interface.',
      image: '/3.png',
      technologies: ['Html', 'Tailwind CSS', 'Javascript'],
      liveUrl: 'https://amazon-clone-16.netlify.app/',
      githubUrl: '#',
      stats: { stars: 67, forks: 15, contributors: 2 }
    },
    {
      id: 4,
      title: 'Youtube Clone',
      description: 'A YouTube-inspired video streaming app with dark mode support, trending videos section, responsive design, and embedded video player integration.',
      image: '/4.png',
      technologies: ['Html', 'Tailwind CSS', 'Javascript'],
      liveUrl: 'https://youtube-clone1607.netlify.app/',
      githubUrl: '#',
      stats: { stars: 45, forks: 12, contributors: 1 }
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media management with sentiment analysis, engagement tracking, and automated reporting.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { stars: 156, forks: 43, contributors: 7 }
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout tracking, progress visualization, and social sharing features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { stars: 78, forks: 19, contributors: 4 }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star size={16} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch size={16} />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{project.stats.contributors}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;