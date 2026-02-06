import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              LA PALMA <span className="text-brand-gold">&</span> EL TUCÁN
            </h3>
            <p className="text-brand-beige/70 mb-6 max-w-md">
              Producer-roasted specialty coffee from the cloud forests of Colombia.
              From seed to roast, one farm, one team.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lapalmayeltucan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:coffee@lapalmayeltucan.com"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-brand-gold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-brand-beige/70 hover:text-white transition-colors">All Coffees</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-white transition-colors">Subscriptions</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-brand-gold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold flex-shrink-0 mt-1" />
                <span className="text-brand-beige/70">
                  Zipacón, Cundinamarca<br />Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold" />
                <a href="mailto:coffee@lapalmayeltucan.com" className="text-brand-beige/70 hover:text-white transition-colors">
                  coffee@lapalmayeltucan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-beige/50 text-sm">
            © 2026 La Palma & El Tucán. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-brand-beige/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-beige/50 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-brand-beige/50 hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
