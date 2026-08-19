# مۆدێلی کارپێکردنی دامەزراوە — Enterprise Operating Model Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-CORP-OP-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Enterprise Operating Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ARCH-2026-V1, IDG-SPEC-DEPLOY-2026-V1

---

# 1. مەبەست و بنەماکانی کارپێکردن — Purpose & Operating Principles

This specification defines the institutional operating model of Iraq Digital Gateway (IDG). It details how core, enabling, governance, product, technology, and risk operations interact to deliver continuous, reliable, and secure enterprise performance.

### بنەما بنەڕەتییەکان — Operating Principles:
1. **بەردەوامی و نەپچڕان — Uncompromising High Availability**: All mission-critical operations target 99.95% availability with automated failover and self-healing systems.
2. **سفر-متمانە و ئاسایشی بەردەوام — Continuous Zero Trust Compliance**: Security is embedded into everyday operations (DevSecOps, automated SAST/DAST, continuous auditing).
3. **کارپێکردنی ڕێسا-تەوەر و بەڵگەدار — Documented Process Supremacy**: Every operational task must trace to an authoritative Standard Operating Procedure (`IDG-SOP-*`).
4. **تێبینی‌پێکراوی تەواو — 360-Degree Observability**: All platform components emit structured logs, metrics (Four Golden Signals), and distributed traces.

---

# 2. کایەکانی کارپێکردنی دامەزراوە — Enterprise Operational Domains

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. ئۆپەراسیۆنی بەڕێوەبردن و حوکمڕانی — GOVERNANCE & RISK OPERATIONS          │
│ Architecture Board Reviews • Audit Trails • Compliance Gates • Risk Reviews │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. ئۆپەراسیۆنی بەرهەم و داهێنان — PRODUCT & INNOVATION OPERATIONS           │
│ Product Lifecycle Management • User Research • Trilingual Localization Flow │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ئۆپەراسیۆنی تەکنەلۆجیا و ئەندازیاری — ENGINEERING & TECHNOLOGY OPERATIONS │
│ GitFlow CI/CD • Automated Quality Testing • Release Management • APIs Mesh │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. ئۆپەراسیۆنی ژێرخان و داتا — PLATFORM INFRASTRUCTURE & DATA OPERATIONS    │
│ Multi-Cloud Orchestration • Database Migrations • Disaster Recovery (DR)    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 3. ئۆپەراسیۆنی بەرهەم و تەکنەلۆجیا — Product & Technology Operations

### خولی بەرهەمهێنان و بڵاوکردنەوە — Release & Deployment Rhythms:
- **Continuous Integration (CI)**: Automated commit linting, unit testing, security scanning (CodeQL/Trivy), and container build on every Pull Request.
- **Progressive Delivery (CD)**: Blue/Green and Canary deployment strategies across isolated environments (Sandbox, Dev, QA, Staging, Production, Disaster Recovery).
- **Incident Response & War Rooms**: Defined Severity Tiers (SEV-1 Critical to SEV-4 Low) with automated alerting, on-call paging, and mandatory post-incident root-cause analysis (RCA).

---

# 4. ئۆپەراسیۆنی مەترسی و ئاسایش — Risk & Compliance Operations

- **بەڕێوەبردنی کلیلی ئاسایش — Cryptographic & Secrets Management**: Automated 90-day rotation for API keys, service account credentials, and TLS certificates.
- **پاراستنی بەڵگەنامە و لۆگەکان — Audit Logging Preservation**: Immutable audit logs preserved in write-once-read-many (WORM) storage for 7-year regulatory verification.
- **پشکنینی بەردەوامی تواناکان — Business Continuity Testing**: Semi-annual simulated disaster recovery exercises verifying Recovery Time Objective (RTO < 15 min) and Recovery Point Objective (RPO < 5 min).
