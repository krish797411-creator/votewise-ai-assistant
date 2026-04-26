import { Vote, Heart } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <Vote className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">VoteWise AI</span>
          <span>· {t("footer.tag")}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {t("footer.built")} <Heart className="w-3.5 h-3.5 fill-rose text-rose" /> · 🇮🇳
        </div>
      </div>
    </footer>
  );
};