# خولی ژیانی بەرهەمەکان — Enterprise Product Lifecycle Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-LIFE-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Product Lifecycle Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-PROD-ARCH-2026-V1, IDG-PROD-GOV-2026-V1

---

# 1. قۆناغە هەشتگۆشەییەکەی خولی ژیان — 8-Stage Product Lifecycle Model

Every product under IDG traverses a rigorous, gated 8-stage lifecycle to guarantee enterprise readiness, security hardening, and operational continuity:

```
┌───────────┐    ┌──────────────┐    ┌─────────────┐    ┌────────────┐
│1. دۆزینەوە│───►│2. تەلارسازی   │───►│3. گەشەپێدان │───►│4. پەسەندکردن│
│ DISCOVERY │    │ ARCHITECTURE │    │ DEVELOPMENT │    │ VALIDATION │
└───────────┘    └──────────────┘    └─────────────┘    └────────────┘
                                                               │
┌───────────┐    ┌──────────────┐    ┌─────────────┐           │
│8. خانەنشین│◄───│7. گەشەکردن   │◄───│6. کارپێکردن │◄──────────┘
│RETIREMENT │    │  EVOLUTION   │    │  OPERATION  │    ┌────────────┐
└───────────┘    └──────────────┘    └─────────────┘    │5. بڵاوکردنەوە│
                                                        │   LAUNCH   │
                                                        └────────────┘
```

---

# 2. پێناسەی قۆناغەکان و پێداویستی دەرچوون — Stage Definitions & Exit Criteria

### 1. دۆزینەوە — Stage 1: Discovery
- Activities: Problem definition, market analysis, institutional stakeholder interviews.
- Exit Gate: Product Concept Document (PCD) approved by Product Governance.

### 2. تەلارسازی — Stage 2: Architecture
- Activities: Technical design document, API contract definition (OpenAPI 3.1), data schema design, threat modeling.
- Exit Gate: Architecture Decision Record (ADR) accepted by Enterprise Architecture Council.

### 3. گەشەپێدان — Stage 3: Development
- Activities: Iterative software engineering, trilingual string localization, automated test coverage (>= 85%).
- Exit Gate: Code-complete milestone in Staging environment with green CI/CD pipeline.

### 4. پەسەندکردن — Stage 4: Validation
- Activities: Security penetration testing, WCAG 2.2 AA accessibility audit, RTL visual validation, load testing.
- Exit Gate: Formal sign-off from Security & Quality Assurance boards.

### 5. بڵاوکردنەوە — Stage 5: Launch
- Activities: Canary deployment, production verification, documentation publishing, stakeholder onboarding.
- Exit Gate: 100% production traffic routing with zero critical incidents.

### 6. کارپێکردن — Stage 6: Operation
- Activities: 24/7 SRE monitoring, SLA tracking, patch management, customer support.
- Exit Gate: Continuous operational compliance against availability targets.

### 7. گەشەکردن — Stage 7: Evolution
- Activities: Feature expansion, model upgrades, performance optimization.
- Exit Gate: Incremental minor version releases adhering to semantic versioning.

### 8. خانەنشینکردن — Stage 8: Retirement / Decommissioning
- Activities: Deprecation notices (minimum 12 months for enterprise APIs), data archiving, contract sunsetting.
- Exit Gate: Safe teardown of infrastructure and data retention audit sign-off.
