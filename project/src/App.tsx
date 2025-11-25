import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { LavaLamp } from './components/ui/fluid-blob';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { useCart } from './contexts/CartContext';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PartnerPage } from './pages/PartnerPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { PartnerApplyPage } from './pages/PartnerApplyPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { cartCount } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <Router>
      <div className="relative w-full">
        <LavaLamp />
        <Navigation />

        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed top-6 right-6 z-[100] bg-[#C8F31D] hover:bg-[#C8F31D]/90 text-[#060606] p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <div className="relative w-full" style={{ zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/partner/apply" element={<PartnerApplyPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          </Routes>
          <Footer />
        </div>

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
