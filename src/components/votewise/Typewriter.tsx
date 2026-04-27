import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  startDelay?: number;
  className?: string;
  caret?: boolean;
  caretClassName?: string;
  onDone?: () => void;
}

/**
 * Smoothly types out a single string. Re-types from the start whenever `text` changes.
 * Respects prefers-reduced-motion (renders full text instantly).
 */
export const Typewriter = ({
  text,
  speed = 22,
  startDelay = 0,
  className,
  caret = true,
  caretClassName,
  onDone,
}: TypewriterProps) => {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setOut(text);
      setDone(true);
      onDoneRef.current?.();
      return;
    }

    setOut("");
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
          onDoneRef.current?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {out}
      {caret && (
        <span
          aria-hidden="true"
          className={
            caretClassName ??
            `inline-block w-[2px] h-[1em] align-[-0.15em] ml-0.5 bg-primary ${
              done ? "animate-caret-blink" : "opacity-90"
            }`
          }
        />
      )}
    </span>
  );
};