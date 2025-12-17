import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

import templateModern from "@/assets/template-modern.png";
import templateMinimal from "@/assets/template-minimal.png";
import templateElegant from "@/assets/template-elegant.png";
import templateCreative from "@/assets/template-creative.png";
import templateCorporate from "@/assets/template-corporate.png";

const templates = [
  {
    name: "Modern",
    image: templateModern,
    popular: true,
    description: "Clean lines with bold accents",
  },
  {
    name: "Minimal",
    image: templateMinimal,
    popular: false,
    description: "Simple and elegant whitespace",
  },
  {
    name: "Elegant",
    image: templateElegant,
    popular: false,
    description: "Sophisticated executive style",
  },
  {
    name: "Creative",
    image: templateCreative,
    popular: true,
    description: "Stand out with unique layouts",
  },
  {
    name: "Corporate",
    image: templateCorporate,
    popular: false,
    description: "Traditional professional format",
  },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-24 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Templates
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Templates for
            <span className=""> Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our collection of beautifully designed, ATS-friendly templates. Each one is crafted to help you make a lasting impression.
          </p>
        </motion.div>

        {/* Templates grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                {/* Popular badge */}
                {template.popular && (
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full gradient-primary flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground">Popular</span>
                  </div>
                )}
                
                {/* Template preview */}
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={template.image}
                    alt={`${template.name} resume template`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Template info */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/editor?template=${template.name.toLowerCase()}`}>
                    <Button variant="premium" size="lg">
                      Use Template
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/templates">
            <Button variant="outline" size="lg" className="group">
              View All Templates
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplatesSection;
