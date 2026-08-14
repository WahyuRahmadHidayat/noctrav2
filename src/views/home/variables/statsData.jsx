import { Users, Moon, Route, MapPin } from 'lucide-react';

const statsData = [
  {
    id: 1,
    icon: <Users size={36} className="text-white group-hover:text-primary transition-colors duration-300" />,
    value: "1,250+",
    label: "ACTIVE RIDERS"
  },
  {
    id: 2,
    icon: <Moon size={36} className="text-white group-hover:text-primary transition-colors duration-300" />,
    value: "80+",
    label: "NIGHT RIDES"
  },
  {
    id: 3,
    icon: <Route size={36} className="text-white group-hover:text-primary transition-colors duration-300" />,
    value: "25,000+",
    label: "KM COVERED"
  },
  {
    id: 4,
    icon: <MapPin size={36} className="text-white group-hover:text-primary transition-colors duration-300" />,
    value: "12+",
    label: "CITIES"
  }
];

export default statsData;