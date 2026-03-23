import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bluetooth,
  BookOpen,
  Boxes,
  BrainCircuit,
  ChevronRight,
  Cpu,
  Download,
  ExternalLink,
  Factory,
  Github,
  Globe,
  Image as ImageIcon,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  PlayCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Video,
  Waypoints,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

const NAME = "Randhir Dinesh";
const LOCATION = "Dubai, UAE";
const EMAIL_ADDR = "randhirdinesh123@gmail.com";
const PHONE_NUM = "+971557960058";
const EMAIL = `mailto:${EMAIL_ADDR}`;
const PHONE = `tel:${PHONE_NUM}`;
const RESUME_URL = "/Randhir_Dinesh_Resume.pdf";
const GITHUB_URL = "https://github.com/randhirdinesh";
const LINKEDIN_URL = "https://linkedin.com/in/randhirdinesh";

const heroMetrics = [
  { label: "System scope", value: "Full-stack autonomy" },
  { label: "Compute", value: "Dual-Jetson / edge AI" },
  { label: "Operating context", value: "24/7 airport + industrial" },
  { label: "Control path", value: "ROS2 to CAN actuation" },
];

const featuredSignals = [
  "Built for real deployment, not simulation-only demos",
  "Edge AI + robotics integration across perception, planning, and actuation",
  "Comfortable owning architecture, debugging, and field iteration under constraints",
];

const stackColumns = [
  {
    title: "Perception",
    items: ["YOLO / TensorRT", "Thermal + RGB fusion", "Stereo depth", "ROI masking", "Feature engineering"],
  },
  {
    title: "Planning",
    items: ["ROS2 Nav2", "SLAM / localization", "Custom planners", "Mission sequencing", "Runtime recovery"],
  },
  {
    title: "Infrastructure",
    items: ["Jetson Orin", "MQTT / event buses", "Edge logging", "CAN / serial I/O", "Deployment pipelines"],
  },
];

const systems = [
  {
    id: "sandblasting",
    icon: Factory,
    eyebrow: "Deep-Dive System 01",
    title: "Autonomous Sandblasting Robot",
    summary:
      "Production-oriented autonomy stack for rust inspection and surface treatment, designed around perception, mission logic, and hard real-time field constraints.",
    flow: [
      "Stereo / RGB-T sensing",
      "Rust detection + plate quality inference",
      "ROS2 world model + custom navigation",
      "Mission planner",
      "CAN actuator control",
    ],
    specs: [
      ["Compute", "Jetson Orin NX + secondary edge perception node"],
      ["Middleware", "ROS2 Humble"],
      ["Sensors", "ZED / OAK-D / industrial cameras"],
      ["Outputs", "Navigation, blasting path execution, actuation"],
      ["Signal", "Dual-compute architecture for separation of control and perception"],
    ],
    challenges: [
      "Separated perception and control workloads so inference spikes would not destabilize navigation or actuation timing.",
      "Handled industrial noise, vibration, and variable surface appearance using robust sensing and deployment-focused model choices.",
      "Built custom mission behavior around plate detection and blasting sequences instead of relying on generic demo navigation.",
    ],
    badge: "Systems architect signal",
    architectureImage: "/media/sandblasting_robot_v2.svg",
    proofImage: "/media/sandblasting-ai-live-inference.jpg",
    proofCaption:
      "Real-time rust detection running on a Jetson-based edge stack, with surface severity estimation and geometric measurements feeding autonomous blasting decisions.",
    proofList: [
      "Rust severity score mapped to operational decision logic",
      "Polygon-aware region extraction with distance measurements",
      "Fully offline inference path on edge hardware",
      "Integrated into the robot control pipeline rather than a standalone demo window",
    ],
    metrics: ["~5 FPS edge inference", "Offline deployment", "Depth-aware measurement", "Autonomous blasting trigger path"],
    video: "/media/sandblasting-live-demo.mp4",
  },
  {
    id: "airport-cargo",
    icon: Boxes,
    eyebrow: "Deep-Dive System 02",
    title: "Airport Cargo Counting Platform",
    summary:
      "Operational computer-vision pipeline for airport cargo workflows, built for event-driven correctness, auditability, and stable performance under real ramp conditions.",
    flow: [
      "MQTT / barcode trigger",
      "Frame capture",
      "Inference + class validation",
      "Business rule checks",
      "Audit logs + operational response",
    ],
    specs: [
      ["Compute", "Edge GPU inference node"],
      ["Middleware", "MQTT + Python CV services"],
      ["Sensors", "RTSP / industrial fixed cameras"],
      ["Reliability", "24/7 operational design mindset"],
      ["Target", "Fast counting with repeatable, traceable output"],
    ],
    challenges: [
      "Used event-triggered inference rather than brute-force streaming so results aligned with actual cargo events and reduced false counts.",
      "Applied ROI masking and geometry-aware restrictions to eliminate off-belt detections and protect operational correctness.",
      "Designed around logging and deterministic outputs so operators could trust results during high-throughput airport workflows.",
    ],
    badge: "Reliability-first",
    architectureImage: "/media/cargo_counting_v2.svg",
    metrics: ["24/7 operations mindset", "Event-driven inference", "ROI-constrained counting", "Audit-ready outputs"],
  },
  {
    id: "ble-ips",
    icon: Bluetooth,
    eyebrow: "Deep-Dive System 03",
    title: "BLE Indoor Positioning for Airports",
    summary:
      "Indoor positioning pipeline for people and assets using BLE readers, MQTT ingestion, and stability-oriented estimation under noisy signal conditions.",
    flow: [
      "BLE readers / beacons",
      "RSSI ingestion",
      "Temporal aggregation",
      "Filtering + ML estimation",
      "Zone / coordinate output",
    ],
    specs: [
      ["Compute", "Edge + server-side analytics"],
      ["Middleware", "MQTT"],
      ["Sensors", "BLE readers + beacons"],
      ["Core problem", "RSSI instability, drift, and multipath"],
      ["Target", "Stable location prediction for operational use"],
    ],
    challenges: [
      "Reduced jitter through time-window aggregation instead of reacting to raw packet noise frame by frame.",
      "Structured the pipeline to absorb drift, RSSI volatility, and corridor multipath rather than assuming lab-grade signal behavior.",
      "Built with calibration and iteration in mind so the system could improve across terminals and changing deployment layouts.",
    ],
    badge: "Noise-aware localization",
    architectureImage: "/media/ble_ips_v2.svg",
    metrics: ["MQTT ingestion", "Filter-based stabilization", "Zone-level output", "Deployment-tuned calibration"],
  },
  {
    id: "amr-fleet",
    icon: Waypoints,
    eyebrow: "Deep-Dive System 04",
    title: "Warehouse AMR Fleet & Simulation",
    summary:
      "AMR-oriented warehouse robotics work spanning fleet behavior, docking, simulation, and system integration for autonomous material movement.",
    flow: [
      "Task / mission dispatch",
      "Localization + navigation",
      "Fleet motion and docking",
      "Simulation validation",
      "Operational execution",
    ],
    specs: [
      ["Compute", "ROS-based autonomy stack"],
      ["Middleware", "ROS / simulation tooling"],
      ["Environment", "Warehouse maps + Isaac-style simulation"],
      ["Target", "Repeatable docking and fleet movement"],
      ["Signal", "Bridges simulation and deployment thinking"],
    ],
    challenges: [
      "Worked across the system boundary between simulated behavior and deployable autonomy logic.",
      "Focused on fleet navigation, docking reliability, and warehouse task continuity rather than single-robot lab demos.",
      "Used simulation as an engineering tool for system validation and iteration, not as the final deliverable.",
    ],
    badge: "Fleet autonomy",
    architectureImage: "/media/warehouse_amr_fleet_v2.svg",
    metrics: ["Multi-robot workflows", "Docking logic", "Simulation-backed iteration", "Warehouse autonomy"],
  },
];

const mediaCards = [
  {
    type: "video",
    title: "Sandblasting Robot — Live Field Demo",
    text: "On-device inference and geometric rust analysis feeding the blasting decision path.",
    src: "/media/sandblasting-live-demo.mp4",
  },
  {
    type: "image",
    title: "Sandblasting Robot — Live Inference Screenshot",
    text: "Deployment proof: measured rust region, edge inference, and industrial UI trace on the robot system.",
    src: "/media/sandblasting-ai-live-inference.jpg",
  },
  {
    type: "image",
    title: "Autonomous Drone — Research Prototype",
    text: "Traffic-rule and autonomous drone work presented as engineering proof instead of redirecting users to an older portfolio.",
    src: "/media/drone-prototype.jpg",
  },
  {
    type: "image",
    title: "Isaac Sim Warehouse AMR Scene",
    text: "Simulation evidence kept directly inside the portfolio so recruiters see proof without leaving the site.",
    src: "/media/isaac-warehouse-sim.png",
  },
];

const publications = [
  {
    venue: "IEEE RAICS 2024",
    title: "Enhanced YOLOv8-Driven Traffic Rule Violation Detection with ROS-Integrated Autonomous Drone Navigation",
    takeaway: "Combined perception with autonomous motion instead of treating detection as an isolated model benchmark.",
  },
  {
    venue: "IEEE RAICS 2024",
    title: "Autonomous IoT-Integrated Harnessing YOLOv8 Algorithm and Micro-Navigation for Precision Agriculture",
    takeaway: "Focused on system integration across sensing, navigation, and decision flow for real field operation.",
  },
  {
    venue: "IEEE ICST 2023",
    title: "Waste Detection and Classification using YOLO Algorithm and Sensors",
    takeaway: "Early example of deploying computer vision with sensor-backed decision making rather than vision-only heuristics.",
  },
  {
    venue: "Springer review pipeline",
    title: "Autonomous Crop Disease Detection & Treatment System",
    takeaway: "Shows continued R&D direction in real-world robotics + AI systemization.",
  },
];

const navItems = [
  ["#vision", "Vision"],
  ["#stack", "The Stack"],
  ["#systems", "Deep-Dive Systems"],
  ["#proof", "Live Proof"],
  ["#publications", "Publications"],
  ["#contact", "Contact"],
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="mb-3 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-300">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}
    </div>
  );
}

function GlassPanel({ children, className = "" }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

function FlowDiagram({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item, idx) => (
        <div key={item} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-sm font-semibold text-lime-300">
            {String(idx + 1).padStart(2, "0")}
          </div>
          <div className="flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">{item}</div>
          {idx < items.length - 1 && <ChevronRight className="hidden h-4 w-4 text-lime-300 md:block" />}
        </div>
      ))}
    </div>
  );
}

function MediaCard({ card }) {
  if (card.type === "video") {
    return (
      <GlassPanel className="overflow-hidden p-0">
        <video className="h-72 w-full bg-black object-cover" controls preload="metadata" playsInline>
          <source src={card.src} type="video/mp4" />
        </video>
        <div className="p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Video className="h-4 w-4 text-lime-300" /> {card.title}
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-300">{card.text}</p>
        </div>
      </GlassPanel>
    );
  }

  if (card.type === "image") {
    return (
      <GlassPanel className="overflow-hidden p-0">
        <img src={card.src} alt={card.title} className="h-72 w-full object-cover object-center" />
        <div className="p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <ImageIcon className="h-4 w-4 text-lime-300" /> {card.title}
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-300">{card.text}</p>
        </div>
      </GlassPanel>
    );
  }

  return (
    <GlassPanel className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <PlayCircle className="h-4 w-4 text-lime-300" /> {card.title}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
      </div>
      <a
        href={card.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
      >
        Open media <ExternalLink className="h-4 w-4" />
      </a>
    </GlassPanel>
  );
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePub, setActivePub] = useState(0);

  const stackNodes = useMemo(
    () => [
      { label: "Sensors", icon: Radar },
      { label: "Perception", icon: BrainCircuit },
      { label: "Fusion", icon: Network },
      { label: "Planning", icon: Waypoints },
      { label: "Runtime", icon: ShieldCheck },
      { label: "Actuation", icon: Zap },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-[#06110c] text-white selection:bg-lime-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(132,255,94,0.14),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(73,211,255,0.12),transparent_18%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06110c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <div className="text-sm font-semibold tracking-[0.16em] text-lime-300">{NAME.toUpperCase()}</div>
            <div className="text-xs text-slate-400">Systems Architect • Robotics • Edge AI</div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={RESUME_URL} className="hidden rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black md:inline-flex md:items-center md:gap-2">
              <Download className="h-4 w-4" /> Resume
            </a>
            <button onClick={() => setMobileOpen((v) => !v)} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 md:hidden">
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 p-4 md:hidden">
            <motion.div initial={{ y: -14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }} className="rounded-3xl border border-white/10 bg-[#081610] p-5">
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-lime-300">Navigation</div>
              <div className="grid gap-2">
                {navItems.map(([href, label]) => (
                  <a key={href} href={href} onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="vision" className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                <Sparkles className="h-4 w-4" /> High-stakes robotics architect
              </div>
              <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                I build <span className="text-lime-300">full-stack autonomy</span> — from sensor fusion and edge inference to ROS2 mission logic and real-time CAN actuation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                UAE-based Robotics & AI Engineer focused on production-grade systems, not lab-only demos. My work spans dual-compute Jetson architectures, airport operational CV pipelines, BLE indoor positioning, industrial inspection, and autonomy stacks built to survive noise, drift, timing pressure, and deployment reality.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#systems" className="inline-flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black">
                  Explore system case studies <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#proof" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                  View live proof
                </a>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {featuredSignals.map((signal) => (
                  <div key={signal} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200">
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><MapPin className="h-4 w-4 text-lime-300" /> {LOCATION}</div>
                <a href={EMAIL} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><Mail className="h-4 w-4 text-lime-300" /> {EMAIL_ADDR}</a>
                <a href={PHONE} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><Phone className="h-4 w-4 text-lime-300" /> {PHONE_NUM}</a>
              </div>
            </div>

            <div className="grid gap-6">
              <GlassPanel className="overflow-hidden p-0">
                <div className="relative">
                  <img src="/profile.jpg" alt="Randhir Dinesh portrait" className="h-[420px] w-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081610] via-[#081610]/70 to-transparent p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-lime-300">Personal brand</div>
                    <div className="mt-2 text-2xl font-semibold text-white">Randhir Dinesh</div>
                    <div className="mt-1 text-sm text-slate-200">Systems Architect • Robotics • Edge AI • Production Deployment</div>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="relative overflow-hidden">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-lime-300">Mission framing</div>
                    <div className="mt-1 text-lg font-semibold">Systems architect profile</div>
                  </div>
                  <div className="rounded-2xl border border-lime-400/20 bg-lime-400/10 p-3 text-lime-300">
                    <Cpu className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-3">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{metric.label}</div>
                      <div className="mt-1 text-base font-medium text-slate-100">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-cyan-300">Recruiter signal</div>
                  <div className="mt-2 text-sm leading-7 text-slate-200">
                    Transferable UAE visa pathway, global relocation openness, and portfolio evidence shaped for senior robotics, autonomy, and edge-AI hiring conversations.
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionTitle
            eyebrow="The stack"
            title="A live-stack presentation instead of a generic skill list"
            text="The site frames your work the way senior recruiters read it: layered system ownership across perception, planning, and infrastructure rather than isolated tools."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <GlassPanel>
              <div className="text-sm font-semibold text-white">Interactive systems map</div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Use this node-graph style explainer to show how the robotics stack turns raw sensing into safe, auditable behavior.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stackNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl border border-lime-400/20 bg-lime-400/10 p-2 text-lime-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-medium text-slate-100">{node.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassPanel>

            <div className="grid gap-6 md:grid-cols-3">
              {stackColumns.map((column) => (
                <GlassPanel key={column.title}>
                  <div className="text-sm font-semibold text-white">{column.title}</div>
                  <div className="mt-4 space-y-3">
                    {column.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionTitle
            eyebrow="Deep-dive systems"
            title="Case studies that prove production-grade engineering"
            text="Each system is framed as a technical case study: architecture, spec sheet, deployment proof, and the real field constraints solved in production-style environments."
          />

          <div className="mt-10 space-y-8">
            {systems.map((system, idx) => {
              const Icon = system.icon;
              return (
                <motion.section
                  key={system.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: idx * 0.06 }}
                  className="grid gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[1.1fr_0.9fr]"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-300">
                      {system.eyebrow}
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">{system.title}</h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{system.summary}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-lime-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60">
                      <img src={system.architectureImage} alt={`${system.title} architecture`} className="w-full bg-slate-950 object-cover" />
                    </div>

                    {system.proofImage && (
                      <div className="mt-6 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60">
                          <img src={system.proofImage} alt={`${system.title} live proof`} className="h-full w-full object-cover object-center" />
                        </div>
                        <GlassPanel className="h-full">
                          <div className="flex items-center gap-2 text-sm font-semibold text-white">
                            <ShieldCheck className="h-4 w-4 text-lime-300" /> Live system proof
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{system.proofCaption}</p>
                          <div className="mt-4 space-y-3">
                            {system.proofList.map((item) => (
                              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-slate-200">
                                {item}
                              </div>
                            ))}
                          </div>
                        </GlassPanel>
                      </div>
                    )}

                    <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                        <Workflow className="h-4 w-4 text-lime-300" /> System block diagram
                      </div>
                      <FlowDiagram items={system.flow} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <GlassPanel>
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-white">Technical spec sheet</div>
                        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                          {system.badge}
                        </div>
                      </div>
                      <div className="mt-4 space-y-3">
                        {system.specs.map(([k, v]) => (
                          <div key={k} className="grid grid-cols-[110px_1fr] gap-3 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm">
                            <div className="text-slate-400">{k}</div>
                            <div className="text-slate-100">{v}</div>
                          </div>
                        ))}
                      </div>
                    </GlassPanel>

                    <GlassPanel>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Zap className="h-4 w-4 text-lime-300" /> Performance / deployment signals
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {system.metrics.map((metric) => (
                          <div key={metric} className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-slate-200">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </GlassPanel>

                    <GlassPanel>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Wrench className="h-4 w-4 text-lime-300" /> Production challenges solved
                      </div>
                      <div className="mt-4 space-y-3">
                        {system.challenges.map((challenge) => (
                          <div key={challenge} className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm leading-7 text-slate-200">
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </GlassPanel>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionTitle
            eyebrow="Live proof"
            title="Videos and deployment evidence"
            text="This section turns the portfolio from a static résumé site into evidence that the systems actually ran. I added your uploaded image and video, and linked verified public media from the legacy GitHub Pages portfolio."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {mediaCards.map((card) => (
              <MediaCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section id="publications" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionTitle
            eyebrow="Publications"
            title="Research translated into systems engineering"
            text="Instead of a plain publication list, this section highlights the engineering takeaway from each paper so hiring teams can connect research work to deployable systems thinking."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="grid gap-3">
              {publications.map((pub, idx) => (
                <button
                  key={pub.title}
                  onClick={() => setActivePub(idx)}
                  className={cn(
                    "rounded-3xl border px-5 py-4 text-left transition",
                    activePub === idx
                      ? "border-lime-400/30 bg-lime-400/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]",
                  )}
                >
                  <div className="text-xs uppercase tracking-[0.16em] text-lime-300">{pub.venue}</div>
                  <div className="mt-2 text-sm font-medium leading-6 text-white">{pub.title}</div>
                </button>
              ))}
            </div>

            <GlassPanel className="min-h-[280px]">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <BookOpen className="h-4 w-4 text-lime-300" /> Key takeaway
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-cyan-300">{publications[activePub].venue}</div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">{publications[activePub].title}</h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{publications[activePub].takeaway}</p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-4 text-sm leading-7 text-slate-200">
                Built for real-world deployment, not simulation-only storytelling.
              </div>
            </GlassPanel>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Available for Robotics & Autonomy Roles"
                text="Building production-grade autonomous systems for real-world deployment."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href={EMAIL} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white"><Mail className="h-4 w-4 text-lime-300" /> Email</div>
                  <div className="mt-3 text-sm text-slate-300">{EMAIL_ADDR}</div>
                </a>
                <a href={PHONE} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white"><Phone className="h-4 w-4 text-lime-300" /> Phone</div>
                  <div className="mt-3 text-sm text-slate-300">{PHONE_NUM}</div>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white"><Linkedin className="h-4 w-4 text-lime-300" /> LinkedIn</div>
                  <div className="mt-3 text-sm text-slate-300">Professional profile and recruiter access</div>
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white"><Github className="h-4 w-4 text-lime-300" /> GitHub</div>
                  <div className="mt-3 text-sm text-slate-300">Code, experiments, and system repos</div>
                </a>
              </div>
            </div>

            <GlassPanel>
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Globe className="h-4 w-4 text-lime-300" /> Currently Open For
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3">📍 UAE-based | Visa transferable</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3">🌍 Open to global roles</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3">⚙️ Built for CTO & senior engineering roles</div>
              </div>
            </GlassPanel>
          </div>
        </section>
      </main>
    </div>
  );
}
