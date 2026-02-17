import './Menu.css';

const sections = [
  {
    title: 'Coffee',
    emoji: '☕',
    items: [
      { name: 'Cappuccino', desc: '', price: '£3.50' },
      { name: 'Flat White', desc: '', price: '£3.50' },
      { name: 'Mocha', desc: '', price: '£3.95' },
      { name: 'Americano', desc: '', price: '£3.25' },
      { name: 'Latte', desc: '', price: '£3.50' },
      { name: 'Espresso', desc: '', price: '£2.75' },
      { name: 'Alternative Milks', desc: 'Add to any coffee', price: '+30p' },
    ],
  },
  {
    title: 'Hot Drinks',
    emoji: '🍫',
    items: [
      { name: 'Caramel Latte', desc: '', price: '£3.95' },
      { name: 'Vanilla Latte', desc: '', price: '£3.95' },
      { name: 'Chai Latte', desc: '', price: '£3.95' },
      { name: 'Hot Chocolate', desc: 'With marshmallow & chocolate shavings', price: '£4.50' },
    ],
  },
  {
    title: 'Tea',
    emoji: '🫖',
    note: 'All teas £2.50',
    items: [
      { name: 'English Breakfast', desc: '', price: '£2.50' },
      { name: 'Green', desc: '', price: '£2.50' },
      { name: 'Earl Grey', desc: '', price: '£2.50' },
      { name: 'Mint', desc: '', price: '£2.50' },
      { name: 'Strawberry Sensation', desc: '', price: '£2.50' },
      { name: 'Lemon & Lime', desc: '', price: '£2.50' },
    ],
  },
  {
    title: 'Soft Drinks',
    emoji: '🥤',
    items: [
      { name: 'Still Bottled Water', desc: '', price: '£2.00' },
      { name: 'Sparkling Bottled Water', desc: '', price: '£2.25' },
      { name: 'Coca Cola', desc: '', price: '£2.50' },
      { name: 'Sprite', desc: '', price: '£2.50' },
      { name: 'Classic Lemonade', desc: '', price: '£3.00' },
      { name: 'Sparkling Orange', desc: '', price: '£3.00' },
      { name: 'Sparkling Lemon & Mint', desc: '', price: '£3.00' },
      { name: 'Virtue Energy', desc: 'Peach & Strawberry', price: '£3.00' },
      { name: 'Juice Cartons', desc: 'Apple & Apple', price: '£1.25' },
      { name: 'Ribena', desc: '', price: '£1.50' },
    ],
  },
  {
    title: 'Breakfast Classics',
    emoji: '🍳',
    items: [
      { name: 'Full English', desc: '2 fried eggs, bacon, sausage, grilled tomato, mushrooms, beans, toast', price: '£12.95' },
      { name: 'Turkish Breakfast', desc: 'Sucuk, 2 eggs, grilled halloumi, tomatoes, olives, pepper with a feta & spinach pastry', price: '£14.50' },
      { name: 'Breakfast Brioche', desc: 'Eggs, grilled bacon & cheese', price: '£7.95' },
      { name: 'Greek Yogurt Bowl', desc: 'With manuka honey, granola & fresh fruits', price: '£8.95' },
      { name: 'Avocado & Smoked Salmon on Sourdough', desc: 'With poached eggs & sundried tomatoes', price: '£13.95' },
    ],
  },
  {
    title: 'Willows Waffles',
    emoji: '🧇',
    note: 'All waffles £10.95 — ask for our full Waffles Menu',
    items: [
      { name: 'Savoury Waffle', desc: 'Grilled bacon, sausage, mixed fruit & maple syrup', price: '£10.95' },
      { name: 'Protein Waffle', desc: 'Greek yoghurt, manuka honey & mixed fruit', price: '£10.95' },
      { name: 'Sweet Treat', desc: 'Chocolate drizzle, fresh strawberries & vanilla ice cream', price: '£10.95' },
    ],
  },
  {
    title: 'Wraps',
    emoji: '🌯',
    note: 'Add fries £3.50 or sweet potato £4',
    items: [
      { name: 'Chicken & Halloumi Wrap', desc: 'With garlic yoghurt & salad', price: '£9.95' },
      { name: 'Halloumi Wrap', desc: 'With hot honey & salad', price: '£8.95' },
      { name: 'Chicken Wrap & Seasonal Veg', desc: 'With garlic yoghurt', price: '£9.95' },
    ],
  },
  {
    title: 'Sandwiches',
    emoji: '🥪',
    note: 'Add fries £3.50 or sweet potato £4',
    items: [
      { name: 'Cheese & Salad', desc: '', price: '£3.95' },
      { name: 'Chicken Mayo & Salad', desc: '', price: '£5.95' },
      { name: 'Ham & Cheese', desc: '', price: '£3.95' },
      { name: 'Tuna Mayo', desc: '', price: '£4.95' },
      { name: 'Egg Mayo', desc: '', price: '£3.95' },
      { name: 'Classic BLT', desc: '', price: '£5.95' },
      { name: 'Coronation Chicken', desc: '', price: '£4.95' },
    ],
  },
  {
    title: "Panini's & Baguettes",
    emoji: '🥖',
    note: 'Add fries £3.50 or sweet potato £4',
    items: [
      { name: 'Classic Ham & Cheese', desc: '', price: '£8.95' },
      { name: 'Chicken, Chorizo & Cheese', desc: '', price: '£9.95' },
      { name: 'Tuna, Red Onion & Cheese', desc: '', price: '£8.95' },
      { name: 'Mozzarella, Tomato & Pesto', desc: '', price: '£8.95' },
    ],
  },
  {
    title: 'Meze Platter',
    emoji: '🫒',
    note: '£14.95 for 3 or £16.95 for 4 — comes with Turkish salad & Turkish bread',
    items: [
      { name: 'Olives', desc: 'Mixed olives', price: '' },
      { name: 'Saksuka', desc: 'Fried aubergine & seasonal vegetables with tomato, garlic, olive oil & fresh herbs', price: '' },
      { name: 'Bean Salad', desc: 'White bean & salad with parsley salad and olive oil', price: '' },
      { name: 'Bakla', desc: 'Dried broadbean in garlic, olive oil & vinaigrette dressing', price: '' },
      { name: 'Cacik (Tzaziki)', desc: 'Greek yoghurt, garlic & grated cucumber dip', price: '' },
      { name: 'Hummus Dip', desc: 'Chickpeas, tahini, lemon juice, garlic & olive oil', price: '' },
    ],
  },
  {
    title: 'Jacket Potatoes',
    emoji: '🥔',
    note: 'All £7.50 — served with side salad. Add coleslaw £2 & cheese £2',
    items: [
      { name: 'Cheese & Beans', desc: '', price: '£7.50' },
      { name: 'Chilli & Cheese', desc: '', price: '£7.50' },
      { name: 'Tuna Mayo & Sweetcorn', desc: '', price: '£7.50' },
      { name: 'Quorn Chilli & Vegan Cheese', desc: '', price: '£7.50' },
      { name: 'Coronation Chicken', desc: '', price: '£7.50' },
      { name: 'Chicken Curry', desc: '', price: '£7.50' },
    ],
  },
  {
    title: 'Sides & Extras',
    emoji: '➕',
    items: [
      { name: 'Hash Brown', desc: '', price: '£2.00' },
      { name: 'Grilled Sausage', desc: '', price: '£2.50' },
      { name: 'Grilled Halloumi', desc: '', price: '£3.00' },
      { name: 'Grilled Bacon', desc: '', price: '£2.50' },
      { name: 'Toast', desc: '', price: '£2.50' },
      { name: 'Strawberry Jam', desc: '', price: '£1.50' },
      { name: 'Manuka Honey', desc: '', price: '£3.00' },
      { name: 'Marmalade', desc: '', price: '£1.50' },
    ],
  },
];

export default function Menu() {
  return (
    <div className="menu-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Our Menu</h1>
          <p>Breakfast, brunch, waffles, wraps, sandwiches & more — all made fresh with love</p>
        </div>
      </div>

      {/* Menu sections */}
      <div className="menu-content">
        <div className="container">
          {sections.map(({ title, emoji, items, note }) => (
            <div key={title} className="menu-section">
              <div className="menu-section-header">
                <span className="menu-emoji">{emoji}</span>
                <h2>{title}</h2>
              </div>
              {note && <p className="menu-section-note">{note}</p>}
              <div className="menu-items-grid">
                {items.map(({ name, desc, price }) => (
                  <div key={name} className="menu-item-card">
                    <div className="menu-item-info">
                      <h3>{name}</h3>
                      {desc && <p>{desc}</p>}
                    </div>
                    {price && <span className="menu-item-price">{price}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order CTA */}
      <div className="menu-order-cta">
        <div className="container order-cta-inner">
          <h2>Come Visit Us</h2>
          <p>Pop in and see us at 297 High St, Dorking — open every day 8am–4pm</p>
        </div>
      </div>
    </div>
  );
}
