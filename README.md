# عێراقی دیجیتاڵی — Iraq Digital Gateway (IDG) Enterprise Documentation

## ناسنامەی گەنجینە — Repository Identification
- **ناوی دامەزراوە — Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **ناسێنەری بەڵگەنامەی سەرەکی — Master Identifier**: IDG-DOCS-ROOT-2026-V1
- **پۆلێنبەندی — Classification**: Enterprise Architecture Repository (گەنجینەی تەلارسازی دامەزراوە)
- **پێگە — Status**: Production Approved (پەسەندکراوی فەرمی بەرهەمهێنان)
- **پەیوەندی بەرهەم — Primary Flagship Product**: AI Gate Iraq (`Product 001`)

---

# 1. پێشەکی و مەبەستی گەنجینە — Repository Purpose & Authority

This repository (`idg-docs`) is the authoritative enterprise documentation system and constitutional source of truth for **Iraq Digital Gateway (IDG)**. 

It defines the permanent standards, architectures, operational frameworks, and governance protocols governing IDG as the holding parent entity, **AI Gate Iraq** (`Product 001`), and all subsequent portfolio assets (`Product 002` through `Product 500+`).

```
                                  CORPORATE
                                (دامەزراوە)
                                     │
                        ┌────────────┴────────────┐
                        │                         │
                      BRAND                   GOVERNANCE
                     (براند)                 (حوکمڕانی)
                        │                         │
                     PRODUCTS                 STANDARDS
                   (بەرهەمەکان)              (ستانداردەکان)
                        │                         │
             ┌──────────┴──────────┐              │
          WEBSITE              TECHNICAL ◄────────┤
         (ماڵپەڕ)              (تەکنیکی)          │
             │                     │              │
            SEO              DESIGN SYSTEM        │
          (گەڕان)              (دیزاین)           │
             │                     │              │
             └──────────┬──────────┘              │
                        │                         │
                    DECISIONS                     │
                    (بڕیارەکان) ◄─────────────────┘
                        │
                     ROADMAP
                   (نەخشەڕێگا)
```

---

# 2. پێکهاتەی دۆمەینەکانی بەڵگەنامەکردن — Documentation Domains Directory

The repository is structured into 11 interconnected enterprise domains:

### 1. `corporate/` — دۆمەینی دامەزراوە — Corporate Architecture
- Authority: Board of Directors & Executive Governance.
- Contents: Corporate architecture, legal identity, organizational structure, business models, enterprise capability models, strategic framework, Vision 2030, and stakeholder architecture.

### 2. `brand/` — دۆمەینی براند و ناسنامە — Brand & Design Architecture
- Authority: Brand Systems Team.
- Contents: Master brand architecture, brand voice (EN/AR/CKB), visual identity, approved color system, multilingual typography, logo usage, iconography, photography, and motion guidelines.

### 3. `products/` — دۆمەینی بەرهەمەکان — Product Architecture & Portfolio
- Authority: Product Governance Council.
- Contents: Product architecture, portfolio evaluation, 8-stage product lifecycle, product governance, naming rules, product quality standards, and official specification for **Product 001: AI Gate Iraq**.

### 4. `website/` — دۆمەینی ماڵپەڕ — Website Architecture
- Authority: Digital Experience Team.
- Contents: Master information architecture, navigation architecture, and content strategy across trilingual portals.

### 5. `technical/` — دۆمەینی تەکنیکی و ئەندازیاری — Technical Architecture
- Authority: Enterprise Architecture Council.
- Contents: API architecture, enterprise data mesh, deployment blueprints, repository structure, localization, security, and compliance.

### 6. `seo/` — دۆمەینی گەشبینکردنی گەڕان — Search Engine Optimization
- Authority: Digital Growth & SEO Council.
- Contents: International multilingual SEO, hreflang, structured data (JSON-LD), crawl budget optimization, and Core Web Vitals.

### 7. `design-system/` — دۆمەینی سیستەمی دیزاین — Design System
- Authority: Design Systems Council.
- Contents: Design tokens (colors, spacing, typography, radii, shadows) and atomic UI component specifications.

### 8. `governance/` — دۆمەینی حوکمڕانی و ئاسایش — Enterprise Governance
- Authority: Chief Information Security Officer & Governance Board.
- Contents: Documentation governance, knowledge architecture, localization architecture, security, and compliance.

### 9. `standards/` — دۆمەینی ستانداردە گشتییەکان — Enterprise Standards
- Authority: Architecture Review Board.
- Contents: Horizontal enterprise standards governing documentation, architecture, engineering, security, data, APIs, accessibility (WCAG 2.2 AA), localization, SEO, and repositories.

### 10. `decisions/` — دۆمەینی بڕیارە تەلارسازییەکان — Architecture Decision Records
- Authority: Enterprise Architecture Council.
- Contents: ADR governance, decision registry, reusable ADR template, and decision lifecycle state machine.

### 11. `roadmap/` — دۆمەینی نەخشەڕێگای ستراتیژی — Strategic Roadmaps
- Authority: Strategic Planning Council.
- Contents: Horizon-based enterprise, corporate, product, technology, and digital platform roadmaps aligning with Vision 2030.

---

# 3. بنەماکانی بەڵگەنامەکردنی دوو زمانە — Bilingual Conventions & Technical Invariants

1. **Kurdish Sorani & English Bilingual Headings**: Major section titles and institutional terms provide paired Kurdish Sorani and English formulations (e.g. `تەلارسازی دامەزراوە — Corporate Architecture`).
2. **Canonical Technical Invariants**: Field names, code parameters, API endpoints, and configuration keys (e.g. `tenant_id`, `created_at`, `aigate.iq`, `POST /v1/chat/completions`) must remain strictly in English ASCII without translation.
3. **No Placeholders**: All documents contain production-grade specifications; placeholder tokens (`TODO`, `TBD`, `Lorem Ipsum`) are strictly forbidden.

---

# 4. خولی ژیان و حوکمڕانی بەڵگەنامەکان — Document Governance & Lifecycle

All documentation in this repository is subject to `governance/document-governance.md` (`IDG-SPEC-DOCGOV-2026-V1`). Modifications require pull request reviews with automated CI linting and approval from the respective domain authorities.
