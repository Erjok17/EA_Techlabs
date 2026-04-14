import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ArrowRight,
  X,
  Github
} from 'lucide-react';
import { useState } from 'react';
import { 
  laneVcImage, 
  chiHairluxImage, 
  handcraftedImage,
} from '../assets/images';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'website' | 'mobile' | 'data';
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  features: string[];
  challenge?: string;
  solution?: string;
  date?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Lane VC Investor Portal",
    description: "A comprehensive investor portal for venture capital management with portfolio tracking and analytics.",
    category: "website",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Render", "JWT Auth"],
    liveUrl: "https://lane-vc-portal.onrender.com/",
    image: laneVcImage,
    features: [
      "Investor dashboard with portfolio overview",
      "Real-time investment tracking",
      "Performance analytics and reporting",
      "Secure authentication system",
      "Document management",
      "Notification system"
    ],
    challenge: "Create a secure, user-friendly portal for investors to track their VC investments and portfolio performance.",
    solution: "Built a full-stack application with role-based authentication, real-time data updates, and comprehensive analytics dashboard.",
    date: "2024"
  },
  {
    id: 2,
    title: "Chi Hairlux - Premium Wig Store",
    description: "E-commerce platform for premium wig sales with product catalog, featured products, and seamless shopping experience.",
    category: "website",
    techStack: ["React", "Vercel", "CSS3", "Responsive Design", "Context API"],
    liveUrl: "https://chi-hairlux.vercel.app",
    image: chiHairluxImage,
    features: [
      "Product catalog with filtering",
      "Featured products showcase",
      "Mobile-responsive design",
      "Contact and about sections",
      "Product ratings and reviews",
      "Fast loading optimization"
    ],
    challenge: "Create an elegant, fast-loading e-commerce presence for a Nigerian wig brand targeting local customers.",
    solution: "Developed a responsive product showcase with focus on visual appeal, easy navigation, and mobile-first design.",
    date: "2024"
  },
  {
    id: 3,
    title: "Handcrafted Haven",
    description: "Artisan marketplace showcasing handmade products with elegant design and smooth user experience.",
    category: "website",
    techStack: ["React", "Vercel", "Modern CSS", "Responsive Design", "Framer Motion"],
    liveUrl: "https://handcrafted-haven22.vercel.app/",
    image: handcraftedImage,
    features: [
      "Product gallery with filtering",
      "Clean, modern UI design",
      "Fast loading performance",
      "Fully responsive layout",
      "Category organization",
      "Smooth animations"
    ],
    challenge: "Build a visually appealing platform to showcase handmade artisan products and attract customers.",
    solution: "Created a gallery-style website with smooth animations, intuitive navigation, and focus on product presentation.",
    date: "2024"
  },
//   {
//     id: 4,
//     title: "Mobile App Project",
//     description: "Native mobile application developed in Android Studio with full functionality and modern UI.",
//     category: "mobile",
//     techStack: ["Android Studio", "Java/Kotlin", "SQLite", "REST APIs", "Material Design"],
//     image: mobileAppImage,
//     features: [
//       "Native Android development",
//       "Offline data storage",
//       "User authentication",
//       "API integration",
//       "Push notifications",
//       "Modern Material Design UI"
//     ],
//     challenge: "Develop a fully functional native Android app with offline capabilities and smooth user experience.",
//     solution: "Built using Android Studio with local SQLite database, REST API integration, and modern Material Design principles.",
//     date: "2024"
//   }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'website' | 'mobile' | 'data'>('all');

  const filteredProjects = portfolioItems.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-blue to-electric-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Real projects that showcase my skills and expertise
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: 'all', label: 'All Projects' },
              { value: 'website', label: 'Websites' },
              { value: 'mobile', label: 'Mobile Apps' },
              { value: 'data', label: 'Data Systems' }
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value as any)}
                className={`px-5 py-2 rounded-full capitalize transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-electric-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No projects found in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div 
                    className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-dark-blue bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <span className="bg-white text-dark-blue px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Click to view details
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-bold text-dark-blue">{project.title}</h2>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4 pt-4 border-t">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-electric-blue hover:text-dark-blue font-medium transition flex items-center gap-1"
                      >
                        View Details <ArrowRight size={16} />
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-electric-blue transition flex items-center gap-1"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80 bg-gray-100">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <h2 className="text-2xl md:text-3xl font-bold text-dark-blue">
                  {selectedProject.title}
                </h2>
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full capitalize">
                  {selectedProject.category}
                </span>
              </div>
              
              {selectedProject.date && (
                <p className="text-sm text-gray-400 mb-4">Completed: {selectedProject.date}</p>
              )}
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              {selectedProject.challenge && (
                <div className="mb-6">
                  <h3 className="font-semibold text-dark-blue text-lg mb-2">The Challenge</h3>
                  <p className="text-gray-600">{selectedProject.challenge}</p>
                </div>
              )}
              
              {selectedProject.solution && (
                <div className="mb-6">
                  <h3 className="font-semibold text-dark-blue text-lg mb-2">The Solution</h3>
                  <p className="text-gray-600">{selectedProject.solution}</p>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-semibold text-dark-blue text-lg mb-2">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <span className="text-electric-blue">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-dark-blue text-lg mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Modal Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-electric-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-dark-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
                >
                  Request Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark-blue mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your idea and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="bg-electric-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;