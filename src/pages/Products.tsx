import { motion } from 'framer-motion';
import { 
  Globe,
  Smartphone,
  Monitor,
  Database,
  ArrowRight,
  Package
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

// Rest of your component remains the same...

const Products = () => {
  const products: Product[] = [
    {
      icon: Globe,
      name: 'QuickSite',
      description: 'Rapid website development solution for businesses needing a professional online presence quickly.',
      features: ['Custom design', 'Mobile responsive', 'SEO optimized', 'Easy content management'],
      status: 'Available',
    },
    {
      icon: Smartphone,
      name: 'AppForge',
      description: 'Cross-platform mobile app framework that delivers native performance on both iOS and Android.',
      features: ['Single codebase', 'Native performance', 'Offline support', 'Push notifications'],
      status: 'Available',
    },
    {
      icon: Monitor,
      name: 'DeskPro',
      description: 'Desktop application framework for building powerful, offline-capable business software.',
      features: ['Cross-platform', 'Offline first', 'Auto-updates', 'System integration'],
      status: 'Coming Soon',
    },
    {
      icon: Database,
      name: 'DataView',
      description: 'Custom dashboard and analytics platform for visualizing and managing your business data.',
      features: ['Real-time updates', 'Custom widgets', 'Data export', 'Team sharing'],
      status: 'Available',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-blue to-electric-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready-to-deploy solutions that can be customized for your needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <product.icon className="w-16 h-16 text-electric-blue mb-6" />
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-dark-blue">{product.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === 'Available' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-electric-blue" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block bg-electric-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition w-full text-center"
                  >
                    Request Demo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-16 h-16 text-electric-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-dark-blue mb-4">Need Something Custom?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see what you're looking for? We specialize in building custom solutions tailored to your exact requirements.
          </p>
          <Link
            to="/contact"
            className="bg-electric-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block"
          >
            Tell Us About Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;