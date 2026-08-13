import statsData from 'views/home/variables/statsData';

export default function Stats() {
  return (
    <section id="about" className="border-y border-border/50 bg-background/50 backdrop-blur-sm relative z-30">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-border/50 py-8 md:py-0">
        {statsData.map((stat, index) => (
          <div key={index} className="py-2 md:py-12 flex flex-col items-center text-center group cursor-default">
            <div className="text-primary mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="font-barlow text-4xl md:text-5xl font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
              {stat.value} <span className="text-xl md:text-2xl text-primary">{stat.unit}</span>
            </div>
            <div className="text-[10px] md:text-xs tracking-widest text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}