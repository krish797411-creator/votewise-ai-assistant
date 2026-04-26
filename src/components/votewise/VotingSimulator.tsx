import { useState } from "react";
import { DoorOpen, Vote, Check, RotateCcw, PartyPopper, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./StepGuide";

type Stage = "welcome" | "select" | "confirm" | "success";

const candidates = [
  { id: "A", name: "Aarav Sharma", party: "Progress Party", symbol: "🌅", color: "from-cyan to-primary" },
  { id: "B", name: "Priya Verma", party: "United Front", symbol: "🌿", color: "from-emerald to-cyan" },
  { id: "C", name: "Rohan Kapoor", party: "People's Voice", symbol: "⚡", color: "from-amber to-rose" },
  { id: "D", name: "NOTA", party: "None of the Above", symbol: "🚫", color: "from-muted to-secondary" },
];

export const VotingSimulator = () => {
  const [stage, setStage] = useState<Stage>("welcome");
  const [selected, setSelected] = useState<string | null>(null);

  const reset = () => {
    setStage("welcome");
    setSelected(null);
  };

  const chosen = candidates.find((c) => c.id === selected);

  return (
    <section id="simulator" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container relative">
        <SectionHeader
          tag="INTERACTIVE"
          title="Voting Simulator"
          subtitle="Practice the voting process in a safe, simulated polling booth."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {(["welcome", "select", "confirm", "success"] as Stage[]).map((s, i) => {
              const order = ["welcome", "select", "confirm", "success"];
              const active = order.indexOf(stage) >= i;
              return (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      active
                        ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground scale-110 shadow-[0_0_20px_hsl(var(--primary)/0.6)]"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className={`w-10 h-0.5 transition-colors duration-500 ${active && order.indexOf(stage) > i ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="card-gradient border border-border rounded-3xl p-8 md:p-12 min-h-[420px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            {stage === "welcome" && (
              <div className="animate-scale-in">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-6 animate-float shadow-[0_0_60px_hsl(var(--primary)/0.6)]">
                  <DoorOpen className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Welcome to the Polling Booth</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  You're about to experience how voting works. Your finger will be inked, your ID checked, and then you'll cast your vote on the EVM.
                </p>
                <button
                  onClick={() => setStage("select")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] animate-pulse-glow"
                >
                  <DoorOpen className="w-4 h-4" />
                  Enter Polling Booth
                </button>
              </div>
            )}

            {stage === "select" && (
              <div className="w-full animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-success" />
                  <span className="text-xs text-success font-medium tracking-widest">SECURE BOOTH · YOUR VOTE IS PRIVATE</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Select Your Candidate</h3>
                <p className="text-muted-foreground text-sm mb-8">Tap a button on the EVM to make your choice.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {candidates.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setSelected(c.id)}
                      className={`group relative text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${
                        selected === c.id
                          ? "border-primary bg-primary/10 shadow-[0_0_30px_hsl(var(--primary)/0.4)] scale-[1.02]"
                          : "border-border hover:border-primary/50 bg-secondary/40"
                      }`}
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl shrink-0`}>
                          {c.symbol}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">{c.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{c.party}</div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected === c.id ? "border-primary bg-primary" : "border-border"}`}>
                          {selected === c.id && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  disabled={!selected}
                  onClick={() => setStage("confirm")}
                  className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Vote className="w-4 h-4" />
                  Continue
                </button>
              </div>
            )}

            {stage === "confirm" && chosen && (
              <div className="animate-scale-in">
                <div className="text-xs text-amber font-semibold tracking-widest mb-3">⚠ CONFIRM YOUR CHOICE</div>
                <h3 className="text-2xl font-bold mb-6">You're voting for…</h3>
                <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/60 border border-primary/40 mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${chosen.color} flex items-center justify-center text-4xl shadow-[0_0_30px_hsl(var(--primary)/0.4)] animate-float`}>
                    {chosen.symbol}
                  </div>
                  <div>
                    <div className="text-xl font-bold">{chosen.name}</div>
                    <div className="text-sm text-muted-foreground">{chosen.party}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                  Once submitted, your vote cannot be changed. Verify your VVPAT slip after casting.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setStage("select")}
                    className="px-6 py-3 rounded-full font-medium glass hover:bg-secondary transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={() => setStage("success")}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-emerald to-cyan text-primary-foreground hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_hsl(var(--accent-emerald)/0.7)]"
                  >
                    <Check className="w-4 h-4" />
                    Confirm & Submit Vote
                  </button>
                </div>
              </div>
            )}

            {stage === "success" && (
              <div className="animate-scale-in relative">
                {/* Confetti */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-3 rounded-sm animate-confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: "60%",
                      backgroundColor: ["#a855f7", "#22d3ee", "#34d399", "#fbbf24", "#f472b6"][i % 5],
                      animationDelay: `${Math.random() * 0.5}s`,
                      animationDuration: `${1.5 + Math.random()}s`,
                      animationFillMode: "forwards",
                    }}
                  />
                ))}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald to-cyan flex items-center justify-center mx-auto mb-6 animate-ballot-drop shadow-[0_0_60px_hsl(var(--accent-emerald)/0.6)]">
                  <Check className="w-12 h-12 text-primary-foreground" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-3 flex items-center justify-center gap-2">
                  <PartyPopper className="w-7 h-7 text-amber" />
                  Vote Successfully Submitted
                </h3>
                <p className="text-muted-foreground mb-2 max-w-md mx-auto">
                  You voted for <span className="text-foreground font-semibold">{chosen?.name}</span>. Thank you for participating in democracy! 🇮🇳
                </p>
                <p className="text-xs text-success mb-8">✓ VVPAT slip verified · Receipt #VW-{Math.floor(Math.random() * 9000 + 1000)}</p>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:bg-secondary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};