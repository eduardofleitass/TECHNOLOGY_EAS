export function Logo() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 34 34"
      width="34"
      height="34"
      role="img"
      aria-label="A3 Technology"
    >
      <defs>
        <linearGradient id="a3grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4fb3ff" />
          <stop offset="55%" stopColor="#1a86e8" />
          <stop offset="100%" stopColor="#0f5aa8" />
        </linearGradient>
      </defs>
      <path d="M17 1.8 30.6 9.3v15.4L17 32.2 3.4 24.7V9.3z" fill="url(#a3grad)" />
      <path d="M17 8.6 24.8 13 17 17.4 9.2 13z" fill="#ffffff" opacity="0.95" />
      <path
        d="M9.2 17.2 17 21.6l7.8-4.4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M9.2 21.6 17 26l7.8-4.4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="A3 Technology — inicio">
      <Logo />
      <span className="brand-text">
        <span className="brand-name">A3 TECHNOLOGY</span>
        <span className="brand-tagline">Infraestructura · Redes · Soluciones TI</span>
      </span>
    </a>
  );
}
