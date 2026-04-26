import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { useSpeech } from "@/i18n/useSpeech";
import type { LangCode } from "@/i18n/translations";

type Props = {
  text: string;
  /** Stable id to track speaking state. Defaults to text. */
  id?: string;
  /** Override language; defaults to current i18n language. */
  lang?: LangCode;
  /** Visual variant. */
  variant?: "ghost" | "solid" | "soft";
  size?: "sm" | "md";
  className?: string;
  label?: string;
};

export const SpeakButton = ({
  text,
  id,
  lang,
  variant = "ghost",
  size = "sm",
  className = "",
  label,
}: Props) => {
  const { lang: currentLang } = useI18n();
  const { supported, speak, speakingId, isVoiceAvailable } = useSpeech();
  const useLang = lang ?? currentLang;
  const speakId = id ?? text;
  const isSpeaking = speakingId === speakId;

  if (!supported) return null;

  const available = isVoiceAvailable(useLang);

  const sizeCls = size === "sm" ? "w-8 h-8" : "w-10 h-10";
  const iconCls = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  const variantCls =
    variant === "solid"
      ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-110"
      : variant === "soft"
      ? "bg-primary/15 text-primary hover:bg-primary/25 hover:scale-110"
      : "bg-secondary/60 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speak(text, useLang, speakId);
      }}
      aria-label={label ?? (isSpeaking ? "Stop pronunciation" : "Pronounce text")}
      title={
        !available
          ? "Voice for this language may not be installed on your device — falling back to default."
          : isSpeaking
          ? "Stop"
          : "Pronounce"
      }
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${sizeCls} ${variantCls} ${className}`}
    >
      {isSpeaking ? (
        <>
          <Loader2 className={`${iconCls} animate-spin`} />
          <span className="absolute inset-0 rounded-full ring-2 ring-primary/60 animate-pulse-glow pointer-events-none" />
        </>
      ) : (
        <Volume2 className={iconCls} />
      )}
      {!available && (
        <span
          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-warning"
          aria-hidden
        />
      )}
      <span className="sr-only">
        {isSpeaking ? <VolumeX className={iconCls} /> : null}
      </span>
    </button>
  );
};