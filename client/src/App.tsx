import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PasswordGate from "@/pages/PasswordGate";
import StoryJourney from "@/pages/StoryJourney";
import ProposalPage from "@/pages/ProposalPage";
import YesResponse from "@/pages/YesResponse";

type AppState = "locked" | "story" | "proposal" | "yes";

function App() {
  const [appState, setAppState] = useState<AppState>("locked");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          {appState === "locked" && (
            <PasswordGate onUnlock={() => setAppState("story")} />
          )}
          {appState === "story" && (
            <StoryJourney onPropose={() => setAppState("proposal")} />
          )}
          {appState === "proposal" && (
            <ProposalPage onYes={() => setAppState("yes")} />
          )}
          {appState === "yes" && <YesResponse />}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
