import { useState } from 'react';

const MENU_CATEGORIES = [
  { id: 'signature', name: 'Signature Brunch' },
  { id: 'pastries', name: 'Fresh Pastries' },
  { id: 'coffee', name: 'Coffee & Espresso' },
  { id: 'sweet', name: 'Sweet Treats' },
  { id: 'light', name: 'Light Bites' },
];

const MENU_ITEMS = {
  signature: [
    { name: 'Chef’s Brunch Plate', price: '₱295', description: 'Eggs, bacon, sausage, and toasted brioche with a side of greens.', image: 'https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Eggs Benedict', price: '₱280', description: 'Poached eggs on English muffins with hollandaise sauce.', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=400&q=80' },
    { name: 'Gourmet Pancakes', price: '₱220', description: 'Fluffy pancakes topped with fresh berries and maple syrup.', image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=400&q=80' },
  ],
  pastries: [
    { name: 'Signature Cream Puff', price: '₱85', description: 'Flaky pastry filled with rich vanilla cream. A local favorite.', image: 'https://images.unsplash.com/photo-1626803775151-61d756412f56?auto=format&fit=crop&w=400&q=80' },
    { name: 'Classic Cinnamon Roll', price: '₱95', description: 'Warm, gooey, and topped with cream cheese glaze.', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80' },
    { name: 'Butter Croissant', price: '₱110', description: 'Golden, flaky layers baked fresh every morning.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80' },
  ],
  coffee: [
    { name: 'Hand-Brewed Pour Over', price: '₱160', description: 'Single-origin beans. Ask for our daily selection.', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80' },
    { name: 'Double Espresso', price: '₱120', description: 'Rich, bold, and perfect for a morning kick.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80' },
    { name: 'Iced Spanish Latte', price: '₱160', description: 'Sweet and creamy espresso-based drink with condensed milk.', image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=400&q=80' },
  ],
  sweet: [
    { name: 'Mini Fruit Tart', price: '₱120', description: 'Butter crust filled with custard and topped with seasonal fruits.', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&q=80' },
    { name: 'Burnt Basque Cheesecake', price: '₱190', description: 'Crustless cheesecake with a caramelized top.', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80' },
  ],
  light: [
    { name: 'Avocado Toast', price: '₱250', description: 'Smashed avocado on sourdough with feta and cherry tomatoes.', image: 'https://images.unsplash.com/photo-1588137372308-15f75323a675?auto=format&fit=crop&w=400&q=80' },
    { name: 'Truffle Fries', price: '₱180', description: 'Crispy fries tossed in truffle oil and parmesan.', image: 'https://images.unsplash.com/photo-1573080496291-6283f0e29e29?auto=format&fit=crop&w=400&q=80' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('signature');

  return (
    <div className="bg-brand-base min-h-screen pb-20 font-sans text-brand-primary">
      {/* Header */}
      <div className="bg-brand-primary py-20 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="relative z-10 max-w-2xl mx-auto px-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="text-brand-accent text-lg font-light tracking-wide uppercase">Freshly Baked • Richly Brewed • Made to Crave</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Category Tabs */}
        <div className="bg-white rounded-md shadow-xl p-2 flex flex-wrap justify-center gap-2 mb-16 border-t-4 border-brand-accent">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-brand-primary/60 hover:text-brand-primary hover:bg-brand-base'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, index) => (
            <div key={index} className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex gap-6 items-start border border-brand-primary/5 hover:border-brand-accent">
              <div className="overflow-hidden rounded-sm w-28 h-28 flex-shrink-0">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-grow pt-1">
                <div className="flex justify-between items-start mb-2 border-b border-brand-primary/10 pb-2">
                  <h3 className="font-serif text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{item.name}</h3>
                  <span className="font-bold text-brand-primary">{item.price}</span>
                </div>
                <p className="text-brand-primary/70 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <a 
            href="https://www.foodpanda.ph/restaurant/lpee/stay-awhile-cafe-and-bakery" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand-accent text-white px-12 py-4 rounded-sm hover:bg-brand-primary transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-lg"
          >
            Order on Foodpanda
          </a>
        </div>

      </div>
    </div>
  );
}
