// ─── Design Tokens ───────────────────────────────────────────────────────────

export const C = {
    bg:        "#0A0A0F",
    surface:   "#111118",
    border:    "#1E1E2A",
    accent:    "#7FFFD4",   // aquamarine
    accentDim: "#3DFFC4",
    muted:     "#4A4A6A",
    text:      "#E8E8F0",
    subtext:   "#8888AA",
  };
  
  export const FONT_DISPLAY = `'DM Serif Display', 'Georgia', serif`;
  export const FONT_BODY    = `'DM Sans', 'Helvetica Neue', sans-serif`;
  export const FONT_MONO    = `'JetBrains Mono', 'Fira Code', monospace`;
  
  // ─── Keyframe Animations ─────────────────────────────────────────────────────
  // Import keyframes from @chakra-ui/react and use these strings
  
  export const fadeUpKeyframe = `
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  `;
  
  export const fadeInKeyframe = `
    from { opacity: 0; }
    to   { opacity: 1; }
  `;
  
  export const shimmerKeyframe = `
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  `;