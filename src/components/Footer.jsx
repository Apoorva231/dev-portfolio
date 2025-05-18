export default function Footer() {
  return (
    <footer className="bg-zinc-800/90 border-t border-zinc-700 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-zinc-300">© {new Date().getFullYear()} Apoorva Bhardwaj. All rights reserved.</p>
        <p className="text-zinc-400 text-sm mt-2">Built with React, Tailwind CSS, and Framer Motion</p>
      </div>
    </footer>
  );
}
