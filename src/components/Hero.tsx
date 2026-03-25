import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-brand-base h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop" 
          alt="Chef’s Café Gourmet Brunch Spread" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight tracking-tight">
          Your gourmet brunch &<br/>pastry haven in Calasiao
        </h1>
        <p className="font-sans text-lg md:text-xl text-brand-cream/90 mb-10 font-light drop-shadow-md tracking-wide max-w-3xl mx-auto">
          Averin Strip Bldg – Old De Venecia Hwy • Open daily 11 AM–9:30 PM (Fri/Sat until 10:30 PM)
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/menu" 
            className="group bg-brand-accent text-white px-8 py-3 rounded-sm hover:bg-white hover:text-brand-primary transition-all duration-300 font-semibold uppercase tracking-wider text-sm shadow-xl flex items-center gap-2 border border-brand-accent hover:border-white w-full sm:w-auto justify-center"
          >
            View Menu
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="https://www.foodpanda.ph/restaurant/wnaf/chefs-cafe-banaoang" 
            target="_blank"
            rel="noreferrer"
            className="group bg-white text-brand-primary px-8 py-3 rounded-sm hover:bg-brand-cream transition-all duration-300 font-semibold uppercase tracking-wider text-sm shadow-xl border border-white w-full sm:w-auto justify-center"
          >
            Order via Foodpanda
          </a>
          <a 
            href="tel:09387215527" 
            className="group bg-transparent text-white px-8 py-3 rounded-sm hover:bg-white/10 transition-all duration-300 font-semibold uppercase tracking-wider text-sm border border-white/60 hover:border-white w-full sm:w-auto justify-center"
          >
            Call to Reserve
          </a>
        </div>
      </div>
    </div>
  );
}
