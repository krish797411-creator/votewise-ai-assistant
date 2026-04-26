import { useEffect, useRef, useState } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";
import { SectionHeader } from "./StepGuide";
import { useI18n } from "@/i18n/I18nProvider";
import { SpeakButton } from "./SpeakButton";

type Msg = { role: "user" | "ai"; text: string };

export const ChatAssistant = () => {
  const { t, lang } = useI18n();
  const suggestions = [t("chat.q1"), t("chat.q2"), t("chat.q3")];
  const qaPairs: { q: string; a: string }[] = [
    { q: t("chat.q1"), a: t("chat.a1") },
    { q: t("chat.q2"), a: t("chat.a2") },
    { q: t("chat.q3"), a: t("chat.a3") },
  ];

  const getReply = (q: string): string => {
    const lower = q.toLowerCase().trim();
    // Exact suggestion match first
    const exact = qaPairs.find((p) => p.q.toLowerCase().trim() === lower);
    if (exact) return exact.a;
    // Loose token match (works across scripts since we compare to localized question text)
    const loose = qaPairs.find((p) =>
      p.q.toLowerCase().split(/\s+/).some((w) => w.length > 3 && lower.includes(w)),
    );
    if (loose) return loose.a;
    return t("chat.fallback");
  };

  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: t("chat.greeting") },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Reset greeting when language changes
  useEffect(() => {
    setMessages([{ role: "ai", text: t("chat.greeting") }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: getReply(trimmed) }]);
      setTyping(false);
    }, 700 + Math.random() * 600);
  };

  return (
    <section id="chat" className="py-24">
      <div className="container">
        <SectionHeader
          tag={t("chat.tag")}
          title={t("chat.title")}
          subtitle={t("chat.subtitle")}
        />

        <div className="mt-12 max-w-3xl mx-auto card-gradient border border-border rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.4)]">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-secondary/40">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-background animate-pulse-glow" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{t("chat.assistant")}</div>
              <div className="text-xs text-success flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {t("chat.online")}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[420px] overflow-y-auto scrollbar-thin p-5 space-y-4 bg-background/30">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 animate-fade-in ${m.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${m.role === "user" ? "bg-secondary" : "bg-gradient-to-br from-primary to-primary-glow"}`}
                >
                  {m.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                <div
                  className={`group relative max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-tr-sm"
                      : "bg-secondary text-foreground rounded-tl-sm"
                  }`}
                >
                  {m.text}
                  {m.role === "ai" && (
                    <div className="mt-2 flex justify-end">
                      <SpeakButton text={m.text} id={`msg-${i}`} variant="soft" size="sm" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          <div className="px-5 pt-3 pb-2 flex gap-2 flex-wrap border-t border-border bg-background/40">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary-glow border border-border transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-4 flex gap-2 border-t border-border bg-background/40"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chat.placeholder")}
              className="flex-1 bg-secondary/60 border border-border rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Send"
            >
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};