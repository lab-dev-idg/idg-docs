# سیستەمی ئایکۆنۆگرافی — Enterprise Iconography Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-BRAND-ICON-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Design System Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-CMP-2026-V1, IDG-SPEC-LOCALIZATION-2026-V1

---

# 1. بنەماکانی ئایکۆنۆگرافی — Iconography Principles

All icons used across IDG digital properties adhere to the standard Lucide/Feather stroke family, maintaining clean vector geometry, consistent 1.5px/2px stroke weight, and directional logic.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. تۆڕی ئەندازەیی — 24PX MASTER PIXEL-GRID                                 │
│ Designed on a 24x24px canvas with 2px inner safety margins                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. ئەستووری هێڵەکان — UNIFORM STROKE WEIGHT (1.5PX - 2.0PX)                 │
│ Consistent optical density matching body font weights                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. وەرگەڕانی بەپێی ئاڕاستەی زمان — RTL DIRECTIONAL FLIPPING LOGIC           │
│ Navigational arrows and progression icons automatically mirror in RTL mode  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. ڕێساکانی ئاڕاستە لە نێوان عەرەبی/کوردی و ئینگلیزی — Bi-Directional Mirroring Rules

- **Icons that MUST Flip in RTL (Arabic / Kurdish Sorani)**:
  - Navigational chevrons, arrows, breadcrumb delimiters, progress steps, back/forward buttons, drawers.
- **Icons that NEVER Flip in RTL**:
  - Clocks (time progresses clockwise universally), search magnifying glasses (universal optical symbol), audio/video playback icons, document symbols, brand logos.

---

# 3. دەستڕاگەیشتن و ناونانی وەسفی — Accessibility & Semantic Labeling

1. **Decorative Icons**: When an icon accompanies text (e.g. `<button><Copy /> Copy</button>`), it must be marked with `aria-hidden="true"` to prevent duplicate screen reader announcements.
2. **Standalone Icon Buttons**: When an icon button lacks visible text, it must include an explicit `aria-label` localized into the active language (`en-US`, `ar-IQ`, `ckb-IQ`).
