import neonCityImg from '@/assets/images/rides/rides5.webp';
import midnightImg from '@/assets/images/rides/rides2.webp';
import coastalImg from '@/assets/images/rides/rides3.webp';
import heritageImg from '@/assets/images/rides/rides4.webp';

const ridesData = [
  {
    id: "neon-city-sprint",
    img: neonCityImg,
    title: "NEON CITY SPRINT",
    date: "14",
    month: "AUG",
    loc: "JAKARTA",
    time: "21:00 PM",
    distance: "35 KM",
    content: [
      "Join the crew for a high-paced sprint through the heart of Jakarta. We will be weaving through the vibrant neon-lit streets, pushing our speed and endurance.",
      "This route is completely flat but requires quick reflexes. Ensure your gear is fully tuned and your lights are charged."
    ]
  },
  {
    id: "midnight-climb",
    img: midnightImg,
    title: "MIDNIGHT CLIMB",
    date: "22",
    month: "AUG",
    loc: "BANDUNG",
    time: "20:30 PM",
    distance: "42 KM",
    content: [
      "Escape the city heat and conquer the elevation of Bandung. This midnight climb will test your stamina as we ascend through the cool mountain air.",
      "Pacing is key for this ride. We will regroup at the summit for a well-deserved coffee break before enjoying the thrilling descent."
    ]
  },
  {
    id: "coastal-cruise",
    img: coastalImg,
    title: "COASTAL CRUISE",
    date: "05",
    month: "SEP",
    loc: "SURABAYA",
    time: "22:00 PM",
    distance: "50 KM",
    content: [
      "A steady, scenic ride along the Surabaya coastline. We will enjoy the ocean breeze and the quiet coastal roads away from the central traffic.",
      "This is a medium-intensity cruise suitable for all levels. Bring good vibes and prepare for an epic late-night group photo by the water."
    ]
  },
  {
    id: "heritage-run",
    img: heritageImg,
    title: "HERITAGE RUN",
    date: "18",
    month: "SEP",
    loc: "YOGYAKARTA",
    time: "19:00 PM",
    distance: "25 KM",
    content: [
      "Explore the rich history of Yogyakarta under the moonlight. We will ride past iconic monuments and empty heritage streets in a relaxed, rolling formation.",
      "Focus on the experience rather than speed. This is a cultural night ride celebrating the brotherhood of our local cycling community."
    ]
  }
];

export default ridesData;