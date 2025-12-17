import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "3 Resume Downloads",
      "5 Basic Templates",
      "Standard Export (PDF)",
      "Email Support",
    ],
    cta: "Start Free",
    popular: false,
    gradient: false,
  },
  {
    name: "Pro Monthly",
    icon: Sparkles,
    price: "$12",
    period: "/month",
    description: "Best for active job seekers",
    features: [
      "Unlimited Downloads",
      "All 20+ Templates",
      "AI Content Suggestions",
      "Multiple Resume Versions",
      "Priority Support",
      "Cover Letter Builder",
    ],
    cta: "Get Pro Monthly",
    popular: true,
    gradient: true,
  },
  {
    name: "Lifetime Pro",
    icon: Crown,
    price: "$49",
    period: "one-time",
    description: "Pay once, use forever",
    features: [
      "Everything in Pro",
      "Lifetime Updates",
      "All Future Templates",
      "Priority Feature Access",
      "1-on-1 Resume Review",
      "LinkedIn Optimization",
    ],
    cta: "Get Lifetime Access",
    popular: false,
    gradient: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className=""> Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-primary text-sm font-semibold text-primary-foreground shadow-lg z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full rounded-3xl p-8 ${plan.gradient ? 'gradient-border' : 'bg-card border border-border/50'} shadow-card hover:shadow-elevated transition-all duration-300`}>
                {/* Plan header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${plan.popular ? 'gradient-primary' : 'bg-primary/10'} flex items-center justify-center`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${plan.popular ? 'gradient-primary' : 'bg-primary/10'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
