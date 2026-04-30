'use client';
import React, { useState } from 'react';
import Nav from './nav';
import Links from './links';
import { FaComputer, FaBars, FaXmark } from "react-icons/fa6";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-slate-800 text-white">
      
      {/* Main bar */}
      <div className="relative flex items-center justify-between px-6 py-4">

        {/* Left — icon + name */}
        <div className="flex items-center gap-3">
          <span className="text-3xl"><FaComputer /></span>
          <h1 className="text-lg font-bold">Dillon Tall</h1>
        </div>

        {/* Center — nav (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <Nav />
        </div>

        {/* Right — links + hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Links />
          </div>
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-slate-800 px-6 py-4 flex flex-col gap-4"
          onClick={() => setMenuOpen(false)}
        >
          <Nav />
          <Links />
        </div>
      )}

    </header>
  );
};

export default Header;