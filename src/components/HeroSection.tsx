import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Trophy, TrendingUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import neymarHero from "@/assets/neymar-hero.jpg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={neymarHero}
          alt="Neymar Jr celebrating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            data-aos="fade-up"
          >
            <span className="block text-foreground mb-2">Neymar Jr</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow">
              The Magician of Football
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore his journey, stats, and legacy
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button variant="hero" size="lg" className="min-w-[160px]">
              <Trophy className="mr-2" />
              Career Stats
            </Button>
            <Button variant="glass" size="lg" className="min-w-[160px]">
              <TrendingUp className="mr-2" />
              Latest News
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-20 left-0 right-0 hidden lg:flex justify-center gap-8"
        >
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-primary text-2xl font-bold">400+</span>
            <span className="text-foreground/60 ml-2">Goals</span>
          </div>
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-secondary text-2xl font-bold">250+</span>
            <span className="text-foreground/60 ml-2">Assists</span>
          </div>
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-accent text-2xl font-bold">30+</span>
            <span className="text-foreground/60 ml-2">Trophies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;