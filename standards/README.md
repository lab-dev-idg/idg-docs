# دۆمەینی ستانداردە گشتییەکانی دامەزراوە — Enterprise Standards Domain

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STAND-README-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **پۆلێنبەندی — Classification**: Enterprise Standards Catalog
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DOCGOV-2026-V1, IDG-DEC-GOV-2026-V1

---

# 1. مەبەست و سەروەری ستانداردەکان — Purpose & Standards Authority

The **Enterprise Standards Domain** (`standards/`) establishes the mandatory, cross-cutting technical, operational, architectural, and governance rules that bind every engineer, product, and platform across Iraq Digital Gateway (IDG).

Standards operate horizontally across all domains (Corporate, Brand, Products, Website, Technical, SEO, Design System), ensuring architectural coherence, security hardening, and engineering excellence across a multi-decade operational horizon.

```
                      ┌───────────────────────────────────────┐
                      │     ENTERPRISE STANDARDS (STANDARDS/) │
                      │  Horizontal Rules, Protocols & Specs  │
                      └───────────────────┬───────────────────┘
                                          │ (Binds all domains)
         ┌───────────────────┬────────────┼────────────┬───────────────────┐
         ▼                   ▼            ▼            ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│Corporate & Brand│ │ Products (001+) │ │Web & Technical  │ │Design & Security│
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

# 2. پێرستی بەڵگەنامەکانی دۆمەینی ستانداردەکان — Standards Document Index

| بەڵگەنامە — Document File | ناسێنەر — Identifier | ناونیشان و مەبەست — Title & Core Purpose |
| :--- | :--- | :--- |
| `documentation-standards.md` | `IDG-STD-DOC-2026-V1` | ستانداردەکانی بەڵگەنامەکردن — Markdown format, bilingual titling & schema |
| `architecture-standards.md` | `IDG-STD-ARCH-2026-V1` | ستانداردەکانی تەلارسازی سیستەم — Decoupling, domain mesh & high availability |
| `engineering-standards.md` | `IDG-STD-ENG-2026-V1` | ستانداردەکانی ئەندازیاری و کۆدنووسین — TypeScript, GitFlow, CI/CD & testing |
| `security-standards.md` | `IDG-STD-SEC-2026-V1` | ستانداردەکانی ئاسایش و پاراستن — Zero Trust, cryptography, IAM & threat defense |
| `data-standards.md` | `IDG-STD-DATA-2026-V1` | ستانداردەکانی بەڕێوەبردنی داتا — Schema-first, immutability & privacy isolation |
| `api-standards.md` | `IDG-STD-API-2026-V1` | ستانداردەکانی ڕووکاری پرۆگرامسازی — REST/gRPC, OpenAPI 3.1 & versioning |
| `accessibility-standards.md`| `IDG-STD-A11Y-2026-V1` | ستانداردەکانی دەستڕاگەیشتن — WCAG 2.2 AA, ARIA, keyboard navigation & contrast |
| `localization-standards.md` | `IDG-STD-I18N-2026-V1` | ستانداردەکانی خۆماڵیکردن و زمان — Trilingual parity (EN/AR/CKB) & RTL mirroring |
| `seo-standards.md` | `IDG-STD-SEO-2026-V1` | ستانداردەکانی گەشبینکردنی گەڕان — Metadata, OpenGraph, JSON-LD & performance |
| `design-standards.md` | `IDG-STD-DS-2026-V1` | ستانداردەکانی سیستەمی دیزاین — Design tokens, component rules & spatial rhythm |
| `repository-standards.md` | `IDG-STD-REPO-2026-V1` | ستانداردەکانی گەنجینەی کۆد — Directory structure, naming & commit discipline |

---

# 3. بەڕێوەبردن و بەخشینی لێخۆشبوون — Compliance & Exception Protocol

- **پابەندبوون — Mandatory Compliance**: All production deployments are validated against these standards via automated CI gates.
- **لێخۆشبوونی کاتی — Architectural Exceptions**: Any temporary deviation requires an approved Architecture Decision Record (`ADR`) signed by the Enterprise Architecture Council with a designated sunset date.
