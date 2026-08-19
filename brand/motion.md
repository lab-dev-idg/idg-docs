# بزووتنەوە و ئەنیمەیشنی دیجیتاڵی — Enterprise Motion & Transition Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-BRAND-MOTION-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Motion & Animation Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DS-2026-V1, IDG-SPEC-CMP-2026-V1

---

# 1. بنەماکانی جووڵە و ئەنیمەیشن — Motion Principles

Motion in IDG digital products is functional, subtle, deterministic, and physically grounded. It provides cognitive clarity and spatial orientation rather than decorative entertainment.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. مەبەستدار و خێرا — FUNCTIONAL & PURPOSEFUL (150MS - 300MS)               │
│ Micro-interactions complete under 200ms to preserve immediate responsiveness│
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. چەماوەی فیزیایی سروشتی — NATURAL EASING CURVES                            │
│ Standard ease-out for entering elements; ease-in for exits                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ڕێزگرتن لە دەستڕاگەیشتن — PREFERS-REDUCED-MOTION COMPLIANCE              │
│ All transforms gracefully degrade to instant opacity fades when requested   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. کاتی ستاندارد و چەماوەی جووڵە — Timing & Easing Curves

| جۆری جووڵە — Motion Category | ماوە — Duration | چەماوە — Easing Curve | نموونەی بەکارهێنان — UI Application |
| :--- | :--- | :--- | :--- |
| **Micro-Interaction** | `100ms - 150ms` | `cubic-bezier(0, 0, 0.2, 1)` | Hover states, button clicks, checkbox toggles |
| **Expansion / Drawer** | `200ms - 250ms` | `cubic-bezier(0.4, 0, 0.2, 1)` | Dropdown menus, sidebar collapse, accordions |
| **Modal / Dialog Enter** | `250ms - 300ms` | `cubic-bezier(0, 0, 0.2, 1)` | Modal dialog enter, page section transitions |
| **Exit / Dismissal** | `150ms - 200ms` | `cubic-bezier(0.4, 0, 1, 1)` | Toast dismissal, tooltip fade-out |

---

# 3. دەستڕاگەیشتن و کەمکردنەوەی جووڵە — Reduced Motion Accessibility

In compliance with WCAG 2.2 AA (Success Criterion 2.3.3 Animation from Interactions):
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
