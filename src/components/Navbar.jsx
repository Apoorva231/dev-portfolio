export default function Navbar({ sections, scrollToSection, activeSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-800/90 backdrop-blur-md shadow-lg z-10 p-4 flex flex-col md:flex-row justify-between items-center md:px-8 border-b border-zinc-700 space-y-2 md:space-y-0">
      <div className="text-xl font-bold text-amber-400 hidden md:block">Apoorva Bhardwaj</div>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
        {Object.entries(sections).map(([key, ref]) => (
          <button
            key={key}
            onClick={() => scrollToSection(ref)}
            className={`hover:text-amber-400 font-medium transition-all duration-300 ease-in-out transform hover:scale-110 ${activeSection === key ? 'text-amber-400 font-semibold' : ''}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}