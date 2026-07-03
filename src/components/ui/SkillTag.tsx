"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillTagProps {
  label: string;
  isSpecialist?: boolean;
}

export default function SkillTag({ label, isSpecialist = false }: SkillTagProps) {
  if (isSpecialist) {
    return (
      <motion.span
        whileHover={{ scale: 1.05, y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-tight bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/40 rounded-md shadow-[0_0_8px_rgba(130,201,30,0.08)] hover:bg-[var(--accent)]/20 transition-colors duration-200 cursor-default"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        {label}
      </motion.span>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-block px-3 py-1 text-xs font-mono tracking-tight bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)] rounded-md hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)]/30 hover:bg-[var(--bg-surface)] transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}
