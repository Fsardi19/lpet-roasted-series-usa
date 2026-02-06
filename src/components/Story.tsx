import { Award, MapPin } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <img
              src={ASSETS.equipo.fundadores}
              alt="Felipe and Elisa - Founders"
              className="w-full rounded-none shadow-xl"
            />
            {/* WBC Badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-dark p-6 shadow-xl hidden md:block">
              <div className="flex items-center gap-3 text-white">
                <Award className="text-brand-gold" size={32} />
                <div>
                  <p className="font-bold">WBC 2019</p>
                  <p className="text-sm text-brand-beige/70">Champion Varietal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">A Farm, A Family, A Vision</h2>

            <p className="text-lg text-gray-600 mb-6">
              In 2012, we left the city behind and moved to the cloud forests of
              Zipacón, Colombia. What started as a dream to grow the best coffee
              in the world became a regenerative farm spanning 19 hectares.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Today, La Palma & El Tucán is home to rare varieties like Geisha,
              Sidra (the 2019 World Barista Championship winning varietal), and
              experimental processes that push the boundaries of what coffee can be.
            </p>

            <div className="flex items-center gap-4 text-brand-gold mb-8">
              <MapPin size={24} />
              <span className="text-lg">Zipacón, Cundinamarca, Colombia • 1,700 m.a.s.l.</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-beige">
              <div>
                <p className="text-3xl font-bold text-brand-pink">2012</p>
                <p className="text-sm text-brand-gold">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-pink">19</p>
                <p className="text-sm text-brand-gold">Hectares</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-pink">14</p>
                <p className="text-sm text-brand-gold">Coffee Lots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
