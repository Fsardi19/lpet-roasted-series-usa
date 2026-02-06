import { ChevronDown } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ASSETS.hero.felipeCaballo})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-20">
        <p className="text-brand-gold uppercase tracking-[0.4em] text-sm md:text-base mb-6">
          Roasted Coffee
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Born at Origin,<br />
          <span className="text-brand-beige">Shared with Intention</span>
        </h1>

        <p className="text-xl md:text-2xl text-brand-beige/90 mb-8 max-w-2xl mx-auto">
          Crafted in small, limited batches. From seed to roast — one farm, one team,
          50 meters from cultivation to roaster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#products" className="btn-primary">
            Explore Our Coffees
          </a>
          <a href="#process" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-dark">
            Our Process
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#products"
          className="inline-flex flex-col items-center gap-2 text-brand-beige/70 hover:text-white transition-colors"
        >
          <span className="text-sm uppercase tracking-wider">Scroll to discover</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
}
