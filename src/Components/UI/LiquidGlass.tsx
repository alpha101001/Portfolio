export const LiquidGlassFilter = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="0"
    height="0"
    style={{ position: "absolute" }}
  >
    <filter id="portfolio-liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.012 0.018"
        numOctaves="1"
        seed="12"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="1.2" result="softNoise" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softNoise"
        scale="8"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
