import { motion } from "framer-motion";
import { Sparkles, Shield, Download, LayoutTemplate } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Ready Structure",
    description: "Smart sections and content suggestions powered by AI help you write compelling professional summaries and bullet points.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "ATS-Compliant Design",
    description: "Every template is optimized for Applicant Tracking Systems, ensuring your resume gets past the automated screening.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Download,
    title: "Instant PDF Export",
    description: "Download your polished resume as a perfectly formatted PDF with one click. Ready to send to employers instantly.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: LayoutTemplate,
    title: "20+ Modern Templates",
    description: "Choose from our curated collection of professional, creative, minimal, and elegant templates for any industry.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className=""> Land Your Dream Job</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our resume builder combines powerful features with an intuitive interface, making it easy to create professional resumes that get results.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
