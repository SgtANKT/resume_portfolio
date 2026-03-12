import React, { startTransition, useDeferredValue, useEffect, useState } from 'react';
import { portfolioData } from './data/portfolio';

function CountUp({ value, prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const duration = 1000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

function App() {
  const {
    person,
    intro,
    creator,
    illustrations,
    treks,
    stats,
    focusAreas,
    experience,
    projects,
    awards,
    education,
  } = portfolioData;

  const [activeAreaId, setActiveAreaId] = useState(focusAreas[0].id);
  const [activeExperienceId, setActiveExperienceId] = useState(experience[0].id);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSignalIndex((current) => (current + 1) % 4);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const activeArea = focusAreas.find((area) => area.id === activeAreaId) ?? focusAreas[0];
  const activeExperience =
    experience.find((item) => item.id === activeExperienceId) ?? experience[0];
  const rotatingSignals = [
    '5+ years delivering AI, data, and backend systems in production.',
    '$3M average yearly savings unlocked through automation platform work.',
    'Senior delivery across GenAI, forecasting, analytics, and cloud platforms.',
    'Part-time content creator, full-time developer with a strong product mindset.',
  ];
  const heroTags = ['Python', 'FastAPI', 'LLMs', 'Langflow', 'RAG', 'AWS', 'Azure', 'Creator'];
  const codeFeed = [
    '$ profile.init --candidate ankit-pratihast',
    'status: senior python + genai engineer',
    'focus: llm apps, automation, enterprise backend',
    'active stack: fastapi | langflow | azure | aws',
    'proof: award-winning delivery + measurable savings',
  ];
  const rollingArt = [...illustrations, ...illustrations];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const haystack = [
      project.title,
      project.category,
      project.blurb,
      project.outcome,
      project.stack.join(' '),
    ]
      .join(' ')
      .toLowerCase();
    const matchesQuery = deferredQuery.length === 0 || haystack.includes(deferredQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <section className="landing reveal">
        <div className="landing-grid">
          <div className="hero-copy">
            <p className="eyebrow">Senior Python / GenAI Engineer</p>
            <div className="hero-status">
              <span className="status-dot" />
              Experienced developer building AI products that survive real production constraints
            </div>
            <h1>
              Engineering <span>AI systems, backend platforms, and automation</span> with senior-level ownership.
            </h1>
            <p className="hero-rotating-label">What the work proves</p>
            <p className="hero-rotating">{rotatingSignals[activeSignalIndex]}</p>
            <p className="hero-dual-role">{creator.title}</p>
            <p className="hero-summary">{person.summary}</p>
            <div className="hero-intro">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="skill-pill-group hero-pill-group">
              {heroTags.map((tag) => (
                <span className="skill-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href={person.resume} target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="button button-secondary" href={person.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="creator-links">
              <a className="social-link" href={creator.youtube} target="_blank" rel="noreferrer">
                YouTube / {creator.channels[0].handle}
              </a>
              <a className="social-link" href={creator.instagram} target="_blank" rel="noreferrer">
                Instagram / {creator.channels[1].handle}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <article className="terminal-card">
              <div className="terminal-top">
                <div className="terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <p>live-profile.runtime</p>
              </div>
              <div className="terminal-body">
                {codeFeed.map((line, index) => (
                  <p className="terminal-line" key={line} style={{ animationDelay: `${index * 180}ms` }}>
                    {line}
                  </p>
                ))}
              </div>
            </article>

            <div className="hero-side-grid">
              <article className="hero-card hero-card-identity">
                <p className="eyebrow">{person.name}</p>
                <p className="hero-role">{person.title}</p>
                <p className="hero-note">
                  Designing LLM apps, automation systems, and scalable Python services for enterprise delivery.
                </p>
              </article>

              <article className="hero-card hero-card-contact">
                <dl className="contact-list">
                  <div>
                    <dt>Location</dt>
                    <dd>{person.location}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${person.email}`}>{person.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <a href={`tel:${person.phone.replace(/\s+/g, '')}`}>{person.phone}</a>
                    </dd>
                  </div>
                </dl>
              </article>

              {stats.slice(0, 3).map((stat) => (
                <article className="signal-card" key={stat.label}>
                  <p className="signal-value">
                    <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="signal-label">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="page">
        <section className="stats-shell reveal">
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card panel" key={stat.label}>
                <p className="stat-value">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="creator-band panel reveal">
            <div className="section-heading">
              <p className="eyebrow">Creator Mode</p>
              <h2>Code for a living. Create because curiosity needs an outlet.</h2>
            </div>

            <div className="creator-layout">
              <div className="creator-copy">
                <p className="creator-title">{creator.title}</p>
                <p className="creator-summary">{creator.summary}</p>
                <p className="creator-meta">{creator.instagramMeta}</p>
                <div className="creator-actions">
                  <a className="button button-secondary" href={creator.youtube} target="_blank" rel="noreferrer">
                    Visit YouTube
                  </a>
                  <a className="button button-secondary" href={creator.instagram} target="_blank" rel="noreferrer">
                    Visit Instagram
                  </a>
                </div>
              </div>

              <div className="creator-cards">
                {creator.channels.map((channel) => (
                  <a
                    className="creator-card"
                    key={channel.name}
                    href={channel.name === 'YouTube' ? creator.youtube : creator.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={channel.image} alt={`${channel.name} profile`} />
                    <div>
                      <p className="creator-card-label">{channel.name}</p>
                      <h3>{channel.handle}</h3>
                      <p>{channel.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="focus panel reveal">
          <div className="section-heading">
            <p className="eyebrow">Focus Areas</p>
            <h2>Capability map built from shipping work, not buzzword stacking.</h2>
          </div>

          <div className="focus-layout">
            <div className="chip-list">
              {focusAreas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  className={`chip ${area.id === activeAreaId ? 'chip-active' : ''}`}
                  onClick={() => setActiveAreaId(area.id)}
                >
                  {area.label}
                </button>
              ))}
            </div>

            <div className="focus-card">
              <p className="focus-headline">{activeArea.headline}</p>
              <p className="focus-description">{activeArea.description}</p>
              <div className="skill-pill-group">
                {activeArea.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="timeline panel reveal">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Progression from analytics foundations to GenAI platform delivery.</h2>
          </div>

          <div className="timeline-layout">
            <div className="timeline-nav">
              {experience.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`timeline-tab ${item.id === activeExperienceId ? 'timeline-tab-active' : ''}`}
                  onClick={() => setActiveExperienceId(item.id)}
                >
                  <span>{item.role}</span>
                  <small>
                    {item.company} / {item.period}
                  </small>
                </button>
              ))}
            </div>

            <article className="timeline-card">
              <div className="timeline-card-head">
                <div>
                  <p className="eyebrow">{activeExperience.company}</p>
                  <h3>{activeExperience.role}</h3>
                </div>
                <p className="timeline-meta">
                  {activeExperience.period}
                  <br />
                  {activeExperience.location}
                </p>
              </div>

              <p className="timeline-summary">{activeExperience.summary}</p>
              <p className="impact-line">{activeExperience.impact}</p>

              <ul className="bullet-list">
                {activeExperience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="skill-pill-group">
                {activeExperience.tags.map((tag) => (
                  <span className="skill-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="projects panel reveal">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">Project Explorer</p>
              <h2>Interactive view of the systems, models, and products behind the resume.</h2>
            </div>

            <label className="search-field">
              <span>Search</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  startTransition(() => {
                    setQuery(nextValue);
                  });
                }}
                placeholder="GenAI, Langflow, automation..."
              />
            </label>
          </div>

          <div className="chip-list project-chips">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`chip ${category === activeCategory ? 'chip-active' : ''}`}
                onClick={() => {
                  startTransition(() => {
                    setActiveCategory(category);
                  });
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-head">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <p className="project-blurb">{project.blurb}</p>
                <p className="project-outcome">{project.outcome}</p>

                <div className="skill-pill-group">
                  {project.stack.map((item) => (
                    <span className="skill-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <p className="empty-state">No projects match that filter yet. Try a broader search.</p>
          ) : null}
          </div>
        </section>

        <section className="section-shell">
          <div className="art-showcase panel reveal">
            <div className="section-heading">
              <p className="eyebrow">Illustrations</p>
              <h2>I have a knack to make illustrations as well.</h2>
            </div>

            <p className="art-summary">
              A rolling wall of personal digital art that shows the same patience for composition, detail, and visual rhythm that I bring into product work.
            </p>

            <div className="art-marquee">
              <div className="art-track">
                {rollingArt.map((art, index) => (
                  <figure className="art-card" key={`${art.src}-${index}`}>
                    <img src={art.src} alt={art.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="trek-band panel reveal">
            <div className="section-heading">
              <p className="eyebrow">Treks</p>
              <h2>Built in code. Reset in the mountains.</h2>
            </div>

            <p className="trek-summary">
              Sar Pass, Kedarkantha, Brahmatal, Dayara Bugyal, Triund, Yulla Kanda and counting.
            </p>

            <div className="trek-grid">
              {treks.map((trek) => (
                <article className="trek-card" key={trek.name}>
                  <p className="trek-label">Completed Trek</p>
                  <h3>{trek.name}</h3>
                  <p>{trek.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="bottom-grid reveal">
            <article className="panel awards">
            <div className="section-heading compact">
              <p className="eyebrow">Recognition</p>
              <h2>Awards tied to delivery, not side notes.</h2>
            </div>

            <div className="award-list">
              {awards.map((award) => (
                <div className="award-card" key={award.title}>
                  <p className="award-org">{award.organization}</p>
                  <h3>{award.title}</h3>
                  <p>{award.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel education-card">
            <div className="section-heading compact">
              <p className="eyebrow">Education</p>
              <h2>Foundation</h2>
            </div>

            <p className="education-school">{education.institution}</p>
            <p className="education-degree">{education.degree}</p>
            <p className="education-period">{education.period}</p>
            </article>
          </div>
        </section>

        <section className="section-shell">
          <div className="cta panel reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Looking for a Python and GenAI engineer who can deliver end to end.</h2>
            </div>

            <div className="cta-actions">
              <a className="button button-primary" href={`mailto:${person.email}`}>
                {person.email}
              </a>
              <a className="button button-secondary" href={person.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
