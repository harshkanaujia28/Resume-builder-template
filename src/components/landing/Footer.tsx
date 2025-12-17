import { Link } from "react-router-dom";
import { FileText, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Templates", href: "#templates" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    resources: [
      { name: "Resume Tips", href: "#" },
      { name: "Career Blog", href: "#" },
      { name: "Cover Letters", href: "#" },
      { name: "Examples", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Press", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative">
      {/* Gradient strip */}
      <div className="h-1 gradient-primary" />
      
      <div className="bg-card border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">ResumeAI</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Build beautiful, ATS-optimized resumes in minutes. Land your dream job with professional templates and AI-powered content.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ResumeAI. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ for job seekers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
