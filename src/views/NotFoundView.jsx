import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white px-4">
      <h1 className="font-bebas text-8xl md:text-[150px] text-primary mb-4 leading-none">404</h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8 font-bold tracking-widest uppercase text-center">SIGNAL LOST. PAGE NOT FOUND.</p>
      <Link to="/" className="bg-primary text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-white transition-colors">
        RETURN TO BASE
      </Link>
    </div>
  );
}