# Iraq Digital Gateway (IDG) Enterprise Localization & Language Architecture Specification

**Document Identifier**: IDG-SPEC-LOCALIZATION-2026-V1  
**Document Title**: Enterprise Localization & Language Architecture Specification  
**Parent Corporate Entity**: Iraq Digital Gateway (IDG)  
**Flagship Product Reference**: AI Gate Iraq (Product 001)  
**Status**: Production Approved  
**Classification**: Enterprise Architecture Standard  
**Version**: 1.0.0  
**Effective Date**: 2026-08-08  
**Review Cycle**: Annual  

---

# 1. Executive Summary
The Iraq Digital Gateway (IDG) Enterprise Localization & Language Architecture Specification establishes the mandatory internationalization (i18n) and regional localization (l10n) architecture for all digital assets across the IDG enterprise. This specification mandates native Day-One support for three production languages: English (`en-US`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`). It defines the decoupling of presentation strings from component logic, dynamic LTR/RTL bidirectional layout mirroring using CSS Logical Properties, client-side locale persistence (`idg.locale`), canonical untranslated technical identifiers, and SEO hreflang routing standards.

---

# 2. Purpose
The purpose of this specification is to:
1. Guarantee equal fidelity, completeness, and usability across all three Day-One production languages (`en-US`, `ar-IQ`, `ckb-IQ`).
2. Provide a functional, accessible language selector across all IDG web interfaces and documentation portals.
3. Establish dynamic LTR (`dir="ltr"`) and RTL (`dir="rtl"`) bidirectional layout switching without page corruption or CSS file duplication.
4. Enforce strict isolation of canonical technical identifiers (APIs, JSON keys, URIs, code syntax) from translation workflows.
5. Provide a resilient fallback chain (`ckb-IQ` → `ar-IQ` → `en-US`) to handle translation lifecycle edge cases cleanly.

---

# 3. Scope
This specification applies to all user interfaces, public portals, developer gateways, web applications, mobile client apps, API error payloads, emails, notifications, and documentation systems operated under:
- **IDG Corporate System**: `idg.global`, corporate portals, and holding assets.
- **Product 001 (AI Gate Iraq)**: `aigate.iq`, AI gateway user interfaces, and developer portals.
- **Future Products (`Product 002` through `Product 500+`)**: All future products created via IDG project factories.
- **Enterprise Documentation System**: All patches, specifications, runbooks, and developer references.

---

# 4. Localization Principles
1. **Trilingual Parity by Default**: English, Arabic, and Kurdish Sorani are equal Day-One production languages.
2. **Decoupled Locale Dictionaries**: UI strings are stored in structured JSON/TypeScript translation files, never hardcoded.
3. **CSS Logical Properties**: Layouts use `margin-inline-start`, `padding-inline-end`, etc., to eliminate physical directional bugs.
4. **Canonical Technical Identifiers**: API endpoint paths, HTTP headers, code symbols, URIs, JSON keys, and CLI parameters remain untranslated across all languages.
5. **Durable Client-Side Preference**: Language selection persists via `localStorage` under the key `idg.locale`.

---

# 5. Language Strategy
IDG serves a diverse regional and international audience across the Middle East and global developer community. By providing native English, Arabic, and Kurdish Sorani interfaces from day one, IDG ensures regional accessibility, regulatory alignment with Iraqi digital sovereignty mandates, and global enterprise usability.

---

# 6. Locale Registry
All systems must register and validate locales against the BCP 47 canonical registry:

| BCP 47 Code | Native Endonym | Display Label | Reading Direction | Primary Font Stack | Fallback Chain |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`en-US`** | English | English (EN) | Left-to-Right (`ltr`) | Inter, Noto Sans, system-ui | Primary Fallback Base |
| **`ar-IQ`** | العربية | العربية (ع) | Right-to-Left (`rtl`) | Noto Sans Arabic, Readex Pro | `ar-IQ` → `en-US` |
| **`ckb-IQ`** | کوردی | کوردی (کوردی) | Right-to-Left (`rtl`) | Noto Sans Arabic, Readex Pro | `ckb-IQ` → `ar-IQ` → `en-US` |

---

# 7. Language Selector Architecture
The language selector control is embedded in the primary application header and top navigation bar.

```
┌───────────────────────────────────────────────────────────┐
│ IDG HEADER NAV                                            │
│ [IDG Logo]  Overview  Specs  Repos   [ EN | ع | کوردی ]   │
└───────────────────────────────────────────────────────────┘
```

- **Functional Requirements**:
  1. Displays explicit active language pill or button group (`EN`, `ع`, `کوردی`).
  2. Keyboard accessible (`Tab`, `Enter`, `Space`, ARIA tags `aria-label="Select Language"`).
  3. Clicking switches active locale instantaneously without full page reload.
  4. Automatically updates `document.documentElement.lang` and `document.documentElement.dir`.
  5. Stores selected code in `localStorage.setItem("idg.locale", locale)`.

---

# 8. Internationalization Architecture
The application codebase organizes translation modules under `src/i18n/`:
```
src/i18n/
├── index.ts           # Core i18n engine, locale manager, fallback parser
└── locales/
    ├── en-US.ts       # English canonical dictionary
    ├── ar-IQ.ts       # Arabic localized dictionary
    └── ckb-IQ.ts      # Kurdish Sorani localized dictionary
```

---

# 9. Translation Architecture
UI components import the lightweight translation engine `useI18n()` hook or `t(key)` helper function:
```typescript
import { useI18n } from './i18n';

export function Header() {
  const { t, locale, setLocale } = useI18n();
  return (
    <header>
      <h1>{t('nav.title')}</h1>
      <button onClick={() => setLocale('ar-IQ')}>{t('language.arabic')}</button>
    </header>
  );
}
```

---

# 10. Translation Memory
Enterprise translation assets are managed in a centralized Translation Memory (TM) database, maximizing consistency across technical documentation, legal agreements, and product UI components.

---

# 11. Terminology Governance
The IDG Linguistic Governance Board maintains a canonical Glossary of Technical Terms. While explanatory text is translated into Arabic and Kurdish, technical terms like *API Gateway*, *OAuth 2.0*, *mTLS*, and *OpenAPI 3.1* retain their international English terminology.

---

# 12. RTL/LTR Architecture
Bi-directional layout switching is controlled dynamically at the HTML document root:
- **English**: `<html lang="en-US" dir="ltr">`
- **Arabic**: `<html lang="ar-IQ" dir="rtl">`
- **Kurdish Sorani**: `<html lang="ckb-IQ" dir="rtl">`

```css
/* Banned physical CSS properties */
.bad-card { margin-left: 16px; text-align: left; }

/* Mandatory CSS Logical Properties */
.good-card { margin-inline-start: 16px; text-align: start; }
```

---

# 13. Typography
- **Latin Baseline (`en-US`)**: Inter, Noto Sans, system-ui (-apple-system, BlinkMacSystemFont).
- **Arabic / Kurdish Baseline (`ar-IQ`, `ckb-IQ`)**: Noto Sans Arabic, Readex Pro, Tahoma.
- Typography enforces line-heights of 1.6–1.8 for Arabic and Kurdish scripts to accommodate extended ascenders, descenders, and diacritics without clipping.

---

# 14. Component Localization
All UI components (buttons, modal dialogs, search bars, tabs, tooltips) retrieve text dynamically via translation keys. Fixed string literals inside React JSX components are strictly prohibited in pull request reviews.

---

# 15. Navigation Localization
Top navigation bar, sidebar specs index, breadcrumb trails, and footer links update labels instantaneously upon locale changes while preserving active document state and routing params.

---

# 16. Documentation Localization
Documentation files are structured with primary English specs (`technical/api-architecture.md`) and localized mirrors (`docs/ar-IQ/technical/api-architecture.md`). Frontmatter tracks translation sync state.

---

# 17. API Documentation Localization
Public developer portals render OpenAPI endpoint descriptions, field summaries, and error code tables in the user's selected language, while preserving code snippets, curl commands, and JSON response keys in canonical LTR English syntax.

---

# 18. Error Message Localization
API response envelopes emit localized error messages based on the client's `Accept-Language` header:
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "localized_message": {
      "en-US": "Rate limit exceeded. Please try again in 60 seconds.",
      "ar-IQ": "تم تجاوز حد الطلبات. يرجى المحاولة مرة أخرى بعد 60 ثانية.",
      "ckb-IQ": "سنووری داواکاری تێپەڕی. تکایە دوای 60 چرکەی تر هەوڵ بدەرەوە."
    }
  }
}
```

---

# 19. SEO Localization
Web pages emit HTML header `hreflang` relationship tags to ensure search engines index localized variants accurately:
```html
<link rel="alternate" hreflang="en-US" href="https://idg.global/en-US/docs" />
<link rel="alternate" hreflang="ar-IQ" href="https://idg.global/ar-IQ/docs" />
<link rel="alternate" hreflang="ckb-IQ" href="https://idg.global/ckb-IQ/docs" />
<link rel="alternate" hreflang="x-default" href="https://idg.global/en-US/docs" />
```

---

# 20. URL Architecture
Localized URLs use clean prefix paths: `/en-US/...`, `/ar-IQ/...`, `/ckb-IQ/...`. The application router strips or applies locale prefixes transparently.

---

# 21. Metadata Localization
Title tags, meta descriptions, OpenGraph headers, and Twitter cards are localized dynamically per locale route to optimize regional social sharing and web discoverability.

---

# 22. Accessibility
- **WCAG 2.1 AA Compliance**: Language selector controls feature visible focus rings (`ring-2 ring-indigo-500`), semantic `<button>` elements, and clear ARIA states (`aria-pressed`).
- **Screen Reader Support**: `<html lang="...">` dynamically notifies screen readers to switch voice synthesis engines between English, Arabic, and Kurdish.

---

# 23. Date Localization
Dates are formatted using standard `Intl.DateTimeFormat`:
- `en-US`: August 8, 2026
- `ar-IQ`: ٨ أغسطس ٢٠٢٦ / 8 أغسطس 2026
- `ckb-IQ`: ٨ی ئابی ٢٠٢٦

---

# 24. Number Localization
Numbers use `Intl.NumberFormat`, supporting standard Western Arabic numerals (`1,234.56`) and Eastern Arabic numerals (`١٬٢٣٤٫٥٦`) based on user locale preferences.

---

# 25. Currency Localization
Currency formatting defaults to Iraqi Dinar (`IQD` / `د.ع`):
- `en-US`: IQD 250,000
- `ar-IQ`: ٢٥٠,٠٠٠ د.ع
- `ckb-IQ`: ٢٥٠،٠٠٠ د.ع

---

# 26. Content Governance
The IDG Content Board mandates quarterly linguistic reviews, ensuring regional dialects in Arabic (`ar-IQ`) and Kurdish (`ckb-IQ`) align with formal corporate tone and technical standards.

---

# 27. Translation Workflow
```
Source Code PR (en-US) ──► i18n Key Extractor ──► Translation Memory
                                                       │
                                                       ▼
Live Production Site ◄── CI/CD Quality Gate ◄── Native Linguistic Review
```

---

# 28. Native Linguistic Review
All Arabic and Kurdish translations undergo review by native-speaking technical editors prior to merging into production release branches.

---

# 29. Legal Review
Legal disclaimers, Privacy Policies, and Terms of Service translations are certified by Iraqi legal counsel to guarantee regulatory compliance.

---

# 30. Quality Assurance
Automated linters scan translation files for missing keys, mismatched variable interpolation tokens (`{count}`, `{name}`), and trailing whitespace defects.

---

# 31. Automated Localization Testing
End-to-end Playwright tests execute across all three locales, verifying LTR/RTL layout integrity, absence of horizontal overflow scrollbars, and key persistence.

---

# 32. CI/CD Localization Validation
GitHub Actions workflows fail builds if any locale file misses keys present in the canonical `en-US.ts` dictionary.

---

# 33. Fallback Strategy
If a key is missing in `ckb-IQ`, the system falls back to `ar-IQ`. If missing in `ar-IQ`, it falls back to canonical `en-US`.

---

# 34. Missing Translation Handling
Missing keys in development log a console warning: `[i18n] Missing key 'nav.settings' for locale 'ckb-IQ'`. In production, the fallback string is rendered cleanly without bracketed placeholders or raw error text.

---

# 35. Performance
Locale dictionary files are bundle-split and loaded asynchronously (`import('./locales/ar-IQ.ts')`), keeping initial JavaScript bundle size under 15KB.

---

# 36. Caching
Locale assets are cached at Cloudflare edge nodes with `Cache-Control: public, max-age=31536000, immutable` using content hashes.

---

# 37. CDN/Edge Localization
Cloudflare Workers inspect `Accept-Language` headers on incoming requests and route unauthenticated first-time visitors to their regional locale automatically.

---

# 38. Security
Translation strings are sanitized against XSS attacks before rendering. HTML tags inside translation strings are disallowed; React components handle rich text formatting safely.

---

# 39. Privacy
User locale preference (`idg.locale`) stored in `localStorage` is purely functional and exempt from tracking cookie consent restrictions under data protection regulations.

---

# 40. Analytics
Anonymized telemetry tracks locale selection distribution (e.g., 45% `en-US`, 40% `ar-IQ`, 15% `ckb-IQ`) to optimize localization resource allocation.

---

# 41. Consent
Language preference selection requires no consent banner as it represents a core operational preference required for site usability.

---

# 42. Search
The enterprise search bar queries multi-lingual indexes, matching terms across English, Arabic, and Kurdish Sorani seamlessly.

---

# 43. Knowledge Architecture Integration
Integrates directly with `IDG-SPEC-KNOWLEDGE-2026-V1` (PATCH 014), providing the execution engine for trilingual documentation parity.

---

# 44. API Integration
Integrates with `IDG-SPEC-API-2026-V1` (PATCH 013), governing trilingual error payload envelopes and `Accept-Language` header processing.

---

# 45. Product Integration
Provides the shared i18n SDK library used across Product 001 (`AI Gate Iraq`) and future products.

---

# 46. Corporate Website Integration
Powers the main corporate portal (`idg.global`) with instant English / Arabic / Kurdish language switching.

---

# 47. AI Gate Iraq Integration
Powers `aigate.iq` with localized AI prompt builder interfaces, model cards, and documentation in English, Arabic, and Kurdish.

---

# 48. Future Product Integration
Future products (`Product 002` through `Product 500+`) inherit the `src/i18n/` framework automatically upon initialization from IDG project templates.

---

# 49. Governance
Governed by the IDG Enterprise Localization Board, chaired by the Chief Localization Officer and Principal Frontend Architect.

---

# 50. Ownership
`CODEOWNERS` designates `@idg/localization-team` as mandatory reviewers for any changes in `src/i18n/` or `governance/localization-architecture.md`.

---

# 51. Versioning
Follows Semantic Versioning (`v1.0.0`). Adding new keys is a minor version; changing key structures or dropping language support is a major version.

---

# 52. Change Management
Localization key additions or updates require PR approval and automated translation linter verification in GitHub Actions.

---

# 53. Deprecation
Deprecated translation keys emit deprecation warnings in development builds for 90 days before removal.

---

# 54. Audit
Quarterly audit logs verify 100% translation key parity across all three production languages.

---

# 55. Compliance
Meets Iraqi digital accessibility standards and international WCAG 2.1 AA multi-lingual guidelines.

---

# 56. Implementation Standard
The implementation standard requires:
- Functional UI Language Selector in top application bar.
- Immediate LTR/RTL document direction update (`dir="ltr"` / `dir="rtl"`).
- Persistence in `localStorage` under `idg.locale`.
- Zero broken layouts or missing key errors.

---

# 57. Acceptance Criteria
- [x] Language selector renders `EN`, `ع`, `کوردی` in header.
- [x] Selecting `العربية` or `کوردی` sets `dir="rtl"` on `<html>`.
- [x] Selecting `English` sets `dir="ltr"` on `<html>`.
- [x] Selected language persists on page reload via `localStorage.getItem("idg.locale")`.
- [x] All PATCH 001–014 documents remain accessible and functional.
- [x] Build command compiles with zero TypeScript or bundling errors.

---

# 58. Document Control & Revision History

| Version | Date | Author / Title | Description of Changes | Status |
| :--- | :--- | :--- | :--- | :--- |
| **v1.0.0** | 2026-08-08 | IDG Enterprise Localization Board | Initial publication of Enterprise Localization & Language Architecture Specification (PATCH 015) | Approved |

- **Document Identifier**: IDG-SPEC-LOCALIZATION-2026-V1
- **Document Title**: Enterprise Localization & Language Architecture Specification
- **Owner**: Iraq Digital Gateway (IDG) Enterprise Localization Board
- **Classification**: Enterprise Architecture Standard
- **Status**: Production Approved
- **Location**: `/governance/localization-architecture.md`

---
# End of Document
