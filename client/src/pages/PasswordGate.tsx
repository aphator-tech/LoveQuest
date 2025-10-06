import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Heart } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";

interface PasswordGateProps {
  onUnlock: () => void;
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === "divine grace") {
      setIsUnlocking(true);
      setError("");
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-4 overflow-hidden">
      <FloatingParticles count={30} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-card/80 backdrop-blur-xl border border-card-border rounded-lg p-8 shadow-2xl overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 animate-pulse-glow">
              {isUnlocking ? (
                <Heart className="w-8 h-8 text-primary animate-heart-beat" />
              ) : (
                <Lock className="w-8 h-8 text-primary" />
              )}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              For Someone Special
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter the password to continue
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Input
                data-testid="input-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="h-12 text-center text-lg bg-background/50 border-primary/20 focus:border-primary transition-all duration-300"
                disabled={isUnlocking}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-sm text-center"
                  data-testid="text-error"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <Button
              data-testid="button-unlock"
              type="submit"
              className="w-full h-12 text-lg font-medium"
              disabled={!password || isUnlocking}
            >
              {isUnlocking ? (
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5 animate-heart-beat" />
                  Unlocking...
                </span>
              ) : (
                "Unlock"
              )}
            </Button>
          </motion.form>

          {isUnlocking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-primary/10 rounded-lg backdrop-blur-sm flex items-center justify-center"
            >
              <div className="text-center">
                <Heart className="w-16 h-16 text-primary mx-auto animate-heart-beat" />
                <p className="mt-4 text-lg font-poetic text-primary">
                  Opening your heart...
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-6 text-sm text-muted-foreground font-poetic"
        >
          A journey awaits beyond this gate
        </motion.p>
      </motion.div>
    </div>
  );
}
