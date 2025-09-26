import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, TrendingUp } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Neymar Scores Stunning Goal in Al-Hilal Victory",
      excerpt: "Brazilian superstar continues his impressive form with a spectacular free-kick...",
      date: "2024-01-15",
      category: "Match Report",
      trending: true,
    },
    {
      title: "Neymar Reaches 100 International Caps Milestone",
      excerpt: "The forward becomes one of Brazil's most capped players in history...",
      date: "2024-01-12",
      category: "International",
      trending: true,
    },
    {
      title: "Exclusive: Neymar Discusses World Cup Dreams",
      excerpt: "In an exclusive interview, Neymar opens up about his ambitions for 2026...",
      date: "2024-01-10",
      category: "Interview",
      trending: false,
    },
    {
      title: "Neymar Foundation Opens New Sports Center",
      excerpt: "The foundation continues its work helping underprivileged children in Brazil...",
      date: "2024-01-08",
      category: "Off the Pitch",
      trending: false,
    },
    {
      title: "Statistical Analysis: Neymar's Impact at Al-Hilal",
      excerpt: "Breaking down the numbers behind Neymar's successful stint in Saudi Arabia...",
      date: "2024-01-05",
      category: "Analysis",
      trending: true,
    },
    {
      title: "Neymar Named Player of the Month",
      excerpt: "Outstanding performances earn him another individual accolade...",
      date: "2024-01-02",
      category: "Awards",
      trending: false,
    },
  ];

  const categoryColors: Record<string, string> = {
    "Match Report": "bg-primary/20 text-primary",
    "International": "bg-secondary/20 text-secondary",
    "Interview": "bg-accent/20 text-accent",
    "Off the Pitch": "bg-destructive/20 text-destructive",
    "Analysis": "bg-primary/20 text-primary",
    "Awards": "bg-secondary/20 text-secondary",
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-background/95 to-background">
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
              Latest News & Updates
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest from Neymar's world
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full flex flex-col hover:scale-105 transition-all">
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    {item.trending && (
                      <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <Button variant="glass" size="sm" className="w-full group">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Load More News
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;