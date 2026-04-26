import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary-glow" />
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-fade-in-up">
          VoteWise <span className="gradient-text">AI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#guide"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] hover:scale-105 hover:shadow-[0_15px_50px_-10px_hsl(var(--primary)/0.9)] transition-all"
          >
            {t("hero.start")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium glass hover:bg-secondary/80 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            {t("hero.ask")}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          {[
            { v: "6", l: t("hero.stat.steps") },
            { v: "100%", l: t("hero.stat.beginner") },
            { v: "24/7", l: t("hero.stat.support") },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};