import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: t('address'),
      content: 'Khudane Chaufuli, Nijampur, Dhule, Maharashtra 424305',
      link: 'https://maps.google.com/?q=Khudane+Chaufuli+Nijampur+Dhule+Maharashtra+424305'
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: t('phone'),
      content: '+91 93715 93754',
      link: 'tel:+919371593754'
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: t('businessHours'),
      content: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('contactTitle')}
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with us for expert agricultural advice and quality products. We're here to help your farming business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.content ? (
                        info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-700 hover:text-green-600 transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.content}</p>
                        )
                      ) : (
                        <div className="text-gray-700">
                          <p className="mb-1">{t('mondayToSaturday')}</p>
                        
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+919371593754"
                    className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://maps.google.com/?q=Khudane+Chaufuli+Nijampur+Dhule+Maharashtra+424305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Navigation className="h-5 w-5 mr-2" />
                    {t('getDirections')}
                  </a>
                </div>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d74.7772!3d20.9042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a7d7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sKhudane%20Chaufuli%2C%20Nijampur%2C%20Dhule%2C%20Maharashtra%20424305!5e0!3m2!1sen!2sin!4v1635758594234!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nirmal Krushi Seva Kendra Location"
                ></iframe>
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Store</h3>
                <p className="text-gray-700 mb-4">
                  Located in Khudane Chaufuli, Nijampur, Dhule, our store is easily accessible and well-stocked with all your farming needs.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Free parking available
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Easy access from main road
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Adjacent to other agricultural suppliers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Well-organized product displays
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our experts are available during business hours for urgent agricultural queries
          </p>
          <a
            href="tel:+919371593754"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6 mr-3" />
            Call: +91 93715 93754
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;