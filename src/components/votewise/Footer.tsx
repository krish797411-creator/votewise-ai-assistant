import { Vote, Heart } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-10 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
          <Vote className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-semibold text-foreground">VoteWise AI</span>
        <span>· Empowering first-time voters</span>
      </div>
      <div className="flex items-center gap-1.5">
        Built with <Heart className="w-3.5 h-3.5 fill-rose text-rose" /> for democracy
      </div>
    </div>
  </footer>
);