import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectGallery from "./ProjectGallery";

interface HomeProps {
  initialScrolled?: boolean;
}

const Home = ({ initialScrolled = false }: HomeProps) => {
  const [isScrolled, setIsScrolled] = useState(initialScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCursorMove = (e: React.MouseEvent) => {
    // Cursor effect logic can be implemented here if needed
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <Navigation isScrolled={isScrolled} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home">
          <HeroSection onCursorMove={handleCursorMove} />
        </section>

        <section id="projects" className="py-16">
          <ProjectGallery />
        </section>

        <section id="about" className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I'm a passionate developer focused on creating beautiful and
                functional web experiences. With expertise in modern web
                technologies, I bring ideas to life through clean code and
                thoughtful design.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in working together? Let's connect and discuss your
                next project.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contact@example.com"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
