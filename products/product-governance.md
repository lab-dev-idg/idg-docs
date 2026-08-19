# حوکمڕانی و دەسەڵاتی بەرهەمەکان — Enterprise Product Governance Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-GOV-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Product Governance Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-PROD-ARCH-2026-V1, IDG-CORP-ORG-2026-V1

---

# 1. مەبەست و خاوەندارێتی بەرهەم — Purpose & Product Ownership

This specification defines the institutional bodies, decision gates, approval authorities, and compliance mechanisms governing all products developed within Iraq Digital Gateway.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. ئەنجومەنی بەڕێوەبردنی بەرهەم — PRODUCT GOVERNANCE COUNCIL (PGC)          │
│ Portfolio approval, major milestone sign-offs, strategic allocation        │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. ئەنجومەنی پێداچوونەوەی تەلارسازی — ARCHITECTURE REVIEW BOARD (ARB)       │
│ API contracts, data schemas, cloud infrastructure, cross-system coupling    │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ئەنجومەنی ئاسایش و سەروەری — SECURITY & SOVEREIGNTY BOARD (SSB)          │
│ Threat modeling, cryptographic auditing, sovereign data residency gates    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. دەسەڵاتە فەرمییەکانی بڵاوکردنەوە — Release Authorization Gates

No product or major version release may deploy to production without unanimous approval across three core domains:
- **Technical Sign-Off**: Lead Architect confirms zero breaking API changes and test suite completion.
- **Security Sign-Off**: Chief Information Security Officer (or designated security lead) confirms zero high/critical vulnerabilities.
- **Localization & UX Sign-Off**: Design & Localization Lead confirms 100% trilingual translation completeness and RTL parity.

---

# 3. بەڕێوەبردنی داتا و بەکارهێنانی مۆدێلەکان — Data & AI Model Governance

For AI-driven products such as Product 001 (`AI Gate Iraq`):
- **Zero Data Training Policy**: Customer prompts, RAG documents, and API payloads are never ingested for foundation model training.
- **Audit Logging**: All model inferences generate cryptographic metadata logs detailing timestamp, latency, token consumption, and model version.
