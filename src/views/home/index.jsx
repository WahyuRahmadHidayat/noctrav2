import Hero from "views/home/components/Hero";
import Stats from "views/home/components/Stats";
import WhyWeRide from "views/home/components/WhyWeRide";
import UpcomingRides from "views/home/components/UpcomingRides";
import Gear from "views/home/components/Gear";
import Blog from "views/home/components/Blog";

const Home = () => {
  return (
    <>
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