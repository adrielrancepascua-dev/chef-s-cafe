export default function About() {
  return (
    <div className="bg-brand-base min-h-screen text-brand-primary">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Chef’s Café Kitchen" 
            className="w-full h-full object-cover grayscale opacity-70"
          />
          <div className="absolute inset-0 bg-brand-primary/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-serif text-6xl font-bold text-white mb-6 tracking-tight">Culinary Craft</h1>
          <p className="text-brand-accent text-lg uppercase tracking-widest font-semibold">Gourmet Brunch & Pastries in Calasiao</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-primary prose-p:text-brand-primary/80 prose-p:leading-relaxed prose-p:font-light mx-auto">
          <h2>More Than Just Coffee</h2>
          <p>
            Chef’s Café was built for those who crave more than the usual. We are a culinary destination in Banaoang, Calasiao, dedicated to the art of brunch and bacterial baking. Our philosophy is simple: <strong>make it fresh, make it rich, make it memorable.</strong>
          </p>
          <p>
            We believe that a great morning starts with a plate that looks as good as it tastes. From the golden flake of our croissants to the rich aroma of our single-origin pour-overs, every detail is curated to offer a premium, indulgent experience.
          </p>
          
          <div className="my-16 grid grid-cols-2 gap-8">
             <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" alt="Pastries" className="rounded-sm shadow-xl" />
             <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" alt="Gourmet Coffee" className="rounded-sm shadow-xl mt-12" />
          </div>

          <h2>The Chef’s Touch</h2>
          <p>
             Our kitchen is the heart of Chef’s Café. We don't just reheat; we create. Our signature <strong>Cream Puffs</strong> are filled with velvety vanilla cream, and our <strong>Cinnamon Rolls</strong> are baked until they hit that perfect point of gooey warmth.
          </p>
          <p>
            For those seeking sustenance, our <strong>All-Day Brunch</strong> menu bridges the gap between breakfast comfort and lunch sophistication. Whether you’re here for a quick espresso or a long, lazy feast, we invite you to taste the difference that passion makes.
          </p>
        </div>
        
        <div className="mt-20 border-t border-brand-accent pt-12 text-center">
            <p className="font-serif text-2xl italic text-brand-primary">"Freshly baked. Richly brewed. Made to crave."</p>
        </div>
      </div>
    </div>
  );
}
