import { useState } from "react";
import { Check, X, Brain, RotateCcw, Trophy } from "lucide-react";
import { SectionHeader } from "./StepGuide";

const questions = [
  {
    q: "What is the minimum age to vote in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    answer: 1,
    explain: "You must be 18 years or older on the qualifying date to be eligible to vote.",
  },
  {
    q: "Which machine prints a verifiable receipt of your vote?",
    options: ["EVM", "VVPAT", "ATM", "Ballot Box"],
    answer: 1,
    explain: "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip you can verify through a glass window.",
  },
  {
    q: "What does NOTA stand for?",
    options: ["No Other Trusted Alternative", "None Of The Above", "Not On The Agenda", "New Order To Adopt"],
    answer: 1,
    explain: "NOTA lets you reject all candidates if none meet your standards.",
  },
];

export const Quiz = () => {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <section id="quiz" className="py-24">
      <div className="container">
        <SectionHeader
          tag="QUICK QUIZ"
          title="Test Your Knowledge"
          subtitle="Three quick questions to see how much you've learned."
        />

        <div className="mt-12 max-w-2xl mx-auto card-gradient border border-border rounded-3xl p-8">
          {!done ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Brain className="w-4 h-4 text-primary-glow" />
                  Question {idx + 1} / {questions.length}
                </div>
                <div className="text-sm font-semibold gradient-text">Score: {score}</div>
              </div>

              <div className="h-1.5 bg-secondary rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
                  style={{ width: `${((idx + (picked !== null ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>

              <h3 key={idx} className="text-xl md:text-2xl font-bold mb-6 animate-fade-in">{q.q}</h3>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.answer;
                  const isPicked = picked === i;
                  let cls = "border-border bg-secondary/40 hover:border-primary/40 hover:bg-secondary/70";
                  if (picked !== null) {
                    if (isCorrect) cls = "border-success bg-success/10";
                    else if (isPicked) cls = "border-destructive bg-destructive/10";
                    else cls = "border-border bg-secondary/30 opacity-60";
                  }
                  return (
                    <button
                      key={opt}
                      onClick={() => choose(i)}
                      disabled={picked !== null}
                      className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${cls}`}
                    >
                      <span className="w-7 h-7 rounded-full bg-background/60 flex items-center justify-center text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1 text-sm">{opt}</span>
                      {picked !== null && isCorrect && <Check className="w-5 h-5 text-success" />}
                      {picked !== null && isPicked && !isCorrect && <X className="w-5 h-5 text-destructive" />}
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <div className="mt-6 p-4 rounded-xl bg-secondary/60 border border-border animate-fade-in">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {picked === q.answer ? "✓ Correct! " : "✗ Not quite. "}
                    </span>
                    {q.explain}
                  </p>
                  <button
                    onClick={next}
                    className="mt-4 w-full px-6 py-2.5 rounded-full font-medium bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:scale-[1.02] transition-transform"
                  >
                    {idx + 1 < questions.length ? "Next Question" : "See Results"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6 animate-scale-in">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber to-rose flex items-center justify-center animate-pulse-glow">
                <Trophy className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">
                {score === questions.length ? "Perfect Score!" : score >= 2 ? "Well Done!" : "Keep Learning!"}
              </h3>
              <p className="text-muted-foreground mb-6">
                You scored <span className="text-foreground font-bold">{score} / {questions.length}</span>
              </p>
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
    </section>
  );
};