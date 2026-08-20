import SEO from '@/components/SEO';
import Hero from "views/home/components/Hero";
import Stats from "views/home/components/Stats";
import WhyWeRide from "views/home/components/WhyWeRide";
import UpcomingRides from "views/home/components/UpcomingRides";
import Gear from "views/home/components/Gear";
import Blog from "views/home/components/Blog";

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Urban cycling club dedicated to those who own the night. Ride safe, ride fast, ride together." 
        isHome={true} 
      />
      <Hero />
      <Stats />
      <WhyWeRide />
      <UpcomingRides />
      <Gear />
      <Blog />
    </>
  );
};

export default Home;