import { Film, Target, Crown } from 'lucide-react';

export function ValueProposition() {
  const pillars = [
    {
      icon: Film,
      title: 'Cinematic Strategy',
      description: 'Every frame tells a story that moves your audience to action',
    },
    {
      icon: Target,
      title: 'Precision Production',
      description: 'World-class execution that elevates your brand presence',
    },
    {
      icon: Crown,
      title: 'Luxury Positioning',
      description: 'Crafted for brands that refuse to be ordinary',
    },
  ];

  return (
    <section className="relative py-24 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We help brands craft{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8F31D] to-[#C8F31D]">
              emotion that sells
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Where storytelling meets intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-2xl p-8 hover:border-[#C8F31D]/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
