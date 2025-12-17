import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Join 50,000+ professionals
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Land Your
            <br />
            Dream Job?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Create a stunning, ATS-optimized resume in minutes. Stand out from the crowd and get more interviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/editor">
              <Button variant="premium" size="xl" className="w-full sm:w-auto group">
                Start Building for Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="hero-outline" size="xl">
                Browse Templates
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            No credit card required • Free forever plan available
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
