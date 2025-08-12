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




  // fungicides
  {
    "id": "tag-azad",
    "name": "TAG Azad",
    "category": "fungicides",
    "description": "TAG Azad is a systemic and contact fungicide containing Tebuconazole 10% + Sulphur 65% WG, effective against a wide range of fungal diseases in crops.",
    "image": "src/images/fungicides/azad.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹750/kg",
    "wholesalePrice": "₹680/kg",
    "specifications": [
      "Tebuconazole 10% + Sulphur 65% WG formulation",
      "Systemic and contact action",
      "Prevents and cures fungal diseases"
    ],
    "benefits": [
      "Dual action for broad-spectrum control",
      "Improves plant health",
      "Long-lasting protection"
    ]
  },
  {
    "id": "benmain",
    "name": "Benmain",
    "category": "fungicides",
    "description": "Benmain is a fungicide containing Carbendazim 50% WP, used to control a wide range of fungal diseases in various crops.",
    "image": "src/images/fungicides/benmain.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹450/kg",
    "wholesalePrice": "₹400/kg",
    "specifications": [
      "Carbendazim 50% WP formulation",
      "Systemic fungicide",
      "Effective against multiple fungal pathogens"
    ],
    "benefits": [
      "Prevents and cures fungal infections",
      "Suitable for many crops",
      "Cost-effective solution"
    ]
  },
  {
    "id": "bestline",
    "name": "Bestline",
    "category": "fungicides",
    "description": "Bestline contains Pyraclostrobin 20% WG, a broad-spectrum fungicide for preventive and curative control of several crop diseases.",
    "image": "src/images/fungicides/bestline.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1200/kg",
    "wholesalePrice": "₹1100/kg",
    "specifications": [
      "Pyraclostrobin 20% WG formulation",
      "Prevents spore germination",
      "Long residual control"
    ],
    "benefits": [
      "Broad-spectrum disease control",
      "Improves plant vigour",
      "Rainfast action"
    ]
  },
  {
    "id": "crizol",
    "name": "Crizol",
    "category": "fungicides",
    "description": "Crizol is a combination fungicide containing Cymoxanil 8% + Mancozeb 64% WP, providing both systemic and contact action against fungal diseases.",
    "image": "src/images/fungicides/crizol.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹550/kg",
    "wholesalePrice": "₹500/kg",
    "specifications": [
      "Cymoxanil 8% + Mancozeb 64% WP formulation",
      "Systemic and contact activity",
      "Effective against downy mildew and blight"
    ],
    "benefits": [
      "Dual mode of action for better control",
      "Prevents resistance build-up",
      "Improves crop yield"
    ]
  },
  {
    "id": "custodia",
    "name": "Custodia",
    "category": "fungicides",
    "description": "Custodia is a fungicide with Azoxystrobin 11% + Tebuconazole 18.3% w/w SC, offering systemic protection and long-lasting disease control.",
    "image": "src/images/fungicides/custodia.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1500/litre",
    "wholesalePrice": "₹1400/litre",
    "specifications": [
      "Azoxystrobin 11% + Tebuconazole 18.3% SC formulation",
      "Systemic action",
      "Controls a wide range of fungal diseases"
    ],
    "benefits": [
      "Long residual effect",
      "Promotes healthy crop growth",
      "Highly effective in disease prevention"
    ]
  },
  {
    "id": "macoban-c",
    "name": "Macoban C",
    "category": "fungicides",
    "description": "Macoban C is a fungicide containing Carbendazim 12% + Mancozeb 63% WP, combining systemic and contact activity for disease control.",
    "image": "src/images/fungicides/macoban%20c.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹520/kg",
    "wholesalePrice": "₹480/kg",
    "specifications": [
      "Carbendazim 12% + Mancozeb 63% WP formulation",
      "Systemic and contact fungicide",
      "Controls various fungal diseases"
    ],
    "benefits": [
      "Broad-spectrum protection",
      "Prevents spread of disease",
      "Improves crop yield and quality"
    ]
  },
  {
    "id": "macoban-m45",
    "name": "Macoban M-45",
    "category": "fungicides",
    "description": "Macoban M-45 contains Mancozeb 75% WP, a broad-spectrum contact fungicide effective against many fungal diseases.",
    "image": "src/images/fungicides/macoban.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹420/kg",
    "wholesalePrice": "₹380/kg",
    "specifications": [
      "Mancozeb 75% WP formulation",
      "Contact fungicide",
      "Prevents fungal spore germination"
    ],
    "benefits": [
      "Broad-spectrum activity",
      "Cost-effective disease control",
      "Safe for many crops"
    ]
  },

  {
    "id": "minister",
    "name": "Minister",
    "category": "fungicides",
    "description": "Minister is a fungicide containing Hexaconazole 5% SC, a systemic triazole fungicide effective in controlling a wide range of fungal diseases.",
    "image": "src/images/fungicides/minister.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹600/litre",
    "wholesalePrice": "₹550/litre",
    "specifications": [
      "Hexaconazole 5% SC formulation",
      "Systemic action",
      "Controls powdery mildew, sheath blight, and other fungal diseases"
    ],
    "benefits": [
      "Long-lasting protection",
      "Improves crop health",
      "Effective even at low doses"
    ]
  },
  {
    "id": "mirador",
    "name": "Mirador",
    "category": "fungicides",
    "description": "Mirador contains Azoxystrobin 23% SC, a broad-spectrum systemic fungicide for preventive and curative control of fungal diseases in crops.",
    "image": "src/images/fungicides/mirador.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1800/litre",
    "wholesalePrice": "₹1700/litre",
    "specifications": [
      "Azoxystrobin 23% SC formulation",
      "Systemic translaminar movement",
      "Prevents fungal spore germination"
    ],
    "benefits": [
      "Highly effective against a wide range of fungal pathogens",
      "Promotes plant vigour",
      "Long residual control"
    ]
  },
  {
    "id": "shamir",
    "name": "Shamir",
    "category": "fungicides",
    "description": "Shamir is a combination fungicide containing Metalaxyl 8% + Mancozeb 64% WP, offering both systemic and contact protection against fungal diseases.",
    "image": "src/images/fungicides/shamir.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹500/kg",
    "wholesalePrice": "₹460/kg",
    "specifications": [
      "Metalaxyl 8% + Mancozeb 64% WP formulation",
      "Systemic and contact activity",
      "Effective against downy mildew and late blight"
    ],
    "benefits": [
      "Dual mode of action for improved control",
      "Prevents disease spread",
      "Enhances crop quality and yield"
    ]
  },

  {
    "id": "tricolor",
    "name": "Tricolor",
    "category": "fungicides",
    "description": "Tricolor is a broad-spectrum fungicide formulated to provide effective control over various chewing and sucking pests in crops.",
    "image": "src/images/fungicides/tricolor.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹850/litre",
    "wholesalePrice": "₹780/litre",
    "specifications": [
      "Broad-spectrum insecticide",
      "Effective on both chewing and sucking pests",
      "Suitable for multiple crops"
    ],
    "benefits": [
      "Fast knockdown effect",
      "Long-lasting pest control",
      "Improves crop health and yield"
    ]
  },
  {
    "id": "warden",
    "name": "Warden",
    "category": "fungicides",
    "description": "Warden is a systemic and contact fungicide designed to provide robust protection against major insect pests in field and horticultural crops.",
    "image": "src/images/fungicides/warden.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹900/litre",
    "wholesalePrice": "₹820/litre",
    "specifications": [
      "Systemic and contact action",
      "Controls a wide range of insect pests",
      "Suitable for foliar application"
    ],
    "benefits": [
      "Dual action for effective control",
      "Rapid pest knockdown",
      "Enhances plant vigour"
    ]
  },
  {
    "id": "zamir",
    "name": "Zamir",
    "category": "fungicides",
    "description": "Zamir is a powerful fungicide providing excellent control of both early and late-stage insect infestations across crops.",
    "image": "src/images/fungicides/zamir.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹980/litre",
    "wholesalePrice": "₹900/litre",
    "specifications": [
      "Highly effective against multiple pest species",
      "Fast action formula",
      "Long residual control"
    ],
    "benefits": [
      "Minimizes crop damage",
      "Supports healthy plant growth",
      "Cost-effective solution for farmers"
    ]
  }
,{
  "id": "mastercop",
  "name": "Mastercop",
  "category": "fungicides",
  "description": "Mastercop is a systemic fungicide containing Copper Sulphate Pentahydrate 23.99% w/v SC (equivalent to 6% w/v copper content), providing effective control of fungal and bacterial diseases in various crops.",
  "image": "src/images/fungicides/mastercop.jpg?auto=compress&cs=tinysrgb&w=500",
  "retailPrice": "₹720/litre",
  "wholesalePrice": "₹680/litre",
  "specifications": [
    "Copper Sulphate Pentahydrate 23.99% w/v SC formulation",
    "Contains 6% w/v copper content",
    "Systemic action with protective and curative properties"
  ],
  "benefits": [
    "Controls a wide range of fungal and bacterial diseases",
    "Provides long-lasting protection",
    "Improves plant health and productivity"
  ]
}
,
  {
    "id": "taglife-h",
    "name": "Taglife-H",
    "category": "fungicides",
    "description": "Taglife is an fungicide containing Fipronil 80% WG, effective for the control of stem borers, leaf folders, and termites in rice and other crops, offering long-lasting protection.",
    "image": "src/images/fungicides/taglife-h.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1680/kg",
    "wholesalePrice": "₹1600/kg",
    "specifications": [
      "Fipronil 80% WG formulation",
      "Controls stem borers, leaf folders, and termites",
      "Long residual action"
    ],
    "benefits": [
      "Provides prolonged pest protection",
      "Effective against multiple crop pests",
      "Improves crop yield and quality"
    ]
  },
    {
    "id": "taglife-v",
    "name": "Taglife-V",
    "category": "fungicides",
    "description": "(description edit karaych)Taglife is an fungicide containing Fipronil 80% WG, effective for the control of stem borers, leaf folders, and termites in rice and other crops, offering long-lasting protection.",
    "image": "src/images/fungicides/taglife-v.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1680/kg",
    "wholesalePrice": "₹1600/kg",
    "specifications": [
      "Fipronil 80% WG formulation",
      "Controls stem borers, leaf folders, and termites",
      "Long residual action"
    ],
    "benefits": [
      "Provides prolonged pest protection",
      "Effective against multiple crop pests",
      "Improves crop yield and quality"
    ]
  },
  {
    "id": "tagmil",
    "name": "Tagmil",
    "category": "fungicides",
    "description": "Tagmil is an fungicide with Imidacloprid 70% WG formulation, highly effective against sucking pests like aphids, jassids, and whiteflies in cotton, vegetables, and other crops.",
    "image": "src/images/fungicides/tagmil.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1750/kg",
    "wholesalePrice": "₹1670/kg",
    "specifications": [
      "Imidacloprid 70% WG formulation",
      "Systemic insecticide for sucking pest control",
      "Suitable for cotton, vegetables, and more"
    ],
    "benefits": [
      "Highly effective on sucking pests",
      "Provides long-lasting protection",
      "Enhances plant vigor and yield"
    ]
  },
  {
    "id": "tagmycin",
    "name": "Tagmycin",
    "category": "fungicides",
    "description": "Tagmycin is an fungicide containing Emamectin Benzoate 5% SG, providing excellent control over lepidopteran pests such as fruit borers and pod borers in vegetables, pulses, and cotton.",
    "image": "src/images/fungicides/tagmycin.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹820/kg",
    "wholesalePrice": "₹780/kg",
    "specifications": [
      "Emamectin Benzoate 5% SG formulation",
      "Effective against fruit borers and pod borers",
      "Suitable for vegetables, pulses, and cotton"
    ],
    "benefits": [
      "Quick and long-lasting pest control",
      "Effective at low doses",
      "Improves crop quality and market value"
    ]
  },
  {
    "id": "tagron",
    "name": "Tagron",
    "category": "fungicides",
    "description": "Tagron is a systemic fungicide with Dinotefuran 20% SG formulation, used for controlling brown planthopper and other major sucking pests in rice and horticultural crops.",
    "image": "src/images/fungicides/tagron.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1950/kg",
    "wholesalePrice": "₹1880/kg",
    "specifications": [
      "Dinotefuran 20% SG formulation",
      "Systemic action for quick pest knockdown",
      "Controls brown planthopper and other pests"
    ],
    "benefits": [
      "Fast-acting on target pests",
      "Effective on resistant pest populations",
      "Promotes healthy and uniform crop growth"
    ]
  },
  {
    "id": "topmast",
    "name": "Topmast",
    "category": "fungicides",
    "description": "Topmast is a combination fungicide containing Chlorantraniliprole 8.8% + Thiamethoxam 17.5% SC, delivering broad-spectrum control against both chewing and sucking pests in crops like cotton, rice, and vegetables.",
    "image": "src/images/fungicides/topmast.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1680/litre",
    "wholesalePrice": "₹1600/litre",
    "specifications": [
      "Chlorantraniliprole 8.8% + Thiamethoxam 17.5% SC formulation",
      "Dual mode of action (systemic and contact)",
      "Broad-spectrum pest control"
    ],
    "benefits": [
      "Controls both chewing and sucking pests",
      "Long residual effect",
      "Enhances crop health and productivity"
    ]
  },
  // Herbicides
  {
    id: "2-4d-herbicide",
    name: "2,4-D Amine Salt 58% SL",
    category: "herbicides",
    description: "Effective post-emergence herbicide used for controlling broadleaf weeds in cereal crops.",
    image: "src/images/herbicides/4-d main.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "₹220/bottle",
    wholesalePrice: "₹190/bottle"
  },
  {
    id: "agil-herbicide",
    name: "Propaquizafop 10% EC",
    category: "herbicides",
    description: "Selective herbicide used for post-emergence control of grassy weeds in broadleaf crops.",
    image: "src/images/herbicides/agil.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "₹240/bottle",
    wholesalePrice: "₹210/bottle"
  },
  {
    id: "atranex-herbicide",
    name: "Atranex Herbicide",
    category: "herbicides",
    description: "Atrazine-based herbicide for pre-emergence control of broadleaf and grassy weeds.",
    image: "src/images/herbicides/atranex.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "₹180/pack",
    wholesalePrice: "₹150/pack"
  },
  {
    id: "atrashakti-herbicide",
    name: "Atrazine 50% WP",
    category: "herbicides",
    description: "Granular weedicide formulation for effective pre- and post-emergence weed control in maize and sugarcane.",
    image: "src/images/herbicides/atrashakti.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "₹160/pack",
    wholesalePrice: "₹140/pack"
  },
  {
    id: "dekel-herbicide",
    name: "Propaquizafop 5% + Oxyfluorfen 12% EC",
    category: "herbicides",
    description: "Combination herbicide for onion and garlic crops, targeting both broadleaf and grassy weeds.",
    image: "src/images/herbicides/dekel.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "₹260/bottle",
    wholesalePrice: "₹230/bottle"
  },
  {
    id: "hastar-herbicide",
    name: "HASTAR® Tembotrione 34.4% w/w SC",
    category: "herbicides",
    description: "A broad-spectrum, post-emergence corn herbicide which is used along with surfactant for the control of grassy and broad leaf weeds. It belongs to the Triketones group of herbicides, and it has Tembotrione as active ingredient. It works by inhibiting the activity of the 4 hydroxy-phenyl-pyruvate dexoygenase (4 HPPD) enzyme.",
    image: "src/images/herbicides/hastar.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "eliwid-herbicide",
    name: "ELIWID® Topramezone 336 g/l (w/v) SC",
    category: "herbicides",
    description: "A powerful herbicide for corn that provides broad-spectrum control of grassy and broad-leaved weeds. Its active ingredient, Topramezone, effectively inhibits the HPPD enzyme, disrupting the weeds' biosynthetic pathways.",
    image: "src/images/herbicides/eliwid.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "galigan-herbicide",
    name: "GALIGAN® Oxyfluorfen 23.5% EC",
    category: "herbicides",
    description: "A selective pre-emergence and post-emergence herbicide used to control a broad spectrum of annual and perennial weeds. It is widely used in various crops to manage weed populations effectively and enhance crop growth.",
    image: "src/images/herbicides/galigan.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "glyclear-herbicide",
    name: "GLYCLEAR Glyphosate 41% SL",
    category: "herbicides",
    description: "A non-selective and systemic herbicide. It is a post-emergence herbicide for the control of annual perennial, broadleaf and grassy weeds. It contains Glyphosate 41% SL and works by inhibiting the EPSPS enzyme, which prevents protein synthesis in the plant.",
    image: "src/images/herbicides/glyclear.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "dhol-herbicide",
    name: "DHOL Ammonium Salt of Glyphosate 71% SG",
    category: "herbicides",
    description: "A non-selective and systemic herbicide. It is a post-emergence herbicide for the control of annual perennial, broadleaf and grassy weeds. It contains Ammonium salt of Glyphosate 71% SG and kills weeds by inhibiting the EPSPS synthesis in the plant.",
    image: "src/images/herbicides/dhol.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "tamar-herbicide",
    name: "TAMAR® Ametryne 80% WG",
    category: "herbicides",
    description: "A selective herbicide containing Ametryne 80% WG, formulated as a Water Dispersible Granule. It is used for both pre- and post-emergence control of broadleaf and grassy weeds, particularly in sugarcane crops.",
    image: "src/images/herbicides/tamar.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "tupro-herbicide",
    name: "TUPRO® Topramezone 336 g/l (w/v) SC",
    category: "herbicides",
    description: "A post-emergence herbicide for maize crops, containing Topramezone. It provides broad-spectrum control of both grassy and broadleaf weeds by inhibiting the HPPD enzyme, which disrupts plant pigment formation.",
    image: "src/images/herbicides/tupro.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "upturn-herbicide",
    name: "UPTURN® Fomesafen 16.5% w/w + Propaquizafop 5.2% w/w ME",
    category: "herbicides",
    description: "A combination herbicide with two active ingredients, Fomesafen and Propaquizafop. This micro-emulsion formulation provides broad-spectrum control of a wide range of broadleaf and grassy weeds in targeted crops.",
    image: "src/images/herbicides/upturn.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "weedblock-herbicide",
    name: "WeedBlock® Imazethapyr 10% SL",
    category: "herbicides",
    description: "A selective, systemic herbicide containing Imazethapyr, formulated as a Soluble Liquid. It is used for post-emergence control of a wide range of annual broadleaf and grassy weeds, specifically in legume crops like soybeans and groundnuts.",
    image: "src/images/herbicides/weedblock.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  },
  {
    id: "paranex-herbicide",
  name: "Paranex® Paraquat Dichloride 24% SL",
    category: "herbicides",
    description: "A non-selective contact herbicide containing Paraquat Dichloride. It is a fast-acting solution that kills green plant tissue on contact. It is commonly used for total weed control in non-crop areas or as a directed spray in certain crops.",
    image: "src/images/herbicides/paranex.jpg?auto=compress&cs=tinysrgb&w=500",
    retailPrice: "Price not available",
    wholesalePrice: "Price not available"
  }
,
  //insecticides
  
  {
    id: 'acemain',
    name: 'Acemain',
    category: 'insecticides',
    description: "Acemain is an SP formulation insecticide used to control a wide range of insect pests in crops like rice and cotton, ensuring healthy plants and higher yields.",
    image: 'src/images/insecticides/acemain.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹850/kg',
    wholesalePrice: '₹800/kg',
    specifications: ['Broad spectrum pest control', 'High potency formulation', 'Suitable for cotton and paddy'],
    benefits: ['Quick knockdown effect', 'Long residual activity', 'Enhances crop yield']
  },
  {
    id: 'action505',
    name: 'Action 505',
    category: 'insecticides',
    description:   "Action 505 is an EC formulation insecticide containing Chlorpyriphos 50% and Cypermethrin 5%, providing strong knockdown action against chewing and sucking pests.",
    image: 'src/images/insecticides/action505.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹950/litre',
    wholesalePrice: '₹900/litre',
    specifications: ['Combination formula', 'Suitable for multiple crops', 'Fast acting'],
    benefits: ['Effective pest management', 'Prolonged protection', 'Easy application']
  },
  {
    id: 'agadisc',
    name: "Agadi SC",
    category: 'insecticides',
    description:"Agadi SC is a Fipronil 5% SC insecticide effective against stem borers, leaf folders, and other pests in crops such as cabbage, rice, and cotton.",
    image: 'src/images/insecticides/agadisc.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹1200/kg',
    wholesalePrice: '₹1150/kg',
    specifications: ['Broad spectrum activity', 'Systemic action', 'Rainfast formulation'],
    benefits: ['Protects against fungal damage', 'Promotes healthy growth', 'Cost-effective protection']
  },
  {
    id: 'barazide',
    name: 'Barazide',
    category: 'insecticides',
    description: 
 "Barazide is a combination insecticide with Novaluron 5.25% and Emamectin Benzoate 0.9% SC, targeting caterpillars and other damaging insect pests in vegetables and pulses.",
 
    image: 'src/images/insecticides/barazide.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹780/litre',
    wholesalePrice: '₹750/litre',
    specifications: ['Contact action', 'Fast knockdown', 'Works on multiple pests'],
    benefits: ['Prevents crop loss', 'Improves quality yield', 'Easy mixing and spraying']
  },
  {
    id: 'boregang',
    name: 'Boregan G',
    category: 'insecticides',
    description: "Boregan G is a granular insecticide containing Cartap Hydrochloride 4% GR for controlling stem borers and leaf folders in rice cultivation.",
 
    image: 'src/images/insecticides/boregang.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹1100/litre',
    wholesalePrice: '₹1050/litre',
    specifications: ['Targeted borer control', 'Systemic activity', 'Long residual effect'],
    benefits: ['Prevents severe crop damage', 'Saves reapplication cost', 'Promotes better harvest']
  },

  {
    id: 'cypermethrin',
    name: 'Challenger 25',
    category: 'insecticides',
    description: "Challenger 25 is a Cypermethrin 25% EC insecticide effective against a variety of chewing and sucking pests across multiple crops.",
 
    image: 'src/images/insecticides/cypermethrin.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹450/litre',
    wholesalePrice: '₹420/litre',
    specifications: ['Broad spectrum activity', 'Low dosage requirement', 'Quick knockdown effect'],
    benefits: ['Effective on multiple pests', 'Cost-efficient', 'Safe for recommended crops']
  },
  {
    id: 'delegate',
    name: 'Delegate',
    category: 'insecticides',
    description:  "Delegate is a Spinetoram 11.7% SC insecticide providing superior control over thrips, fruit borers, and other pests in fruits and vegetables.",
 
    image: 'src/images/insecticides/delegate.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹1500/kg',
    wholesalePrice: '₹1450/kg',
    specifications: ['Novel mode of action', 'Highly effective at low doses', 'Quick pest mortality'],
    benefits: ['Protects crop quality', 'Minimizes pest resurgence', 'Environment-friendly profile']
  },
  {
    id: 'ekka',
    name: 'Tag Ekka',
    category: 'insecticides',
    description:  "Tag Ekka is a Thiamethoxam 12.6% + Lambda-Cyhalothrin 9.5% ZC insecticide that offers both systemic and contact action against sucking and chewing pests.",

    image: 'src/images/insecticides/ekka.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹880/litre',
    wholesalePrice: '₹850/litre',
    specifications: ['Dual pest control', 'Systemic and contact action', 'Fast acting'],
    benefits: ['Reduces pest pressure', 'Boosts crop growth', 'Suitable for multiple crops']
  }
,
 {
    "id": "emboz",
    "name": "Emboz",
    "category": "insecticides",
    "description": "Emboz is a second-generation avermectin insecticide (Emamectin Benzoate 5% SG), highly effective against caterpillar pests such as bollworms, fruit & shoot borer, and fall armyworm in crops like cotton, okra, brinjal and maize.",
    "image": "src/images/insecticides/emboz.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1049/kg",
    "wholesalePrice": "₹900/kg",
    "specifications": [
      "Emamectin Benzoate 5% SG formulation",
      "Stomach action; translaminar movement",
      "Effective against resistant larvae"
    ],
    "benefits": [
      "Rapid pest paralysis and death",
      "Long residual effect",
      "Low toxicity and minimal residue"
    ]
  },
  {
    "id": "forpido",
    "name": "Forpido",
    "category": "insecticides",
    "description": "Forpido is a granular formulation (Chlorantraniliprole 0.53% + Fipronil 0.8%) enriched with zinc, designed for early control of rice stem borer while also promoting root development and productive tillers.",
    "image": "src/images/insecticides/forpido.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1399/3 kg",
    "wholesalePrice": "₹1200/3 kg",
    "specifications": [
      "Dual active ingredients (Chlorantraniliprole + Fipronil)",
      "Granular (GR) enriched with zinc",
      "Systemic and contact action"
    ],
    "benefits": [
      "Effective early-stage borer control",
      "Enhances tiller and root growth",
      "Long-lasting protection"
    ]
  },
  {
    "id": "imidacloprid",
    "name": "Imidacloprid 30.5% SC",
    "category": "insecticides",
    "description": "Imidacloprid 30.5% SC is a systemic neonicotinoid insecticide effective against sucking, soil-dwelling, and foliar-feeding pests; widely used in foliar spray, soil drench, and seed treatment.",
    "image": "src/images/insecticides/imidacloprid.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹649/litre",
    "wholesalePrice": "₹550/litre",
    "specifications": [
      "Systemic Suspension Concentrate",
      "Broad-spectrum control",
      "Rainfast, long residual action"
    ],
    "benefits": [
      "Highly effective against sucking pests",
      "Cost-effective with low dosage",
      "Versatile application modes"
    ]
  },
  {
    "id": "lamdex-super",
    "name": "Lamdex Super",
    "category": "insecticides",
    "description": "Lamdex Super is a broad-spectrum contact and stomach insecticide containing Lambda-Cyhalothrin 5% EC, used to control lepidopteran and sucking pests in crops such as cotton, chilli, brinjal, and okra.",
    "image": "src/images/insecticides/lamdexsuper.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹480/litre",
    "wholesalePrice": "₹420/litre",
    "specifications": [
      "Lambda-Cyhalothrin 5% EC formulation",
      "Contact and stomach action",
      "Rainfast with quick knockdown"
    ],
    "benefits": [
      "Controls a wide range of pests",
      "Fast-acting formulation",
      "Economical pest management solution"
    ]
  },
  {
    "id": "magik-super",
    "name": "Magik Super",
    "category": "insecticides",
    "description": "Magik Super is a systemic and contact insecticide containing Thiamethoxam 12.6% + Lambda-Cyhalothrin 9.5% ZC, providing both preventive and curative action against sucking and chewing pests.",
    "image": "src/images/insecticides/magik%20super.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹950/litre",
    "wholesalePrice": "₹880/litre",
    "specifications": [
      "Thiamethoxam + Lambda-Cyhalothrin ZC formulation",
      "Dual action (systemic + contact)",
      "Long residual control"
    ],
    "benefits": [
      "Effective on multiple pest types",
      "Prolonged protection period",
      "Prevents pest resurgence"
    ]
  },
  {
    "id": "magix",
    "name": "Magix",
    "category": "insecticides",
    "description": "Magix is a combination insecticide containing Emamectin Benzoate 1.5% + Fipronil 3.5% SC, effective against lepidopteran and sucking pests in vegetable and field crops.",
    "image": "src/images/insecticides/magix.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1100/litre",
    "wholesalePrice": "₹980/litre",
    "specifications": [
      "Emamectin Benzoate + Fipronil SC formulation",
      "Translaminar and systemic activity",
      "Controls resistant pest populations"
    ],
    "benefits": [
      "Dual active ingredients for enhanced control",
      "Effective on both larvae and adults",
      "Improved crop health and yield"
    ]
  },
  {
    "id": "pataka",
    "name": "Pataka",
    "category": "insecticides",
    "description": "Pataka is a broad-spectrum insecticide containing Profenofos 40% + Cypermethrin 4% EC, providing effective control against a wide range of sucking and chewing pests in various crops.",
    "image": "src/images/insecticides/pataka.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹780/litre",
    "wholesalePrice": "₹720/litre",
    "specifications": [
      "Profenofos 40% + Cypermethrin 4% EC formulation",
      "Contact and stomach action",
      "Quick knockdown effect"
    ],
    "benefits": [
      "Controls both sucking and chewing pests",
      "Fast action with prolonged protection",
      "Helps improve crop quality and yield"
    ]
  },
  {
    "id": "plethora",
    "name": "Plethora",
    "category": "insecticides",
    "description": "Plethora is a combination insecticide containing Novaluron 5.25% + Indoxacarb 4.5% SC, designed for effective management of lepidopteran pests by disrupting their growth and feeding.",
    "image": "src/images/insecticides/plethora.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1250/litre",
    "wholesalePrice": "₹1180/litre",
    "specifications": [
      "Novaluron 5.25% + Indoxacarb 4.5% SC formulation",
      "Growth regulator and stomach poison",
      "Effective against larvae"
    ],
    "benefits": [
      "Prevents pest reproduction",
      "Long residual control",
      "Protects crops during vulnerable growth stages"
    ]
  },
  {
    "id": "profigan-plus",
    "name": "Profigan Plus",
    "category": "insecticides",
    "description": "Profigan Plus is a broad-spectrum insecticide containing Profenofos 40% + Cypermethrin 4% EC, effective against a variety of chewing and sucking pests in crops like cotton, pulses, and vegetables.",
    "image": "src/images/insecticides/progiganplus.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹800/litre",
    "wholesalePrice": "₹740/litre",
    "specifications": [
      "Profenofos 40% + Cypermethrin 4% EC formulation",
      "Dual mode of action (contact & stomach)",
      "Fast knockdown and prolonged control"
    ],
    "benefits": [
      "Effective against resistant pests",
      "Improves crop health",
      "Cost-effective pest control"
    ]
  },
  {
    "id": "suckgan",
    "name": "Suckgan",
    "category": "insecticides",
    "description": "Suckgan is a systemic insecticide containing Thiamethoxam 25% WG, designed for effective control of sucking pests like aphids, whiteflies, and jassids in a wide range of crops.",
    "image": "src/images/insecticides/suckgan.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1450/kg",
    "wholesalePrice": "₹1380/kg",
    "specifications": [
      "Thiamethoxam 25% WG formulation",
      "Systemic action for long-lasting protection",
      "Effective at low doses"
    ],
    "benefits": [
      "Quick absorption by plants",
      "Protects new growth",
      "Reduces need for frequent spraying"
    ]
  },
  {
    "id": "tagban",
    "name": "Tagban",
    "category": "insecticides",
    "description": "Tagban is an organophosphate insecticide containing Chlorpyriphos 20% EC, used for effective control of soil and foliage pests in crops such as cotton, groundnut, and vegetables.",
    "image": "src/images/insecticides/tagban.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹520/litre",
    "wholesalePrice": "₹480/litre",
    "specifications": [
      "Chlorpyriphos 20% EC formulation",
      "Contact, stomach, and fumigant action",
      "Broad-spectrum control"
    ],
    "benefits": [
      "Effective on soil pests and termites",
      "Long-lasting residual action",
      "Improves crop establishment"
    ]
  },
  {
    "id": "tagfun",
    "name": "Tag Fun",
    "category": "insecticides",
    "description": "Tag Fun contains Tolfenpyrad 15% EC, a novel insecticide effective against a wide range of sucking and chewing pests, providing quick knockdown and long residual activity.",
    "image": "src/images/insecticides/tagfun.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹1850/litre",
    "wholesalePrice": "₹1750/litre",
    "specifications": [
      "Tolfenpyrad 15% EC formulation",
      "Contact and stomach action",
      "Quick knockdown effect"
    ],
    "benefits": [
      "Effective on resistant pest populations",
      "Prolonged crop protection",
      "Supports better crop yield"
    ]
  },
  {
    "id": "tagor",
    "name": "Tagor",
    "category": "insecticides",
    "description": "Tagor is a systemic insecticide containing Dimethoate 30% EC, used for controlling sucking pests like aphids, jassids, and mites in various crops.",
    "image": "src/images/insecticides/tagor.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹600/litre",
    "wholesalePrice": "₹550/litre",
    "specifications": [
      "Dimethoate 30% EC formulation",
      "Systemic action",
      "Controls a wide range of sucking pests"
    ],
    "benefits": [
      "Quick penetration and pest control",
      "Long-lasting effectiveness",
      "Enhances plant vigor"
    ]
  }
,
  {
    "id": "tagprid",
    "name": "Tagprid",
    "category": "insecticides",
    "description": "Tagprid is a systemic insecticide containing Imidacloprid 70% WG, offering effective control against sucking pests in multiple crops.",
    "image": "src/images/insecticides/tagprid.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹950/kg",
    "wholesalePrice": "₹900/kg",
    "specifications": [
      "Imidacloprid 70% WG formulation",
      "Systemic action for long-lasting control",
      "Effective even at low doses"
    ],
    "benefits": [
      "Controls a wide range of sucking pests",
      "Provides prolonged protection to crops",
      "Improves crop health and yield"
    ]
  },
  {
    "id": "tagpro",
    "name": "TagPro",
    "category": "insecticides",
    "description": "TagPro is an organophosphate insecticide containing Profenofos 50% EC, providing broad-spectrum control against bollworms and sucking pests.",
    "image": "src/images/insecticides/tagpro.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹720/litre",
    "wholesalePrice": "₹680/litre",
    "specifications": [
      "Profenofos 50% EC formulation",
      "Contact and systemic action",
      "Effective on both immature and adult stages of pests"
    ],
    "benefits": [
      "Controls bollworms and sucking pests effectively",
      "Quick knockdown with residual effect",
      "Helps maintain crop quality"
    ]
  },
  {
    "id": "tagxone",
    "name": "Tagxone",
    "category": "insecticides",
    "description": "Tagxone is a systemic insecticide containing Thiamethoxam 25% WG, ensuring quick and long-lasting control of major sucking pests.",
    "image": "src/images/insecticides/tagxone.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹820/kg",
    "wholesalePrice": "₹780/kg",
    "specifications": [
      "Thiamethoxam 25% WG formulation",
      "Systemic and translaminar movement",
      "Fast action with prolonged effect"
    ],
    "benefits": [
      "Provides excellent control of aphids, jassids, and whiteflies",
      "Enhances plant vigour and growth",
      "Long residual control ensures reduced spray frequency"
    ]
  }
,
  // Irrigation
  {
    id: 'drip-irrigation-kit',
    name: 'Drip Irrigation Kit',
    category: 'irrigation',
    description: 'Complete drip irrigation system for efficient water usage and precise watering.',
    image: 'src/images/irrigation/drip.jpg?auto=compress&cs=tinysrgb&w=500',
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
    image: 'src/images/irrigation/sprinkler.jpg?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹3500/kit',
    wholesalePrice: '₹3200/kit'
  },

  // Mulching
  {
    id: 'mulching-paper',
    name: 'Biodegradable Mulching Paper',
    category: 'mulching',
    description: 'Eco-friendly mulching paper that helps retain soil moisture and suppress weeds.',
    image: 'src/images/mulchingpaper/1.webp?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹8/sq meter',
    wholesalePrice: '₹6/sq meter'
  },
  {
    id: 'plastic-mulch',
    name: 'Plastic Mulch Film',
    category: 'mulching',
    description: 'Durable plastic mulch film for long-term soil protection.',
    image: 'src/images/mulchingpaper/mp2.avif?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹12/sq meter',
    wholesalePrice: '₹10/sq meter'
  },

  // Rainpipes
  
  {
  id: "hdpe-rainpipe",
  name: "HDPE Rain Pipe",
  category: "rainpipes",
  description: "Durable High-Density Polyethylene (HDPE) rain pipe available in 20mm, 32mm, and 40mm sizes. Designed for efficient water distribution in agriculture, these pipes are UV-resistant, long-lasting, and easy to install—ideal for modern irrigation systems.",
  image: "src/images/rainpipes/rain pipes.webp?auto=compress&cs=tinysrgb&w=500",
  retailPrice: "₹50–₹60/meter (based on size)",
  wholesalePrice: "₹43–₹52/meter (based on size)"
},
//micronutrients 
  {
    "id": "eazyfert",
    "name": "Eazyfert",
    "category": "micronutrients",
    "description": "Micronutrient fertilizer mixture for correcting micronutrient deficiencies and promoting healthy crop growth.",
    "image": "src/images/micronutrients/eazyfert.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Micronutrient fertilizer mixture"
    ],
    "benefits": [
      "Corrects micronutrient deficiency",
      "Healthy crop growth"
    ]
  },
  {
    "id": "remedy",
    "name": "Remedy",
    "category": "micronutrients",
    "description": "Micronutrient mixture fertilizer for drip & foliar application.",
    "image": "src/images/micronutrients/remedy.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Micronutrient mixture fertilizer",
      "For drip & foliar application"
    ],
    "benefits": [
      "Corrects micronutrient deficiency",
      "Promotes healthy plant growth"
    ]
  },
  {
    "id": "microbor",
    "name": "Microbor",
    "category": "micronutrients",
    "description": "Di-Sodium Octa Borate Tetra Hydrate, a micronutrient fertilizer for drip and foliar application.",
    "image": "src/images/micronutrients/microbor.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Di-Sodium Octa Borate Tetra Hydrate",
      "B (Boron) 20.0% w/w min.",
      "For drip & foliar application"
    ],
    "benefits": [
      "Provides essential boron",
      "Supports healthy plant development"
    ]
  },
  {
    "id": "magnesiumsulphate",
    "name": "Magnesium Sulphate",
    "category": "micronutrients",
    "description": "Magnesium Sulphate heptahydrate, a micronutrient fertiliser for drip & soil application.",
    "image": "src/images/micronutrients/magnesiumsulphate.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "MgSO₄.7H₂O",
      "Mg (Magnesium) 9.5% min.",
      "S (Sulphur) 12% min.",
      "For drip & soil application"
    ],
    "benefits": [
      "Provides essential magnesium and sulphur",
      "Enhances chlorophyll production"
    ]
  },
  {
    "id": "chelmix-combi",
    "name": "Chelmix Combi",
    "category": "micronutrients",
    "description": "A micronutrient fertilizer mixture designed to correct micro-nutrient deficiencies and ensure healthy crop growth.",
    "image": "src/images/micronutrients/chelmix.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Micronutrient fertilizer mixture"
    ],
    "benefits": [
      "Corrects micronutrient deficiency",
      "Promotes healthy crop growth"
    ]
  },
  {
    "id": "amigrow",
    "name": "Amigrow",
    "category": "micronutrients",
    "description": "A plant growth booster and biostimulant.",
    "image": "src/images/micronutrients/amigrow.jpg",
    "retailPrice": "Varies by volume",
    "wholesalePrice": "Varies by volume",
    "specifications": [
      "Plant growth booster",
      "Biostimulant"
    ],
    "benefits": [
      "Enhances plant growth",
      "Improves crop yield"
    ]
  },
  {
    "id": "sequel-zn",
    "name": "Sequel-Zn",
    "category": "micronutrients",
    "description": "A chelated micronutrient fertilizer containing zinc (Zn) for all crops.",
    "image": "src/images/micronutrients/sequel-zn.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Chelated Zinc (Zn)",
      "12% EDTA Chelate",
      "For all crops"
    ],
    "benefits": [
      "Corrects zinc deficiency",
      "Improves plant metabolism and growth"
    ]
  },
  {
    "id": "sequel-sem2",
    "name": "Sequel-SEM 2",
    "category": "micronutrients",
    "description": "A chelated micronutrient mixture fertilizer for drip & foliar application for all crops.",
    "image": "src/images/micronutrients/sequel-sem2.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Chelated micronutrients mixture",
      "For drip & foliar application",
      "For all crops"
    ],
    "benefits": [
      "Corrects multiple micronutrient deficiencies",
      "Ensures balanced plant nutrition"
    ]
  },
  {
    "id": "binge",
    "name": "Binge",
    "category": "Plant Growth Regulators",
    "description": "A plant growth regulator containing Gibberellic acid.",
    "image": "binge.jpg",
    "retailPrice": "Varies by volume",
    "wholesalePrice": "Varies by volume",
    "specifications": [
      "Gibberellic acid 0.001% L",
      "Plant growth regulator"
    ],
    "benefits": [
      "Promotes cell elongation and growth",
      "Improves fruit size and yield"
    ]
  },
  {
    "id": "hicon-60",
    "name": "HiCON-60",
    "category": "Amino Acids",
    "description": "An amino acid-based product for plant growth and stress resistance.",
    "image": "hicon-60.jpg",
    "retailPrice": "Varies by volume",
    "wholesalePrice": "Varies by volume",
    "specifications": [
      "Amino Acids (60% w/w)"
    ],
    "benefits": [
      "Enhances plant vigor",
      "Helps plants recover from stress"
    ]
  },
  
  {
    "id": "sprinkle",
    "name": "Sprinkle",
    "category": "micronutrients",
    "description": "A micronutrient fertilizer mixture as per Maharashtra State Grade No.2, suitable for all crops.",
    "image": "src/images/micronutrients/sprinkle.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Micronutrient fertilizer mixture",
      "Maharashtra State Grade No.2"
    ],
    "benefits": [
      "Corrects micronutrient deficiency",
      "Suitable for all crops"
    ]
  },
  {
    "id": "znb-essence",
    "name": "ZnB-Essence",
    "category": "micronutrients",
    "description": "A chelated micronutrient mixture fertilizer for plants.",
    "image": "src/images/micronutrients/znb-essence.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "Chelated micronutrient mixture fertilizer"
    ],
    "benefits": [
      "Provides essential Zinc (Zn) and Boron (B)",
      "Enhances plant nutrition"
    ]
  }
,
//water soluble 
  {
    "id": "aditya-npk-13-40-13",
    "name": "Aditya N:P:K 13:40:13",
    "category": "Water Soluble Fertilizers",
    "description": "100% water soluble mixture of fertilizers for drip & foliar application, with a high phosphorus content.",
    "image": "src/images/watersoluble/adityanpk134013.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K 13:40:13",
      "100% water soluble",
      "For drip & foliar application"
    ],
    "benefits": [
      "Promotes root development",
      "Enhances flowering and fruiting",
      "Boosts overall plant health"
    ]
  },
  {
    "id": "aditya-npk-13-0-45",
    "name": "Aditya N:P:K 13:0:45",
    "category": "Water Soluble Fertilizers",
    "description": "100% water soluble fertilizer for drip & foliar application, with a high potassium content.",
    "image": "src/images/watersoluble/adityanpk.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K 13:0:45",
      "100% water soluble",
      "For drip & foliar application"
    ],
    "benefits": [
      "Improves fruit quality and size",
      "Increases disease resistance",
      "Enhances ripening"
    ]
  },
  {
    "id": "aditya-npk-12-61-0",
    "name": "Aditya N:P:K 12:61:0",
    "category": "Water Soluble Fertilizers",
    "description": "100% water soluble complex fertilizer for drip & foliar application, with very high phosphorus content.",
    "image": "src/images/watersoluble/adityanpk12.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K 12:61:0",
      "100% water soluble",
      "For drip & foliar application"
    ],
    "benefits": [
      "Ideal for early growth stages",
      "Promotes strong root development",
      "Enhances flowering"
    ]
  },
  {
    "id": "aditya-npk-19-19-19",
    "name": "Aditya N:P:K 19:19:19",
    "category": "Water Soluble Fertilizers",
    "description": "100% water soluble mixture of fertilizers for drip & foliar application, providing a balanced NPK ratio.",
    "image": "src/images/watersoluble/adityanpk19.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K 19:19:19",
      "100% water soluble",
      "For drip & foliar application"
    ],
    "benefits": [
      "Balanced nutrition for all growth stages",
      "Promotes vigorous vegetative growth",
      "Increases overall yield"
    ]
  },
  {
    "id": "aditya-npk-00-52-34",
    "name": "Aditya N:P:K 00:52:34",
    "category": "Water Soluble Fertilizers",
    "description": "100% water soluble complex fertilizer with high phosphorus and potassium content for drip & foliar application.",
    "image": "src/images/watersoluble/adityanpk00.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K 00:52:34",
      "100% water soluble",
      "For drip & foliar application"
    ],
    "benefits": [
      "Excellent for flowering and fruiting stages",
      "Boosts fruit quality",
      "Strengthens plant structure"
    ]
  },
  {
    "id": "aditya-npk-00-60-20",
    "name": "Aditya N:P:K 00:60:20",
    "category": "Water Soluble Fertilizers",
    "description": "100% water soluble mixture of fertilizers for drip irrigation only, with a high phosphorus content.",
    "image": "src/images/watersoluble/adityanpk006020.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K 00:60:20",
      "100% water soluble",
      "For drip irrigation only"
    ],
    "benefits": [
      "Specifically formulated for drip systems",
      "Promotes vigorous root growth",
      "Improves crop yield"
    ]
  },
  {
    "id": "schoena",
    "name": "Schoena (Potassium Schoenit)",
    "category": "Water Soluble Fertilizers",
    "description": "A straight potassium fertiliser containing potassium schoenite for drip & foliar application.",
    "image": "src/images/watersoluble/schoena.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "K₂O: 23%",
      "MgO: 11%",
      "For drip & foliar application"
    ],
    "benefits": [
      "Provides essential potassium and magnesium",
      "Enhances fruit color and taste",
      "Increases plant resistance"
    ]
  },
  {
    "id": "nobel",
    "name": "Nobel",
    "category": "Water Soluble Fertilizers",
    "description": "A 100% water soluble mixture of fertilizers containing N, P, K, and Ca for drip & foliar application.",
    "image": "src/images/watersoluble/Nobel.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "N:P:K:Ca 10:00:20:07",
      "100% water soluble",
      "For drip & foliar application"
    ],
    "benefits": [
      "Provides a complete nutritional solution",
      "Strengthens cell walls with calcium",
      "Improves overall plant health and yield"
    ]
  },
  {
    "id": "sop",
    "name": "SOP (Potassium Sulphate)",
    "category": "Water Soluble Fertilizers",
    "description": "Straight potassium sulphate fertiliser for drip & foliar application.",
    "image": "src/images/watersoluble/sop.jpg",
    "retailPrice": "Varies by weight",
    "wholesalePrice": "Varies by weight",
    "specifications": [
      "K₂O: 50.5%",
      "S: 17.5% min.",
      "For drip & foliar application"
    ],
    "benefits": [
      "Provides essential potassium and sulfur",
      "Improves crop quality and yield",
      "Increases drought resistance"
    ]
  }
,
//pgr
{
  "id": "acti-wet",
  "name": "ACTI WET",
  "category": "pgr",
  "description": "Silicone-based non-ionic surfactant designed to reduce surface tension and improve the spread and penetration of agricultural sprays.",
  "image": "src/images/pgr/actiwet.jpg?auto=compress&cs=tinysrgb&w=500",
  "retailPrice": "₹450/litre",
  "wholesalePrice": "₹400/litre",
  "specifications": [
    "Silicone-based formula",
    "Non-ionic surfactant",
    "Surface tension reducing agent"
  ],
  "benefits": [
    "Enhances spray coverage",
    "Improves absorption of nutrients and pesticides",
    "Reduces wastage of spray solution"
  ]
}
,
  {
    "id": "binge",
    "name": "Binge",
    "category": "pgr",
    "description": "Gibberellic acid 0.001% L-based plant growth regulator for enhanced crop growth and yield.",
    "image": "src/images/pgr/binge.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹450/litre",
    "wholesalePrice": "₹400/litre",
    "specifications": ["Contains Gibberellic acid 0.001% L", "Liquid formulation", "Suitable for multiple crops"],
    "benefits": ["Promotes cell elongation", "Improves fruit set", "Enhances crop quality"]
  },
  {
    "id": "su-pick",
    "name": "SU-PICK",
    "category": "pgr",
    "description": "Plant growth regulator containing Gibberellic acid 0.001% L for better flowering and fruit development.",
    "image": "src/images/pgr/supick.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹480/litre",
    "wholesalePrice": "₹430/litre",
    "specifications": ["Contains Gibberellic acid 0.001% L", "Liquid form", "Applicable for a variety of crops"],
    "benefits": ["Stimulates plant growth", "Improves fruit size", "Enhances yield quality"]
  },
   {
    "id": "decorus",
    "name": "Decorus",
    "category": "pgr",
    "description": "pH balancer for spray solutions, ensuring optimal pesticide and nutrient effectiveness.",
    "image": "src/images/pgr/decorus.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹350/litre",
    "wholesalePrice": "₹300/litre",
    "specifications": ["Balances spray water pH to ideal levels", "Liquid formulation", "Compatible with most agrochemicals"],
    "benefits": ["Improves chemical absorption", "Prevents alkaline hydrolysis", "Enhances pesticide performance"]
  },
  {
    "id": "drip-saver",
    "name": "Drip Saver",
    "category": "pgr",
    "description": "Surface tension reducing agent for efficient drip irrigation and pesticide spraying.",
    "image": "src/images/pgr/dripsaver.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹420/litre",
    "wholesalePrice": "₹380/litre",
    "specifications": ["Reduces surface tension of water", "Improves coverage and penetration", "Liquid formulation"],
    "benefits": ["Ensures uniform water spread", "Reduces wastage", "Enhances chemical effectiveness"]
  },
  {
    "id": "eazystim-plus",
    "name": "EazyStim Plus++",
    "category": "pgr",
    "description": "Plant growth booster biostimulant for improved flowering, fruit setting, and overall yield.",
    "image": "src/images/pgr/easystim.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹600/litre",
    "wholesalePrice": "₹550/litre",
    "specifications": ["Liquid biostimulant", "Suitable for fruits and vegetables", "Contains essential plant nutrients"],
    "benefits": ["Enhances flowering", "Increases fruit size", "Improves yield quality"]
  },
  {
    "id": "growr",
    "name": "GrowR",
    "category": "pgr",
    "description": "Versatile plant growth booster for all crop types, promoting root and shoot development.",
    "image": "src/images/pgr/growr.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹500/litre",
    "wholesalePrice": "₹450/litre",
    "specifications": ["Liquid biostimulant", "Boosts root growth", "Suitable for all seasons"],
    "benefits": ["Improves plant vigor", "Enhances nutrient uptake", "Supports stress resistance"]
  },
  {
    "id": "hicon-60",
    "name": "HiCON-60",
    "category": "pgr",
    "description": "Amino acid-based biostimulant for improving plant health, flowering, and fruit development.",
    "image": "src/images/pgr/hicon60.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹700/litre",
    "wholesalePrice": "₹650/litre",
    "specifications": ["Contains 60% w/w amino acids", "Liquid form", "Suitable for all crops"],
    "benefits": ["Promotes protein synthesis", "Improves flowering", "Enhances fruit quality"]
  },
  {
    "id": "save-r",
    "name": "SAVE-R",
    "category": "pgr",
    "description": "Agricultural spray adjuvant and surface tension reducing agent for better spray coverage.",
    "image": "src/images/pgr/saver.jpg?auto=compress&cs=tinysrgb&w=500",
    "retailPrice": "₹400/litre",
    "wholesalePrice": "₹350/litre",
    "specifications": ["Improves spread and penetration", "Prevents droplet bouncing", "Liquid formulation"],
    "benefits": ["Reduces wastage", "Ensures uniform application", "Improves pesticide efficiency"]
  },
  // Spray Pumps
  {
    id: 'battery-sprayer',
    name: 'Battery Operated Sprayer',
    category: 'sprayPumps',
    description: 'Efficient battery-operated sprayer for easy application of pesticides and fertilizers.',
    image: 'src/images/spraypump/sp.png?auto=compress&cs=tinysrgb&w=500',
    retailPrice: '₹3500/unit',
    wholesalePrice: '₹3200/unit',
    specifications: ['16L capacity', 'Rechargeable battery', 'Adjustable nozzle'],
    benefits: ['Labor saving', 'Uniform application', 'Easy to operate']
  }
];

export const categories = [
  { key: 'seeds', icon: '🌱' },
  { key: 'Water Soluble Fertilizers', icon: '🌿' },
  { key: 'pgr', icon: '🧴' },
  { key: 'herbicides', icon: '🌾' },
  { key: 'insecticides', icon: '⚗️' },
  { key: 'micronutrients', icon: '🔬'},
  { key: 'fungicides', icon: '🦠'},
  { key: 'irrigation', icon: '💧' },
  { key: 'mulching', icon: '📄' },
  { key: 'rainpipes', icon: '🚰' },
  { key: 'spraypumps', icon: '🔧' }
];