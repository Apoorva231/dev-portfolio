import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const previewPhotos = [
  { src: '/photos/venice.jpg', alt: 'Sunset in Venice' },
  { src: '/photos/iceland.jpg', alt: 'Northern lights in Iceland' },
  { src: '/photos/japan.jpg', alt: 'Cherry blossoms in Japan' }
];

export default function Photography() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Photography</span>
      </h2>
      <p className="text-lg mb-6 text-white max-w-3xl">
        A glimpse into my visual storytelling — moments captured across the world.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {previewPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-yellow-300 dark:border-zinc-700"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/photography"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          See All
        </Link>
      </div>
    </motion.section>
  );
}