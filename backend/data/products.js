const products = [
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in Battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 49990.01,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  
  {
    name: 'KLEENO Lightweight Mini Drone',
    image: '/images/drone.jpg',
    description:
      'KLEENO Lightweight Mini Drone with 4K Video, 48MP Photo, More Than 40 Mins Flight Time, Less than 249 g, Tri-Directional Auto Obstacle Sensing, Return to Home, Drone with Camera',
    brand: 'Kleeno',
    category: 'Electronics',
    price: 22887.90,
    countInStock: 2,
    rating: 3.9,
    numReviews: 8,
  },
  
  {
    name: 'Sony PlayStation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music Experience lightning-fast loading with an ultra-high speed.',
    brand: 'Sony',
    category: 'Electronics',
    price: 33390.39,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  
  {
    name: 'ASUS ROG Strix Z790-F Motherboard ',
    image: '/images/asusmb.jpg',
    description:
      'ASUS ROG Strix Z790-F Gaming WiFi LGA 1700 ATX Motherboard with 16 + 1 Power Stages, DDR5, 4xM.2 Slots, WiFi 6E, USB 3.2 Gen 2x2 Type-C, AI Overclocking, AI Cooling II, and Aura Sync RGB Lighting',
    brand: 'Asus',
    category: 'Electronics',
    price: 45099.89,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  
  {
    name: 'Meta Quest 3 128GB Console Virtual Reality',
    image: '/images/meta.jpg',
    description:
      'Meta Quest 3 Advanced All-in-One VR Headset (128GB, 1 Yr Warranty), Virtual Reality Console with Asgards Wrath 2 Game Free',
    brand: 'Meta',
    category: 'Electronics',
    price: 54999.90,
    countInStock: 7,
    rating: 3.7,
    numReviews: 5,
  },
  
  {
    name: 'Apple 2023 MacBook Pro Space Grey ',
    image: '/images/camera.jpg',
    description:
      'Apple 2023 MacBook Pro (14-inch, M3 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 1TB) - Space Grey',
    brand: 'Apple',
    category: 'Electronics',
    price: 189900.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  
  {
    name: 'Sony God Of War Ragnarok | PS5 Game (PlayStation 5)',
    image: '/images/gowar.jpg',
    description:
      'Sony God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)',
    brand: 'Sony',
    category: 'Video Games',
    price: 4299.79,
    countInStock: 3,
    rating: 4.6,
    numReviews: 9,
  },
  
  {
    name: 'Apple Watch Ultra 2 2nd GEN',
    image: '/images/iwatch.png',
    description:
      'Shop Apple Watch Ultra 2 in the 49mm Titanium Case. Available with cellular connectivity and three specialised straps',
    brand: 'Apple',
    category: 'Electronics',
    price: 89900.99,
    countInStock: 9,
    rating: 4.2,
    numReviews: 6,
  },
  
  {
    name: 'Panasonic X1500 4K Professional Camcorder',
    image: '/images/camc.jpg',
    description:
      'Panasonic X1500 4K Professional Camcorder with 24X Optical Zoom, WiFi HD Live Streaming, HC-X1500 (USA Black)',
    brand: 'Panasonic',
    category: 'Electronics',
    price: 331820.14,
    countInStock:9,
    rating: 4.8,
    numReviews: 1,
  },
  
  {
    name: 'EMotorad T-REX AIR Unisex Electric Bicycle 29" Wheel Size 16.5" ',
    image: '/images/cycle.jpg',
    description:
      'Frame: T-Rex Air comes with high tensile Steel frame that promises comfort along with a chic look. The top and lower tube both are streamlined at the bottom to make journeys relaxing for all types of riders.',
    brand: 'E-Motorad',
    category: 'Sports',
    price: 34999,
    countInStock: 4,
    rating: 4.6,
    numReviews: 201,
  },
  
  {
    name: 'The Shiva Triology Boxset of 3 Books',
    image: '/images/LordShiva.jpg',
    description:
      'The complete Shiva Trilogy box set! Includes:The Immortals of Meluha, The Secret of Nagas and The Oath of the Vayuputras. The fastest selling book series in Indian publishing history. Come experience our epics in a whole new way!',
    brand: ' ',
    category: 'Books',
    price: 818,
    countInStock:10 ,
    rating: 4.7,
    numReviews: 454,
  },
  
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 18909.09,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  
  {
    name: 'ASUS Dual GeForce RTX 4070 SUPER',
    image: '/images/supergrcd.jpg',
    description:
      'ASUS Dual GeForce RTX™ 4070 SUPER OC Edition 12GB GDDR6X with two powerful Axial-tech fans and a 2.56-slot design for broad compatibility',
    brand: 'Asus',
    category: 'Electronics',
    price: 70775.76,
    countInStock: 4,
    rating: 5,
    numReviews: 4,
  },
  
  {
    name: 'Vision Pro - Mixed Reality Advanced VR Headset - 256GB',
    image: '/images/vision.jpg',
    description:
      'Stunning 12.9-inch Liquid Retina XDR display with ProMotion technology for smooth scrolling and incredible detail',
    brand: 'Apple',
    category: 'Electronics',
    price: 424990.99,
    countInStock: 8,
    rating: 4.8,
    numReviews: 9,
  },
    
  {
    name: 'Sony Ps5 Spiderman 2 Standard Edn',
    image: '/images/sm2.jpg',
    description:
      'An evolution of the Spider-Man story : The incredible power of the symbiote forces Peter and Miles to face the ultimate test of strength, both inside and outside the mask, as they balance their lives, friendships and their duty to protect those in need.',
    brand: 'Sony',
    category: 'Video Games',
    price: 4489 ,
    countInStock: 12 ,
    rating: 4.2 ,
    numReviews:9 ,
  },
  {
    name: 'G.Skill Trident Z5 RGB 32GB Desktop RAM',
    image: '/images/ram.jpg',
    description:
    'G.Skill Trident Z5 RGB 32GB (2 * 16GB) DDR5 6000 MHz CL36-36-36-96 1.35V Desktop Memory RAM - F5-6000J3636F16GX2-TZ5RK',
    brand: 'G.Skill',
    category: 'Electronics',
    price: 11880.67,
    countInStock: 9,
    rating: 3.1,
    numReviews: 9,
  },
  
{
  name: 'The Ram Chandra Series: Boxset of 4 Books ',
  image: '/images/ShriRam.jpg',
  description:
    'The complete Ram Chandra series by Amish Tripathi. Include: 1) Ram - Scion of Ikshvaku. 2) Sita: Warrior of Mithila. 3) Raavan: Enemy of Aryavarta. 4) War of Lanka The second-fastest selling series in Indian publishing history. Come, experience our epics in a whole new way!',
  brand: ' ',
  category: 'Books',
  price: 1186,
  countInStock: 10,
  rating: 4.8,
  numReviews:385 ,
},
  

  {
    name: 'Sony Alpha ILCE-6400M',
    image: '/images/sonyml.jpg',
    description:
      'Sony Alpha ILCE-6400M 24.2MP Mirrorless Digital SLR Camera (Black) with 18-135mm Zoom Lens | APS-C Sensor |Real-Time Eye Auto Focus | 4K Vlogging Camera | Tiltable LCD - Black',
    brand: 'Sony',
    category: 'Electronics',
    price: 102989.99,
    countInStock: 7,
    rating: 4.9,
    numReviews: 9,
  },
  
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2499.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 12,
  },
  
  {
    name: 'ASUS NVIDIA GeForce RTX 4070 Ti Graphics Card',
    image: '/images/asusgc.jpg',
    description:
      'ASUS NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X Graphics Card',
    brand: 'Asus',
    category: 'Electronics',
    price: 79049.49,
    countInStock: 7,
    rating: 4.0,
    numReviews: 7,
  },

  {
    name: 'EastPoint Sports Easy Setup 4-Player Badminton Set',
    image: '/images/badminton.jpg',
    description:
      'BADMINTON MEETS FOUR SQUARE - A high-flying game of skill and strategy and first ever four-player take on two classic outdoor games. Serve your way up to the king square to rack up those points against your opponents.',
    brand: 'Easy Point Sports',
    category: 'Sports',
    price: 25194,
    countInStock: 6,
    rating: 3.7,
    numReviews: 606,
  },
  
  {
    name: ' The Witcher 3: Wild Hunt | Complete Edition |',
    image: '/images/witcher.jpg',
    description:
      'PLAY AS A HIGHLY TRAINED MONSTER SLAYER FOR HIRE: Trained from early childhood and mutated to gain superhuman skills, strength, and reflexes, witchers are a counterbalance to the monster-infested world in which they live. Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions, and combat magic.',
    brand: 'CD Project Red',
    category: 'Video Games',
    price: 2199,
    countInStock: 9 ,
    rating: 4.9,
    numReviews:24 ,
  },
  
  {
    name: 'The Mahabharata (Box Set)',
    image: '/images/mahavarat.jpg',
    description:
      'The greatest Indian story ever told of a war between two factions of a family, The Mahabharata has continued to sway the imagination of its readers over the past centuries.While the dispute over land and kingdom between the warring cousins-the Pandavas and the Kauravas-forms the chief narrative, the primary concern of The Mahabharata is about the conflict of dharma. These conflicts are immense and various, singular and commonplace.',
    brand: ' ',
    category: 'Books',
    price: 2974,
    countInStock: 10,
    rating:4.6 ,
    numReviews: 492,
  },
  
  {
    name: 'Samsung Galaxy Watch5 Pro 45mm R920N GPS',
    image: '/images/swatch.jpg',
    description:
      'Galaxy Watch5 Pro Bluetooth (45mm) Black Titanium is a durable smartwatch with fitness tracking, blood pressure tracking, GPS, and long battery life designed for adventurers',
    brand: 'Samsung',
    category: 'Electronics',
    price: 21249.49,
    countInStock: 8,
    rating: 4.1,
    numReviews: 11,
  },
  
  {
    name: 'ASUS Cloud Gaming Chromebook Vibe CX55',
    image: '/images/chromebook.jpg',
    description:
      'With versatile design, high refresh rate and easy access to 1000+ cloud games, ASUS Chromebook Vibe CX55 Flip is ready for next-level gaming adventures',
    brand: 'Asus',
    category: 'Electronics',
    price: 89999.99,
    countInStock: 5,
    rating: 5,
    numReviews: 6,
  },
  
  {
    name: 'Sony 3D Wireless Gaming Headset for PS5 ',
    image: '/images/sonyh.jpg',
    description:
      'Ignite your gaming nights with a headset fine-tuned for 3D Audio on PS5™ consoles1. Featuring a subtle two tone shaded design, the PULSE 3D™ Midnight Black wireless headset incorporates gloss detailing for an effortlessly ultra-sleek finish.Pair together with the matching galaxy-themed DualSense™ wireless controller to',
    brand: 'Sony',
    category: 'Electronics',
    price: 5990.08,
    countInStock: 7,
    rating: 3.2,
    numReviews: 7,
  },
  
  {
    name: 'Xbox Series S Starter Bundle',
    image: '/images/xbox.jpg',
    description:
      'Xbox Series S 512GB, 3 Months of Game Pass Ultimate, Xbox Wireless Controller Robot White, High Speed HDMI cable',
    brand: 'Microsoft',
    category: 'Electronics',
    price: 29777.39,
    countInStock: 9,
    rating: 3.0,
    numReviews: 2,
  },
  
  {
    name: 'Sony WF-1000XM5 TWS',
    image: '/images/sonytws.jpg',
    description:
      'The WF-1000XM5 feature cutting-edge technology to deliver premium sound quality and the best noise-cancelling performance on the market',
    brand: 'Sony',
    category: 'Electronics',
    price: 29990.10,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  
  {
    name: 'The Kalki Trilogy Set of 3 Books Avatar of Vishnu Eye of Brahma Sword of Shiva',
    image: '/images/Kalki.jpg',
    description:
      'Kevin has written down a beautiful novel, a retelling of the avatar of Lord Vishnu, Kalki, in a not so “ mythological” manner. He has immense strength, which has been proven time and again by events like defeating enemies twice his size, faster healing of wounds and very sharp fighting skills. He doesn’ t have a decent explanation about the skills he possesses until he meets Kripa aka Kripacharya— a guru who had been a part of the biggest battle against evil— the Mahayudh. This trilogy boxed set is a must-have for all! • An epic collection of tales inspired by Indian mythology • An action-packed read that will transport you to a world of adventures • It will bring you closer to the ancient Indian literature • Perfect for gifting and will be a good addition to any library ',
    brand: ' ',
    category: 'Books',
    price: 728,
    countInStock:10 ,
    rating: 4.4,
    numReviews:216 ,
  },

  {
    name: 'Microsoft Surface Pro 9 Tablet',
    image: '/images/surfacepro.jpg',
    description:
      'The power of a laptop with the flexibility of a tablet, and every angle in between, with 13" touchscreen, iconic built-in Kickstand, and detachable Keyboard',
    brand: 'Microsoft',
    category: 'Electronics',
    price: 102990.07,
    countInStock: 4,
    rating: 4.9,
    numReviews: 2,
  },
  
  {
    name: 'Gps Navigation for Vehicles',
    image: '/images/gps.jpg',
    description:
      'Gps Navigation for Car/Truck Touch Screen Maps w/ Spoken Direction 7',
    brand: 'CarGad',
    category: 'Electronics',
    price: 7584.56,
    countInStock: 7,
    rating: 2.9,
    numReviews: 8,
  },
  
  {
    name: 'UNCHARTED for PlayStation 5 [Video Game]',
    image: '/images/uncharted.jpg',
    description:
      'UNCHARTED: Legacy of Thieves Collection for PlayStation 5 [Video Game]',
    brand: 'Sony',
    category: 'Video Games',
    price: 1699.98,
    countInStock: 9,
    rating: 2.2,
    numReviews: 8,
  },
    
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The siz programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 12109.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },

  {
    name: 'Ubisoft Ps5 AssassinS Creed Valhalla, 17 x 1.5 x 13.5 Centimeters',
    image: '/images/ascv.jpg',
    description:
      'Write your Viking saga – Advanced RPG mechanics to shape the growth of your character Visceral combat system – dual-wield powerful weapons such as axes, swords, and even shields A dark age open world – sail from the harsh shores of Norway to the beautiful Kingdoms of England',
    brand: 'Ubisoft',
    category: 'Video Games',
    price: 1580 ,
    countInStock: 5,
    rating: 4.5 ,
    numReviews: 7,
  },

  {
    name: 'Valmiki Ramayana, The (Box Set) Hardcover',
    image: '/images/ramayan.jpg',
    description:
      'The Valmiki Ramayana remains a living force in the lives of the Indian people. A timeless epic, it recounts the legend of the noble prince Rama and his battle to vanquish the demon king Ravana. Even before he is crowned king of Ayodhya, Rama is exiled to the Dandaka forests where he is accompanied by his beauteous wife Sita and loyal brother Lakshmana. Deep in the jungle, Sita is abducted by Ravana and taken to his island kingdom Lanka, setting into motion a dramatic chain of events that culminates in an epoch-defining war.',
    brand: ' ',
    category: 'Books',
    price: 1007,
    countInStock:10 ,
    rating: 4.7,
    numReviews:498 ,
  },
  
  
  
  {
    name: 'SG Full Cricket Kit Combo with Spofly™ Brand Stumps',
    image: '/images/cricket.jpg',
    description:
      'Complete Kit bag for youth sizes includes all the gear that you need Available in various sizes for different age groups Kitbag made from heavy duty nylon material Bat Packet available Cricket Kit Includes Items:-Cricket Bat with cover + Legguard + Batting Gloves + Kitbag + Thigh Guard + Arm Guard + Abdo Guard',
    brand: 'SG Store',
    category: 'Sports',
    price: 10259,
    countInStock:8 ,
    rating:3.4 ,
    numReviews: 257,
  },

  {
    name: 'PROGOAL Soccer Goal Target Training Nets',
    image: '/images/football.jpg',
    description:
      'PROGOAL Soccer Goal Target Training Nets - 24x8FT/17x6.6FT/11x6FT Soccer Training Aide with 7 Highlighted Scoring Zones,Portable Training Equipment with Carrying Bag & Bungee Cord（Eleven-Player）',
    brand: 'Progal',
    category: 'Sports',
    price: 26638,
    countInStock: 2,
    rating: 3.5,
    numReviews: 11,
  },
  
  {
    name: 'HP Victus Gaming Desktop',
    image: '/images/victus.jpg',
    description:
      'HP Victus Gaming Desktop | Ryzen 5 5600G | 16GB | 1TB SSD | RX 6400 | Windows 11',
    brand: 'HP',
    category: 'Electronics',
    price: 67626.19,
    countInStock: 4,
    rating: 3.9,
    numReviews: 4,
  },
  
  {
    name: 'The Hidden Hindu Paperback',
    image: '/images/hiddenhindu.jpg',
    description:
      'Prithvi, a twenty-one-year-old, is searching for a mysterious middle-aged aghori (Shiva devotee), Om Shastri, who was traced more than 200 years ago before he was captured and transported to a high-tech facility on an isolated Indian island. When the aghori was drugged and hypnotized for interrogation by a team of specialists, he claimed to have witnessed all four yugas (the epochs in Hinduism) and even participated in both Ramayana and Mahabharata',
    brand: ' ',
    category: 'Books',
    price:164 ,
    countInStock:10 ,
    rating: 4.4,
    numReviews:3481 ,
  },

  ]
  export default products