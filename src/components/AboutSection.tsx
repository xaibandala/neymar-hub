import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Flag } from "lucide-react";

const timeline = [
  {
    year: "1992",
    title: "Born in Mogi das Cruzes",
    description: "February 5, 1992 - The beginning of a legend",
    icon: Calendar,
    color: "text-primary",
  },
  {
    year: "2009",
    title: "Santos FC Debut",
    description: "Professional career begins, quickly becoming a sensation",
    icon: MapPin,
    color: "text-secondary",
  },
  {
    year: "2013",
    title: "Barcelona Move",
    description: "Joined FC Barcelona, forming the legendary MSN trio",
    icon: Award,
    color: "text-accent",
  },
  {
    year: "2017",
    title: "PSG Transfer",
    description: "World record €222 million transfer to Paris Saint-Germain",
    icon: Flag,
    color: "text-destructive",
  },
  {
    year: "2023",
    title: "Al-Hilal Journey",
    description: "New chapter in Saudi Arabia with Al-Hilal",
    icon: MapPin,
    color: "text-primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
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
              The Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the streets of São Paulo to becoming one of football's greatest entertainers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 glass">
              <h3 className="text-2xl font-bold mb-4 text-primary">About Neymar</h3>
              <p className="text-foreground/80 mb-4">
                Neymar da Silva Santos Júnior, known as Neymar Jr., is a Brazilian professional footballer 
                who plays as a forward. Renowned for his dribbling, finishing, and ability with both feet, 
                he has been regarded as one of the best players in the world.
              </p>
              <p className="text-foreground/80">
                His journey from Santos to Barcelona, PSG, and now Al-Hilal has been marked by incredible 
                achievements, including multiple league titles, Champions League triumph, and Olympic Gold 
                with Brazil.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 glass">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Playing Style</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-primary">⚡</span>
                  <p className="text-foreground/80">Lightning-fast dribbling and acceleration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary">🎯</span>
                  <p className="text-foreground/80">Clinical finishing with both feet</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary">🎨</span>
                  <p className="text-foreground/80">Creative playmaking and vision</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary">🌟</span>
                  <p className="text-foreground/80">Flair and entertainment value</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
          
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`glass p-3 rounded-full ${item.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
                <div className="flex-1 px-4">
                  <Card className={`p-4 glass ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className={`text-3xl font-bold ${item.color}`}>{item.year}</span>
                    <h4 className="text-xl font-semibold mt-2">{item.title}</h4>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;