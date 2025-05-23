import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Show success message (in a real app)
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'thisarabodhithunga@gmail.com',
      link: 'mailto:thisarabodhithunga@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+94 71 7072 350',
      link: 'tel:+94717072350',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Ratnapura, Sri Lanka',
      link: 'https://maps.app.goo.gl/CTyncgn3qMszSYEA9',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or directly via email or phone.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-custom dark:shadow-custom-dark p-6 flex items-start"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <a 
                    href={item.link} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.content}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow-custom dark:shadow-custom-dark p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="Thisara Bodhithunga"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="Hi, I would like to discuss a project idea..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;