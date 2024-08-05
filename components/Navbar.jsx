"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Lex Legal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
              <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
              <NavLink href="#faq" isScrolled={isScrolled}>FAQ</NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isScrolled }) {
  return (
    <Link href={href} className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-gray-700'}`}>
      {children}
    </Link>
  );
}