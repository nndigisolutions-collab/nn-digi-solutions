"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
       <div onClick={closeMenu}>
  <Logo />
</div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#portfolio"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">

            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              About
            </a>

            <a
              href="#portfolio"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}