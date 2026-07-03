"use client";

import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import SkillTag from "../ui/SkillTag";
import { Smartphone, Layers, Workflow, Database, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Android Development",
    module: "01",
    icon: Smartphone,
    specialistSkills: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Hilt"],
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "XML",
      "MVVM",
      "Clean Architecture",
      "ViewModel",
      "Room",
      "Retrofit",
      "WorkManager",
      "ExoPlayer",
      "Hilt",
      "Dagger",
    ],
  },
  {
    category: "Flutter Development",
    module: "02",
    icon: Layers,
    specialistSkills: ["Flutter", "Dart", "Riverpod", "BLoC"],
    skills: [
      "Flutter",
      "Dart",
      "Riverpod",
      "BLoC",
      "Dio",
      "GoRouter",
      "Compose Multiplatform",
    ],
  },
  {
    category: "Multiplatform",
    module: "03",
    icon: Workflow,
    specialistSkills: ["Kotlin Multiplatform (KMP)"],
    skills: ["Kotlin Multiplatform (KMP)", "Ktor"],
  },
  {
    category: "Backend & Database",
    module: "04",
    icon: Database,
    specialistSkills: ["NestJS", "PostgreSQL", "Firebase"],
    skills: [
      "Firebase",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    category: "Tools & Infrastructure",
    module: "05",
    icon: Terminal,
    specialistSkills: ["Git", "Gradle"],
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "Google Play Console",
      "VS Code",
      "Gradle",
      "ADB",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="col-span-1 md:col-span-4">
          <h2 className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
            02 / Capabilities
          </h2>
          <h3 className="text-3xl font-bold font-display text-[var(--text-primary)]">
            Technical Arsenal
          </h3>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="w-full h-[1px] bg-[var(--border)] mb-6" />
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            A comprehensive overview of tools, languages, and patterns I use to deliver performant mobile and full-stack solutions. No arbitrary progress bars, just solid architectural mastery.
          </p>
        </div>
      </div>

      <div className="space-y-6 mt-10 max-w-4xl mx-auto">
        {SKILL_CATEGORIES.map((group, idx) => {
          const IconComponent = group.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 py-6 border-b border-[var(--border)]/40 last:border-b-0 items-start transition-all duration-300 hover:border-[var(--accent)]/30 group"
            >
              {/* Category info column */}
              <div className="w-full md:w-1/3 shrink-0 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--accent)] border border-[var(--border)] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:border-[var(--accent)]/30 transition-all duration-300">
                  <IconComponent size={15} />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-1">
                    MODULE // 0{group.module}
                  </span>
                  <h4 className="text-base font-bold font-display text-[var(--text-primary)] leading-snug">
                    {group.category}
                  </h4>
                </div>
              </div>
              
              {/* Skills Tags list column */}
              <div className="w-full md:w-2/3 flex flex-wrap gap-1.5 pt-0.5">
                {group.skills.map((skill) => {
                  const isSpecialist = group.specialistSkills.includes(skill);
                  return (
                    <SkillTag
                      key={skill}
                      label={skill}
                      isSpecialist={isSpecialist}
                    />
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
