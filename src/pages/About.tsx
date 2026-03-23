import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";
import Layout from "@/components/Layout";
import stylistImg from "@/assets/stylist-helen.jpg";

const stats = [
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Heart, value: "100%", label: "Passion" },
];

const About = () => (
  <Layout>
    <section className="py-32 px-4 bg-[#050505] min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            About <span className="text-gradient-gold italic">Hair by Helen</span>
          </h1>
          <p className="text-white/50 max-w-md mx-auto text-lg leading-relaxed">
            Where passion meets artistry — creating bespoke hairstyles that make you feel truly extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-[3rem] -z-10" />
            <img
              src={stylistImg}
              alt="Our lead stylist"
              className="rounded-[2.5rem] shadow-2xl w-full aspect-[4/5] object-cover border border-white/5"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Meet Your <br /><span className="text-gradient-gold italic">Lead Stylist</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                With a deep-rooted passion for the hair industry, our lead stylist brings creativity, precision, and a professional understanding of diverse hair textures to every appointment.
              </p>
              <p>
                Whether it's masterfully crafted braids, premium color treatments, or elegant bridal updos — we believe every client deserves a bespoke look that radiates confidence.
              </p>
              <p>
                We stay at the forefront of global trends and techniques while honoring timeless beauty standards. Your satisfaction is our primary reward and inspiration.
              </p>
              <p className="text-primary/80 font-medium">
                "She's not just a stylist — she's an artist dedicated to your unique fashion journey."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-10 text-center shadow-2xl hover:border-primary/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 mx-auto">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-heading text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-white/40 text-xs font-bold tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
