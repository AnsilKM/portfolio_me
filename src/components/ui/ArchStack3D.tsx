"use client";

import React from "react";
import { motion } from "framer-motion";

// ─── Glass Panel Component ─────────────────────────────────────────────────
interface PanelProps {
  label?: string;
  sublabel?: string;
  badge?: string;
  code?: string[];
  style?: React.CSSProperties;
  small?: boolean;
}

function GlassPanel({ label, sublabel, badge, code, style, small }: PanelProps) {
  return (
    <div
      style={{
        position: "absolute",
        background:
          "linear-gradient(135deg, rgba(134,187,75,0.07) 0%, rgba(80,130,40,0.04) 100%)",
        border: "1px solid rgba(134,187,75,0.25)",
        borderRadius: small ? 8 : 12,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0 4px 24px rgba(134,187,75,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
        padding: small ? "6px 10px" : "10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Top shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(134,187,75,0.4), transparent)",
        }}
      />

      {badge && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: small ? 9 : 10,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "rgba(134,187,75,0.95)",
            textTransform: "uppercase",
            textShadow: "0 0 12px rgba(134,187,75,0.6)",
          }}
        >
          {badge}
        </span>
      )}

      {label && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: small ? 7 : 8,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "rgba(134,187,75,0.85)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      )}

      {sublabel && (
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 7,
            fontWeight: 600,
            color: "rgba(134,187,75,0.55)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {sublabel}
        </span>
      )}

      {code && (
        <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
          {code.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "monospace",
                fontSize: 6,
                color:
                  i % 3 === 0
                    ? "rgba(187,154,247,0.8)"
                    : i % 3 === 1
                    ? "rgba(122,162,247,0.7)"
                    : "rgba(134,187,75,0.5)",
                lineHeight: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── SVG Connection Lines ─────────────────────────────────────────────────
function ConnectionLines() {
  const phoneX = 195;
  const phoneY = 195;

  const lines = [
    // to top-left panels
    { x1: phoneX, y1: phoneY, x2: 65, y2: 115, cx1: 120, cy1: 80 },
    { x1: phoneX, y1: phoneY, x2: 30, y2: 175, cx1: 80, cy1: 120 },
    { x1: phoneX, y1: phoneY, x2: 28, y2: 265, cx1: 60, cy1: 220 },
    { x1: phoneX, y1: phoneY, x2: 78, y2: 340, cx1: 80, cy1: 310 },
    // to bottom-center panel
    { x1: phoneX, y1: phoneY, x2: 160, y2: 370, cx1: 170, cy1: 320 },
    // to top-right panels
    { x1: phoneX, y1: phoneY, x2: 298, y2: 90, cx1: 270, cy1: 75 },
    { x1: phoneX, y1: phoneY, x2: 330, y2: 158, cx1: 320, cy1: 110 },
    { x1: phoneX, y1: phoneY, x2: 345, y2: 235, cx1: 340, cy1: 195 },
    { x1: phoneX, y1: phoneY, x2: 330, y2: 308, cx1: 340, cy1: 275 },
    { x1: phoneX, y1: phoneY, x2: 300, y2: 362, cx1: 330, cy1: 345 },
  ];

  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
      viewBox="0 0 390 420"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(134,187,75,0)" />
          <stop offset="40%" stopColor="rgba(134,187,75,0.5)" />
          <stop offset="100%" stopColor="rgba(134,187,75,0.1)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {lines.map((line, i) => (
        <g key={i} filter="url(#glow)">
          <path
            d={`M ${line.x1} ${line.y1} Q ${line.cx1} ${line.cy1} ${line.x2} ${line.y2}`}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            opacity="0.7"
          />
          {/* endpoint dot */}
          <circle cx={line.x2} cy={line.y2} r="2" fill="rgba(134,187,75,0.9)" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          {/* start dot at phone */}
          <circle cx={line.x1} cy={line.y1} r="1.5" fill="rgba(134,187,75,0.6)" />
        </g>
      ))}
    </svg>
  );
}

// ─── Mini Phone Component ─────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -52%)",
        width: 70,
        height: 128,
        background: "linear-gradient(180deg, #0d1a0d 0%, #0a1208 100%)",
        border: "1.5px solid rgba(134,187,75,0.5)",
        borderRadius: 14,
        boxShadow:
          "0 0 30px rgba(134,187,75,0.2), 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(134,187,75,0.15)",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          width: 22,
          height: 5,
          background: "rgba(134,187,75,0.25)",
          borderRadius: 3,
          margin: "5px auto",
        }}
      />

      {/* Screen content */}
      <div style={{ padding: "4px 5px", display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(134,187,75,0.9), rgba(50,100,30,0.7))",
              boxShadow: "0 0 8px rgba(134,187,75,0.4)",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ height: 2, background: "rgba(134,187,75,0.3)", borderRadius: 1, width: "70%" }} />
            <div style={{ height: 2, background: "rgba(134,187,75,0.2)", borderRadius: 1, width: "90%" }} />
          </div>
          {/* Bell */}
          <svg width="8" height="8" viewBox="0 0 20 20" fill="rgba(134,187,75,0.6)">
            <path d="M10 2a6 6 0 00-6 6v2.5L2 12v1h16v-1l-2-1.5V8a6 6 0 00-6-6z" />
          </svg>
        </div>

        {/* Card grid */}
        <div style={{ display: "flex", gap: 3, height: 36 }}>
          <div
            style={{
              flex: 1.4,
              background: "rgba(134,187,75,0.1)",
              border: "1px solid rgba(134,187,75,0.2)",
              borderRadius: 5,
            }}
          />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ flex: 1, background: "rgba(134,187,75,0.07)", border: "1px solid rgba(134,187,75,0.15)", borderRadius: 4 }} />
            <div style={{ flex: 1, background: "rgba(134,187,75,0.07)", border: "1px solid rgba(134,187,75,0.15)", borderRadius: 4 }} />
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: 2, justifyContent: "center" }}>
          {[1, 0, 0].map((a, i) => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: a ? "rgba(134,187,75,0.9)" : "rgba(134,187,75,0.2)" }} />
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ flex: 1, height: 11, background: "rgba(134,187,75,0.45)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 4, fontFamily: "monospace", fontWeight: 800, color: "#0a1208", letterSpacing: "0.3px" }}>LOGIN</span>
          </div>
          <div style={{ flex: 1, height: 11, border: "1px solid rgba(134,187,75,0.4)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 4, fontFamily: "monospace", fontWeight: 700, color: "rgba(134,187,75,0.8)", letterSpacing: "0.3px" }}>EXPLORE</span>
          </div>
        </div>

        {/* Nav bar */}
        <div style={{ display: "flex", justifyContent: "space-around", paddingTop: 4, borderTop: "1px solid rgba(134,187,75,0.1)" }}>
          {["⌂", "⊞", "♡", "⊙"].map((icon, i) => (
            <span key={i} style={{ fontSize: 6, color: i === 0 ? "rgba(134,187,75,0.9)" : "rgba(134,187,75,0.35)" }}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────
export default function ArchStack3D() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(134,187,75,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Float animation wrapper */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "relative", width: 390, height: 420 }}
      >
        {/* SVG Glow lines */}
        <ConnectionLines />

        {/* ── LEFT SIDE PANELS ── */}

        {/* Top-left code panel 1 (small, behind) */}
        <GlassPanel
          code={[
            '{ "resp": 200 }',
            "return data;",
            "catch(err) {}",
          ]}
          style={{ left: 4, top: 68, width: 90, height: 90, transform: "rotateY(8deg) rotateX(-5deg)", opacity: 0.7 }}
        />

        {/* Top-left code panel 2 */}
        <GlassPanel
          code={[
            'const res = fetch()',
            'headers: auth',
            'body: payload',
            'return json()',
          ]}
          style={{ left: 8, top: 148, width: 100, height: 96, transform: "rotateY(6deg) rotateX(-3deg)", opacity: 0.85 }}
        />

        {/* Left big panel - API CONTROLLER */}
        <GlassPanel
          label="API CONTROLLER"
          sublabel="DATA FETCHING"
          code={[
            "const ctrl = new Api()",
            "auth.token = jwt",
            "add.item(payload)",
            "return await ctrl",
          ]}
          style={{ left: 12, top: 250, width: 130, height: 108 }}
        />

        {/* Bottom-left panel — PAYMENT GATEWAY */}
        <GlassPanel
          badge="PAYMENT"
          label="GATEWAY"
          code={["stripe.charge()", "verify.sig()"]}
          style={{ left: 68, top: 350, width: 110, height: 62 }}
        />

        {/* ── RIGHT SIDE PANELS ── */}

        {/* Top GET badge */}
        <GlassPanel
          badge="GET"
          style={{ left: 268, top: 52, width: 58, height: 32 }}
          small
        />

        {/* Top-right code panel */}
        <GlassPanel
          code={[
            'GET /api/user',
            'Authorization:',
            'Bearer token',
          ]}
          style={{ left: 296, top: 88, width: 88, height: 76, transform: "rotateY(-8deg)", opacity: 0.8 }}
        />

        {/* Right panel — POST badge */}
        <GlassPanel
          badge="POST"
          style={{ left: 322, top: 168, width: 58, height: 32 }}
          small
        />

        {/* Right panel — REQUEST */}
        <GlassPanel
          badge="REQUEST"
          code={["body: { id, amt }", "headers: token"]}
          style={{ left: 300, top: 210, width: 84, height: 60 }}
          small
        />

        {/* Right panel — AUTHENTICATION */}
        <GlassPanel
          label="AUTHENTICATION"
          code={["jwt.verify(token)", "bcrypt.hash(pw)"]}
          style={{ left: 298, top: 282, width: 90, height: 64 }}
        />

        {/* Bottom-right — USER DATA / CLOUD */}
        <GlassPanel
          label="USER DATA"
          sublabel="CLOUD SERVICES  DATA FETCH"
          code={["response.body()", "cache.set(key)"]}
          style={{ left: 270, top: 360, width: 110, height: 58 }}
        />

        {/* ── CENTER PHONE ── */}
        <PhoneMockup />

        {/* Phone bottom GET badge */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "68%",
            transform: "translate(-50%, 0)",
            background: "linear-gradient(135deg, rgba(134,187,75,0.12), rgba(80,130,40,0.08))",
            border: "1px solid rgba(134,187,75,0.35)",
            borderRadius: 8,
            padding: "5px 14px",
            fontFamily: "monospace",
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.1em",
            color: "rgba(134,187,75,0.95)",
            textTransform: "uppercase",
            textShadow: "0 0 10px rgba(134,187,75,0.5)",
            zIndex: 11,
          }}
        >
          GET
        </div>
      </motion.div>
    </div>
  );
}
