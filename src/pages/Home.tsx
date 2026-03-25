import Hero from '../components/Hero';
import { Coffee, Cake, Utensils, Star, MapPin, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Coffee className="h-8 w-8 text-brand-primary" />,
      title: "Hand-Brewed Coffee",
      description: "Rich espresso blends and single-origin pour-overs, crafted for the true coffee lover."
    },
    {
      icon: <Cake className="h-8 w-8 text-brand-primary" />,
      title: "Signature Pastries",
      description: "Our famous Cream Puffs and Cinnamon Rolls, baked fresh daily in our kitchen."
    },
    {
      icon: <Utensils className="h-8 w-8 text-brand-primary" />,
      title: "All-Day Brunch",
      description: "Indulge in gourmet brunch plates, from savory classics to sweet temptations."
    }
  ];

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

      {/* Features / Why Chef's Cafe */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-brand-primary mb-6">The Chef’s Experience</h2>
          <p className="text-brand-primary/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We don’t just serve coffee; we plate experiences. Every dish is a balance of flavor and craft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-10 bg-white shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-brand-accent">
              <div className="inline-block p-4 bg-brand-base rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary mb-4">{feature.title}</h3>
              <p className="text-brand-primary/80 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
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
