import { token } from './token';

// Equator suite elevation scale.
//
// Three stops per level rather than two: a hairline contact shadow to seat the
// edge, a short cast, and a wide soft one that reads as ambient light. The third
// stop is what makes a panel look like an object on the page instead of a
// bordered rectangle.
//
// The shadow is tinted with the ink the UI is built from (slate 11 18 32) rather
// than neutral black, which would grey the colour out of everything beneath it.
//
// In the dark "control-room" set a shadow has almost nothing to darken, so depth
// comes from a lit top edge plus a deeper, wider cast — the same components read
// raised in both themes.
export const BOX_SHADOW_TOKENS = {
  color: token({
    light: 'rgba(11, 18, 32, 0.08)',
    dark: 'rgba(0, 0, 0, 0.6)',
  }),
  // Resting: cards, panels, table containers.
  light: token({
    light:
      '0px 1px 1px 0px rgba(11, 18, 32, 0.05), 0px 2px 4px 0px rgba(11, 18, 32, 0.08), 0px 6px 14px -4px rgba(11, 18, 32, 0.10)',
    dark: '0px 1px 2px 0px rgba(0, 0, 0, 0.5), 0px 2px 6px 0px rgba(0, 0, 0, 0.4), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06)',
  }),
  // Lifted: hover, anything overlapping its neighbours.
  strong: token({
    light:
      '0px 1px 2px 0px rgba(11, 18, 32, 0.06), 0px 4px 8px 0px rgba(11, 18, 32, 0.09), 0px 12px 26px -6px rgba(11, 18, 32, 0.16)',
    dark: '0px 2px 5px 0px rgba(0, 0, 0, 0.55), 0px 8px 18px 0px rgba(0, 0, 0, 0.45), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.09)',
  }),
  underline: token({
    light: '0px 1px 0px 0px rgba(11, 18, 32, 0.36)',
    dark: '0px 1px 0px 0px rgba(0, 0, 0, 0.32)',
  }),
  // Floating: modals, dropdowns, the drag ghost.
  superHeavy: token({
    light:
      '0px 2px 4px 0px rgba(11, 18, 32, 0.06), 0px 8px 16px 0px rgba(11, 18, 32, 0.10), 0px 24px 48px -12px rgba(11, 18, 32, 0.24)',
    dark: '0px 6px 10px 0px rgba(0, 0, 0, 0.5), 0px 18px 40px 0px rgba(0, 0, 0, 0.6), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.10)',
  }),
};
