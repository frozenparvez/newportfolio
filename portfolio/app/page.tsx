const profile = {
  name: "Parvez Hasan",
  role: "Frontend Developer",
  email: "parvezhasan102030@gmail.com",
  github: "https://github.com/frozenparvez",
  location: "Available worldwide · Remote",
  // Update this each year — `new Date()` is not allowed during prerendering
  // when `cacheComponents` is enabled.
  year: 2026,
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "Git",
];

const projects = [
  {
    title: "TaskFlow",
    description:
      "A kanban board for small teams with drag-and-drop columns, optimistic updates, and keyboard-first navigation.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
  },
  {
    title: "DevMetrics",
    description:
      "A dashboard that turns GitHub activity into readable charts, with cached queries and a fast search across repos.",
    tags: ["React", "Tailwind CSS", "REST APIs"],
    href: "#",
  },
  {
    title: "QuickNotes",
    description:
      "A minimal markdown note-taking app that works offline and syncs in the background when a connection returns.",
    tags: ["Next.js", "Offline-first", "IndexedDB"],
    href: "#",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 sm:px-8">
      <header className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-zinc-200/80 bg-white/80 px-6 py-4 backdrop-blur-md sm:-mx-8 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-900"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-zinc-900 text-xs font-bold text-white">
            PH
          </span>
          {profile.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Hire me
        </a>
      </header>

      <main className="flex flex-col">
        {/* Hero */}
        <section
          id="home"
          className="scroll-mt-24 border-b border-zinc-200/80 py-20 sm:py-28"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Open to new work
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-5xl">
            Hi, I&apos;m {profile.name}. I build{" "}
            <span className="bg-linear-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              fast, accessible
            </span>{" "}
            web interfaces.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-zinc-600">
            {profile.role} focused on React and Next.js. I care about clean
            component APIs, quick page loads, and interfaces that stay usable
            for everyone.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-b border-zinc-200/80 py-16"
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
            About
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-zinc-600">
              I&apos;ve spent the last few years building product interfaces —
              dashboards, editors, and marketing sites — mostly with the
              React ecosystem. I like small components, obvious data flow, and
              shipping things that hold up under real use.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              Outside of work I read about typography and browser internals, and
              I keep a growing list of side projects that never quite get
              finished. If you have something interesting to build, I&apos;d
              like to hear about it.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 border-b border-zinc-200/80 py-16"
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
            Skills
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-sm font-medium text-zinc-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 py-16">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
            Projects
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <h3 className="flex items-center justify-between text-base font-semibold text-zinc-900">
                    {project.title}
                    <span
                      aria-hidden
                      className="text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-[11px] text-zinc-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-zinc-200/80 py-16"
        >
          <div className="rounded-2xl bg-zinc-900 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              I&apos;m currently taking on new projects. The quickest way to
              reach me is email.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-2 border-t border-zinc-200/80 py-8 text-xs text-zinc-500 sm:flex-row">
        <p>
          © {profile.year} {profile.name}
        </p>
        <p>{profile.location}</p>
      </footer>
    </div>
  );
}
