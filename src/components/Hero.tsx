import { ChevronDown, Truck, Shield, Star, Clock } from 'lucide-react';
import { ASSETS, SOCIAL_PROOF } from '../constants/assets';

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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-24 pb-12">

        {/* Social Proof Bar - Above headline */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 text-sm text-brand-beige/90">
          <span className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">{SOCIAL_PROOF.avgRating}</span>
            <span className="text-brand-beige/70">({SOCIAL_PROOF.totalReviews} reviews)</span>
          </span>
          <span className="hidden md:inline text-brand-beige/50">•</span>
          <span className="hidden md:inline">SCA Score 85-90+</span>
          <span className="hidden md:inline text-brand-beige/50">•</span>
          <span className="hidden md:inline">{SOCIAL_PROOF.customersServed} customers</span>
        </div>

        {/* Eyebrow */}
        <p className="text-brand-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 font-medium">
          Producer-Roasted in Colombia's Cloud Forest
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
          Specialty Coffee<br />
          <span className="text-brand-beige">From Our Farm to Your Cup</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-brand-beige/90 mb-6 max-w-2xl mx-auto leading-relaxed">
          Geisha, Sidra & rare varietals. Roasted at origin,
          shipped fresh from Miami to your door.
        </p>

        {/* Price Point - CRITICAL FOR CONVERSION */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 px-6 mb-6 inline-block">
          <p className="text-2xl md:text-3xl font-bold text-brand-gold">
            From $42 USD
          </p>
          <p className="text-brand-beige/80 text-sm mt-1">
            Free shipping on orders $50+ • Ships in 1-2 days
          </p>
        </div>

        {/* Discount Code - VISIBLE */}
        <p className="text-white mb-8 text-lg">
          First order? Use code{' '}
          <span className="font-mono bg-brand-pink px-3 py-1 font-bold rounded">
            WELCOME10
          </span>
          {' '}for 10% off
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#products"
            className="btn-primary text-lg px-10 py-4 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
          >
            Shop Now — From $42
          </a>
          <a
            href="#process"
            className="btn-secondary border-white/50 text-white hover:bg-white hover:text-brand-dark px-8 py-4"
          >
            See Our Process
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-brand-beige/80 mb-12">
          <span className="flex items-center gap-2">
            <Truck size={18} className="text-brand-gold" />
            Ships from Miami, FL
          </span>
          <span className="flex items-center gap-2">
            <Shield size={18} className="text-brand-gold" />
            30-Day Guarantee
          </span>
          <span className="flex items-center gap-2">
            <Clock size={18} className="text-brand-gold" />
            Roasted Fresh to Order
          </span>
        </div>

        {/* Urgency Element */}
        <p className="text-red-400 text-sm mb-8 animate-pulse">
          Limited Roast: Fresh batch available — order before it sells out
        </p>

        {/* Scroll Indicator */}
        <a
          href="#products"
          className="inline-flex flex-col items-center gap-2 text-brand-beige/60 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Discover Our Coffees</span>
          <ChevronDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
}
