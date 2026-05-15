import { createFileRoute } from "@tanstack/react-router";
import heroPancakes from "@/assets/hero-pancakes.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Precious Bites — Mini Panqueques with a Soul" },
      {
        name: "description",
        content:
          "Hand-crafted mini pancakes inspired by Latino flavors. Find our cart at farmers markets, festivals, and pop-ups, or book us for your next event.",
      },
      { property: "og:title", content: "Precious Bites — Mini Panqueques with a Soul" },
      {
        property: "og:description",
        content:
          "Fluffy, golden mini pancakes topped with dulce de leche, mango con chile, and Mexican chocolate. Hecho con amor.",
      },
      { property: "og:image", content: heroPancakes },
      { name: "twitter:image", content: heroPancakes },
    ],
  }),
  component: Index,
});

const events = [
  {
    day: "SATURDAY",
    name: "Mission District Farmers Market",
    time: "8:00 AM — 1:00 PM",
    note: "Get Directions",
  },
  {
    day: "SUNDAY",
    name: "Napa Valley Wine & Food Fest",
    time: "11:00 AM — 6:00 PM",
    note: "Event Tickets Required",
  },
  {
    day: "WEDNESDAY",
    name: "Midweek Market on Main",
    time: "4:00 PM — 8:00 PM",
    note: "Get Directions",
  },
];

const menu = [
  {
    name: "La Tradición",
    desc: "Dulce de leche, powdered sugar, and a hint of cinnamon.",
    price: "$9",
  },
  {
    name: "Tropical Fuego",
    desc: "Fresh mango slices, tajín, chamoy, and lime zest.",
    price: "$11",
  },
  {
    name: "Abuelita's Dream",
    desc: "Warm Mexican chocolate ganache and crushed toasted pepitas.",
    price: "$10",
  },
  {
    name: "Pink Guava Bliss",
    desc: "Sweet guava preserve, whipped cream cheese, and biscuit crumbles.",
    price: "$11",
  },
  {
    name: "Cajeta Clásica",
    desc: "Goat's milk caramel, toasted pecans, and Oaxacan sea salt.",
    price: "$10",
  },
  {
    name: "The Churro",
    desc: "Cinnamon sugar bath with a side of warm chocolate dipping sauce.",
    price: "$8",
  },
];

function Index() {
  return (
    <div className="font-sans bg-brand-cream text-stone-800 min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto">
        <a href="#top" className="font-serif text-2xl font-bold text-brand-terracotta">
          Precious Bites
        </a>
        <div className="hidden md:flex gap-8 font-medium uppercase tracking-wider text-sm items-center">
          <a href="#menu" className="hover:text-brand-terracotta transition-colors">
            The Menu
          </a>
          <a href="#events" className="hover:text-brand-terracotta transition-colors">
            Find Us
          </a>
          <a href="#story" className="hover:text-brand-terracotta transition-colors">
            Our Story
          </a>
          <a
            href="#booking"
            className="bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-terracotta transition-colors"
          >
            Book Event
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="top"
        className="relative px-6 md:px-8 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <span className="inline-block bg-brand-sun/20 text-brand-terracotta px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
            Hecho con Amor
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-brand-teal">
            Mini Panqueques with a Soul
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-md leading-relaxed">
            Fluffy, golden mini pancakes inspired by the flavors of our heritage. Topped with love, served at your favorite markets.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#menu"
              className="bg-brand-terracotta text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-terracotta/20 hover:-translate-y-1 transition-transform"
            >
              View Menu
            </a>
            <a
              href="#events"
              className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-teal hover:text-white transition-all"
            >
              Where are we?
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 top-6 -right-6 md:top-10 md:-right-10 w-full h-full bg-brand-sun rounded-3xl rotate-3" />
          <img
            src={heroPancakes}
            alt="Golden mini pancakes drizzled with dulce de leche and topped with fresh mango on a terracotta plate"
            width={1200}
            height={1200}
            className="w-full aspect-square object-cover rounded-3xl shadow-xl"
          />
        </div>
      </header>

      {/* Find Us */}
      <section id="events" className="bg-brand-teal text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-2">Find the Cart</h2>
              <p className="text-brand-sun uppercase tracking-widest text-sm font-semibold">
                This week's pop-up locations
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-white/10 mb-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {events.map((e) => (
              <article
                key={e.name}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-brand-sun font-bold tracking-widest text-sm">
                  {e.day}
                </span>
                <h3 className="text-2xl font-serif mt-2 leading-tight">{e.name}</h3>
                <p className="mt-4 opacity-80">{e.time}</p>
                <p className="mt-1 text-sm opacity-60 underline cursor-pointer">{e.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-teal mb-4">
            Nuestros Sabores
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">
            Every order comes with 12 fluffy mini hotcakes. Pick your signature style.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">
          {menu.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-start gap-6 border-b border-stone-200 pb-6"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-teal">{item.name}</h3>
                <p className="text-stone-500 mt-1 italic text-sm">{item.desc}</p>
              </div>
              <span className="font-serif text-xl font-bold text-brand-terracotta shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-brand-sun/10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <img
            src={founderImg}
            alt="Sofia Mendez, founder of Precious Bites, smiling next to her mini pancake cart"
            width={1000}
            height={1200}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg"
          />
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-teal leading-tight">
              From Abuela's Kitchen to Your Streets
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-700">
              <p>
                Growing up, Sunday mornings smelled like cinnamon and coffee. My abuela would make us dozens of tiny panqueques, telling stories about her childhood in Jalisco.
              </p>
              <p>
                Precious Bites was born from a desire to share those flavors with my community. We use her original recipe but add a modern twist with local toppings that honor our Latino roots.
              </p>
            </div>
            <p className="font-serif text-2xl text-brand-terracotta italic pt-2">
              — Sofia Mendez, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-brand-terracotta rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              Bring the Bites to Your Party
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
              Weddings, birthdays, or corporate events—our cart is ready to pop up and serve warm joy to your guests.
            </p>
            <a
              href="mailto:hola@preciousbites.com?subject=Private%20Event%20Inquiry"
              className="inline-block bg-white text-brand-terracotta px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:scale-105 transition-transform"
            >
              Inquire for Booking
            </a>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-sun/20 blur-3xl" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-black/10 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="col-span-2">
            <h3 className="font-serif text-2xl text-white mb-4 md:mb-6">Precious Bites</h3>
            <p className="max-w-xs text-sm md:text-base">
              Mini pancakes with big heritage. Handcrafted, market to market.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-sm">
              <a
                href="mailto:hola@preciousbites.com"
                className="hover:text-white transition-colors"
              >
                hola@preciousbites.com
              </a>
            </p>
            <p className="mt-2 text-sm">San Francisco, CA</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} Precious Bites LLC. All rights reserved.</p>
          <p>Handcrafted with cajeta.</p>
        </div>
      </footer>
    </div>
  );
}
