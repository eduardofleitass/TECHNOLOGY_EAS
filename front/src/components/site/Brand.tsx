import lockup from "../../assets/brand/logo-lockup-light.png";
import lockupWithTagline from "../../assets/brand/logo-lockup-tagline-light.png";

/**
 * Logo oficial de A3 TECHNOLOGY E.A.S.
 * Variante clara (tinta blanca + A3 azul) para fondos oscuros; el original
 * con tinta oscura esta en public/A3_Technology_logo_transparente.png.
 */
export function Brand({ tagline = false }: { tagline?: boolean }) {
  const src = tagline ? lockupWithTagline : lockup;

  return (
    <a href="#inicio" className="brand" aria-label="A3 Technology E.A.S — inicio">
      <img
        className="brand-logo"
        src={src}
        alt="A3 Technology E.A.S — Conectando ideas, construyendo futuros"
        width={tagline ? 580 : 549}
        height={tagline ? 108 : 100}
      />
    </a>
  );
}
