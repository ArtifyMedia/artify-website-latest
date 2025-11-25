import { useState, useEffect } from 'react';
import { Play, ExternalLink, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail_url: string;
  video_url: string;
  description: string;
  client: string;
  results: string[];
  tags: string[];
}

export function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '50M+', label: 'Views Generated' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Industries Served' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060606] pt-20 flex items-center justify-center">
        <div className="text-[#C8F31D] text-xl">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#060606] pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>

      <div className="relative">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 bg-[#C8F31D]/10 border border-[#C8F31D]/30 rounded-full">
                  <span className="text-[#C8F31D] text-sm font-semibold">OUR WORK</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Campaigns that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8F31D] to-[#C8F31D]">
                  captivate & convert
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Real projects. Real results. From cinematic brand films to performance-driven campaigns, see what we create for brands that refuse to be ordinary.
              </p>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-2xl p-6 text-center hover:border-[#C8F31D]/50 transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#C8F31D] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex gap-3 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-[#C8F31D] text-black'
                        : 'bg-white/5 text-gray-400 border border-[#C8F31D]/20 hover:border-[#C8F31D]/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              {filteredItems.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-xl">No projects found in this category.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="group backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-3xl overflow-hidden hover:border-[#C8F31D]/50 transition-all duration-300"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.thumbnail_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button className="w-16 h-16 bg-[#C8F31D] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-black ml-1" />
                          </button>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#C8F31D]/90 text-black text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#C8F31D] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">Client: {item.client}</p>
                          </div>
                          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-[#C8F31D]" />
                          </button>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {item.results && item.results.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-[#C8F31D] mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              KEY RESULTS
                            </h4>
                            <ul className="space-y-2">
                              {item.results.map((result, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <span className="text-[#C8F31D] mt-1">•</span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-[#C8F31D]/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="max-w-4xl mx-auto text-center mt-20">
              <div className="backdrop-blur-sm bg-gradient-to-br from-[#C8F31D]/10 to-transparent border border-[#C8F31D]/20 rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Let's craft a campaign that not only looks stunning but drives real business results for your brand.
                </p>
                <button
                  onClick={() => {
                    const servicesSection = document.getElementById('services-catalog');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#services-catalog';
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#C8F31D] to-[#C8F31D] hover:from-green-600 hover:to-[#B8E30D] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#C8F31D]/20"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
