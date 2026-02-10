export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-semibold">
        Sorting Algorithm Visualiser
      </div>

      {/* Right: Links */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}