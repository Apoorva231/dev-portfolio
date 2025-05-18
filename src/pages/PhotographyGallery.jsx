import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const galleryPhotos = [
  { src: '/photos/venice.jpg', title: 'Venice', description: 'Sunset in Venice, Italy' },
  { src: '/photos/iceland.jpg', title: 'Iceland', description: 'Northern lights above the ice plains' },
  { src: '/photos/japan.jpg', title: 'Japan', description: 'Cherry blossoms in full bloom' },
];

export default function PhotographyGallery() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-amber-400">Photography Gallery</h1>
        <Link to="/" className="text-amber-500 hover:underline mb-8 inline-block">← Back to Home</Link>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="bg-zinc-800 border border-yellow-300 rounded-lg shadow-lg overflow-hidden">
              <img src={photo.src} alt={photo.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-amber-400">{photo.title}</h2>
                <p className="text-zinc-300 text-sm">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
