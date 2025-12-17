import { motion } from "framer-motion";
import { LayoutTemplate, PenLine, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Choose a Template",
    description: "Browse our collection of 20+ professional templates and pick the one that matches your style and industry.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Enter Your Details",
    description: "Fill in your information using our intuitive editor. Get AI-powered suggestions to make your content shine.",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "03",
    icon: Download,
    title: "Download Your PDF",
    description: "Export your polished resume as a perfectly formatted PDF. Ready to impress recruiters and land interviews.",
    color: "from-purple-500 to-pink-600",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-hero opacity-5 blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Create Your Resume in
            <span className=""> 3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process makes it easy to go from blank page to job-winning resume in just minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full transform -translate-y-1/2 opacity-20" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step number & icon */}
                  <div className="relative inline-block mb-8">
                    {/* Number background */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon container */}
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elevated`}>
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
