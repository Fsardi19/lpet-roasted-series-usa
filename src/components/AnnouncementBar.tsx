import { X, Gift, Truck } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-pink text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex items-center justify-center gap-4 text-sm md:text-base">
          {/* Desktop version */}
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Gift size={16} />
              First order? Use code{' '}
              <span className="font-mono bg-white/20 px-2 py-0.5 font-bold mx-1">
                WELCOME10
              </span>{' '}
              for 10% off
            </span>
            <span className="text-white/50">|</span>
            <span className="flex items-center gap-2">
              <Truck size={16} />
              Free shipping on orders $50+
            </span>
          </div>

          {/* Mobile version */}
          <div className="md:hidden flex items-center gap-2">
            <Gift size={14} />
            <span>
              Code <span className="font-bold">WELCOME10</span> = 10% off | Free ship $50+
            </span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded transition-colors"
          aria-label="Close announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
