# تەلارسازی ڕێکخراوەیی و دەسەڵاتەکان — Enterprise Organizational Architecture

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-CORP-ORG-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Enterprise Governance Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ARCH-2026-V1, IDG-SPEC-DOCGOV-2026-V1

---

# 1. مەبەست و بنەماکانی داڕشتنی ڕێکخراو — Purpose & Organizational Design Principles

This document establishes the organizational architecture, functional domains, governance hierarchy, decision rights, and accountability frameworks of Iraq Digital Gateway (IDG) without relying on specific individuals, ensuring enduring structural validity.

### بنەما بنەڕەتییەکان — Foundational Principles:
1. **ڕۆڵ-تەوەر لەبڕی کەس-تەوەر — Role-Based Architecture**: Authority, accountability, and permissions attach strictly to institutional roles, functional bodies, and charters.
2. **جیاکردنەوەی ئەرک و دەسەڵاتەکان — Strict Separation of Duties (SoD)**: Architectural governance, quality assurance, security auditing, and financial controllership operate independently from product delivery units.
3. **دەسەڵاتی بڕیاردانی ڕوون — Explicit Decision Rights (DACI Framework)**: Every architectural and operational decision must possess a defined Driver, Approver, Contributor, and Informed body.
4. **توانای گەشەکردنی بێ‌سنوور — Organizational Scalability**: The structure accommodates growth from Product 001 (`AI Gate Iraq`) to hundreds of product divisions (`Product 500+`) without restructuring corporate governance.

---

# 2. دۆمەینە کاراییە سەرەکییەکان — Functional Domains & Architecture

```
                               ┌───────────────────────────────────┐
                               │   دەستەی بەڕێوەبەرایەتی باڵا      │
                               │        BOARD OF DIRECTORS         │
                               └─────────────────┬─────────────────┘
                                                 │
                               ┌─────────────────▼─────────────────┐
                               │     ئەنجومەنی جێبەجێکاری باڵا     │
                               │        EXECUTIVE COUNCIL          │
                               └─────────────────┬─────────────────┘
                                                 │
          ┌───────────────────────┬──────────────┴────────┬───────────────────────┐
          ▼                       ▼                       ▼                       ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ تەلارسازی و تەکنەلۆجیا│   │بەرهەم و داهێنان   │   │  ئاسایش و پابەندی │   │ ئۆپەراسیۆن و کار  │
│  ARCHITECTURE &   │   │     PRODUCTS &    │   │     SECURITY &    │   │    OPERATIONS &   │
│    TECHNOLOGY     │   │     INNOVATION    │   │     COMPLIANCE    │   │     COMMERCIAL    │
└───────────────────┘   └───────────────────┘   └───────────────────┘   └───────────────────┘
```

### 1. دۆمەینی تەلارسازی و تەکنەلۆجیا — Architecture & Technology Domain
- ** بەرپرسیاریەتییە سەرەکییەکان — Core Responsibilities**: Enterprise Architecture Standards, Cloud Infrastructure, Platform APIs, Developer Tooling, CI/CD Gateways, Core Software Engineering.

### 2. دۆمەینی بەرهەم و داهێنان — Products & Innovation Domain
- ** بەرپرسیاریەتییە سەرەکییەکان — Core Responsibilities**: Product Line Discovery, Product 001 (`AI Gate Iraq`) Execution, Future Product Incubation (`Product 002+`), User Experience Architecture.

### 3. دۆمەینی ئاسایش و سەروەری دیجیتاڵی — Security & Governance Domain
- ** بەرپرسیاریەتییە سەرەکییەکان — Core Responsibilities**: Zero Trust Architecture, Sovereign Data Governance, Identity & Access Management (IAM), Cryptographic Controls, Auditability.

### 4. دۆمەینی ئۆپەراسیۆن و گەشەی بازرگانی — Operations & Commercial Domain
- ** بەرپرسیاریەتییە سەرەکییەکان — Core Responsibilities**: Strategic Partnerships, Legal & Corporate Governance, Financial Architecture, Enterprise Client Enablement.

---

# 3. ماتریسی مافەکانی بڕیاردان — Decision Rights Matrix (DACI)

| کایەی بڕیاردان — Decision Domain | لێخوڕ — Driver (D) | پەسەندکار — Approver (A) | بەشدار — Contributor (C) | ئاگادار — Informed (I) |
| :--- | :--- | :--- | :--- | :--- |
| **Enterprise Architecture Specs** | Lead Architect | Enterprise Architecture Council | Security, Product Leads | Executive Council |
| **New Product Approval** | Product Strategist | Executive Council | Tech, Security, Finance | All Domains |
| **Security & Privacy Policy** | Security Officer | Security & Risk Board | Legal, Tech Leads | All Personnel |
| **API Contract Breaking Changes** | API Domain Owner | Architecture Review Board | Product Engineers | Dependent Clients |
| **Data Schema Core Migrations** | Data Architect | Data Governance Board | Engineering, Ops | Product Teams |

---

# 4. گەشەپێدان و خولی ژیانی ڕێکخراو — Organizational Scalability & Lifecycle

When a new product unit is instantiated:
1. It inherits all Tier 1 IDG standards (Design Tokens, Components, API, Security, Localization, Data Mesh).
2. It operates with dedicated product management and engineering squads while reporting to centralized enterprise governance bodies.
3. Centralized shared services (Auth, Billing, Search, AI Gateways, Infra) are consumed via standard internal platform APIs without duplicating infrastructure.
