import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  retailPrice?: string;
  wholesalePrice?: string;
  specifications?: string[];
  benefits?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>

              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-4 capitalize">{t(product.category)}</p>

                {(product.retailPrice || product.wholesalePrice) && (
                  <div className="mb-6">
                    {product.retailPrice && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{t('retailPrice')}:</span>
                        <span className="text-lg font-bold text-green-600">{product.retailPrice}</span>
                      </div>
                    )}
                    {product.wholesalePrice && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{t('wholesalePrice')}:</span>
                        <span className="text-lg font-bold text-green-600">{product.wholesalePrice}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('description')}</h3>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>

                  {product.specifications && product.specifications.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('specifications')}</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {product.specifications.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.benefits && product.benefits.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('benefits')}</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {product.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;