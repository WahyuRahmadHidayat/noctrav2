import { MapPin, Clock, Users, Gauge } from 'lucide-react';

const statsData = [
  { icon: <MapPin size={24}/>, value: "32", unit: "KM", label: "TOTAL DISTANCE" },
  { icon: <Clock size={24}/>, value: "02:14:32", unit: "", label: "TOTAL TIME" },
  { icon: <Users size={24}/>, value: "24", unit: "", label: "RIDERS" },
  { icon: <Gauge size={24}/>, value: "01:42", unit: "", label: "AVG PACE" },
];

export default statsData;