import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Building2, 
  Award, 
  Clock, 
  Globe,
  Mail,
  ArrowRight,
  Smartphone,
  Monitor,
  Database,
  Globe as GlobeIcon,
  Linkedin,
  Github
} from 'lucide-react';
import { aiInnovation, businessData, mobileApp, desktopApp } from '../assets/images';
import Portfolio2 from '../assets/images/Portfolio2.jpeg';

interface Value {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface Stat {
  icon: React.ElementType;
  number: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const About = () => {
  const values: Value[] = [
    { icon: Heart, title: 'Client Success', desc: 'We prioritize our clients\' success above all else. Your growth is our growth.' },
    { icon: Users, title: 'True Partnership', desc: 'We work alongside you as collaborators, not just vendors. Your input matters.' },
    { icon: Target, title: 'Continuous Innovation', desc: 'We constantly evolve our solutions to meet changing needs and technologies.' },
  ];

  const stats: Stat[] = [
    { icon: Building2, number: '50+', label: 'Projects Delivered' },
    { icon: Award, number: '100%', label: 'Client Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: 'Global', label: 'Client Base' },
  ];

  // Team array with just one image (Portfolio2)
  const team: TeamMember[] = [
    { 
      name: 'Erjok Agot', 
      role: 'Founder & Lead Developer', 
      image: Portfolio2,
      bio: 'Full-stack developer with expertise in web, mobile, and desktop applications. Passionate about creating innovative software solutions that help businesses grow.'
    },
  ];

  const galleryImages = [
    { src: businessData, alt: 'Data analytics dashboard', title: 'Data Solutions' },
    { src: mobileApp, alt: 'Mobile app development', title: 'Mobile Apps' },
    { src: desktopApp, alt: 'Desktop software', title: 'Desktop Applications' },
    { src: aiInnovation, alt: 'AI and innovation', title: 'Innovation' },
  ];

  return (
    <div className="pt-20">
      {/* Header with Image */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aiInnovation} 
            alt="Innovation background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-electric-blue opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About EA TechLabs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto px-4"
          >
            Building innovative software solutions for businesses worldwide
          </motion.p>
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
                <stat.icon className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-dark-blue">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  EA TechLabs was founded with a simple mission: to help organizations of all types 
                  harness the power of technology. We saw too many businesses struggling with 
                  outdated systems, manual processes, and missed opportunities due to lack of 
                  access to quality software development.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we work with a diverse range of clients—from ambitious startups to 
                  established enterprises—building websites, mobile apps, desktop software, 
                  and data systems that drive real results and create lasting value.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to make quality software development accessible to every organization, 
                  regardless of size or budget. We believe that great technology shouldn't be a luxury—it 
                  should be a tool that empowers businesses to reach their full potential.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src={businessData} 
                alt="Our team at work" 
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Target className="w-12 h-12 text-electric-blue mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To democratize access to quality software development, enabling organizations 
                of all types to leverage technology for growth, efficiency, and competitive advantage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Eye className="w-12 h-12 text-electric-blue mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                A world where every organization, from local small businesses to global enterprises, 
                can harness the power of custom software to solve problems and create opportunities.
              </p>
            </motion.div>
          </div>

          <h3 className="text-3xl font-bold text-center text-dark-blue mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-electric-blue bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-electric-blue" />
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-electric-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeIcon className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="font-bold">Websites</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-electric-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="font-bold">Mobile Apps</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-electric-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="font-bold">Desktop Apps</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="bg-electric-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-electric-blue" />
              </div>
              <h4 className="font-bold">Data Systems</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse at the solutions we've built for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Rectangle Design for Better Visibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating innovative software solutions that help businesses grow
            </p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center max-w-md"
              >
                {/* Rectangle image with rounded corners - clearer and larger */}
                <div className="relative max-w-sm mx-auto mb-6 group">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-electric-blue group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-2xl md:text-3xl text-dark-blue">{member.name}</h3>
                <p className="text-electric-blue font-semibold text-lg mt-2">{member.role}</p>
                <p className="text-gray-600 mt-4 leading-relaxed">{member.bio}</p>
                
                {/* Social links for founder */}
                <div className="flex justify-center gap-4 mt-6">
                  <a 
                    href="https://www.linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-electric-blue transition"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-electric-blue transition"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Expansion Message */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Building a team of experts to serve you better. 
              <a href="/contact" className="text-electric-blue hover:underline ml-1">Interested in joining? →</a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-electric-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-blue transition transform hover:scale-105 inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;