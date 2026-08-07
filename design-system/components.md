# Iraq Digital Gateway (IDG) Enterprise Component Library Architecture Specification

## Document Identification
- **Document Identifier**: IDG-SPEC-CMP-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Related Specifications**: IDG-SPEC-DS-2026-V1 (Design Tokens), IDG-SPEC-IA-2026-V1 (Information Architecture)
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon introduction of major component primitives

---

# 1. Component Philosophy & Architectural Vision

The Iraq Digital Gateway (IDG) Enterprise Component Library Architecture establishes the definitive engineering and design contract for all interactive and visual User Interface (UI) elements deployed across IDG digital properties.

Every component within this library serves as an immutable building block designed to ensure operational stability, strict regulatory compliance, mathematical optical alignment, bi-directional language parity, and sub-millisecond execution efficiency across desktop, mobile, embedded, and government software interfaces.

## 1.1 Core Engineering Tenets
1. **Zero-Invention Compliance**: Engineers and designers must consume established component primitives. Ad-hoc styling, custom inline overrides, and isolated UI implementations are strictly prohibited.
2. **Encapsulated State Integrity**: Components encapsulate internal interaction mechanics while exposing clean, strongly-typed TypeScript prop contracts for external data binding.
3. **Bi-Directional First Engineering**: Bi-directional support (LTR for English, RTL for Arabic and Kurdish Sorani) is baked into the component core via CSS Logical Properties, eliminating secondary visual stylesheets.
4. **Resilient Fail-Safe Rendering**: Every data-driven component gracefully handles null states, delayed asynchronous loading, partial network failure, and extreme content overflow.

---

# 2. Atomic Component Hierarchy

The IDG Component Library enforces a deterministic five-tier Atomic Structure:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 1: ATOMS (Indivisible Primitives)                                  │
│ Buttons, Icons, Text Inputs, Badges, Tooltips, Avatars, Dividers         │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 2: MOLECULES (Composite Control Groups)                            │
│ Form Input Groups, Search Bars, Table Headers, Metric Stat Blocks        │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 3: ORGANISMS (Autonomous Functional Modules)                       │
│ Data Grids, Top Navigation Header, Side Rail, Command Palette, Footer   │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 4: TEMPLATES (Structural Viewport Enclosures)                     │
│ Dashboard Grid Frame, Workspace Split Layout, Documentation Shell      │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 5: PAGES & VIEWS (Data-Bound Production Surfaces)                 │
│ Live Sovereign Analytics View, Security Settings Portal, User Profile   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

# 3. Comprehensive Component Specifications

This section defines the technical parameters, operational states, accessibility requirements, and layout behavior for all primary UI component categories.

---

## 3.1 Primary Navigation & Header Components

### 3.1.1 Global Header (`HeaderNav`)
- **Purpose**: Serves as the primary Tier 0 top navigation enclosure across corporate sites and SaaS application viewports.
- **Usage**: Fixed or sticky positioning at the top of the viewport. Houses brand identity anchors, global environment switcher, global search trigger, and user profile utilities.
- **Variants**: `corporate` (dark background, minimal controls), `application` (dense tools, status indicators), `government` (high-contrast gold accents, official seals).
- **Interactive States**:
  - `default`: Background backdrop-blur enabled (`rgba(15, 23, 42, 0.8)`).
  - `scrolled`: Border opacity increases, elevation shadow `elevation.sm` applies.
- **Responsive Behavior**: Collapses primary navigation items into a mobile drawer overlay on viewports below `1024px` (`lg`).
- **RTL Support**: Brand logo aligns to `inline-start`; user profile and utility triggers align to `inline-end`.
- **Accessibility**: Wrapped in `<header>` and `<nav aria-label="Global Navigation">`.

### 3.1.2 Side Navigation Rail (`SidebarRail`)
- **Purpose**: Provides deep hierarchical navigation for application dashboards and administration consoles.
- **Usage**: Vertical dock anchored to the `inline-start` edge of the viewport.
- **Variants**: `expanded` (256px fixed width, icon + text label), `collapsed` (64px fixed width, icon-only with hover tooltips), `mobile-overlay` (slide-out drawer).
- **Interactive States**:
  - `item-default`: Text color `color.semantic.text.secondary`.
  - `item-hover`: Background `color.semantic.surface.muted`, text `color.semantic.text.primary`.
  - `item-active`: Accent border indicator `2px solid color.brand.accent` on `inline-start` margin, text `color.brand.accent`, font weight `semibold`.
- **RTL Support**: Dock moves to the right edge in RTL layout. Chevron sub-menu collapse arrows mirror horizontally.

---

## 3.2 Action & Button Components

### 3.2.1 Action Button (`Button`)
- **Purpose**: Triggers explicit user commands, form submissions, or operational modal dialogs.
- **Usage**: Used wherever direct interaction produces a immediate application state change.
- **Variants**:
  - `primary`: Solid fill (`color.brand.primary`). Used for the single dominant action on a page.
  - `secondary`: Subtle background (`color.semantic.surface.muted`) with high-contrast text.
  - `outline`: Transparent background with border (`1px solid color.semantic.border.strong`).
  - `ghost`: Transparent background with hover fill. Used for low-emphasis list actions.
  - `danger`: Solid red fill (`color.semantic.status.danger`). Used exclusively for destructive actions.
- **Sizes**: `sm` (32px height), `md` (40px height), `lg` (48px height).
- **Interactive States**:
  - `hover`: Brightness shifts by 10%; background transition `motion.duration.fast`.
  - `pressed`: Scale factor `0.98` transform.
  - `focus`: Focus ring visible (`2px solid color.brand.accent` with `2px` offset).
  - `disabled`: Opacity `0.4`, `cursor: not-allowed`, click events suppressed.
  - `loading`: Replaces text label or leading icon with an inline circular spinner; retains width bounds.
- **Accessibility**: Keyboard activation via `Enter` and `Space`. Native `<button>` element or `role="button"` with `tabindex="0"`.

---

## 3.3 Form Control & Input Components

### 3.3.1 Text Input Field (`TextField`)
- **Purpose**: Accepts textual, numeric, or alphanumeric user input within forms and data entry flows.
- **Usage**: Stacked vertically within form modules with clear labels and helper text.
- **Variants**: `standard` (single-line), `password` (masked text with toggle visibility eye button), `search` (leading search icon, trailing clear button).
- **Interactive States**:
  - `default`: Border `1px solid color.semantic.border.default`.
  - `focus`: Border `1px solid color.brand.accent`, halo outline `elevation.sm`.
  - `success`: Border `1px solid color.semantic.status.success`, leading success check icon.
  - `error`: Border `1px solid color.semantic.status.danger`, red error helper message rendered below input.
  - `disabled`: Background `color.semantic.surface.muted`, non-interactive.
- **RTL Support**: Text alignment `text-align: start`. Leading/trailing icon positions swap automatically via logical flex box orientation.
- **Accessibility**: Associated `<label>` element bound via matching `id` and `for` attributes. Error messages bound via `aria-describedby`.

### 3.3.2 Dropdown Select (`SelectDropdown`)
- **Purpose**: Allows selection of a single value or multiple values from a bounded list of options.
- **Usage**: Used in place of radio groups when option choices exceed four items.
- **Variants**: `single-select`, `multi-select-chip`, `searchable-combobox`.
- **States**: `closed`, `open-expanded`, `disabled`, `error`.
- **Keyboard Navigation**: `ArrowDown` / `ArrowUp` cycles choices, `Enter` confirms selection, `Escape` closes popover menu.

---

## 3.4 Data Display & Layout Components

### 3.4.1 Enterprise Data Table (`DataTable`)
- **Purpose**: Displays complex, multi-row, structured datasets requiring sorting, filtering, row selection, and pagination.
- **Usage**: Central viewport module in SaaS dashboards, logs, and administrative registries.
- **Variants**: `standard-spaced`, `dense-compact` (for high-density operational viewports), `striped-rows`.
- **Key Features**:
  - Sticky table header row (`position: sticky`, `top: 0`, `z-index: 10`).
  - Sort direction indicator chevrons on column headers.
  - Checkbox selection column anchored to `inline-start`.
  - Responsive horizontal scrolling wrapper with scroll shadow cues.
- **States**: `loading-skeleton` (displays animated skeleton rows), `empty-state` (centered icon, message, and reset action button), `error-state`.
- **RTL Support**: Column order flows from right to left; text inside cells aligns to `text-align: start`.

### 3.4.2 Metric Stat Card (`MetricCard`)
- **Purpose**: Highlights key performance indicators (KPIs), quantitative metrics, and operational health summaries.
- **Usage**: Displayed in 3-column or 4-column grid blocks at the top of dashboard overview pages.
- **Variants**: `standard-metric` (label + primary value + trend badge), `chart-sparkline` (adds embedded micro-sparkline graph).
- **Anatomy**:
  - Category Label (`type.caption`, muted color).
  - Primary Numeric Display (`type.display.xl`, bold weight).
  - Trend Indicator Badge (`emerald` for positive growth, `rose` for negative growth, `slate` for neutral).
  - Contextual Sub-label (`type.caption`).

---

## 3.5 Feedback, Modal & Overlay Components

### 3.5.1 Modal Dialog (`ModalDialog`)
- **Purpose**: Interrupts application workflow to demand critical user input, confirmation, or information acknowledgment.
- **Usage**: Used sparingly for confirmation of destructive actions, session warnings, or multi-step wizard flows.
- **Variants**: `confirmation` (small width, title, description, dual action buttons), `content-form` (medium/large width, scrollable inner body).
- **Key Features**:
  - Semi-transparent backdrop overlay (`rgba(2, 6, 23, 0.75)` with `backdrop-filter: blur(4px)`).
  - Trapping keyboard focus strictly inside the open modal viewport (`focus trap`).
  - Closing via `Escape` key press or explicit close button.
- **Accessibility**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`.

### 3.5.2 Toast Notification (`ToastMessage`)
- **Purpose**: Provides brief, non-blocking feedback about an asynchronous operation's outcome.
- **Usage**: Appears dynamically at a fixed screen corner and automatically dismisses after a set duration (typically 4000ms).
- **Variants**: `success` (green indicator), `warning` (amber indicator), `danger` (red indicator), `info` (blue indicator).
- **Positioning**: Fixed to top-right in LTR viewports; top-left in RTL viewports.

---

## 3.6 Specialized Government & Enterprise Components

### 3.6.1 Security Clearance Badge (`ClearanceBadge`)
- **Purpose**: Visual indicator denoting data sovereignty, classification tier, or administrative clearance level.
- **Usage**: Rendered alongside user avatars, document titles, or record headers in government platforms.
- **Variants**: `unclassified` (slate badge), `restricted` (blue badge), `confidential` (amber badge), `sovereign-top-secret` (gold badge with lock icon).

### 3.6.2 Role-Based Permission Gate Enclosure (`PermissionGate`)
- **Purpose**: Structural wrapper component that selectively renders or disables child components based on user RBAC permissions.
- **Usage**: Wraps sensitive action buttons, administration panels, or export triggers.
- **Behavior**:
  - `render-none`: Completely removes children from DOM if permission check fails.
  - `render-disabled`: Renders child component in a disabled state with a tooltip explaining required permission clearance.

---

# 4. Accessibility Standards & Execution Rules

All components in the IDG Component Library MUST conform to WCAG 2.2 Level AA requirements.

## 4.1 Keyboard Traversal Requirements
- All interactive components MUST be fully navigable using the `Tab` and `Shift + Tab` key sequences.
- Composite controls (such as menus, tabs, toolbars, and select dropdowns) MUST implement `ArrowKey` navigation patterns following WAI-ARIA Authoring Practices.

## 4.2 Focus Ring Directives
- Custom focus states MUST NEVER set `outline: none` without applying a substitute high-contrast focus ring.
- Default focus token specification: `outline: 2px solid var(--color-brand-accent); outline-offset: 2px;`.

## 4.3 Reduced Motion Adjustments
- When `@media (prefers-reduced-motion: reduce)` is active, component transitions and animations MUST instantly collapse to `0ms` or convert slide motions into static opacity fades.

---

# 5. Internationalization & Bi-Directional Engineering

The component library enforces bi-directional layout logic via CSS Logical Properties.

## 5.1 CSS Logical Property Mapping Reference

| Physical Property (Prohibited) | Logical Equivalent (Mandatory) | LTR Rendering | RTL Rendering |
| :--- | :--- | :--- | :--- |
| `margin-left` | `margin-inline-start` | Left Margin | Right Margin |
| `margin-right` | `margin-inline-end` | Right Margin | Left Margin |
| `padding-left` | `padding-inline-start` | Left Padding | Right Padding |
| `padding-right` | `padding-inline-end` | Right Padding | Left Padding |
| `left` | `inset-inline-start` | Left Position | Right Position |
| `right` | `inset-inline-end` | Right Position | Left Position |
| `text-align: left` | `text-align: start` | Left Aligned | Right Aligned |
| `text-align: right` | `text-align: end` | Right Aligned | Left Aligned |

---

# 6. Developer Guidelines & Implementation Rules

## 6.1 Directory & Folder Structure Standard
Component codebases must organize files according to the following strict directory layout:

```
src/components/
├── primitives/          # Tier 1 Atoms
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   └── TextField/
├── composite/           # Tier 2 Molecules
│   ├── FormField/
│   └── SearchBar/
├── modules/             # Tier 3 Organisms
│   ├── DataTable/
│   └── HeaderNav/
└── layouts/             # Tier 4 Templates
    └── DashboardLayout/
```

## 6.2 TypeScript Component Contract Rules
1. **Explicit Interface Declarations**: Every component must export its props interface (e.g., `export interface ButtonProps`).
2. **No `any` Types**: The use of `any` is strictly banned in prop contracts and internal hooks.
3. **Ref Forwarding**: All Tier 1 Atom components MUST support React `ref` forwarding using `React.forwardRef`.
4. **Strict Prop Naming**:
   - Boolean flags must use prefixes (`isDisabled`, `isLoading`, `hasError`, `isOpen`).
   - Event handlers must use `on` prefixes (`onClick`, `onChange`, `onSelect`).

---

# 7. Quality Assurance, Testing & Storybook Rules

## 7.1 Testing Mandates
- **Unit Testing**: Every component must achieve **>90% line coverage** using React Testing Library.
- **Accessibility Audit**: Every component must pass automated `jest-axe` accessibility assertions without errors.
- **Visual Regression Testing**: Every component variant must be captured in Storybook and tested across Chromium, WebKit, and Firefox viewports in both LTR and RTL orientations.

---

# 8. Component Versioning & Governance

## 8.1 Semantic Versioning Policy
- **MAJOR (`X.0.0`)**: Introduced when existing component props are removed, renamed, or default visual behaviors undergo breaking changes.
- **MINOR (`0.X.0`)**: Introduced when new components or non-breaking props are added to existing components.
- **PATCH (`0.0.X`)**: Introduced for bug fixes, performance optimizations, or non-breaking accessibility improvements.

## 8.2 Deprecation Lifecycle
1. **Marked Deprecated**: Component or prop is annotated with `@deprecated` in TypeScript and triggers a console warning in non-production builds.
2. **Grace Period**: Deprecated features are maintained for a minimum of 6 months.
3. **Removal**: Deprecated items are purged in the next MAJOR release.

---

# 9. Document Control

- **Document Identifier**: IDG-SPEC-CMP-2026-V1
- **Current Version**: 1.0.0
- **Document Owner**: IDG Design System & Frontend Architecture Board
- **Approved By**: Chief Technology Officer & Principal Platform Architect
- **Status**: Production Approved
- **Review Cycle**: Annual or upon release of new primary component primitives
- **Repository Path**: `/design-system/components.md`
