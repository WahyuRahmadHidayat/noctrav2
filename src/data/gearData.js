import jerseyImg from '@/assets/images/gear/shop1.webp';
import helmetImg from '@/assets/images/gear/shop2.webp';
import gogglesImg from '@/assets/images/gear/shop3.webp';
import glovesImg from '@/assets/images/gear/shop4.webp';

const gearData = [
  {
    id: "noctra-reflective-jersey",
    img: jerseyImg,
    name: "NOCTRA REFLECTIVE JERSEY",
    price: "IDR 499.000",
    category: "APPAREL",
    content: [
      "Designed for high visibility and optimal aerodynamics. This jersey features premium moisture-wicking fabric to keep you dry during intense midnight sprints.",
      "The built-in reflective elements ensure you stay seen under streetlights and headlights, maximizing safety without compromising style."
    ]
  },
  {
    id: "aero-stealth-helmet",
    img: helmetImg,
    name: "AERO STEALTH HELMET",
    price: "IDR 1.250.000",
    category: "EQUIPMENT",
    content: [
      "Aerodynamically engineered to cut through the night wind with minimal drag. The stealth matte finish perfectly complements your urban cycling aesthetic.",
      "Features advanced impact protection and strategically placed ventilation channels to keep your head cool during long rides."
    ]
  },
  {
    id: "nightvision-goggles",
    img: gogglesImg,
    name: "NIGHTVISION GOGGLES",
    price: "IDR 850.000",
    category: "ACCESSORIES",
    content: [
      "Protect your eyes from glare, wind, and debris with our specialized night lenses. Designed to enhance contrast in low-light urban environments.",
      "The lightweight frame and anti-fog technology ensure crystal clear vision, allowing you to react quickly to the unpredictable city streets."
    ]
  },
  {
    id: "urban-cycling-gloves",
    img: glovesImg,
    name: "URBAN CYCLING GLOVES",
    price: "IDR 350.000",
    category: "APPAREL",
    content: [
      "Maintain ultimate control over your handlebars with our high-grip urban cycling gloves. The padded palms reduce vibration and fatigue on rough pavement.",
      "Touchscreen compatible and highly breathable, these gloves are an essential part of your everyday carry for night rides."
    ]
  }
];

export default gearData;