"use client";

import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

// Static imports for screenshot assets
import gymHome from "@/assets/projects/gym_home.jpeg";
import gymMember from "@/assets/projects/gym_member.jpeg";
import gymPlan from "@/assets/projects/gym_plan.jpeg";
import gymProfile from "@/assets/projects/gym_profile.jpeg";

import cartifyHome from "@/assets/projects/cartify_home.jpeg";
import cartfyCart from "@/assets/projects/cartfy_cart.jpeg";

import extraaSplash from "@/assets/projects/extraa_splash.jpeg";
import extraaLogin from "@/assets/projects/extraa_login.jpeg";
import extraaHome from "@/assets/projects/extraa_home.jpeg";
import extraaRewrds from "@/assets/projects/extraa_rewrds.jpeg";



import recoverxPayment from "@/assets/projects/recoverx_payment_new.jpg";
import recoverxDashboard from "@/assets/projects/recoverx_dashboard_new.jpg";
import recoverxProfile from "@/assets/projects/recoverx_profile_new.jpg";
import chatSdkBlue from "@/assets/projects/chat_sdk_blue.png";



const PROJECTS_DATA = [
  {
    name: "Gym Management Ecosystem",
    isFeatured: true,
    description: "Full-stack gym platform. ~90% shared business logic across Android/iOS via KMP. NestJS backend, PostgreSQL, Next.js admin dashboard, JWT auth, RBAC.",
    techStack: ["Flutter", "KMP", "NestJS", "PostgreSQL", "Next.js"],
    githubUrl: "https://github.com/AnsilKM/smart_attendance_system",
    imageSrcs: [gymHome, gymMember, gymPlan, gymProfile],
  },

  {
    name: "Cartify — Shopping Cart App",
    isFeatured: false,
    description: "Android e-commerce app with Clean Architecture + MVVM, Room persistence, Retrofit API, Hilt DI.",
    techStack: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Room", "Retrofit", "Hilt"],
    githubUrl: "https://github.com/AnsilKM/Cartify",
    imageSrcs: [cartifyHome, cartfyCart],
  },
  {
    name: "RecoverX — Loan Recovery App",
    isFeatured: false,
    description: "Modular loan recovery app. Multi-step payment flows, automated receipt generation via RepaintBoundary, real-time dashboards with offline sync.",
    techStack: ["Flutter", "Dio", "GoRouter", "Riverpod"],
    imageSrcs: [recoverxDashboard, recoverxPayment, recoverxProfile],
  },
  {
    name: "Extraa — B2C FinTech App",
    isFeatured: false,
    description: "Cross-platform FinTech app. KMP shared logic across Android/iOS, secure JWT auth, Ktor REST, Clean Architecture.",
    techStack: ["KMP", "Jetpack Compose", "Ktor", "Koin", "JWT"],
    imageSrcs: [extraaSplash, extraaLogin, extraaHome, extraaRewrds],
  },
  {
    name: "Realtime Chat SDK",
    isFeatured: false,
    description: "Cross-platform real-time chat SDK with WebSocket messaging, read receipts, media sharing, and offline sync. Embeddable in Android & Web.",
    techStack: ["KMP", "Jetpack Compose", "WebSocket", "Firebase", "Cloud Functions"],
    imageSrcs: [chatSdkBlue],
    imageContain: true,
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="col-span-1 md:col-span-4">
          <h2 className="text-sm font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
            04 / Works
          </h2>
          <h3 className="text-3xl font-bold font-display text-[var(--text-primary)]">
            Featured Projects
          </h3>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="w-full h-[1px] bg-[var(--border)] mb-6" />
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            A curated selection of client engagements, personal products, and SDK concepts demonstrating expertise in building scalable, modular applications.
          </p>
        </div>
      </div>

      {/* Projects Grid — all cards full-width horizontal layout */}
      <div className="flex flex-col gap-8 mt-10">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard
              name={project.name}
              isFeatured={project.isFeatured}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              imageSrcs={(project as any).imageSrcs}
              hideScreenshot={(project as any).hideScreenshot}
              customWidgetType={(project as any).customWidgetType}
              imageContain={(project as any).imageContain}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
