import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Clock, Sparkles, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/FloatingParticles";
import { useRef } from "react";

interface StoryJourneyProps {
  onPropose: () => void;
}

export default function StoryJourney({ onPropose }: StoryJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35, 0.45], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="min-h-[400vh] w-full bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <FloatingParticles count={25} />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4"
              >
                <Phone className="w-12 h-12 text-primary animate-pulse-glow" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-4xl md:text-6xl font-bold text-foreground"
              >
                A Random Connection
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="flex items-center justify-between max-w-xl mx-auto">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50 animate-pulse-glow" />
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 animate-pulse-glow" />
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50 animate-pulse-glow" />
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground font-poetic max-w-2xl mx-auto leading-relaxed"
              >
                Two souls,
                <br />
                strangers in the vast digital expanse,
                <br />
                connected randomly, anonymously...
                <br />
                yet somehow, <span className="text-primary">perfectly</span>.
              </motion.p>
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4"
              >
                <Clock className="w-12 h-12 text-primary animate-float" />
              </motion.div>
              
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
                Hours Together, Miles Apart
              </h2>
              
              <div className="relative py-8">
                <div className="flex items-center justify-center gap-4">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-2 h-12 bg-primary rounded-full"
                      style={{
                        opacity: 0.2 + (i % 3) * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-poetic max-w-2xl mx-auto leading-relaxed">
                Through voice calls and late-night talks,
                <br />
                we found comfort in each other's presence.
                <br />
                Distance couldn't stop us from
                <br />
                <span className="text-primary">feeling closer than ever</span>.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4"
              >
                <Sparkles className="w-12 h-12 text-primary animate-pulse-glow" />
              </motion.div>
              
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
                Everything About You
              </h2>
              
              <div className="relative py-8 flex items-center justify-center gap-3">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, repeat: Infinity, repeatDelay: 3 }}
                    className="text-primary"
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-poetic max-w-2xl mx-auto leading-relaxed">
                Your laugh, your voice, your thoughts...
                <br />
                Everything about you makes this
                <br />
                long-distance journey <span className="text-primary">special</span>.
                <br />
                You turn ordinary moments into
                <br />
                <span className="text-primary">extraordinary memories</span>.
              </p>
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacity4 }} className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4"
              >
                <MapPin className="w-12 h-12 text-primary animate-float" />
              </motion.div>
              
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
                Distance Cannot Divide Us
              </h2>
              
              <div className="relative py-8">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full bg-primary/30 border-2 border-primary"
                  />
                  <div className="flex-1 relative h-1 mx-8">
                    <div className="absolute inset-0 bg-primary/20" />
                    <motion.div
                      animate={{ x: [0, "100%", 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-4 h-1 bg-primary rounded-full"
                    />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-12 h-12 rounded-full bg-primary/30 border-2 border-primary"
                  />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-poetic max-w-2xl mx-auto leading-relaxed">
                Miles may separate us,
                <br />
                but our hearts beat as one.
                <br />
                Every call, every message,
                <br />
                brings us <span className="text-primary">closer together</span>.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Button
                  data-testid="button-continue"
                  onClick={onPropose}
                  size="lg"
                  className="text-lg px-8 h-14 group"
                >
                  <span className="flex items-center gap-2">
                    Continue
                    <Heart className="w-5 h-5 group-hover:animate-heart-beat" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
