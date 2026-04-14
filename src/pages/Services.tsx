import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Monitor,
  Database,
  Code,
  Users,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { aiInnovation, businessData, mobileApp, desktopApp } from '../assets/images';

// Rest of your component remains the same...
interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const Services = () => {
  const mainServices: ServiceDetail[] = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites built to your specifications. From simple business sites to complex web applications.',
      image: businessData,
      features: [
        'Business websites',
        'E-commerce platforms',
        'Web applications',
        'Content management systems',
        'Portfolio sites',
        'Landing pages'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
      image: mobileApp,
      features: [
        'iOS apps',
        'Android apps',
        'Cross-platform solutions',
        'App store deployment',
        'Push notifications',
        'Offline functionality'
      ]
    },
    {
      icon: Monitor,
      title: 'Desktop Applications',
      description: 'Powerful desktop software for Windows, macOS, and Linux tailored to your specific needs.',
      image: desktopApp,
      features: [
        'Windows applications',
        'macOS software',
        'Linux compatibility',
        'Enterprise solutions',
        'Offline capabilities',
        'System integration'
      ]
    },
    {
      icon: Database,
      title: 'Data Systems',
      description: 'Custom dashboards, record systems, and data management solutions for organizations of all sizes.',
      image: aiInnovation,
      features: [
        'Business dashboards',
        'Record management',
        'Data visualization',
        'Reporting tools',
        'Analytics platforms',
        'Database design'
      ]
    }
  ];

  const process: ProcessStep[] = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and requirements through in-depth consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed roadmap, technical specifications, and project timeline.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your solution with regular updates, transparent communication, and agile methodology.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing maintenance, support, and optimization.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'Backend' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Swift', category: 'iOS' },
    { name: 'Kotlin', category: 'Android' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Figma', category: 'Design' },
  ];

  return (
    <div className="pt-20">
      {/* Header with Image */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aiInnovation} 
            alt="Innovation background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-electric-blue opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive software development solutions for businesses of all sizes
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <service.icon className="w-16 h-16 text-electric-blue mb-4" />
                  <h2 className="text-3xl font-bold text-dark-blue mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-electric-blue flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="rounded-lg overflow-hidden shadow-lg h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage modern, proven technologies to build robust solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 hover:shadow-lg hover:text-electric-blue transition-all duration-300 cursor-default"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process from idea to launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl font-bold text-electric-blue opacity-20 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark-blue">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-electric-blue">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Why Choose EA TechLabs</h2>
              <p className="text-lg text-gray-600 mb-6">
                We combine technical expertise with a client-focused approach to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue bg-opacity-10 p-2 rounded-full mt-1">
                    <Code className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Development Team</h3>
                    <p className="text-gray-600">Skilled developers with experience across industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue bg-opacity-10 p-2 rounded-full mt-1">
                    <Clock className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Timely Delivery</h3>
                    <p className="text-gray-600">We respect your timeline and budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue bg-opacity-10 p-2 rounded-full mt-1">
                    <Users className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold">Client Partnership</h3>
                    <p className="text-gray-600">We work alongside you, not just for you</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <img 
                src={desktopApp} 
                alt="Development process" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-electric-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your requirements and see how we can help bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="bg-white text-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 inline-block"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;