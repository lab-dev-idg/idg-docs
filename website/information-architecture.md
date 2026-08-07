# IDG Global Enterprise Information Architecture Specification

## Document Identification
- **Document Identifier**: IDG-SPEC-IA-2026-V1
- **Parent Organization**: IDG (International Development Group)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07

---

## 1. Information Architecture Principles

The IDG Global Information Architecture defines the structural framework, semantic taxonomies, URL routing rules, and content governance models governing all corporate digital assets.

### 1.1 Core Architectural Principles
1. **Parent-First Authority**: IDG operates as the supreme corporate holding entity, asserting governance authority, shared brand parameters, security policies, and legal frameworks across all child assets.
2. **Product & Subsidiary Autonomy**: Product entities, beginning with AI Gate Iraq (Product 001) and extending to all future products, maintain dedicated domain structures, product-specific navigation models, and targeted functional user experiences while adhering strictly to global taxonomy standards.
3. **Modular Scalability**: The architecture accommodates unlimited expansion of business units, subsidiaries, products, localized sites, and service lines without requiring structural refactoring of existing URL schemes or database schemas.
4. **Single Source of Truth (SSOT)**: Core corporate data, compliance records, technical documentation, and product metadata originate from centralized knowledge repositories and propagate via structured APIs.
5. **Decoupled Content & Presentation**: Content assets are authored natively within structured headless content engines, tagged with machine-readable metadata, and exposed to web applications, mobile platforms, and AI systems.
6. **Machine Readability & AI Primacy**: Every document, page node, and asset is structured with semantic HTML5, JSON-LD schemas, and vector-embeddable chunking directives to enable automated retrieval, semantic search, and AI ingestion.
7. **Zero-Trust URL Stability**: Canonical URL paths are permanent, immutable, and strictly version-controlled to eliminate broken references, preserve search index authority, and safeguard legacy integrations.

---

## 2. Enterprise Content Hierarchy

The enterprise hierarchy dictates data inheritances, governance flow, and structural subordination throughout the digital footprint.

```
[Level 0: IDG Enterprise Core]
 ├── [Level 1: Corporate Holdings & Shared Services]
 │    ├── Governance & Legal Compliance
 │    ├── Investor Relations & Corporate Affairs
 │    ├── Shared Technology Infrastructure
 │    └── Global Brand & Media Assets
 │
 ├── [Level 1: Business Units & Subsidiaries]
 │    ├── Emerging Technologies Division
 │    ├── Enterprise Solutions Division
 │    └── Strategic Regional Operations (Iraq & MENA Region)
 │
 └── [Level 1: Products & Digital Assets]
      ├── [Product 001: AI Gate Iraq]
      │    ├── Core Platform Capabilities
      │    ├── Regional Government Solutions
      │    ├── Enterprise AI Integrations
      │    ├── Product Documentation Hub
      │    └── Developer & API Ecosystem
      │
      └── [Product N: Unlimited Future Products]
           ├── Product Capabilities
           ├── Industry Solutions
           └── Product Knowledge Base
```

---

## 3. Corporate Website Structure

The parent company corporate website (`idg.global`) serves as the definitive institutional portal for investors, global partners, regulatory bodies, and overarching corporate disclosures.

### 3.1 Primary Root Directory Structure
- `/` - IDG Corporate Hub Home Page
- `/about/` - Corporate History, Executive Leadership Roster, Global Board Directory, and Mission Statement
- `/governance/` - Corporate Governance Charters, Security Compliance, ESG Directives, and Legal Frameworks
- `/investors/` - Financial Reports, Regulatory Filings, Board Declarations, and Shareholder Relations
- `/subsidiaries/` - Directory of Holdings, Subsidiary Operating Entities, and Strategic Business Units
- `/portfolio/` - Global Product & Service Ecosystem Directory
  - `/portfolio/ai-gate-iraq/` - IDG Portfolio Landing Page for AI Gate Iraq (Product 001)
  - `/portfolio/{product-identifier}/` - Universal routing slot for future products
- `/newsroom/` - Corporate Announcements, Press Releases, Media Kits, and Executive Statements
- `/careers/` - Enterprise Human Capital, Talent Acquisition, and Global Workforce Directory
- `/contact/` - Corporate Headquarters Directory, Regional Offices, and Investor Communications

---

## 4. Multi-site Architecture

The multi-site technical architecture relies on a federated domain topology, a single sign-on (SSO) infrastructure, and standardized Edge CDN routing rules.

### 4.1 Topology Specifications
- **Domain Strategy**:
  - Parent Corporate Web Property: `idg.global` (Primary Root)
  - Product 001 Web Property: `aigate.iq` (Primary Regional/Product Domain) or `aigate.idg.global` (Corporate Canonical Mirror)
  - Subdomain Ecosystem: Shared micro-services, APIs, and authentications use standardized global subdomains (`auth.idg.global`, `api.idg.global`, `docs.idg.global`).
- **CDN Edge Routing Rules**: Edge proxies route incoming host headers to specialized serverless edge functions or server-rendered application clusters based on path patterns while maintaining a unified global cache layer.
- **Cross-Domain Session State**: User identity, authorization tokens, and enterprise user profiles synchronize seamlessly across `idg.global` and all product domains via tokenized SSO exchanges.

---

## 5. Parent Company vs Product Websites

To enforce operational boundary separation and preserve distinct brand identities, parent corporate portals and product web properties operate under explicit content boundaries.

| Domain Dimension | Parent Corporate Entity (IDG) | Product Properties (AI Gate Iraq & Future Products) |
| :--- | :--- | :--- |
| **Primary Audience** | Investors, Partners, Regulatory Bodies, Media, Executive Candidates | End Users, Enterprise Clients, Developers, System Integrators |
| **Primary Mission** | Institutional Trust, Strategic Growth, Financial Accountability | Solution Adoption, User Onboarding, Feature Delivery, Technical Support |
| **Visual Identity** | Institutional Classic, Executive Palette, Minimalist Corporate Typography | Functional Tech UI, Interactive Elements, Dynamic Product Design System |
| **CTA Dynamics** | "Download Annual Report", "Contact Investor Relations", "Explore Portfolio" | "Request Enterprise Demo", "Deploy Platform", "Access API Docs" |
| **Data Scope** | Enterprise-wide Aggregated Metrics & Corporate Disclosures | Platform Metrics, Feature Specs, Service Level Agreements, Live Dashboards |

---

## 6. Content Ownership

Enterprise content ownership follows an explicit Responsibility Assignment Matrix (RACI) across corporate and product teams.

### 6.1 Content Ownership Matrix
- **Corporate Legal & Executive Communications**:
  - Responsible / Accountable: IDG Chief Legal Officer (CLO) & Corporate Communications Directorate
  - Scope: `/about/`, `/governance/`, `/investors/`, `/newsroom/`
- **Product Architecture & Technical Specifications**:
  - Responsible / Accountable: AI Gate Iraq Product Lead / Chief Technology Officer (CTO)
  - Scope: `aigate.iq` Product pages, Technical Documentation, and API Portals
- **Regional Compliance & Localized Media**:
  - Responsible / Accountable: Regional Operational Directorate (Iraq Operations Hub)
  - Scope: Regional translations, Arabic/English content synchronization, localized legal disclaimers

---

## 7. Website Taxonomy

Taxonomy enforcement prevents orphan content and enables programmatic aggregation across multi-site properties.

### 7.1 Primary Taxonomy Axes
1. **Entity Tier**: `holding`, `subsidiary`, `business-unit`, `product`, `service-line`
2. **Product Identifier**: `prod-001-aigate`, `prod-002-future`, `corp-shared`
3. **Target Sector**: `government`, `defense`, `enterprise-banking`, `telecom`, `healthcare`, `energy`
4. **Content Classification**: `corporate-disclosure`, `product-overview`, `technical-doc`, `case-study`, `white-paper`, `api-reference`
5. **Geographic Scope**: `global`, `mena`, `iraq-national`, `eu`, `na`
6. **Language Locales**: `en-US` (Default canonical), `ar-IQ` (Primary regional), `ar-SA`, `fr-FR`

---

## 8. Knowledge Architecture

The knowledge architecture structures all technical, legal, and operational documents into semantically linked, vector-indexable knowledge nodes.

```
[Knowledge Core System]
 ├── Structural Knowledge Graph Nodes
 │    ├── Entity Relationships (IDG -> Product 001 -> Feature Modules)
 │    ├── Regulatory Compliance Mapping (ISO 27001, IQ-Gov Security Framework)
 │    └── API Endpoint Schema Index
 └── Document Storage Repositories
      ├── Object Repository (S3/Cloud Bucket Immutable Storage)
      ├── Metadata Store (Structured JSON-LD Document Manifests)
      └── Vector Storage (Semantic Embedding Coordinates for AI Agents)
```

---

## 9. Page Classification

Every page deployed across IDG corporate or product domains conforms to one of four standardized page classifications.

### 9.1 Classification Categories
1. **Tier 1: Global Institutional Pages**: Static, high-authority corporate pages requiring direct Board/Executive approval for modification (Corporate Governance, Executive Roster).
2. **Tier 2: Commercial & Portfolio Pages**: Conversion-oriented product and solution showcase pages managed by Product Marketing leads (AI Gate Iraq Platform Overview).
3. **Tier 3: Technical & Developer Documentation**: Continuous-delivery knowledge articles, API specs, and integration guides maintained via version-controlled Markdown workflows.
4. **Tier 4: Transactional & System Pages**: Interactive interfaces, authentication portals, billing dashboards, and system diagnostic displays.

---

## 10. Page Templates

Standardized layout blueprints ensure UI consistency and performance optimizations across all web properties.

### 10.1 Standardized Layout Definitions
- **Template T1 - Corporate Executive**: Wide header hero, sticky sidebar navigation, primary structured narrative section, institutional footer.
- **Template T2 - Product Showcase**: Hero animation zone, feature grid with high-contrast UI displays, interactive pricing/spec calculator, lead capture forms.
- **Template T3 - Documentation Hub**: Tri-pane layout (Left category tree navigation, center content canvas, right-hand dynamic table of contents heading outline).
- **Template T4 - Newsroom & Investor Disclosure**: Date-stamped metadata header, verified signature block, downloadable PDF attachment drawer, related press release grid.

---

## 11. Navigation Layers

Navigation architecture is segmented into distinct visual and structural layers to avoid cognitive overload.

### 11.1 Layer Specifications
- **Layer 0: Global Utility Bar**: Sticky top bar providing parent entity cross-switching, language locale selection (`EN` | `AR`), and direct enterprise login links.
- **Layer 1: Primary Brand Navigation**: Main header navigation containing core product capabilities, industry solutions, enterprise documentation, and corporate contact triggers.
- **Layer 2: Local Sub-Navigation**: Sticky sub-header present on product pages (AI Gate Iraq sub-bar: `Overview` | `Architecture` | `Security` | `Docs` | `Request Demo`).
- **Layer 3: Structural Footer**: Comprehensive multi-column directory featuring full sitemap links, compliance disclosures, legal notices, and copyright statements.

---

## 12. Global Search Architecture

The search system utilizes a dual-engine architecture combining keyword indexing with semantic vector embeddings.

### 12.1 Engine Components
- **Lexical Search (BM25)**: Instant autocomplete for exact matches across page titles, document IDs, API endpoint names, and product acronyms.
- **Semantic Neural Search**: Vector search powered by dense embedding models to answer natural language queries across the entire IDG and AI Gate knowledge corpus.
- **Unified Search API Endpoint**: `/api/v1/search` aggregating results across corporate news, technical documentation, product capabilities, and legal disclosures with facet filtering.

---

## 13. Internal Linking Strategy

Internal links enforce page authority flow, assist search crawlers, and guide user progression.

### 13.1 Linking Directives
1. **Upward Contextual Links**: Product feature pages link back to their parent product hub (`AI Gate Iraq Home`), which links to `IDG Strategic Portfolio`.
2. **Horizontal Capability Bridges**: Technical guides link directly to corresponding API references and relevant product solution pages.
3. **Cross-Entity References**: References to shared corporate security practices on product pages link directly to `IDG Corporate Governance & Security`.
4. **Anchor Text Strictness**: Anchor text must be explicitly descriptive of the target resource ("Review the AI Gate Iraq Security Protocol").

---

## 14. Documentation Hierarchy

All technical and corporate documentation follows a standardized four-level structural hierarchy.

```
[Level 1: System Master Category]
 └── AI Gate Iraq Enterprise Integration
      [Level 2: Section Module]
       └── Authentication & Authorization Modules
            [Level 3: Operational Guide]
             └── OAuth2 & SAML Single Sign-On Configuration
                  [Level 4: Detailed Specification / API Endpoint]
                   └── POST /v1/auth/token Reference Protocol
```

---

## 15. Corporate Documentation Integration

Corporate documentation (policies, investor disclosures, board charters) is managed centrally under strict compliance versioning.

### 15.1 Integration Directives
- **Storage Location**: Hosted on `idg.global/governance/docs/` and distributed to localized mirrors.
- **Format Requirements**: Native rendered HTML for web readability paired with digitally signed PDF downloads for legal record storage.
- **Access Control**: Public disclosures are open; internal operational directives require enterprise SAML authentication.

---

## 16. Product Documentation Integration

Product documentation for AI Gate Iraq and future products is integrated using a GitOps-based Documentation-as-Code workflow.

### 16.1 Product Documentation Workflow
1. Technical writers and engineers write documentation in Markdown (`.md`) within product source repositories.
2. Automated CI/CD pipelines validate frontmatter schemas, link integrity, and code snippet syntaxes.
3. Approved pull requests automatically trigger Edge site rebuilds and update vector search embeddings within seconds.
4. Embedded code interactive runtimes render real-time request/response test harnesses for developer evaluation.

---

## 17. Metadata Strategy

Every page and document MUST include a complete metadata block satisfying Dublin Core, Open Graph, and custom IDG Enterprise attributes.

### 17.1 Required Metadata Schema Specification
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "publisher": {
    "@type": "Organization",
    "name": "IDG - International Development Group",
    "url": "https://idg.global"
  },
  "isPartOf": {
    "@type": "Product",
    "name": "AI Gate Iraq",
    "productID": "PROD-001-AIGATE"
  },
  "identifier": "IDG-DOC-2026-AIGATE-SEC-01",
  "inLanguage": "en-US",
  "translationOfWork": "IDG-DOC-2026-AIGATE-SEC-01-AR",
  "datePublished": "2026-01-15T00:00:00Z",
  "dateModified": "2026-08-01T12:00:00Z",
  "securityClassification": "Public",
  "canonicalUrl": "https://aigate.iq/docs/security/framework"
}
```

---

## 18. URL Governance

URL structures follow strict, predictable formatting standards to ensure permanence and semantic clarity.

### 18.1 Standardized URL Rules
- All URLs must be lowercase, hyphen-separated, and enforce trailing slashes.
- Hostnames reflect entity level:
  - Parent Corporate: `https://idg.global/{section}/{page}/`
  - Product 001 (AI Gate Iraq): `https://aigate.iq/{section}/{page}/` or `https://idg.global/portfolio/ai-gate-iraq/{section}/`
- Versioning in URLs: API references and major software version docs MUST encode version keys (`/docs/v1.0/`, `/docs/v2.0/`).
- Query parameters are strictly forbidden for structural content navigation; parameters are restricted to search filtering and analytics tracking.

---

## 19. Future Expansion Rules

The architecture accommodates infinite future growth without altering core infrastructure.

### 19.1 Expansion Protocols
- **Adding Product 002+**:
  1. Register Product Metadata Key in the IDG Core Registry (`PROD-002-{SLUG}`).
  2. Provision regional or global domain (`{product-slug}.global` or `{product-slug}.idg.global`).
  3. Deploy standardized documentation and showcase templates using the IDG Enterprise UI Kit.
  4. Auto-generate corporate portfolio landing entry at `idg.global/portfolio/{product-slug}/`.
- **Adding New Business Units or Subsidiaries**:
  1. Assign subsidiary code (`SUB-{NUMBER}`).
  2. Create entry point at `idg.global/subsidiaries/{subsidiary-slug}/`.
  3. Map content team RACI roles within centralized identity provider.

---

## 20. Information Governance

Governance protocols define content approval workflows, audit schedules, and compliance enforcement.

### 20.1 Governance Schedule
- **Quarterly Audit**: Automated dead-link checking, canonical link verification, and outdated content flagging.
- **Annual Legal Review**: Mandatory review of all legal disclosures, privacy frameworks, and regional compliance attestations.
- **Deprecation Lifecycle**: Content marked for sunsetting MUST follow a 90-day redirection notice period using 301 permanent redirects to superceding resources.

---

## 21. Version Control

All web content assets and documentation code are managed under strict semantic version control.

### 21.1 Document Versioning Matrix
- **Major Releases (v1.0 -> v2.0)**: Structural changes, breaking API updates, major product redesigns. Requires formal architecture board sign-off.
- **Minor Releases (v1.1 -> v1.2)**: New feature guides, expanded solution pages, added documentation sections. Approved by Product Lead.
- **Patch Updates (v1.1.1 -> v1.1.2)**: Typo corrections, clarified wording, updated non-functional metadata. Auto-approved upon CI validation.

---

## 22. Content Lifecycle

Content progresses through five defined operational states during its deployment lifespan.

```
[Draft / Authoring]
       │
       ▼
[Internal Review & Compliance Audit]
       │
       ▼
[Published / Active Production]
       │
       ▼
[Archived / Read-Only Reference]
       │
       ▼
[Deprecated / Permanent 301 Redirect]
```

---

## 23. Enterprise Scalability Rules

To maintain high responsiveness under traffic spikes and multi-region deployment, the web ecosystem adheres to strict technical scalability boundaries.

### 23.1 Performance Metrics Rules
- **First Contentful Paint (FCP)**: Under 1.0 second globally via Edge caching.
- **Cumulative Layout Shift (CLS)**: Zero (0.0) layout shift across all page templates.
- **Asset Size Limits**: Maximum initial HTML payload size capped at 100 KB compressed; all non-critical assets deferred.
- **Edge Cache Hit Ratio Target**: > 98% hit ratio for static documentation and marketing resources.

---

## 24. AI Readiness

The information architecture is engineered natively for direct ingestion by Large Language Models (LLMs) and retrieval-augmented generation (RAG) agents.

### 24.1 AI Ingestion Directives
- **Markdown Mirrors**: Every HTML page automatically provides a raw Markdown equivalent accessible via `.md` suffix or `Accept: text/markdown` header.
- **Chunking Boundary Comments**: Pages embed explicit HTML comment boundary markers (`<!-- ai-chunk-start id="{chunk-id}" -->`) to guide RAG vector chunking algorithms.
- **Llms.txt Specification Compliance**: Provision of `/llms.txt` and `/llms-full.txt` at all domain roots indexing key core documents for automated LLM web crawlers.

---

## 25. Enterprise Knowledge Graph Preparation

All organizational entities, products, capabilities, and executive roles are represented in a semantic graph structure.

### 25.1 Entity-Relationship Schema Definition
- **Node Types**: `HoldingCompany`, `Subsidiary`, `Product`, `Capability`, `ComplianceFramework`, `Executive`, `GeographicRegion`.
- **Relationship Predicates**:
  - `IDG` -> `OWNS_PRODUCT` -> `AI Gate Iraq`
  - `AI Gate Iraq` -> `OPERATES_IN` -> `Iraq Regional Market`
  - `AI Gate Iraq` -> `COMPLIES_WITH` -> `IQ National Data Governance Directive`
  - `AI Gate Iraq` -> `HAS_CAPABILITY` -> `Sovereignty AI Processing`

---

## 26. Corporate Digital Ecosystem Mapping

The complete digital landscape interconnects parent corporate management with localized product operations.

```
                  +-----------------------------------+
                  |   IDG Corporate Holding Core      |
                  |          (idg.global)             |
                  +-----------------+-----------------+
                                    |
            +-----------------------+-----------------------+
            |                                               |
+-----------v-----------------------+   +-------------------v---------------+
|   Product 001: AI Gate Iraq       |   |   Future Product Units N+         |
|      (aigate.iq)                  |   |     ({product-slug}.global)       |
+-----------+-----------------------+   +-------------------+---------------+
            |                                               |
            +-----------------------+-----------------------+
                                    |
                  +-----------------v-----------------+
                  | Centralized Shared Infrastructure  |
                  | (Auth, Docs, API, Knowledge Core) |
                  +-----------------------------------+
```

---

## 27. Document Control

This document is governed by the IDG Enterprise Architecture Board and requires formal review for modifications.

### 27.1 Document Metadata Summary
- **Current Version**: 1.0.0
- **Effective Date**: 2026-08-07
- **Authoring Body**: IDG Enterprise Architecture Directorate
- **Approved By**: Chief Technology Officer & Corporate Legal Counsel
- **Review Cycle**: Annual or upon launch of new primary product entities
- **Repository Location**: `/website/information-architecture.md`
