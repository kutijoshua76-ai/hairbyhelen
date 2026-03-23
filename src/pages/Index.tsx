import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-salon.jpg";
import cornrowsImg from "@/assets/style-cornrows.jpg";
import braidsImg from "@/assets/style-braids-new.jpg";
import weavingImg from "@/assets/style-weaving.jpg";

const highlights = [
  { icon: Sparkles, title: "Expert Styling", desc: "Years of experience in modern and classic hairstyles." },
  { icon: Star, title: "Premium Products", desc: "Only the finest products for healthy, beautiful hair." },
  { icon: Clock, title: "Flexible Hours", desc: "Appointments that fit your schedule, including weekends." },
];

const featured = [
  { img: cornrowsImg, name: "Cornrows" },
  { img: braidsImg, name: "Braids" },
  { img: weavingImg, name: "Weaving" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src={heroImg}
        alt="Luxurious hair salon"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
          Premium Hairstyling Experience
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
          Your Hair, <br />Our <span className="text-gradient-gold italic">Artistry</span>
        </h1>
        <p className="text-white/70 text-lg sm:text-xl mb-10 font-body max-w-xl mx-auto leading-relaxed">
          Discover a new standard of luxury where every strand is treated with meticulous care and artistic vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-widest uppercase text-xs hover:shadow-[0_0_30px_rgba(225,152,152,0.4)] transition-all active:scale-95"
          >
            Book Appointment
          </Link>
          <Link
            to="/gallery"
            className="px-10 py-4 rounded-full border border-white/20 text-white font-bold tracking-widest uppercase text-xs hover:bg-white/5 transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Highlights */}
    <section className="py-32 px-4 bg-[#050505]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Why Choose <span className="text-gradient-gold italic">Us</span>
          </h2>
          <div className="w-20 h-px bg-primary/50 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-primary/20 transition-colors shadow-2xl"
            >
              <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Styles */}
    <section className="py-32 px-4 bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Our Signature <br /><span className="text-gradient-gold italic">Creations</span>
            </h2>
            <p className="text-white/50 text-lg">
              Each style is a bespoke masterpiece tailored to enhance your natural features and personal style.
            </p>
          </div>
          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary/5 transition-colors"
          >
            Explore Full Gallery
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {featured.map((style, i) => (
            <motion.div
              key={style.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src={style.img}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-8 left-8">
                <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Featured Style</p>
                <h3 className="font-heading text-2xl font-bold text-white tracking-wide">
                  {style.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-40 px-4 text-center bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-3xl relative z-10"
      >
        <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
          Ready for your <br /><span className="text-gradient-gold italic">Transformation</span>?
        </h2>
        <p className="text-white/60 text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
          Your journey to exceptional style begins here. Join our community of satisfied clients and experience the difference.
        </p>
        <Link
          to="/contact"
          className="inline-flex px-12 py-5 rounded-full bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:shadow-[0_0_40px_rgba(225,152,152,0.5)] transition-all active:scale-95"
        >
          Book Your Experience
        </Link>
      </motion.div>
    </section>
  </Layout>
);

export default Index;
