import React from 'react';
import { Sprout, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">निर्मल कृषी सेवा केंद्र</h3>
                <p className="text-sm text-gray-400">Nirmal Krushi Seva Kendra</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in agriculture and irrigation solutions. Providing quality products and expert advice to farmers for over a decade.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <a href="tel:+919371593754" className="hover:text-green-400 transition-colors">
                  +91 93715 93754
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-green-400" />
                <span>Khudane Chaufuli, Nijampur, Dhule</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              <Clock className="inline h-5 w-5 mr-2" />
              {t('businessHours')}
            </h4>
            <div className="text-gray-300 space-y-1 text-sm">
              <p>{t('mondayToSaturday')}</p>
                          </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;