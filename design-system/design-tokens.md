# Iraq Digital Gateway (IDG) Enterprise Design System Architecture Specification

## Document Identification
- **Document Identifier**: IDG-SPEC-DS-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon deployment of new corporate brand entities

---

# 1. Executive Overview

The Iraq Digital Gateway (IDG) Enterprise Design System Architecture defines the foundational visual tokens, component standards, layout paradigms, typography scales, accessibility thresholds, and multi-brand themes across all digital products, platforms, portals, web applications, and native mobile interfaces operated by IDG and its portfolio units.

This specification serves as the permanent constitutional design standard governing user interfaces across the entire IDG enterprise ecosystem, including IDG Corporate (`idg.global`), AI Gate Iraq (`aigate.iq`), future product lines (`Product 002+`), government sovereign portals, and developer hubs.

---

# 2. Design Philosophy

The IDG Design System is rooted in three foundational pillars:

1. **Sovereign Authority & Institutional Trust**: Visual structures reflect enterprise stability, regulatory compliance, data security, and national technological leadership.
2. **Deterministic Clarity & Zero Noise**: Interfaces prioritize task efficiency, information density, high legibility, and predictable interaction responses over decorative noise or trend-driven ornamentation.
3. **Inclusive Bi-Directional Equity**: Interfaces treat Left-to-Right (LTR) and Right-to-Left (RTL) languages with total functional and optical parity, ensuring flawless native experiences for English, Arabic, and Kurdish Sorani users.

---

# 3. Enterprise Design Principles

- **Token-Driven Single Source of Truth**: All visual attributes (color, typography, space, elevation, motion) are strictly declared as semantic design tokens. No hardcoded or arbitrary visual values are permitted in production codebases.
- **Systemic Modular Scalability**: Atomic architecture guarantees that component definitions remain immutable and reusable across unlimited future products and business units.
- **Accessibility by Construction**: Every component pattern natively fulfills WCAG 2.2 Level AA compliance, accommodating screen readers, keyboard navigation, high contrast modes, and reduced motion settings without custom overrides.
- **Multi-Brand Isolation & Inheritance**: Sub-brands (such as AI Gate Iraq) inherit global enterprise foundation tokens while maintaining isolated sub-brand themes for primary visual identities.

---

# 4. Atomic Design Architecture

The IDG Design System enforces a strict five-tier Atomic Hierarchy:

```
[Tier 1: Design Tokens] (Raw Values & Semantic References)
            │
            ▼
[Tier 2: Atoms] (Base Elements: Buttons, Inputs, Icons, Typography)
            │
            ▼
[Tier 3: Molecules] (Form Groups, Search Bars, Table Headers, Card Modules)
            │
            ▼
[Tier 4: Organisms] (Navigation Header, Data Tables, Sidebar Drawer, Footer)
            │
            ▼
[Tier 5: Templates & Pages] (Dashboard Layouts, Documentation Viewports, Portals)
```

1. **Tokens**: Raw primitive values mapped to semantic aliases (e.g., `color.brand.primary` -> `color.surface.action`).
2. **Atoms**: Basic indivisible UI elements (e.g., badge, icon button, text input).
3. **Molecules**: Combinations of two or more atoms functioning as a single unit (e.g., input with label and validation helper).
4. **Organisms**: Complex, distinct visual sections comprising multiple molecules and atoms (e.g., global topbar, data grid).
5. **Templates & Views**: Structural page frames binding organisms to dynamic data models.

---

# 5. Design Token System Structure

Design tokens are categorized into three operational layers: **Primitive Tokens** (raw scale values), **Semantic Tokens** (purpose-driven abstract references), and **Component Tokens** (scoped to specific UI components).

## 5.1 Color Tokens Schema
- `color.primitive.slate.50` through `color.primitive.slate.950`
- `color.primitive.blue.50` through `color.primitive.blue.950`
- `color.primitive.emerald.50` through `color.primitive.emerald.950`
- `color.primitive.amber.50` through `color.primitive.amber.950`
- `color.primitive.rose.50` through `color.primitive.rose.950`
- `color.semantic.background.default`
- `color.semantic.background.subtle`
- `color.semantic.surface.default`
- `color.semantic.surface.elevated`
- `color.semantic.text.primary`
- `color.semantic.text.secondary`
- `color.semantic.text.muted`
- `color.semantic.border.default`
- `color.semantic.border.strong`
- `color.semantic.status.success`
- `color.semantic.status.warning`
- `color.semantic.status.danger`

## 5.2 Typography Tokens Schema
- `font.family.sans.en`: `"Plus Jakarta Sans", system-ui, -apple-system, sans-serif`
- `font.family.serif.en`: `"Playfair Display", Georgia, serif`
- `font.family.sans.ar`: `"Noto Sans Arabic", "Readex Pro", sans-serif`
- `font.family.sans.ckb`: `"Noto Sans Arabic", "Rabar", sans-serif`
- `font.family.mono`: `"JetBrains Mono", "Fira Code", monospace`
- `font.size.xs`: `0.75rem` (12px)
- `font.size.sm`: `0.875rem` (14px)
- `font.size.base`: `1.000rem` (16px)
- `font.size.lg`: `1.125rem` (18px)
- `font.size.xl`: `1.250rem` (20px)
- `font.size.2xl`: `1.500rem` (24px)
- `font.size.3xl`: `1.875rem` (30px)
- `font.size.4xl`: `2.250rem` (36px)
- `font.size.5xl`: `3.000rem` (48px)
- `font.weight.regular`: `400`
- `font.weight.medium`: `500`
- `font.weight.semibold`: `600`
- `font.weight.bold`: `700`

## 5.3 Spacing & Radius Tokens Schema
- `spacing.05`: `0.125rem` (2px)
- `spacing.1`: `0.250rem` (4px)
- `spacing.2`: `0.500rem` (8px)
- `spacing.3`: `0.750rem` (12px)
- `spacing.4`: `1.000rem` (16px)
- `spacing.6`: `1.500rem` (24px)
- `spacing.8`: `2.000rem` (32px)
- `spacing.12`: `3.000rem` (48px)
- `spacing.16`: `4.000rem` (64px)
- `radius.none`: `0px`
- `radius.sm`: `0.250rem` (4px)
- `radius.md`: `0.375rem` (6px)
- `radius.lg`: `0.500rem` (8px)
- `radius.xl`: `0.750rem` (12px)
- `radius.2xl`: `1.000rem` (16px)
- `radius.full`: `9999px`

## 5.4 Elevation & Shadow Tokens
- `elevation.flat`: `none`
- `elevation.sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- `elevation.md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- `elevation.lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- `elevation.xl`: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## 5.5 Motion Tokens
- `motion.duration.fast`: `150ms`
- `motion.duration.normal`: `250ms`
- `motion.duration.slow`: `350ms`
- `motion.easing.default`: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `motion.easing.enter`: `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `motion.easing.exit`: `cubic-bezier(0.4, 0.0, 1, 1)`

---

# 6. Color Architecture & Palettes

The IDG Color System provides high-contrast, accessible palettes engineered for corporate governance, enterprise software, and government sovereign platforms.

## 6.1 Enterprise Primary & Secondary Palette Mapping

| Role | Token Name | Light Value | Dark Value | WCAG Contrast Ratio |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Primary** | `color.brand.primary` | `#0f172a` (Slate 900) | `#f8fafc` (Slate 50) | 16.8:1 (AAA) |
| **Brand Accent** | `color.brand.accent` | `#2563eb` (Blue 600) | `#3b82f6` (Blue 500) | 7.2:1 (AAA) |
| **Surface Base** | `color.surface.base` | `#ffffff` (White) | `#020617` (Slate 950) | 21:1 (AAA) |
| **Surface Muted** | `color.surface.muted` | `#f1f5f9` (Slate 100) | `#0f172a` (Slate 900) | 18.5:1 (AAA) |
| **Success Status** | `color.status.success` | `#059669` (Emerald 600) | `#10b981` (Emerald 500) | 4.8:1 (AA) |
| **Warning Status** | `color.status.warning` | `#d97706` (Amber 600) | `#f59e0b` (Amber 500) | 4.6:1 (AA) |
| **Danger Status** | `color.status.danger` | `#dc2626` (Red 600) | `#ef4444` (Red 500) | 5.1:1 (AA) |

## 6.2 Government & Sovereign Platform Themes
- **Government Sovereign Theme**: Primary hue adopts deep slate and dark gold accents (`#1e293b` with `#d97706` highlights), conveying institutional authority, regulatory oversight, and legal preeminence.

---

# 7. Typography System & Multilingual Pairing

Typography is configured to handle trilingual typography seamlessly without layout collapse or line-height clipping.

## 7.1 Font Pairing Matrix

| Language Locale | Body Font Family | Display / Heading Font Family | Monospace Font Family |
| :--- | :--- | :--- | :--- |
| **English (`en`)** | Plus Jakarta Sans | Playfair Display / Inter | JetBrains Mono |
| **Arabic (`ar-IQ`)** | Noto Sans Arabic | Readex Pro / Cairo | JetBrains Mono |
| **Kurdish Sorani (`ckb-IQ`)** | Noto Sans Arabic | Noto Sans Arabic / Rabar | JetBrains Mono |

## 7.2 Type Hierarchy Scale

| Token Name | Size (rem / px) | Line Height | Tracking | Target Element |
| :--- | :--- | :--- | :--- | :--- |
| `type.display.2xl` | `3.000rem / 48px` | `1.1` | `-0.02em` | Page Hero Headlines |
| `type.display.xl` | `2.250rem / 36px` | `1.2` | `-0.02em` | Section Titles (H1) |
| `type.heading.lg` | `1.500rem / 24px` | `1.3` | `-0.01em` | Module Titles (H2) |
| `type.heading.md` | `1.250rem / 20px` | `1.4` | `0.00em` | Card Titles (H3) |
| `type.body.lg` | `1.125rem / 18px` | `1.5` | `0.00em` | Lead Paragraphs |
| `type.body.md` | `1.000rem / 16px` | `1.5` | `0.00em` | Standard Body Text |
| `type.body.sm` | `0.875rem / 14px` | `1.4` | `0.01em` | Dense Data Tables / Captions |
| `type.caption` | `0.750rem / 12px` | `1.3` | `0.02em` | Metadata & Input Helpers |

## 7.3 Responsive Line Height Adjustments
- Arabic and Kurdish scripts require a minimum `line-height` expansion factor of **+15%** relative to English to prevent diacritic glyph clipping in multi-line text blocks.

---

# 8. Spacing System & Grid Specifications

Layout spacing is governed by a strict 8px spatial grid, with a 4px sub-grid for fine component alignment.

## 8.1 Spatial Grid Increments
- **Base Sub-Grid**: 4px (`spacing.1`), 8px (`spacing.2`), 12px (`spacing.3`).
- **Major Layout Grid**: 16px (`spacing.4`), 24px (`spacing.6`), 32px (`spacing.8`), 48px (`spacing.12`), 64px (`spacing.16`), 96px (`spacing.24`).

## 8.2 Container Width Standards
- **Compact Container (`max-w-3xl`)**: 768px (Form flows, single-column reading canvas).
- **Standard Container (`max-w-5xl`)**: 1024px (Documentation pages, general content).
- **Expanded Container (`max-w-7xl`)**: 1280px (Primary enterprise dashboards, marketing hubs).
- **Ultra-Wide Workspace (`max-w-full`)**: Fluid 100% with max 1600px inner constraint (Developer IDE, monitoring matrices).

---

# 9. Component Specifications & Categories

The system defines 24 core enterprise component categories. Each category MUST adhere to strict structural states: `default`, `hover`, `focus`, `active`, `disabled`, `loading`, `error`.

## 9.1 Interactive Controls
1. **Buttons**: Primary Solid, Secondary Outlined, Ghost Subdued, Danger Destructive, Icon-Only. Minimum target 44px x 44px.
2. **Forms & Text Inputs**: Single-line text, Password with toggle, Textarea, Select dropdown, Multi-select chip box.
3. **Selection Controls**: Checkboxes, Radio button groups, Toggle switches, Segmented control bars.

## 9.2 Navigation & Structure
4. **Header / Topbar**: Primary brand bar, Tier 0 global utility, sticky behavior, blurring surface background.
5. **Sidebar / Rail**: Collapsible navigation drawer, multi-level hierarchy triggers, badge counters.
6. **Breadcrumbs**: Hierarchical location paths with automatic separator flipping (`/` or `>`) for RTL locales.
7. **Tabs**: Horizontal underline tabs, pill tabs, vertical sidebar tabs.
8. **Pagination**: Page number selectors, previous/next controls, jump-to-page input.

## 9.3 Data Display & Feedback
9. **Data Tables**: Striped rows, hover highlights, sortable header triggers, dense mode toggle, sticky headers.
10. **Cards**: Content cards, statistics metric cards, action cards with border-radius limit of 12px (`radius.xl`).
11. **Badges & Status Chips**: Indicator pills featuring success, warning, danger, neutral, and info state colors.
12. **Avatars**: User profile images, initial letter fallbacks, status indicator dots.
13. **Accordions & Collapsibles**: Expandable section panels with chevron indicators.
14. **Dialogs & Modals**: Overlay alert modals, slide-in side drawers, confirmation prompts.
15. **Notifications & Toast Alerts**: Floating message toasts positioned top-right (LTR) or top-left (RTL).
16. **Alert Banners**: Inline page notices with icons and action buttons.

## 9.4 Specialized Enterprise Modules
17. **Charts & Visualizers**: Recharts / D3 theme tokens using accessible high-contrast palette mappings.
18. **Timeline**: Event history logs with status dots and connecting vertical lines.
19. **Maps**: Google Maps / Location preview containers with custom dark/light map tiles.
20. **Search Overlays**: Command palette overlays (`Cmd + K`) with categorized search results.
21. **Code Blocks / Syntax**: Monospace code viewports with line numbers, copy button, language tags.
22. **Footer**: Multi-column sitemap matrix, regional office addresses, legal disclosures.
23. **Tooltips & Popovers**: Floating informational callouts triggered on hover/focus.
24. **Progress Indicators**: Linear progress bars, circular loading spinners, multi-step progress steppers.

---

# 10. Responsive Breakpoints

Breakpoints follow a mobile-first responsive architecture.

| Breakpoint Prefix | Viewport Width Range | Target Media & Form Factor |
| :--- | :--- | :--- |
| **`sm`** | `640px` to `767px` | Large smartphones / portrait orientation |
| **`md`** | `768px` to `1023px` | Tablets / small laptops |
| **`lg`** | `1024px` to `1279px` | Laptops / desktop displays |
| **`xl`** | `1280px` to `1535px` | Standard enterprise desktop displays |
| **`2xl`** | `1536px` and above | Ultra-wide monitors / workstations |

---

# 11. Accessibility Standards (WCAG 2.2 AA)

Compliance with international accessibility standards is mandatory across all digital properties.

## 11.1 Contrast & Color Standards
- **Text Contrast**: Minimum contrast ratio of **4.5:1** for standard text and **3.0:1** for large text (18pt / 24px and above).
- **UI Component Contrast**: Minimum contrast ratio of **3.0:1** for essential interactive elements, icon glyphs, and active borders.
- **Color Independence**: Color MUST NEVER be used as the sole visual indicator for convey meaning or status. All alerts and error states must combine color with text labels or explicit iconography.

## 11.2 Focus Rings & Keyboard Navigation
- **Focus Rings**: Keyboard focus indicator MUST display a high-contrast double ring (`2px solid color.brand.accent` with `2px offset`) on all focusable controls.
- **Tab Sequence**: Logical DOM order matching the visual reading order (LTR top-left to bottom-right; RTL top-right to bottom-left).

## 11.3 Screen Reader & ARIA Standards
- **Landmark Regioning**: Pages must contain explicit landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`).
- **Interactive State Attributes**: Dynamic elements must correctly manage `aria-expanded`, `aria-selected`, `aria-hidden`, and `aria-live` attributes.

---

# 12. Iconography Standards

Iconography utilizes Lucide React as the canonical icon font library.

- **Grid Alignment**: All icons rendered on a standard 24px x 24px bounding box.
- **Stroke Width**: Standard 2px stroke width (`strokeWidth={2}`); reduced to 1.5px for large display icons.
- **Bi-Directional Mirroring**: Directional icons (arrows, chevrons, undo/redo, drawer triggers) MUST automatically flip horizontally in RTL mode. Non-directional icons (lock, search, user, file) remain static.

---

# 13. Motion System & Micro-Interactions

Motion is constrained to functional feedback, page state transitions, and progressive disclosure animations.

- **Hover Transitions**: `150ms ease-in-out` scale or opacity shift.
- **Drawer / Modal Animations**: `250ms cubic-bezier(0.0, 0.0, 0.2, 1)` slide and fade entrance.
- **Reduced Motion Preference**: If `@media (prefers-reduced-motion: reduce)` is detected, all transition durations collapse to `0ms` instantly.

---

# 14. Theme System & Multi-Brand Architecture

The design system supports dynamic theme switching via CSS variables bound to `data-theme` root attributes.

```html
<!-- Corporate Dark Theme -->
<html data-theme="corporate-dark" lang="en" dir="ltr">

<!-- AI Gate Iraq Product Light Theme -->
<html data-theme="aigate-light" lang="ar" dir="rtl">

<!-- Government Sovereign Gold Theme -->
<html data-theme="gov-sovereign" lang="ckb" dir="rtl">
```

## 14.1 Brand Variant Inheritance Matrix
- **IDG Corporate**: Primary Dark Slate `#0f172a`, Secondary Cool Indigo `#4f46e5`.
- **AI Gate Iraq (Product 001)**: Primary Midnight Blue `#030712`, Secondary Cyan `#06b6d4`.
- **Government Portals**: Primary Deep Slate `#1e293b`, Secondary Sovereign Gold `#d97706`.

---

# 15. RTL / LTR Layout Rules & Automatic Mirroring

RTL layout mirroring is executed natively using CSS Logical Properties:

| Physical CSS Property (Forbidden) | Logical CSS Property (Mandatory) | LTR Behavior | RTL Behavior |
| :--- | :--- | :--- | :--- |
| `margin-left: 16px;` | `margin-inline-start: 16px;` | Adds 16px on Left | Adds 16px on Right |
| `padding-right: 24px;` | `padding-inline-end: 24px;` | Adds 24px on Right | Adds 24px on Left |
| `float: left;` | `float: inline-start;` | Floats Left | Floats Right |
| `text-align: left;` | `text-align: start;` | Aligns Left | Aligns Right |
| `border-left: 2px solid;` | `border-inline-start: 2px solid;` | Border on Left | Border on Right |

---

# 16. Governance & Versioning

- **Architecture Review Board**: All changes or additions to token schemas or component primitives must pass through the IDG Design System Architecture Board.
- **Versioning**: Follows Semantic Versioning (`DS-v1.0.0`). Breaking token removals increment the MAJOR version.
- **Document Control**:
  - **Document ID**: IDG-SPEC-DS-2026-V1
  - **Current Version**: 1.0.0
  - **Owner**: IDG Design System & Enterprise UX Directorate
  - **Approved By**: Chief Technology Officer & Head of Product Design
  - **Status**: Production Approved
  - **Repository Location**: `/design-system/design-tokens.md`
