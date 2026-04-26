import { useEffect, useRef, useState } from "react";
import { Check, Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LANGUAGES } from "@/i18n/translations";

export const LanguageSelector = () => {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang.select")}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 h-9 rounded-full glass hover:bg-secondary/80 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Globe className="w-4 h-4 text-primary-glow" />
        <span className="hidden sm:inline font-medium">{current.native}</span>
        <span className="sm:hidden font-medium uppercase text-xs">{current.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("lang.select")}
          className="absolute right-0 mt-2 w-60 max-h-[70vh] overflow-y-auto scrollbar-thin glass rounded-2xl border border-border shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)] p-1.5 animate-scale-in origin-top-right z-50"
        >
          <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
            {t("lang.select")}
          </div>
          {LANGUAGES.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm transition-colors ${
                  active ? "bg-primary/15 text-foreground" : "hover:bg-secondary/70 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-base shrink-0">{l.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{l.native}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{l.label}</div>
                </div>
                {active && <Check className="w-4 h-4 text-primary-glow shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};