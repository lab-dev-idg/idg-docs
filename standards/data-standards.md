# ستانداردەکانی بەڕێوەبردنی داتا — Enterprise Data Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-DATA-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Data Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DATA-2026-V1, IDG-STD-SEC-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard governs data modeling, schema evolution, cryptographic protection, lifecycle management, and AI data handling across all databases and pipelines within IDG.

---

# 2. پێداویستییە سەرەکییەکانی داتا — Core Data Requirements

1. **Schema-First Contracts**: All data stores (PostgreSQL, Firestore, BigQuery) must maintain declarative, version-controlled schemas with automated migration scripts.
2. **Canonical Technical Identifiers**: Column names, database keys, and field identifiers (e.g. `tenant_id`, `created_at`) must remain strictly in English snake_case across all localized deployments.
3. **Data Residency & Sovereignty**: Sensitive customer and institutional data must reside in designated sovereign cloud regions or on-premise enclaves.
4. **Data Minimization & Retention**: Collect only data strictly required for functional delivery; enforce automated purging and retention policies.
5. **AI Data Isolation**: Under zero circumstances may customer inference payloads or RAG vectors be utilized for model pre-training without explicit, separate legal agreements.

---

# 3. حوکمڕانی و خاوەندارێتی داتا — Governance & Data Stewards

- **Authority**: Enterprise Data Governance Board.
- **Audit Logging**: All database administrative access and schema modifications generate immutable audit logs.
