# Iraq Digital Gateway (IDG) Enterprise Documentation Governance Specification

## Document Identification
- **Document Identifier**: IDG-SPEC-DOCGOV-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Related Specifications**: IDG-SPEC-IA-2026-V1, IDG-SPEC-NAV-2026-V1, IDG-SPEC-CTS-2026-V1, IDG-SPEC-SEO-2026-V1, IDG-SPEC-DS-2026-V1, IDG-SPEC-CMP-2026-V1
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon deployment of new primary product domains

---

# 1. Documentation Vision & Objectives

The Iraq Digital Gateway (IDG) Enterprise Documentation Governance Specification defines the constitutional standards, lifecycle management protocols, security classification rules, repository taxonomies, translation pipelines, and quality assurance criteria governing every written technical, operational, product, and institutional artifact across the IDG corporate ecosystem.

This specification ensures that all present and future digital documentation created for Iraq Digital Gateway (Holding Parent Entity), AI Gate Iraq (Product 001), and subsequent portfolio assets (`Product 002+`) remains permanently accurate, auditable, ISO 9001 compliant, machine-readable, trilingually localized, and resilient against knowledge fragmentation across a 10-year operational horizon.

---

# 2. Constitutional Documentation Principles

1. **Single Source of Truth (SSOT)**: Every architectural decision, product specification, security policy, and operational procedure exists in exactly one canonical repository location. Duplicate or divergent versions are strictly prohibited.
2. **Asynchronous Knowledge Authority**: Written documentation is the supreme authority for technical and business governance. Oral decisions or undocumented Slack/chat agreements hold zero legal or architectural validity until published in compliance with this specification.
3. **Trilingual Sovereignty by Design**: Technical and corporate specifications must support first-class localization in English (`en-US`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`), maintaining exact structural parity across Left-to-Right (LTR) and Right-to-Left (RTL) formats.
4. **Machine & AI Processability**: All documents are authored in clean Semantic Markdown (CommonMark specification) with standardized JSON/YAML frontmatter metadata to enable automated ingestion by LLM retrieval systems (RAG), vector knowledge bases, and continuous integration validation pipelines.
5. **Traceable Lineage & ISO Alignment**: Every document change undergoes version-controlled peer review, audit logging, and cryptographic commit history alignment conforming to ISO 9001:2015 Quality Management Standards (Section 7.5 Documented Information).

---

# 3. Enterprise Documentation Hierarchy

The IDG documentation framework operates under a rigid four-tier authority pyramid:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 0: CONSTITUTIONAL GOVERNANCE & CHARTERS                            │
│ Corporate Articles, Board Charters, Sovereign Compliance Standards     │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 1: ENTERPRISE ARCHITECTURE SPECIFICATIONS (IDG-SPEC-*)             │
│ Information Architecture, Navigation, Content, SEO, Design Tokens      │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 2: PRODUCT & SYSTEM ENGINEERING SPECS (IDG-PROD-*)                │
│ Product 001 (AI Gate Iraq) Specs, API Reference, Security Blueprints   │
└────────────────────┬────────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Tier 3: OPERATIONAL STANDARD OPERATING PROCEDURES (IDG-SOP-*)          │
│ Deployment Runbooks, Incident Response, Translation Workflows, Audits   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

# 4. Repository Structure & Folder Standards

All documentation artifacts MUST be stored inside git-controlled version repositories adhering strictly to the root directory layout below:

```
/ (Repository Root)
├── governance/                   # Tier 0 & Tier 1 Corporate Governance Specs
│   ├── document-governance.md    # IDG-SPEC-DOCGOV-2026-V1
│   ├── security-policy.md        # IDG-SPEC-SEC-2026-V1
│   └── compliance-audit.md       # IDG-SPEC-CMPL-2026-V1
├── website/                      # Corporate & Product Digital Specifications
│   ├── information-architecture.md  # IDG-SPEC-IA-2026-V1
│   ├── navigation-architecture.md   # IDG-SPEC-NAV-2026-V1
│   └── content-strategy.md          # IDG-SPEC-CTS-2026-V1
├── seo/                          # Search & Discoverability Specifications
│   └── seo-architecture.md       # IDG-SPEC-SEO-2026-V1
├── design-system/                # Visual & UX Engineering Specifications
│   ├── design-tokens.md          # IDG-SPEC-DS-2026-V1
│   └── components.md             # IDG-SPEC-CMP-2026-V1
├── products/                     # Product Portfolio Specific Documentation
│   ├── product-001-aigate/       # AI Gate Iraq Autonomous Directory
│   │   ├── product-charter.md
│   │   ├── api-reference.md
│   │   └── security-framework.md
│   └── product-002-future/
├── i18n/                         # Trilingual Translation Matrices & Glossaries
│   ├── corporate-glossary.json
│   ├── ar/                       # Arabic Markdown Equivalents
│   └── ckb/                      # Kurdish Sorani Markdown Equivalents
└── llms.txt                      # AI Crawler Knowledge Graph Mapping Entrypoint
```

---

# 5. File & Folder Naming Conventions

1. **Kebab-Case File Paths**: All directory names and markdown file names MUST be strictly lowercase with hyphens (`-`) separating words. Spaces, underscores, or uppercase characters are strictly forbidden (e.g., `document-governance.md`).
2. **Deterministic Document Identifiers**: Every official document MUST contain an explicit Document Identifier string matching the pattern:
   `IDG-[CATEGORY]-[CODE]-[YEAR]-V[MAJOR_VERSION]`
   - Example: `IDG-SPEC-DOCGOV-2026-V1`
   - Example: `IDG-PROD-AIGATE-2026-V1`

---

# 6. Markdown Formatting & Syntax Standards

1. **CommonMark Compliance**: All documents MUST strictly pass standard CommonMark linting without syntax errors or broken table formatting.
2. **Heading Hierarchy Hygiene**: Heading levels MUST increment logically (`# H1` -> `## H2` -> `### H3`). Skipping levels (e.g., `# H1` directly to `### H3`) is strictly prohibited.
3. **No Embedded HTML or Style Tag Inline Bloat**: Markdown documents MUST NOT contain inline `<style>` tags, hardcoded CSS styles, or inline event handlers. Standard Markdown tables and clean semantic HTML blocks are permitted only when Markdown syntax is insufficient.

---

# 7. Document Frontmatter Metadata Standards

Every document published within the IDG ecosystem MUST commence with a mandatory YAML or Markdown Frontmatter Metadata Header satisfying the schema below:

```yaml
---
document_id: "IDG-SPEC-DOCGOV-2026-V1"
title: "IDG Enterprise Documentation Governance Specification"
parent_entity: "Iraq Digital Gateway (IDG)"
product_reference: "AI Gate Iraq (Product 001)"
version: "1.0.0"
status: "Approved" # Options: Draft | Review | Approved | Published | Deprecated | Archived
classification: "Restricted" # Options: Public | Internal | Confidential | Restricted
effective_date: "2026-08-07"
owner_role: "Principal Enterprise Documentation Architect"
approved_by: "Chief Technology Officer & Governance Review Board"
locales_supported: ["en-US", "ar-IQ", "ckb-IQ"]
review_cycle: "Annual"
---
```

---

# 8. Document Lifecycle & Status Definitions

Every document transitions through six immutable lifecycle states:

```
[1. Draft] ──► [2. Review] ──► [3. Approved] ──► [4. Published] ──► [5. Deprecated] ──► [6. Archived]
```

1. **Draft**: Initial authoring state. Document is incomplete or subject to active structural iteration. Marked with `status: Draft`.
2. **Review**: Completed draft undergoing formal peer, security, or executive review via Pull Request.
3. **Approved**: Formally signed off by designated Approver roles. Merged into target release branch.
4. **Published**: Rendered live on public, internal, or developer documentation portals (`docs.idg.global` / `aigate.iq/docs/`).
5. **Deprecated**: Superseded by a newer document specification version. Retained for historical reference with clear deprecation notice banners.
6. **Archived**: Read-only historical document removed from active indexes and moved to historical cold storage (`/archive/`).

---

# 9. Review & Approval Workflow Matrix

Document approval authority is governed by security classification and tier:

| Document Tier / Category | Primary Author Role | Mandatory Reviewer Role | Final Approver Authority |
| :--- | :--- | :--- | :--- |
| **Tier 0 Constitutional** | Executive Governance Lead | Legal & Compliance Director | IDG Board of Directors / CEO |
| **Tier 1 Enterprise Specs** | Principal Architect | Lead Technical Director | Chief Technology Officer (CTO) |
| **Tier 2 Product Specs** | Product Architect | Lead Security Engineer | Head of Product Engineering |
| **Tier 3 Operational Runbooks** | Senior DevOps Engineer | Infrastructure Lead | Site Reliability Engineering Director |

---

# 10. Security Classification Framework

To protect intellectual property, national data sovereignty, and security posture, all IDG documentation is categorized under one of four security levels:

1. **Public**: Unrestricted distribution. Viewable by media, partners, and search engine crawlers (e.g., Corporate Overview, Marketing Content, Public API Docs).
2. **Internal**: Restricted to authenticated IDG employees and vetted partners. Requires enterprise SSO login.
3. **Confidential**: Restricted to specific operational units or executive roles. Disclosures require active Non-Disclosure Agreements (NDAs).
4. **Restricted**: Sovereign security specs, encryption key infrastructure runbooks, administrative credentials procedures. Accessible strictly via multi-factor security clearance authorization.

---

# 11. Multilingual Translation & Governance

Documentation must preserve structural identity across all supported languages:

## 11.1 Trilingual Language Matrix
- **Primary Source Canonical**: English (`en-US`)
- **First-Class Regional Locales**: Arabic (`ar-IQ`), Kurdish Sorani (`ckb-IQ`)

## 11.2 Synchronization Rules
1. **Parallel Commit Requirement**: When an English specification undergoes a `MAJOR` or `MINOR` version bump, corresponding translation PRs for Arabic and Kurdish Sorani MUST be filed within 10 business days.
2. **Structural Equivalence**: Localized documents MUST maintain identical Markdown header structures, section numbering, and code snippet blocks. Only explanatory body text, titles, and localized terminology reflect language translation.

---

# 12. Artificial Intelligence Content Policy

1. **Human Oversight Mandate**: AI tools (including LLMs, Gemini, and generative agents) may be utilized to draft, format, or lint documentation. However, **no document may enter `Approved` or `Published` status without explicit line-by-line review and sign-off by a designated Human Technical Approver**.
2. **No Hallucinated References**: AI-assisted drafts MUST be strictly verified against real codebase structures, actual API endpoints, and real deployment scripts prior to submission.

---

# 13. Quality Assurance & Continuous Integration (CI) Rules

The automated documentation pipeline executes the following checks on every Pull Request:

- **Markdown Linting**: Fails build on malformed links, unclosed code fences, or irregular headings.
- **Frontmatter Schema Validation**: Fails build if `document_id`, `version`, `status`, or `classification` fields are missing or invalid.
- **Dead Link Detection**: Fails build if internal relative file paths or anchors fail to resolve.
- **Forbidden Vocabulary Linter**: Prevents usage of obsolete product names, informal slang, or unapproved technical jargon.

---

# 14. Document Control & Audit Compliance

- **Document Identifier**: IDG-SPEC-DOCGOV-2026-V1
- **Current Version**: 1.0.0
- **Document Owner**: IDG Enterprise Documentation & Knowledge Governance Board
- **Approved By**: Chief Technology Officer & Head of Quality Management
- **ISO Standard Alignment**: ISO 9001:2015 Clause 7.5 (Documented Information Management)
- **Status**: Production Approved
- **Review Cycle**: Annual mandatory audit
- **Repository Location**: `/governance/document-governance.md`
