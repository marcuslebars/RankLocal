import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark-section border-t border-border/10">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-extrabold text-primary-foreground text-sm">R</span>
            </div>
            <span className="font-display font-bold text-lg">
              Rank<span className="text-primary">Local</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your local growth partner. We help small businesses get found, generate leads, and build lasting digital presence.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">Services</h4>
          <ul className="space-y-3">
            {["Local SEO", "Digital Advertising", "Web Design", "Social Media"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-dark-foreground/70 hover:text-primary transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">Company</h4>
          <ul className="space-y-3">
            {[
              { label: "About", href: "/about" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-dark-foreground/70 hover:text-primary transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">Get in Touch</h4>
          <p className="text-sm text-dark-foreground/70 mb-2">hello@ranklocal.ca</p>
          <p className="text-sm text-dark-foreground/70 mb-4">Toronto, Canada</p>
          <div className="flex gap-3">
            {["LinkedIn", "X", "Instagram"].map((social) => (
              <span key={social} className="text-xs px-3 py-1.5 rounded-md bg-muted/10 border border-border/10 text-dark-foreground/60 hover:text-primary hover:border-primary/30 transition-colors cursor-pointer">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 RankLocal.ca — All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built for businesses that want to grow.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
