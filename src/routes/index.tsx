import { useState } from "react";
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

type Lang = "en" | "es";

const copy = {
  en: {
    nav: { menu: "The Menu", events: "Find Us", story: "Our Story", book: "Book Event" },
    hero: {
      badge: "Made with Love",
      title: "Mini Pancakes with a Soul",
      sub: "Fluffy, golden mini pancakes inspired by the flavors of our heritage. Topped with love, served at your favorite markets.",
      cta1: "View Menu",
      cta2: "Where are we?",
    },
    events: {
      title: "Find the Cart",
      kicker: "This week's pop-up locations",
      directions: "Get Directions",
      tickets: "Event Tickets Required",
      days: { sat: "SATURDAY", sun: "SUNDAY", wed: "WEDNESDAY" },
    },
    menu: {
      title: "Our Flavors",
      sub: "Every order comes with 12 fluffy mini hotcakes. Pick your signature style.",
      items: [
        { name: "The Tradition", desc: "Dulce de leche, powdered sugar, and a hint of cinnamon." },
        { name: "Tropical Fire", desc: "Fresh mango slices, tajín, chamoy, and lime zest." },
        { name: "Abuelita's Dream", desc: "Warm Mexican chocolate ganache and crushed toasted pepitas." },
        { name: "Pink Guava Bliss", desc: "Sweet guava preserve, whipped cream cheese, and biscuit crumbles." },
        { name: "Classic Cajeta", desc: "Goat's milk caramel, toasted pecans, and Oaxacan sea salt." },
        { name: "The Churro", desc: "Cinnamon sugar bath with a side of warm chocolate dipping sauce." },
      ],
    },
    story: {
      title: "From Abuela's Kitchen to Your Streets",
      p1: "Growing up, Sunday mornings smelled like cinnamon and coffee. My abuela would make us dozens of tiny pancakes, telling stories about her childhood in Jalisco.",
      p2: "Precious Bites was born from a desire to share those flavors with my community. We use her original recipe but add a modern twist with local toppings that honor our Latino roots.",
      sig: "— Sofia Mendez, Founder",
    },
    booking: {
      title: "Bring the Bites to Your Party",
      sub: "Weddings, birthdays, or corporate events—our cart is ready to pop up and serve warm joy to your guests.",
      cta: "Inquire for Booking",
    },
    footer: {
      tagline: "Mini pancakes with big heritage. Handcrafted, market to market.",
      follow: "Follow Us",
      contact: "Contact",
      rights: "All rights reserved.",
      handcrafted: "Handcrafted with cajeta.",
    },
  },
  es: {
    nav: { menu: "El Menú", events: "Encuéntranos", story: "Nuestra Historia", book: "Reservar Evento" },
    hero: {
      badge: "Hecho con Amor",
      title: "Mini Panqueques con Alma",
      sub: "Mini panqueques esponjosos y dorados, inspirados en los sabores de nuestra herencia. Servidos con amor en tus mercados favoritos.",
      cta1: "Ver el Menú",
      cta2: "¿Dónde estamos?",
    },
    events: {
      title: "Encuentra el Carrito",
      kicker: "Ubicaciones de esta semana",
      directions: "Cómo Llegar",
      tickets: "Se Requieren Boletos",
      days: { sat: "SÁBADO", sun: "DOMINGO", wed: "MIÉRCOLES" },
    },
    menu: {
      title: "Nuestros Sabores",
      sub: "Cada orden viene con 12 mini panqueques esponjosos. Elige tu estilo.",
      items: [
        { name: "La Tradición", desc: "Dulce de leche, azúcar glas y un toque de canela." },
        { name: "Tropical Fuego", desc: "Mango fresco, tajín, chamoy y ralladura de limón." },
        { name: "El Sueño de Abuelita", desc: "Ganache de chocolate mexicano y pepitas tostadas." },
        { name: "Delicia de Guayaba", desc: "Mermelada de guayaba, queso crema batido y migas de galleta." },
        { name: "Cajeta Clásica", desc: "Cajeta, nueces pecanas tostadas y sal de mar oaxaqueña." },
        { name: "El Churro", desc: "Baño de canela y azúcar con salsa de chocolate caliente." },
      ],
    },
    story: {
      title: "De la Cocina de Abuela a Tus Calles",
      p1: "Crecí con mañanas de domingo que olían a canela y café. Mi abuela nos hacía docenas de panqueques pequeños mientras contaba historias de su niñez en Jalisco.",
      p2: "Precious Bites nació del deseo de compartir esos sabores con mi comunidad. Usamos su receta original con un toque moderno y coberturas locales que honran nuestras raíces latinas.",
      sig: "— Sofia Mendez, Fundadora",
    },
    booking: {
      title: "Lleva los Bites a Tu Fiesta",
      sub: "Bodas, cumpleaños o eventos corporativos—nuestro carrito está listo para servir alegría calientita a tus invitados.",
      cta: "Solicitar Reserva",
    },
    footer: {
      tagline: "Mini panqueques con gran herencia. Hechos a mano, de mercado en mercado.",
      follow: "Síguenos",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      handcrafted: "Hecho a mano con cajeta.",
    },
  },
} as const;

const eventData = [
  { dayKey: "sat" as const, name: "Mission District Farmers Market", time: "8:00 AM — 1:00 PM", noteKey: "directions" as const },
  { dayKey: "sun" as const, name: "Napa Valley Wine & Food Fest", time: "11:00 AM — 6:00 PM", noteKey: "tickets" as const },
  { dayKey: "wed" as const, name: "Midweek Market on Main", time: "4:00 PM — 8:00 PM", noteKey: "directions" as const },
];

const prices = ["$9", "$11", "$10", "$11", "$10", "$8"];

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  return (
    <div className="font-sans bg-brand-cream text-stone-800 min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto">
        <a href="#top" className="font-serif text-2xl font-bold text-brand-terracotta">
          Precious Bites
        </a>
        <div className="flex gap-4 md:gap-8 font-medium uppercase tracking-wider text-sm items-center">
          <a href="#menu" className="hidden md:inline hover:text-brand-terracotta transition-colors">
            {t.nav.menu}
          </a>
          <a href="#events" className="hidden md:inline hover:text-brand-terracotta transition-colors">
            {t.nav.events}
          </a>
          <a href="#story" className="hidden md:inline hover:text-brand-terracotta transition-colors">
            {t.nav.story}
          </a>
          <div
            role="group"
            aria-label="Language"
            className="flex items-center rounded-full border border-brand-teal/30 overflow-hidden text-xs"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1 transition-colors ${
                lang === "en" ? "bg-brand-teal text-white" : "text-brand-teal hover:bg-brand-teal/10"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              className={`px-3 py-1 transition-colors ${
                lang === "es" ? "bg-brand-teal text-white" : "text-brand-teal hover:bg-brand-teal/10"
              }`}
            >
              ES
            </button>
          </div>
          <a
            href="#booking"
            className="hidden md:inline bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-terracotta transition-colors"
          >
            {t.nav.book}
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
            {t.hero.badge}
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-brand-teal">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-md leading-relaxed">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#menu"
              className="bg-brand-terracotta text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-terracotta/20 hover:-translate-y-1 transition-transform"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#events"
              className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-teal hover:text-white transition-all"
            >
              {t.hero.cta2}
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
              <h2 className="font-serif text-4xl md:text-5xl mb-2">{t.events.title}</h2>
              <p className="text-brand-sun uppercase tracking-widest text-sm font-semibold">
                {t.events.kicker}
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-white/10 mb-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {eventData.map((e) => (
              <article
                key={e.name}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-brand-sun font-bold tracking-widest text-sm">
                  {t.events.days[e.dayKey]}
                </span>
                <h3 className="text-2xl font-serif mt-2 leading-tight">{e.name}</h3>
                <p className="mt-4 opacity-80">{e.time}</p>
                <p className="mt-1 text-sm opacity-60 underline cursor-pointer">
                  {t.events[e.noteKey]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-teal mb-4">
            {t.menu.title}
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto">{t.menu.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">
          {t.menu.items.map((item, i) => (
            <div
              key={item.name}
              className="flex justify-between items-start gap-6 border-b border-stone-200 pb-6"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-teal">{item.name}</h3>
                <p className="text-stone-500 mt-1 italic text-sm">{item.desc}</p>
              </div>
              <span className="font-serif text-xl font-bold text-brand-terracotta shrink-0">
                {prices[i]}
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
              {t.story.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-700">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
            </div>
            <p className="font-serif text-2xl text-brand-terracotta italic pt-2">
              {t.story.sig}
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-brand-terracotta rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              {t.booking.title}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl mx-auto">
              {t.booking.sub}
            </p>
            <a
              href="mailto:hola@preciousbites.com?subject=Private%20Event%20Inquiry"
              className="inline-block bg-white text-brand-terracotta px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:scale-105 transition-transform"
            >
              {t.booking.cta}
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
            <p className="max-w-xs text-sm md:text-base">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">
              {t.footer.follow}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">
              {t.footer.contact}
            </h4>
            <p className="text-sm">
              <a href="mailto:hola@preciousbites.com" className="hover:text-white transition-colors">
                hola@preciousbites.com
              </a>
            </p>
            <p className="mt-2 text-sm">San Francisco, CA</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} Precious Bites LLC. {t.footer.rights}</p>
          <p>{t.footer.handcrafted}</p>
        </div>
      </footer>
    </div>
  );
}
