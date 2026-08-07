# Iraq Digital Gateway (IDG) Enterprise Deployment & Infrastructure Standard

## Document Identification
- **Document Identifier**: IDG-SPEC-DEPLOY-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Related Specifications**: IDG-SPEC-REPO-2026-V1, IDG-SPEC-DOCGOV-2026-V1, IDG-SPEC-IA-2026-V1, IDG-SPEC-NAV-2026-V1, IDG-SPEC-CTS-2026-V1, IDG-SPEC-SEO-2026-V1, IDG-SPEC-DS-2026-V1, IDG-SPEC-CMP-2026-V1
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon deployment of new cloud regions or sovereign datacenters

---

# 1. Deployment Philosophy & Core Principles

The Iraq Digital Gateway (IDG) Enterprise Deployment & Infrastructure Standard defines the architectural specifications, automated CI/CD deployment pipelines, multi-cloud hosting paradigms, zero-trust security postures, disaster recovery protocols, and observability standards governing all digital assets across the IDG enterprise ecosystem.

This specification serves as the permanent constitutional infrastructure standard across all IDG properties, including IDG Corporate Holding (`idg.global`), AI Gate Iraq (`aigate.iq`), future product domains (`Product 002+`), sovereign government platforms, and developer API gateways.

## 1.1 Fundamental Engineering Tenets
1. **Immutable Infrastructure as Code (IaC)**: Every server, container, networking rule, DNS record, firewall policy, and cloud service configuration MUST be declared declaratively using Terraform or OpenTofu within version-controlled repositories (`idg-infra-*`). Manual configuration in cloud web consoles is strictly prohibited.
2. **Zero-Downtime Continuous Deployment**: All production deployments MUST execute without service interruption, utilizing automated traffic shifting, health checks, canary verification, and instant rollback capabilities.
3. **Data Sovereignty & Regulatory Compliance**: Infrastructure topologies enforce strict regional residency bounds for citizen data, regulatory logs, and security credentials, ensuring full compliance with Iraqi sovereign data protection mandates and ISO/IEC 27001 standards.
4. **Shift-Left Security & Automated DevSecOps**: Security validation—including static analysis (SAST), software bill of materials (SBOM) scanning, secret leak detection, and container image vulnerability scans—is embedded directly into every deployment pipeline prior to artifact production.
5. **Bi-Directional CDN Edge Pre-Rendering**: Edge caching and delivery infrastructure are natively optimized to serve trilingual content (English, Arabic, Kurdish Sorani) with optical layout parity and sub-50ms latency across domestic Iraqi ISP networks and international transit hubs.

---

# 2. Environment Strategy & Separation Model

IDG mandates strict physical and logical isolation across seven discrete operational environments. Cross-environment credential reuse or direct data transfers between non-production and production zones are strictly prohibited.

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG ENTERPRISE ENVIRONMENT ISOLATION MATRIX                             │
└─────────────────────────────────────────────────────────────────────────┘
  ├── 1. Sandbox      (Local Developer Containers & Mock Services)
  ├── 2. Development  (Feature Branch Integration & Feature Flag Testing)
  ├── 3. Testing      (Automated Unit, Integration & API Test Runner)
  ├── 4. QA / UAT     (Quality Assurance & Trilingual UX Validation)
  ├── 5. Staging      (Production-Identical Replicated Environment)
  ├── 6. Production   (High-Availability Live Sovereign Operations)
  └── 7. Disaster Rec (Active-Passive Secondary Region Replication Node)
```

## 2.1 Detailed Environment Parameters

| Environment Name | Purpose & Operational Scope | Domain Naming Pattern | Database Isolation Tier | Deployment Trigger |
| :--- | :--- | :--- | :--- | :--- |
| **Sandbox** | Local engineer prototyping and experimental service testing. | `localhost` / `*.sandbox.idg.internal` | Local Docker container or synthetic mock | On-demand local execution |
| **Development (`dev`)** | Continuous integration of `feature/*` branches. | `dev.idg.global` / `dev.aigate.iq` | Shared development database with sanitized data | Push to `develop` branch |
| **Testing (`test`)** | Automated execution of automated integration test suites. | `test.idg.internal` | Ephemeral test database created per test run | Pull Request to `develop` |
| **QA / UAT (`qa`)** | Manual business acceptance, accessibility, and RTL validation. | `qa.idg.global` / `qa.aigate.iq` | Staging replica with anonymized sample records | Release candidate branch creation |
| **Staging (`stage`)** | Production-identical validation, load testing, security audits. | `stage.idg.global` / `stage.aigate.iq` | Read-only replica or staging DB instance | Pull Request to `main` |
| **Production (`prod`)** | Live multi-region sovereign business & application traffic. | `idg.global` / `aigate.iq` | High-availability multi-zone primary database cluster | Tagged merge to `main` branch |
| **Disaster Recovery (`dr`)** | Active-passive failover standby in secondary geographic region. | `dr.idg.global` / `dr.aigate.iq` | Asynchronous read-replica with auto-failover | Automated failover trigger |

---

# 3. Cloud Infrastructure Architecture

The IDG cloud architecture combines edge compute networks, containerized Cloud Run / Kubernetes runtimes, managed serverless backends, and sovereign private cloud nodes into a resilient hybrid multi-cloud mesh.

```
                         [ USER TRAFFIC ]
                                │
                                ▼
                   ┌──────────────────────────┐
                   │   Cloudflare Enterprise  │
                   │ (Anycast DNS / WAF / CDN)│
                   └────────────┬─────────────┘
                                │
             ┌──────────────────┴──────────────────┐
             │                                     │
             ▼                                     ▼
  ┌──────────────────────┐             ┌──────────────────────┐
  │ Google Cloud Platform│             │ Firebase Sovereign   │
  │  (Serverless / GCP)  │             │   (Data & Auth)      │
  │                      │             │                      │
  │ • Cloud Run (Node)   │             │ • Firestore Database │
  │ • Cloud SQL (Postgres│             │ • Firebase Auth      │
  │ • Vertex AI / Gemini │             │ • Cloud Storage      │
  └──────────────────────┘             └──────────────────────┘
```

## 3.1 Primary Infrastructure Providers

1. **Cloudflare Enterprise (Edge Layer)**: Handles global Anycast DNS resolution, Web Application Firewall (WAF) rule enforcement, DDoS mitigation, TLS 1.3 termination, Brotli compression, and static asset caching via edge workers.
2. **Google Cloud Platform (GCP) (Compute & AI Layer)**:
   - **GCP Cloud Run**: Containerized execution engine hosting API microservices, SSR web servers, and backend workers. Provides scale-to-zero efficiency and sub-second auto-scaling up to 1,000+ instances.
   - **GCP Cloud SQL**: Fully managed PostgreSQL relational database instances with high-availability regional failover and automated daily backups.
   - **Vertex AI / Gemini API Gateway**: Managed enterprise endpoints for Gemini AI model inference, RAG embeddings, and multi-agent orchestration.
3. **Firebase Enterprise (Identity & Persistent Storage Layer)**: Provides sovereign authentication management (Firebase Auth), real-time document persistence (Firestore), and secure object storage (Firebase Storage).
4. **Future Sovereign Kubernetes (GKE / On-Prem Sovereign Cloud)**: Dedicated private Kubernetes cluster infrastructure deployed within Iraqi sovereign datacenters for government workloads requiring air-gapped data isolation.

---

# 4. End-to-End Automated Deployment Pipeline

The IDG deployment pipeline automates the progression of code from a local developer environment to live production instances without manual intervention, governed by automated quality and security gates.

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG AUTOMATED CI/CD DEPLOYMENT PIPELINE STAGES                          │
└─────────────────────────────────────────────────────────────────────────┘
  [1. Local Commit] ──► [2. GitHub PR] ──► [3. CI Build & Test]
                                                  │
                                                  ▼
  [6. Prod Deploy]  ◄── [5. Security Scan] ◄── [4. Artifact Build]
         │
         ▼
  [7. Health Check] ──► [8. Traffic Shift] ──► [9. APM Monitoring]
```

## 4.1 Detailed Pipeline Execution Stages

1. **Developer Workstation**: Code authored locally, formatted via Prettier, linted via ESLint, and verified via local unit tests before committing.
2. **Version Control Integration (Git)**: Push to feature branch triggers automated pre-push gitleaks scan and Conventional Commit syntax validation.
3. **Pull Request Automation**: Creating a PR to `develop` or `main` automatically launches GitHub Actions workflow matrix.
4. **Continuous Integration (CI)**:
   - TypeScript type-checking (`tsc --noEmit`).
   - Unit and integration test execution with coverage enforcement (>85%).
   - Bi-directional i18n translation validation.
5. **Automated Security Scanning (DevSecOps)**:
   - Static Application Security Testing (SAST) via CodeQL.
   - Dependency vulnerability scanning via Snyk / Dependabot.
   - Container Image Vulnerability Scanning via Trivy / GCP Artifact Registry Analysis.
6. **Container & Artifact Compilation**: Docker container image built using multi-stage Dockerfiles, tagged with git commit SHA and semantic version, and pushed to GCP Artifact Registry.
7. **Staging Verification**: Automated deployment to Staging environment followed by Playwright E2E smoke test suite execution.
8. **Production Progressive Release**: Immutable container deployed to Cloud Run or GKE cluster using traffic splitting (Canary 10% -> 50% -> 100%).
9. **Automated Rollback & Monitoring**: Real-time error rate and latency monitoring via Datadog / Cloud Monitoring. If 5xx error rates exceed 0.5% during canary rollout, traffic automatically reverts to previous container revision in under 5 seconds.

---

# 5. Infrastructure Layer Architecture Specifications

IDG infrastructure is organized into ten distinct operational layers:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG TEN-LAYER INFRASTRUCTURE ARCHITECTURE                               │
└─────────────────────────────────────────────────────────────────────────┘
   Layer 1: Global Anycast DNS & Edge Network (Cloudflare Enterprise)
   Layer 2: Web Application Firewall (WAF) & DDoS Mitigation Layer
   Layer 3: Edge Content Delivery Network (CDN) & Static Asset Caching
   Layer 4: API Management & Ingress Gateway (Cloud Run / NGINX)
   Layer 5: Compute & Serverless Microservices (Node.js / Express / Docker)
   Layer 6: Persistence & Relational Databases (Cloud SQL / Firestore)
   Layer 7: Enterprise Identity & OAuth Provider (Firebase Auth / OIDC)
   Layer 8: AI & Vertex Engine Services (Gemini 1.5 Pro / Flash APIs)
   Layer 9: Observability, Logging & Telemetry (Cloud Logging / Datadog)
   Layer 10: Secrets Management & KMS (GCP Secret Manager / HashiCorp Vault)
```

---

# 6. Infrastructure Topography & Network Diagram (ASCII)

```
                            +--------------------------+
                            |     Global Internet      |
                            +------------+-------------+
                                         |
                                         v
                            +--------------------------+
                            |   Cloudflare Edge CDN    |
                            | Anycast DNS / TLS 1.3 /  |
                            | WAF / DDoS Mitigation    |
                            +------------+-------------+
                                         |
               +-------------------------+-------------------------+
               | (Static Web Assets)                               | (API & Dynamic Traffic)
               v                                                   v
+------------------------------+                  +------------------------------+
| Cloudflare Pages / Hosting   |                  | GCP Cloud Run Ingress        |
| Static Assets, HTML, JS, CSS |                  | Reverse Proxy & TLS Handler  |
+------------------------------+                  +--------------+---------------+
                                                                 |
                                                                 v
                                                  +------------------------------+
                                                  | Node.js Express API Server   |
                                                  | Port 3000 Container          |
                                                  +--------------+---------------+
                                                                 |
         +-------------------------------------------------------+-------------------------------------------------------+
         |                                                       |                                                       |
         v                                                       v                                                       v
+--------------------------------+              +--------------------------------+              +--------------------------------+
| GCP Cloud SQL (PostgreSQL)     |              | Firebase Firestore & Auth      |              | GCP Vertex AI Gateway          |
| Multi-AZ Primary + Read Replica|              | Document DB & User Storage     |              | Gemini Model APIs & Agents     |
+--------------------------------+              +--------------------------------+              +--------------------------------+
```

---

# 7. High Availability, Backup & Disaster Recovery Strategy

## 7.1 High Availability (HA) Target Parameters
- **Target Uptime SLA**: **99.95%** availability across all public and customer-facing endpoints (maximum allowable unplanned downtime: 21.9 minutes per month).
- **Multi-Zone Redundancy**: All Cloud Run compute containers and Cloud SQL database instances span a minimum of three distinct GCP Availability Zones within the primary regional location (`europe-west2` / `me-central1`).

## 7.2 Backup Frequency & Retention Matrix

| Infrastructure Asset | Backup Mechanism | Backup Frequency | RPO Target (Max Data Loss) | RTO Target (Max Recovery Time) | Retention Window |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cloud SQL (PostgreSQL)** | Automated WAL Point-in-Time | Continuous WAL + Daily Snapshot | < 5 Minutes | < 15 Minutes | 30 Days Continuous |
| **Firestore Document DB** | GCP Managed Export to GCS | Every 6 Hours | < 6 Hours | < 30 Minutes | 90 Days Rolling |
| **Firebase Storage Objects** | Multi-Region Bucket Replication | Real-time Synchronous | < 1 Second | < 5 Minutes | Indefinite / Policy-Based |
| **Terraform IaC State** | Versioned GCS Bucket with Object Locking | Upon every `terraform apply` | 0 Seconds (Versioned) | < 5 Minutes | Permanent Version History |

## 7.3 Disaster Recovery (DR) Protocols
In the event of a catastrophic regional cloud failure, automated failover DNS policies redirect traffic to the secondary passive region in under 60 seconds:
1. Cloudflare health check detects primary region unresponsiveness (3 consecutive failed health probes over 15 seconds).
2. Cloudflare Anycast DNS updates origin IP routing to secondary DR region (`me-central1` or designated secondary cloud zone).
3. Cloud SQL standby read-replica promotes to primary write-capable database instance via automated GCP failover controller.
4. SRE on-call team receives PagerDuty high-priority notification and opens Incident Command War Room.

---

# 8. Infrastructure Security & Secrets Governance

## 8.1 Zero-Trust Network Architecture
1. **No Public Database Access**: Cloud SQL instances operate strictly inside private VPC networks with public IP access disabled. All server connections traverse Private Service Connect (PSC) tunnels.
2. **Container Non-Root Execution**: Docker containers run as unprivileged non-root service users (`USER node` / `uid 10001`). Root container execution is strictly forbidden.
3. **Mutual TLS (mTLS) Internal Communication**: Service-to-service internal calls enforce mTLS encryption with automated certificate rotation.

## 8.2 Secrets Management Policy
- **GCP Secret Manager**: All API keys, database credentials, OAuth client secrets, and private keys MUST be injected into container runtimes at launch from GCP Secret Manager via environment variable bindings.
- **Strict Ban on Hardcoded Credentials**: Source code repositories MUST NOT contain hardcoded secrets or environment file defaults. Continuous CI/CD secret scanning automatically revokes any exposed credentials.

---

# 9. Domain Routing & Network Topography

Domain routing across IDG digital properties follows a strict regional hierarchy managed via Cloudflare Anycast DNS:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG ENTERPRISE DOMAIN ROUTING MAP                                       │
└─────────────────────────────────────────────────────────────────────────┘
  ├── idg.global                  # Corporate Holding Main Portal
  ├── www.idg.global              # CNAME -> idg.global
  ├── api.idg.global              # Holding Central API Gateway
  ├── docs.idg.global             # Enterprise Architecture Documentation Portal
  ├── aigate.iq                   # Product 001 (AI Gate Iraq) Primary Portal
  ├── www.aigate.iq               # CNAME -> aigate.iq
  ├── api.aigate.iq               # Product 001 Microservices API Engine
  ├── app.aigate.iq               # Customer Web Application Dashboard
  ├── gov.aigate.iq               # Sovereign Government Exchange Portal
  └── dev.aigate.iq               # Non-Production Staging & Integration Node
```

---

# 10. Observability, Monitoring & Incident Management

IDG enforces the **Four Golden Signals** of SRE monitoring across all deployment targets:

1. **Latency**: Time required to service a request (Target: < 200ms p95 for web pages; < 100ms p95 for API endpoints).
2. **Traffic**: Volume of demand placed on system endpoints (Requests Per Second - RPS).
3. **Errors**: Rate of requests that fail with 5xx or unhandled 4xx status codes (Target: < 0.05% total request volume).
4. **Saturation**: Utilization depth of constrained system resources (CPU % utilization, Memory MB, DB Connection pool depth).

## 10.1 Monitoring & Alerting Matrix

| Alert Level | Trigger Condition | Notification Channel | Response SLA | Action Required |
| :--- | :--- | :--- | :--- | :--- |
| **P1 - Critical** | Service outage (>2% error rate) or DB failover | PagerDuty SMS + Call to On-Call SRE | < 5 Minutes | Immediate War Room creation & active triage |
| **P2 - Major** | Increased latency (p95 > 1000ms for 5m) | Slack `#alerts-critical` + PagerDuty | < 15 Minutes | Investigate resource scaling & connection pools |
| **P3 - Minor** | Non-critical background worker queue delay | Slack `#alerts-warning` | < 2 Hours | Review logs & queue worker capacity |
| **P4 - Info** | Deployment completed or backup snapshot created | Datadog Event Feed / Audit Log | N/A | Informational logging only |

---

# 11. Progressive Release Strategies & Rollback Controls

Production releases MUST utilize one of three approved deployment strategies:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ IDG PRODUCTION RELEASE STRATEGIES                                       │
└─────────────────────────────────────────────────────────────────────────┘
  1. Canary Deployment   (10% -> 25% -> 50% -> 100% Traffic Progression)
  2. Blue/Green Deployment(Instant Switching between Parallel Environments)
  3. Emergency Hotfix    (Rapid Automated Patch Pipeline with Post-Audit)
```

## 11.1 Canary Release Progression Rules
1. **Initial Deployment**: New revision deployed alongside existing revision receiving **10% of live production traffic**.
2. **Automated Analysis Window**: System monitors error rates, latency spikes, and APM metrics for 15 minutes.
3. **Traffic Increments**: If metric baselines remain healthy, traffic shifts automatically to **25%**, then **50%**, then **100%** over a 60-minute window.
4. **Automated Rollback**: Any 5xx error rate anomaly (> 0.5%) triggers an instant, zero-downtime traffic reversion to the previous stable revision revision in < 5 seconds.

---

# 12. Multilingual & RTL Deployment Considerations

The deployment infrastructure natively supports trilingual content delivery across English (`en`), Arabic (`ar`), and Kurdish Sorani (`ckb`):

1. **Edge Localization Routing**: Cloudflare Edge Workers analyze incoming HTTP `Accept-Language` headers and geographic IP locations to route requests to appropriate localized static caches.
2. **Font & Asset Pre-rendering**: Trilingual web fonts (Noto Sans Arabic, Plus Jakarta Sans) are pre-loaded and cached at Cloudflare edge nodes with `Cache-Control: public, max-age=31536000, immutable` headers to eliminate layout shifts (CLS) on low-bandwidth networks.
3. **RTL Cache Key Isolation**: Edge caches maintain separate cache keys for LTR (`dir="ltr"`) and RTL (`dir="rtl"`) rendered HTML views to prevent cross-language layout bleed.

---

# 13. Infrastructure Governance & FinOps Controls

1. **Automated Cost Anomaly Detection**: GCP Billing alerts trigger automated Slack notifications if daily infrastructure expenditure exceeds projected budget thresholds by > 15%.
2. **Auto-Scaling Resource Limits**: Cloud Run services enforce strict `max-instances` caps to prevent runaway scaling during DDoS attacks or viral traffic spikes.
3. **Resource Tagging Standard**: Every cloud resource MUST be tagged with mandatory metadata attributes:
   `environment` (`prod` | `stage` | `dev`), `product` (`idg-corp` | `aigate` | `p002`), `owner` (`infra-team`), `cost-center` (`eng-001`).

---

# 14. Document Control & Compliance Summary

- **Document Identifier**: IDG-SPEC-DEPLOY-2026-V1
- **Current Version**: 1.0.0
- **Document Owner**: IDG Enterprise Infrastructure & Platform Architecture Board
- **Approved By**: Chief Technology Officer & Principal DevOps Architect
- **ISO / Regulatory Alignment**: ISO/IEC 27001:2022 (Control A.8.9 Configuration Management) & SOC 2 Type II
- **Status**: Production Approved
- **Review Cycle**: Annual mandatory audit
- **Repository Location**: `/technical/deployment.md`

---
# End of Document
