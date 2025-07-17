import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/products';
import ImageCarousel from '../components/ImageCarousel';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: t('qualityProducts'),
      description: 'Certified and tested agricultural products from trusted brands'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t('expertAdvice'),
      description: 'Professional guidance from experienced agricultural experts'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: t('reliableService'),
      description: 'Consistent and dependable service for over a decade'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <ImageCarousel />

      {/* Product Categories */}
      <section id="products-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('productCategories')}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.key}
                to={`/products?category=${category.key}`}
                className="group bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-emerald-100 hover:border-emerald-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {t(category.key)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(`${category.key}Desc`)}
                  </p>
                  <div className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700 font-semibold bg-emerald-100 group-hover:bg-emerald-200 px-3 py-1 rounded-full transition-all duration-300">
                    {t('viewProducts')}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-white to-lime-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-full mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact us today for expert advice and quality agricultural products
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('contactTitle')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;