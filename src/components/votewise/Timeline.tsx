import { useEffect, useState } from "react";
import { CalendarClock, FileEdit, Vote, Trophy } from "lucide-react";
import { SectionHeader } from "./StepGuide";
import { useI18n } from "@/i18n/I18nProvider";

const useCountdown = (days: number) => {
  const target = Date.now() + days * 24 * 60 * 60 * 1000;
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

const Countdown = () => {
  const { t } = useI18n();
  const { d, h, m, s } = useCountdown(22);
  const items = [
    { v: d, l: t("time.days") },
    { v: h, l: t("time.hours") },
    { v: m, l: t("time.minutes") },
    { v: s, l: t("time.seconds") },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-xl mx-auto">
      {items.map((it) => (
        <div key={it.l} className="card-gradient border border-border rounded-2xl p-3 md:p-4 text-center">
          <div className="text-2xl md:text-4xl font-bold gradient-text tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mt-1">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Timeline = () => {
  const { t } = useI18n();
  const events = [
    {
      icon: FileEdit,
      label: t("time.regLabel"),
      date: "April 30, 2026",
      desc: t("time.regDesc"),
      color: "from-cyan to-primary",
    },
    {
      icon: Vote,
      label: t("time.voteLabel"),
      date: "May 18, 2026",
      desc: t("time.voteDesc"),
      color: "from-primary to-primary-glow",
    },
    {
      icon: Trophy,
      label: t("time.resLabel"),
      date: "May 22, 2026",
      desc: t("time.resDesc"),
      color: "from-amber to-rose",
    },
  ];
  return (
    <section id="timeline" className="py-24">
      <div className="container">
        <SectionHeader
          tag={t("time.tag")}
          title={t("time.title")}
          subtitle={t("time.subtitle")}
        />

        <div className="mt-10 mb-12">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <CalendarClock className="w-4 h-4 text-primary-glow" />
            {t("time.countdown")}
          </div>
          <Countdown />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/60 to-primary/0 -translate-x-1/2" />
          {events.map((e, i) => {
            const Icon = e.icon;
            const left = i % 2 === 0;
            return (
              <div
                key={e.label}
                className={`relative flex md:items-center mb-8 animate-fade-in-up ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                  <div className="card-gradient border border-border rounded-2xl p-5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-xs text-primary-glow font-semibold tracking-widest mb-1">{e.date}</div>
                    <h4 className="text-lg font-bold mb-1">{e.label}</h4>
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 md:top-1/2 md:-translate-y-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${e.color} flex items-center justify-center shadow-[0_0_25px_hsl(var(--primary)/0.5)] border-4 border-background`}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};