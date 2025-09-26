import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import neymarSkills from "@/assets/neymar-skills.jpeg";
import neymarTrophy from "@/assets/neymar-trophy.jpeg";
import neymarHero from "@/assets/neymar-hero.jpg";
import neymarTricks from "@/assets/neymar-tricks.jpeg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      type: "image",
      src: neymarSkills,
      title: "Signature Skills",
      description: "Dribbling past defenders",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/P_ihwXty6Ls",
      title: "Best Goals",
      description: "Top 10 Neymar Goals",
    },
    {
      type: "image",
      src: neymarTrophy,
      title: "Champions",
      description: "Trophy celebration",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/OWOjRdmpM6I",
      title: "Skills & Tricks",
      description: "Magic on the field",
    },
  ];

  const highlights = [
    "UEFA Champions League Winner 2015",
    "Olympic Gold Medal 2016",
    "Copa América Winner 2019",
    "Ligue 1 Champion (Multiple)",
    "Copa del Rey Winner (Multiple)",
    "FIFA Confederations Cup 2013",
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-background/95">
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
              Highlights & Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the moments that define excellence
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="glass overflow-hidden cursor-pointer group hover:scale-105 transition-all"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-video">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <img
                        src={item.src.includes("P_ihwXty6Ls") ? neymarHero : neymarTricks}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white bg-primary/80 rounded-full p-2" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Major Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 glass hover:border-primary/50 transition-all">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏆</span>
                    <p className="font-medium">{achievement}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-foreground/80 hover:text-foreground"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              
              <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                {galleryItems[selectedImage].type === "image" ? (
                  <img
                    src={galleryItems[selectedImage].src}
                    alt={galleryItems[selectedImage].title}
                    className="w-full rounded-lg"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      src={galleryItems[selectedImage].src}
                      title={galleryItems[selectedImage].title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                )}
                
                <div className="flex justify-between mt-4">
                  <button
                    className="text-foreground/80 hover:text-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) => 
                        prev === 0 ? galleryItems.length - 1 : prev! - 1
                      );
                    }}
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    className="text-foreground/80 hover:text-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) => 
                        prev === galleryItems.length - 1 ? 0 : prev! + 1
                      );
                    }}
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;