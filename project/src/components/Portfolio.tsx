import { useState, useEffect } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  video_url: string;
  thumbnail_url: string | null;
  duration: string | null;
  tags: string[];
  services_used: string[];
  ai_enhanced: boolean;
  featured: boolean;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'brand', label: 'Brand Films' },
    { id: 'ai', label: 'AI Enhanced' },
  ];

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('is_published', true)
        .order('featured', { ascending: false })
        .order('order_index', { ascending: true });

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error) {
      console.error('Error loading portfolio:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : activeFilter === 'ai'
      ? portfolioItems.filter((item) => item.ai_enhanced)
      : portfolioItems.filter((item) => item.category === activeFilter);

  const gradients = [
    'from-green-500 to-emerald-600',
    'from-green-600 to-teal-600',
    'from-emerald-500 to-green-700',
    'from-[#C8F31D] to-[#9BC515]',
    'from-teal-500 to-green-600',
    'from-green-500 to-emerald-700',
  ];

  if (isLoading) {
    return (
      <section id="portfolio" className="relative py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="text-[#C8F31D]">Loading portfolio...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8F31D] to-[#C8F31D]">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Stories that move brands forward
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#C8F31D] to-[#C8F31D] text-black'
                  : 'bg-white/5 border border-[#C8F31D]/30 text-gray-300 hover:border-[#C8F31D] hover:text-[#C8F31D]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No portfolio items found for this category
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map((item, index) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer block"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    gradients[index % gradients.length]
                  } opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{item.client}</p>
                  {item.ai_enhanced && (
                    <div className="flex items-center gap-1 text-xs text-[#C8F31D]">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Enhanced</span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8F31D]/50 rounded-xl transition-colors duration-300"></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
