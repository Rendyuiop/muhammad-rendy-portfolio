import DataFlowDemo from "@/components/data-flow-demo";

function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "down" | "right" | "up" }) {
  const paths = {
    "up-right": <><path d="M5 19 19 5" /><path d="M8 5h11v11" /></>,
    down: <><path d="M12 4v16" /><path d="m18 14-6 6-6-6" /></>,
    right: <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>,
    up: <><path d="M12 20V4" /><path d="m6 10 6-6 6 6" /></>,
  };
  return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[direction]}</svg>;
}

const projects = [
  { number: "01", category: "DATA PLATFORM", title: "Crypto Data Platform", description: "An end-to-end streaming and batch platform built around a Bronze–Silver–Gold architecture for reliable, analytics-ready crypto data.", impact: "80% less storage usage", stack: ["Airflow", "Kafka", "Spark", "dbt", "MinIO"], href: "https://github.com/Rendyuiop/crypto-data-platform", featured: true },
  { number: "02", category: "FULLSTACK · IOT · AI", title: "Smart Inverter", description: "An IoT energy management system connecting embedded devices, real-time monitoring, cloud control, and ML-powered load prioritization.", impact: "End-to-end IoT system", stack: ["STM32", "ESP", "ML", "Dashboard"], href: "https://capstone-asli-rendyuiops-projects.vercel.app", featured: false },
  { number: "03", category: "AI · NLP", title: "LokerHub", description: "A resume classification pipeline that parses PDF documents and predicts 25 job categories from 2,400+ training samples.", impact: "25 job categories", stack: ["Python", "NLP", "TF-IDF", "Naive Bayes"], href: "https://github.com/mfachrizalg/LokerHub", featured: false },
  { number: "04", category: "DATA-DRIVEN WEB", title: "Mangrove Karangjaladri", description: "A public-facing village and mangrove ecosystem website designed with local stakeholders to improve transparency and awareness.", impact: "Live in production", stack: ["Web Development", "Content", "Deployment"], href: "https://karangjaladri.desa.id", featured: false },
] as const;

const skills = [
  { label: "Data platforms", items: "Apache Airflow · Alibaba Cloud DataWorks · BigQuery · Kafka · Spark · dbt · MinIO" },
  { label: "Engineering", items: "Python · SQL · Docker · NGINX · Git · C/C++ · Java · MongoDB" },
  { label: "AI / ML", items: "NLP · TF-IDF · CNN · TensorFlow · PDF parsing · Data preprocessing" },
  { label: "Systems", items: "Backend APIs · IoT · STM32 · ESP32 · FreeRTOS · Distributed systems" },
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Muhammad Rendy home">MR<span>.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a className="nav-contact" href="#contact">Let&apos;s talk <span><ArrowIcon /></span></a></div>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for data engineering opportunities</p>
          <h1>Building the systems<br /><em>behind the data.</em></h1>
          <p className="hero-description">I&apos;m Muhammad Rendy, a <strong>Data Engineer</strong> focused on reliable data platforms, scalable pipelines, and end-to-end products that turn complex data into useful outcomes.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span><ArrowIcon direction="down" /></span></a><a className="text-link" href="/resume.pdf" download>Download resume <span><ArrowIcon direction="down" /></span></a><a className="text-link hero-email" href="mailto:m.rendy111103@gmail.com">Email me <span><ArrowIcon /></span></a></div>
          <div className="hero-proof"><div><strong>650+</strong><span>legacy DAGs cataloged</span></div><div><strong>38</strong><span>workloads migrated</span></div><div><strong>80%</strong><span>storage reduction</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Data platform architecture illustration">
          <div className="visual-label">DATA PLATFORM / 001</div>
          <div className="architecture-card"><div className="architecture-topline"><span>pipeline.status</span><span className="live-pill">LIVE</span></div><div className="pipeline"><div className="pipeline-node"><small>01</small><strong>INGEST</strong><span>Kafka · APIs</span></div><div className="pipeline-line"><i /></div><div className="pipeline-node"><small>02</small><strong>PROCESS</strong><span>Spark · Airflow</span></div><div className="pipeline-line"><i /></div><div className="pipeline-node"><small>03</small><strong>DELIVER</strong><span>BigQuery · dbt</span></div></div><div className="architecture-foot"><span>bronze</span><span>silver</span><span>gold</span></div></div>
          <div className="visual-index">01 <span>/</span> 04</div>
        </div>
      </section>

      <section className="intro-band"><div className="section-shell intro-grid"><p className="section-kicker">01 / THE FOCUS</p><div><h2>Data engineering is the core.<br /><span>End-to-end thinking is the edge.</span></h2><p className="body-copy">From cataloging enterprise workloads in <strong>Alibaba Cloud DataWorks</strong> to shipping fullstack IoT products and machine learning pipelines, I work across the layers needed to make a system useful, observable, and dependable.</p><div className="tech-strip"><span>Alibaba Cloud DataWorks</span><span>Apache Airflow</span><span>Apache Kafka</span><span>Apache Spark</span><span>BigQuery</span></div></div></div></section>

      <DataFlowDemo />

      <section className="work-section section-shell" id="work"><div className="section-heading"><div><p className="section-kicker">03 / SELECTED WORK</p><h2>Proof, not promises.</h2></div><p className="heading-note">A selection of data platforms,<br />intelligent systems, and products.</p></div><div className="project-grid">{projects.map((project) => <a className={`project-card ${project.featured ? "project-featured" : ""}`} href={project.href} target="_blank" rel="noreferrer" key={project.number}><div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div><div className="project-content"><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-footer"><span className="impact">↳ {project.impact}</span><span className="arrow"><ArrowIcon /></span></div><div className="stack-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></a>)}</div></section>

      <section className="experience-section section-shell" id="experience"><div className="section-heading"><div><p className="section-kicker">04 / EXPERIENCE</p><h2>Built in real systems.</h2></div><p className="heading-note">Enterprise data operations<br />and distributed systems.</p></div><div className="experience-list"><article className="experience-item"><div className="experience-date">JUN 2026 — PRESENT</div><div><h3>Data Engineer Platform Intern <span><ArrowIcon /></span></h3><p className="company">DANA · PT Espay Debit Indonesia Koe</p><ul><li>Cataloged <strong>650+ legacy DAGs</strong> from Alibaba Cloud DataWorks, documenting delta, staging, full-scale, and partitioned load patterns.</li><li>Migrating <strong>38 table and DAG workloads</strong> from Apache Airflow 2 to Airflow 3 while maintaining orchestration compatibility.</li><li>Resolved <strong>20+ data synchronization and backfill tickets</strong> across Backend, Risk, and other teams.</li></ul><div className="experience-tags"><span>Alibaba Cloud DataWorks</span><span>Airflow</span><span>BigQuery</span></div></div></article><article className="experience-item"><div className="experience-date">JAN 2025 — FEB 2025</div><div><h3>Data Engineer Intern <span><ArrowIcon /></span></h3><p className="company">PT PLN (Persero) · Head Office</p><ul><li>Built an Apache Kafka-based distributed messaging system for reliable internal server communication.</li><li>Designed a scalable producer-consumer architecture and optimized data flow across enterprise pipelines.</li></ul><div className="experience-tags"><span>Apache Kafka</span><span>Distributed systems</span></div></div></article></div></section>

      <section className="ai-section section-shell"><div className="ai-heading"><p className="section-kicker">05 / AI-NATIVE ENGINEERING</p><h2>Fast with AI.<br /><em>Responsible by default.</em></h2></div><div className="ai-copy"><p>I actively use AI to accelerate research, coding, documentation, and system design. During my work at DANA, I was trained to work with <strong>agentic AI</strong>—using agents as collaborators while keeping engineering judgment, review, and ownership with the human.</p><p>My rule is simple: protect confidential information, respect governance, and understand exactly what goes into production. This portfolio itself was built with AI assistance—then reviewed, shaped, and owned end-to-end by me.</p><div className="ai-principles"><span>01 / Confidentiality</span><span>02 / Governance</span><span>03 / Human review</span></div></div></section>

      <section className="skills-section section-shell" id="skills"><div className="section-heading"><div><p className="section-kicker">06 / TOOLKIT</p><h2>Comfortable across<br /><span>the whole data loop.</span></h2></div></div><div className="skills-grid">{skills.map((skill, index) => <div className="skill-card" key={skill.label}><span className="skill-number">0{index + 1}</span><h3>{skill.label}</h3><p>{skill.items}</p></div>)}</div></section>

      <section className="contact-section section-shell" id="contact"><p className="section-kicker">07 / CONTACT</p><h2>Have a data problem<br /><em>worth solving?</em></h2><a className="contact-email" href="mailto:m.rendy111103@gmail.com">m.rendy111103@gmail.com <span><ArrowIcon /></span></a><div className="contact-bottom"><span>Jakarta, Indonesia</span><div><a href="https://www.linkedin.com/in/rendyuiop/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a><a href="https://github.com/Rendyuiop" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a></div></div></section>
      <footer className="footer section-shell"><span>© 2026 Muhammad Rendy</span><span>Designed &amp; engineered with intent.</span><a href="#top">Back to top <ArrowIcon direction="up" /></a></footer>
    </main>
  );
}
