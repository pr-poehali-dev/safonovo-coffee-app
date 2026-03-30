import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fde5d6b4-6a63-42d0-8357-058a12aad16e/files/bb564225-b9a3-4a00-88e6-fc595898d0cc.jpg";

interface HeroSectionProps {
  onScrollToMenu: () => void;
  onOpenChat: () => void;
}

export default function HeroSection({ onScrollToMenu, onOpenChat }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Кофейня Вдвоём" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(43,21,3,0.72) 0%, rgba(59,31,14,0.4) 60%, rgba(196,136,74,0.15) 100%)" }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 animate-fade-up" style={{ background: "rgba(212,149,74,0.3)", color: "#f5ede0", border: "1px solid rgba(212,149,74,0.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-soft inline-block" />
            Открыто сейчас · Сафоново, Смоленская обл.
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-light leading-tight mb-6 animate-fade-up delay-100" style={{ color: "#fdf8f2" }}>
            Кофейня<br />
            <span className="italic font-normal" style={{ color: "var(--coffee-caramel)" }}>Вдвоём</span>
          </h1>
          <p className="text-base sm:text-lg mb-10 leading-relaxed animate-fade-up delay-200" style={{ color: "rgba(245,237,224,0.85)" }}>
            Тёплое место для двоих в самом сердце Сафоново. Настоящий кофе, домашние десерты и уютная атмосфера.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
            <button onClick={onScrollToMenu} className="px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ background: "var(--coffee-caramel)", color: "white" }}>
              Смотреть меню
            </button>
            <button onClick={onOpenChat} className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.15)", color: "#fdf8f2", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}>
              <Icon name="MessageCircle" size={16} />
              Написать баристе
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-60">
        <Icon name="ChevronDown" size={24} color="#fdf8f2" />
      </div>
    </section>
  );
}
