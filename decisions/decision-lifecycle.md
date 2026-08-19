# خولی ژیانی بڕیارە تەلارسازییەکان — Decision Lifecycle Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-DEC-LIFE-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Decision Lifecycle Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-DEC-GOV-2026-V1, IDG-DEC-ADR-2026-V1

---

# 1. قۆناغەکانی خولی ژیانی بڕیار — ADR Lifecycle State Machine

Every Architecture Decision Record in IDG transitions through a deterministic state machine:

```
                  ┌──────────────┐
                  │   PROPOSED   │ ◄── Initial drafting & RFC review
                  └──────┬───────┘
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
   ┌──────────────┐              ┌──────────────┐
   │   ACCEPTED   │              │   REJECTED   │
   └──────┬───────┘              └──────────────┘
          │
          ├─────────────────────────────┐
          ▼                             ▼
   ┌──────────────┐              ┌──────────────┐
   │  DEPRECATED  │              │  SUPERSEDED  │
   └──────────────┘              └──────────────┘
```

---

# 2. پێناسەی دۆخەکان — State Definitions & Criteria

1. **پێشنیازکراو — Proposed**:
   - The ADR is drafted and undergoing technical RFC (Request for Comments) across affected squads and architecture leads.
   - Status: Active review; not yet authorized for production implementation.
2. **پەسەندکراو — Accepted**:
   - Formally approved by the Enterprise Architecture Council or designated domain lead.
   - Status: Mandatory architectural policy. Implementation proceeds.
3. **ڕەتکراوە — Rejected**:
   - Reviewed and determined to be technically, commercially, or strategically unfeasible.
   - Status: Archived for historical record to avoid re-litigating the same proposal.
4. **بەسەرچوو — Deprecated**:
   - The decision has reached end-of-life and is no longer recommended for new systems, but existing implementations remain operational during migration.
5. **جێگرەوەدار — Superseded**:
   - A newer accepted ADR has completely replaced this decision (e.g. `Superseded by ADR-0042`).

---

# 3. هەڵوەشاندنەوە و گۆڕینی بڕیار — Reversal & Supersession Protocol

- **Zero In-Place Edits of Substantive Decisions**: When an accepted decision is reversed or replaced, the original ADR is marked `Superseded` with an explicit link to the new ADR.
- **Traceability Guarantee**: Ensures that historical codebases and architectural phases remain 100% understandable in light of the decisions that governed them at that point in time.
