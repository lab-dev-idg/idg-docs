# دۆمەینی بەڵگەنامەکردنی بەرهەمەکان — Products Documentation Domain

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-README-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **پۆلێنبەندی — Classification**: Product Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ARCH-2026-V1, IDG-PROD-001-2026-V1

---

# 1. مەبەست و چوارچێوەی بەرهەمەکان — Purpose & Product Domain Scope

The **Products Documentation Domain** (`products/`) defines the portfolio governance, architectural standards, lifecycle workflows, and baseline technical requirements for all digital products engineered under Iraq Digital Gateway.

It establishes Product 001 (`AI Gate Iraq`) as the premier sovereign flagship asset and defines the standardized mechanisms for onboarding, incubating, and operating future portfolio assets (`Product 002+`).

---

# 2. پێرستی بەڵگەنامەکانی دۆمەینی بەرهەم — Product Domain Document Index

| بەڵگەنامە — Document File | ناسێنەر — Identifier | ناونیشان و مەبەست — Title & Core Purpose |
| :--- | :--- | :--- |
| `product-architecture.md` | `IDG-PROD-ARCH-2026-V1` | تەلارسازی بەرهەم و پلاتفۆرم — Master product hierarchy, domain separation & platform integration |
| `product-portfolio.md` | `IDG-PROD-PORT-2026-V1` | بەڕێوەبردنی پۆرتفۆلیۆ — Portfolio management, evaluation criteria & shared service consumption |
| `product-lifecycle.md` | `IDG-PROD-LIFE-2026-V1` | خولی ژیانی بەرهەم — 8-stage product lifecycle from discovery to decommission |
| `product-governance.md` | `IDG-PROD-GOV-2026-V1` | حوکمڕانی و دەسەڵاتی بەرهەم — Product ownership, release gates, security & data compliance |
| `product-naming.md` | `IDG-PROD-NAME-2026-V1` | ڕێساکانی ناونانی بەرهەمەکان — Naming taxonomy, trademark rules & domain routing |
| `product-standards.md` | `IDG-PROD-STAND-2026-V1` | ستانداردە کەمترینەکانی بەرهەم — Baseline quality, UX, security, API, and observability criteria |
| `product-001-ai-gate-iraq.md`| `IDG-PROD-001-2026-V1` | بەڵگەنامەی بەرهەمی 001: دەروازەی ژیریی عێراق — Authoritative specification for AI Gate Iraq |

---

# 3. پەیوەندی بەرهەمەکان بە دامەزراوەی دایکەوە — Corporate Hierarchy Invariant

```
                      ┌───────────────────────────────────────┐
                      │      IRAQ DIGITAL GATEWAY (IDG)       │
                      │           Holding Enterprise          │
                      └───────────────────┬───────────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
      ┌───────────────────────┐                       ┌───────────────────────┐
      │     AI GATE IRAQ      │                       │FUTURE PRODUCTS (002+) │
      │     (Product 001)     │                       │ (Portfolio Expansion) │
      └───────────────────────┘                       └───────────────────────┘
```
