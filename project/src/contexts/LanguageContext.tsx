import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'mr' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    
    // Homepage
    welcomeTitle: 'Welcome to Nirmal Krushi Seva Kendra',
    welcomeSubtitle: 'Your Trusted Partner in Agriculture & Irrigation Solutions',
    welcomeDescription: 'Providing quality seeds, fertilizers, irrigation systems, and agricultural equipment to farmers across the region for over a decade.',
    productCategories: 'Our Product Categories',
    viewProducts: 'View Products',
    
    // Categories
    seeds: 'Seeds',
    fertilizers: 'Fertilizers',
    herbicides: 'Herbicides',
    pgr: 'Plant Growth Regulators', 
    insecticides: 'Insecticides',
    micronutrients: 'Micronutrients',
    fungicides: 'Fungicides',
    irrigation: 'Drip and Sprinkler Irrigation',
    mulching: 'Mulching Paper',
    rainpipes: 'Rain Pipes',
    sprayPumps: 'Spray Pumps',
    
    // Products
    allCategories: 'All Categories',
    viewDetails: 'View Details',
    retailPrice: 'Retail Price',
    wholesalePrice: 'Wholesale Price',
    specifications: 'Specifications',
    benefits: 'Benefits & Usage',
    description: 'Description',
    
    // About
    aboutTitle: 'About Nirmal Krushi Seva Kendra',
    aboutDescription: 'Established with a vision to support farmers with quality agricultural products and services, Nirmal Krushi Seva Kendra has been serving the farming community for years. We are committed to providing genuine products, expert advice, and building long-term relationships with our customers.',
    ourVision: 'Our Vision',
    visionText: 'To be the most trusted agricultural service provider, empowering farmers with quality products and innovative solutions for sustainable farming.',
    whyChooseUs: 'Why Choose Us',
    qualityProducts: 'Quality Products',
    expertAdvice: 'Expert Advice',
    reliableService: 'Reliable Service',
    
    // Contact
    contactTitle: 'Contact Us',
    address: 'Address',
    phone: 'Phone',
    businessHours: 'Business Hours',
    mondayToSaturday: 'Monday - Sunday: 7:00 AM - 7:00 PM',
    getDirections: 'Get Directions',
    
    // Footer
    footerText: '© 2025 Nirmal Store. Developed with ❤️. All rights reserved.',
    
    // Product descriptions
   seedsDesc: 'High-quality vegetable, flower, and crop seeds from trusted brands',
fertilizersDesc: 'Organic and chemical fertilizers for optimal plant nutrition',
pgrDesc: 'Plant growth regulators to enhance yield, flowering, and crop quality',
herbicidesDesc: 'Selective and non-selective herbicides for effective weed control',
insecticidesDesc: 'Reliable solutions to protect crops from harmful pests and insects',
micronutrientsDesc: 'Essential micronutrients to prevent deficiencies and improve plant health',
fungicidesDesc: 'Effective fungicides to control and prevent crop fungal diseases',
irrigationDesc: 'Modern drip and sprinkler systems for efficient and precise watering',
mulchingDesc: 'Durable mulching paper for soil protection and weed suppression',
rainpipesDesc: 'Quality rain pipes for uniform and reliable water distribution',
sprayPumpsDesc: 'Efficient spray pumps for pesticide and fertilizer application'
  },
  
  mr: {
    // Navigation
    home: 'मुख्य',
    products: 'उत्पादने',
    about: 'आमच्याबद्दल',
    contact: 'संपर्क',
    
    // Homepage
    welcomeTitle: 'निर्मल कृषी सेवा केंद्र मध्ये आपले स्वागत',
    welcomeSubtitle: 'शेती आणि सिंचन समाधानातील आपका विश्वसनीय भागीदार',
    welcomeDescription: 'एक दशकाहून अधिक काळापासून संपूर्ण प्रदेशातील शेतकऱ्यांना दर्जेदार बियाणे, खते, सिंचन यंत्रणा आणि कृषी उपकरणे पुरवत आहोत.',
    productCategories: 'आमच्या उत्पादन श्रेणी',
    viewProducts: 'उत्पादने पहा',
    
    // Categories

    seeds: 'बियाणे',
fertilizers: 'खते',
pgr: 'वनस्पती वाढ नियामक',
herbicides: 'तणनाशक',
insecticides: 'कीटकनाशके',
micronutrients: 'सूक्ष्म पोषक तत्वे',
fungicides: 'बुरशीनाशके',
irrigation: 'ड्रिप आणि स्प्रिंकलर सिंचन',
mulching: 'मल्चिंग पेपर',
rainpipes: 'पावसाचे पाइप',
sprayPumps: 'स्प्रे पंप',

    
    // Products
    allCategories: 'सर्व श्रेणी',
    viewDetails: 'तपशील पहा',
    retailPrice: 'किरकोळ किंमत',
    wholesalePrice: 'घाऊक किंमत',
    specifications: 'वैशिष्ट्ये',
    benefits: 'फायदे आणि वापर',
    description: 'वर्णन',
    
    // About
    aboutTitle: 'निर्मल कृषी सेवा केंद्राबद्दल',
    aboutDescription: 'शेतकऱ्यांना दर्जेदार कृषी उत्पादने आणि सेवा प्रदान करण्याच्या दृष्टिकोनाने स्थापन झालेले, निर्मल कृषी सेवा केंद्र अनेक वर्षांपासून शेतकरी समुदायाची सेवा करत आहे. आम्ही खरी उत्पादने, तज्ञ सल्ला आणि आमच्या ग्राहकांशी दीर्घकालीन संबंध निर्माण करण्यास वचनबद्ध आहोत.',
    ourVision: 'आमची दृष्टी',
    visionText: 'शाश्वत शेतीसाठी दर्जेदार उत्पादने आणि नाविन्यपूर्ण समाधानांसह शेतकऱ्यांना सक्षम करणारे सर्वात विश्वसनीय कृषी सेवा प्रदाता बनणे.',
    whyChooseUs: 'आम्हाला का निवडावे',
    qualityProducts: 'दर्जेदार उत्पादने',
    expertAdvice: 'तज्ञ सल्ला',
    reliableService: 'विश्वसनीय सेवा',
    
    // Contact
    contactTitle: 'आमच्याशी संपर्क साधा',
    address: 'पत्ता',
    phone: 'फोन',
    businessHours: 'व्यावसायिक वेळ',
    mondayToSaturday: 'मंगळवार - शनिवार: सकाळी ८:०० - संध्याकाळी ७:००',
    sunday: 'रविवार आणि सोमवार: पूर्ण दिवस उघडे',
    getDirections: 'दिशा मिळवा',
    
    // Footer
    footerText: '© २०२५ निर्मल स्टोअर. ❤️ सह विकसित. सर्व हक्क राखीव.',
    
    // Product descriptions
   seedsDesc: 'विश्वसनीय ब्रँड्सकडून उच्च-गुणवत्तेची भाजी, फुले आणि पिकांची बियाणे',
fertilizersDesc: 'इष्टतम वनस्पती पोषणासाठी सेंद्रिय आणि रासायनिक खते',
pgrDesc: 'पिकांची वाढ, फुलोरा आणि उत्पादन वाढवण्यासाठी प्रभावी वाढ नियामक',
herbicidesDesc: 'तण नियंत्रणासाठी निवडक आणि अनिवडक तणनाशके',
insecticidesDesc: 'पिकांना कीडांपासून सुरक्षित ठेवण्यासाठी विश्वासार्ह उपाय',
micronutrientsDesc: 'वनस्पतींच्या निरोगी वाढीसाठी आवश्यक सूक्ष्म पोषक तत्वे',
fungicidesDesc: 'बुरशीजन्य रोगांपासून संरक्षणासाठी प्रभावी बुरशीनाशके',
irrigationDesc: 'कार्यक्षम पाणी पुरवठ्यासाठी आधुनिक ठिबक आणि स्प्रिंकलर सिंचन यंत्रणा',
mulchingDesc: 'मातीचे संरक्षण आणि तण नियंत्रणासाठी टिकाऊ मल्चिंग पेपर',
rainpipesDesc: 'विश्वसनीय पाणी वितरणासाठी दर्जेदार रेन पाईप्स',
sprayPumpsDesc: 'कीटकनाशक आणि खत फवारणीसाठी कार्यक्षम पंप'
  },
  
  hi: {
    // Navigation
    home: 'मुख्य',
    products: 'उत्पाद',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    
    // Homepage
    welcomeTitle: 'निर्मल कृषि सेवा केंद्र में आपका स्वागत है',
    welcomeSubtitle: 'कृषि और सिंचाई समाधान में आपका विश्वसनीय साझेदार',
    welcomeDescription: 'एक दशक से अधिक समय से पूरे क्षेत्र के किसानों को गुणवत्तापूर्ण बीज, उर्वरक, सिंचाई प्रणाली और कृषि उपकरण प्रदान कर रहे हैं।',
    productCategories: 'हमारी उत्पाद श्रेणियां',
    viewProducts: 'उत्पाद देखें',
    
    // Categories
   seeds: 'बीज',
fertilizers: 'उर्वरक',
pgr: 'पौध वृद्धि नियामक',
herbicides: 'शाकनाशी',
insecticides: 'कीट नियंत्रण दवा',
micronutrients: 'सूक्ष्म पोषक तत्व',
fungicides: 'फफूंदनाशी',
irrigation: 'ड्रिप और स्प्रिंकलर सिंचाई',
mulching: 'मल्चिंग पेपर',
rainpipes: 'वर्षा पाइप',
sprayPumps: 'स्प्रे पंप',
    // Products
    allCategories: 'सभी श्रेणियां',
    viewDetails: 'विवरण देखें',
    retailPrice: 'खुदरा मूल्य',
    wholesalePrice: 'थोक मूल्य',
    specifications: 'विशेषताएं',
    benefits: 'लाभ और उपयोग',
    description: 'विवरण',
    
    // About
    aboutTitle: 'निर्मल कृषि सेवा केंद्र के बारे में',
    aboutDescription: 'किसानों को गुणवत्तापूर्ण कृषि उत्पाद और सेवाएं प्रदान करने की दृष्टि से स्थापित, निर्मल कृषि सेवा केंद्र वर्षों से किसान समुदाय की सेवा कर रहा है। हम वास्तविक उत्पाद, विशेषज्ञ सलाह और अपने ग्राहकों के साथ दीर्घकालिक संबंध बनाने के लिए प्रतिबद्ध हैं।',
    ourVision: 'हमारी दृष्टि',
    visionText: 'टिकाऊ कृषि के लिए गुणवत्तापूर्ण उत्पादों और नवाचार समाधानों के साथ किसानों को सशक्त बनाने वाला सबसे विश्वसनीय कृषि सेवा प्रदाता बनना।',
    whyChooseUs: 'हमें क्यों चुनें',
    qualityProducts: 'गुणवत्तापूर्ण उत्पाद',
    expertAdvice: 'विशेषज्ञ सलाह',
    reliableService: 'विश्वसनीय सेवा',
    
    // Contact
    contactTitle: 'हमसे संपर्क करें',
    address: 'पता',
    phone: 'फोन',
    businessHours: 'व्यावसायिक समय',
    mondayToSaturday: 'मंगलवार - शनिवार: सुबह 8:00 - शाम 7:00',
    sunday: 'रविवार और सोमवार: पूरा दिन खुला',
    getDirections: 'दिशा प्राप्त करें',
    
    // Footer
    footerText: '© 2025 निर्मल स्टोर। ❤️ के साथ विकसित। सभी अधिकार सुरक्षित।',
    
    // Product descriptions
    seedsDesc: 'विश्वसनीय ब्रांडों से उच्च-गुणवत्ता वाली सब्जी, फूल और फसल के बीज',
fertilizersDesc: 'इष्टतम पौधे पोषण के लिए जैविक और रासायनिक उर्वरक',
pgrDesc: 'बेहतर पौध विकास और उत्पादन बढ़ाने के लिए उच्च गुणवत्ता वाले पौध वृद्धि नियामक',
herbicidesDesc: 'खरपतवार नियंत्रण के लिए चुनिंदा और गैर-चुनिंदा खरपतवारनाशी',
insecticidesDesc: 'फसलों को कीटों से सुरक्षित रखने के लिए विश्वसनीय समाधान',
micronutrientsDesc: 'स्वस्थ और संतुलित पौध वृद्धि के लिए आवश्यक सूक्ष्म पोषक तत्व',
fungicidesDesc: 'फसलों को फफूंद और बीमारियों से बचाने के लिए प्रभावी फफूंदनाशी',
irrigationDesc: 'कुशल पानी आपूर्ति के लिए आधुनिक ड्रिप और स्प्रिंकलर सिंचाई प्रणाली',
mulchingDesc: 'मिट्टी सुरक्षा और खरपतवार नियंत्रण के लिए टिकाऊ मल्चिंग पेपर',
rainpipesDesc: 'विश्वसनीय पानी वितरण के लिए गुणवत्तापूर्ण रेन पाइप्स',
sprayPumpsDesc: 'कीटनाशक और उर्वरक अनुप्रयोग के लिए कुशल स्प्रे पंप'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

const t = (key: string): string => {
  return translations[language]?.[key] ?? key;
};

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};