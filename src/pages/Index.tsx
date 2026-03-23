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
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000')] bg-fixed bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Why Choose <span className="text-gradient-gold italic font-bold">Us</span>
          </h2>
          <div className="w-20 h-px bg-primary/30 mx-auto" />
          <p className="text-white/40 mt-6 text-lg max-w-md mx-auto">
            Experience the warmth of a professional studio where your comfort is our priority.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all hover:bg-white/[0.04] shadow-2xl"
            >
              <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/40 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Styles */}
    <section className="py-32 px-4 bg-[#080808] relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Our Signature <br /><span className="text-gradient-gold italic font-bold">Creations</span>
            </h2>
            <p className="text-white/40 text-lg sm:text-xl">
              Each style is a bespoke masterpiece tailored to enhance your natural features and unique personality.
            </p>
          </div>
          <Link
            to="/gallery"
            className="px-10 py-3.5 rounded-full border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary/5 transition-all active:scale-95"
          >
            Explore Full Gallery
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {featured.map((style, i) => (
            <motion.div
              key={style.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl ring-1 ring-white/5 hover:ring-primary/30 transition-all duration-500"
            >
              <img
                src={style.img}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-10 left-10">
                <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Signature Series</p>
                <h3 className="font-heading text-3xl font-bold text-white tracking-wide">
                  {style.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-48 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000')] bg-fixed bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-3xl relative z-10"
      >
        <span className="inline-block text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8">Begin Your Journey</span>
        <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tight text-white mb-10 leading-[0.9]">
          Ready for your <br /><span className="text-gradient-gold italic font-bold">Transformation</span>?
        </h2>
        <p className="text-white/60 text-lg sm:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-body">
          Step into a world of comfort and style. Your journey to exceptional confidence and beauty begins in our chairs.
        </p>
        <Link
          to="/contact"
          className="inline-flex px-14 py-6 rounded-full bg-primary text-primary-foreground font-bold tracking-[0.2em] uppercase text-xs hover:shadow-[0_0_50px_rgba(225,152,152,0.6)] transition-all active:scale-95"
        >
          Book Your Experience
        </Link>
      </motion.div>
    </section>
  </Layout>
);

export default Index;
