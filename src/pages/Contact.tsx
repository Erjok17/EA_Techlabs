import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MapPin, CheckCircle, AlertCircle, Instagram, Twitter } from 'lucide-react';
import type { ContactFormData } from '../types';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    projectType: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! I\'ll get back to you within 24 hours.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          projectType: '',
        });
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please email me directly at erjokagottechlabs@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        if (submitStatus.type === 'success') {
          setSubmitStatus({ type: null, message: '' });
        }
      }, 5000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Social media links with proper URLs
  const socialLinks = {
    email: 'mailto:erjokagottechlabs@gmail.com?subject=Project%20Inquiry%20from%20Website&body=Hello%20EA%20TechLabs%2C%0A%0AI%27m%20interested%20in%20your%20services...',
    whatsapp: 'https://wa.me/256769463447?text=Hello%21%20I%27m%20interested%20in%20your%20software%20development%20services.%20Can%20you%20help%20me%20with%20a%20project%3F',
    linkedin: 'https://www.linkedin.com/company/eatechlabs',
    instagram: 'https://www.instagram.com/ea_techlabs.1/',
    twitter: 'https://twitter.com/eatechlabs',
  };

  // FAQ data
  const faqs = [
    { q: "How long does a project take?", a: "Timeline varies based on complexity. Simple websites: 1-2 weeks, Mobile apps: 3-6 weeks." },
    { q: "Do you offer maintenance?", a: "Yes! Maintenance plans start at $30/month including updates, backups, and support." },
    { q: "What payment methods do you accept?", a: "We accept bank transfer, mobile money, and PayPal. Flexible payment plans available." },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-blue to-electric-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-dark-blue mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need a website, mobile app, desktop software, or data system — we're here to help.
              </p>
              
              <div className="space-y-6">
                {/* Email - Clickable */}
                <a 
                  href={socialLinks.email}
                  className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-electric-blue bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 group-hover:text-electric-blue transition-colors">erjokagottechlabs@gmail.com</p>
                  </div>
                </a>
                
                {/* WhatsApp - Using custom WhatsAppIcon */}
                <a 
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-green-500 bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                    <WhatsAppIcon size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600 group-hover:text-green-600 transition-colors">+256 769 463 447</p>
                    <p className="text-xs text-gray-500">Click to chat instantly</p>
                  </div>
                </a>
                
                {/* LinkedIn Company Page */}
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-blue-600 bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">EA TechLabs Company Page</p>
                    <p className="text-xs text-gray-500">Follow us for updates</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-pink-600 bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-gray-600 group-hover:text-pink-600 transition-colors">@ea_techlabs.1</p>
                    <p className="text-xs text-gray-500">Follow for updates & tech insights</p>
                  </div>
                </a>

                {/* Twitter/X */}
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-sky-500 bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Twitter/X</h3>
                    <p className="text-gray-600 group-hover:text-sky-500 transition-colors">@eatechlabs</p>
                    <p className="text-xs text-gray-500">Latest news & announcements</p>
                  </div>
                </a>
                
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="bg-electric-blue bg-opacity-10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Available globally — 100% remote</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-dark-blue mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM (EAT)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM (EAT)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Responses within 2-4 hours during business hours</p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm text-green-700 font-medium">Quick Response</p>
                  <p className="text-xs text-green-600">Usually within 2-4 hours</p>
                </div>
              </div>

              {/* Service Area */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                  <h3 className="font-semibold text-dark-blue">Service Area</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'South Sudan', 'Global Remote'].map((area) => (
                    <span key={area} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-500">50+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-500">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span className="text-xs text-gray-500">24/7 Support</span>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-8">
                <h3 className="font-semibold text-dark-blue mb-3">❓ Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group">
                      <summary className="cursor-pointer text-gray-700 font-medium hover:text-electric-blue transition">
                        {faq.q}
                      </summary>
                      <p className="text-gray-500 text-sm mt-1 pl-4">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Tell Us About Your Project</h2>
              
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select an option</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="desktop">Desktop Application</option>
                    <option value="data">Data System</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    placeholder="Describe your idea, requirements, timeline, budget, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue disabled:bg-gray-100 disabled:cursor-not-allowed"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-electric-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Alternative Contact Method */}
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-500">
                  Prefer email? Directly reach out at <br />
                  <a href={socialLinks.email} className="text-electric-blue font-medium hover:underline">
                    erjokagottechlabs@gmail.com
                  </a>
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6 p-4 bg-gradient-to-r from-dark-blue to-electric-blue rounded-lg text-white">
                <h3 className="font-semibold text-sm mb-2"> Get Tech Insights</h3>
                <p className="text-xs opacity-90 mb-3">Subscribe for software tips and updates</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-3 py-1 rounded text-gray-700 text-sm"
                  />
                  <button className="bg-white text-dark-blue px-3 py-1 rounded text-sm font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;