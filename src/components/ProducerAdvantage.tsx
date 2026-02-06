import { ASSETS } from '../constants/assets';

export default function ProducerAdvantage() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">
              The Producer Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Seed to Roast.<br />
              <span className="text-brand-beige">One Farm. One Team.</span>
            </h2>

            <p className="text-brand-beige/80 text-lg mb-8">
              We're not just roasters who buy green coffee. We're farmers who roast
              our own harvest. This gives us an unfair advantage:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Roast Design from Terroir</h4>
                  <p className="text-brand-beige/70">We know the soil, microclimate, and variety intimately</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Genetics Made Audible</h4>
                  <p className="text-brand-beige/70">Each variety has its own roast curve, perfected over years</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Process-Aware Heat Application</h4>
                  <p className="text-brand-beige/70">We know exactly what fermentation each lot received</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">04</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">50m from Cultivation to Roaster</h4>
                  <p className="text-brand-beige/70">Single plot traceability, not just single origin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Roaster Image */}
          <div className="relative">
            <img
              src={ASSETS.tostadora.frontal}
              alt="Stronghold S8X Roaster"
              className="w-full rounded-none shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/90 p-4">
              <p className="text-brand-gold text-sm uppercase tracking-wider">Our Roaster</p>
              <p className="text-white font-bold">Stronghold S8X</p>
              <p className="text-brand-beige/70 text-sm">Precision roasting at origin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
