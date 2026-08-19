# ستانداردەکانی دەستڕاگەیشتن و گشتگیری — Enterprise Accessibility Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-A11Y-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Accessibility & UX Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-CMP-2026-V1, IDG-BRAND-VISUAL-2026-V1

---

# 1. مەبەست و بنەماکانی دەستڕاگەیشتن — Purpose & Accessibility Principles

This standard mandates that all web portals, digital consoles, and documentation interfaces developed across Iraq Digital Gateway conform strictly to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standard.

---

# 2. پێداویستییە سەرەکییەکانی دەستڕاگەیشتن — Core Accessibility Requirements

1. **Color Contrast**:
   - Body copy & interactive text: Minimum **4.5:1** contrast against background.
   - Large text (>= 24px) & UI components: Minimum **3.0:1** contrast.
2. **Keyboard Navigability**:
   - 100% of interactive elements (buttons, inputs, tabs, modals) accessible via keyboard alone.
   - Visible, high-contrast focus rings (`outline: 2px solid #087BFF; outline-offset: 2px`).
   - Zero keyboard focus traps.
3. **Screen Reader Semantics**:
   - Proper landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`).
   - Meaningful heading structures (`H1` -> `H2` -> `H3` without skipped levels).
   - Dynamic states communicated via ARIA attributes (`aria-expanded`, `aria-selected`, `aria-live`).
4. **Touch & Click Target Sizing**: Minimum interactive touch target area of **44x44 CSS pixels** on mobile and touch devices.
5. **Reduced Motion**: Respect user OS preferences for `prefers-reduced-motion: reduce`.

---

# 3. پشکنین و حوکمڕانی — Governance & Automated Auditing

- **CI/CD Automated Audits**: Automated Lighthouse / axe-core accessibility checks blocking PRs with accessibility violations.
- **Bi-annual Manual Audits**: Manual screen reader verification with NVDA, VoiceOver, and Orca across English, Arabic, and Kurdish interfaces.
