import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Layers3,
  Palette,
  Terminal,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "VyapaarOS",
    category: "Business Management Platform",
    description:
      "A modern platform concept designed to simplify business workflows, organize operations, and help businesses work smarter.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    status: "In Development",
    symbol: "V.",
    theme: "violet",
  },
  {
    number: "02",
    name: "TuitionBuddy",
    category: "Education Technology",
    description:
      "A student-focused learning platform concept for managing tuition, homework, learning tasks, and educational resources.",
    stack: ["React", "JavaScript", "CSS"],
    status: "In Development",
    symbol: "T.",
    theme: "blue",
  },
  {
    number: "03",
    name: "Rashtrawadi NS",
    category: "Community Web Platform",
    description:
      "A bold, responsive website concept focused on community information, announcements, and accessible public communication.",
    stack: ["React", "JavaScript", "CSS"],
    status: "In Development",
    symbol: "R.",
    theme: "orange",
  },
];

const skills = [
  { name: "HTML & CSS", level: "Web foundations", icon: Code2 },
  { name: "JavaScript", level: "Programming", icon: Terminal },
  { name: "React.js", level: "Frontend development", icon: Layers3 },
  { name: "Tailwind CSS", level: "UI development", icon: Palette },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">P.</span>
          <span>
            PULKIT<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow" />

          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              BUILDING MY DEVELOPER JOURNEY
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Pulkit
              <br />
              <span className="gradient-text">Nishad.</span>
            </h1>

            <h2>
              Aspiring <span className="highlight">Full Stack Developer</span>
            </h2>

            <p className="hero-description">
              I turn ideas into modern web experiences. Currently learning,
              building projects, and growing my skills in React and the MERN
              stack.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <Mail size={17} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/pulkitking9777"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={19} />
              </a>
              <a
                href="https://Code2.com/in/pulkit-nishad-536504308"
                target="_blank"
                rel="noreferrer"
                aria-label="Code2"
              >
                <Code2 size={19} />
              </a>
              <span className="social-caption">LET'S BUILD SOMETHING.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="code-card">
              <div className="code-topbar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.js</span>
                <Code2 size={16} />
              </div>

              <div className="code-body">
                <p>
                  <span className="code-muted">01</span>{" "}
                  <span className="code-purple">const</span> developer = {"{"}
                </p>
                <p>
                  <span className="code-muted">02</span> &nbsp; name:{" "}
                  <span className="code-green">"Pulkit Nishad"</span>,
                </p>
                <p>
                  <span className="code-muted">03</span> &nbsp; role:{" "}
                  <span className="code-green">"Web Developer"</span>,
                </p>
                <p>
                  <span className="code-muted">04</span> &nbsp; learning:{" "}
                  <span className="code-green">"MERN Stack"</span>,
                </p>
                <p>
                  <span className="code-muted">05</span> &nbsp; mindset:{" "}
                  <span className="code-green">"Keep building"</span>,
                </p>
                <p>
                  <span className="code-muted">06</span> &nbsp; available:{" "}
                  <span className="code-purple">true</span>,
                </p>
                <p>
                  <span className="code-muted">07</span> {"};"}
                </p>
                <p className="code-last">
                  <span className="code-purple">export default</span> developer;
                  <span className="cursor">▍</span>
                </p>
              </div>

              <div className="code-footer">
                <span>
                  <span className="status-dot" /> Open to opportunities
                </span>
                <Sparkles size={16} />
              </div>
            </div>

            <div className="floating-chip chip-top">
              <Code2 size={17} /> React Developer
            </div>
            <div className="floating-chip chip-bottom">
              <Sparkles size={17} /> Always learning
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <ArrowDown size={16} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>
              A little about <span className="gradient-text">me.</span>
            </h2>
            <p>Curious mind. Creative thinking. Consistent learning.</p>
          </div>

          <div className="about-grid">
            <article className="about-card glass-card">
              <span className="card-icon">
                <Code2 size={23} />
              </span>
              <h3>Learning by building</h3>
              <p>
                I'm a Computer Science engineering student focused on
                understanding web development through practical projects and
                consistent coding practice.
              </p>
            </article>

            <article className="about-card glass-card">
              <span className="card-icon">
                <Layers3 size={23} />
              </span>
              <h3>Growing my stack</h3>
              <p>
                My current focus is JavaScript, React, responsive UI, and
                gradually progressing toward full-stack MERN development.
              </p>
            </article>

            <article className="about-card glass-card">
              <span className="card-icon">
                <Sparkles size={23} />
              </span>
              <h3>Driven by ideas</h3>
              <p>
                I enjoy exploring ideas, designing digital experiences, and
                turning what I learn into useful projects.
              </p>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-index">02 / SKILLS</span>
            <h2>
              Tools of my <span className="gradient-text">trade.</span>
            </h2>
            <p>Technologies I'm learning and using in my projects.</p>
          </div>

          <div className="skills-grid">
            {skills.map(({ name, level, icon: Icon }) => (
              <article className="skill-card glass-card" key={name}>
                <span className="skill-icon">
                  <Icon size={24} />
                </span>
                <div>
                  <h3>{name}</h3>
                  <p>{level}</p>
                </div>
                <ArrowUpRight className="skill-arrow" size={18} />
              </article>
            ))}
          </div>

          <div className="learning-banner">
            <div>
              <span className="section-index">CURRENTLY EXPLORING</span>
              <h3>From frontend to full stack.</h3>
              <p>Node.js · Express.js · MongoDB · Git & GitHub</p>
            </div>
            <span className="learning-symbol">
              <Terminal size={29} />
            </span>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-index">03 / SELECTED WORK</span>
            <h2>
              Ideas in <span className="gradient-text">progress.</span>
            </h2>
            <p>Project concepts I'm working toward bringing to life.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card glass-card ${project.theme}`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">{project.number} / 03</span>
                  <span className="project-symbol">{project.symbol}</span>
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span className="project-status">
                    <span className="status-dot" /> {project.status}
                  </span>
                  <span className="project-note">
                    CONCEPT <ExternalLink size={13} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <span className="section-index">04 / CONTACT</span>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's connect.</span>
            </h2>
            <p>
              I'm always interested in learning, collaborating, and connecting
              with people who love building things.
            </p>
            <a
              className="button button-primary"
              href="mailto:YOUR_EMAIL@example.com"
            >
              <Mail size={18} /> Say hello <ArrowUpRight size={18} />
            </a>
            <div className="contact-socials">
              <a
                href="https://github.com/pulkitking9777"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> GitHub
              </a>
              <a
                href="https://Code2.com/in/pulkit-nishad-536504308"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> Code2
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">P.</span>
          <span>
            PULKIT<span className="brand-dot">.</span>
          </span>
        </a>
        <p>Designed & built with curiosity.</p>
        <span>© {new Date().getFullYear()} Pulkit Nishad</span>
      </footer>
    </>
  );
}

export default App;
