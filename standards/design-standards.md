# ستانداردەکانی سیستەمی دیزاین — Enterprise Design Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-DS-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Design System Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DS-2026-V1, IDG-SPEC-CMP-2026-V1, IDG-BRAND-COLOR-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard defines the rules for consuming design tokens, constructing reusable UI components, maintaining spatial rhythm, and preventing visual degradation across all IDG web applications.

---

# 2. پێداویستییە سەرەکییەکانی دیزاین — Core Design Requirements

1. **Tokenized Styling (Zero Hardcoding)**: All colors, typography, border radii, shadows, and spacing must consume design tokens defined in `design-system/design-tokens.md` or standard Tailwind CSS tokens.
2. **Anti-Slop Visual Discipline**:
   - Zero arbitrary glowing shadows, purple-to-blue gradients, or neon text.
   - Container padding must equal or exceed child item spacing (minimum 16px).
   - Corner radius nesting math enforced: `R_inner = R_outer - Padding`.
   - Button horizontal padding must equal exactly 2x vertical padding.
3. **Component Atomicity**: Components in `design-system/components.md` must remain pure, accessible, and self-contained with typed props.
4. **Fluid & Responsive Layouts**: Support viewport widths from `320px` (mobile) to `2560px` (4K) using CSS Grid and Flexbox with max-width content constraints (`1280px`).

---

# 3. حوکمڕانی و پێداچوونەوەی دیزاین — Governance & Review

- **Design Review Board**: All new UI components and token modifications must be vetted by the Design Systems Team before merging into production libraries.
