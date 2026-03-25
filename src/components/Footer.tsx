import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-base pt-24 pb-12 font-sans border-t border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Brand & About */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4 text-brand-base">Chef’s Café</h3>
            <p className="text-brand-base/80 mb-6 leading-relaxed font-light italic">
               "Freshly baked, richly brewed, made to crave."
            </p>
            <div className="flex flex-col space-y-4">
              <span className="text-brand-accent text-sm font-bold uppercase tracking-wider">Follow our journey</span>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/chefscafe2025" target="_blank" rel="noreferrer" className="text-brand-base hover:text-brand-accent transition-colors">Facebook</a>
                <a href="https://www.instagram.com/chefs.cafeph/" target="_blank" rel="noreferrer" className="text-brand-base hover:text-brand-accent transition-colors">Instagram</a>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-accent/20">
                 <p className="text-brand-base/60 text-xs uppercase tracking-widest mb-2">Accepted Payments</p>
                 <p className="text-brand-base/90 text-sm font-light">Cash • Card • GCash</p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-brand-accent">Visit Us</h4>
            <ul className="space-y-4 text-brand-base/80 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-accent" />
                <span>Averin Strip Building,<br/>Old De Venecia Highway, Banaoang,<br/>Calasiao, Pangasinan</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-accent" />
                <div className="flex flex-col">
                  <span>Mon–Thu & Sun: 11 AM–9:30 PM</span>
                  <span>Fri–Sat: 11 AM–10:30 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-accent" />
                <span>0938 721 5527</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Links */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-brand-accent">Stay Updated</h4>
            <p className="text-brand-base/80 mb-4 font-light">
              Receive updates on seasonal specials and gourmet events.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-brand-primary/50 border border-brand-accent/30 rounded-sm px-4 py-3 text-brand-base placeholder:text-brand-base/30 focus:outline-none focus:border-brand-accent"
              />
              <button className="bg-brand-accent text-brand-primary px-4 py-3 rounded-sm hover:bg-brand-base transition-colors font-bold uppercase tracking-wider text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-brand-base/10 mt-16 pt-8 text-center text-brand-base/40 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Chef’s Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
