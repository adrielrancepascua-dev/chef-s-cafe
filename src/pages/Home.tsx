import Hero from '../components/Hero';
import { Star, MapPin, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-base text-brand-primary">
      <Hero />
      
      {/* Signature Band */}
      <section className="bg-brand-primary text-brand-base py-10 uppercase tracking-widest text-sm md:text-base font-semibold border-y border-brand-accent">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
             <span>Known for cream puffs, cinnamon rolls, and all-day brunch</span>
             <span className="hidden md:block">•</span>
             <span>Freshly baked. Richly brewed. Made to crave.</span>
         </div>
      </section>

      {/* Social Proof & Vibe Section */}
      <section className="bg-white py-16 text-center border-b border-brand-base">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl italic text-brand-primary mb-8 leading-relaxed">
                “Your foodie haven in Calasiao. The perfect spot for slow mornings and indulgent afternoons.”
            </h2>
             <div className="flex items-center justify-center gap-2 text-brand-accent">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
             </div>
             <p className="mt-3 text-xs uppercase tracking-widest text-brand-muted font-bold">Rated 4.8/5 on Foodpanda</p>
        </div>
      </section>

      {/* Signature Dishes Spotlight (Option A) */}
      <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center mb-20">
                    <span className="text-brand-accent uppercase tracking-[0.2em] text-sm font-bold">Our Craft</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-brand-primary mt-3">Signature Selections</h2>
              </div>
              
              {/* Item 1: Cream Puffs (Image Left) */}
              <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                  <div className="w-full md:w-1/2 relative group overflow-hidden rounded-sm shadow-xl aspect-sqaure md:aspect-[4/3]">
                      <img 
                          src="https://images.unsplash.com/photo-1626803775151-61d756412f56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="Signature Cream Puffs" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
                      <h3 className="font-serif text-4xl text-brand-primary mb-4">The Famous Cream Puff</h3>
                      <p className="text-brand-primary/70 text-lg leading-relaxed mb-6 font-light">
                          Crisp, golden choux pastry filled generously with our signature vanilla bean custard. 
                          Ideally balanced sweetness with a cloud-like texture that melts in your mouth.
                      </p>
                      <span className="uppercase tracking-widest text-sm border-b border-brand-accent pb-1 inline-block">Best Seller</span>
                  </div>
              </div>

              {/* Item 2: Brunch Plate (Image Right) */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                  <div className="w-full md:w-1/2 relative group overflow-hidden rounded-sm shadow-xl aspect-sqaure md:aspect-[4/3]">
                      <img 
                          src="https://images.unsplash.com/photo-1544025162-d76690b67f11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="Premium Rib-eye Salpicao" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                  <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
                      <h3 className="font-serif text-4xl text-brand-primary mb-4">Rib-eye Salpicao</h3>
                      <p className="text-brand-primary/70 text-lg leading-relaxed mb-6 font-light">
                          Tender cubes of premium rib-eye, seared to perfection in garlic-infused olive oil and 
                          finished with our house-blend seasoning. Served with garlic rice for the ultimate comfort meal.
                      </p>
                      <Link to="/menu" className="bg-transparent border border-brand-primary text-brand-primary px-8 py-3 hover:bg-brand-primary hover:text-white transition-all uppercase tracking-widest text-sm font-semibold">
                          Explore Menu
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Location & Payment Stripe */}
      <section className="bg-brand-secondary/10 py-20 border-y border-brand-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center group">
                    <MapPin className="h-10 w-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-2xl font-bold text-brand-primary mb-2">Visit Us</h3>
                    <p className="text-brand-primary/80 font-light">Averin Strip Building,<br/>Old De Venecia Highway, Banaoang</p>
                </div>
                <div className="flex flex-col items-center group">
                    <Clock className="h-10 w-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-2xl font-bold text-brand-primary mb-2">Opening Hours</h3>
                    <p className="text-brand-primary/80 font-light">Mon–Thu & Sun: 11 AM–9:30 PM<br/>Fri–Sat: 11 AM–10:30 PM</p>
                </div>
                <div className="flex flex-col items-center group">
                    <CreditCard className="h-10 w-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-2xl font-bold text-brand-primary mb-2">Payment</h3>
                    <p className="text-brand-primary/80 font-light">Cash • GCash • Cards</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-brand-primary text-brand-base text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Indulge?</h2>
          <p className="text-xl md:text-2xl mb-12 font-light text-brand-accent">Every bite is a celebration of flavor.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/menu" className="bg-brand-accent text-white px-10 py-4 rounded-sm hover:bg-white hover:text-brand-primary transition-all duration-300 font-semibold uppercase tracking-wider text-sm shadow-xl">
              Discover Menu
            </Link>
            <Link to="/contact" className="border border-brand-accent text-brand-accent px-10 py-4 rounded-sm hover:bg-brand-accent hover:text-white transition-all duration-300 font-semibold uppercase tracking-wider text-sm">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
