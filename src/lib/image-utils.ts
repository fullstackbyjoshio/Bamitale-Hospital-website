interface SrcSetOptions {
  src: string;
  widths: number[];
  sizes?: string;
}

export function generateSrcSet({ src, widths }: SrcSetOptions): string {
  // Assumes your build pipeline or you manually created resized versions
  // e.g., image-400w.webp, image-800w.webp, image-1200w.webp
  return widths
    .map((w) => {
      const base = src.replace('.webp', '');
      return `${base}-${w}w.webp ${w}w`;
    })
    .join(', ');
}

export function getImageSrc(src: string, width: number): string {
  return src.replace('.webp', `-${width}w.webp`);
}