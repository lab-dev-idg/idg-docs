# ڕێساکانی ناونانی بەرهەمەکان — Product Naming Architecture Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-NAME-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Brand & Product Naming Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ID-2026-V1, IDG-BRAND-ARCH-2026-V1

---

# 1. بنەماکانی ناونان — Product Naming Principles

All present and future products created by Iraq Digital Gateway (starting with Product 001: `AI Gate Iraq`) must follow a strict, standardized naming convention that preserves brand equity, regional clarity, and international recognizability.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. ڕوونی و وەسفکاری — FUNCTIONAL CLARITY & DESCRIPTIVE PURPOSE              │
│ Names must convey core domain capability without abstract confusion         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. سەروەری نیشتمانی و جیهانی — SOVEREIGN IDENTITY & GLOBAL APPEAL           │
│ Elegant bilingual resonance across Kurdish Sorani, Arabic, and English      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ژمارەی زنجیرەیی دامەزراوە — CANONICAL NUMERICAL REGISTRATION             │
│ Every official product receives a permanent ID: `Product 001`, `Product 002`│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. یاسای ناونانی سێ زمانە — Trilingual Translation Standards

| ناسێنەری بەرهەم — Product ID | ناوی ئینگلیزی — English | ناوی کوردی — Kurdish Sorani | ناوی عەرەبی — Arabic | دۆمەینی سەرەکی — Domain |
| :--- | :--- | :--- | :--- | :--- |
| **Product 001** | AI Gate Iraq | دەروازەی ژیریی عێراق | بوابة الذكاء الاصطناعي العراق | `aigate.iq` |
| **Product Template** | `[Domain] Gate Iraq` / `IDG [Capability]` | `دەروازەی [بوار]ی عێراق` | `بوابة [المجال] العراق` | `[product].iq` / `idg.global` |

---

# 3. پەیڕەوی دۆمەین و ناونیشانی ئەلیکترۆنی — Domain & Hostname Routing Rules

- **Primary Product Portals**: Allocated designated second-level `.iq` domains (e.g. `aigate.iq`) or third-level IDG domains (e.g. `aigate.idg.global`).
- **Product API Endpoints**: Formatted as `api.[product].iq/v1` or `api.idg.global/[product]/v1`.
- **Developer Documentation**: Formatted as `docs.[product].iq` or `idg.global/docs/[product]`.
