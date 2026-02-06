import { ShoppingBag, X, Truck, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SHIPPING } from '../constants/assets';

export default function StickyCart() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 600) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark text-white shadow-2xl transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* Desktop Message */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-red-400 animate-pulse" />
              <p className="text-sm">
                <span className="text-red-400 font-bold">Limited batch</span> — Order now for fresh roast
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-brand-gold" />
              <p className="text-sm">
                <span className="font-bold text-brand-gold">Free shipping</span> on orders ${SHIPPING.freeShippingThreshold}+
              </p>
            </div>
          </div>

          {/* Mobile Message */}
          <div className="md:hidden flex items-center gap-2">
            <Clock size={16} className="text-red-400 animate-pulse" />
            <p className="text-sm">
              <span className="text-brand-gold font-bold">Free shipping $50+</span> • Limited batch
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#products"
              className="bg-brand-pink hover:bg-white hover:text-brand-dark text-white px-6 py-2.5 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all shadow-lg"
            >
              <ShoppingBag size={16} />
              Shop Now — From $42
            </a>

            {/* Dismiss */}
            <button
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
              className="p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Dismiss"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
