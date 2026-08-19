# دۆمەینی بەڵگەنامەکردنی دامەزراوە — Corporate Documentation Domain

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-CORP-README-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **پۆلێنبەندی — Classification**: Enterprise Architecture Standard (ستانداردی تەلارسازی دامەزراوە)
- **دۆمەینی خاوەندارێتی — Domain Ownership**: Enterprise Architecture Board & Corporate Governance
- **پێگەی بەڵگەنامە — Status**: Production Approved (پەسەندکراوی بەرهەمهێنان)

---

# 1. پێناسەی دۆمەین و مەبەست — Domain Purpose & Scope

The **Corporate Documentation Domain** (`corporate/`) serves as the supreme institutional source of truth governing the identity, organizational structure, operating model, business capabilities, strategic horizons, and stakeholder relationships of Iraq Digital Gateway (IDG).

### ئامانجە بنەڕەتییەکان — Core Objectives:
1. **Institutional Governance**: Establish permanent constitutional definitions for IDG as the sovereign parent holding enterprise.
2. **Structural Clarity**: Define clear boundaries between parent corporate governance and product operations (`AI Gate Iraq` / Product 001 and future portfolio assets `Product 002+`).
3. **Capability Blueprinting**: Maintain an exhaustive capability map linking long-term strategy to technology execution.
4. **Stakeholder Alignment**: Articulate standard models for interaction across government partners, commercial customers, technology ecosystems, and community stakeholders.

---

# 2. پەیوەندی و پێکهاتەی دۆمەینەکان — Cross-Domain Authority & Hierarchy

Within the overall IDG Enterprise Documentation framework, the `corporate/` domain sits at the pinnacle of the governance hierarchy:

```
                      ┌───────────────────────────────────────┐
                      │    CORPORATE (دۆمەینی دامەزراوە)      │
                      │  Identity, Org, Business & Strategy   │
                      └───────────────────┬───────────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
      ┌───────────────────────┐                       ┌───────────────────────┐
      │  BRAND (براند و ناسنامە)│                       │GOVERNANCE & STANDARDS │
      └───────────┬───────────┘                       └───────────┬───────────┘
                  ▼                                               ▼
      ┌───────────────────────┐                       ┌───────────────────────┐
      │PRODUCTS (بەرهەمەکان)   │ ◄─────────────────────┤TECHNICAL, DATA & SEC  │
      └───────────────────────┘                       └───────────────────────┘
```

All downstream domains (Brand, Products, Website, Technical, SEO, Design System) derive their strategic mandates and architectural boundaries from the specifications established in this domain.

---

# 3. پێرستی بەڵگەنامەکانی دۆمەینی دامەزراوە — Corporate Domain Document Index

| بەڵگەنامە — Document File | ناسێنەر — Identifier | ناونیشان و مەبەست — Title & Core Purpose |
| :--- | :--- | :--- |
| `corporate-architecture.md` | `IDG-CORP-ARCH-2026-V1` | سەروەری و تەلارسازی سەرانسەری دامەزراوە — Enterprise-level architecture & institutional framework |
| `organizational-architecture.md` | `IDG-CORP-ORG-2026-V1` | تەلارسازی ڕێکخراوەیی و دەسەڵاتەکان — Organizational structure, functional domains & decision rights |
| `business-model-architecture.md` | `IDG-CORP-BM-2026-V1` | تەلارسازی مۆدێلی کار — Value creation, delivery, capture & platform ecosystems |
| `operating-model.md` | `IDG-CORP-OP-2026-V1` | مۆدێلی کارپێکردنی دامەزراوە — Enterprise operating rhythm, core & enabling operations |
| `enterprise-capability-model.md` | `IDG-CORP-CAP-2026-V1` | مۆدێلی تواناکانی دامەزراوە — Level 1 to Level 3 structured capability catalog |
| `corporate-identity.md` | `IDG-CORP-ID-2026-V1` | ناسنامەی یاسایی و دامەزراوەیی — Institutional identity, naming governance & parent hierarchy |
| `strategic-framework.md` | `IDG-CORP-STRAT-2026-V1` | چوارچێوەی ستراتیژی — Mission, vision, strategic pillars & execution architecture |
| `vision-2030.md` | `IDG-CORP-V2030-2026-V1` | دیدگای 2030ی عێراقی دیجیتاڵی — Long-term national digital infrastructure & AI ecosystem horizon |
| `stakeholder-architecture.md` | `IDG-CORP-STAKE-2026-V1` | تەلارسازی بەشداربووان — Structured relationship models across government, enterprise & public |

---

# 4. دەسەڵات و خاوەندارێتی — Governance & Authority Model

- **دەسەڵاتی پەسەندکردن — Approval Authority**: Board of Directors & Enterprise Architecture Council (EAC).
- **خولگەی پێداچوونەوە — Review Cadence**: Annual formal review or upon structural reorganization.
- **یاسای نەگۆڕ — Invariant Rule**: No specification in any child domain may contradict, weaken, or bypass the principles set forth in `corporate/`.
