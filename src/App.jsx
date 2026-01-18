import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Radar,
  Factory,
  ShieldCheck,
  Activity,
  MapPin,
  Phone,
  FileText,
  GraduationCap,
  Award,
  BookOpen,
  Layers,
  Sparkles,
  Globe,
  Boxes,
  Bluetooth,
  MessagesSquare,
} from "lucide-react";

/**
 * RANDHIR DINESH — GLOBAL PORTFOLIO (React + Tailwind) — CYBER NEON (B)
 * --------------------------------------------------------------------
 * INSTALL:
 *   npm i framer-motion lucide-react
 *
 * RESUME:
 *   Put your PDF at: /public/Randhir_Dinesh_Resume.pdf
 */

// === LINKS / CONTACT ===
const NAME = "Randhir Dinesh";
const LOCATION = "Dubai, UAE";
const EMAIL_ADDR = "randhirdinesh123@gmail.com";
const PHONE_NUM = "+971557960058";
const EMAIL = `mailto:${EMAIL_ADDR}`;
const PHONE = `tel:${PHONE_NUM}`;

const RESUME_URL = "/Randhir_Dinesh_Resume.pdf";
const GITHUB_URL = "https://github.com/randhirdinesh";
const LINKEDIN_URL = "https://linkedin.com/in/randhirdinesh";
const PORTFOLIO_URL = "https://randhirdinesh.github.io";

// === CONTENT ===
const headline = {
  primary: "I build real-world Robotics & AI systems",
  accent: "designed for deployment — not demos.",
  sub:
    "Robotics & Computer Vision Engineer specializing in autonomous systems, edge AI, and production-grade perception — built to operate reliably in airports, industrial environments, and real-world conditions.",
};

const skillPills = [
  "ROS2",
  "SLAM",
  "Navigation",
  "Sensor Fusion",
  "YOLO / OpenCV",
  "Transformers",
  "TensorFlow",
  "PyTorch",
  "Edge AI",
  "Jetson",
  "CUDA",
  "IoT / MQTT",
  "microROS",
  "Isaac Sim",
];

const systems = [
  {
    id: "sandblasting",
    icon: Factory,
    title: "Autonomous Industrial Sandblasting Robot",
    subtitle:
      "AI-driven rust detection + autonomy stack for industrial surface treatment.",
    tags: ["ROS2", "Edge AI", "SLAM", "Industrial"],
    bullets: [
      "Developed AI-powered autonomous robotic systems for sandblasting & rust detection (efficiency +35%).",
      "Implemented ROS2-based SLAM navigation (localization accuracy +30% in harsh industrial environments).",
      "Integrated Edge AI + IoT automation (manual intervention −50%).",
    ],
  },
  {
    id: "airport-cargo-platform",
    icon: Boxes,
    title: "Airport Cargo Counting System (Operational Platform)",
    subtitle:
      "Airport-scale cargo counting & validation pipeline built for reliability, traceability, and integration.",
    tags: ["Computer Vision", "Ops", "Integration", "Airports"],
    bullets: [
      "Designed an end-to-end counting flow aligned to airport operations (events → capture → inference → response).",
      "Built for determinism: consistent latency, clear logging, and repeatable results per cargo event.",
      "Production focus: error prevention, edge-case handling, and audit-friendly outputs.",
    ],
  },
  {
    id: "airport-counting",
    icon: Radar,
    title: "Airport Drum / Pallet Detection & Counting",
    subtitle:
      "Event-triggered, single-frame inference pipeline engineered for operational correctness.",
    tags: ["YOLOv8", "RTSP", "MQTT", "Production"],
    bullets: [
      "Built event-driven vision triggered by barcode/MQTT for deterministic counting (no brute-force streaming).",
      "Applied ROI polygon masking to hard-block off-belt detections and reduce false positives.",
      "Designed for airport-grade stability: predictable latency, logging, and repeatable outputs.",
    ],
  },
  {
    id: "ble-airport",
    icon: Bluetooth,
    title: "BLE IPS for Airports (People / Asset Positioning)",
    subtitle:
      "Real-time indoor positioning using BLE readers + ML logic for stable zone/coordinate estimation.",
    tags: ["BLE", "MQTT", "Localization", "Airports"],
    bullets: [
      "Built MQTT ingestion with temporal aggregation (1-second snapshots) to stabilize noisy BLE RSSI patterns.",
      "Noise-aware filtering and feature engineering to reduce volatility across terminals / corridors.",
      "Designed for scalable deployment: calibration workflow, monitoring, and continuous improvement loop.",
    ],
  },
  {
    id: "ble-ips",
    icon: Activity,
    title: "BLE Indoor Positioning System (IPS)",
    subtitle:
      "Real-time indoor positioning from noisy BLE signals using filtering + ML localization logic.",
    tags: ["IoT", "Signal", "ML", "Airports"],
    bullets: [
      "Built MQTT ingestion + 1-second signal snapshots for stable temporal features.",
      "Noise-aware aggregation and filtering to reduce volatility in real environments.",
      "Designed to improve accuracy incrementally as data volume and ground truth grows.",
    ],
  },
  {
    id: "llm-chatbot",
    icon: MessagesSquare,
    title: "Offline Knowledge Chatbot (LLM) for Operations",
    subtitle:
      "A production-friendly chatbot that answers strictly from available documentation (grounded responses).",
    tags: ["LLM", "RAG", "Offline", "Enterprise"],
    bullets: [
      "Designed a grounded Q&A workflow: retrieve → cite → answer, with guardrails to prevent hallucinations.",
      "Optimized for offline / on-prem use: local embeddings, document chunking, and deterministic prompting.",
      "Use-cases: troubleshooting guides, SOP navigation, and incident response support for field teams.",
    ],
  },
];

const experience = [
  {
    company: "Velath Engineering International FZE",
    role: "Research & Development Engineer",
    location: "Sharjah, UAE",
    time: "Dec 2024 – Present",
    points: [
      "Developed AI-powered autonomous robotic systems for industrial sandblasting & rust detection (efficiency +35%).",
      "Designed Edge-Aware AI for rust detection using Hybrid Transformers + Thermal Imaging (inspection time −40%).",
      "Implemented ROS2-based SLAM navigation (localization accuracy +30% in harsh environments).",
      "Integrated Edge AI & IoT-based automation (manual intervention −50%).",
    ],
  },
  {
    company: "UST Global",
    role: "Research Engineer (R&D)",
    location: "Trivandrum, Kerala",
    time: "Mar 2023 – Sept 2024",
    points: [
      "Developed autonomous mobile robots for warehouse automation (inventory tracking +30%).",
      "Built SLAM navigation using RTAB-Map + EKF (95% real-time localization accuracy).",
      "Designed AI-powered drones for traffic violation detection & precision agriculture (efficiency +25%).",
    ],
  },
  {
    company: "Freelance Robotics Developer & Data Science Consultant",
    role: "Robotics / AI Consultant",
    location: "Remote",
    time: "Jun 2021 – Mar 2023",
    points: [
      "Designed ML algorithms & AI-driven automotive/logistics systems.",
      "Developed edge ML models for smart healthcare & IoT.",
      "Optimized inference on embedded systems (latency −20%).",
    ],
  },
];

const achievements = [
  {
    icon: Award,
    title: "Mentorship",
    text: "Mentored 10+ final-year students (IITs / BITS) in AI & Robotics.",
  },
  {
    icon: Sparkles,
    title: "Campus Placement Coordinator",
    text: "Facilitated record placements for master’s students (CET).",
  },
  {
    icon: Award,
    title: "National Competition Finalist",
    text: "3rd Runner-Up — Swadarsh 2023 (CDAC & TIHAN), among 146 teams.",
  },
  {
    icon: BookOpen,
    title: "Reviewer",
    text: "Springer Nature Reviewer — AI & Robotics research papers.",
  },
];

const publications = [
  {
    title:
      "Enhanced YOLOv8-Driven Traffic Rule Violation Detection with ROS-Integrated Autonomous Drone Navigation",
    venue: "IEEE RAICS 2024",
  },
  {
    title:
      "Autonomous IoT-Integrated Harnessing YOLOv8 Algorithm and Micro-Navigation for Precision Agriculture",
    venue: "IEEE RAICS 2024",
  },
  {
    title: "Waste Detection and Classification using YOLO Algorithm and Sensors",
    venue: "IEEE ICST 2023 (BITS Pilani)",
  },
  {
    title: "Autonomous Crop Disease Detection & Treatment System",
    venue: "Journal in Intelligent Service Robotics (Springer) — Under Review (Jan 2025)",
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "M.Tech — Robotics & Automation",
    meta: "College of Engineering, Trivandrum • 2023",
  },
  {
    icon: GraduationCap,
    title: "B.Tech — Mechanical Engineering",
    meta: "Vimal Jyothi Engineering College • 2021",
  },
  {
    icon: FileText,
    title: "Certifications / Ongoing",
    meta: "CEng (IET) • AWS ML Specialty (Ongoing) • Professional Certification in ROS & Robotics AI",
  },
];

const languages = ["English (Expert)", "Malayalam (Expert)", "Hindi (Fluent)", "Arabic (Basic)"];
const extra = ["Valid UAE Driving License", "Flexible, keen learner, adaptable"];

// === UI helpers ===
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const GlassCard = ({ className, children }) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className={cn(
      "relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl",
      "transition hover:border-white/15 hover:bg-white/7",
      className
    )}
  >
    {children}
  </motion.div>
);

const Anchor = ({ href, children, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={cn(
      "group relative text-sm font-semibold transition px-2 py-1",
      active ? "text-white" : "text-white/70 hover:text-white"
    )}
  >
    <span className="relative z-[1]">{children}</span>
    <span
      aria-hidden
      className={cn(
        "absolute left-2 right-2 bottom-0 h-px origin-left rounded-full",
        "bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400",
        active
          ? "scale-x-100 opacity-100"
          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100",
        "transition duration-300"
      )}
    />
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 rounded-lg opacity-0 blur-md",
        "bg-gradient-to-r from-cyan-500/15 via-violet-500/10 to-fuchsia-500/15",
        active ? "opacity-100" : "group-hover:opacity-100",
        "transition duration-300"
      )}
    />
  </a>
);

function Stat({ label, value, suffix = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const glow = useTransform(spring, [0, 1], [0.25, 0.6]);

  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 p-5"
      style={!prefersReducedMotion ? { boxShadow: "0 0 0 1px rgba(255,255,255,0.03)" } : undefined}
    >
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">
        {value}
        {suffix}
      </div>
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-fuchsia-400/40"
          style={{ opacity: glow }}
        />
      )}
    </motion.div>
  );
}

function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <style>{`
        @keyframes rd-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070A13] via-transparent to-[#070A13]" />
      <div
        className="flex w-[200%] gap-3 py-3"
        style={{ animation: "rd-marquee 18s linear infinite" }}
      >
        {[...items, ...items].map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="mx-1 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/35 via-purple-500/25 to-fuchsia-500/35 blur-3xl"
        animate={{ y: [0, 18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-240px] right-[-180px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-sky-500/18 to-violet-500/28 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[35%] left-[-240px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-blue-500/22 via-indigo-500/18 to-pink-500/22 blur-3xl"
        animate={{ x: [0, 18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <style>{`
        @keyframes rd-float {
          0% { transform: translate3d(0,0,0); opacity: .55; }
          50% { transform: translate3d(-18px, 10px, 0); opacity: .85; }
          100% { transform: translate3d(0,0,0); opacity: .55; }
        }
        @keyframes rd-scan {
          0% { transform: translateY(-35%); opacity: .0; }
          10% { opacity: .35; }
          50% { opacity: .25; }
          90% { opacity: .35; }
          100% { transform: translateY(135%); opacity: .0; }
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(34,211,238,0.20) 0 2px, transparent 2.2px), radial-gradient(circle at 70% 60%, rgba(167,139,250,0.18) 0 2px, transparent 2.2px), radial-gradient(circle at 45% 80%, rgba(217,70,239,0.16) 0 2px, transparent 2.2px)",
          backgroundSize: "220px 220px, 260px 260px, 240px 240px",
          animation: "rd-float 8s ease-in-out infinite",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute left-0 right-0 top-0 h-[220px] opacity-40"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.10) 30%, rgba(167,139,250,0.10) 60%, transparent 100%)",
          filter: "blur(10px)",
          animation: "rd-scan 6.5s linear infinite",
        }}
      />
    </div>
  );
}

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -8;
      const ry = (px - 0.5) * 10;
      setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)` });
    };

    const onLeave = () =>
      setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} style={style} className={cn("transition-transform duration-200", className)}>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function ProjectModal({ project, open, onClose }) {
  const prefersReducedMotion = useReducedMotion();
  const [tab, setTab] = useState("Overview");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) setTab("Overview");
  }, [open, project]);

  if (!open || !project) return null;

  const Icon = project.icon;
  const tabs = ["Overview", "STAR", "Tech", "Notes"];

  const tabContent = {
    Overview: (
      <div className="space-y-4">
        <div className="text-sm text-white/75">{project.subtitle}</div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              {t}
            </span>
          ))}
        </div>
        <ul className="space-y-2 text-sm text-white/80">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    STAR: (
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            k: "Situation",
            v: "High-stakes operational constraints where latency, false positives, and drift directly impact outcomes.",
          },
          {
            k: "Task",
            v: "Owned the system end-to-end: architecture, integration, edge deployment, and reliability tooling.",
          },
          {
            k: "Action",
            v: "Designed deterministic pipelines (events → capture → inference → response), tuned for edge constraints and real-world failure modes.",
          },
          {
            k: "Result",
            v: "Deployment-ready behavior with consistent latency and repeatable outputs aligned to real processes.",
          },
        ].map((x) => (
          <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold text-white/70">{x.k}</div>
            <div className="mt-2 text-sm text-white/80">{x.v}</div>
          </div>
        ))}
      </div>
    ),
    Tech: (
      <div className="space-y-4">
        <div className="text-sm text-white/80">Typical stack components used across my systems (adapted per constraints):</div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { a: "Perception", b: "YOLOv8 / OpenCV / ROI gating / tracking" },
            { a: "Robotics", b: "ROS2 • Nav2 • SLAM • EKF" },
            { a: "Edge", b: "Jetson • CUDA • latency budgeting" },
            { a: "Integration", b: "MQTT • RTSP • event-driven pipelines" },
            { a: "Reliability", b: "logging • retries • watchdogs • metrics" },
            { a: "LLM (when used)", b: "offline RAG • guardrails • grounded answers" },
          ].map((r) => (
            <div key={r.a} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold text-white/70">{r.a}</div>
              <div className="mt-2 text-sm text-white/80">{r.b}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    Notes: (
      <div className="space-y-3 text-sm text-white/80">
        <div>
          <span className="font-semibold text-white">What I optimize for:</span> operational correctness, predictable latency, strong logging, and safe failure behavior.
        </div>
        <div>
          <span className="font-semibold text-white">What I avoid:</span> demo-only systems that break under noise, occlusion, drift, or long runtimes.
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold text-white/70">Proof signals</div>
          <div className="mt-2 text-sm text-white/80">Reliability mindset • deterministic triggers • edge-aware design • audit-friendly outputs</div>
        </div>
      </div>
    ),
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-end justify-center md:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button aria-label="Close modal" onClick={onClose} className="absolute inset-0 bg-black/60" />

        <motion.div
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-3xl rounded-t-3xl border border-white/10 bg-[#070A13]/95 p-6 shadow-2xl backdrop-blur-xl md:rounded-3xl"
          initial={{ y: 18, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 18, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                Case Study
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                <Icon className="h-4 w-4" />
              </div>
              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
              >
                Close
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition",
                  t === tab ? "bg-white text-[#070A13]" : "border border-white/10 bg-white/5 text-white/75 hover:bg-white/10"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {prefersReducedMotion ? (
              <div>{tabContent[tab]}</div>
            ) : (
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {tabContent[tab]}
              </motion.div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#070A13] hover:opacity-95 transition"
            >
              Discuss this system <ArrowRight className="h-4 w-4" />
            </a>
            <div className="text-xs text-white/60">
              Tip: Press <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">Esc</span> to close
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });

  const navItems = useMemo(
    () => [
      { href: "#systems", label: "Systems" },
      { href: "#experience", label: "Experience" },
      { href: "#work", label: "Work Style" },
      { href: "#publications", label: "Publications" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  const [modalProject, setModalProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openProject = (p) => {
    setModalProject(p);
    setModalOpen(true);
  };
  const closeProject = () => setModalOpen(false);

  // Mobile menu + active section tracker
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#systems");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", "")).filter(Boolean);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) setActiveSection(`#${visible[0].target.id}`);
      },
      { threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [navItems]);

  const scrollTo = (href) => (e) => {
    e?.preventDefault?.();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#070A13] text-white">
      <AnimatedBackdrop />

      {!prefersReducedMotion && (
        <motion.div
          className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"
          style={{ scaleX: progress }}
        />
      )}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A13]/65 backdrop-blur-xl">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">{NAME}</div>
              <div className="text-xs text-white/60">Robotics • AI • Computer Vision</div>
            </div>
          </div>

          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((n) => (
              <Anchor
                key={n.href}
                href={n.href}
                active={activeSection === n.href}
                onClick={scrollTo(n.href)}
              >
                {n.label}
              </Anchor>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={RESUME_URL}
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-[#070A13] px-4 py-2 text-sm font-semibold hover:opacity-95 transition"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/70"
            />
            <motion.div
              className="absolute left-3 right-3 top-16 rounded-3xl border border-white/10 bg-[#070A13]/95 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ y: -8, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -8, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="mb-3 text-xs font-semibold tracking-wider text-white/60">NAVIGATION</div>
              <div className="grid gap-1">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={scrollTo(n.href)}
                    className={cn(
                      "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition",
                      activeSection === n.href
                        ? "text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                        : "text-white/80 hover:bg-white/10"
                    )}
                  >
                    <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                      {n.label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={RESUME_URL}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#070A13]"
                >
                  Resume <Download className="h-4 w-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to global roles (remote / onsite)
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
              >
                {headline.primary}{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {headline.accent}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
                className="mt-5 max-w-xl text-base text-white/75 md:text-lg"
              >
                {headline.sub}
              </motion.p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#systems"
                  onClick={scrollTo("#systems")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#070A13] hover:opacity-95 transition"
                >
                  View My Systems
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={RESUME_URL}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Download Resume <Download className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
                  href={EMAIL}
                >
                  <Mail className="h-4 w-4" /> {EMAIL_ADDR}
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
                  href={PHONE}
                >
                  <Phone className="h-4 w-4" /> {PHONE_NUM}
                </a>
                <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                  <MapPin className="h-4 w-4" /> {LOCATION}
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold tracking-wide text-white/70">
                  QUICK IDENTITY
                </div>
                <div className="mt-2 text-sm text-white/85">
                  <span className="text-white">Not a researcher. Not a tutorial engineer.</span>{" "}
                  I design systems that run continuously under real constraints.
                </div>
              </div>

              <div className="mt-6">
                <Marquee items={skillPills} />
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-fuchsia-500/20 blur-2xl" />
              <TiltCard>
                <GlassCard className="relative overflow-hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold">Professional Summary</div>
                      <div className="mt-1 text-xs text-white/65">
                        Innovative AI & Robotics Engineer specializing in autonomous systems, industrial automation, and intelligent perception models.
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                      <Cpu className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mb-4">
                  <div className="relative flex items-center justify-center">
                    {/* subtle professional glow */}
                    <div className="absolute h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400/40 via-violet-500/30 to-fuchsia-500/40 blur-md" />

                      <img
                        src="/profile.jpg"
                        alt="Randhir Dinesh – Robotics & AI Engineer"
                        className="
                          relative
                          h-40 w-40
                          rounded-full
                          object-cover
                          border-4
                          border-white/30
                          shadow-2xl
                          transition-transform
                          duration-300
                          hover:scale-[1.03]
                        "
                      />
                    </div>
                  </div>


                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    <Stat label="Efficiency lift" value="+35" suffix="%" />
                    <Stat label="Inspection time" value="−40" suffix="%" />
                    <Stat label="Localization" value="+30" suffix="%" />
                    <Stat label="Manual intervention" value="−50" suffix="%" />
                  </div>

                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-fuchsia-400/20 blur-2xl"
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                </GlassCard>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="relative">
        <Divider />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FadeIn>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Systems I’ve Built
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                  End-to-end systems engineered for deployment — combining perception, real-time behavior, and operational correctness.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
                <Globe className="h-4 w-4" />
                Global-ready engineering portfolio
              </div>
            </div>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {systems.map((p, idx) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.id} delay={idx * 0.06}>
                  <GlassCard className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                          Featured System
                        </div>
                        <h3 className="mt-3 text-lg font-semibold leading-snug">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">{p.subtitle}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2 text-sm text-white/80">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openProject(p)}
                      className="mt-6 inline-flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                    >
                      <span>Open case study</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative">
        <Divider />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Experience</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
              Roles where I shipped real systems: autonomy, perception, and deployment on edge hardware.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6">
            {experience.map((e, idx) => (
              <FadeIn key={e.company} delay={idx * 0.06}>
                <GlassCard>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-lg font-semibold">{e.company}</div>
                      <div className="mt-1 text-sm text-white/75">
                        {e.role} • {e.location}
                      </div>
                      <div className="mt-1 text-xs text-white/55">{e.time}</div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      <Layers className="h-4 w-4" /> System ownership
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-white/80">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <FadeIn>
              <GlassCard>
                <div className="text-sm font-semibold">Mentorship</div>
                <div className="mt-2 text-sm text-white/70">Mentored 10+ students</div>
              </GlassCard>
            </FadeIn>
            <FadeIn delay={0.04}>
              <GlassCard>
                <div className="text-sm font-semibold">Warehouse Robotics</div>
                <div className="mt-2 text-sm text-white/70">Inventory tracking +30%</div>
              </GlassCard>
            </FadeIn>
            <FadeIn delay={0.08}>
              <GlassCard>
                <div className="text-sm font-semibold">SLAM Systems</div>
                <div className="mt-2 text-sm text-white/70">95% real-time localization</div>
              </GlassCard>
            </FadeIn>
            <FadeIn delay={0.12}>
              <GlassCard>
                <div className="text-sm font-semibold">Embedded Optimization</div>
                <div className="mt-2 text-sm text-white/70">Latency reduced by 20%</div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WORK STYLE */}
      <section id="work" className="relative">
        <Divider />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How I Work</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
              My engineering style is optimized for systems that ship: reliability, constraints, and operational correctness.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {[
              { icon: ShieldCheck, title: "Production over prototypes", text: "Systems must survive long runtimes — not screenshots." },
              { icon: Cpu, title: "Edge-aware architecture", text: "Latency, compute limits, and thermals define design." },
              { icon: Radar, title: "Failure-first thinking", text: "Occlusion, noise, drift, packet loss are assumed." },
              { icon: Activity, title: "System-level accuracy", text: "Architecture beats model tweaks for real-world reliability." },
              { icon: ShieldCheck, title: "Deployment mindset", text: "Logging, recovery, repeatability are non-negotiable." },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={idx * 0.05}>
                  <GlassCard className="h-full">
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                    </div>
                    <div className="mt-4 text-sm font-semibold">{p.title}</div>
                    <div className="mt-2 text-sm text-white/70">{p.text}</div>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <GlassCard>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" /> Achievements
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {achievements.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-sm font-semibold">{a.title}</div>
                        </div>
                        <div className="mt-2 text-sm text-white/70">{a.text}</div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </FadeIn>
            <FadeIn delay={0.05}>
              <GlassCard>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Cpu className="h-4 w-4" /> Skills & Expertise
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillPills.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="relative">
        <Divider />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Publications</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
              Research that connects directly to real robotics deployment: perception, autonomy, and industrial applications.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {publications.map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 0.05}>
                <GlassCard>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold">{p.venue}</div>
                      <div className="mt-2 text-sm text-white/80">{p.title}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                      <BookOpen className="h-4 w-4" />
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY ANCHORS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-14">
          {systems.map((p, idx) => (
            <div key={p.id} id={p.id} className="scroll-mt-24">
              <FadeIn delay={idx * 0.05}>
                <GlassCard className="mt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{p.subtitle}</p>
                    </div>
                    <a href="#systems" onClick={scrollTo("#systems")} className="text-sm text-white/70 hover:text-white transition">
                      Back to Systems
                    </a>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {["Situation", "Task", "Action", "Result"].map((k) => (
                      <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs font-semibold text-white/70">{k}</div>
                        <div className="mt-2 text-sm text-white/80">
                          {k === "Situation" && "Real operational constraints where failure is expensive."}
                          {k === "Task" && "End-to-end ownership: AI, integration, and deployment behavior."}
                          {k === "Action" && "Architecture choices optimized for reliability, latency, and edge cases."}
                          {k === "Result" && "Deployment-ready behavior aligned to operations and repeatable outputs."}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-semibold">Key Engineering Notes</div>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative">
        <Divider />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">About</h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <GlassCard className="md:col-span-2">
                <p className="text-sm text-white/80 md:text-base">
                  I work at the intersection of{" "}
                  <span className="text-white font-semibold">robotics, AI, and real-world deployment</span>. My focus is building systems that operate under uncertainty, integrate tightly with hardware, and behave predictably under real constraints.
                </p>
                <p className="mt-4 text-sm text-white/75 md:text-base">
                  My background spans industrial automation, autonomous navigation, embedded optimization, and perception pipelines — with a strong focus on shipping systems that actually run.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/70">Languages</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {languages.map((l) => (
                        <span key={l} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-semibold text-white/70">Additional</div>
                    <div className="mt-2 space-y-2 text-sm text-white/75">
                      {extra.map((x) => (
                        <div key={x}>• {x}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.05}>
              <GlassCard>
                <div className="text-sm font-semibold">Education</div>
                <div className="mt-4 space-y-4">
                  {education.map((e) => {
                    const Icon = e.icon;
                    return (
                      <div key={e.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-sm font-semibold">{e.title}</div>
                        </div>
                        <div className="mt-2 text-xs text-white/65">{e.meta}</div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </FadeIn>
          </div>

          <div className="mt-8">
            <FadeIn>
              <GlassCard>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-sm font-semibold">Public Profiles</div>
                    <div className="mt-1 text-sm text-white/70">Quick links recruiters check first.</div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={PORTFOLIO_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      <Globe className="h-4 w-4" /> Portfolio
                    </a>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative">
        <Divider />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FadeIn>
            <GlassCard className="overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10" />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Let’s build something that actually works.
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">
                  Open to global roles in Robotics, Computer Vision, and AI Systems — on-site or remote.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={EMAIL}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#070A13] hover:opacity-95 transition"
                  >
                    Start a Technical Conversation <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={RESUME_URL}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Download Resume <Download className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    IEEE Publications
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Springer Nature Reviewer
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Edge AI • ROS2 • SLAM
                  </span>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} {NAME} • Built with React + Tailwind
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <a href={EMAIL} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition">
                <Mail className="h-4 w-4" /> {EMAIL_ADDR}
              </a>
              <a href={PHONE} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition">
                <Phone className="h-4 w-4" /> {PHONE_NUM}
              </a>
            </div>
          </footer>
        </div>
      </section>

      <ProjectModal project={modalProject} open={modalOpen} onClose={closeProject} />
    </div>
  );
}
