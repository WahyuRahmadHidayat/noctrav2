// ==========================================
// TODO: LEGALITAS ASET FOTO PRODUK (URGENT SEBELUM PRODUCTION)
// ==========================================
// Pastikan semua gambar produk (jersey, sepeda, helm, dll) di dalam data ini
// sudah memiliki izin lisensi/hak cipta yang sah, atau diganti dengan aset bebas hak cipta (royalty-free) seperti dari Unsplash/Pexels 
// sebelum aplikasi NOCTRA diluncurkan untuk publik secara komersial.
// ==========================================

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
    category: "APPAREL"
  },
  {
    id: "aero-stealth-helmet",
    img: helmetImg,
    name: "AERO STEALTH HELMET",
    price: "IDR 1.250.000",
    category: "EQUIPMENT"
  },
  {
    id: "nightvision-goggles",
    img: gogglesImg,
    name: "NIGHTVISION GOGGLES",
    price: "IDR 850.000",
    category: "ACCESSORIES"
  },
  {
    id: "urban-cycling-gloves",
    img: glovesImg,
    name: "URBAN CYCLING GLOVES",
    price: "IDR 350.000",
    category: "APPAREL"
  }
];

export default gearData;