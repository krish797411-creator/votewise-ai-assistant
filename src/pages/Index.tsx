import { Navbar } from "@/components/votewise/Navbar";
import { Hero } from "@/components/votewise/Hero";
import { StepGuide } from "@/components/votewise/StepGuide";
import { ChatAssistant } from "@/components/votewise/ChatAssistant";
import { VotingSimulator } from "@/components/votewise/VotingSimulator";
import { Timeline } from "@/components/votewise/Timeline";
import { DocumentChecker } from "@/components/votewise/DocumentChecker";
import { Quiz } from "@/components/votewise/Quiz";
import { Footer } from "@/components/votewise/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StepGuide />
        <ChatAssistant />
        <VotingSimulator />
        <Timeline />
        <DocumentChecker />
        <Quiz />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
