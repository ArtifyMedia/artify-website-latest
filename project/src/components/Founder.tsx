import { Quote } from 'lucide-react';

export function Founder() {
  return (
    <section className="relative py-24 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-3xl p-12 md:p-16 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-full flex items-center justify-center shadow-lg shadow-[#C8F31D]/20">
                <Quote className="w-8 h-8 text-black" />
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                "Cinematography isn't about cameras — it's about{' '}
                <span className="text-[#C8F31D] font-semibold">emotion</span>,{' '}
                <span className="text-[#C8F31D] font-semibold">timing</span>, and{' '}
                <span className="text-[#C8F31D] font-semibold">precision</span>."
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-green-500/50 to-transparent"></div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white">Farrukh Ali</p>
                  <p className="text-[#C8F31D]">Founder & Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
