import { Link } from "react-router-dom";
import { Scissors, Instagram, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground mb-3">
            <Scissors className="w-5 h-5 text-primary" />
            HAIR BY <span className="text-gradient-gold">HELEN</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Premium hairstyling by Helen. Your beauty, our artistry.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-3 text-foreground uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-3 text-foreground uppercase tracking-wide">Connect</h4>
          <div className="flex gap-4 text-muted-foreground">
            <a href="https://www.instagram.com/bolarindehelen?igsh=MTM2aHFlYzlmd254bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.tiktok.com/@dmain_helen?_r=1&_t=ZS-946HbiNDvj3" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="tel:+2349163424067" aria-label="Phone" className="hover:text-primary transition-colors"><Phone className="w-5 h-5" /></a>
          </div>
          <p className="text-sm text-muted-foreground mt-3">eniolabolarinde04@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hair by Helen. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
