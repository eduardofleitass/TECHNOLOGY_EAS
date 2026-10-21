import lockup from "../../assets/brand/logo-lockup-dark.png";
import lockupWithTagline from "../../assets/brand/logo-lockup-tagline-dark.png";

/**
 * Logo oficial de A3 TECHNOLOGY E.A.S en su tinta original, para fondos claros.
 * El maestro sin recortar esta en public/A3_Technology_logo_transparente.png.
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
