// sections.jsx — Nav, Hero, Specs, CTA/Form, Footer

const { useState, useEffect, useRef } = React;

/* NAV */
function Nav({ logoSrc }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: '#technology', label: 'Technology' },
    { href: '#specifications', label: 'Specifications' },
  ];
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Ternon">
          <img src={logoSrc} alt="Ternon" />
        </a>
        <div className="nav-links">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#contact" className="nav-cta">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}

/* HERO */
function Hero({ heroSrc }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src={heroSrc} alt="" />
        <div className="hero-bg-fade"></div>
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot"></span>Empa spinoff · ETH Zürich startup
          </div>
          <h1>
            <span className="y">High-capacity electrodes</span>
            <br />
            <span className="underline">for your solid-state batteries</span>
          </h1>
          <p className="hero-sub">
            Dry-coated electrodes, engineered for solid-state cells.
            High areal capacity, wide chemical compatibility, ready to accelerate your solid-state battery R&amp;D.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-k">Areal capacity</span>
              <span className="hero-meta-v">3–5 mAh/cm²</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-k">Electrolyte classes</span>
              <span className="hero-meta-v">Halides · Sulfides · Custom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SPECS */
function Specs() {
  return (
    <section className="specs-section" id="specifications">
      <div className="container section">
        <div className="specs-grid">
          <div>
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <div className="eyebrow"><span className="dot"></span>Electrode specifications</div>
              <h2>Sample-ready, in production today.</h2>
              <p className="lede">
                Engineering samples are available now. Larger formats and higher annual volumes are
                on the roadmap — talk to us about your integration timeline.
              </p>
            </div>
            <div className="spec-list">
              <div className="spec-row">
                <div className="spec-label">
                  <span className="k">Format</span>
                  <span className="name">Electrode dimensions</span>
                  <span className="note">10 × 20 cm available Q4 2026</span>
                </div>
                <div className="spec-value">5 × 10<span className="unit">cm</span></div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <span className="k">Loading</span>
                  <span className="name">Areal capacity</span>
                </div>
                <div className="spec-value">3–5<span className="unit">mAh/cm²</span></div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <span className="k">Chemistry</span>
                  <span className="name">Electrolyte classes</span>
                  <span className="note">Custom development campaigns on request</span>
                </div>
                <div className="spec-value spec-value--list">
                  <span className="ev">Halide</span>
                  <span className="ev">Sulfide</span>
                  <span className="ev">Custom</span>
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-label">
                  <span className="k">Throughput</span>
                  <span className="name">2026 production capacity</span>
                  <span className="note">Scaling toward MWh-class output</span>
                </div>
                <div className="spec-value">100<span className="unit">kWh</span></div>
              </div>
            </div>
          </div>

          <div className="specs-right">
            <div className="specs-visual">
              <div className="specs-visual-grid"></div>
              <div className="specs-visual-corner">Fig. 04 · Electrode dimensions</div>
              <svg className="electrode-svg" viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,204,0,.22)" strokeWidth="1" />
                  </pattern>
                  <pattern id="hatchGhost" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(244,242,232,.07)" strokeWidth="1" />
                  </pattern>
                </defs>

                {/* 10 × 20 cm sheet (roadmap) */}
                <rect x="95" y="30" width="50" height="100" fill="url(#hatchGhost)" stroke="rgba(244,242,232,.35)" strokeWidth="0.7" strokeDasharray="3 2" />
                <line x1="95" y1="23" x2="145" y2="23" stroke="rgba(244,242,232,.4)" strokeWidth="0.4" />
                <line x1="95" y1="19" x2="95" y2="27" stroke="rgba(244,242,232,.4)" strokeWidth="0.4" />
                <line x1="145" y1="19" x2="145" y2="27" stroke="rgba(244,242,232,.4)" strokeWidth="0.4" />
                <text x="120" y="17" fill="rgba(244,242,232,.7)" fontSize="5" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="0.8">10 cm</text>
                <line x1="153" y1="30" x2="153" y2="130" stroke="rgba(244,242,232,.4)" strokeWidth="0.4" />
                <line x1="149" y1="30" x2="157" y2="30" stroke="rgba(244,242,232,.4)" strokeWidth="0.4" />
                <line x1="149" y1="130" x2="157" y2="130" stroke="rgba(244,242,232,.4)" strokeWidth="0.4" />
                <text x="160" y="80" fill="rgba(244,242,232,.7)" fontSize="5" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="0.8" transform="rotate(90 160 80)">20 cm</text>
                <text x="120" y="143" fill="rgba(244,242,232,.55)" fontSize="4" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="1.4">AVAILABLE Q4 2026</text>

                {/* 5 × 10 cm sheet (current) */}
                <rect x="38" y="55" width="25" height="50" fill="url(#hatch)" stroke="#FFCC00" strokeWidth="1" />
                <line x1="38" y1="48" x2="63" y2="48" stroke="rgba(244,242,232,.6)" strokeWidth="0.4" />
                <line x1="38" y1="44" x2="38" y2="52" stroke="rgba(244,242,232,.6)" strokeWidth="0.4" />
                <line x1="63" y1="44" x2="63" y2="52" stroke="rgba(244,242,232,.6)" strokeWidth="0.4" />
                <text x="50.5" y="42" fill="#F4F2E8" fontSize="5" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="0.8">5 cm</text>
                <line x1="30" y1="55" x2="30" y2="105" stroke="rgba(244,242,232,.6)" strokeWidth="0.4" />
                <line x1="26" y1="55" x2="34" y2="55" stroke="rgba(244,242,232,.6)" strokeWidth="0.4" />
                <line x1="26" y1="105" x2="34" y2="105" stroke="rgba(244,242,232,.6)" strokeWidth="0.4" />
                <text x="23" y="80" fill="#F4F2E8" fontSize="5" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="0.8" transform="rotate(-90 23 80)">10 cm</text>
                <text x="50.5" y="143" fill="#FFCC00" fontSize="4" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="1.4">AVAILABLE NOW</text>
              </svg>
            </div>

            <figure className="specs-photo">
              <div className="specs-photo-frame">
                <img src="assets/electrode-photo.png" alt="Cathode electrode photographed on cutting mat with tweezers" />
                <div className="specs-photo-grid"></div>
                <div className="specs-photo-vignette"></div>
              </div>
              <figcaption className="specs-photo-cap">
                <span className="k">FIG. 05 · CATHODE SHEET</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CTA / FORM */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqbanyv';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ email: '', company: '', role: '', message: '', consent: false });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.errors?.[0]?.message || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Could not send. Please email contact@ternon.ch directly.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="form">
        <div className="form-success">
          <span className="t">Thanks — we'll be in touch.</span>
          <span className="s">
            A member of the Ternon team will get back to you as soon as we can.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Business email</label>
          <input id="email" type="email" required placeholder="you@company.com"
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" required placeholder="Cell assembler, OEM, integrator…"
            value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="role">Role</label>
        <input id="role" type="text" placeholder="e.g. Head of R&amp;D"
          value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })} />
      </div>

      <div className="field">
        <label htmlFor="message">Project context</label>
        <textarea id="message" placeholder="Cell format, target capacity, timeline…"
          value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })}></textarea>
      </div>

      <label className="checkbox">
        <input type="checkbox" required checked={data.consent}
          onChange={(e) => setData({ ...data, consent: e.target.checked })} />
        <span>I agree to be contacted by Ternon about this enquiry. We'll never share your details.</span>
      </label>

      <button type="submit" className="submit-btn" disabled={sending}>
        {sending ? 'Sending…' : 'Send enquiry'}
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {error && (
        <div style={{ color: '#FF7A5A', fontSize: 13, marginTop: -8 }}>
          {error}
        </div>
      )}
    </form>
  );
}

function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container section">
        <div className="cta-grid">
          <div className="cta-side">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot"></span>Get in touch
            </div>
            <h2>Building a solid-state cell? Let's talk electrodes.</h2>
            <p className="lede">
              Whether you need engineering samples, pricing, or technical detail for an integration
              study — send us a note and we'll get back to you as soon as we can.
            </p>
            <div className="cta-info">
              <div className="cta-info-row">
                <span className="k">Headquarters</span>
                <span className="v">Überlandstrasse 129<br />8600 Dübendorf, Switzerland</span>
              </div>
              <div className="cta-info-row">
                <span className="k">General enquiries</span>
                <span className="v"><a href="mailto:contact@ternon.ch">contact@ternon.ch</a></span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
function Footer({ logoSrc }) {
  return (
    <footer className="footer container">
      <div className="col">
        <img src={logoSrc} alt="Ternon" />
        <span style={{ marginTop: 10 }}>Überlandstrasse 129 · 8600 Dübendorf · Switzerland</span>
      </div>
      <div className="col right">
        <span className="small">Ternon is a prospective Empa spinoff and ETH Zürich startup.</span>
        <span style={{ marginTop: 10 }}>© {new Date().getFullYear()} Ternon · All rights reserved</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Specs, CTA, Footer });
