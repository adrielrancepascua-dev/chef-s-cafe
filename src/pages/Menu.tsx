import { useState } from 'react';

const MENU_CATEGORIES = [
  { id: 'brunch', name: 'Brunch Specials' },
  { id: 'rice-bowls', name: 'Chef’s Rice Bowls' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'non-coffee', name: 'Non-Coffee & Tea' },
  { id: 'frappe', name: 'Frappe & Signature' },
  { id: 'pastries', name: 'Pastries & Sides' },
];

const MENU_ITEMS = {
  brunch: [
    { name: 'Garlic Parmesan Chicken', price: '₱384', description: 'Savory chicken wings tossed in garlic parmesan sauce.', image: 'https://images.unsplash.com/photo-1562967963-ed7b6f67df3e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Premium Sirloin Tapa', price: '₱425', description: 'Tender marinated beef sirloin served with garlic rice.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rib-eye Salpicao', price: '₱540', description: 'Juicy rib-eye cubes sautéed in garlic and olive oil.', image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=400&q=80' },
    { name: 'Smoked Roast Beef with Mushrooms', price: '₱575', description: 'Slow-roasted beef slices with savory mushroom sauce.', image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' },
  ],
  'rice-bowls': [
    { name: 'Longganisa Kimchi Rice', price: '₱342', description: 'Sweet & savory longganisa paired with spicy kimchi rice.', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Thai Basil Beef Rice', price: '₱384', description: 'Spicy stir-fried beef with fresh basil and chili.', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80' },
    { name: 'Thai Bagoong Crispy Pork Rice', price: '₱500', description: 'Filipino-Thai fusion with crispy pork and shrimp paste rice.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80' },
  ],
  pasta: [
    { name: 'Rib-eye Stroganoff (Truffle)', price: '₱397', description: 'Creamy truffle pasta topped with tender rib-eye slices.', image: 'https://images.unsplash.com/photo-1645063833292-6f91f3a57962?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Pesto', price: '₱377', description: 'Al dente pasta tossed in fresh basil pesto with grilled chicken.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80' },
  ],
  coffee: [
    { name: 'Cappuccino', price: '₱191', description: 'Espresso with steamed milk and thick foam.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80' },
    { name: 'French Vanilla', price: '₱232', description: 'Sweet vanilla flavored latte.', image: 'https://images.unsplash.com/photo-1570968995847-f3c9692c813a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spanish Latte', price: '₱246', description: 'Sweet and creamy espresso with condensed milk.', image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Americano', price: '₱171', description: 'Diluted espresso with hot water.', image: 'https://images.unsplash.com/photo-1551024601-5629436bb5c1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Iced Classic Tiramisu Latte', price: '₱321', description: 'Dessert in a cup with cocoa and mascarpone notes.', image: 'https://images.unsplash.com/photo-1558444455-d1cb7fc04213?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caramel Macchiato', price: '₱253', description: 'Espresso with vanilla and caramel drizzle.', image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c835569?auto=format&fit=crop&w=400&q=80' },
    { name: 'Biscoff Latte', price: '₱308', description: 'Latte infused with cookie butter flavor.', image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=400&q=80' },
    { name: 'White Mocha', price: '₱239', description: 'Espresso with white chocolate sauce.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c73516?auto=format&fit=crop&w=400&q=80' },
    { name: 'Latte', price: '₱191', description: 'Classic espresso with steamed milk.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80' },
    { name: 'Iced Salted Caramel Latte', price: '₱280', description: 'Sweet & savory caramel latte.', image: 'https://images.unsplash.com/photo-1558550136-1c2104033b00?auto=format&fit=crop&w=400&q=80' },
  ],
  'non-coffee': [
    { name: 'Chocolate', price: '₱219', description: 'Rich hot or iced chocolate drink.', image: 'https://images.unsplash.com/photo-1542488246-ad82df58469a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Iced Milky Blueberry', price: '₱253', description: 'Creamy milk drink with blueberry puree.', image: 'https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?auto=format&fit=crop&w=400&q=80' },
    { name: 'Iced Milky Strawberry', price: '₱239', description: 'Refreshing strawberry milk drink.', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28df8?auto=format&fit=crop&w=400&q=80' },
    { name: 'Creamy Oat Milk Matcha (Iced)', price: '₱294', description: 'Premium matcha with creamy oat milk.', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pure Chamomile Tea', price: '₱143', description: 'Soothing herbal tea.', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kid’s Fruit Tea', price: '₱185', description: 'Strawberry, Lychee, or Blueberry.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80' },
  ],
  frappe: [
    { name: 'Java Chip Frappe', price: '₱270', description: 'Coffee blend with chocolate chips.', image: 'https://images.unsplash.com/photo-1576449174681-4b1368142465?auto=format&fit=crop&w=400&q=80' },
    { name: 'Strawberry Yogurt Frappe', price: '₱270', description: 'Fruity and tangy yogurt blend.', image: 'https://images.unsplash.com/photo-1586053424116-2da9e73f4438?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cookies N Cream Frappe', price: '₱280', description: 'Classic cookie crumble milkshake.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { name: 'Iced Strawberry Cheesecake Latte', price: '₱287', description: 'Signature dessert drink.', image: 'https://images.unsplash.com/photo-1627042633092-26aa843ea83c?auto=format&fit=crop&w=400&q=80' },
  ],
  pastries: [
    { name: 'Brownies (1 slice)', price: '₱130', description: 'Fudgy, rich chocolate brownie.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80' },
    { name: 'Buttered Veggies', price: '₱45', description: 'Fresh mixed vegetables.', image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kimchi Rice', price: '₱70', description: 'Spicy fried rice.', image: 'https://images.unsplash.com/photo-1536767784033-02f8373ca373?auto=format&fit=crop&w=400&q=80' },
    { name: 'Garlic Mayo Dip', price: '₱30', description: 'House special dip.', image: 'https://images.unsplash.com/photo-1542487354-feaf93476caa?auto=format&fit=crop&w=400&q=80' },
    { name: 'Espresso Shot (Add-on)', price: '₱80', description: 'Extra kick for your coffee.', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('brunch');

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
