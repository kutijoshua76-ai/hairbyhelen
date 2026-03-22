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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
        >
          About <span className="text-gradient-gold">Hair by Helen</span>
        </motion.h1>
        <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
          Where passion meets artistry — creating hairstyles that make you feel extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={stylistImg}
              alt="Our lead stylist"
              className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Meet Your Stylist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With the minimum experience in the hair industry, our lead stylist brings creativity, precision, and a deep understanding of diverse hair textures to every appointment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether it's braids, blowouts, color treatments, or bridal updos — we believe every client deserves a look that feels uniquely theirs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We stay updated with the latest trends and techniques while honoring timeless classics. Your satisfaction and confidence are our greatest reward.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              She's not just a stylist — she's a Fashionista in various aspects. Check out her links below at the connect section by tapping the social media icons!
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 text-center shadow-soft"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
