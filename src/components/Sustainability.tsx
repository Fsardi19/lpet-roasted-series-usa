import { Leaf, Bird, Users, TreePine } from 'lucide-react';
import { ASSETS, SUSTAINABILITY_STATS } from '../constants/assets';

const ICONS = [TreePine, Bird, Leaf, Users];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-brand-beige uppercase tracking-[0.3em] text-sm mb-4">
              Regenerative Agriculture
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Coffee That Gives Back
            </h2>

            <p className="text-brand-beige/80 text-lg mb-8">
              We don't just minimize harm — we actively regenerate. Our farm is a
              carbon sink, a wildlife corridor, and a community partner.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {SUSTAINABILITY_STATS.map((stat, index) => {
                const Icon = ICONS[index];
                return (
                  <div key={stat.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-brand-beige" size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-brand-beige/70 text-sm">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* La Amistad Program */}
            <div className="mt-12 p-6 bg-white/10">
              <h4 className="font-bold text-lg mb-2">La Amistad Program</h4>
              <p className="text-brand-beige/80">
                We partner with 200+ neighboring families, providing BioChar,
                training, and fair prices. Their coffee is processed at our
                facilities with the same care as our own.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={ASSETS.sostenibilidad.panoramica}
              alt="Cloud forest at La Palma & El Tucán"
              className="w-full rounded-none shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
