# مۆدێلی تواناکانی دامەزراوە — Enterprise Capability Model

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-CORP-CAP-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Enterprise Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ARCH-2026-V1, IDG-CORP-BM-2026-V1

---

# 1. مەبەست و شێوازی کەتەلۆگکردن — Purpose & Capability Architecture

This specification establishes the standardized Enterprise Capability Model for Iraq Digital Gateway (IDG). It models what IDG does as an enterprise independently of organizational structure, technology implementations, or specific personnel.

Capabilities are organized in a 3-tier hierarchy:
- **Level 1 (L1) Domains**: High-level strategic groupings.
- **Level 2 (L2) Capabilities**: Specific institutional functions.
- **Level 3 (L3) Building Blocks**: Discrete executable capabilities supporting products and platforms.

---

# 2. نەخشەی تواناکانی ئاستی یەکەم و دووەم — L1 & L2 Capability Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. تواناکانی ستراتیژی و حوکمڕانی — STRATEGIC & GOVERNANCE CAPABILITIES      │
│ 1.1 Enterprise Architecture • 1.2 Risk & Compliance • 1.3 Strategic Planning│
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. تواناکانی بەرهەم و ئەزموونی بەکارهێنەر — PRODUCT & UX CAPABILITIES       │
│ 2.1 Product Discovery • 2.2 Lifecycle Management • 2.3 UX/UI Systems Design │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. تواناکانی تەکنەلۆجیا و ئەندازیاری — ENGINEERING & TECHNOLOGY CAPABILITIES│
│ 3.1 Distributed Systems • 3.2 API Mesh • 3.3 CI/CD & DevOps • 3.4 SRE & APM │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. تواناکانی داتا و ژیریی دەستکرد — DATA & AI CAPABILITIES (AI Gate Iraq)   │
│ 4.1 LLM Orchestration • 4.2 Data Mesh & Governance • 4.3 Knowledge Graph RAG│
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. تواناکانی ئاسایش و سەروەری دیجیتاڵی — SECURITY & SOVEREIGNTY CAPABILITIES │
│ 5.1 Zero Trust IAM • 5.2 Cryptography & Key Management • 5.3 Cyber Defense  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 6. تواناکانی بە بازاڕکردن و بەکارهێنان — COMMERCIAL & ADOPTION CAPABILITIES │
│ 6.1 Enterprise Enablement • 6.2 Developer Relations • 6.3 Partner Ecosystem │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 3. پێناسەی تواناکانی ئاستی سێیەم بەپێی بەشەکان — L3 Detailed Capability Catalog

### 4. کایەی داتا و ژیریی دەستکرد — Data & AI Domain
- **4.1.1 Prompt & Context Engineering**: Dynamic token window management, multi-turn dialogue orchestration, system prompt versioning.
- **4.1.2 Model Inference Routing**: Low-latency model switching, fallback handling, load distribution across GPU clusters.
- **4.2.1 Trilingual Vector Search**: Dense vector indexing, hybrid BM25 lexical querying across Kurdish Sorani, Arabic, and English corpora.
- **4.2.2 Sovereign Data Lineage**: Automated data tagging, PII detection, immutable audit trail generation.

### 5. کایەی ئاسایش و پاراستن — Security Domain
- **5.1.1 Fine-Grained RBAC/ABAC**: Contextual policy enforcement based on tenant ID, user role, IP enclave, and resource classification.
- **5.2.1 Envelope Encryption**: Data-at-rest encryption using AES-256-GCM with hardware-backed master keys in Cloud HSM.
- **5.3.1 Threat Telemetry & SIEM**: Real-time event correlation, automated mitigation of anomalous traffic and rate abuse.

---

# 4. هەڵسەنگاندنی تواناکان و پلانی گەشە — Capability Assessment & Maturity Model

Every capability is evaluated on an annual basis using the standard 5-level maturity scale:
- **Level 1 (Initial)**: Ad-hoc, undocumented.
- **Level 2 (Repeatable)**: Documented at team level.
- **Level 3 (Defined)**: Standardized across IDG enterprise specifications.
- **Level 4 (Managed)**: Quantitatively monitored via metrics and SLAs.
- **Level 5 (Optimizing)**: Continuous automated optimization and AI-assisted governance.

All Tier 1 capabilities across IDG platforms must operate at **Level 3 (Defined)** or higher.
