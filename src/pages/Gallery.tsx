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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
          >
            Our <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
            Browse our collection of stunning hairstyles crafted with love and expertise.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((style, i) => (
                <motion.div
                  key={style.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(i)}
                  className="cursor-pointer group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-card"
                >
                  {style.type === "video" ? (
                    <video
                      src={style.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={style.src}
                      alt={style.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-heading text-lg font-semibold text-primary-foreground">{style.name}</span>
                    <span className="block text-primary-foreground/70 text-sm">{style.category}</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            {filtered[lightbox]?.type === "video" ? (
              <motion.video
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={filtered[lightbox]?.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={filtered[lightbox]?.src}
                alt={filtered[lightbox]?.name}
                className="max-h-[85vh] max-w-full rounded-2xl object-contain"
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
