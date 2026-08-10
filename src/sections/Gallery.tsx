import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// AUTO-DETECT: Vite scans src/assets/gallery/ at build time.
// Any new image added here will automatically appear on the site.
const imageModules = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,webp,gif}", {
  eager: true,
  query: "?url",
  import: "default",
});

interface GalleryItem {
  id: number;
  title: string;
  url: string;
  span: string;
}

function formatTitle(filename: string): string {
  return filename
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

function getSpan(index: number): string {
  if (index === 0) return "col-span-2 row-span-2";
  if (index === 5) return "col-span-2 row-span-1";
  return "col-span-1 row-span-1";
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Build gallery items automatically from detected files
  const items = useMemo<GalleryItem[]>(() => {
    return Object.entries(imageModules).map(([path, url], index) => {
      const filename = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Image";
      return {
        id: index,
        title: formatTitle(filename),
        url: url as string,
        span: getSpan(index),
      };
    });
  }, []);

  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
  }, [items.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeModal, goNext, goPrev]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Empty state
  if (items.length === 0) {
    return (
      <section id="gallery" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-bamGreen font-bold text-sm uppercase tracking-widest">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Our Facility
          </h2>
          <p className="text-bamGray">
            No images found. Add images to{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/assets/gallery/</code>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-bamGreen font-bold text-sm uppercase tracking-widest">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Our Facility
          </h2>
          <p className="text-bamGray text-lg max-w-2xl mx-auto">
            Take a look inside Bamitale Hospital — modern facilities designed for your care.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${item.span}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bamBlue/80 via-bamBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">Click to expand</p>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[selectedIndex].url}
                alt={items[selectedIndex].title}
                className="w-full h-full object-contain rounded-lg max-h-[70vh]"
                fetchPriority="high"
                decoding="async"
              />
              <div className="text-center mt-4">
                <h3 className="text-white font-bold text-xl">
                  {items[selectedIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === selectedIndex
                      ? "border-bamSky scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}