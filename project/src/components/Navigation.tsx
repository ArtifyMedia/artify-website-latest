import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { LiquidButton } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 dark:bg-black/90 backdrop-blur-lg border-b border-[#C8F31D]/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">ARTIFY MEDIA</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('services-catalog')}
              className="text-gray-500 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium"
            >
              Services
            </button>
            <Link
              to="/portfolio"
              className="text-gray-500 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="text-gray-500 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-gray-500 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/partner"
              className="text-gray-500 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium"
            >
              Partner With Us
            </Link>
            <LiquidButton
              variant="primary"
              onClick={() => scrollToSection('services-catalog')}
            >
              Let's Make Magic ✨
            </LiquidButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 dark:text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-[#C8F31D]/20">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium py-2"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button
              onClick={() => scrollToSection('services-catalog')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium py-2"
            >
              Services
            </button>
            <Link
              to="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium py-2"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium py-2"
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium py-2"
            >
              About Us
            </Link>
            <Link
              to="/partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-[#C8F31D] transition-colors font-medium py-2"
            >
              Partner With Us
            </Link>
            <LiquidButton
              variant="primary"
              onClick={() => scrollToSection('services-catalog')}
              className="w-full"
            >
              Let's Make Magic ✨
            </LiquidButton>
          </div>
        </div>
      )}
    </nav>
  );
}
