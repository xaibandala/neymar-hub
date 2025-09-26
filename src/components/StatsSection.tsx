import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trophy, Target, Users, Star } from "lucide-react";

const StatsSection = () => {
  const [filter, setFilter] = useState<"all" | "club" | "international">("all");

  const stats = {
    all: {
      goals: 436,
      assists: 255,
      appearances: 704,
      trophies: 32,
    },
    club: {
      goals: 358,
      assists: 206,
      appearances: 576,
      trophies: 23,
    },
    international: {
      goals: 78,
      assists: 49,
      appearances: 128,
      trophies: 9,
    },
  };

  const currentStats = stats[filter];

  const clubStats = [
    { club: "Santos", period: "2009-2013", goals: 136, apps: 225 },
    { club: "Barcelona", period: "2013-2017", goals: 105, apps: 186 },
    { club: "PSG", period: "2017-2023", goals: 118, apps: 173 },
    { club: "Al-Hilal", period: "2023-Present", goals: 15, apps: 20 },
  ];

  const statCards = [
    { label: "Goals", value: currentStats.goals, icon: Target, color: "text-primary" },
    { label: "Assists", value: currentStats.assists, icon: Users, color: "text-secondary" },
    { label: "Appearances", value: currentStats.appearances, icon: Star, color: "text-accent" },
    { label: "Trophies", value: currentStats.trophies, icon: Trophy, color: "text-destructive" },
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Career Statistics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Numbers that define greatness
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={filter === "all" ? "hero" : "glass"}
              onClick={() => setFilter("all")}
            >
              All Time
            </Button>
            <Button
              variant={filter === "club" ? "hero" : "glass"}
              onClick={() => setFilter("club")}
            >
              Club
            </Button>
            <Button
              variant={filter === "international" ? "hero" : "glass"}
              onClick={() => setFilter("international")}
            >
              International
            </Button>
          </div>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glass text-center hover:scale-105 transition-transform">
                  <Icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                  <motion.div
                    key={`${filter}-${stat.label}`}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`text-3xl md:text-4xl font-bold ${stat.color}`}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Club by Club Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Club Career</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clubStats.map((club, index) => (
              <motion.div
                key={club.club}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 glass hover:border-primary/50 transition-all">
                  <h4 className="text-lg font-bold text-primary">{club.club}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{club.period}</p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-2xl font-bold">{club.goals}</p>
                      <p className="text-xs text-muted-foreground">Goals</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{club.apps}</p>
                      <p className="text-xs text-muted-foreground">Apps</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">
                        {(club.goals / club.apps).toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">Ratio</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;