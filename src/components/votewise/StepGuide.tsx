import { useState } from "react";
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

  return (
    <section id="guide" className="py-24 relative">
      <div className="container">
        <SectionHeader
          tag="STEP-BY-STEP"
          title="Your Election Journey"
          subtitle="Six simple steps from eligibility to your first vote."
        />

        <div className="grid md:grid-cols-2 gap-4 mt-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isOpen = open === i;
            return (
              <div
                key={s.title}
                className="card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.5)] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6 flex items-center gap-4"
                >
                  <div className={`relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{s.short}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/60">
                      <p className="pt-4">{s.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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