import { ShoppingBag, Star, Truck, Shield, Clock, Award } from 'lucide-react';
import { PRODUCTS, SHIPPING, SOCIAL_PROOF } from '../constants/assets';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Social Proof */}
        <div className="text-center mb-8">
          <p className="section-subtitle">Roasted Series</p>
          <h2 className="section-title">Our Coffees</h2>
          <p className="text-lg text-brand-gold max-w-2xl mx-auto mb-6">
            Each coffee tells a story of terroir, process, and passion.
            Producer-roasted for maximum freshness and flavor.
          </p>

          {/* Social Proof Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">{SOCIAL_PROOF.avgRating}</span>
              <span>({SOCIAL_PROOF.totalReviews} reviews)</span>
            </div>
            <span className="hidden md:inline text-brand-beige">|</span>
            <span>{SOCIAL_PROOF.customersServed} happy customers</span>
          </div>
        </div>

        {/* Trust Badges - Enhanced for USA */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 py-6 border-y border-brand-beige/30">
          <div className="flex items-center gap-2 text-sm text-brand-dark">
            <Truck size={20} className="text-brand-green" />
            <span><strong>Free Shipping</strong> $50+</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-dark">
            <Clock size={20} className="text-brand-green" />
            <span>Roasted <strong>Fresh to Order</strong></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-dark">
            <Shield size={20} className="text-brand-green" />
            <span><strong>30-Day</strong> Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-dark">
            <Award size={20} className="text-brand-green" />
            <span>SCA Score <strong>85-90+</strong></span>
          </div>
        </div>

        {/* Payment Methods - NEW */}
        <div className="flex justify-center gap-4 mb-8 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Secure Checkout:</span>
          <div className="flex gap-3 items-center">
            <span className="font-semibold text-gray-600">Visa</span>
            <span className="font-semibold text-gray-600">Mastercard</span>
            <span className="font-semibold text-gray-600">Amex</span>
            <span className="font-semibold text-gray-600">PayPal</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-brand-cream rounded-none overflow-hidden hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Badge (Best Seller, Limited, etc.) */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-brand-pink text-white text-xs px-3 py-1 uppercase tracking-wider font-bold">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className={`relative h-80 ${product.color} flex items-center justify-center p-8`}>
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.notes}`}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className="absolute top-4 right-4 bg-brand-gold text-white text-xs px-3 py-1 uppercase tracking-wider">
                  {product.tag}
                </span>

                {/* SCA Score Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs">
                  <span className="text-brand-gold font-bold">SCA {product.scaScore}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Name and Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-brand-dark">{product.name}</h3>
                  <div className="text-right">
                    {product.comparePrice && (
                      <span className="text-gray-400 line-through text-sm block">
                        ${product.comparePrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-brand-pink">${product.price}</span>
                  </div>
                </div>

                {/* Details */}
                <p className="text-brand-gold text-sm mb-2">
                  {product.process} • {product.altitude}
                </p>

                <p className="text-sm text-gray-500 mb-1">{product.weight}</p>

                {/* Tasting Notes */}
                <p className="text-gray-600 text-sm mb-4 italic">
                  "{product.notes}"
                </p>

                {/* Stock Urgency */}
                {product.stock < 50 && (
                  <p className="text-sm text-red-600 mb-4 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                    Only {product.stock} bags left
                  </p>
                )}

                {/* Add to Cart Button */}
                <button className="w-full btn-primary flex items-center justify-center gap-2 group-hover:bg-brand-dark transition-colors">
                  <ShoppingBag size={18} />
                  Add to Cart — ${product.price}
                </button>

                {/* Free shipping note */}
                {product.price >= SHIPPING.freeShippingThreshold && (
                  <p className="text-center text-xs text-brand-green mt-2 flex items-center justify-center gap-1">
                    <Truck size={14} />
                    Free shipping included
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Free Shipping Banner - More prominent */}
        <div className="mt-16 bg-brand-dark text-white py-8 px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Truck size={40} className="text-brand-gold" />
              <div>
                <h4 className="text-xl font-bold">Free Shipping on Orders $50+</h4>
                <p className="text-brand-beige/70">
                  {SHIPPING.fulfillmentLocation} • {SHIPPING.standardShipping.days}
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-brand-gold font-semibold">{SHIPPING.roastedFresh}</p>
              <p className="text-sm text-brand-beige/70">Ships to all 50 US states</p>
            </div>
          </div>
        </div>

        {/* First Order Discount */}
        <div className="mt-8 text-center bg-brand-beige/30 py-6 px-8 border border-brand-gold/30">
          <p className="text-brand-dark">
            <span className="font-bold text-brand-pink">First time ordering?</span>{' '}
            Use code <span className="font-mono bg-brand-gold/20 px-2 py-1 font-bold">WELCOME10</span> for 10% off your first order
          </p>
        </div>
      </div>
    </section>
  );
}
