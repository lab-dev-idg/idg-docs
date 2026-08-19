# ناسنامەی بینراو و ڕێکخستنی سیستەم — Visual Identity Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-BRAND-VISUAL-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Visual Identity Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DS-2026-V1, IDG-SPEC-CMP-2026-V1

---

# 1. بنەماکانی دیزاینی بینراو — Visual Identity Principles

The visual language of Iraq Digital Gateway is rooted in mathematical balance, sovereign prestige, high contrast legibility, and architectural density.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. پێکهاتەی ئەندازەیی ورد — MATHEMATICAL PRECISION & SPATIAL RHYTHM         │
│ Baseline grid alignment, strict 4px/8px modular scales, nested radii math   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. چڕی و ڕوونی زانیاری — HIGH INFORMATION DENSITY WITH BREATHING ROOM       │
│ Dense, scannable data layouts paired with intentional macro negative space  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. گونجاوی لەگەڵ ئاڕاستەی زمان — NATIVE BI-DIRECTIONAL SYMMETRY (LTR/RTL)    │
│ Equal visual weight and optical balance across English (LTR) and AR/CKB(RTL)│
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. ڕەتکردنەوەی شێوازی کاتی — ANTI-TREND PERMANENCE                          │
│ Zero arbitrary neon glows, zero low-contrast text, zero decorative clutter  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. ڕێکخستنی ڕووبەر و بۆشاییەکان — Layout, Density & Spatial Geometry

- **Grid Architecture**: 12-column responsive fluid grid with maximum container width constrained to `1280px` (`max-w-7xl`) to avoid edge distortion on ultra-wide monitors.
- **Spacing Steps**: Standard 8-point spatial rhythm (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- **Mathematical Radius Rule**: When nesting containers, inner corner radius equals outer corner radius minus padding distance (`R_inner = R_outer - Padding`).
- **Depth & Elevation**: Subtle 1px borders with layered micro-shadows rather than heavy drop shadows.

---

# 3. جیاکردنەوەی ژینگەی تاریک و ڕووناک — Light & Dark Mode Visual Hierarchy

- **Light Mode (Default Enterprise Standard)**:
  - Canvas: Pure slate off-white (`#F8FAFC`).
  - Containers: White (`#FFFFFF`) with 1px border (`#E2E8F0`).
  - Typography: High contrast deep slate (`#0F172A`).
- **Dark Mode (Console / High Density Standard)**:
  - Canvas: IDG Deep Navy (`#06172B`) / Midnight Graphite (`#0F172A`).
  - Containers: Deep slate panels (`#1E293B`) with 1px border (`#334155`).
  - Typography: Crisp cool white (`#F8FAFC`) and muted slate (`#94A3B8`).
