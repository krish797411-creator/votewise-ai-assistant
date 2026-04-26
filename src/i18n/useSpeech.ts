import { useCallback, useEffect, useRef, useState } from "react";
import type { LangCode } from "./translations";

// BCP-47 locale code per language for the Web Speech API.
const LOCALE: Record<LangCode, string> = {
  en: "en-IN",
  hi: "hi-IN",
  bn: "bn-IN",
  ta: "ta-IN",
  te: "te-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  kn: "kn-IN",
  ml: "ml-IN",
  pa: "pa-IN",
  or: "or-IN",
  ur: "ur-IN",
};

const pickVoice = (voices: SpeechSynthesisVoice[], lang: string) => {
  const langLower = lang.toLowerCase();
  const baseLang = langLower.split("-")[0];
  return (
    voices.find((v) => v.lang.toLowerCase() === langLower) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(baseLang + "-")) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(baseLang)) ??
    null
  );
};

export const useSpeech = () => {
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const currentUtter = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!supported) return;
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener?.("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener?.("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeakingId(null);
    currentUtter.current = null;
  }, [supported]);

  const speak = useCallback(
    (text: string, lang: LangCode, id: string = text) => {
      if (!supported || !text.trim()) return;
      // Toggle off if same id already speaking
      if (speakingId === id) {
        stop();
        return;
      }
      window.speechSynthesis.cancel();

      const utter = new SpeechSynthesisUtterance(text);
      const locale = LOCALE[lang] ?? "en-IN";
      utter.lang = locale;
      const voice = pickVoice(voices, locale);
      if (voice) utter.voice = voice;
      utter.rate = 0.95;
      utter.pitch = 1;
      utter.onend = () => {
        setSpeakingId((curr) => (curr === id ? null : curr));
        currentUtter.current = null;
      };
      utter.onerror = () => {
        setSpeakingId((curr) => (curr === id ? null : curr));
        currentUtter.current = null;
      };
      currentUtter.current = utter;
      setSpeakingId(id);
      window.speechSynthesis.speak(utter);
    },
    [supported, voices, speakingId, stop],
  );

  const isVoiceAvailable = useCallback(
    (lang: LangCode) => {
      if (!supported) return false;
      return Boolean(pickVoice(voices, LOCALE[lang] ?? "en-IN"));
    },
    [supported, voices],
  );

  return { supported, speak, stop, speakingId, isVoiceAvailable };
};