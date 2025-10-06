import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function YesResponse() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a1328] via-[#0a0a14] to-[#1a1328] flex items-center justify-center p-4 overflow-hidden relative">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, scale: 0, x: `${heart.x}vw`, y: `${heart.y}vh` }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1, 0],
            y: [`${heart.y}vh`, `${heart.y - 50}vh`],
          }}
          transition={{
            duration: 3,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute pointer-events-none"
        >
          <Heart className="w-6 h-6 text-primary fill-current" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-primary/30 mb-8">
            <Heart className="w-20 h-20 text-primary fill-current animate-heart-beat" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-tight">
            She Said Yes!
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-poetic leading-relaxed">
            Thank you for making me the
            <br />
            <span className="text-primary text-4xl font-bold">happiest person alive</span>
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-poetic max-w-2xl mx-auto leading-relaxed mt-8">
            No distance is too far,
            <br />
            no challenge too great,
            <br />
            when I have you by my side.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 md:mt-16 text-base md:text-lg text-gray-300 font-poetic italic"
          data-testid="text-forever"
        >
          This is just the beginning of our forever...
        </motion.p>
      </div>
    </div>
  );
}
