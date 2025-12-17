import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Filter } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import templateModern from "@/assets/template-modern.png";
import templateMinimal from "@/assets/template-minimal.png";
import templateElegant from "@/assets/template-elegant.png";
import templateCreative from "@/assets/template-creative.png";
import templateCorporate from "@/assets/template-corporate.png";

const allTemplates = [
  { id: 1, name: "Modern Professional", image: templateModern, popular: true, category: "Modern", description: "Clean lines with bold indigo accents" },
  { id: 2, name: "Clean Minimal", image: templateMinimal, popular: false, category: "Minimal", description: "Simple and elegant whitespace design" },
  { id: 3, name: "Executive Elegant", image: templateElegant, popular: true, category: "Elegant", description: "Sophisticated dark theme for executives" },
  { id: 4, name: "Creative Bold", image: templateCreative, popular: true, category: "Creative", description: "Stand out with unique colorful layouts" },
  { id: 5, name: "Corporate Classic", image: templateCorporate, popular: false, category: "Corporate", description: "Traditional professional business format" },
  { id: 6, name: "Modern Plus", image: templateModern, popular: false, category: "Modern", description: "Enhanced modern design with sidebar" },
  { id: 7, name: "Minimal Light", image: templateMinimal, popular: false, category: "Minimal", description: "Ultra clean minimalist approach" },
  { id: 8, name: "Executive Dark", image: templateElegant, popular: false, category: "Elegant", description: "Premium dark executive style" },
  { id: 9, name: "Creative Pro", image: templateCreative, popular: true, category: "Creative", description: "Bold infographic-style layout" },
  { id: 10, name: "Corporate Navy", image: templateCorporate, popular: false, category: "Corporate", description: "Classic navy blue corporate design" },
];

const categories = ["All", "Modern", "Minimal", "Elegant", "Creative", "Corporate"];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Template Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your Perfect
              <span className=""> Resume Template</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of 20+ professionally designed, ATS-optimized templates. Each one is crafted to help you stand out.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "gradient" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Templates grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                  {template.popular && (
                    <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full gradient-primary flex items-center gap-1">
                      <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                      <span className="text-xs font-semibold text-primary-foreground">Popular</span>
                    </div>
                  )}
                  
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={template.image}
                      alt={`${template.name} resume template`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-foreground">{template.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>

                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={`/editor?template=${template.category.toLowerCase()}`}>
                      <Button variant="premium" size="lg">
                        Use This Template
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;
