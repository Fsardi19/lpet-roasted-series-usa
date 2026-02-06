import { ShoppingBag, X, Truck } from 'lucide-react';
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
          {/* Message */}
          <div className="hidden md:flex items-center gap-3">
            <Truck size={20} className="text-brand-gold" />
            <p className="text-sm">
              <span className="font-bold text-brand-gold">Free shipping</span> on orders over ${SHIPPING.freeShippingThreshold}
            </p>
          </div>

          {/* Mobile Message */}
          <p className="md:hidden text-sm">
            <span className="text-brand-gold font-bold">Free shipping $50+</span>
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#products"
              className="bg-brand-pink hover:bg-brand-pink/90 text-white px-6 py-2 font-semibold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors"
            >
              <ShoppingBag size={16} />
              Shop Now
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
