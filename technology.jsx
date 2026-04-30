// technology.jsx — Pinned scroll-driven Technology section
// Three slides advance horizontally as the user scrolls a tall pinned container.

const { useState: useTechState, useEffect: useTechEffect, useRef: useTechRef } = React;

function SlideAnatomy() {
  return (
    <div className="tech-anatomy-img">
      <img src={`assets/lib-vs-ssb.png?v=${Date.now()}`} alt="Cross-section comparison: Li-ion (graphite anode, separator, cathode in liquid electrolyte) vs solid-state (Li metal anode, solid electrolyte cathode)." />
    </div>
  );
}

// function SlideChallenge() {
//   return (
//     <svg viewBox="0 0 600 480" className="tech-diagram-svg" preserveAspectRatio="xMidYMid meet">
//       <defs>
//         <pattern id="slurry" width="4" height="4" patternUnits="userSpaceOnUse">
//           <circle cx="2" cy="2" r="0.6" fill="rgba(120,180,200,.35)" />
//         </pattern>
//       </defs>

//       <g fontFamily="JetBrains Mono" fontSize="10" fill="rgba(244,242,232,.55)" letterSpacing="1.5">
//         <text x="80" y="40" textAnchor="middle">MIX</text>
//         <text x="220" y="40" textAnchor="middle">COAT</text>
//         <text x="360" y="40" textAnchor="middle">DRY</text>
//         <text x="500" y="40" textAnchor="middle">PRESS</text>
//       </g>

//       <line x1="40" y1="170" x2="560" y2="170" stroke="rgba(244,242,232,.3)" strokeWidth="1" strokeDasharray="3 3" />
//       <line x1="40" y1="290" x2="560" y2="290" stroke="rgba(244,242,232,.3)" strokeWidth="1" strokeDasharray="3 3" />

//       {[80, 220, 360, 500].map((cx, i) => (
//         <g key={cx}>
//           <rect x={cx - 36} y={150} width={72} height={140} fill="rgba(244,242,232,.04)" stroke="rgba(244,242,232,.25)" strokeWidth="0.8" />
//           {(i === 1 || i === 2) && (
//             <rect x={cx - 28} y={180} width={56} height={80} fill="url(#slurry)" />
//           )}
//           {i === 3 && (
//             <>
//               <circle cx={cx} cy={210} r={18} fill="none" stroke="rgba(244,242,232,.5)" strokeWidth="1.2" />
//               <circle cx={cx} cy={250} r={18} fill="none" stroke="rgba(244,242,232,.5)" strokeWidth="1.2" />
//             </>
//           )}
//         </g>
//       ))}

//       <g>
//         <g transform="translate(220, 220)" stroke="#FF5C3D" strokeWidth="2">
//           <line x1="-14" y1="-14" x2="14" y2="14" />
//           <line x1="-14" y1="14" x2="14" y2="-14" />
//         </g>
//         <g transform="translate(360, 220)" stroke="#FF5C3D" strokeWidth="2">
//           <line x1="-14" y1="-14" x2="14" y2="14" />
//           <line x1="-14" y1="14" x2="14" y2="-14" />
//         </g>
//       </g>

//       <g transform="translate(80, 360)">
//         <text x="0" y="0" fill="rgba(244,242,232,.55)" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="2">PILOT-LINE YIELD</text>
//         <rect x="0" y="14" width="440" height="14" fill="rgba(244,242,232,.06)" stroke="rgba(244,242,232,.25)" strokeWidth="0.8" />
//         <rect x="0" y="14" width="240" height="14" fill="#FF5C3D" opacity="0.55" />
//         <text x="245" y="25" fill="#FF5C3D" fontSize="11" fontFamily="JetBrains Mono">&lt;60%</text>
//       </g>

//       <text x="300" y="450" fill="rgba(244,242,232,.4)" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="2">SOLVENTS DEGRADE THE ELECTROLYTE</text>
//     </svg>
//   );
// }

function SlideChallenge() {
  return (
    <div className="tech-anatomy-img">
      <img src={`assets/residual-voids.png?v=${Date.now()}`} alt="Cross-section of a slurry-coated solid-state electrode with residual voids." />
    </div>
  );
}

function SlideUSP() {
  return (
    <div className="tech-anatomy-img">
      <img src={`assets/line-photo.png?v=${Date.now()}`} alt="Photograph of Ternon's dry-coating production line." />
    </div>
  );
}

const TECH_SLIDES = [
  {
    n: '01',
    figCaption: 'Battery anatomy',
    eyebrow: 'The promise',
    title: 'Solid-state vs Li-ion.',
    body: "Solid-state batteries will be foundational to the technologies shaping the coming decades: robotics, drones, sustainable transport, advanced medical devices. Their promise is a step-change in energy density and operational safety. \n\nThis is not a distant prospect. The science is mature. Manufacturing at scale is the remaining frontier. ",
    bullets: [
      ['Energy density', 'up to 2x over Li-ion'],
      ['Safety', 'safe at extreme temperatures/charging conditions'],
    ],
    layout: 'image-left',
    Diagram: SlideAnatomy,
  },
  {
    n: '02',
    figCaption: 'The Swiss cheese problem: voids that block ion flow',
    eyebrow: 'The challenge',
    title: 'Manufacturing solid-state electrodes.',
    body: 'Today\'s lithium-ion electrode production technologies fail to deliver the key attributes solid-state batteries require. \n\nWhere lithium-ion electrodes are manufactured porous — electrolyte infiltrated as a later step — solid-state electrodes must remain virtually void-free and integrate the electrolyte during the coating process itself. \nWhere lithium-ion electrode production relies on solvent-based coating, solid-state materials degrade on solvent contact and demand ultra-low moisture environments. \n\nThe process gap is not incremental. Solid-state electrode manufacturing requires a fundamentally different approach.',
    bullets: [
      ['Material stability', 'Solvents can degrade sensitive solid electrolytes'],
      ['Porosity', 'Residual voids after manufacturing reduce performance'],
    ],
    layout: 'image-left',
    Diagram: SlideChallenge,
  },
  {
    n: '03',
    figCaption: 'Ternon\'s dry-coating line',
    eyebrow: 'The solution',
    title: "Ternon's dry-coating technology.",
    body: 'Ternon has developed a dry-coating process purpose-built for solid-state electrode production — no solvents, no moisture, no compromises on material integrity. We transform free-flowing powders into dense, cohesive electrode sheets, with the microstructure precision that solid-state performance demands. \n\nWe are a team of materials scientists and engineers obsessed with electrode microstructure. We handle the electrode so you can focus on the cell. ',
    bullets: [
      ['Materials integrity', 'No solvents and <0.1 ppm moisture in production \nto preserve sensitive solid-state materials'],
      ['Maximized performance', 'Ultra-low binder and residual void fractions \nfor peak ionic conductivity'],
      ['Scale', 'Continuous dry-coating line \ndesigned for volume production from day one'],
      ['Sustainability', 'Dramatically reduced energy consumption \nand elimination of toxic solvents'],
    ],
    layout: 'image-left',
    Diagram: SlideUSP,
  },
];

function Technology() {
  const wrapRef = useTechRef(null);
  const [progress, setProgress] = useTechState(0);
  const slideCount = TECH_SLIDES.length;

  useTechEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, total > 0 ? scrolled / total : 0));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const continuous = progress * (slideCount - 1);
  const currentIndex = Math.max(0, Math.min(slideCount - 1, Math.round(continuous)));

  return (
    <section className="tech-pin-wrap" id="technology" ref={wrapRef}>
      <div className="tech-pin-stage">
        <div className="tech-progress">
          <div className="tech-progress-track">
            <div className="tech-progress-fill" style={{ transform: `scaleX(${progress})` }}></div>
          </div>
          <div className="tech-progress-meta">
            <span className="tech-progress-eyebrow">
              <span className="dot"></span>Technology
            </span>
            <span className="tech-progress-count">
              <span className="cur">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="sep">/</span>
              <span className="tot">{String(slideCount).padStart(2, '0')}</span>
            </span>
          </div>
        </div>

        <div className="tech-slides">
          {TECH_SLIDES.map((s, i) => {
            const local = continuous - i;
            const DWELL = 0.25;
            const ease = (t) => {
              const c = Math.max(0, Math.min(1, t));
              return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
            };

            let translateX, opacity, scale;
            if (Math.abs(local) <= DWELL) {
              translateX = 0; opacity = 1; scale = 1;
            } else if (local < -DWELL) {
              const t = ease(Math.min(1, (Math.abs(local) - DWELL) / (1 - DWELL)));
              translateX = 60 * t; opacity = 1 - t; scale = 1 - 0.04 * t;
            } else {
              const t = ease(Math.min(1, (local - DWELL) / (1 - DWELL)));
              translateX = -40 * t; opacity = 1 - t; scale = 1 - 0.02 * t;
            }

            const Diagram = s.Diagram;
            return (
              <div
                key={s.n}
                className={`tech-slide tech-slide--${s.layout}`}
                style={{
                  transform: `translate3d(${translateX}%, 0, 0) scale(${scale})`,
                  opacity,
                  pointerEvents: i === currentIndex ? 'auto' : 'none',
                  zIndex: i === currentIndex ? 2 : 1,
                }}
                aria-hidden={i !== currentIndex}
              >
                <div className="tech-slide-inner">
                  <div className="tech-slide-diagram">
                    <div className={`tech-diagram-frame ${s.diagramClass || ''}`}>
                      <div className="tech-diagram-corner">
                        Fig. {s.n}{s.figCaption ? ` · ${s.figCaption}` : ''}
                      </div>
                      <Diagram />
                    </div>
                  </div>
                  <div className="tech-slide-text">
                    <div className="eyebrow tech-slide-eyebrow"><span className="dot"></span>{s.eyebrow}</div>
                    <h2 className="tech-slide-title">{s.title}</h2>
                    <p className="tech-slide-body">{s.body}</p>
                    <ul className="tech-slide-bullets">
                      {s.bullets.map(([k, v]) => (
                        <li key={k}>
                          <span className="k">{k}</span>
                          <span className="v">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Technology });
