# Iraq Digital Gateway (IDG) Enterprise Repository Structure Standard

## Document Identification
- **Document Identifier**: IDG-SPEC-REPO-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Related Specifications**: IDG-SPEC-DOCGOV-2026-V1, IDG-SPEC-IA-2026-V1, IDG-SPEC-NAV-2026-V1, IDG-SPEC-CTS-2026-V1, IDG-SPEC-SEO-2026-V1, IDG-SPEC-DS-2026-V1, IDG-SPEC-CMP-2026-V1
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon deployment of new corporate product lines

---

# 1. Executive Summary & Vision

The Iraq Digital Gateway (IDG) Enterprise Repository Structure Standard defines the mandatory topology, naming taxonomy, directory hierarchy, branching model, commit protocols, security gates, and CI/CD automation rules governing all version-controlled code repositories within the IDG GitHub Enterprise organization.

As IDG expands its software footprint across holding corporate assets, AI Gate Iraq (Product 001), future product domains (`Product 002+` through `Product 500+`), sovereign government platforms, and developer SDK ecosystems, this specification guarantees structural uniformity, zero-drift security enforcement, seamless engineer onboarding, automated compliance auditing, and friction-free monorepo and polyrepo scalability over a 10-year horizon.

---

# 2. Constitutional Repository Principles

1. **Deterministic Uniformity**: Every repository created under the IDG GitHub Enterprise umbrella MUST conform strictly to standard folder structures, mandatory metadata files, and branch protection configurations. No engineer or team may create custom repository layouts without an approved RFC amendment to this specification.
2. **Security by Isolation and Least Privilege**: Repositories enforce strict role-based access control (RBAC), multi-party review mandates, automated secret detection, and explicit visibility boundaries (Public, Internal, Confidential, Restricted).
3. **Automated Governance Compliance**: Repository settings, branch policies, CODEOWNERS assignments, and CI/CD quality gates are continuously audited and enforced via automated GitOps repository management scripts.
4. **Trilingual Documentation Parity**: All repository documentation (README files, architecture blueprints, contribution guidelines) MUST maintain first-class localized mirrors for English (`en`), Arabic (`ar`), and Kurdish Sorani (`ckb`).
5. **Immutable Semantic Lineage**: Release tags, release notes, commit messages, and version numbers follow strict mechanical standards to enable automated changelog generation and auditability.

---

# 3. Enterprise Repository Taxonomies & Categories

To manage hundreds to thousands of repositories efficiently, IDG categorizes every repository into one of fifteen functional domains:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG GITHUB ENTERPRISE ORGANIZATION TAXONOMY                            │
└─────────────────────────────────────────────────────────────────────────┘
  ├── Corporate Repositories      (Prefix: idg-corp-*)
  ├── Product Repositories        (Prefix: agi-* for Product 001, idg-p002-*)
  ├── Infrastructure & Cloud      (Prefix: idg-infra-*)
  ├── Core Documentation          (Prefix: idg-docs-*)
  ├── Shared Enterprise Libraries (Prefix: idg-lib-*)
  ├── Design System & UI          (Prefix: idg-ds-*)
  ├── Internal Enterprise Tools   (Prefix: idg-tool-*)
  ├── AI & Machine Learning       (Prefix: idg-ai-*)
  ├── Developer SDKs              (Prefix: idg-sdk-*)
  ├── API Gateway & Microservices (Prefix: idg-api-*)
  ├── Sovereign Government Portals(Prefix: idg-gov-*)
  ├── Open Source Public Projects (Prefix: idg-oss-*)
  ├── Research & Innovation Labs  (Prefix: idg-lab-*)
  ├── Partner Integration Portals (Prefix: idg-partner-*)
  └── Archive & Legacy            (Prefix: idg-archive-*)
```

## 3.1 Detailed Domain Matrix

| Category Domain | Description & Operational Scope | Prefix Pattern | Access Visibility Tier |
| :--- | :--- | :--- | :--- |
| **Corporate** | Main corporate web portals, holding dashboards, investor relations. | `idg-corp-*` | Internal / Public |
| **Product 001 (AI Gate)** | Core platforms, AI dashboards, sovereign portals for AI Gate Iraq. | `agi-*` | Internal / Confidential |
| **Future Products** | Scalable portfolio products (`Product 002` through `Product 500+`). | `idg-p[NUM]-*` | Confidential / Restricted |
| **Infrastructure** | Terraform, Kubernetes manifests, Cloud Run containers, IAM, CI/CD. | `idg-infra-*` | Restricted |
| **Documentation** | Architectural specifications, security policies, governance specs. | `idg-docs-*` | Internal / Public |
| **Shared Libraries** | Common utility modules, database connectors, crypto helpers. | `idg-lib-*` | Internal |
| **Design System** | Design tokens, React component libraries, Tailwind presets, icons. | `idg-ds-*` | Internal / Public |
| **Internal Tools** | Operations dashboards, telemetry aggregators, deployment CLI tools. | `idg-tool-*` | Internal |
| **AI Services** | LLM orchestrators, Gemini API wrappers, vector DB pipelines. | `idg-ai-*` | Confidential |
| **Developer SDKs** | Client libraries for JavaScript/TypeScript, Python, Go, Android. | `idg-sdk-*` | Public / Internal |
| **API Services** | Microservice backends, REST endpoints, gRPC interfaces, GraphQL schemas. | `idg-api-*` | Confidential |
| **Sovereign Gov** | Government data portals, official ministry integrations, sovereign clouds. | `idg-gov-*` | Restricted |
| **Open Source** | Public open-source tools, developer utilities, public standards. | `idg-oss-*` | Public |
| **Research & Labs** | Experimental prototypes, benchmark suites, R&D exploratory code. | `idg-lab-*` | Internal |
| **Archive** | Read-only retired repositories retained for audit compliance. | `idg-archive-*` | Internal / Restricted |

---

# 4. Standardized Repository Naming Conventions

All repository names MUST be strictly lowercase, alphanumeric, with hyphens (`-`) separating semantic tokens. Spaces, underscores, camelCase, or special characters are strictly prohibited.

## 4.1 Canonical Repository Naming Examples

- `idg-docs`: Master Enterprise Architectural Specifications repository.
- `idg-corp-website`: IDG Holding Corporate Web Portal (`idg.global`).
- `idg-ds-tokens`: Enterprise Design Tokens & Style System (`@idg/design-tokens`).
- `idg-ds-components`: Enterprise React Component Library (`@idg/components`).
- `idg-infra-terraform`: Production Cloud Infrastructure as Code (Terraform/OpenTofu).
- `idg-infra-k8s`: Production Sovereign Kubernetes Cluster Declarations.
- `idg-api-gateway`: Enterprise Central API Management & Routing Gateway.
- `idg-auth-service`: Centralized Identity & OAuth2 Provider Service.
- `idg-ai-orchestrator`: Enterprise Multi-Agent Gemini Orchestration Engine.
- `idg-sdk-js`: Official Client Software Development Kit for JavaScript/TypeScript.
- `idg-sdk-python`: Official Client Software Development Kit for Python.
- `idg-gov-portal`: Sovereign Iraqi Government Data Exchange Portal.
- `agi-platform-web`: Primary Web Dashboard for AI Gate Iraq (`aigate.iq`).
- `agi-api-backend`: Primary Microservices Engine for AI Gate Iraq.
- `agi-mobile-app`: Cross-Platform Mobile Application for AI Gate Iraq.

---

# 5. Internal Directory & Folder Standards

Repositories must adopt a standardized directory structure depending on whether they are structured as Single Application Repositories (Polyrepo) or Monorepos.

## 5.1 Standard Application Repository Topology (Polyrepo)

```
/ (Repository Root)
├── .github/                      # GitHub Configuration & Workflows
│   ├── CODEOWNERS                # Mandatory Code Ownership Assignment
│   ├── ISSUE_TEMPLATE/           # Standardized Issue Forms
│   │   ├── bug_report.yml
│   │   └── feature_request.yml
│   ├── PULL_REQUEST_TEMPLATE.md  # Standardized Pull Request Checklist
│   └── workflows/                # CI/CD GitHub Actions Automation
│       ├── ci-pipeline.yml       # Build, Lint, Test Automation
│       ├── security-scan.yml     # SAST, Secret & Dependency Scanner
│       └── release.yml           # Semantic Tagging & Artifact Deploy
├── docs/                         # Technical Architecture & API Documentation
│   ├── ARCHITECTURE.md           # System Blueprint & Topology Diagrams
│   ├── DEPLOYMENT.md             # Operational Runbooks & Deployment Guides
│   ├── API.md                    # Interface Specifications & Endpoints
│   └── i18n/                     # Trilingual Documentation Mirrors
│       ├── ar/                   # Arabic Documentation
│       └── ckb/                  # Kurdish Sorani Documentation
├── src/                          # Application Source Code
│   ├── assets/                   # Static Media, Fonts, Images
│   ├── components/               # React / UI Components
│   ├── config/                   # Application Runtime Configuration
│   ├── controllers/              # API Route Controllers & Handlers
│   ├── database/                 # ORM Schemas, Migrations, Seeds
│   ├── middleware/               # Auth, Logging, Validation Middleware
│   ├── services/                 # Business Logic & External Service Clients
│   ├── types/                    # TypeScript Interface & Type Definitions
│   └── utils/                    # Shared Helper Functions
├── tests/                        # Comprehensive Test Suites
│   ├── unit/                     # Unit Tests (*.spec.ts)
│   ├── integration/              # Integration & API Tests
│   └── e2e/                      # End-to-End Playwright / Cypress Tests
├── scripts/                      # DevOps & Build Automation Scripts
│   ├── build.sh
│   ├── migrate.sh
│   └── seed.sh
├── infrastructure/               # IaC Manifests (Dockerfile, Helm, Terraform)
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── terraform/
├── public/                       # Static Public Web Assets
├── .env.example                  # Mandatory Environment Variable Blueprint
├── .gitignore                    # Universal Git Ignore Patterns
├── .prettierrc                   # Code Formatting Configuration
├── .eslintrc.json                # Code Linting Configuration
├── README.md                     # Primary Repository Overview (Trilingual)
├── CHANGELOG.md                  # Semantic Version Change History
├── CONTRIBUTING.md               # Developer Onboarding & Workflow Rules
├── LICENSE                       # Enterprise Legal License
├── SECURITY.md                   # Vulnerability Reporting Policy
└── package.json                  # Dependencies & Execution Scripts
```

## 5.2 Enterprise Monorepo Topology (Lerna / Turborepo / Nx)

For multi-package repositories (such as the Design System or Multi-Service Backends), the repository MUST organize source code under explicit `/apps/` and `/packages/` directories:

```
/ (Monorepo Root)
├── .github/                      # Central GitHub Workflows & CODEOWNERS
├── apps/                         # Executable Deployable Applications
│   ├── web-corp/                 # Corporate Holding Web Application
│   ├── web-aigate/               # AI Gate Iraq Web Application
│   └── admin-portal/             # Enterprise Administration Dashboard
├── packages/                     # Shared Internal Modular Libraries
│   ├── design-tokens/            # CSS & JSON Design System Tokens
│   ├── ui-components/            # Shared React UI Component Library
│   ├── database-client/          # Shared Database Connection Client
│   ├── auth-sdk/                 # OAuth2 & JWT Verification Library
│   └── logger/                   # Structured Telemetry Logger
├── docs/                         # Centralized Monorepo Architecture Docs
├── turbo.json / lerna.json       # Monorepo Orchestration Configuration
└── package.json                  # Root Monorepo Package Definition
```

---

# 6. Branching Strategy & Workflow Rules

IDG enforces a strict variant of GitFlow optimized for Continuous Integration and Continuous Deployment (CI/CD):

```
                                  [hotfix/*]
                                      │
                                      ▼
[main] ───────────────────────────► (TAG v1.1.1) ──────────────────────► [main] (Production)
  ▲                                   ▲
  │                                   │ (Merge Release)
[release/v1.1.0] ◄────────────────────┴────────────────────────────────
  ▲
  │ (Staging Verification)
[develop] ─────────────────────────────────────────────────────────────► [develop] (Integration)
  ▲                       ▲                       ▲
  │                       │                       │
[feature/IDG-101]      [bugfix/IDG-204]        [security/IDG-305]
```

## 6.1 Standard Branch Naming & Purpose Matrix

| Branch Pattern | Parent Branch | Target Merge | Purpose & Operational Rules |
| :--- | :--- | :--- | :--- |
| **`main`** | N/A | Production | **Protected**. Production-ready code only. Direct commits strictly prohibited. Tags trigger Cloud Run deployments. |
| **`develop`** | `main` | `main` via Release | **Protected**. Active integration branch. All feature branches merge here via approved PRs. |
| **`feature/*`** | `develop` | `develop` | Individual feature work. Name pattern: `feature/[TICKET_ID]-[short-description]` (e.g., `feature/IDG-102-oauth-sso`). |
| **`bugfix/*`** | `develop` | `develop` | Non-critical bug repairs. Name pattern: `bugfix/[TICKET_ID]-[short-description]`. |
| **`release/*`** | `develop` | `main` & `develop` | Release candidate preparation. Name pattern: `release/v[MAJOR].[MINOR].[PATCH]`. |
| **`hotfix/*`** | `main` | `main` & `develop` | Urgent production issue repairs. Name pattern: `hotfix/[TICKET_ID]-[short-description]`. |
| **`security/*`** | `main` or `develop` | `main` & `develop` | Security vulnerability patches. Name pattern: `security/[CVE_ID]-[description]`. |
| **`docs/*`** | `develop` | `develop` | Pure documentation updates. Name pattern: `docs/[description]`. |

---

# 7. Commit Message Standards (Conventional Commits)

All commits in IDG repositories MUST conform strictly to the **Conventional Commits v1.0.0** specification. Automated git hooks enforce commit syntax prior to accepting commits.

## 7.1 Commit Message Format Syntax

```
<type>(<scope>): <short summary in imperative mood>

[optional body giving detailed justification for changes]

[optional footer(s) referencing issue tickets or breaking changes]
```

## 7.2 Approved Commit Types

- **`feat`**: A new user-facing feature or API capability. Triggers a MINOR version bump.
- **`fix`**: A bug repair or patch. Triggers a PATCH version bump.
- **`docs`**: Documentation changes only (README, specifications, inline comments).
- **`style`**: Code formatting, whitespace, or semi-colon updates with zero logic alteration.
- **`refactor`**: Code restructuring that neither fixes a bug nor adds a feature.
- **`perf`**: A code change that improves execution speed, memory footprint, or query efficiency.
- **`test`**: Adding missing unit tests or refactoring existing test cases.
- **`build`**: Changes that affect the build system or external dependencies (`package.json`, Dockerfile).
- **`ci`**: Changes to CI/CD workflows and automation scripts (`.github/workflows/`).
- **`chore`**: Maintenance tasks, repository housekeeping, or configuration updates.
- **`security`**: Vulnerability patches, dependency updates for CVEs, or security hardening.

## 7.3 Valid Commit Examples

```bash
# Example 1: New Feature
feat(auth): add OAuth2 login support for Iraqi National Digital ID

# Example 2: Bug Fix
fix(ui): resolve text clipping in Arabic RTL layout for metric cards

# Example 3: Documentation
docs(api): update OpenAPI spec for Product 001 endpoints

# Example 4: Breaking Change
feat(gateway)!: migrate primary API gateway to gRPC transport

BREAKING CHANGE: REST endpoints on /v1/data are deprecated and replaced by gRPC services.
```

---

# 8. GitHub Enterprise Administration & Security Controls

Every repository created within the IDG organization MUST adhere to mandatory GitHub administration rules enforced by organizational policies.

## 8.1 Mandatory Branch Protection Rules (`main` and `develop`)
- **Require Pull Request Reviews**: Minimum of **2 approved reviews** from designated CODEOWNERS prior to merging.
- **Dismiss Stale Pull Request Approvals**: Approvals are automatically reset whenever new commits are pushed to the source branch.
- **Require Status Checks to Pass**:
  - `ci/build`: Build compilation must succeed without warnings.
  - `ci/lint`: Code formatting and ESLint/Prettier checks must pass cleanly.
  - `ci/test`: 100% of unit and integration test suites must pass.
  - `security/sast`: Static Application Security Testing (CodeQL / SonarQube) must report zero critical or high vulnerabilities.
  - `security/secrets`: Secret scanner must report zero exposed keys or tokens.
- **Require Signed Commits**: All commits MUST be cryptographically signed using GPG or SSH keys.
- **Linear History Requirement**: Force pushes and branch deletions are permanently disabled. Merges must occur via `Squash and Merge` or `Rebase and Merge`.

## 8.2 Code Ownership Assignment (`.github/CODEOWNERS`)
Every repository MUST include a `.github/CODEOWNERS` file assigning explicit team accountability across repository paths:

```ini
# Global Default Owners
* @idg-enterprise/architecture-board @idg-enterprise/lead-maintainers

# Security & Infrastructure Manifests
/infrastructure/ @idg-enterprise/secops-team @idg-enterprise/devops-leads
/.github/workflows/ @idg-enterprise/devops-leads

# Architectural Documentation
/docs/ @idg-enterprise/documentation-board

# Frontend & Design Systems
/src/components/ @idg-enterprise/frontend-leads
```

---

# 9. Mandatory Baseline Repository Files

Every IDG repository MUST contain the following six standardized governance files at the repository root:

1. **`README.md`**: Primary repository blueprint containing:
   - Official Project Title & Identification (`IDG-REPO-[NAME]`).
   - Executive Purpose & Architecture Overview.
   - Trilingual Navigation Links (`English` | `العربية` | `کوردی`).
   - Prerequisites & Local Development Setup Instructions.
   - Build, Test, and Deployment Command Execution Triggers.
2. **`CHANGELOG.md`**: Automatically generated semantic release notes grouped by version (`v1.0.0`, `v1.1.0`).
3. **`CONTRIBUTING.md`**: Guidelines for branching, commit formatting, local testing, and Pull Request submission workflows.
4. **`LICENSE`**: Enterprise Legal License statement (Proprietary IDG Enterprise License or approved Open Source License).
5. **`SECURITY.md`**: Vulnerability disclosure policy detailing response SLAs, security contact emails (`security@idg.global`), and PGP encryption keys.
6. **`CODE_OF_CONDUCT.md`**: Professional workplace and contribution code of conduct.

---

# 10. Automated CI/CD Pipeline Standards

Every repository MUST deploy GitHub Actions workflows executing four standardized automation pipelines:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ AUTOMATED GITHUB ACTIONS CI/CD PIPELINE                                 │
└─────────────────────────────────────────────────────────────────────────┘
  ├── 1. Validation Stage : Linting, Formatting, Typecheck, Dependency Scan
  ├── 2. Security Stage   : Secret Leak Check, CodeQL SAST, Container Scan
  ├── 3. Testing Stage    : Unit Tests, Integration Tests, Coverage Metrics
  └── 4. Deployment Stage : Build Artifacts, Push Container, Cloud Run Deploy
```

---

# 11. Repository Lifecycle Management

Repositories progress through five managed lifecycle states:

```
[1. Planning] ──► [2. Active] ──► [3. Maintenance] ──► [4. Deprecated] ──► [5. Archived]
```

1. **Planning**: Initial setup state. Repository is private, undergoing initial architecture definition.
2. **Active**: Primary development state. Active feature work, daily commits, CI/CD automated deployments.
3. **Maintenance**: Stable, production-supported state. Receives bug fixes, security updates, and dependency patches.
4. **Deprecated**: Superseded by a newer repository or platform module. Read-only for feature development; security patches only.
5. **Archived**: Read-only permanent state. Repository is locked against all modifications and retained for regulatory audit compliance.

---

# 12. Security & Secret Leak Prevention

1. **Zero Secret Hardcoding**: API keys, credentials, private certificates, and database passwords MUST NEVER be committed to version control.
2. **Pre-Commit Secret Scanning**: Local git hooks run `gitleaks` or `trufflehog` prior to committing.
3. **Automated Secret Revocation**: If a secret is accidentally pushed to any remote branch, GitHub Secret Scanning automatically revokes the credential and notifies the IDG Security Operations Center (SecOps) instantly.

---

# 13. Scalability Governance (100 to 1000+ Repositories)

To manage hundreds of repositories without operational overhead, IDG utilizes automated organizational management scripts:

- **Terraform GitHub Provider**: All repositories, teams, permissions, and branch protection rules are declared as Infrastructure as Code in `idg-infra-github`.
- **Global Health Audit Scanners**: Nightly cron jobs audit all 500+ repositories for missing baseline files, outdated dependencies, or unaligned branch protection rules.

---

# 14. Document Control & Audit Compliance

- **Document Identifier**: IDG-SPEC-REPO-2026-V1
- **Current Version**: 1.0.0
- **Document Owner**: IDG Enterprise Architecture & DevOps Governance Board
- **Approved By**: Chief Technology Officer & Head of Infrastructure Engineering
- **ISO Alignment**: ISO/IEC 27001:2022 (Control A.8.28 Secure Coding) & ISO 9001:2015
- **Status**: Production Approved
- **Review Cycle**: Annual mandatory audit
- **Repository Location**: `/technical/repository-structure.md`

---
# End of Document
