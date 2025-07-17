export interface Product {
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

export const products: Product[] = [
  // Seeds - 20+ varieties
  {
    id: 'tomato-seeds-hybrid',
    name: 'Hybrid Tomato Seeds',
    category: 'seeds',
    description: 'High-yielding hybrid tomato seeds suitable for all seasons. Disease resistant variety with excellent shelf life.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹50/packet',
    wholesalePrice: '₹40/packet',
    specifications: ['Hybrid variety', 'Disease resistant', 'High yield potential'],
    benefits: ['Better germination rate', 'Uniform fruit size', 'Extended harvest period']
  },
  {
    id: 'onion-seeds',
    name: 'Red Onion Seeds',
    category: 'seeds',
    description: 'Premium quality red onion seeds with excellent storage capacity and strong flavor.',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹120/packet',
    wholesalePrice: '₹100/packet'
  },
  {
    id: 'corn-seeds',
    name: 'Sweet Corn Seeds',
    category: 'seeds',
    description: 'Premium quality sweet corn seeds with excellent taste and nutritional value.',
    image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹80/packet',
    wholesalePrice: '₹65/packet'
  },
  {
    id: 'chili-seeds',
    name: 'Green Chili Seeds',
    category: 'seeds',
    description: 'Spicy green chili seeds with high capsaicin content and excellent color.',
    image: 'https://images.pexels.com/photos/1441116/pexels-photo-1441116.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹30/packet',
    wholesalePrice: '₹25/packet'
  },
  {
    id: 'cabbage-seeds',
    name: 'Cabbage Seeds',
    category: 'seeds',
    description: 'Fresh cabbage seeds for healthy and nutritious vegetable production.',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹40/packet',
    wholesalePrice: '₹32/packet'
  },
  {
    id: 'carrot-seeds',
    name: 'Carrot Seeds',
    category: 'seeds',
    description: 'Orange carrot seeds rich in vitamins and perfect for home gardens.',
    image: 'https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹35/packet',
    wholesalePrice: '₹28/packet'
  },
  {
    id: 'brinjal-seeds',
    name: 'Brinjal Seeds',
    category: 'seeds',
    description: 'Purple brinjal seeds with excellent taste and cooking quality.',
    image: 'https://images.pexels.com/photos/5644/food-healthy-vegetables-potatoes.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹45/packet',
    wholesalePrice: '₹36/packet'
  },
  {
    id: 'okra-seeds',
    name: 'Okra Seeds (Bhindi)',
    category: 'seeds',
    description: 'Fresh okra seeds for tender and delicious vegetable production.',
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹25/packet',
    wholesalePrice: '₹20/packet'
  },
  {
    id: 'cucumber-seeds',
    name: 'Cucumber Seeds',
    category: 'seeds',
    description: 'Crisp cucumber seeds perfect for salads and fresh consumption.',
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹30/packet',
    wholesalePrice: '₹24/packet'
  },
  {
    id: 'spinach-seeds',
    name: 'Spinach Seeds (Palak)',
    category: 'seeds',
    description: 'Nutritious spinach seeds rich in iron and vitamins.',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹20/packet',
    wholesalePrice: '₹16/packet'
  },
  {
    id: 'radish-seeds',
    name: 'White Radish Seeds',
    category: 'seeds',
    description: 'Fresh white radish seeds for crunchy and healthy vegetables.',
    image: 'https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹18/packet',
    wholesalePrice: '₹15/packet'
  },
  {
    id: 'cauliflower-seeds',
    name: 'Cauliflower Seeds',
    category: 'seeds',
    description: 'Premium cauliflower seeds for white, compact heads.',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹55/packet',
    wholesalePrice: '₹45/packet'
  },
  {
    id: 'bottle-gourd-seeds',
    name: 'Bottle Gourd Seeds (Lauki)',
    category: 'seeds',
    description: 'Long bottle gourd seeds perfect for healthy cooking.',
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹35/packet',
    wholesalePrice: '₹28/packet'
  },
  {
    id: 'bitter-gourd-seeds',
    name: 'Bitter Gourd Seeds (Karela)',
    category: 'seeds',
    description: 'Medicinal bitter gourd seeds with health benefits.',
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹40/packet',
    wholesalePrice: '₹32/packet'
  },
  {
    id: 'ridge-gourd-seeds',
    name: 'Ridge Gourd Seeds (Turai)',
    category: 'seeds',
    description: 'Fresh ridge gourd seeds for tender vegetable production.',
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹30/packet',
    wholesalePrice: '₹24/packet'
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    category: 'seeds',
    description: 'Large pumpkin seeds for nutritious and versatile vegetables.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹45/packet',
    wholesalePrice: '₹36/packet'
  },
  {
    id: 'watermelon-seeds',
    name: 'Watermelon Seeds',
    category: 'seeds',
    description: 'Sweet watermelon seeds for refreshing summer fruits.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹60/packet',
    wholesalePrice: '₹48/packet'
  },
  {
    id: 'muskmelon-seeds',
    name: 'Muskmelon Seeds',
    category: 'seeds',
    description: 'Aromatic muskmelon seeds for sweet and juicy fruits.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹55/packet',
    wholesalePrice: '₹44/packet'
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander Seeds (Dhania)',
    category: 'seeds',
    description: 'Fresh coriander seeds for aromatic herb production.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹15/packet',
    wholesalePrice: '₹12/packet'
  },
  {
    id: 'fenugreek-seeds',
    name: 'Fenugreek Seeds (Methi)',
    category: 'seeds',
    description: 'Medicinal fenugreek seeds with health benefits.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹20/packet',
    wholesalePrice: '₹16/packet'
  },
  {
    id: 'mustard-seeds',
    name: 'Mustard Seeds (Sarso)',
    category: 'seeds',
    description: 'Oil-rich mustard seeds for cooking and oil production.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹25/packet',
    wholesalePrice: '₹20/packet'
  },
  {
    id: 'sunflower-seeds',
    name: 'Sunflower Seeds',
    category: 'seeds',
    description: 'Large sunflower seeds for oil production and decoration.',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹40/packet',
    wholesalePrice: '₹32/packet'
  },

  // Fertilizers
  {
    id: 'organic-compost',
    name: 'Organic Compost',
    category: 'fertilizers',
    description: 'Rich organic compost made from decomposed organic matter, perfect for soil enrichment.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹15/kg',
    wholesalePrice: '₹12/kg',
    specifications: ['100% organic', 'Rich in nutrients', 'Improves soil structure'],
    benefits: ['Enhances soil fertility', 'Improves water retention', 'Promotes beneficial microorganisms']
  },
  {
    id: 'npk-fertilizer',
    name: 'NPK Complex Fertilizer',
    category: 'fertilizers',
    description: 'Balanced NPK fertilizer providing essential nutrients for healthy plant growth.',
    image: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹25/kg',
    wholesalePrice: '₹20/kg'
  },
  {
    id: 'urea-fertilizer',
    name: 'Urea Fertilizer',
    category: 'fertilizers',
    description: 'High nitrogen content fertilizer for rapid plant growth.',
    image: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹18/kg',
    wholesalePrice: '₹15/kg'
  },

  // Pesticides
  {
    id: 'bio-pesticide',
    name: 'Bio Pesticide',
    category: 'pesticides',
    description: 'Environmentally friendly bio-pesticide for effective pest control without harmful residues.',
    image: 'https://images.pexels.com/photos/4110152/pexels-photo-4110152.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹120/bottle',
    wholesalePrice: '₹100/bottle',
    specifications: ['Biological origin', 'Eco-friendly', 'No harmful residues'],
    benefits: ['Safe for beneficial insects', 'Biodegradable', 'Effective pest control']
  },
  {
    id: 'insecticide-spray',
    name: 'Insecticide Spray',
    category: 'pesticides',
    description: 'Effective insecticide for controlling various crop pests.',
    image: 'https://images.pexels.com/photos/4110152/pexels-photo-4110152.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹150/bottle',
    wholesalePrice: '₹125/bottle'
  },

  // Herbicides
  {
    id: 'glyphosate-herbicide',
    name: 'Glyphosate Herbicide',
    category: 'herbicides',
    description: 'Broad-spectrum herbicide for effective weed control in crops.',
    image: 'https://images.pexels.com/photos/4110152/pexels-photo-4110152.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹180/bottle',
    wholesalePrice: '₹150/bottle',
    specifications: ['Broad-spectrum', 'Systemic action', 'Post-emergence'],
    benefits: ['Controls annual and perennial weeds', 'Easy application', 'Cost-effective']
  },
  {
    id: 'selective-herbicide',
    name: 'Selective Herbicide',
    category: 'herbicides',
    description: 'Selective herbicide that targets weeds while protecting crops.',
    image: 'https://images.pexels.com/photos/4110152/pexels-photo-4110152.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹200/bottle',
    wholesalePrice: '₹170/bottle'
  },
  {
    id: 'pre-emergence-herbicide',
    name: 'Pre-Emergence Herbicide',
    category: 'herbicides',
    description: 'Prevents weed germination when applied before planting.',
    image: 'https://images.pexels.com/photos/4110152/pexels-photo-4110152.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹160/bottle',
    wholesalePrice: '₹135/bottle'
  },

  // Chemicals
  {
    id: 'fungicide-powder',
    name: 'Fungicide Powder',
    category: 'chemicals',
    description: 'Effective fungicide for preventing and treating plant diseases.',
    image: 'https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹140/packet',
    wholesalePrice: '₹115/packet'
  },

  // Irrigation
  {
    id: 'drip-irrigation-kit',
    name: 'Drip Irrigation Kit',
    category: 'irrigation',
    description: 'Complete drip irrigation system for efficient water usage and precise watering.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹2500/kit',
    wholesalePrice: '₹2200/kit',
    specifications: ['Complete system', 'Adjustable flow rate', 'Durable materials'],
    benefits: ['Water conservation', 'Reduced labor', 'Better plant health']
  },
  {
    id: 'sprinkler-system',
    name: 'Sprinkler Irrigation System',
    category: 'irrigation',
    description: 'Efficient sprinkler system for uniform water distribution.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹3500/kit',
    wholesalePrice: '₹3200/kit'
  },

  // Mulching
  {
    id: 'mulching-paper',
    name: 'Biodegradable Mulching Paper',
    category: 'mulching',
    description: 'Eco-friendly mulching paper that helps retain soil moisture and suppress weeds.',
    image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹8/sq meter',
    wholesalePrice: '₹6/sq meter'
  },
  {
    id: 'plastic-mulch',
    name: 'Plastic Mulch Film',
    category: 'mulching',
    description: 'Durable plastic mulch film for long-term soil protection.',
    image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹12/sq meter',
    wholesalePrice: '₹10/sq meter'
  },

  // Rainpipes
  {
    id: 'pvc-rainpipe',
    name: 'PVC Rain Pipe',
    category: 'rainpipes',
    description: 'Durable PVC rain pipes for efficient water drainage and collection.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹45/meter',
    wholesalePrice: '₹38/meter'
  },
  {
    id: 'hdpe-rainpipe',
    name: 'HDPE Rain Pipe',
    category: 'rainpipes',
    description: 'High-density polyethylene pipes for long-lasting water systems.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹55/meter',
    wholesalePrice: '₹48/meter'
  },

  // Spray Pumps
  {
    id: 'battery-sprayer',
    name: 'Battery Operated Sprayer',
    category: 'sprayPumps',
    description: 'Efficient battery-operated sprayer for easy application of pesticides and fertilizers.',
    image: 'https://images.pexels.com/photos/4503268/pexels-photo-4503268.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹3500/unit',
    wholesalePrice: '₹3200/unit',
    specifications: ['16L capacity', 'Rechargeable battery', 'Adjustable nozzle'],
    benefits: ['Labor saving', 'Uniform application', 'Easy to operate']
  },
  {
    id: 'manual-sprayer',
    name: 'Manual Hand Sprayer',
    category: 'sprayPumps',
    description: 'Reliable manual sprayer for small-scale applications.',
    image: 'https://images.pexels.com/photos/4503268/pexels-photo-4503268.jpeg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹800/unit',
    wholesalePrice: '₹650/unit'
  }
];

export const categories = [
  { key: 'seeds', icon: '🌱' },
  { key: 'fertilizers', icon: '🌿' },
  { key: 'pesticides', icon: '🧴' },
  { key: 'herbicides', icon: '🌾' },
  { key: 'chemicals', icon: '⚗️' },
  { key: 'irrigation', icon: '💧' },
  { key: 'mulching', icon: '📄' },
  { key: 'rainpipes', icon: '🚰' },
  { key: 'sprayPumps', icon: '🔧' }
];