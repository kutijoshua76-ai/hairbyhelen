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
    <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Luxurious hair salon" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
          Your Hair, <br />Our <span className="text-gradient-gold">Artistry</span>
        </h1>
        <p className="text-primary-foreground/80 text-base sm:text-lg mb-8 font-body">
          Experience luxury hairstyling that brings out your unique beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full border border-primary-foreground/40 text-primary-foreground font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Highlights */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why Choose <span className="text-gradient-gold">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-8 text-center shadow-soft"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Styles */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Featured <span className="text-gradient-gold">Styles</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((style, i) => (
            <motion.div
              key={style.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-card"
            >
              <img
                src={style.img}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <span className="absolute bottom-4 left-4 font-heading text-lg font-semibold text-primary-foreground">
                {style.name}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            See All Styles
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-xl"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready for a <span className="text-gradient-gold">Transformation</span>?
        </h2>
        <p className="text-muted-foreground mb-8">
          Let's create something beautiful together. Book your appointment today.
        </p>
        <Link
          to="/contact"
          className="inline-flex px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  </Layout>
);

export default Index;
