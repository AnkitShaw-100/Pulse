import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Edit3, Users, PlusSquare } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-bold text-white">
              Pulse
            </span>
          </Link>

          {/* Desktop Links (explicit, no .map) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/5 transition"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <Link
              to="/create"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/5 transition"
            >
              <Edit3 className="w-4 h-4" />
              <span>Create Post</span>
            </Link>

            <Link
              to="/communities"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/5 transition"
            >
              <Users className="w-4 h-4" />
              <span>Communities</span>
            </Link>

            <Link
              to="/community/create"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white/90 hover:bg-white/20 transition"
            >
              <PlusSquare className="w-4 h-4" />
              <span>Create Community</span>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/5 focus:outline-none"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 backdrop-blur-lg px-6 py-5 space-y-3 border-t border-white/5">
            <Link
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/5"
              to="/"
            >
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" /> Home
              </div>
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/5"
              to="/create"
            >
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4" /> Create Post
              </div>
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/5"
              to="/communities"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" /> Communities
              </div>
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/5"
              to="/community/create"
            >
              <div className="flex items-center gap-2">
                <PlusSquare className="w-4 h-4" /> Create Community
              </div>
            </Link>
          </div>
        )}
      </nav>

      {/* spacer to prevent content hiding under sticky navbar on small devices */}
      <div className="h-20 md:h-16" />
    </>
  );
};

export default Navbar;
