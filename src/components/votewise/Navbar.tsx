import { Vote } from "lucide-react";

const links = [
  { href: "#guide", label: "Guide" },
  { href: "#chat", label: "AI Chat" },
  { href: "#simulator", label: "Simulator" },
  { href: "#timeline", label: "Timeline" },
  { href: "#documents", label: "Documents" },
  { href: "#quiz", label: "Quiz" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_20px_hsl(var(--primary)/0.5)] group-hover:scale-110 transition-transform">
            <Vote className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            VoteWise<span className="gradient-text"> AI</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#chat"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all hover:scale-105"
        >
          Ask AI
        </a>
      </nav>
    </header>
  );
};