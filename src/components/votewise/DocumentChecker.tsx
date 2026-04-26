import { useState } from "react";
import { Check, AlertTriangle, FileText, CheckCircle2, X } from "lucide-react";
import { SectionHeader } from "./StepGuide";

const docs = [
  { id: "aadhaar", label: "Aadhaar Card", desc: "Government-issued unique ID", icon: "🆔" },
  { id: "pan", label: "PAN Card", desc: "Income tax identification", icon: "💳" },
  { id: "passport", label: "Passport", desc: "International travel ID", icon: "📘" },
  { id: "driving", label: "Driving Licence", desc: "Issued by RTO", icon: "🚗" },
  { id: "voter", label: "Voter ID (EPIC)", desc: "Issued by Election Commission", icon: "🗳️" },
];

export const DocumentChecker = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const hasPhotoId = ["aadhaar", "passport", "driving", "voter"].some((d) => selected.has(d));
  const hasVoterProof = selected.has("voter") || selected.has("aadhaar");
  const eligible = hasPhotoId && hasVoterProof;

  return (
    <section id="documents" className="py-24">
      <div className="container">
        <SectionHeader
          tag="DOCUMENT CHECK"
          title="Are You Booth-Ready?"
          subtitle="Select the documents you have to instantly check your eligibility."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-6 max-w-5xl mx-auto">
          {/* Selector */}
          <div className="card-gradient border border-border rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5 text-primary-glow" />
              <h3 className="font-semibold">Your Documents</h3>
            </div>
            <div className="space-y-2">
              {docs.map((d) => {
                const on = selected.has(d.id);
                return (
                  <button
                    key={d.id}
                    onClick={() => toggle(d.id)}
                    className={`w-full text-left p-3 rounded-xl border-2 flex items-center gap-3 transition-all ${
                      on
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                        : "border-border bg-secondary/40 hover:border-primary/40"
                    }`}
                  >
                    <span className="text-2xl">{d.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold">{d.label}</div>
                      <div className="text-xs text-muted-foreground truncate">{d.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${on ? "border-primary bg-primary" : "border-border"}`}>
                      {on && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status */}
          <div className={`rounded-3xl p-6 border-2 transition-all duration-500 ${eligible ? "border-success/50 bg-success/5 shadow-[0_0_40px_hsl(var(--success)/0.15)]" : "card-gradient border-border"}`}>
            <div className="text-center">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                  eligible
                    ? "bg-gradient-to-br from-emerald to-cyan animate-pulse-glow"
                    : selected.size === 0
                    ? "bg-secondary"
                    : "bg-gradient-to-br from-amber to-rose"
                }`}
              >
                {eligible ? (
                  <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                ) : selected.size === 0 ? (
                  <FileText className="w-10 h-10 text-muted-foreground" />
                ) : (
                  <AlertTriangle className="w-10 h-10 text-primary-foreground" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {selected.size === 0 ? "Awaiting Selection" : eligible ? "You're Eligible! ✅" : "Almost There ⚠️"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {selected.size === 0
                  ? "Pick the documents you have to see your status."
                  : eligible
                  ? "You have everything needed to vote on election day."
                  : "You're missing something. See checklist below."}
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <RequirementRow label="Valid government photo ID" met={hasPhotoId} />
              <RequirementRow label="Voter roll verification (Voter ID or Aadhaar)" met={hasVoterProof} />
              <RequirementRow label="At least 18 years of age" met={true} note="assumed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RequirementRow = ({ label, met, note }: { label: string; met: boolean; note?: string }) => (
  <div className={`flex items-center gap-3 p-3 rounded-xl ${met ? "bg-success/10" : "bg-secondary/60"}`}>
    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${met ? "bg-success" : "bg-muted"}`}>
      {met ? <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} /> : <X className="w-3.5 h-3.5 text-muted-foreground" />}
    </div>
    <span className={`flex-1 ${met ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
    {note && <span className="text-xs text-muted-foreground italic">{note}</span>}
  </div>
);