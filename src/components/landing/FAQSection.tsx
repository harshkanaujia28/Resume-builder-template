import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes ResumeAI different from other resume builders?",
    answer: "ResumeAI combines beautiful, ATS-optimized templates with AI-powered content suggestions. Our templates are designed by HR professionals to ensure your resume gets past automated screening systems while still looking visually stunning.",
  },
  {
    question: "Are the resumes ATS-friendly?",
    answer: "Absolutely! All our templates are specifically designed to be parsed correctly by Applicant Tracking Systems (ATS). We use clean formatting, proper headings, and optimized layouts that both humans and machines can read easily.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer: "Yes! You can export your resume as a high-quality PDF with just one click. The PDF maintains perfect formatting and is ready to be sent to employers or uploaded to job portals.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, simply contact our support team for a full refund.",
  },
  {
    question: "Can I create multiple versions of my resume?",
    answer: "Yes! Pro users can create unlimited resume versions, perfect for tailoring your resume to different job applications or industries.",
  },
  {
    question: "How does the AI content suggestion work?",
    answer: "Our AI analyzes your job title and experience to suggest impactful bullet points and professional summaries. It helps you articulate your achievements and skills in a way that resonates with recruiters.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className=""> Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-primary/10 rounded-2xl px-6 data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
