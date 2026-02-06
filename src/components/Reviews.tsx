import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS, SOCIAL_PROOF } from '../constants/assets';

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Customer Reviews</p>
          <h2 className="section-title">What Coffee Lovers Say</h2>

          {/* Aggregate Rating */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-3xl font-bold text-brand-dark">{SOCIAL_PROOF.avgRating}</p>
              <p className="text-sm text-gray-600">Based on {SOCIAL_PROOF.totalReviews} reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white p-8 relative">
              {/* Quote Icon */}
              <Quote size={40} className="absolute top-6 right-6 text-brand-beige/30" />

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Product */}
              <p className="text-sm text-brand-gold mb-3 uppercase tracking-wider">
                {review.product}
              </p>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 text-lg">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-brand-dark">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-brand-green text-sm">
                    <CheckCircle size={16} />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-4">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {SOCIAL_PROOF.featuredIn.map((publication) => (
              <span key={publication} className="text-xl md:text-2xl font-serif text-brand-dark">
                {publication}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#products"
            className="btn-primary inline-flex items-center gap-2"
          >
            Shop Our Coffees
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Join {SOCIAL_PROOF.customersServed} happy customers
          </p>
        </div>
      </div>
    </section>
  );
}
