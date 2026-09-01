import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from 'layouts/Navbar';
import Footer from 'layouts/Footer';
import PageLoader from '@/components/PageLoader';
import PrivacyPolicyView from './views/PrivacyPolicyView';
import TermsView from './views/TermsView';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const Home = lazy(() => import('views/home'));
const ListView = lazy(() => import('views/ListView'));
const DetailView = lazy(() => import('views/DetailView'));
const ActionView = lazy(() => import('views/ActionView'));
const AboutView = lazy(() => import('views/AboutView'));
const ContactView = lazy(() => import('views/ContactView'));
const LoginView = lazy(() => import('views/LoginView'));
const CartView = lazy(() => import('views/CartView'));
const NotFoundView = lazy(() => import('views/NotFoundView'));

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
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
              <Route path="/login" element={<LoginView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
              <Route path="/terms" element={<TermsView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </Suspense>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}