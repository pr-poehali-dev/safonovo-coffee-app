import Icon from "@/components/ui/icon";

const navLinks = ["Меню", "Акции", "Отзывы", "Доставка", "О нас"];

interface NavbarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  onScrollTo: (section: string) => void;
  onOpenChat: () => void;
  onToggleMobileMenu: () => void;
}

export default function Navbar({ activeSection, mobileMenuOpen, onScrollTo, onOpenChat, onToggleMobileMenu }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(253,248,242,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(196,136,74,0.2)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold" style={{ color: "var(--coffee-dark)" }}>
            Вдвоём
          </span>
          <span className="hidden sm:block text-xs ml-1" style={{ color: "var(--coffee-light)" }}>☕ Сафоново</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => onScrollTo(link)}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activeSection === link ? "var(--coffee-medium)" : "transparent",
                color: activeSection === link ? "var(--coffee-milk)" : "var(--coffee-dark)",
              }}
            >
              {link}
            </button>
          ))}
        </div>
        <button
          onClick={onOpenChat}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{ background: "var(--coffee-caramel)", color: "white" }}
        >
          <Icon name="MessageCircle" size={16} />
          Написать баристе
        </button>
        <button className="md:hidden p-2" onClick={onToggleMobileMenu} style={{ color: "var(--coffee-dark)" }}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in" style={{ background: "rgba(253,248,242,0.97)" }}>
          {navLinks.map((link) => (
            <button key={link} onClick={() => onScrollTo(link)} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium" style={{ color: "var(--coffee-dark)" }}>
              {link}
            </button>
          ))}
          <button
            onClick={() => { onOpenChat(); }}
            className="mt-2 w-full px-4 py-2.5 rounded-full text-sm font-medium"
            style={{ background: "var(--coffee-caramel)", color: "white" }}
          >
            ☕ Написать баристе
          </button>
        </div>
      )}
    </nav>
  );
}
