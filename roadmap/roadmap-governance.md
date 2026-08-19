# حوکمڕانی و کۆنتڕۆڵی نەخشەڕێگا — Roadmap Governance & Change Control

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-ROAD-GOV-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Roadmap Governance Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-ROAD-ENT-2026-V1, IDG-DEC-GOV-2026-V1

---

# 1. مەبەست و چوارچێوەی حوکمڕانی — Purpose & Governance Framework

This specification defines how roadmaps are maintained, prioritized, audited, and updated across Iraq Digital Gateway to ensure strategic coherence without chaotic feature drift.

---

# 2. بنەمای پلەبەندی پێداویستییەکان — Prioritization Framework (RICE + Sovereign Weight)

Roadmap initiatives are prioritized using an enhanced RICE framework incorporating sovereign alignment:

$$\text{Score} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence} \times \text{Sovereign Weight}}{\text{Effort}}$$

- **Reach**: Number of enterprise clients, public users, or API developers impacted.
- **Impact**: Strategic contribution to digital transformation (0.5 Minor to 3.0 Massive).
- **Confidence**: Architectural clarity and risk certainty (50% to 100%).
- **Sovereign Weight**: Alignment with national digital sovereignty and trilingual parity (1.0 Standard to 2.0 Critical Sovereign Enabler).
- **Effort**: Engineering person-months required across infrastructure, backend, frontend, and QA.

---

# 3. کۆنتڕۆڵی گۆڕانکاری و خولگەی پێداچوونەوە — Change Control & Review Rhythm

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. پێداچوونەوەی مانگانە — MONTHLY OPERATIONAL REFINEMENT                     │
│ Sprint delivery alignment and dependency resolution across active squads    │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. پێداچوونەوەی وەرزی — QUARTERLY HORIZON CALIBRATION                       │
│ Horizon 1 vs Horizon 2 allocation, risk assessment & resource re-balancing  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. پێداچوونەوەی ساڵانە — ANNUAL STRATEGIC RE-ALIGNMENT                      │
│ Comprehensive audit against Vision 2030 and Enterprise Architecture Specs   │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Roadmap Change Proposal (RCP)**: Any significant shift in capability horizons or deprecation of scheduled platform services requires a formal RCP submitted to the Enterprise Architecture Council.
