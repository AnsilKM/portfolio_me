import React from "react";

export interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export default function TimelineItem({
  role,
  company,
  period,
  bullets,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-10 pb-12 last:pb-0 group">
      {/* Vertical Line Connector */}
      <div className="absolute left-[5px] top-1.5 bottom-0 w-[2px] bg-[var(--border)] group-last:hidden" />

      {/* Stylized Node Dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />

      {/* Content */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
            {role}
          </h3>
          <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider bg-[var(--accent-subtle)] px-2.5 py-0.5 rounded-full md:self-center self-start">
            {period}
          </span>
        </div>
        <h4 className="text-sm font-semibold text-[var(--text-secondary)]">
          {company}
        </h4>

        {/* Bullets */}
        <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)] list-none pl-0">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="relative pl-5 leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[var(--accent)]">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
