import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from 'layouts/Navbar';
import Footer from 'layouts/Footer';
import Home from 'views/home';
import ListView from 'views/ListView';
import DetailView from 'views/DetailView';
import ActionView from 'views/ActionView';
import AboutView from 'views/AboutView';
import ContactView from 'views/ContactView';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<ListView />} />
        <Route path="/shop" element={<ListView />} />
        <Route path="/blog" element={<ListView />} />
        <Route path="/rides/:id" element={<DetailView />} />
        <Route path="/shop/:id" element={<DetailView />} />
        <Route path="/blog/:id" element={<DetailView />} />
        <Route path="/action/:type" element={<ActionView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}