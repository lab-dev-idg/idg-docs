# دۆمەینی بڕیارە تەلارسازییەکان — Architecture Decisions Domain

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-DEC-README-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **پۆلێنبەندی — Classification**: Enterprise Decision Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DOCGOV-2026-V1, IDG-STD-ARCH-2026-V1

---

# 1. مەبەست و گرنگی دۆمەینی بڕیارەکان — Purpose & Domain Authority

The **Architecture Decisions Domain** (`decisions/`) establishes the formal institutional mechanism for proposing, debating, recording, superseding, and tracing all significant architectural, technological, structural, and governance decisions across Iraq Digital Gateway (IDG).

Architecture Decision Records (ADRs) serve as the permanent, immutable historical log of *why* systems were designed in a specific manner, capturing context, trade-offs, and consequences for future generations of engineers and leaders.

---

# 2. پێرستی بەڵگەنامەکانی دۆمەینی بڕیارەکان — Decisions Document Index

| بەڵگەنامە — Document File | ناسێنەر — Identifier | ناونیشان و مەبەست — Title & Core Purpose |
| :--- | :--- | :--- |
| `decision-governance.md` | `IDG-DEC-GOV-2026-V1` | حوکمڕانی بڕیارەکان — Decision rights, evaluation frameworks, approval thresholds |
| `architecture-decision-records.md` | `IDG-DEC-ADR-2026-V1` | پێکهاتەی تۆماری بڕیارەکان — ADR registry structure, numbering conventions & indexing |
| `adr-template.md` | `IDG-DEC-TMPL-2026-V1` | قاڵبی فەرمی تۆماری بڕیار — Reusable production ADR template for all engineering squads |
| `decision-lifecycle.md` | `IDG-DEC-LIFE-2026-V1` | خولی ژیانی بڕیارەکان — Lifecycle states (Proposed, Accepted, Rejected, Deprecated, Superseded) |

---

# 3. بەڕێوەبردن و نەگۆڕی تۆمارەکان — Immutability & Traceability

- **Never Overwrite Historical ADRs**: Once an ADR is marked `Accepted`, its historical text is immutable. If circumstances change or technology evolves, a new ADR is proposed which formally supersedes (`Superseded by ADR-XXXX`) the previous record.
- **Traceability**: All architectural changes in pull requests must reference their governing ADR number.
