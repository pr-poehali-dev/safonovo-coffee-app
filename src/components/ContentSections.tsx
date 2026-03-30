import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fde5d6b4-6a63-42d0-8357-058a12aad16e/files/bb564225-b9a3-4a00-88e6-fc595898d0cc.jpg";

const menuCategories = [
  {
    name: "Кофе",
    icon: "Coffee",
    items: [
      { name: "Эспрессо", desc: "Крепкий и насыщенный", price: "90 ₽" },
      { name: "Капучино", desc: "Нежная молочная пена", price: "160 ₽" },
      { name: "Латте", desc: "Мягкий и бархатистый", price: "170 ₽" },
      { name: "Флэт Уайт", desc: "Двойной эспрессо с молоком", price: "175 ₽" },
      { name: "Раф", desc: "Кофе со сливками и ванилью", price: "195 ₽" },
      { name: "Американо", desc: "Классика в чистом виде", price: "120 ₽" },
    ],
  },
  {
    name: "Десерты",
    icon: "Cake",
    items: [
      { name: "Тирамису", desc: "Итальянский классический", price: "220 ₽" },
      { name: "Чизкейк Нью-Йорк", desc: "Нежный с ягодным соусом", price: "240 ₽" },
      { name: "Круассан", desc: "Свежий, хрустящий", price: "110 ₽" },
      { name: "Брауни", desc: "Шоколадный, тающий", price: "180 ₽" },
    ],
  },
  {
    name: "Напитки",
    icon: "GlassWater",
    items: [
      { name: "Матча латте", desc: "Японский зелёный чай", price: "190 ₽" },
      { name: "Какао", desc: "Горячее, с маршмеллоу", price: "155 ₽" },
      { name: "Лимонад", desc: "Домашний, освежающий", price: "130 ₽" },
      { name: "Чай в ассортименте", desc: "8 видов на выбор", price: "120 ₽" },
    ],
  },
];

const promos = [
  {
    tag: "Утро",
    title: "Утренний ритуал",
    desc: "Любой кофе + круассан до 11:00 — скидка 20%",
    emoji: "🌅",
    color: "from-amber-100 to-orange-100",
  },
  {
    tag: "Вместе",
    title: "Вдвоём вкуснее",
    desc: "2 латте + 2 десерта — скидка 15% для пар",
    emoji: "☕",
    color: "from-rose-100 to-pink-100",
  },
  {
    tag: "Лояльность",
    title: "Накопи и угости",
    desc: "Каждая 6-я чашка кофе — в подарок",
    emoji: "🎁",
    color: "from-yellow-100 to-amber-100",
  },
];

const reviews = [
  {
    name: "Анна К.",
    text: "Атмосфера просто волшебная! Сижу тут уже три часа и не хочу уходить. Капучино — лучший в городе, честно.",
    rating: 5,
    date: "Март 2026",
  },
  {
    name: "Михаил Д.",
    text: "Наконец-то в Сафоново появилось такое место. Баристы очень дружелюбные, всегда подскажут что выбрать.",
    rating: 5,
    date: "Февраль 2026",
  },
  {
    name: "Света Р.",
    text: "Тирамису — просто шедевр. Приходим каждые выходные с мужем. Уютно как дома, только лучше!",
    rating: 5,
    date: "Март 2026",
  },
  {
    name: "Игорь П.",
    text: "Работаю удалённо, часто прихожу с ноутбуком. Wi-Fi хороший, кофе отличный, персонал не торопит.",
    rating: 4,
    date: "Январь 2026",
  },
];

interface ContentSectionsProps {
  onOpenChat: () => void;
}

export default function ContentSections({ onOpenChat }: ContentSectionsProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      {/* MENU */}
      <section id="меню" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--coffee-light)" }}>Наше</span>
          <h2 className="font-display text-4xl sm:text-5xl font-light mt-1" style={{ color: "var(--coffee-dark)" }}>Меню</h2>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: "var(--coffee-caramel)" }} />
        </div>
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === i ? "var(--coffee-dark)" : "var(--coffee-cream)",
                color: activeCategory === i ? "var(--coffee-milk)" : "var(--coffee-medium)",
                border: "1px solid",
                borderColor: activeCategory === i ? "transparent" : "rgba(196,136,74,0.3)",
              }}
            >
              <Icon name={cat.icon as "Coffee"} size={15} />
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuCategories[activeCategory].items.map((item, i) => (
            <div
              key={item.name}
              className="card-hover rounded-2xl p-5 flex items-start justify-between gap-4 animate-fade-up"
              style={{ background: "white", border: "1px solid rgba(196,136,74,0.15)", animationDelay: `${i * 0.07}s`, animationFillMode: "both" }}
            >
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--coffee-dark)" }}>{item.name}</h3>
                <p className="text-sm" style={{ color: "var(--coffee-medium)", opacity: 0.7 }}>{item.desc}</p>
              </div>
              <div className="shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ background: "var(--coffee-cream)", color: "var(--coffee-medium)" }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-8" style={{ color: "var(--coffee-light)" }}>
          Полное меню — у баристы или в зале 📋
        </p>
      </section>

      {/* PROMOS */}
      <section id="акции" className="py-20" style={{ background: "var(--coffee-cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--coffee-light)" }}>Специальные</span>
            <h2 className="font-display text-4xl sm:text-5xl font-light mt-1" style={{ color: "var(--coffee-dark)" }}>Акции</h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: "var(--coffee-caramel)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
              <div
                key={promo.title}
                className={`card-hover rounded-3xl p-7 bg-gradient-to-br ${promo.color} animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both", border: "1px solid rgba(196,136,74,0.2)" }}
              >
                <div className="text-4xl mb-4">{promo.emoji}</div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3" style={{ background: "rgba(107,58,31,0.12)", color: "var(--coffee-medium)" }}>
                  {promo.tag}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--coffee-dark)" }}>{promo.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--coffee-medium)" }}>{promo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="отзывы" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--coffee-light)" }}>Что говорят</span>
          <h2 className="font-display text-4xl sm:text-5xl font-light mt-1" style={{ color: "var(--coffee-dark)" }}>Отзывы</h2>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: "var(--coffee-caramel)" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((rev, i) => (
            <div
              key={rev.name}
              className="card-hover rounded-2xl p-6 animate-fade-up"
              style={{ background: "white", border: "1px solid rgba(196,136,74,0.15)", animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: "var(--coffee-cream)", color: "var(--coffee-medium)" }}>
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--coffee-dark)" }}>{rev.name}</div>
                    <div className="text-xs" style={{ color: "var(--coffee-light)" }}>{rev.date}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--coffee-medium)" }}>"{rev.text}"</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ background: "var(--coffee-cream)", color: "var(--coffee-medium)", border: "1px solid rgba(196,136,74,0.3)" }}>
            <Icon name="Star" size={15} />
            Оставить отзыв
          </button>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="доставка" className="py-20" style={{ background: "var(--coffee-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--coffee-caramel)" }}>Привезём</span>
            <h2 className="font-display text-4xl sm:text-5xl font-light mt-1" style={{ color: "var(--coffee-milk)" }}>Доставка</h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: "var(--coffee-caramel)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "MapPin", title: "По всему Сафоново", desc: "Доставляем в любую точку города и ближайшие районы" },
              { icon: "Clock", title: "30–45 минут", desc: "Горячий кофе и свежие десерты прямо к вашей двери" },
              { icon: "Truck", title: "Бесплатно от 500 ₽", desc: "Заказ от 500 рублей — доставка за наш счёт" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,149,74,0.2)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(212,149,74,0.15)" }}>
                  <Icon name={item.icon as "MapPin"} size={22} color="var(--coffee-caramel)" />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--coffee-milk)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,237,224,0.6)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm mb-4" style={{ color: "rgba(245,237,224,0.5)" }}>Оформить заказ через баристу</p>
            <button onClick={onOpenChat} className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium transition-all hover:scale-105 text-sm" style={{ background: "var(--coffee-caramel)", color: "white" }}>
              <Icon name="MessageCircle" size={17} />
              Заказать доставку
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="о нас" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--coffee-light)" }}>История</span>
            <h2 className="font-display text-4xl sm:text-5xl font-light mt-1 mb-6" style={{ color: "var(--coffee-dark)" }}>О нас</h2>
            <p className="text-base leading-loose mb-5" style={{ color: "var(--coffee-medium)" }}>
              Кофейня <strong>«Вдвоём»</strong> — это маленькое тёплое место в Сафоново, где двое людей создали пространство для встреч, разговоров и настоящего кофе.
            </p>
            <p className="text-base leading-loose mb-8" style={{ color: "var(--coffee-medium)" }}>
              Мы верим, что хороший кофе — это не просто напиток, а повод замедлиться и побыть с тем, кто рядом. Именно поэтому мы назвались так — <em>«Вдвоём»</em>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2024", label: "Год открытия" },
                { num: "6", label: "Видов эспрессо" },
                { num: "100+", label: "Постоянных гостей" },
                { num: "❤️", label: "С любовью" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl text-center" style={{ background: "var(--coffee-cream)" }}>
                  <div className="font-display text-2xl font-semibold mb-1" style={{ color: "var(--coffee-dark)" }}>{stat.num}</div>
                  <div className="text-xs" style={{ color: "var(--coffee-medium)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-square" style={{ boxShadow: "0 30px 60px rgba(59,31,14,0.2)" }}>
              <img src={HERO_IMG} alt="Интерьер кофейни" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl animate-float" style={{ background: "white", boxShadow: "0 10px 30px rgba(59,31,14,0.15)" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--coffee-caramel)" }}>
                  <Icon name="MapPin" size={15} color="white" />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: "var(--coffee-dark)" }}>г. Сафоново</div>
                  <div className="text-xs" style={{ color: "var(--coffee-light)" }}>Смоленская область</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm" style={{ background: "var(--coffee-espresso)", color: "rgba(245,237,224,0.5)" }}>
        <div className="font-display text-xl mb-2" style={{ color: "var(--coffee-caramel)" }}>Вдвоём</div>
        <p className="mb-1">г. Сафоново, Смоленская область</p>
        <p>© 2024–2026 Кофейня Вдвоём</p>
      </footer>
    </>
  );
}
