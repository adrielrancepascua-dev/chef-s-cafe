import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-brand-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-center text-brand-dark mb-4">Get in Touch</h1>
        <p className="text-center text-brand-dark/70 mb-16 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our menu, want to order a custom cake, or just want to say hi.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm h-full">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Visit Us</h3>
                  <p className="text-brand-dark/70">Averin Strip Building,<br/>Old De Venecia Highway,<br/>Banaoang, Calasiao, Pangasinan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Business Hours</h3>
                  <p className="text-brand-dark/70">Mon–Thu & Sun: 11 AM–9:30 PM</p>
                  <p className="text-brand-dark/70">Fri–Sat: 11 AM–10:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Call Us</h3>
                  <p className="text-brand-dark/70">0938 721 5527</p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-beige/30 space-y-4">
                <div>
                    <h3 className="font-bold text-brand-dark mb-2">Connect & Order</h3>
                    <div className="flex gap-4 mb-4">
                        <a href="https://www.facebook.com/chefscafe2025" target="_blank" rel="noreferrer" className="text-brand-brown hover:text-brand-accent transition-colors font-medium underline">Facebook</a>
                        <a href="https://www.instagram.com/chefs.cafeph/" target="_blank" rel="noreferrer" className="text-brand-brown hover:text-brand-accent transition-colors font-medium underline">Instagram</a>
                    </div>
                    <a 
                        href="https://www.foodpanda.ph/restaurant/wnaf/chefs-cafe-banaoang" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block bg-[#D70F64] text-white px-6 py-2 rounded-full font-bold hover:bg-[#b00c50] transition-colors"
                    >
                        Order on Foodpanda
                    </a>
                </div>
                <div>
                    <h3 className="font-bold text-brand-dark mb-2">Payment Methods</h3>
                    <p className="text-brand-dark/70">Cash, Card, GCash</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
             <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">Name</label>
                   <input type="text" id="name" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="Your name" />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email</label>
                   <input type="email" id="email" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="your@email.com" />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-1">Subject</label>
                 <select id="subject" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none">
                   <option>General Inquiry</option>
                   <option>Custom Cake Order</option>
                   <option>Event Booking</option>
                   <option>Feedback</option>
                 </select>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
                 <textarea id="message" rows={4} className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
               </div>

               <button type="submit" className="w-full bg-brand-brown text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-colors">
                 Send Message
               </button>
             </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-sm border border-brand-beige h-[400px]">
           <iframe 
             width="100%" 
             height="100%" 
             src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Averin%20Strip%20Building%20Old%20De%20Venecia%20Highway%20Banaoang%20Calasiao+(Chef's%20Cafe)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             title="Chef's Cafe Location"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
