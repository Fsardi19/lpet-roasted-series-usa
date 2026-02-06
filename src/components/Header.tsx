import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-dark">
            LA PALMA <span className="text-brand-gold">&</span> EL TUCÁN
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-brand-dark hover:text-brand-pink transition-colors">
            Products
          </a>
          <a href="#process" className="text-brand-dark hover:text-brand-pink transition-colors">
            Our Process
          </a>
          <a href="#story" className="text-brand-dark hover:text-brand-pink transition-colors">
            Our Story
          </a>
          <a href="#sustainability" className="text-brand-dark hover:text-brand-pink transition-colors">
            Sustainability
          </a>
          <a href="#products" className="btn-primary">
            Shop Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-beige">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#products" className="text-brand-dark py-2">Products</a>
            <a href="#process" className="text-brand-dark py-2">Our Process</a>
            <a href="#story" className="text-brand-dark py-2">Our Story</a>
            <a href="#sustainability" className="text-brand-dark py-2">Sustainability</a>
            <a href="#products" className="btn-primary text-center">Shop Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
