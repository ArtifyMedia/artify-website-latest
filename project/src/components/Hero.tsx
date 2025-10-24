import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { LiquidButton } from './ui/button';
import { LogoCarousel } from './LogoCarousel';

export function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white/10 dark:bg-[#060606]/10">
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8F31D]/10 border border-[#C8F31D]/20 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#C8F31D]" />
                <span className="text-sm text-[#C8F31D] font-medium">Your brand's glow-up starts here</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                We turn boring brands into{' '}
                <span className="text-[#C8F31D] inline-block relative">
                  main characters
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8F31D] rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Cinematic vibes + AI wizardry = brands that make people stop scrolling and start spending.
                Real estate, luxury cars, high-end fashion - we make 'em look absolutely chef's kiss.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <LiquidButton
                  variant="primary"
                  onClick={() => {
                    const servicesSection = document.getElementById('services-catalog');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let's Create Something Epic
                </LiquidButton>
                <LiquidButton
                  variant="default"
                  onClick={() => {
                    const portfolioSection = document.getElementById('portfolio');
                    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Show Me The Magic
                </LiquidButton>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8">
                {[
                  { value: '500+', label: 'Happy Clients' },
                  { value: '50M+', label: 'Eyeballs Captured' },
                  { value: '98%', label: 'Come Back For More' },
                  { value: '24h', label: 'We Reply Fast AF' },
                ].map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="text-3xl md:text-4xl font-bold text-[#C8F31D] mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden bg-black border border-[#C8F31D]/20 shadow-2xl shadow-[#C8F31D]/10" style={{ padding: '56.25% 0 0 0' }}>
                <iframe
                  src="https://player.vimeo.com/video/1129683678?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Artify Media Showreel"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 text-[#C8F31D]" />
                  Our showreel (warning: may cause jaw drops)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-[#C8F31D]/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-[#C8F31D] rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      <LogoCarousel heading="Brands that trust us (flex moment)" />
    </>
  );
}
