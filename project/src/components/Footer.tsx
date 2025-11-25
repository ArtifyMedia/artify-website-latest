import { MessageCircle, Calendar, Instagram, Youtube, Linkedin, Zap } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-[#C8F31D]/20">

      <div className="border-t border-[#C8F31D]/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold text-white">ARTIFY MEDIA</span>
              </div>
              <p className="text-gray-400 mb-6">
                Creating emotion through motion and automation. Trusted by luxury brands worldwide.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#C8F31D]/10 border border-[#C8F31D]/30 hover:border-[#C8F31D] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-[#C8F31D]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#C8F31D]/10 border border-[#C8F31D]/30 hover:border-[#C8F31D] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Youtube className="w-5 h-5 text-gray-400 hover:text-[#C8F31D]" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#C8F31D]/10 border border-[#C8F31D]/30 hover:border-[#C8F31D] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#C8F31D]" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('services-catalog')} className="hover:text-[#C8F31D] transition-colors">Creative Production</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services-catalog')} className="hover:text-[#C8F31D] transition-colors">Digital Marketing</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services-catalog')} className="hover:text-[#C8F31D] transition-colors">AI Automation</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services-catalog')} className="hover:text-[#C8F31D] transition-colors">Brand Strategy</button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-[#C8F31D] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-[#C8F31D] transition-colors">Portfolio</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-[#C8F31D] transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/partner" className="hover:text-[#C8F31D] transition-colors">Partner Program</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C8F31D]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Artify Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#C8F31D] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C8F31D] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#C8F31D] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
