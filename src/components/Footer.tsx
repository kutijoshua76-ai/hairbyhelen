import { Link } from "react-router-dom";
import { Scissors, Instagram, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 py-20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight text-white mb-6 group transition-transform hover:scale-105 active:scale-95">
            <img src="/logo.png" alt="Hair By Helen Logo" className="w-8 h-8 object-contain" />
            HAIR BY <span className="text-gradient-gold italic font-bold">HELEN</span>
          </Link>
          <p className="text-white/50 text-base leading-relaxed max-w-xs">
            Experience the pinnacle of hairstyling mastery where every look is a work of art.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-xs font-bold mb-6 text-white uppercase tracking-[0.3em]">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Art Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xs font-bold mb-6 text-white uppercase tracking-[0.3em]">Connect</h4>
          <div className="flex gap-6 text-white/40 mb-6">
            <a href="https://www.instagram.com/bolarindehelen?igsh=MTM2aHFlYzlmd254bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-all hover:scale-110 active:scale-90"><Instagram className="w-6 h-6" /></a>
            <a href="https://www.tiktok.com/@dmain_helen?_r=1&_t=ZS-946HbiNDvj3" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-primary transition-all hover:scale-110 active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="tel:+2349163424067" aria-label="Phone" className="hover:text-primary transition-all hover:scale-110 active:scale-90"><Phone className="w-6 h-6" /></a>
          </div>
          <p className="text-sm text-white/40 italic">eniolabolarinde04@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/5 mt-16 pt-10 text-center">
        <p className="text-[10px] text-white/20 font-bold tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} HAIR BY HELEN • PREMIER HAIRSTYLING STUDIO
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
