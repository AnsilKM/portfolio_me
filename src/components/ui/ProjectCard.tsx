"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import SkillTag from "./SkillTag";

export interface ProjectCardProps {
  name: string;
  isFeatured?: boolean;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  hideScreenshot?: boolean;
  imageSrcs?: any[];
  customWidgetType?: "sdk" | "attendance" | "recoverx";
  imageContain?: boolean;
}

export default function ProjectCard({
  name,
  isFeatured = false,
  description,
  techStack,
  githubUrl,
  demoUrl,
  hideScreenshot = false,
  imageSrcs,
  customWidgetType = "sdk",
  imageContain = false,
}: ProjectCardProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Close modal on Escape key, prevent background scrolling
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!imageSrcs || imageSrcs.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? imageSrcs.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!imageSrcs || imageSrcs.length === 0) return;
    setActiveIndex((prev) => (prev === imageSrcs.length - 1 ? 0 : prev + 1));
  };

  // Structured key achievements/highlights list for details modal
  const getProjectFeatures = (projectName: string) => {
    switch (projectName) {
      case "Gym Management Ecosystem":
        return [
          "Full-stack modular architecture utilizing KMP for ~90% shared business logic across mobile platforms.",
          "High-performance NestJS backend database pipeline using PostgreSQL & robust JWT role authorization.",
          "Administrative command panel built in Next.js showcasing operational and member statistics charts.",
          "Polished, declarations-based screens rendered across native iOS and Android modules."
        ];
      case "Smart Attendance System":
        return [
          "On-device face scan matching using accurate Google ML Kit face recognition algorithms.",
          "Double-verification precise geofencing structures securing punch sites.",
          "Offline caches holding check-ins on Room database arrays with background cloud sync.",
          "Robust Node.js endpoints with JSON validation models preventing proxy manipulation."
        ];
      case "Cartify — Shopping Cart App":
        return [
          "Standard Android architecture separation (Clean Architecture + MVVM) keeping layers decoupled.",
          "Room persistence database structures mapping local products caching pipelines.",
          "Compile-time type-safe dependency injections using Google Dagger Hilt libraries.",
          "Responsive, micro-animated user interfaces styled natively inside Jetpack Compose."
        ];
      case "RecoverX — Loan Recovery App":
        return [
          "State management updates governed securely via advanced Riverpod notifier controllers.",
          "On-device receipt graphic compilation and file output exports on asynchronous scopes.",
          "Highly organized navigation workflows implemented through declarative GoRouter rules.",
          "API interceptor systems handling JWT attachment, token refresh, and network retry hooks."
        ];
      case "Extraa — B2C FinTech App":
        return [
          "Shared Kotlin Multiplatform (KMP) packages governing serializations and remote API calls.",
          "Secure credential verification storing access tokens in system-level keystores.",
          "Ktor async request loops managing JSON payloads across background thread engines.",
          "Custom multiplatform typography styling and theme configurations shared across modules."
        ];
      case "Custom Cross-Platform SDK":
        return [
          "Decoupled multi-build script system releasing Android wrappers and Web widgets.",
          "Encapsulated API callers locking background sync operations on network triggers.",
          "Self-contained script loader routines complying with iframe cross-site isolation rules.",
          "Reactive UI integrations communicating API responses via Kotlin Coroutines and Flows."
        ];
      default:
        return [
          "Production-grade mobile layouts adhering strictly to SOLID development principles.",
          "Modular structures separating domain, data, and presentation tiers for testability.",
          "Modern styling parameters prioritizing responsive ratios and smooth animations."
        ];
    }
  };
  
  // Custom interactive mock IDE component for SDKs and architectural components
  const renderIdeWidget = (type: "sdk" | "attendance" | "recoverx") => {
    let filename = "KmpSharedSDK.kt";
    let codeContent = null;

    if (type === "attendance") {
      filename = "FaceAnalyzer.kt";
      codeContent = (
        <div>
          <span className="text-[#F7768E]">import</span> com.google.mlkit.vision.face.*<br />
          <br />
          <span className="text-[#9ECE6A]">@Stable</span><br />
          <span className="text-[#E0AF68]">class</span> <span className="text-[#7AA2F7]">FaceAnalyzer</span>(onFace: (Face) -&gt; Unit) &#123;<br />
          &nbsp;&nbsp;<span className="text-[#BB9AF7]">private val</span> options = FaceDetectorOptions.Builder()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;.setPerformanceMode(PERFORMANCE_MODE_ACCURATE)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;.setClassificationMode(CLASSIFICATION_MODE_ALL)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;.build()<br />
          <br />
          &nbsp;&nbsp;<span className="text-[#BB9AF7]">fun</span> <span className="text-[#7AA2F7]">analyze</span>(image: InputImage) &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;detector.process(image)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.addOnSuccessListener &#123; faces -&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;faces.firstOrNull()?.let(onFace)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;
        </div>
      );
    } else if (type === "recoverx") {
      filename = "payment_notifier.dart";
      codeContent = (
        <div>
          <span className="text-[#F7768E]">import</span> 'package:flutter_riverpod/flutter_riverpod.dart';<br />
          <br />
          <span className="text-[#E0AF68]">class</span> <span className="text-[#7AA2F7]">PaymentNotifier</span> <span className="text-[#BB9AF7]">extends</span> StateNotifier&lt;PaymentState&gt; &#123;<br />
          &nbsp;&nbsp;PaymentNotifier(<span className="text-[#BB9AF7]">this</span>.api) : <span className="text-[#BB9AF7]">super</span>(PaymentState.idle());<br />
          <br />
          &nbsp;&nbsp;<span className="text-[#BB9AF7]">Future</span>&lt;<span className="text-[#BB9AF7]">void</span>&gt; <span className="text-[#7AA2F7]">submitPayment</span>(<span className="text-[#BB9AF7]">double</span> amount) <span className="text-[#BB9AF7]">async</span> &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;state = PaymentState.loading();<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BB9AF7]">try</span> &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BB9AF7]">final</span> res = <span className="text-[#BB9AF7]">await</span> api.process(amount);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state = PaymentState.success(res);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-[#BB9AF7]">catch</span> (e) &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state = PaymentState.error(e.toString());<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;
        </div>
      );
    } else {
      filename = "KmpSharedSDK.kt";
      codeContent = (
        <div>
          <span className="text-[#F7768E]">import</span> io.ktor.client.*<br />
          <span className="text-[#F7768E]">import</span> io.ktor.client.request.*<br />
          <br />
          <span className="text-[#9ECE6A]">@Serializable</span><br />
          <span className="text-[#E0AF68]">class</span> <span className="text-[#7AA2F7]">MobileSDK</span>(<span className="text-[#BB9AF7]">private val</span> host: String) &#123;<br />
          &nbsp;&nbsp;<span className="text-[#BB9AF7]">private val</span> client = HttpClient() &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;install(ContentNegotiation) &#123; json() &#125;<br />
          &nbsp;&nbsp;&#125;<br />
          <br />
          &nbsp;&nbsp;<span className="text-[#BB9AF7]">suspend fun</span> <span className="text-[#7AA2F7]">syncOfflineData</span>() = ioOps &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BB9AF7]">val</span> res = client.post(<span className="text-[#9ECE6A]">"$host/sync"</span>)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;db.save(res.body())<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-[#0B0D0F] font-mono text-[10px] sm:text-xs text-[#A9B1D6] flex flex-col overflow-hidden select-none">
        {/* IDE Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#12161A] border-b border-[var(--border)]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[9px] font-medium text-[var(--text-secondary)] tracking-tight">{filename}</span>
          <div className="w-6" />
        </div>
        {/* Editor Content */}
        <div className="p-4 flex-grow overflow-x-auto leading-relaxed text-[var(--text-secondary)] whitespace-pre font-mono">
          {codeContent}
        </div>
      </div>
    );
  };

  const cardContent = (
    <div className="p-6 md:p-8 flex flex-col justify-between flex-grow h-full">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <h3 className="text-xl font-bold font-display text-[var(--text-primary)] leading-tight tracking-tight">
            {name}
          </h3>
          {isFeatured && (
            <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[var(--accent)] text-[var(--bg-primary)] rounded-md">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed font-body">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech) => (
            <SkillTag key={tech} label={tech} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]/40">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-all py-1.5 px-3 rounded border border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={13} />
              <span>Code</span>
            </a>
          ) : (
            <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider opacity-60">
              Private Platform
            </span>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40 transition-all py-1.5 px-3 rounded border border-[var(--accent)]/20 bg-[var(--accent-subtle)] ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={13} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const cardMedia = (
    <div className="relative overflow-hidden group h-full min-h-[260px] w-full border-[var(--border)] bg-gradient-to-br from-[var(--bg-dark)] to-[#121417] flex items-center justify-center">
      {hideScreenshot ? (
        renderIdeWidget(customWidgetType)
      ) : imageSrcs && imageSrcs.length > 0 ? (
        imageContain ? (
          /* Flat screenshot display — no phone frame */
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[var(--border)]/40 shadow-lg">
              <Image
                src={imageSrcs[activeIndex]}
                alt={`${name} screenshot ${activeIndex + 1}`}
                fill
                sizes="400px"
                className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.02]"
                priority={isFeatured}
              />
            </div>
            {/* Chevron controls */}
            {imageSrcs.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 flex items-center justify-center cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 flex items-center justify-center cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={14} />
                </button>
                {/* Indicator Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                  {imageSrcs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); e.preventDefault(); setActiveIndex(idx); }}
                      className={`w-1 h-1 rounded-full transition-all cursor-pointer ${
                        idx === activeIndex ? "bg-[var(--accent)] scale-110" : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
        <div className="phone-mockup-container">
          <div className="phone-mockup phone-mockup-large">
            <div className="phone-screen phone-screen-large">
              <Image
                src={imageSrcs[activeIndex]}
                alt={`${name} screenshot ${activeIndex + 1}`}
                fill
                sizes="200px"
                className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-103"
                priority={isFeatured}
              />
            </div>
          </div>

          {/* Chevron controls */}
          {imageSrcs.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 flex items-center justify-center cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 flex items-center justify-center cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={14} />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                {imageSrcs.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setActiveIndex(idx);
                    }}
                    className={`w-1 h-1 rounded-full transition-all cursor-pointer ${
                      idx === activeIndex ? "bg-[var(--accent)] scale-110" : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[var(--bg-dark)]/50">
          <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">
            Module Screenshot
          </span>
        </div>
      )}
    </div>
  );

  const renderModal = () => {
    const features = getProjectFeatures(name);
    const hasMultipleImages = imageSrcs && imageSrcs.length > 1;

    return (
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0B0C0E]/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#121417]/80 hover:bg-[#1C1F26] border border-[var(--border)] text-[var(--text-primary)] cursor-pointer transition-colors shadow"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Left Column: Visual Media/Mockup Area */}
              <div className="w-full md:w-1/2 bg-gradient-to-br from-[var(--bg-dark)] to-[#121417] flex flex-col items-center justify-center p-6 relative border-b md:border-b-0 md:border-r border-[var(--border)] overflow-hidden shrink-0">
                {hideScreenshot ? (
                  <div className="w-full h-full min-h-[250px] p-2 flex items-center justify-center">
                    {renderIdeWidget(customWidgetType)}
                  </div>
                ) : imageSrcs && imageSrcs.length > 0 ? (
                  <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                    <div className="relative flex-grow flex items-center justify-center w-full">
                      {imageContain ? (
                        /* Flat screenshot in modal */
                        <div className="relative w-full h-full rounded-xl overflow-hidden border border-[var(--border)]/40 shadow-lg">
                          <Image
                            src={imageSrcs[activeIndex]}
                            alt={`${name} detail screenshot ${activeIndex + 1}`}
                            fill
                            sizes="500px"
                            className="object-cover"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="phone-mockup phone-mockup-large">
                          <div className="phone-screen phone-screen-large">
                            <Image
                              src={imageSrcs[activeIndex]}
                              alt={`${name} detail screenshot ${activeIndex + 1}`}
                              fill
                              sizes="280px"
                              className="object-cover"
                              priority
                            />
                          </div>
                        </div>
                      )}

                      {/* Chevrons overlay */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center cursor-pointer transition-colors"
                            aria-label="Prev image"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center cursor-pointer transition-colors"
                            aria-label="Next image"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail rows */}
                    {hasMultipleImages && (
                      <div className="flex gap-2 max-w-full overflow-x-auto py-1 shrink-0 scrollbar-none">
                        {imageSrcs.map((src, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`relative w-9 h-16 rounded border-2 overflow-hidden shrink-0 transition-all cursor-pointer ${
                              idx === activeIndex ? "border-[var(--accent)] scale-105" : "border-[var(--border)] opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="36px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="font-mono text-xs text-[var(--text-secondary)]">No screenshots available</div>
                )}
              </div>

              {/* Right Column: Text Information & Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto h-full bg-[var(--bg-surface)]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-mono tracking-widest text-[var(--accent)] font-bold uppercase">
                      Project Details
                    </span>
                    {isFeatured && (
                      <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider bg-[var(--accent)]/15 text-[var(--accent)] rounded border border-[var(--accent)]/20">
                        Featured Work
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[var(--text-primary)] leading-tight tracking-tight mb-4">
                    {name}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed font-body">
                    {description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-wider mb-3">
                      Key Capabilities & Highlights
                    </h4>
                    <ul className="space-y-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                          <span className="text-[var(--accent)] shrink-0 mt-0.5">&middot;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {techStack.map((tech) => (
                        <SkillTag key={tech} label={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]/40">
                    {githubUrl ? (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-all py-2 px-4 rounded border border-[var(--border)] cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                        <span>View Source Code</span>
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider opacity-60">
                        Private Repository
                      </span>
                    )}

                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40 transition-all py-2 px-4 rounded border border-[var(--accent)]/20 bg-[var(--accent-subtle)] ml-auto cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  if (isFeatured) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col md:flex-row h-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(130,201,30,0.03)] hover:border-[var(--accent)]/30 group cursor-pointer hover:scale-[1.005]"
        >
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            {cardContent}
          </div>
          <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-[var(--border)]">
            {cardMedia}
          </div>
        </motion.div>
        {renderModal()}
      </>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setIsModalOpen(true)}
        className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col md:flex-row h-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(130,201,30,0.03)] hover:border-[var(--accent)]/30 group cursor-pointer hover:scale-[1.005]"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          {cardContent}
        </div>
        <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-[var(--border)]">
          {cardMedia}
        </div>
      </motion.div>
      {renderModal()}
    </>
  );
}
