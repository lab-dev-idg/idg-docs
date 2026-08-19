# حوکمڕانی بڕیارە تەلارسازییەکان — Decision Governance Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-DEC-GOV-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Decision Governance Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ORG-2026-V1, IDG-DEC-LIFE-2026-V1

---

# 1. مەبەست و چوارچێوەی حوکمڕانی — Purpose & Governance Framework

This specification defines how decisions with architectural significance are identified, authored, peer-reviewed, escalated, and approved across IDG.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. کەی ADR پێویستە؟ — WHEN IS AN ADR MANDATORY?                             │
│ • Introduction or retirement of a programming language, framework, or cloud│
│ • Modification of core security boundaries or cryptographic baselines       │
│ • Breaking changes to public or inter-service API contracts                 │
│ • Cross-domain data schema transformations or persistence engine selection  │
│ • Core changes to multi-tenant isolation or sovereign deployment patterns   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. دەسەڵاتی پەسەندکردن و ئەندامانی ئەنجومەن — Approval Authorities

- **Enterprise Architecture Council (EAC)**: Apex authority for cross-cutting Tier 1 platform decisions.
- **Product Architecture Squads**: Authorized to approve localized product implementation ADRs provided they strictly comply with Tier 1 Enterprise Standards (`standards/`).
- **Security & Sovereignty Reviewers**: Mandatory voting member on any ADR affecting IAM, network ingress, cryptography, or sovereign data handling.

---

# 3. بنەماکانی هەڵسەنگاندن — Decision Evaluation Criteria

Every decision must explicitly evaluate at least four fundamental dimensions:
1. **Security & Data Sovereignty Impact**: Does this decision introduce risk to sovereign data residency or Zero Trust posture?
2. **Long-Term Maintainability**: Can this architecture be sustained and operated seamlessly across a 10-year lifecycle?
3. **Trilingual Compatibility**: Does this decision support native LTR/RTL parity and localization workflows?
4. **Performance & Operational Cost**: What are the compute, memory, bandwidth, and license footprint implications?
