import React from 'react';
import { Award, Users, Clock, Target, Heart, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: t('qualityProducts'),
      description: 'We source only the finest agricultural products from certified suppliers and trusted brands.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t('expertAdvice'),
      description: 'Our experienced team provides professional guidance to help farmers make informed decisions.'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: t('reliableService'),
      description: 'Consistent, dependable service that farmers can count on, season after season.'
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: 'Customer Care',
      description: 'We genuinely care about our customers\' success and build lasting relationships.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Trust & Integrity',
      description: 'Built on a foundation of trust, honesty, and transparent business practices.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Innovation',
      description: 'Always seeking new and better solutions to meet evolving agricultural needs.'
    }
  ];

  const milestones = [
    { year: '2007', title: 'Establishment', description: 'Founded with a vision to serve farming community' },
    { year: '2020', title: 'Expansion', description: 'Extended product range to include irrigation systems' },
    { year: '2023', title: 'Modern Facility', description: 'Upgraded to larger facility with better storage' },
    { year: '2025', title: 'Digital Presence', description: 'Launched online platform for better customer service' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('ourVision')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('visionText')}
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "Our success is measured by the success of the farmers we serve. When crops flourish, communities thrive."
                </p>
                <p className="text-green-600 font-semibold mt-2">- Nirmal Krushi Seva Kendra Team</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Agricultural field"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Fresh vegetables"
                className="rounded-lg shadow-md mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Soil and plants"
                className="rounded-lg shadow-md -mt-4"
              />
              <img
                src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Irrigation system"
                className="rounded-lg shadow-md mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with Us Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who trust us for their agricultural needs
          </p>
          <a
            href="tel:+919371593754"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Call Us Today: +91 93715 93754
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;