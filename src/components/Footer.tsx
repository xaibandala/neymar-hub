import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="py-12 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NJR 10
            </h3>
            <p className="text-muted-foreground mt-2">The Magician of Football</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="glass p-3 rounded-full hover:scale-110 hover:bg-primary/20 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#stats" className="hover:text-primary transition-colors">Stats</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#news" className="hover:text-primary transition-colors">News</a>
            <a href="#" className="hover:text-primary transition-colors">Fan Zone</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-2 text-destructive" fill="currentColor" /> by xai 
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © 2024 Neymar Jr Fan Hub. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;