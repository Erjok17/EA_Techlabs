import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Database, 
  Building2, 
  Store,
  Factory,
  Landmark,
  University,
  Stethoscope,
  Settings,
  LineChart,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Rest of your component remains the same...

const Solutions = () => {
  const industries = [
    { icon: Building2, name: 'Corporate', description: 'Streamline operations and track KPIs' },
    { icon: Store, name: 'Retail', description: 'Monitor sales, inventory, and customer trends' },
    { icon: Factory, name: 'Manufacturing', description: 'Optimize production and supply chain' },
    { icon: Landmark, name: 'Financial', description: 'Secure transaction tracking and reporting' },
    { icon: University, name: 'Education', description: 'Manage student records and performance' },
    { icon: Stethoscope, name: 'Healthcare', description: 'Secure patient data and analytics' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-blue to-electric-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive data management systems designed for your specific industry needs
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-blue text-center mb-12">Solutions for Every Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <industry.icon className="w-12 h-12 text-electric-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-blue text-center mb-4">Core Solutions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Powerful tools that adapt to any organization's needs
          </p>

          {/* Business Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div>
              <BarChart3 className="w-16 h-16 text-electric-blue mb-6" />
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Business Intelligence Dashboards</h2>
              <p className="text-lg text-gray-600 mb-6">
                Transform raw data into actionable insights with customizable dashboards for any organization.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time performance monitoring',
                  'Custom KPI tracking',
                  'Interactive data visualization',
                  'Automated reporting'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <LineChart className="w-5 h-5 text-electric-blue" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-4 rounded shadow">
                <div className="h-48 bg-gradient-to-br from-electric-blue to-dark-blue rounded opacity-50"></div>
              </div>
            </div>
          </motion.div>

          {/* Digital Records System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="bg-white p-4 rounded shadow">
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 bg-gradient-to-r from-electric-blue to-dark-blue rounded opacity-30"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Database className="w-16 h-16 text-electric-blue mb-6" />
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Digital Records Management</h2>
              <p className="text-lg text-gray-600 mb-6">
                Securely store, manage, and retrieve all types of institutional records.
              </p>
              <div className="space-y-4">
                {[
                  'Secure cloud storage',
                  'Advanced search and retrieval',
                  'Access control and permissions',
                  'Audit trails and compliance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-electric-blue" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark-blue mb-4">Need Something Custom?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every organization is unique. We build tailored solutions for your specific needs.
          </p>
          <div className="flex justify-center">
            <Settings className="w-20 h-20 text-electric-blue mb-6" />
          </div>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            From integrating with existing systems to building completely new solutions, 
            we work with you to create the perfect data management system for your institution.
          </p>
          <Link to="/contact" className="bg-electric-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;