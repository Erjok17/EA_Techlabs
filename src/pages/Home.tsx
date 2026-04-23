import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code,
  Smartphone,
  Monitor,
  Globe,
  Database,
  BarChart3,
  Zap,
  Users,
  Clock,
  Award,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { 
  heroBg, 
  businessData, 
  laneVcImage, 
  chiHairluxImage, 
  handcraftedImage 
} from '../assets/images';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface BenefitItem {
  icon: React.ElementType;
  text: string;
}

interface PortfolioItem {
  title: string;
  description: string;
  category: 'website' | 'mobile';
  techStack: string[];
  liveUrl?: string;
  image: string;
}

const Home = () => {
  const services: ServiceItem[] = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'From simple business sites to complex web applications. We build responsive, modern websites for any scale.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    },
    {
      icon: Monitor,
      title: 'Desktop Applications',
      description: 'Powerful desktop software for Windows, macOS, and Linux tailored to your business needs.',
    },
    {
      icon: Database,
      title: 'Data Systems',
      description: 'Custom dashboards, record systems, and data management solutions for organizations of all sizes.',
    },
  ];

  const benefits: BenefitItem[] = [
    { icon: Code, text: 'Custom solutions built for your needs' },
    { icon: Users, text: 'Client-focused approach' },
    { icon: Clock, text: 'Timely delivery and support' },
    { icon: Award, text: 'Quality assured development' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: 'Global', label: 'Client Base' },
  ];

  // Portfolio items with actual images
  const featuredProjects: PortfolioItem[] = [
    {
      title: "Lane VC Investor Portal",
      description: "Comprehensive investor portal for venture capital management with portfolio tracking and analytics.",
      category: "website",
      techStack: ["React", "Node.js", "Express", "PostgreSQL"],
      liveUrl: "https://lane-vc-portal.onrender.com/",
      image: laneVcImage,
    },
    {
      title: "Chi Hairlux - Premium Wig Store",
      description: "E-commerce platform for premium wig sales with product catalog and shopping features.",
      category: "website",
      techStack: ["React", "Vercel", "CSS3", "Responsive Design"],
      liveUrl: "https://chi-hairlux.vercel.app",
      image: chiHairluxImage,
    },
    {
      title: "Handcrafted Haven",
      description: "Artisan marketplace showcasing handmade products with elegant design and smooth user experience.",
      category: "website",
      techStack: ["React", "Vercel", "Modern CSS"],
      liveUrl: "https://handcrafted-haven22.vercel.app/",
      image: handcraftedImage,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue via-dark-blue to-electric-blue opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            EA TechLabs
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-6"
          >
            We Build Software That Matters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Websites • Mobile Apps • Desktop Applications • Data Systems
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="bg-white text-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-blue transition transform hover:scale-105"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small business websites to enterprise-scale applications — we bring your ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <service.icon className="w-12 h-12 text-electric-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION WITH IMAGES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real websites and applications I've built for clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay with live link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-dark-blue bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <span className="bg-white text-dark-blue px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                        View Live <ExternalLink size={16} />
                      </span>
                    </a>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-dark-blue">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-10">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 bg-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              See more of my work including mobile apps and data systems
            </p>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
                From Small to Enterprise Scale
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're a startup with a big idea or an established enterprise needing custom software, 
                we have the expertise to deliver.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue bg-opacity-10 p-2 rounded-full mt-1">
                    <Zap className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Small Business Solutions</h3>
                    <p className="text-gray-600">Affordable, scalable websites and apps that grow with you</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue bg-opacity-10 p-2 rounded-full mt-1">
                    <BarChart3 className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Enterprise Applications</h3>
                    <p className="text-gray-600">Robust, secure systems for large-scale operations</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
            >
              <img 
                src={businessData} 
                alt="Business analytics" 
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-electric-blue bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue group-hover:bg-opacity-20 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-electric-blue group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-electric-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your idea and turn it into reality. No project is too big or too small.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-blue transition transform hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;