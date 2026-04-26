import { useRef, useState, type KeyboardEvent } from "react";
import {
  CheckCircle2,
  UserCheck,
  IdCard,
  Users,
  Vote,
  Trophy,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    title: "Check Eligibility",
    short: "Make sure you can vote",
    color: "from-emerald to-cyan",
    details:
      "You must be 18 years or older on the qualifying date and a citizen of the country. Check that you're not disqualified by law and that your name isn't already on another constituency's roll.",
  },
  {
    icon: UserCheck,
    title: "Register to Vote",
    short: "Get on the electoral roll",
    color: "from-cyan to-primary",
    details:
      "Register online via the Election Commission portal or fill Form 6 offline. You'll need proof of age, address, and a recent photograph. Registration usually closes 10 days before the announcement.",
  },
  {
    icon: IdCard,
    title: "Verify Voter ID",
    short: "Confirm your EPIC card",
    color: "from-primary to-primary-glow",
    details:
      "Once registered, you'll receive your EPIC (Electors Photo Identity Card). Verify your name, photo, and constituency details on the official voter portal before election day.",
  },
  {
    icon: Users,
    title: "Understand Candidates",
    short: "Research before you decide",
    color: "from-primary-glow to-rose",
    details:
      "Read each candidate's manifesto, criminal record (if any), education, and previous work. Trustworthy sources include MyNeta, official party websites, and verified news outlets.",
  },
  {
    icon: Vote,
    title: "Voting Day Process",
    short: "Cast your ballot confidently",
    color: "from-rose to-amber",
    details:
      "Visit your assigned booth with your Voter ID or alternative photo ID. Get your finger inked, sign the register, and press the button next to your candidate on the EVM. Verify the VVPAT slip.",
  },
  {
    icon: Trophy,
    title: "Result Declaration",
    short: "Watch democracy unfold",
    color: "from-amber to-emerald",
    details:
      "Results are usually declared within hours of counting, on official channels and trusted news sources. The winning candidate is the one with the most votes in your constituency.",
  },
];

export const StepGuide = () => {
  const [open, setOpen] = useState<number | null>(0);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusBtn = (i: number) => {
    const total = steps.length;
    const next = ((i % total) + total) % total;
    btnRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusBtn(i + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusBtn(i - 1);
        break;
      case "Home":
        e.preventDefault();
        focusBtn(0);
        break;
      case "End":
        e.preventDefault();
        focusBtn(steps.length - 1);
        break;
      case "Escape":
        if (open === i) {
          e.preventDefault();
          setOpen(null);
        }
        break;
    }
  };

  return (
    <section id="guide" className="py-24 relative">
      <div className="container">
        <SectionHeader
          tag="STEP-BY-STEP"
          title="Your Election Journey"
          subtitle="Six simple steps from eligibility to your first vote."
        />

        <div
          className="grid md:grid-cols-2 gap-4 mt-12"
          role="region"
          aria-label="Election step-by-step guide"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isOpen = open === i;
            const panelId = `step-panel-${i}`;
            const btnId = `step-btn-${i}`;
            return (
              <div
                key={s.title}
                className={`card-gradient rounded-2xl border overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.5)] animate-fade-in-up motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  isOpen
                    ? "border-primary/50 shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.4)]"
                    : "border-border hover:border-primary/40"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <button
                  ref={(el) => { btnRefs.current[i] = el; }}
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className="w-full text-left p-6 flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl transition-colors hover:bg-primary/5"
                >
                  <div className={`relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">
                      {s.title}
                      <span className="sr-only"> — step {i + 1} of {steps.length}, {isOpen ? "expanded" : "collapsed"}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{s.short}</p>
                  </div>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${isOpen ? "rotate-180 text-primary scale-110" : "text-muted-foreground"}`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-6 pb-6 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/60 transition-all duration-500 ease-out motion-reduce:transition-none ${
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                      }`}
                    >
                      <p className="pt-4">{s.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          {open === null ? "All steps collapsed" : `Step ${open + 1}, ${steps[open].title}, expanded`}
        </p>
      </div>
    </section>
  );
};

export const SectionHeader = ({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle: string;
}) => (
  <div className="text-center max-w-2xl mx-auto">
    <span className="inline-block px-3 py-1 rounded-full glass text-[11px] tracking-widest text-primary-glow font-semibold mb-4">
      {tag}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
      {title}
    </h2>
    <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
  </div>
);