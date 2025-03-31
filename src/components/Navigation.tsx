import { useState } from "react";
import Button1 from "./Button";
import { Menu, X } from "lucide-react"; // Icon for menu toggle

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function Contactus(): void {
    window.location.href = "https://www.google.com";
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg shadow-md">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-[var(--blue-color)] font-bold text-3xl md:text-4xl">
          Trans<span className="text-[var(--orange--color)]">max</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 font-semibold text-gray-800">
            <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Services</li>
            <li className="hover:text-[var(--orange--color)] cursor-pointer transition">News & Media</li>
            <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Careers</li>
          </ul>
          <Button1 text="CONNECT WITH US" onClick={Contactus} />
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 transition-all">
          <ul className="flex flex-col gap-4 font-semibold text-gray-800">
            <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Services</li>
            <li className="hover:text-[var(--orange--color)] cursor-pointer transition">News & Media</li>
            <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Careers</li>
          </ul>
          <div className="mt-4">
            <Button1 text="CONNECT WITH US" onClick={Contactus} />
          </div>
        </div>
      )}

      {/* Second Navigation */}
      <nav className="hidden md:flex justify-center items-center bg-gray-900/90 py-3 text-white">
        <ul className="flex gap-8 font-semibold">
          <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Home</li>
          <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Pages</li>
          <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Portfolio</li>
          <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Blog</li>
          <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Shop</li>
          <li className="hover:text-[var(--orange--color)] cursor-pointer transition">Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
