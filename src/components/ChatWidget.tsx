import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface ChatMessage {
  from: "user" | "barista";
  text: string;
  time: string;
}

const baristaReplies = [
  "Привет! Рад вас слышать 😊 Что посоветовать или что хотите заказать?",
  "Отличный выбор! Для вас приготовим с любовью ☕",
  "Конечно, сделаем! Это займёт буквально несколько минут.",
  "Если хотите что-то особенное — скажите, придумаем вместе!",
  "Всегда рады помочь! Напишите что угодно 🙂",
];

interface ChatWidgetProps {
  chatOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function ChatWidget({ chatOpen, onOpen, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: "barista",
      text: "Привет! Я ваш бариста Иван 👋 Могу порекомендовать напиток, принять заказ или ответить на любой вопрос.",
      time: "Сейчас",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const replyIdx = useRef(0);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!inputVal.trim()) return;
    const now = new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { from: "user", text: inputVal.trim(), time: now }]);
    setInputVal("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply = baristaReplies[replyIdx.current % baristaReplies.length];
      replyIdx.current++;
      setMessages((prev) => [
        ...prev,
        { from: "barista", text: reply, time: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }) },
      ]);
    }, 1200 + Math.random() * 800);
  };

  return (
    <>
      {!chatOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 animate-fade-up"
          style={{ background: "var(--coffee-caramel)" }}
        >
          <Icon name="MessageCircle" size={24} color="white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse-soft" />
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] rounded-3xl overflow-hidden shadow-2xl animate-slide-in" style={{ background: "white", border: "1px solid rgba(196,136,74,0.2)" }}>
          <div className="flex items-center justify-between px-5 py-4" style={{ background: "var(--coffee-dark)" }}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg" style={{ background: "var(--coffee-caramel)" }}>☕</div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2" style={{ borderColor: "var(--coffee-dark)" }} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--coffee-milk)" }}>Иван — ваш бариста</div>
                <div className="text-xs" style={{ color: "rgba(245,237,224,0.5)" }}>Онлайн · отвечает быстро</div>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full transition-colors hover:bg-white/10">
              <Icon name="X" size={18} color="rgba(245,237,224,0.6)" />
            </button>
          </div>
          <div className="px-4 py-4 overflow-y-auto flex flex-col gap-3" style={{ minHeight: 240, maxHeight: 320, background: "var(--coffee-milk)" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${msg.from === "barista" ? "chat-bubble-barista" : "chat-bubble-user"}`}>
                  {msg.text}
                  <div className="text-xs mt-1 opacity-50">{msg.time}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="chat-bubble-barista px-4 py-3 text-sm flex items-center gap-1.5" style={{ color: "var(--coffee-medium)" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "var(--coffee-light)", animationDelay: "0s" }} />
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "var(--coffee-light)", animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "var(--coffee-light)", animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="px-3 py-3 flex gap-2 items-center" style={{ background: "white", borderTop: "1px solid rgba(196,136,74,0.15)" }}>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Написать баристе..."
              className="flex-1 text-sm px-4 py-2.5 rounded-full outline-none"
              style={{ background: "var(--coffee-milk)", color: "var(--coffee-dark)", border: "1px solid rgba(196,136,74,0.2)" }}
            />
            <button
              onClick={sendMessage}
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110"
              style={{ background: inputVal.trim() ? "var(--coffee-caramel)" : "var(--coffee-cream)" }}
            >
              <Icon name="Send" size={16} color={inputVal.trim() ? "white" : "var(--coffee-light)"} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
