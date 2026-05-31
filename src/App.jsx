import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Smartphone,
  Server,
  ShieldCheck,
  BrainCircuit,
  Database,
  Download,
  GraduationCap,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const profile = {
  name: "Basel Sadi",
  location: "Basmat Tabun, North District, Israel",
  email: "sadibasel@gmail.com",
  github: "https://github.com/baselsadi",
  linkedin: "https://www.linkedin.com/in/baselsadi",
  cv: "#",
};

const skills = [
  "React Native",
  "Flutter",
  "Golang",
  "FastAPI",
  "ASP.NET Core",
  "Python",
  "Java",
  "C#",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "TensorFlow",
  "OpenCV",
  "Git",
  "Linux",
  "Cybersecurity",
];

const projects = [
  {
    title: "Hebrew OCR Recognition App",
    type: "Mobile + AI",
    icon: BrainCircuit,
    description:
      "A mobile application that recognizes Hebrew text from images using React Native, FastAPI, TensorFlow/Keras, and OpenCV.",
    highlights: [
      "Image upload and recognition flow",
      "OCR confidence score and word count",
      "RTL Hebrew result display",
      "Recognition history and statistics",
    ],
    stack: ["React Native", "FastAPI", "Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "Sudoku Solver and Helper App",
    type: "Mobile + Algorithms",
    icon: Code2,
    description:
      "A Sudoku app with game mode, helper mode, puzzle generation, hints, mistake tracking, and backend solving logic.",
    highlights: [
      "Board UI, notes mode, undo, erase, hints",
      "Difficulty levels and game statistics",
      "FastAPI backend solver",
      "Logical hint generation",
    ],
    stack: ["React Native", "Expo", "FastAPI", "Algorithms"],
  },
  {
    title: "Campus Management System",
    type: "Full-Stack Web",
    icon: Database,
    description:
      "A role-based academic management system with admin, lecturer, and student dashboards.",
    highlights: [
      "ASP.NET Core MVC application",
      "PostgreSQL database",
      "Role-based authorization",
      "Responsive Bootstrap UI",
    ],
    stack: ["ASP.NET Core", "C#", "PostgreSQL", "EF Core", "Bootstrap"],
  },
  {
    title: "Cacti Security Research",
    type: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Security research on the Cacti open-source monitoring platform using static analysis and manual code review.",
    highlights: [
      "Semgrep and CodeQL scanning",
      "PHP source code review",
      "Linux lab testing",
      "Responsible disclosure style reports",
    ],
    stack: ["PHP", "Linux", "Semgrep", "CodeQL", "Security Research"],
  },
];

const serviceCards = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    text: "React Native and Flutter apps with clean UI, navigation, API integration, and local storage.",
  },
  {
    icon: Server,
    title: "Backend Development",
    text: "REST APIs, authentication, databases, and clean backend architecture using FastAPI, Go, and ASP.NET Core.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Engineering",
    text: "Security-aware development, vulnerability research, static analysis, and safe coding practices.",
  },
];

function Badge({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            BaselSadi<span className="text-indigo-600">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-indigo-600"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden px-5 py-20 md:py-28">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to student / junior software engineering roles
            </div>
            <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Hi, I’m <span className="text-indigo-600">Basel Sadi</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Computer Science student and software developer focused on full-stack development,
              mobile applications, backend systems, AI/OCR projects, and cybersecurity research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.github}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:bg-indigo-600"
              >
                <FaGithub  size={18} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-700"
              >
                <FaLinkedin   size={18} /> LinkedIn
              </a>
              <a
                href={profile.cv}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-700"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white bg-white/70 p-6 shadow-2xl shadow-indigo-950/10 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-200">
{`const developer = {
  name: "Basel Sadi",
  focus: ["Mobile", "Backend", "AI/OCR", "Security"],
  stack: ["React Native", "Go", "FastAPI", "ASP.NET Core"],
  goal: "Build reliable software at Intel"
};`}
                </pre>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-slate-950">5+</p>
                  <p className="text-sm text-slate-500">Main projects</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-slate-950">3</p>
                  <p className="text-sm text-slate-500">Languages</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {serviceCards.map((card) => (
            <div key={card.title} className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-950/5 transition hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-5 py-20">
        <SectionTitle
          eyebrow="Projects"
          title="Practical software projects"
          subtitle="A selection of projects that show my experience in mobile development, backend systems, AI/OCR, databases, and security research."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-950/5"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-slate-950 p-3 text-white">
                    <project.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-indigo-600">{project.type}</p>
                    <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
                  </div>
                </div>
                <ExternalLink className="text-slate-300" size={20} />
              </div>
              <p className="leading-7 text-slate-600">{project.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="px-5 py-20">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="My stack combines mobile development, backend engineering, databases, AI tools, and security-focused workflows."
        />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>

      <section id="education" className="px-5 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-950/5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Education</p>
              <h2 className="text-3xl font-bold text-slate-950">Netanya Academic College</h2>
              <p className="mt-3 text-lg text-slate-600">B.Sc. in Computer Science</p>
              <p className="mt-2 text-slate-500">Relevant coursework: Algorithms, Data Structures, Operating Systems, Computer Networks, Databases, Automata and Formal Languages, Linear Algebra, Logic, Software Engineering.</p>
            </div>
            <div className="rounded-3xl bg-indigo-50 p-5 text-indigo-700">
              <GraduationCap size={56} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-950/20 md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">Let’s build something great</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            I’m currently looking for student or junior software engineering opportunities and would be happy to connect with engineering teams and recruiters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1">
              <Mail size={18} /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200">
              <MapPin size={18} /> {profile.location}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
