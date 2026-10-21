"""Regenera los lockups horizontales del logo desde el maestro de public/.

    python scripts/build-brand-assets.py

Entrada:  public/A3_Technology_logo_transparente.png (lockup vertical 500x500)
Salida:   src/assets/brand/logo-lockup-dark.png          (header, tinta original)
          src/assets/brand/logo-lockup-tagline-dark.png  (pie, con bajada)
          src/assets/brand/logo-lockup-light.png         (variante clara, para fondos oscuros)
          src/assets/brand/logo-lockup-tagline-light.png
          public/favicon.png                             (emblema sobre placa navy)

El lockup original es cuadrado: el emblema arriba y el texto debajo. A 46 px de
alto el nombre queda ilegible, por eso se recompone en horizontal (emblema a la
izquierda, nombre y bajada a la derecha). Las coordenadas de recorte salen del
maestro y solo sirven para ese archivo; si cambia, hay que reubicarlas con la
deteccion de bandas que esta al final del script.

Requiere Pillow.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / "public" / "A3_Technology_logo_transparente.png"
OUT = ROOT / "src" / "assets" / "brand"

# Recortes medidos sobre el maestro (x0, y0, x1, y1)
EMBLEM = (89, 39, 409, 335)
NAME = (22, 352, 479, 393)
TAGLINE = (22, 394, 485, 419)

A3_END = 96  # ancho de "A3" dentro del recorte del nombre
BLUE = (79, 179, 255)


def clean_alpha(img: Image.Image, thr: int = 30) -> Image.Image:
    """Saca el ruido de alpha muy bajo (halos) sin tocar el color."""
    img = img.copy()
    px = img.load()
    for y in range(img.size[1]):
        for x in range(img.size[0]):
            r, g, b, a = px[x, y]
            if a and a < thr:
                px[x, y] = (0, 0, 0, 0)
    return img


def to_light(img: Image.Image, a3: bool = False) -> Image.Image:
    """Tinta navy -> blanco; el bloque A3 pasa al azul de marca."""
    img = img.copy()
    px = img.load()
    for y in range(img.size[1]):
        for x in range(img.size[0]):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if a < 30:
                px[x, y] = (0, 0, 0, 0)
            elif a3 and x < A3_END:
                px[x, y] = (*BLUE, min(255, int(a * 1.7)))
            elif max(r, g, b) < 120 and (b - r) < 70:
                px[x, y] = (255, 255, 255, a)
    return img


def resize_h(img: Image.Image, height: int) -> Image.Image:
    width = max(1, round(img.size[0] * height / img.size[1]))
    return img.resize((width, height), Image.LANCZOS)


def build(emblem, name, tagline, *, em_h, name_h, tag_h=None, gap=18, text_gap=8, pad=6):
    E = resize_h(emblem, em_h)
    N = resize_h(name, name_h)
    T = resize_h(tagline, tag_h) if tag_h else None
    text_w = max(N.size[0], T.size[0] if T else 0)
    text_h = N.size[1] + (text_gap + T.size[1] if T else 0)
    W = pad * 2 + E.size[0] + gap + text_w
    H = max(E.size[1], text_h) + pad * 2
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    canvas.alpha_composite(E, (pad, (H - E.size[1]) // 2))
    x, y = pad + E.size[0] + gap, (H - text_h) // 2
    canvas.alpha_composite(N, (x, y))
    if T:
        canvas.alpha_composite(T, (x, y + N.size[1] + text_gap))
    return canvas


# --- Favicon ---------------------------------------------------------------
# El emblema completo no sobrevive a 16 px: los rayos y el anillo se mezclan en
# una mancha. Para el icono se usa el nucleo (anillo + manos), recortado en
# circulo para sacar los rayos, sobre una placa clara con el borde apenas
# marcado: se lee igual en pestanas claras y oscuras.
CORE_CENTER = (249, 187)  # centro del nucleo, en coordenadas del maestro
CORE_RADIUS = 86
ICON_SIZE = 512
ICON_FILL = 0.84
ICON_PLATE = (244, 248, 253)
ICON_EDGE = (214, 227, 242)


def icon_core(master: Image.Image) -> Image.Image:
    """Nucleo del emblema (anillo + manos) recortado en circulo. Los rayos que
    salen del anillo se cortan con un borde suave para que no queden tallos."""
    cx, cy, r = *CORE_CENTER, CORE_RADIUS
    core = master.crop((cx - r, cy - r, cx + r, cy + r)).convert("RGBA")
    mask = Image.new("L", core.size, 0)
    ImageDraw.Draw(mask).ellipse((0, 0, core.size[0] - 1, core.size[1] - 1), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(6))
    core.putalpha(Image.composite(core.getchannel("A"), Image.new("L", core.size, 0), mask))
    return core


def icon_tile(core: Image.Image, size: int, fill: float = ICON_FILL) -> Image.Image:
    tile = Image.new("RGBA", (ICON_SIZE, ICON_SIZE), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle(
        (0, 0, ICON_SIZE - 1, ICON_SIZE - 1),
        radius=int(ICON_SIZE * 0.22),
        fill=(*ICON_PLATE, 255),
        outline=(*ICON_EDGE, 255),
        width=max(2, ICON_SIZE // 128),
    )
    side = int(ICON_SIZE * fill)
    c = core.resize((side, side), Image.LANCZOS)
    tile.alpha_composite(c, ((ICON_SIZE - side) // 2, (ICON_SIZE - side) // 2))
    return tile.resize((size, size), Image.LANCZOS)


def build_favicons(master: Image.Image) -> None:
    public = ROOT / "public"
    core = icon_core(master)

    # .ico multi-tamano: Windows, Firefox y marcadores viejos
    frames = [icon_tile(core, s, 0.88 if s <= 32 else ICON_FILL) for s in (16, 32, 48, 64)]
    frames[-1].save(
        public / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
        append_images=frames[:-1],
    )

    # PNG para navegadores modernos (sizes=32) y para la pantalla de inicio de iOS
    icon_tile(core, 32, 0.88).save(public / "favicon-32.png")
    # iOS ignora la transparencia: se entrega opaco
    icon_tile(core, 180, 0.8).convert("RGB").save(public / "apple-touch-icon.png")


def main() -> None:
    master = Image.open(MASTER).convert("RGBA")
    em, nm, tg = (master.crop(box) for box in (EMBLEM, NAME, TAGLINE))
    OUT.mkdir(parents=True, exist_ok=True)

    # Tinta original (fondos claros, es la que usa el sitio hoy)
    build(clean_alpha(em), clean_alpha(nm), clean_alpha(tg), em_h=88, name_h=38).save(
        OUT / "logo-lockup-dark.png"
    )
    build(clean_alpha(em), clean_alpha(nm), clean_alpha(tg), em_h=96, name_h=40, tag_h=15).save(
        OUT / "logo-lockup-tagline-dark.png"
    )

    # Variante clara (fondos oscuros)
    light_em, light_nm, light_tg = to_light(em), to_light(nm, a3=True), to_light(tg)
    build(light_em, light_nm, light_tg, em_h=88, name_h=38).save(
        OUT / "logo-lockup-light.png"
    )
    build(light_em, light_nm, light_tg, em_h=96, name_h=40, tag_h=15).save(
        OUT / "logo-lockup-tagline-light.png"
    )

    build_favicons(master)
    print("listo:", ", ".join(sorted(p.name for p in OUT.glob("*.png"))))


def locate_bands() -> None:
    """Ayuda a reubicar los recortes si cambia el maestro: imprime las bandas
    verticales con tinta para separar emblema, nombre y bajada."""
    img = Image.open(MASTER).convert("RGBA")
    px = img.load()
    bands, start = [], None
    for y in range(img.size[1]):
        ink = any(px[x, y][3] > 30 for x in range(0, img.size[0], 2))
        if ink and start is None:
            start = y
        elif not ink and start is not None:
            bands.append((start, y - 1))
            start = None
    if start is not None:
        bands.append((start, img.size[1] - 1))
    for y0, y1 in bands:
        print(f"banda y={y0}-{y1} (alto {y1 - y0 + 1})")


if __name__ == "__main__":
    main()
