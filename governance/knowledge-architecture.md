# Iraq Digital Gateway (IDG) Enterprise Knowledge Architecture Specification

**Document Identifier**: IDG-SPEC-KNOWLEDGE-2026-V1  
**Document Title**: Enterprise Knowledge Architecture Specification  
**Parent Corporate Entity**: Iraq Digital Gateway (IDG)  
**Flagship Product Reference**: AI Gate Iraq (Product 001)  
**Status**: Production Approved  
**Classification**: Enterprise Architecture Standard  
**Review Cycle**: Annual  
**Effective Date**: 2026-08-07  

---

# 1. Document Control

| Metadata Field | Specification Standard |
| :--- | :--- |
| **Document Identifier** | IDG-SPEC-KNOWLEDGE-2026-V1 |
| **Document Title** | Enterprise Knowledge Architecture Specification |
| **Parent Organization** | Iraq Digital Gateway (IDG) |
| **Flagship Product** | AI Gate Iraq (Product 001) |
| **Future Scope** | Product 002 through Product 500+ |
| **Version** | v1.0.0 |
| **Classification** | Enterprise Restricted / Public Architecture Blueprint |
| **Owner** | IDG Enterprise Knowledge & Information Governance Board |
| **Approved By** | Chief Information Officer & Principal Documentation Architect |
| **ISO / Regulatory Alignment**| ISO 9001:2015 (Knowledge Management), ISO/IEC 27001:2022 (A.5.37), SOC 2 Type II |
| **Location** | `/governance/knowledge-architecture.md` |

---

# 2. Executive Summary
The Iraq Digital Gateway (IDG) Enterprise Knowledge Architecture Specification establishes the structural, governance, classification, and technological framework for managing knowledge assets across the entire IDG ecosystem. 

This specification codifies how documentation, technical specifications, architecture decision records (ADRs), operational runbooks, research, and governance policies are authored, versioned, translated, indexed, and discovered. It bridges corporate governance with software engineering repositories, establishing a unified knowledge graph and a trilingual publishing pipeline supporting English (`en-US`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`).

---

# 3. Purpose
The purpose of this specification is to:
1. Eliminate knowledge silos across engineering, product management, design, security, and corporate leadership.
2. Mandate trilingual parity across all public-facing and stakeholder knowledge surfaces from Day One.
3. Establish a unambiguous, machine-readable document taxonomy and permanent identification system.
4. Define enterprise search and semantic knowledge graph standards for sub-second retrieval.
5. Guarantee auditability, version lineage, and regulatory compliance under ISO 9001 and ISO 27001 standards.

---

# 4. Scope
This specification applies to all documentation, written communications, API contracts, codebase specifications, design assets, legal frameworks, and operational runbooks across:
- **IDG Parent Enterprise**: Corporate systems (`idg.global`), shared enterprise services, holding policies.
- **Product 001 (AI Gate Iraq)**: Product specifications, AI gateway documentation, developer portals (`aigate.iq`).
- **Future Products (`Product 002` through `Product 500+`)**: All future products created via IDG project factories.
- **Repositories & Engineering Assets**: All repositories in the `idg-corp-*`, `agi-*`, `idg-service-*`, and `idg-sdk-*` namespaces.

---

# 5. Core Architectural Principles
1. **Trilingual Parity by Default**: Every public and stakeholder knowledge asset must exist with equal fidelity across English (`en-US`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`).
2. **Single Source of Truth (SSOT)**: Knowledge assets are authored as Markdown in version-controlled repositories (`idg-corp-docs` / `.github/docs`), decoupling content from presentation.
3. **Machine-Readable Governance**: Every document carries standardized YAML frontmatter metadata and a globally unique Identifier (`IDG-SPEC-*`, `IDG-POLICY-*`, etc.).
4. **Canonical Technical Identifiers**: API parameters, CLI commands, code symbols, URIs, and package names remain strictly untranslated across all language variants to maintain technical precision.
5. **Bi-Directional Optical Parity**: User interfaces adapt seamlessly to LTR (English) and RTL (Arabic / Kurdish Sorani) reading directionality using CSS logical properties.

---

# 6. Trilingual Language Architecture

## 6.1 Supported Enterprise Locales
The IDG Knowledge Architecture natively mandates three day-one languages:

| Locale Code | Language Name | Native Endonym | Directionality | Canonical Role |
| :--- | :--- | :--- | :--- | :--- |
| **`en-US`** | English (United States) | English | Left-to-Right (LTR) | Canonical Technical Base |
| **`ar-IQ`** | Arabic (Iraq) | العربية | Right-to-Left (RTL) | Primary Regional Standard |
| **`ckb-IQ`** | Kurdish Sorani (Iraq) | کوردی (سۆرانی) | Right-to-Left (RTL) | Primary Regional Standard |

## 6.2 Global Language Selector & Routing
- **UI Selector Component**: The global header across all IDG web applications and documentation portals MUST feature a persistent, accessible language selector containing: `English`, `العربية`, and `کوردی`.
- **Locale URL Taxonomy**:
  - English (Default/Explicit): `https://idg.global/en-US/docs/knowledge-architecture` or `https://idg.global/docs/knowledge-architecture`
  - Arabic: `https://idg.global/ar-IQ/docs/knowledge-architecture`
  - Kurdish Sorani: `https://idg.global/ckb-IQ/docs/knowledge-architecture`
- **Language Preference Persistence**: User language selection is persisted via `localStorage` (`idg_user_locale`) and `idg_locale` cookies with fallback to `Accept-Language` HTTP header parsing.

## 6.3 Content Parity & Translation States
Every document in the knowledge system maintains an explicit translation state in its frontmatter:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG TRANSLATION LIFECYCLE MATRIX                                        │
└─────────────────────────────────────────────────────────────────────────┘
  [1. Draft] ──► [2. Translation Required] ──► [3. Translation In Review]
                                                        │
                                                        ▼
  [6. Archived] ◄── [5. Published] ◄───────────────── [4. Approved]
```

1. **`Draft`**: Content is being authored in its primary language.
2. **`Translation Required`**: Source content is approved; queued for regional localization.
3. **`Translation In Review`**: Regional translation complete; undergoing technical/linguistic verification.
4. **`Approved`**: Localized content verified for technical accuracy and cultural alignment.
5. **`Published`**: Available on live public/internal portals.
6. **`Archived`**: Deprecated content preserved for historical audit.

If a requested language translation is in progress, the portal displays the approved content alongside a trilingual notice banner indicating the translation state rather than failing silently.

---

# 7. RTL & LTR Layout Architecture

## 7.1 CSS Logical Properties Constraint
To eliminate layout distortion and physical directionality bugs, all documentation templates and website components MUST use CSS Logical Properties exclusively:

| Banned Directional Property | Mandatory CSS Logical Property |
| :--- | :--- |
| `margin-left` / `margin-right` | `margin-inline-start` / `margin-inline-end` |
| `padding-left` / `padding-right` | `padding-inline-start` / `padding-inline-end` |
| `left` / `right` | `inset-inline-start` / `inset-inline-end` |
| `text-align: left` / `right` | `text-align: start` / `end` |

## 7.2 Optical Parity & Icon Mirroring
- **Directional Icons**: Navigation arrows (`ChevronRight`, `ArrowLeft`), breadcrumb slashes, and drawer toggles MUST automatically flip horizontally (`transform: scaleX(-1)`) when rendered under `dir="rtl"`.
- **Media & Code Formatting**: Code blocks, JSON payloads, terminal outputs, and architecture diagrams remain strictly LTR formatted regardless of parent page directionality.

---

# 8. Enterprise Knowledge Hierarchy
The IDG Knowledge Base is categorized into 14 distinct functional domains:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG ENTERPRISE KNOWLEDGE DOMAIN TAXONOMY                               │
└─────────────────────────────────────────────────────────────────────────┘
  ├── 1. Corporate Knowledge      (Strategy, Annual Reports, Governance)
  ├── 2. Brand Knowledge          (Design System, Style Guides, Media Kits)
  ├── 3. Product Knowledge        (Product Specs, Features, Roadmaps)
  ├── 4. Technical Knowledge      (Architecture Specs, API Contracts, Specs)
  ├── 5. Engineering Knowledge    (Coding Standards, CI/CD, Repositories)
  ├── 6. Design Knowledge         (UI Component Libs, Accessibility Rules)
  ├── 7. Security Knowledge       (ISO 27001 Controls, SecOps Runbooks)
  ├── 8. Governance Knowledge     (Policies, Compliance, Audit Trails)
  ├── 9. Legal Knowledge          (Terms of Service, Privacy, Data Contracts)
  ├── 10. Operations Knowledge    (Infrastructure, Deployment, On-Call)
  ├── 11. Research Knowledge      (AI Benchmarks, Sovereign Market Analysis)
  ├── 12. Partner Knowledge       (B2B Integrations, API Onboarding)
  ├── 13. Public Knowledge         (Knowledge Base, User Manuals, FAQs)
  └── 14. Archived Knowledge      (Superseded Specifications, Legacy Logs)
```

---

# 9. Document Identification System

## 9.1 Permanent Identification Taxonomy
Every official document MUST be assigned a immutable Identifier structured as:  
`IDG-[CATEGORY]-[DOMAIN/TOPIC]-[YEAR]-V[VERSION]`

| Category Prefix | Description | Example Identifier |
| :--- | :--- | :--- |
| **`IDG-SPEC-*`** | Formal Architecture Specifications | `IDG-SPEC-KNOWLEDGE-2026-V1` |
| **`IDG-POLICY-*`** | Mandatory Enterprise Policies | `IDG-POLICY-SECOP-2026-V1` |
| **`IDG-STD-*`** | Technical & Engineering Standards | `IDG-STD-TS-2026-V1` |
| **`IDG-ARCH-*`** | Infrastructure & Blueprint Schemas | `IDG-ARCH-CLOUDFLARE-2026-V1` |
| **`IDG-DECISION-*`**| Architecture Decision Records (ADR) | `IDG-DECISION-0012-2026-V1` |
| **`IDG-RUNBOOK-*`** | Operational & Disaster Recovery Manuals| `IDG-RUNBOOK-DR-FAILOVER-2026-V1` |
| **`IDG-GUIDE-*`** | Developer & User Onboarding Guides | `IDG-GUIDE-API-ONBOARDING-2026-V1`|
| **`IDG-REFERENCE-*`**| API Specs & System References | `IDG-REFERENCE-API-V1` |

---

# 10. Knowledge Frontmatter Standard
Every Markdown document in the IDG ecosystem MUST begin with a standardized YAML frontmatter header:

```yaml
---
id: "IDG-SPEC-KNOWLEDGE-2026-V1"
title: "Enterprise Knowledge Architecture Specification"
summary: "Defines knowledge governance, trilingual documentation, search indexing, and document lifecycles across IDG."
owner: "Enterprise Knowledge & Information Governance Board"
classification: "Enterprise Architecture Standard"
status: "Approved"
effective_date: "2026-08-07"
review_cycle: "Annual"
parent_entity: "Iraq Digital Gateway (IDG)"
product_reference: "AI Gate Iraq (Product 001)"
locales:
  en-US:
    path: "/en-US/governance/knowledge-architecture.md"
    status: "Published"
  ar-IQ:
    path: "/ar-IQ/governance/knowledge-architecture.md"
    status: "Published"
  ckb-IQ:
    path: "/ckb-IQ/governance/knowledge-architecture.md"
    status: "Published"
tags: ["governance", "documentation", "trilingual", "knowledge-graph", "search"]
---
```

---

# 11. Search Architecture

## 11.1 Trilingual Search Capabilities
The IDG Enterprise Search Engine (`search.idg.global`) provides sub-50ms search execution across all 14 knowledge domains supporting:
1. **Full-Text Indexing**: Multi-language stemming, lemmatization, and stop-word filtering for English, Arabic, and Kurdish.
2. **Vector Semantic Search**: Embeddings generated via Vertex AI text embedding models (`text-embedding-004`) allowing natural language semantic queries across all three languages.
3. **Faceted Filtering**: Instant slicing by Document Type (`IDG-SPEC-*`), Product (`Product 001`), Domain (`Engineering`), Status (`Approved`), and Language (`ar-IQ`).

---

# 12. Enterprise Knowledge Graph Architecture
The IDG Knowledge Platform models relationships between digital assets as a graph schema:

```
                     ┌────────────────────────────────┐
                     │ Product 001 (AI Gate Iraq)     │
                     └───────────────┬────────────────┘
                                     │
            ┌────────────────────────┼────────────────────────┐
            ▼                        ▼                        ▼
┌───────────────────────┐ ┌────────────────────┐ ┌───────────────────────┐
│ Repository (agi-web)  │ │ API Specification  │ │ Technical Standard    │
│ (idg-repo-agi-web)    │ │ (IDG-SPEC-API-V1)  │ │ (IDG-SPEC-DEPLOY-V1)  │
└───────────────────────┘ └────────────────────┘ └───────────────────────┘
```

## 12.1 Canonical Entity Relationships
- `Product HAS_DOCUMENTATION Specification`
- `Specification DERIVES_FROM Policy`
- `Repository IMPLEMENTS Specification`
- `API_Endpoint BELONGS_TO Product`
- `Architecture_Decision GOVERNS System`

---

# 13. Access Control & Classification Matrix

| Access Level | Target Audience | Storage Boundary | Authentication Requirement |
| :--- | :--- | :--- | :--- |
| **`Public`** | External developers, citizens, partners | Public CDN / Developer Portal | Unauthenticated / API Key |
| **`Internal`** | IDG employees, contracted engineers | Internal Docs Portal (`docs.idg.internal`)| Google OIDC SSO |
| **`Confidential`** | Specific product teams, SecOps, Finance | Restricted GCS Buckets / Vault | Role-Based Access Control (RBAC) |
| **`Restricted`** | C-Suite, Executive Board, Legal Counsel | CMEK Encrypted Vault | Multi-Factor Auth + Hardware Key |
| **`Executive`** | IDG Board of Directors | Air-Gapped / Executive Portal | Biometric + Zero-Trust IAM |

---

# 14. Auditability & Document Lineage
Every document revision MUST maintain complete lineage:
- **Git Commit Provenance**: Every document modification recorded with GPG-signed Git commits.
- **7-Year Retention**: Superseded versions retained permanently in immutable Cloud Audit Buckets for ISO 27001 regulatory inspection.
- **Audit Logging**: Document views, exports, and permission changes recorded in immutable audit trails.

---

# 15. Website & Portal Integration
The Knowledge Architecture integrates directly into the IDG web applications:
- **Global Header**: Features document breadcrumbs, trilingual selector, and instant search bar (`Cmd + K`).
- **Dynamic SEO**: Emits `<link rel="alternate" hreflang="en-US" href="..." />`, `hreflang="ar-IQ"`, and `hreflang="ckb-IQ"` metadata tags.
- **Sitemap Generation**: Automated trilingual `sitemap.xml` generated on every deployment pass.

---

# 16. Quality Metrics & Compliance Checklist
Prior to publishing any official document, automated CI/CD pipelines verify:
- [x] Document ID matches official IDG prefix standards.
- [x] YAML frontmatter validated against JSON schema.
- [x] Trilingual translation parity verified across `en-US`, `ar-IQ`, and `ckb-IQ`.
- [x] CSS Logical Properties validated for LTR/RTL rendering.
- [x] Zero broken internal markdown cross-references.
- [x] Canonical technical identifiers verified as untranslated.

---

# 17. Document Control & Revision History

| Version | Date | Author / Title | Description of Changes | Status |
| :--- | :--- | :--- | :--- | :--- |
| **v1.0.0** | 2026-08-07 | IDG Enterprise Knowledge Governance Board | Initial publication of Enterprise Knowledge Architecture Specification (PATCH 014) | Approved |

- **Document Identifier**: IDG-SPEC-KNOWLEDGE-2026-V1
- **Document Title**: Enterprise Knowledge Architecture Specification
- **Owner**: Iraq Digital Gateway (IDG) Enterprise Knowledge Board
- **Classification**: Enterprise Architecture Standard
- **Status**: Production Approved
- **Location**: `/governance/knowledge-architecture.md`

---
# End of Document
