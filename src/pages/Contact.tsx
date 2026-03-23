import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+234 916 342 4067", href: "tel:+2349163424067" },
  { icon: Mail, label: "Email", value: "eniolabolarinde04@gmail.com", href: "mailto:eniolabolarinde04@gmail.com" },
  { icon: MapPin, label: "Location", value: "School Gate Area, Ekiti State University" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9AM – 7PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:eniolabolarinde04@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast({ title: "Opening your email client!", description: "Complete sending the message from your email app." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-32 px-4 bg-[#050505] min-h-screen">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Get in <span className="text-gradient-gold italic">Touch</span>
            </h1>
            <p className="text-white/50 max-w-md mx-auto text-lg leading-relaxed">
              Ready for your next transformation? Reach out and let's craft your unique look.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block mb-1">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a href={item.href} className="text-white text-lg font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-lg font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349163424067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-xs font-bold tracking-widest uppercase hover:bg-[#25D366]/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full" />
              
              <div>
                <h2 className="font-heading text-3xl font-bold text-white mb-2">Send a Message</h2>
                <p className="text-white/40 text-sm mb-8">We'll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-4">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/10"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-4">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/10"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-4">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/10"
                    placeholder="+234 ..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-4">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-white/10"
                    placeholder="Tell us about the style you're looking for..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(225,152,152,0.4)] transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
