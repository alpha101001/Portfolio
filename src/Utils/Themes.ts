export const darkTheme = {
  bg: "#070814",
  bgLight: "#101624",
  primary: "#38d5ff",
  text_primary: "#f8fafc",
  text_secondary: "#cbd5e1",
  card: "rgba(15, 23, 42, 0.84)",
  card_light: "rgba(30, 41, 59, 0.92)",
  button: "#38d5ff",
  white: "#ffffff",
  black: "#000000",
  color: {
    background: "#070814",
    backgroundElevated: "#0b1020",
    surface: "rgba(15, 23, 42, 0.84)",
    surfaceStrong: "rgba(17, 24, 39, 0.96)",
    surfaceSoft: "rgba(56, 213, 255, 0.08)",
    border: "rgba(148, 163, 184, 0.18)",
    borderStrong: "rgba(56, 213, 255, 0.38)",
    text: "#f8fafc",
    textSoft: "#dbeafe",
    textMuted: "#cbd5e1",
    textSubtle: "#94a3b8",
    primary: "#38d5ff",
    primaryStrong: "#0ea5e9",
    accent: "#d946ef",
    accentSoft: "rgba(217, 70, 239, 0.14)",
    warning: "#facc15",
    success: "#34d399",
    danger: "#fb7185",
    focus: "#fde047",
  },
  gradient: {
    page:
      "linear-gradient(135deg, #07111d 0%, #0b1020 44%, #130d23 100%)",
    hero:
      "linear-gradient(135deg, rgba(56, 213, 255, 0.18), rgba(217, 70, 239, 0.14))",
    card:
      "linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(17, 24, 39, 0.76))",
  },
  shadow: {
    card: "0 22px 62px rgba(0, 0, 0, 0.3)",
    cardHover: "0 26px 68px rgba(0, 0, 0, 0.38), 0 0 30px rgba(56, 213, 255, 0.1)",
    glow: "0 0 30px rgba(56, 213, 255, 0.14)",
    accent: "0 16px 38px rgba(217, 70, 239, 0.16)",
  },
  glass: {
    blur: "22px",
    saturation: "155%",
    border: "rgba(189, 230, 255, 0.24)",
    highlight: "rgba(255, 255, 255, 0.18)",
    lowlight: "rgba(56, 213, 255, 0.08)",
    reflection: "rgba(56, 213, 255, 0.13)",
    fallback: "rgba(10, 16, 32, 0.94)",
    panel:
      "linear-gradient(145deg, rgba(15, 23, 42, 0.66), rgba(7, 12, 25, 0.42))",
    card:
      "linear-gradient(150deg, rgba(15, 23, 42, 0.72), rgba(10, 16, 32, 0.5))",
    control:
      "linear-gradient(145deg, rgba(56, 213, 255, 0.12), rgba(15, 23, 42, 0.58))",
    chip:
      "linear-gradient(145deg, rgba(15, 23, 42, 0.58), rgba(56, 213, 255, 0.08))",
    hero:
      "linear-gradient(140deg, rgba(56, 213, 255, 0.2), rgba(217, 70, 239, 0.12) 54%, rgba(15, 23, 42, 0.62))",
    shadow:
      "0 22px 70px rgba(0, 0, 0, 0.36), 0 0 45px rgba(56, 213, 255, 0.08)",
  },
  radius: {
    sm: "8px",
    md: "14px",
    lg: "22px",
    pill: "999px",
  },
  layout: {
    maxWidth: "1120px",
    navHeight: "86px",
  },
  transition: {
    fast: "160ms ease",
    base: "220ms ease",
    slow: "320ms ease",
  },
  zIndex: {
    background: 0,
    content: 1,
    nav: 50,
  },
};

export const lightTheme = darkTheme;

export type PortfolioTheme = typeof darkTheme;
