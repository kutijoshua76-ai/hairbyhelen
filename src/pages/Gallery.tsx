import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import cornrowsVideo from "@/assets/video-braids.mp4";
import locsVideo from "@/assets/video-locs.mp4";
import braidsVideo from "@/assets/video-braids-new.mp4";
import weavingImg from "@/assets/style-weaving.jpg";
import wigImg from "@/assets/style-wig.jpg";
import updoImg from "@/assets/style-updo-new.jpg";

type GalleryItem = {
  name: string;
  category: string;
  type: "image" | "video";
  src: string;
};

const styles: GalleryItem[] = [
  { src: cornrowsVideo, name: "Cornrows", category: "Cornrows", type: "video" },
  { src: locsVideo, name: "Locs", category: "Locs", type: "video" },
  { src: braidsVideo, name: "Braids", category: "Braids", type: "video" },
  { src: weavingImg, name: "Weaving", category: "Weaving", type: "image" },
  { src: wigImg, name: "Wig Fixing", category: "Wigs", type: "image" },
  { src: updoImg, name: "Elegant Updo", category: "Updo", type: "image" },
];

const categories = ["All", ...Array.from(new Set(styles.map((s) => s.category)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? styles : styles.filter((s) => s.category === filter);

  return (
    <Layout>
      <section className="py-32 px-4 bg-[#050505] min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Our <span className="text-gradient-gold italic">Gallery</span>
            </h1>
            <p className="text-white/50 max-w-md mx-auto text-lg leading-relaxed">
              Explore the artistry and dedication behind our signature hairstyles.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(225,152,152,0.3)]"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((style, i) => (
                <motion.div
                  key={style.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightbox(i)}
                  className="cursor-pointer group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/20 transition-colors"
                >
                  {style.type === "video" ? (
                    <video
                      src={style.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={style.src}
                      alt={style.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                      {style.category}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                      {style.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setLightbox(null)}
            />
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10 p-2"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            {filtered[lightbox]?.type === "video" ? (
              <motion.video
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={filtered[lightbox]?.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl relative z-10"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={filtered[lightbox]?.src}
                alt={filtered[lightbox]?.name}
                className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl relative z-10"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
