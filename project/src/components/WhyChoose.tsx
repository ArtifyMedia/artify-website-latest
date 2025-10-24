import { Award, Users, Sparkles, TrendingUp } from 'lucide-react';

export function WhyChoose() {
  const reasons = [
    {
      icon: Award,
      stat: '10+',
      label: 'Years of Experience',
      description: 'Crafting emotion through motion',
    },
    {
      icon: Users,
      stat: '100+',
      label: 'Global Luxury Brands',
      description: 'Trusted by industry leaders',
    },
    {
      icon: Sparkles,
      stat: '500+',
      label: 'Stories Told',
      description: "We don't shoot. We storytell.",
    },
    {
      icon: TrendingUp,
      stat: '10x',
      label: 'Average ROI',
      description: "We don't automate. We amplify.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8F31D] to-[#C8F31D]">
              Artify Media
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Where creative excellence meets intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-[#C8F31D]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#C8F31D] transition-colors">
                  {reason.stat}
                </div>
                <div className="text-lg font-semibold text-[#C8F31D] mb-2">
                  {reason.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-2xl p-8 text-center">
            <p className="text-xl text-white leading-relaxed">
              "Cinematography isn't about cameras — it's about{' '}
              <span className="text-[#C8F31D] font-semibold">emotion</span>,{' '}
              <span className="text-[#C8F31D] font-semibold">timing</span>, and{' '}
              <span className="text-[#C8F31D] font-semibold">precision</span>."
            </p>
            <p className="text-gray-400 mt-4">— Farrukh Ali, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
