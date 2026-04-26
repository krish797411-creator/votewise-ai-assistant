import { useEffect, useRef, useState } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";
import { SectionHeader } from "./StepGuide";

type Msg = { role: "user" | "ai"; text: string };

const knowledge: { q: string; a: string }[] = [
  {
    q: "how do i vote for the first time",
    a: "First-time voters: 1) Confirm you're 18+ and registered. 2) Find your polling booth on the official voter portal. 3) Carry your Voter ID (EPIC) or any valid photo ID. 4) Get inked, sign the register, press the button next to your candidate on the EVM, and verify the VVPAT slip. That's it — democracy in action! 🗳️",
  },
  {
    q: "what documents are required",
    a: "Acceptable documents at the polling booth include: Voter ID (EPIC), Aadhaar card, Passport, Driving Licence, PAN card, government-issued service ID, or a bank passbook with photo. You only need ONE valid photo ID along with your name on the electoral roll.",
  },
  {
    q: "when are elections held",
    a: "General (Lok Sabha) elections happen every 5 years. State assembly elections also run on 5-year cycles, staggered across states. Local body and by-elections happen as needed. Check the Election Commission website for the official schedule of upcoming elections.",
  },
  {
    q: "register",
    a: "To register, visit the National Voter Service Portal (NVSP) and fill Form 6. You'll need proof of age, address, and a passport-size photo. It usually takes 2–4 weeks for your name to appear on the rolls.",
  },
  {
    q: "evm",
    a: "An EVM (Electronic Voting Machine) has buttons next to each candidate's name and symbol. Press the button beside your choice — a beep confirms your vote. The VVPAT machine then prints a slip you can verify through a glass window.",
  },
];

const suggestions = [
  "How do I vote for the first time?",
  "What documents are required?",
  "When are elections held?",
];

const getReply = (q: string): string => {
  const lower = q.toLowerCase();
  const match = knowledge.find((k) => lower.includes(k.q.split(" ")[0]) && k.q.split(" ").every((w) => lower.includes(w) || w.length < 3));
  if (match) return match.a;
  const loose = knowledge.find((k) => k.q.split(" ").some((w) => w.length > 4 && lower.includes(w)));
  if (loose) return loose.a;
  return "Great question! I'm a demo assistant trained on common first-time voter queries. Try asking about registration, required documents, EVMs, or election dates.";
};

export const ChatAssistant = () => {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hi! I'm VoteWise AI 👋 Ask me anything about voting, or tap a suggestion below to get started." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: getReply(t) }]);
      setTyping(false);
    }, 700 + Math.random() * 600);
  };

  return (
    <section id="chat" className="py-24">
      <div className="container">
        <SectionHeader
          tag="AI ASSISTANT"
          title="Talk to VoteWise AI"
          subtitle="Get instant, beginner-friendly answers to your voting questions."
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
              <div className="font-semibold text-sm">VoteWise Assistant</div>
              <div className="text-xs text-success flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Online · Ready to help
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
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-tr-sm"
                      : "bg-secondary text-foreground rounded-tl-sm"
                  }`}
                >
                  {m.text}
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
              placeholder="Ask about voting, registration, documents…"
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