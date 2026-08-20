import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from 'layouts/Navbar';
import Footer from 'layouts/Footer';
import PageLoader from '@/components/PageLoader';

const Home = lazy(() => import('views/home'));
const ListView = lazy(() => import('views/ListView'));
const DetailView = lazy(() => import('views/DetailView'));
const ActionView = lazy(() => import('views/ActionView'));
const AboutView = lazy(() => import('views/AboutView'));
const ContactView = lazy(() => import('views/ContactView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));
import PrivacyPolicyView from './views/PrivacyPolicyView';
import TermsView from './views/TermsView';



export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="*" element={<NotFoundView />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
          <Route path="/terms" element={<TermsView />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}