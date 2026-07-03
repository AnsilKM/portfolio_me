"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Hero", href: "#top" },
  { label: "About", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 max-w-5xl w-[92%] z-50 rounded-full overflow-hidden transition-all duration-300 ${
          isScrolled
            ? "border border-[var(--border)] backdrop-blur-md py-3.5 shadow-md"
            : "border border-transparent py-4 bg-transparent"
        }`}
        style={{
          backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
        }}
      >
        {/* Scroll Progress Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left"
          style={{ scaleX }}
        />
        <div className="w-full px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#top")}
            className="navbar-logo font-display text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity"
          >
            Muhammed Ansil
          </a>

          {/* Desktop Nav & Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] link-underline pb-0.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu & Theme Toggle Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-[var(--text-primary)] hover:bg-[var(--accent-subtle)] rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Card inside floating header container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full mt-2 left-0 w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl shadow-xl z-40 md:hidden py-6 px-6 flex flex-col gap-4"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2 border-b border-[var(--border)] last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded border border-[var(--border)] opacity-20" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-subtle)] border border-[var(--border)] rounded-md transition-all cursor-pointer flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
