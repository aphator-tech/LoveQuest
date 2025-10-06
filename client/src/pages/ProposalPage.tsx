import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/FloatingParticles";

interface ProposalPageProps {
  onYes: () => void;
}

export default function ProposalPage({ onYes }: ProposalPageProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noClicks, setNoClicks] = useState(0);
  const [showNoMessage, setShowNoMessage] = useState(false);

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoPosition({ x: randomX, y: randomY });
    setNoClicks(noClicks + 1);
    setShowNoMessage(true);
    setTimeout(() => setShowNoMessage(false), 2000);
  };

  const messages = [
    "Are you sure? 🥺",
    "Please think again... 💭",
    "My heart is waiting... 💝",
    "Just give me a chance? 🌹",
    "I promise to make you happy! ✨",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-primary/10 to-background flex items-center justify-center p-4 overflow-hidden relative">
      <FloatingParticles count={40} />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/20 mb-8 animate-pulse-glow">
            <Heart className="w-16 h-16 text-primary animate-heart-beat" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
        >
          Will You Be
          <br />
          <span className="text-primary">My Girlfriend?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-poetic mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Despite the distance, despite the miles,
          <br />
          my heart has found its home with you.
          <br />
          Will you make this journey official?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            data-testid="button-yes"
            onClick={onYes}
            size="lg"
            className="text-2xl px-16 h-16 font-serif font-bold relative group overflow-visible"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Heart className="w-6 h-6 fill-current" />
              Yes!
              <Heart className="w-6 h-6 fill-current" />
            </span>
            <motion.div
              className="absolute inset-0 bg-primary rounded-md"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(217, 119, 216, 0.3)",
                  "0 0 40px rgba(217, 119, 216, 0.6)",
                  "0 0 20px rgba(217, 119, 216, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Button>

          <motion.div
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <Button
              data-testid="button-no"
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              onClick={(e) => {
                e.preventDefault();
                handleNoHover();
              }}
              variant="outline"
              size="lg"
              className="text-xl px-12 h-16 font-serif"
            >
              <span className="flex items-center gap-2">
                <X className="w-5 h-5" />
                No
              </span>
            </Button>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {showNoMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 text-lg text-primary font-poetic"
              data-testid="text-no-message"
            >
              {messages[Math.min(noClicks - 1, messages.length - 1)]}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1 }}
            >
              <Heart className="w-4 h-4 text-primary/40 fill-current" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
