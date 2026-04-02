import { useEffect, useRef, useState } from 'react'

import './App.css'
import ARlogo from '/AR_Logo_Orange.svg'
import 'animate.css'

function Nav() {
  return (
    <>
      <div id="nav">
        <div id="nav-logo">
          <img id="logo-img" src={ARlogo} alt="AR Logo"/>
          <span id="logo-text">Alex Rouman</span>
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {

  useReveal();
  const [sent, setSent] = useState(false);
 
  function handleSend(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <>
      <Nav/>
    
      <div id="intro">
        {/* ── HERO ── */}
        <section id="hero">
          <p id="hero-eyebrow">CS Student &amp; Developer</p>
          <h1 id="hero-name">
            <span className="wh">Alex</span><br />
            <span className="oh">Rouman</span>
            <span className='animate__animated animate__bounce'>.</span>
          </h1>
          <p id="hero-sub">
            Computer Science student at Eastern Michigan University with a 4.0 GPA.
            I build web apps, simulations, and everything in between — with a unique
            background in manufacturing and 3D design.
          </p>
          <div id="hero-chips">
            {["Java", "Python", "C / C++", "React", "SQL", "Git"].map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
          <div id="hero-cta">
            <a href="#projects" className="btn btn-solid">See My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </section>
  
        <hr className="divider" />
  
        {/* ── ABOUT ── */}
        <section id="about">
          <p className="label reveal">About</p>
          <h2 className="reveal">A Little<br />About Me.</h2>
          <div id="about-grid">
            <div id="about-text" className="reveal">
              <p>
                I'm a <strong>Computer Science student at Eastern Michigan University</strong>{" "}
                (expected 2027), maintaining a 4.0 GPA with a minor in Manufacturing.
                Previously attended Western Michigan University — Dean's List, 3.93 GPA.
              </p>
              <p>
                I'm drawn to the intersection of software and physical systems. I'm just
                as comfortable writing a React frontend as I am operating a CNC machine
                or designing in Blender. I love building things that are both functional
                and well-crafted.
              </p>
              <p>
                Currently <strong>open to internship and co-op opportunities</strong> in
                software engineering, full-stack development, or related fields.
              </p>
            </div>
            <div id="about-skills" className="reveal">
              {[
                { title: "Languages", tags: ["Java", "Python", "C", "C++", "JavaScript", "HTML/CSS"] },
                { title: "Frameworks & Tools", tags: ["React", "SQL", "Git", "Unity", "Blender3D", "NX", "Onshape", "Inventor"] },
                { title: "Coursework", tags: ["Data Structures & Algorithms", "Software Engineering", "Programming Languages", "Internet Based Computing", "Discrete Math"] },
              ].map(({ title, tags }) => (
                <div className="skill-block" key={title}>
                  <h4>{title}</h4>
                  <div className="tag-list">
                    {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <hr className="divider" />
  
        {/* ── PROJECTS ── */}
        <section id="projects">
          <p className="label reveal">Projects</p>
          <h2 className="reveal">Things I've<br />Built.</h2>
          <div id="projects-grid">
            {[
              {
                icon: "🔧",
                name: "Hardware Rental Platform",
                desc: "Full-stack group project for browsing and reserving equipment online. Includes secure login, user accounts, inventory management, and order tracking.",
                stack: ["React", "SQL", "JS"],
                links: [{ label: "GitHub ↗", href: "https://github.com/alxroum" }],
              },
              {
                icon: "🃏",
                name: "Flashcards Website",
                desc: "A terminal-styled flashcard app built with React. Supports file-based card importing, structured text parsing, and client-side state management for dynamic navigation.",
                stack: ["React", "JS"],
                links: [{ label: "GitHub ↗", href: "https://github.com/alxroum" }],
              },
              {
                icon: "⚛️",
                name: "2D Particle Simulation",
                desc: "A physics-based particle simulation written in Java. Implements accurate motion equations using external libraries and APIs to model real-world object behavior.",
                stack: ["Java"],
                links: [],
              },
            ].map(({ icon, name, desc, stack, links }) => (
              <div className="card reveal" key={name}>
                <div className="card-icon">{icon}</div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="card-footer">
                  <div className="card-stack">
                    {stack.map((s) => <span className="stack-tag" key={s}>{s}</span>)}
                  </div>
                  <div className="card-links">
                    {links.map(({ label, href }) => (
                      <a className="card-link" href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <hr className="divider" />
  
        {/* ── EXPERIENCE ── */}
        <section id="experience">
          <p className="label reveal">Experience</p>
          <h2 className="reveal">Where I've<br />Worked.</h2>
          {[
            {
              company: "Cutting Edge Landscaping",
              date: "May – Aug 2025",
              location: "Ann Arbor, MI",
              role: "Landscaper",
              desc: "Provided quality lawn care maintenance including mowing, trimming, and blowing for commercial and residential properties on a weekly schedule.",
            },
            {
              company: "Emagine Entertainment",
              date: "Jun – Aug 2024",
              location: "Saline, MI",
              role: "Crew Member",
              desc: "Upheld theater cleanliness to sanitary standards. Prepared, delivered, and processed payments for customer purchases at the concession counter.",
            },
          ].map(({ company, date, location, role, desc }) => (
            <div className="exp-item reveal" key={company}>
              <div className="exp-date">
                <strong>{company}</strong>
                {date}<br />{location}
              </div>
              <div className="exp-content">
                <h3>{role}</h3>
                <p className="exp-company">{company}</p>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </section>
  
        <hr className="divider" />
  
        {/* ── CONTACT ── */}
        <section id="contact">
          <p className="label reveal">Contact</p>
          <h2 className="reveal">Let's<br />Talk.</h2>
          <div id="contact-wrap" className="reveal">
            <div>
              <p id="contact-text">
                I'm open to internships, collaborations, and interesting conversations.
                Drop me a message and I'll get back to you quickly.
              </p>
              <div id="contact-links">
                <a className="contact-link" href="mailto:alxroum@gmail.com">✉ alxroum@gmail.com</a>
                <a className="contact-link" href="https://github.com/alxroum" target="_blank" rel="noreferrer">⌥ github.com/alxroum</a>
                <a className="contact-link" href="https://www.linkedin.com/in/alex-rouman" target="_blank" rel="noreferrer">in linkedin.com/in/alex-rouman</a>
              </div>
            </div>
          </div>
        </section>
  
        {/* ── FOOTER ── */}
        <footer>
          <div id="footer-left">
            <p>Alex Rouman &copy; 2025</p>
          </div>
          <div id="footer-links">
            <a href="https://github.com/alxroum" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/alex-rouman" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </>
  )
}